import patientStore from './patientDataStore';

const mkFhir = require("fhir.js");

const PAGE_SIZE = 1000;

const LHC_FHIR_SERVER = {
  name: "LHC Internal FHIR Server #2", 
  desc: "Internal FHIR server at LHC, for dev/test only", 
  url: "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3",
//  url: "https://lforms-service-stage-rh7.nlm.nih.gov:8243/hapi-fhir-jpaserver-example/baseDstu3",
//  url: "https://lforms-service-stage-rh7.nlm.nih.gov:8543/hapi-fhir-jpaserver-example/baseDstu3",
//  url: "http://hapi.fhir.org/baseDstu3",  // no auth
  auth: {
    user: 'fire',
    pass: 'happy'
  }
};

class FhirDataStore {

  fhirServerConfig = LHC_FHIR_SERVER;
  pageSize = PAGE_SIZE;
  fhirSearchResult = null;
  moreData = false;
  resourceRetrieved = 0;
  resourceAvailable = 0;
  _nextPageUrl = null;
  _fhirClient = null;


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


  /**
   * Get all Observation resources of a patient
   * @param pId the current patient's ID
   * @param pageSize optional. the number of records that should be returned in a single page
   */
  getAllObservationByPatientId(pId, pageSize=this.pageSize) {
    
    let that = this;
    return this._fhirClient.search({
      type: 'Observation',
      query: {
        subject: 'Patient/' + pId,
        _sort: '-date',
        _count: pageSize
      }
    })
    .then(function(response) {   // response.data is a searchset bundle
      //console.log(response);
      that.getNextPageUrl(response.data);
      that.resourceRetrieved = response.data.entry ? response.data.entry.length : 0;
      that.resourceAvailable = response.data.total ? response.data.total : "N/A";
      return response.data;
    })
    .catch(function(error) {
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
        _sort: '-asserted-date',
        _count: pageSize
      }
    })
    .then(function(response) {   // response.data is a searchset bundle
      return response.data;
    })
    .catch(function(error) {
      console.log(error);
    });
  };


  getNextPageUrl(bundle) {
    if(bundle && bundle.type === "searchset" && bundle.link && bundle.link) {
      bundle.link.forEach(link => {
        if (link.relation === "next") {
          this._nextPageUrl = link.url;
        }
      });
    }
    else {
      this._nextPageUrl = null;      
    }
    this.moreData = this._nextPageUrl ? true : false;
  };


  getNextPageData() {
    let that = this;
    let bundle = {
      "resourceType": "Bundle",
      "type": "searchset",
      "link": [
        {
          "relation": "next",
          "url": this._nextPageUrl
        }
      ]
    };
  
    return this._fhirClient.nextPage({bundle: bundle})
      .then(function(response) {   // response.data is a searchset bundle
        //console.log(response);
        that.getNextPageUrl(response.data);
        that.resourceRetrieved = response.data.entry ? response.data.entry.length : 0;
        that.resourceAvailable = response.data.total ? response.data.total : "N/A";
        return response.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  };

}

export default new FhirDataStore();
