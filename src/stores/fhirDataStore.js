import patientStore from './patientDataStore';
import moment from 'moment';

const mkFhir = require("fhir.js");

const PAGE_SIZE = 1000;

const LHC_FHIR_SERVER = {
  name: "LHC Internal FHIR Server #2", 
  desc: "Internal FHIR server at LHC, for dev/test only",
  
  url: "https://lforms-fhir.nlm.nih.gov/baseR4"
  //url: "https://lforms-fhir.nlm.nih.gov/baseDstu3"
};

class FhirDataStore {

  fhirServerConfig = LHC_FHIR_SERVER;
  pageSize = PAGE_SIZE;

  _cacheSize = 1; // not including the current page (fhir) data being displayed

  // moreData = false; // to remove
  // resourceRetrieved = 0;  // over all obx retrieved
  // resourceAvailable = 0;

  _nextPageUrl = null;

  _fhirClient = null;

  _obxSearchSet = {
    searchSet: null,
    hasMoreData: false,
    nextPageUrl: null,
    retrievedNumOfRes: 0,
    availableNumOfRes: 0
  };

  _obxSearchSetCache = [];

  _obxQueryDone = true;

  _addToCache(data) {
    this._obxSearchSetCache.unshift(data);
  }

  _getFromCache() {
    return this._obxSearchSetCache.pop()
  }


  constructor(serverConfig) {
    if (serverConfig) {
      this.setFhirServerConfig = serverConfig;
    }
    this._setupFhirClient();
    
  }

  setFhirServerConfig(serverConfig) {
    this.fhirServerConfig = serverConfig;
    this._setupFhirClient();
  }


  setPageSize(pageSize) {
    this.pageSize = pageSize;
  }


  _setupFhirClient() {
    if (this.fhirServerConfig) {
      this._fhirClient = mkFhir({
        baseUrl: this.fhirServerConfig.url,
        auth: this.fhirServerConfig.auth
      })  
    }
  };


  /**
   * Search patients by name
   * @param searchText the search text for patient names
   * @returns {*}
   */
  searchPatientByName(searchText) {
    return this._fhirClient.search({type: "Patient", query: {name: searchText}})
      .then(function(response) {
        let patientList = [];
        if (response && response.data.entry) {
          for (let i=0, iLen=response.data.entry.length; i<iLen; i++) {
            let patient = response.data.entry[i].resource;
            patientList.push({
              name: patientStore.getPatientName(patient),
              gender: patient.gender,
              dob: patient.birthDate,
              phone: patientStore.getPatientPhoneNumber(patient),
              id: patient.id,
              resource: patient
            })
          }
        }
        return patientList;
      })
      .catch(function(error) {
        console.log(error);
      });
  };


  /**
   * Get a FHIR resource by resource ID
   * @param resType FHIR resource type
   * @param resId FHIR resource ID
   */
  getFhirResourceById(resType, resId) {
    return this._fhirClient.read({type: resType, id: resId})
      .then(function(response) {
        return response.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  };


  /**
   * Create a FHIR resource
   * @param resType FHIR resource type
   * @param resource the FHIR resource
   * @param extenstionType optional, for Questionnaire/QuestionnaireResponse it could be "SDC"
   */
  createFhirResource(resType, resource, extensionType) {
    return this._fhirClient.create({resource: resource})
      .then(function(response) {
        return response.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  };


  /**
   * Update an FHIR resource
   * @param resType FHIR resource type
   * @param resource the FHIR resource
   */
  updateFhirResource(resType, resource) {
    return this._fhirClient.update({resource: resource})
      .then(function(response) {
        return response.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  };


  /**
   * Delete an FHIR resource
   * @param resType FHIR resource type
   * @param resId FHIR resource ID
   *
   */
  deleteFhirResource(resType, resId) {
    return this._fhirClient.delete({type: resType, id: resId})
      .then(function(response) {
        // response.data === "OK"
        return response.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  };


  /**
   * NOT USED
   * Process a FHIR transaction bundle.
   * Within the bundle, each resource could have its own request method.
   * @param bundle a FHIR transaction bundel.
   */
  handleTransactionBundle(bundle) {
    return this._fhirClient.transaction({bundle: bundle})
      .then(function(response) {
        console.log('transaction succeeded');
        //console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  getLastObservationByPatientId(pId) {
    let that = this;
    return this._fhirClient.search({
      type: 'Observation',
      query: {
        subject: 'Patient/' + pId,
        _sort: '-date',
        _count: 1
      }
    })
        .then(function(response) {   // response.data is a searchset bundle
          //console.log(response);
          if (response.data && response.data.entry.length === 1)
            return response.data.entry[0].resource;
        })
        .catch(function(error) {
          console.log(error);
        });

  }

  getFirstObservationByPatientId(pId) {
    let that = this;
    return this._fhirClient.search({
      type: 'Observation',
      query: {
        subject: 'Patient/' + pId,
        _sort: 'date',
        _count: 1
      }
    })
        .then(function(response) {   // response.data is a searchset bundle
          //console.log(response);
          if (response.data && response.data.entry.length === 1)
          return response.data.entry[0].resource;
        })
        .catch(function(error) {
          console.log(error);
        });

  }

  /**
   * Get all Observation resources of a patient
   * @param pId the current patient's ID
   * @param pageSize optional. the number of records that should be returned in a single page
   */
  _getAllObservationByPatientId(pId, pageSize=this.pageSize, dateRange) {
    
    let that = this;
    let queryOption = {
      subject: 'Patient/' + pId,
      _sort: '-date',
      _count: pageSize,
      _total: 'accurate'  // new supported parameter in HAPI 3.6. not affecting performance.
    };

    if (dateRange) {
      queryOption['date'] = {};
      if (dateRange[0]) {
        let rangeStart = moment(dateRange[0]).format('YYYY-MM-DD');
        queryOption['date']['$ge'] = rangeStart;
      }
      if (dateRange[1]) {
        let rangeEnd = moment(dateRange[1] + 86400000).format('YYYY-MM-DD');
        queryOption['date']['$lt'] = rangeEnd;
      }

    }
    this._obxQueryDone = false;
    return this._fhirClient.search({
      type: 'Observation',
      query: queryOption
    })
    .then(function(response) {   // response.data is a searchset bundle
      //console.log(response);
      let nextPageUrl = that._getNextPageUrl(response.data);
      let retrievedNumOfRes = response.data.entry ? response.data.entry.length : 0;
      let availableNumOfRes = response.data.total ? response.data.total : "N/A";
      that.resourceRetrieved = retrievedNumOfRes;
      that.resourceAvailable = availableNumOfRes;
      let obxData = {
        searchSet: response.data,
        hasMoreData: nextPageUrl ? true : false,
        nextPageUrl: nextPageUrl,
        retrievedNumOfRes: retrievedNumOfRes,
        availableNumOfRes: availableNumOfRes
      };

      that._obxQueryDone = true;
      that._nextPageUrl = nextPageUrl;

      that._addToCache(obxData);

      if (nextPageUrl && that._obxSearchSetCache.length < that._cacheSize) {
        that._getNextPageDataFromFHIRServer(nextPageUrl)
      }

      return that._getFromCache();

    })
    .catch(function(error) {
      that._obxQueryDone = true;
      console.log(error);
    });
  };


  /**
   * Get all Condition resources of a patient
   * @param pId the current patient's ID
   * @param pageSize optional. the number of records that should be returned in a single page
   */
  getAllConditionByPatientId(pId, pageSize=this.pageSize) {
    
    return this._fhirClient.search({
      type: 'Condition',
      query: {
        subject: 'Patient/' + pId,
        'clinical-status': 'active',
        // _sort: '-asserted-date',  // STU3
        _sort: '-recorded-date',  // R4, TODO: auto-detect FHIR server supported version.
        _count: pageSize,
        _total: 'accurate'
      }
    })
    .then(function(response) {   // response.data is a searchset bundle
      return response.data;
    })
    .catch(function(error) {
      console.log(error);
    });
  };


  _getNextPageUrl(bundle) {

    this._nextPageUrl = null;

    let nextPageUrl = null;

    if(bundle && bundle.type === "searchset" && bundle.link && bundle.link) {
      bundle.link.forEach(link => {
        if (link.relation === "next") {
          nextPageUrl = link.url;
        }
      });
    }

    this._nextPageUrl = nextPageUrl;

    return nextPageUrl;

  };

  _count = 0;

  _getNextPageDataFromFHIRServer(nextPageUrl, returnImmediately) {
    let that = this;
    let bundle = {
      "resourceType": "Bundle",
      "type": "searchset",
      "link": [
        {
          "relation": "next",
          "url": nextPageUrl + "&_total=accurate"
        }
      ]
    };
  
    that._obxQueryDone = false;

    return this._fhirClient.nextPage({bundle: bundle})
      .then(function(response) {   // response.data is a searchset bundle
        //console.log(response);
        //console.log(response);
        let nextPageUrl = that._getNextPageUrl(response.data);
        let retrievedNumOfRes = response.data.entry ? response.data.entry.length : 0;
        let availableNumOfRes = response.data.total ? response.data.total : "N/A";
        that.resourceRetrieved = retrievedNumOfRes;
        that.resourceAvailable = availableNumOfRes;
        let obxData = {
          searchSet: response.data,
          hasMoreData: nextPageUrl ? true : false,
          nextPageUrl: nextPageUrl,
          retrievedNumOfRes: retrievedNumOfRes,
          availableNumOfRes: availableNumOfRes
        }

        that._obxQueryDone = true;
        that._nextPageUrl = nextPageUrl;

        that._addToCache(obxData);

        if (nextPageUrl && (that._obxSearchSetCache.length < that._cacheSize || returnImmediately) ) {
          // console.log("fhirDataStore: _getNextPageDataFromFHIRServer: 1:" + that._count++)
          // console.log(nextPageUrl)
          setTimeout(function() {
            that._getNextPageDataFromFHIRServer(nextPageUrl)
          }, 10)
        }

        if (returnImmediately) {
          return that._getFromCache();
        }

      })
      .catch(function(error) {
        that._obxQueryDone = true;
        console.log(error);
      });
  };


  getFirstPageObxData(pId, pageSize=this.pageSize, dateRange) {

    this._obxSearchSetCache = [];

    let that = this;

    return this._getAllObservationByPatientId(pId, pageSize, dateRange)
        .then(function(data) {
          // console.log("fhirDataStore: getFirstPageObxData: 1:"+ that._count++);
          // console.log(that._obxSearchSetCache)
          return data
        })
        .catch(function(error) {
          console.log(error)
        })

  }

  getNextPageObxData() {
    let that = this;
    if (this._obxSearchSetCache.length > 0) {
      //let nextPageUrl = this._obxSearchSetCache[0].nextPageUrl;
      // prefetch next page data

      if (this._nextPageUrl) {
        // console.log("fhirDataStore: getNextPageObxData: 1:" + this._count++)
        // console.log(this._nextPageUrl)
        // console.log(this._obxSearchSetCache)
        that._getNextPageDataFromFHIRServer(this._nextPageUrl);
      }

      return new Promise(function(resolve, reject) {
        return resolve(that._getFromCache())
      });

    }
    // no cached data
    else {
      if (this._nextPageUrl) {
        // console.log("fhirDataStore: getNextPageObxData: 2:" + that._count++)
        // console.log(this._nextPageUrl)
        // console.log(this._obxSearchSetCache)
        return that._getNextPageDataFromFHIRServer(this._nextPageUrl, true);
      }
      else {
        return new Promise(function(resolve, reject) {
          return resolve(null)
        })
      }
    }

  }

}

export default new FhirDataStore();
