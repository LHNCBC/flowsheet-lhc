export default 
{
  "resourceType": "Bundle",
  "id": "55dd7271-d261-4c2b-a204-21962b04a6ff",
  "meta": {
    "lastUpdated": "2018-08-06T10:52:08.955-04:00"
  },
  "type": "searchset",
  "total": 3174,
  "link": [
    {
      "relation": "self",
      "url": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3?_getpages=55dd7271-d261-4c2b-a204-21962b04a6ff&_getpagesoffset=500&_count=500&_pretty=true&_bundletype=searchset"
    },
    {
      "relation": "next",
      "url": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3?_getpages=55dd7271-d261-4c2b-a204-21962b04a6ff&_getpagesoffset=1000&_count=500&_pretty=true&_bundletype=searchset"
    },
    {
      "relation": "previous",
      "url": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3?_getpages=55dd7271-d261-4c2b-a204-21962b04a6ff&_getpagesoffset=0&_count=500&_pretty=true&_bundletype=searchset"
    }
  ],
  "entry": [
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895276",
      "resource": {
        "resourceType": "Observation",
        "id": "1895276",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:56.276-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "60"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "718-7",
              "display": "Hgb"
            }
          ],
          "text": "Hgb"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-08T05:15:00-05:00",
        "valueQuantity": {
          "value": 10.1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895284",
      "resource": {
        "resourceType": "Observation",
        "id": "1895284",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:56.276-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "875"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "787-2",
              "display": "MCV"
            }
          ],
          "text": "MCV"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-08T05:15:00-05:00",
        "valueQuantity": {
          "value": 92,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894844",
      "resource": {
        "resourceType": "Observation",
        "id": "1894844",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:50.905-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "63"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "789-8",
              "display": "RBC #"
            }
          ],
          "text": "RBC #"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-08T05:15:00-05:00",
        "valueQuantity": {
          "value": 3.3,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895279",
      "resource": {
        "resourceType": "Observation",
        "id": "1895279",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:56.276-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1276"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "3094-0",
              "display": "BUN SerPl Qn"
            }
          ],
          "text": "BUN SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-08T05:15:00-05:00",
        "valueQuantity": {
          "value": 13,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895283",
      "resource": {
        "resourceType": "Observation",
        "id": "1895283",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:56.276-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "46"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2075-0",
              "display": "Chloride SerPl Qn"
            }
          ],
          "text": "Chloride SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-08T05:15:00-05:00",
        "valueQuantity": {
          "value": 98,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895278",
      "resource": {
        "resourceType": "Observation",
        "id": "1895278",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:56.276-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1274"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2345-7",
              "display": "Glucose SerPl Qn"
            }
          ],
          "text": "Glucose SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-08T05:15:00-05:00",
        "valueQuantity": {
          "value": 225,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894843",
      "resource": {
        "resourceType": "Observation",
        "id": "1894843",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:50.905-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "62"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "26464-8",
              "display": "WBC #"
            }
          ],
          "text": "WBC #"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-08T05:15:00-05:00",
        "valueQuantity": {
          "value": 24.3,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895287",
      "resource": {
        "resourceType": "Observation",
        "id": "1895287",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:56.276-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "11516"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "30385-9",
              "display": "RDW"
            }
          ],
          "text": "RDW"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-08T05:15:00-05:00",
        "valueQuantity": {
          "value": 14.9,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895286",
      "resource": {
        "resourceType": "Observation",
        "id": "1895286",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:56.276-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "876"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "785-6",
              "display": "MCH"
            }
          ],
          "text": "MCH"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-08T05:15:00-05:00",
        "valueQuantity": {
          "value": 31,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895285",
      "resource": {
        "resourceType": "Observation",
        "id": "1895285",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:56.276-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "877"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "786-4",
              "display": "MCHC"
            }
          ],
          "text": "MCHC"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-08T05:15:00-05:00",
        "valueQuantity": {
          "value": 34,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895275",
      "resource": {
        "resourceType": "Observation",
        "id": "1895275",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:56.276-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "61"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "20570-8",
              "display": "Hct"
            }
          ],
          "text": "Hct"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-08T05:15:00-05:00",
        "valueQuantity": {
          "value": 30,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895280",
      "resource": {
        "resourceType": "Observation",
        "id": "1895280",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:56.276-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "256"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2160-0",
              "display": "Creatinine SerPl Qn"
            }
          ],
          "text": "Creatinine SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-08T05:15:00-05:00",
        "valueQuantity": {
          "value": 0.8,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1892857",
      "resource": {
        "resourceType": "Observation",
        "id": "1892857",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:23.045-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "45"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2823-3",
              "display": "Potassium SerPl Qn"
            }
          ],
          "text": "Potassium SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-08T05:15:00-05:00",
        "valueQuantity": {
          "value": 3.5,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895282",
      "resource": {
        "resourceType": "Observation",
        "id": "1895282",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:56.276-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "44"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2951-2",
              "display": "Sodium SerPl Qn"
            }
          ],
          "text": "Sodium SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-08T05:15:00-05:00",
        "valueQuantity": {
          "value": 134,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895281",
      "resource": {
        "resourceType": "Observation",
        "id": "1895281",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:56.276-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "47"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2028-9",
              "display": "CO2-Tot SerPl Qn"
            }
          ],
          "text": "CO2-Tot SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-08T05:15:00-05:00",
        "valueQuantity": {
          "value": 28,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1892983",
      "resource": {
        "resourceType": "Observation",
        "id": "1892983",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:23.045-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "213"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "26515-7",
              "display": "Platelet #"
            }
          ],
          "text": "Platelet #"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-08T05:15:00-05:00",
        "valueQuantity": {
          "value": 308,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895277",
      "resource": {
        "resourceType": "Observation",
        "id": "1895277",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:56.276-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "758"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2692-2",
              "display": "Osmolality SerPl Qn"
            }
          ],
          "text": "Osmolality SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-08T05:15:00-05:00",
        "valueQuantity": {
          "value": 283,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894840",
      "resource": {
        "resourceType": "Observation",
        "id": "1894840",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:50.905-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6141"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "20565-8",
              "display": "CO2 Total Bld Calc"
            }
          ],
          "text": "CO2 Total Bld Calc"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-08T05:02:00-05:00",
        "valueQuantity": {
          "value": 30.9,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894839",
      "resource": {
        "resourceType": "Observation",
        "id": "1894839",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:50.905-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6139"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "11557-6",
              "display": "PCO2 Bld"
            }
          ],
          "text": "PCO2 Bld"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-08T05:02:00-05:00",
        "valueQuantity": {
          "value": 40.9,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893350",
      "resource": {
        "resourceType": "Observation",
        "id": "1893350",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:28.791-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6140"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "11556-8",
              "display": "PO2"
            }
          ],
          "text": "PO2"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-08T05:02:00-05:00",
        "valueQuantity": {
          "value": 92,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893429",
      "resource": {
        "resourceType": "Observation",
        "id": "1893429",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:28.791-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6458"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "3151-8",
              "display": "Oxygen Flow Rate"
            }
          ],
          "text": "Oxygen Flow Rate"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-08T05:02:00-05:00",
        "valueQuantity": {
          "value": 2,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894842",
      "resource": {
        "resourceType": "Observation",
        "id": "1894842",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:50.905-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6131"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "11558-4",
              "display": "pH Bld"
            }
          ],
          "text": "pH Bld"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-08T05:02:00-05:00",
        "valueQuantity": {
          "value": 7.464,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894841",
      "resource": {
        "resourceType": "Observation",
        "id": "1894841",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:50.905-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6136"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "1959-6",
              "display": "HCO3 Bld Qn Calc"
            }
          ],
          "text": "HCO3 Bld Qn Calc"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-08T05:02:00-05:00",
        "valueQuantity": {
          "value": 29.7,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894837",
      "resource": {
        "resourceType": "Observation",
        "id": "1894837",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:50.905-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "5779"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "5779",
              "display": "Cimetidine Inj"
            }
          ],
          "text": "Cimetidine Inj"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-08T00:45:00-05:00",
        "valueQuantity": {
          "value": 1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896880",
      "resource": {
        "resourceType": "Observation",
        "id": "1896880",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "957"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "957",
              "display": "NaCl"
            }
          ],
          "text": "NaCl"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-08T00:45:00-05:00",
        "valueQuantity": {
          "value": 1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1897277",
      "resource": {
        "resourceType": "Observation",
        "id": "1897277",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:24.131-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "7978"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "7978",
              "display": "Insulin Reg Hum"
            }
          ],
          "text": "Insulin Reg Hum"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-08T00:45:00-05:00",
        "valueQuantity": {
          "value": 1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896861",
      "resource": {
        "resourceType": "Observation",
        "id": "1896861",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "914"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "914",
              "display": "Acetamnphn W/Cod"
            }
          ],
          "text": "Acetamnphn W/Cod"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-08T00:45:00-05:00",
        "valueQuantity": {
          "value": 1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896518",
      "resource": {
        "resourceType": "Observation",
        "id": "1896518",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:12.976-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "17778"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "17778",
              "display": "Benazepril"
            }
          ],
          "text": "Benazepril"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-08T00:45:00-05:00",
        "valueQuantity": {
          "value": 10,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896466",
      "resource": {
        "resourceType": "Observation",
        "id": "1896466",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:12.976-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "16016"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "16016",
              "display": "Enteral Glucose Intol(Glytrol)"
            }
          ],
          "text": "Enteral Glucose Intol(Glytrol)"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-08T00:45:00-05:00",
        "valueQuantity": {
          "value": 1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1897301",
      "resource": {
        "resourceType": "Observation",
        "id": "1897301",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:24.131-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "9101"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "9101",
              "display": "Insulin Lent Hum"
            }
          ],
          "text": "Insulin Lent Hum"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-08T00:45:00-05:00",
        "valueQuantity": {
          "value": 1000,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896499",
      "resource": {
        "resourceType": "Observation",
        "id": "1896499",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:12.976-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "16640"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "16640",
              "display": "Ondansetron Inj"
            }
          ],
          "text": "Ondansetron Inj"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-08T00:45:00-05:00",
        "valueQuantity": {
          "value": 1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1897308",
      "resource": {
        "resourceType": "Observation",
        "id": "1897308",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:24.131-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "10920"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "10920",
              "display": "Ticarcillin/Clavulanate Inj"
            }
          ],
          "text": "Ticarcillin/Clavulanate Inj"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-08T00:45:00-05:00",
        "valueQuantity": {
          "value": 1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1897272",
      "resource": {
        "resourceType": "Observation",
        "id": "1897272",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:24.131-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "7596"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "7596",
              "display": "IV Fluids - NS"
            }
          ],
          "text": "IV Fluids - NS"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-08T00:45:00-05:00",
        "valueQuantity": {
          "value": 1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896477",
      "resource": {
        "resourceType": "Observation",
        "id": "1896477",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:12.976-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "16580"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "16580",
              "display": "Nimodipine"
            }
          ],
          "text": "Nimodipine"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-08T00:45:00-05:00",
        "valueQuantity": {
          "value": 30,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896983",
      "resource": {
        "resourceType": "Observation",
        "id": "1896983",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "2622"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "2622",
              "display": "Acetaminophn Sup"
            }
          ],
          "text": "Acetaminophn Sup"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-08T00:45:00-05:00",
        "valueQuantity": {
          "value": 650,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1897322",
      "resource": {
        "resourceType": "Observation",
        "id": "1897322",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:24.131-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "10966"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "10966",
              "display": "Albuterol Neb Sol"
            }
          ],
          "text": "Albuterol Neb Sol"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-08T00:45:00-05:00",
        "valueQuantity": {
          "value": 1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1897344",
      "resource": {
        "resourceType": "Observation",
        "id": "1897344",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:24.131-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "11574"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "11574",
              "display": "Heparin Flush"
            }
          ],
          "text": "Heparin Flush"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-08T00:45:00-05:00",
        "valueQuantity": {
          "value": 1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1897328",
      "resource": {
        "resourceType": "Observation",
        "id": "1897328",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:24.131-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "11021"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "11021",
              "display": "Heparin Artflush"
            }
          ],
          "text": "Heparin Artflush"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-08T00:45:00-05:00",
        "valueQuantity": {
          "value": 1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1897254",
      "resource": {
        "resourceType": "Observation",
        "id": "1897254",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:24.131-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "7261"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "7261",
              "display": "Docusate NA Syrup"
            }
          ],
          "text": "Docusate NA Syrup"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-08T00:45:00-05:00",
        "valueQuantity": {
          "value": 3,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894838",
      "resource": {
        "resourceType": "Observation",
        "id": "1894838",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:50.905-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "8893"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "8893",
              "display": "Labetalol Inj"
            }
          ],
          "text": "Labetalol Inj"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-08T00:45:00-05:00",
        "valueQuantity": {
          "value": 1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896603",
      "resource": {
        "resourceType": "Observation",
        "id": "1896603",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:12.976-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "78"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "4105-3",
              "display": "Acetaminophen"
            }
          ],
          "text": "Acetaminophen"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-08T00:45:00-05:00",
        "valueQuantity": {
          "value": 325,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894625",
      "resource": {
        "resourceType": "Observation",
        "id": "1894625",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:45.585-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "62"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "26464-8",
              "display": "WBC #"
            }
          ],
          "text": "WBC #"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-07T17:44:00-05:00",
        "valueQuantity": {
          "value": 4.1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894830",
      "resource": {
        "resourceType": "Observation",
        "id": "1894830",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:50.905-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "46"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2075-0",
              "display": "Chloride SerPl Qn"
            }
          ],
          "text": "Chloride SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-07T17:44:00-05:00",
        "valueQuantity": {
          "value": 100,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893249",
      "resource": {
        "resourceType": "Observation",
        "id": "1893249",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:28.791-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "758"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2692-2",
              "display": "Osmolality SerPl Qn"
            }
          ],
          "text": "Osmolality SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-07T17:44:00-05:00",
        "valueQuantity": {
          "value": 289,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894834",
      "resource": {
        "resourceType": "Observation",
        "id": "1894834",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:50.905-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "877"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "786-4",
              "display": "MCHC"
            }
          ],
          "text": "MCHC"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-07T17:44:00-05:00",
        "valueQuantity": {
          "value": 33,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1892885",
      "resource": {
        "resourceType": "Observation",
        "id": "1892885",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:23.045-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "61"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "20570-8",
              "display": "Hct"
            }
          ],
          "text": "Hct"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-07T17:44:00-05:00",
        "valueQuantity": {
          "value": 32,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894627",
      "resource": {
        "resourceType": "Observation",
        "id": "1894627",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:45.585-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "63"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "789-8",
              "display": "RBC #"
            }
          ],
          "text": "RBC #"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-07T17:44:00-05:00",
        "valueQuantity": {
          "value": 3.3,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894833",
      "resource": {
        "resourceType": "Observation",
        "id": "1894833",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:50.905-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "875"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "787-2",
              "display": "MCV"
            }
          ],
          "text": "MCV"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-07T17:44:00-05:00",
        "valueQuantity": {
          "value": 97,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894832",
      "resource": {
        "resourceType": "Observation",
        "id": "1894832",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:50.905-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "44"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2951-2",
              "display": "Sodium SerPl Qn"
            }
          ],
          "text": "Sodium SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-07T17:44:00-05:00",
        "valueQuantity": {
          "value": 134,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894629",
      "resource": {
        "resourceType": "Observation",
        "id": "1894629",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:45.585-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "47"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2028-9",
              "display": "CO2-Tot SerPl Qn"
            }
          ],
          "text": "CO2-Tot SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-07T17:44:00-05:00",
        "valueQuantity": {
          "value": 26,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894626",
      "resource": {
        "resourceType": "Observation",
        "id": "1894626",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:45.585-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "60"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "718-7",
              "display": "Hgb"
            }
          ],
          "text": "Hgb"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-07T17:44:00-05:00",
        "valueQuantity": {
          "value": 10.6,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894836",
      "resource": {
        "resourceType": "Observation",
        "id": "1894836",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:50.905-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "11516"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "30385-9",
              "display": "RDW"
            }
          ],
          "text": "RDW"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-07T17:44:00-05:00",
        "valueQuantity": {
          "value": 18.4,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894628",
      "resource": {
        "resourceType": "Observation",
        "id": "1894628",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:45.585-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1274"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2345-7",
              "display": "Glucose SerPl Qn"
            }
          ],
          "text": "Glucose SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-07T17:44:00-05:00",
        "valueQuantity": {
          "value": 208,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894831",
      "resource": {
        "resourceType": "Observation",
        "id": "1894831",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:50.905-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "45"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2823-3",
              "display": "Potassium SerPl Qn"
            }
          ],
          "text": "Potassium SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-07T17:44:00-05:00",
        "valueQuantity": {
          "value": 4.1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894835",
      "resource": {
        "resourceType": "Observation",
        "id": "1894835",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:50.905-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "876"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "785-6",
              "display": "MCH"
            }
          ],
          "text": "MCH"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-07T17:44:00-05:00",
        "valueQuantity": {
          "value": 32,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894624",
      "resource": {
        "resourceType": "Observation",
        "id": "1894624",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:45.585-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "9876"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "9876",
              "display": "Total Clinic Charge"
            }
          ],
          "text": "Total Clinic Charge"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-07T16:10:00-05:00",
        "valueQuantity": {
          "value": 8,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896885",
      "resource": {
        "resourceType": "Observation",
        "id": "1896885",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1274"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2345-7",
              "display": "Glucose SerPl Qn"
            }
          ],
          "text": "Glucose SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-07T14:44:00-05:00",
        "valueQuantity": {
          "value": 259,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896570",
      "resource": {
        "resourceType": "Observation",
        "id": "1896570",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:12.976-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "46"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2075-0",
              "display": "Chloride SerPl Qn"
            }
          ],
          "text": "Chloride SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-07T12:32:00-05:00",
        "valueQuantity": {
          "value": 98,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896544",
      "resource": {
        "resourceType": "Observation",
        "id": "1896544",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:12.976-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "44"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2951-2",
              "display": "Sodium SerPl Qn"
            }
          ],
          "text": "Sodium SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-07T12:32:00-05:00",
        "valueQuantity": {
          "value": 132,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896581",
      "resource": {
        "resourceType": "Observation",
        "id": "1896581",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:12.976-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "47"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2028-9",
              "display": "CO2-Tot SerPl Qn"
            }
          ],
          "text": "CO2-Tot SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-07T12:32:00-05:00",
        "valueQuantity": {
          "value": 25,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896558",
      "resource": {
        "resourceType": "Observation",
        "id": "1896558",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:12.976-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "45"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2823-3",
              "display": "Potassium SerPl Qn"
            }
          ],
          "text": "Potassium SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-07T12:32:00-05:00",
        "valueQuantity": {
          "value": 4.4,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896839",
      "resource": {
        "resourceType": "Observation",
        "id": "1896839",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "758"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2692-2",
              "display": "Osmolality SerPl Qn"
            }
          ],
          "text": "Osmolality SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-07T12:32:00-05:00",
        "valueQuantity": {
          "value": 296,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896886",
      "resource": {
        "resourceType": "Observation",
        "id": "1896886",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1274"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2345-7",
              "display": "Glucose SerPl Qn"
            }
          ],
          "text": "Glucose SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-07T12:30:00-05:00",
        "valueQuantity": {
          "value": 324,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893273",
      "resource": {
        "resourceType": "Observation",
        "id": "1893273",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:28.791-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1274"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2345-7",
              "display": "Glucose SerPl Qn"
            }
          ],
          "text": "Glucose SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-07T09:27:00-05:00",
        "valueQuantity": {
          "value": 224,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894616",
      "resource": {
        "resourceType": "Observation",
        "id": "1894616",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:45.585-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "256"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2160-0",
              "display": "Creatinine SerPl Qn"
            }
          ],
          "text": "Creatinine SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-07T05:01:00-05:00",
        "valueQuantity": {
          "value": 0.8,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894623",
      "resource": {
        "resourceType": "Observation",
        "id": "1894623",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:45.585-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "11516"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "30385-9",
              "display": "RDW"
            }
          ],
          "text": "RDW"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-07T05:01:00-05:00",
        "valueQuantity": {
          "value": 14.9,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1892873",
      "resource": {
        "resourceType": "Observation",
        "id": "1892873",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:23.045-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "60"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "718-7",
              "display": "Hgb"
            }
          ],
          "text": "Hgb"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-07T05:01:00-05:00",
        "valueQuantity": {
          "value": 10.4,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894615",
      "resource": {
        "resourceType": "Observation",
        "id": "1894615",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:45.585-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1276"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "3094-0",
              "display": "BUN SerPl Qn"
            }
          ],
          "text": "BUN SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-07T05:01:00-05:00",
        "valueQuantity": {
          "value": 16,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894610",
      "resource": {
        "resourceType": "Observation",
        "id": "1894610",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:45.585-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "62"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "26464-8",
              "display": "WBC #"
            }
          ],
          "text": "WBC #"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-07T05:01:00-05:00",
        "valueQuantity": {
          "value": 30.6,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894622",
      "resource": {
        "resourceType": "Observation",
        "id": "1894622",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:45.585-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "876"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "785-6",
              "display": "MCH"
            }
          ],
          "text": "MCH"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-07T05:01:00-05:00",
        "valueQuantity": {
          "value": 32,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894612",
      "resource": {
        "resourceType": "Observation",
        "id": "1894612",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:45.585-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "63"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "789-8",
              "display": "RBC #"
            }
          ],
          "text": "RBC #"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-07T05:01:00-05:00",
        "valueQuantity": {
          "value": 3.3,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894611",
      "resource": {
        "resourceType": "Observation",
        "id": "1894611",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:45.585-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "61"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "20570-8",
              "display": "Hct"
            }
          ],
          "text": "Hct"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-07T05:01:00-05:00",
        "valueQuantity": {
          "value": 30,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894618",
      "resource": {
        "resourceType": "Observation",
        "id": "1894618",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:45.585-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "44"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2951-2",
              "display": "Sodium SerPl Qn"
            }
          ],
          "text": "Sodium SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-07T05:01:00-05:00",
        "valueQuantity": {
          "value": 131,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894617",
      "resource": {
        "resourceType": "Observation",
        "id": "1894617",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:45.585-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "47"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2028-9",
              "display": "CO2-Tot SerPl Qn"
            }
          ],
          "text": "CO2-Tot SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-07T05:01:00-05:00",
        "valueQuantity": {
          "value": 27,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894619",
      "resource": {
        "resourceType": "Observation",
        "id": "1894619",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:45.585-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "46"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2075-0",
              "display": "Chloride SerPl Qn"
            }
          ],
          "text": "Chloride SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-07T05:01:00-05:00",
        "valueQuantity": {
          "value": 99,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1892858",
      "resource": {
        "resourceType": "Observation",
        "id": "1892858",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:23.045-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "45"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2823-3",
              "display": "Potassium SerPl Qn"
            }
          ],
          "text": "Potassium SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-07T05:01:00-05:00",
        "valueQuantity": {
          "value": 4,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894621",
      "resource": {
        "resourceType": "Observation",
        "id": "1894621",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:45.585-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "877"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "786-4",
              "display": "MCHC"
            }
          ],
          "text": "MCHC"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-07T05:01:00-05:00",
        "valueQuantity": {
          "value": 35,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894614",
      "resource": {
        "resourceType": "Observation",
        "id": "1894614",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:45.585-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "758"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2692-2",
              "display": "Osmolality SerPl Qn"
            }
          ],
          "text": "Osmolality SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-07T05:01:00-05:00",
        "valueQuantity": {
          "value": 284,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894620",
      "resource": {
        "resourceType": "Observation",
        "id": "1894620",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:45.585-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "875"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "787-2",
              "display": "MCV"
            }
          ],
          "text": "MCV"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-07T05:01:00-05:00",
        "valueQuantity": {
          "value": 92,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894613",
      "resource": {
        "resourceType": "Observation",
        "id": "1894613",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:45.585-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "213"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "26515-7",
              "display": "Platelet #"
            }
          ],
          "text": "Platelet #"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-07T05:01:00-05:00",
        "valueQuantity": {
          "value": 281,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894608",
      "resource": {
        "resourceType": "Observation",
        "id": "1894608",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:45.585-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "17778"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "17778",
              "display": "Benazepril"
            }
          ],
          "text": "Benazepril"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-07T00:45:00-05:00",
        "valueQuantity": {
          "value": 10,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896881",
      "resource": {
        "resourceType": "Observation",
        "id": "1896881",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "957"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "957",
              "display": "NaCl"
            }
          ],
          "text": "NaCl"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-07T00:45:00-05:00",
        "valueQuantity": {
          "value": 1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896467",
      "resource": {
        "resourceType": "Observation",
        "id": "1896467",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:12.976-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "16016"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "16016",
              "display": "Enteral Glucose Intol(Glytrol)"
            }
          ],
          "text": "Enteral Glucose Intol(Glytrol)"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-07T00:45:00-05:00",
        "valueQuantity": {
          "value": 1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896862",
      "resource": {
        "resourceType": "Observation",
        "id": "1896862",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "914"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "914",
              "display": "Acetamnphn W/Cod"
            }
          ],
          "text": "Acetamnphn W/Cod"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-07T00:45:00-05:00",
        "valueQuantity": {
          "value": 1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1897309",
      "resource": {
        "resourceType": "Observation",
        "id": "1897309",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:24.131-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "10920"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "10920",
              "display": "Ticarcillin/Clavulanate Inj"
            }
          ],
          "text": "Ticarcillin/Clavulanate Inj"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-07T00:45:00-05:00",
        "valueQuantity": {
          "value": 1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1897323",
      "resource": {
        "resourceType": "Observation",
        "id": "1897323",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:24.131-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "10966"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "10966",
              "display": "Albuterol Neb Sol"
            }
          ],
          "text": "Albuterol Neb Sol"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-07T00:45:00-05:00",
        "valueQuantity": {
          "value": 1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1897278",
      "resource": {
        "resourceType": "Observation",
        "id": "1897278",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:24.131-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "7978"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "7978",
              "display": "Insulin Reg Hum"
            }
          ],
          "text": "Insulin Reg Hum"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-07T00:45:00-05:00",
        "valueQuantity": {
          "value": 500,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896478",
      "resource": {
        "resourceType": "Observation",
        "id": "1896478",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:12.976-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "16580"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "16580",
              "display": "Nimodipine"
            }
          ],
          "text": "Nimodipine"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-07T00:45:00-05:00",
        "valueQuantity": {
          "value": 30,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896984",
      "resource": {
        "resourceType": "Observation",
        "id": "1896984",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "2622"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "2622",
              "display": "Acetaminophn Sup"
            }
          ],
          "text": "Acetaminophn Sup"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-07T00:45:00-05:00",
        "valueQuantity": {
          "value": 650,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1897345",
      "resource": {
        "resourceType": "Observation",
        "id": "1897345",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:24.131-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "11574"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "11574",
              "display": "Heparin Flush"
            }
          ],
          "text": "Heparin Flush"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-07T00:45:00-05:00",
        "valueQuantity": {
          "value": 1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894609",
      "resource": {
        "resourceType": "Observation",
        "id": "1894609",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:45.585-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "7596"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "7596",
              "display": "IV Fluids - NS"
            }
          ],
          "text": "IV Fluids - NS"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-07T00:45:00-05:00",
        "valueQuantity": {
          "value": 500,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896500",
      "resource": {
        "resourceType": "Observation",
        "id": "1896500",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:12.976-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "16640"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "16640",
              "display": "Ondansetron Inj"
            }
          ],
          "text": "Ondansetron Inj"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-07T00:45:00-05:00",
        "valueQuantity": {
          "value": 1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896804",
      "resource": {
        "resourceType": "Observation",
        "id": "1896804",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "78"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "4105-3",
              "display": "Acetaminophen"
            }
          ],
          "text": "Acetaminophen"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-07T00:45:00-05:00",
        "valueQuantity": {
          "value": 325,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1897329",
      "resource": {
        "resourceType": "Observation",
        "id": "1897329",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:24.131-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "11021"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "11021",
              "display": "Heparin Artflush"
            }
          ],
          "text": "Heparin Artflush"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-07T00:45:00-05:00",
        "valueQuantity": {
          "value": 1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1897255",
      "resource": {
        "resourceType": "Observation",
        "id": "1897255",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:24.131-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "7261"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "7261",
              "display": "Docusate NA Syrup"
            }
          ],
          "text": "Docusate NA Syrup"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-07T00:45:00-05:00",
        "valueQuantity": {
          "value": 3,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894603",
      "resource": {
        "resourceType": "Observation",
        "id": "1894603",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:45.585-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1274"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2345-7",
              "display": "Glucose SerPl Qn"
            }
          ],
          "text": "Glucose SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-06T17:17:00-05:00",
        "valueQuantity": {
          "value": 183,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894602",
      "resource": {
        "resourceType": "Observation",
        "id": "1894602",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:45.585-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "758"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2692-2",
              "display": "Osmolality SerPl Qn"
            }
          ],
          "text": "Osmolality SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-06T17:17:00-05:00",
        "valueQuantity": {
          "value": 284,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894605",
      "resource": {
        "resourceType": "Observation",
        "id": "1894605",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:45.585-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "46"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2075-0",
              "display": "Chloride SerPl Qn"
            }
          ],
          "text": "Chloride SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-06T17:17:00-05:00",
        "valueQuantity": {
          "value": 100,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894604",
      "resource": {
        "resourceType": "Observation",
        "id": "1894604",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:45.585-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "47"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2028-9",
              "display": "CO2-Tot SerPl Qn"
            }
          ],
          "text": "CO2-Tot SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-06T17:17:00-05:00",
        "valueQuantity": {
          "value": 26,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894607",
      "resource": {
        "resourceType": "Observation",
        "id": "1894607",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:45.585-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "45"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2823-3",
              "display": "Potassium SerPl Qn"
            }
          ],
          "text": "Potassium SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-06T17:17:00-05:00",
        "valueQuantity": {
          "value": 4.1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894606",
      "resource": {
        "resourceType": "Observation",
        "id": "1894606",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:45.585-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "44"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2951-2",
              "display": "Sodium SerPl Qn"
            }
          ],
          "text": "Sodium SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-06T17:17:00-05:00",
        "valueQuantity": {
          "value": 132,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894601",
      "resource": {
        "resourceType": "Observation",
        "id": "1894601",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:45.585-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1274"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2345-7",
              "display": "Glucose SerPl Qn"
            }
          ],
          "text": "Glucose SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-06T15:14:00-05:00",
        "valueQuantity": {
          "value": 218,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896887",
      "resource": {
        "resourceType": "Observation",
        "id": "1896887",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1274"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2345-7",
              "display": "Glucose SerPl Qn"
            }
          ],
          "text": "Glucose SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-06T13:31:00-05:00",
        "valueQuantity": {
          "value": 234,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896888",
      "resource": {
        "resourceType": "Observation",
        "id": "1896888",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1274"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2345-7",
              "display": "Glucose SerPl Qn"
            }
          ],
          "text": "Glucose SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-06T11:52:00-05:00",
        "valueQuantity": {
          "value": 166,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894600",
      "resource": {
        "resourceType": "Observation",
        "id": "1894600",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:45.585-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "758"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2692-2",
              "display": "Osmolality SerPl Qn"
            }
          ],
          "text": "Osmolality SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-06T11:52:00-05:00",
        "valueQuantity": {
          "value": 280,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896889",
      "resource": {
        "resourceType": "Observation",
        "id": "1896889",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1274"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2345-7",
              "display": "Glucose SerPl Qn"
            }
          ],
          "text": "Glucose SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-06T11:25:00-05:00",
        "valueQuantity": {
          "value": 180,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896890",
      "resource": {
        "resourceType": "Observation",
        "id": "1896890",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1274"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2345-7",
              "display": "Glucose SerPl Qn"
            }
          ],
          "text": "Glucose SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-06T07:24:00-05:00",
        "valueQuantity": {
          "value": 187,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1892859",
      "resource": {
        "resourceType": "Observation",
        "id": "1892859",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:23.045-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "45"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2823-3",
              "display": "Potassium SerPl Qn"
            }
          ],
          "text": "Potassium SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-06T05:05:00-05:00",
        "valueQuantity": {
          "value": 4,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894178",
      "resource": {
        "resourceType": "Observation",
        "id": "1894178",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:39.913-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "876"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "785-6",
              "display": "MCH"
            }
          ],
          "text": "MCH"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-06T05:05:00-05:00",
        "valueQuantity": {
          "value": 32,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894169",
      "resource": {
        "resourceType": "Observation",
        "id": "1894169",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:39.913-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "61"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "20570-8",
              "display": "Hct"
            }
          ],
          "text": "Hct"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-06T05:05:00-05:00",
        "valueQuantity": {
          "value": 33,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894172",
      "resource": {
        "resourceType": "Observation",
        "id": "1894172",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:39.913-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "256"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2160-0",
              "display": "Creatinine SerPl Qn"
            }
          ],
          "text": "Creatinine SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-06T05:05:00-05:00",
        "valueQuantity": {
          "value": 0.8,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1892874",
      "resource": {
        "resourceType": "Observation",
        "id": "1892874",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:23.045-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "60"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "718-7",
              "display": "Hgb"
            }
          ],
          "text": "Hgb"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-06T05:05:00-05:00",
        "valueQuantity": {
          "value": 11.3,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894175",
      "resource": {
        "resourceType": "Observation",
        "id": "1894175",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:39.913-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "46"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2075-0",
              "display": "Chloride SerPl Qn"
            }
          ],
          "text": "Chloride SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-06T05:05:00-05:00",
        "valueQuantity": {
          "value": 100,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893364",
      "resource": {
        "resourceType": "Observation",
        "id": "1893364",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:28.791-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "11516"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "30385-9",
              "display": "RDW"
            }
          ],
          "text": "RDW"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-06T05:05:00-05:00",
        "valueQuantity": {
          "value": 15,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894177",
      "resource": {
        "resourceType": "Observation",
        "id": "1894177",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:39.913-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "877"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "786-4",
              "display": "MCHC"
            }
          ],
          "text": "MCHC"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-06T05:05:00-05:00",
        "valueQuantity": {
          "value": 34,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894174",
      "resource": {
        "resourceType": "Observation",
        "id": "1894174",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:39.913-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "44"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2951-2",
              "display": "Sodium SerPl Qn"
            }
          ],
          "text": "Sodium SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-06T05:05:00-05:00",
        "valueQuantity": {
          "value": 131,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894168",
      "resource": {
        "resourceType": "Observation",
        "id": "1894168",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:39.913-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "63"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "789-8",
              "display": "RBC #"
            }
          ],
          "text": "RBC #"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-06T05:05:00-05:00",
        "valueQuantity": {
          "value": 3.6,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894176",
      "resource": {
        "resourceType": "Observation",
        "id": "1894176",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:39.913-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "875"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "787-2",
              "display": "MCV"
            }
          ],
          "text": "MCV"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-06T05:05:00-05:00",
        "valueQuantity": {
          "value": 92,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894171",
      "resource": {
        "resourceType": "Observation",
        "id": "1894171",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:39.913-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1276"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "3094-0",
              "display": "BUN SerPl Qn"
            }
          ],
          "text": "BUN SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-06T05:05:00-05:00",
        "valueQuantity": {
          "value": 15,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896891",
      "resource": {
        "resourceType": "Observation",
        "id": "1896891",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1274"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2345-7",
              "display": "Glucose SerPl Qn"
            }
          ],
          "text": "Glucose SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-06T05:05:00-05:00",
        "valueQuantity": {
          "value": 185,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894170",
      "resource": {
        "resourceType": "Observation",
        "id": "1894170",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:39.913-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "213"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "26515-7",
              "display": "Platelet #"
            }
          ],
          "text": "Platelet #"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-06T05:05:00-05:00",
        "valueQuantity": {
          "value": 248,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894167",
      "resource": {
        "resourceType": "Observation",
        "id": "1894167",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:39.913-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "62"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "26464-8",
              "display": "WBC #"
            }
          ],
          "text": "WBC #"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-06T05:05:00-05:00",
        "valueQuantity": {
          "value": 30.8,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896840",
      "resource": {
        "resourceType": "Observation",
        "id": "1896840",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "758"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2692-2",
              "display": "Osmolality SerPl Qn"
            }
          ],
          "text": "Osmolality SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-06T05:05:00-05:00",
        "valueQuantity": {
          "value": 278,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894173",
      "resource": {
        "resourceType": "Observation",
        "id": "1894173",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:39.913-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "47"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2028-9",
              "display": "CO2-Tot SerPl Qn"
            }
          ],
          "text": "CO2-Tot SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-06T05:05:00-05:00",
        "valueQuantity": {
          "value": 26,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894164",
      "resource": {
        "resourceType": "Observation",
        "id": "1894164",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:39.913-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6140"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "11556-8",
              "display": "PO2"
            }
          ],
          "text": "PO2"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-06T04:43:00-05:00",
        "valueQuantity": {
          "value": 111,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894166",
      "resource": {
        "resourceType": "Observation",
        "id": "1894166",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:39.913-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "207"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "3150-0",
              "display": "Inspired O2"
            }
          ],
          "text": "Inspired O2"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-06T04:43:00-05:00",
        "valueQuantity": {
          "value": 35,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893338",
      "resource": {
        "resourceType": "Observation",
        "id": "1893338",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:28.791-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6131"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "11558-4",
              "display": "pH Bld"
            }
          ],
          "text": "pH Bld"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-06T04:43:00-05:00",
        "valueQuantity": {
          "value": 7.432,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894163",
      "resource": {
        "resourceType": "Observation",
        "id": "1894163",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:39.913-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6136"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "1959-6",
              "display": "HCO3 Bld Qn Calc"
            }
          ],
          "text": "HCO3 Bld Qn Calc"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-06T04:43:00-05:00",
        "valueQuantity": {
          "value": 24.5,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894165",
      "resource": {
        "resourceType": "Observation",
        "id": "1894165",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:39.913-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6141"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "20565-8",
              "display": "CO2 Total Bld Calc"
            }
          ],
          "text": "CO2 Total Bld Calc"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-06T04:43:00-05:00",
        "valueQuantity": {
          "value": 25.6,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894162",
      "resource": {
        "resourceType": "Observation",
        "id": "1894162",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:39.913-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6139"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "11557-6",
              "display": "PCO2 Bld"
            }
          ],
          "text": "PCO2 Bld"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-06T04:43:00-05:00",
        "valueQuantity": {
          "value": 36.3,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1892875",
      "resource": {
        "resourceType": "Observation",
        "id": "1892875",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:23.045-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "60"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "718-7",
              "display": "Hgb"
            }
          ],
          "text": "Hgb"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-06T02:50:00-05:00",
        "valueQuantity": {
          "value": 11.3,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893261",
      "resource": {
        "resourceType": "Observation",
        "id": "1893261",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:28.791-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "877"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "786-4",
              "display": "MCHC"
            }
          ],
          "text": "MCHC"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-06T02:50:00-05:00",
        "valueQuantity": {
          "value": 34,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894161",
      "resource": {
        "resourceType": "Observation",
        "id": "1894161",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:39.913-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "11516"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "30385-9",
              "display": "RDW"
            }
          ],
          "text": "RDW"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-06T02:50:00-05:00",
        "valueQuantity": {
          "value": 14.9,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894155",
      "resource": {
        "resourceType": "Observation",
        "id": "1894155",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:39.913-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "63"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "789-8",
              "display": "RBC #"
            }
          ],
          "text": "RBC #"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-06T02:50:00-05:00",
        "valueQuantity": {
          "value": 3.7,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894154",
      "resource": {
        "resourceType": "Observation",
        "id": "1894154",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:39.913-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "61"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "20570-8",
              "display": "Hct"
            }
          ],
          "text": "Hct"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-06T02:50:00-05:00",
        "valueQuantity": {
          "value": 34,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894160",
      "resource": {
        "resourceType": "Observation",
        "id": "1894160",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:39.913-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "876"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "785-6",
              "display": "MCH"
            }
          ],
          "text": "MCH"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-06T02:50:00-05:00",
        "valueQuantity": {
          "value": 31,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894157",
      "resource": {
        "resourceType": "Observation",
        "id": "1894157",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:39.913-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "758"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2692-2",
              "display": "Osmolality SerPl Qn"
            }
          ],
          "text": "Osmolality SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-06T02:50:00-05:00",
        "valueQuantity": {
          "value": 285,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894159",
      "resource": {
        "resourceType": "Observation",
        "id": "1894159",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:39.913-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "875"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "787-2",
              "display": "MCV"
            }
          ],
          "text": "MCV"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-06T02:50:00-05:00",
        "valueQuantity": {
          "value": 93,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894156",
      "resource": {
        "resourceType": "Observation",
        "id": "1894156",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:39.913-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "62"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "26464-8",
              "display": "WBC #"
            }
          ],
          "text": "WBC #"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-06T02:50:00-05:00",
        "valueQuantity": {
          "value": 32.1,
          "system": "http://unitsofmeasure.org"
        },
        "comment": "Critical Value Called"
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894158",
      "resource": {
        "resourceType": "Observation",
        "id": "1894158",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:39.913-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1274"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2345-7",
              "display": "Glucose SerPl Qn"
            }
          ],
          "text": "Glucose SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-06T02:50:00-05:00",
        "valueQuantity": {
          "value": 192,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1897279",
      "resource": {
        "resourceType": "Observation",
        "id": "1897279",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:24.131-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "7978"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "7978",
              "display": "Insulin Reg Hum"
            }
          ],
          "text": "Insulin Reg Hum"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-06T00:45:00-05:00",
        "valueQuantity": {
          "value": 1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1897210",
      "resource": {
        "resourceType": "Observation",
        "id": "1897210",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:24.131-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "5779"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "5779",
              "display": "Cimetidine Inj"
            }
          ],
          "text": "Cimetidine Inj"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-06T00:45:00-05:00",
        "valueQuantity": {
          "value": 1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896805",
      "resource": {
        "resourceType": "Observation",
        "id": "1896805",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "78"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "4105-3",
              "display": "Acetaminophen"
            }
          ],
          "text": "Acetaminophen"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-06T00:45:00-05:00",
        "valueQuantity": {
          "value": 325,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896985",
      "resource": {
        "resourceType": "Observation",
        "id": "1896985",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "2622"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "2622",
              "display": "Acetaminophn Sup"
            }
          ],
          "text": "Acetaminophn Sup"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-06T00:45:00-05:00",
        "valueQuantity": {
          "value": 650,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896519",
      "resource": {
        "resourceType": "Observation",
        "id": "1896519",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:12.976-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "17778"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "17778",
              "display": "Benazepril"
            }
          ],
          "text": "Benazepril"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-06T00:45:00-05:00",
        "valueQuantity": {
          "value": 10,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1897346",
      "resource": {
        "resourceType": "Observation",
        "id": "1897346",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:24.131-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "11574"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "11574",
              "display": "Heparin Flush"
            }
          ],
          "text": "Heparin Flush"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-06T00:45:00-05:00",
        "valueQuantity": {
          "value": 1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1897324",
      "resource": {
        "resourceType": "Observation",
        "id": "1897324",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:24.131-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "10966"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "10966",
              "display": "Albuterol Neb Sol"
            }
          ],
          "text": "Albuterol Neb Sol"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-06T00:45:00-05:00",
        "valueQuantity": {
          "value": 2.49,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1897310",
      "resource": {
        "resourceType": "Observation",
        "id": "1897310",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:24.131-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "10920"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "10920",
              "display": "Ticarcillin/Clavulanate Inj"
            }
          ],
          "text": "Ticarcillin/Clavulanate Inj"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-06T00:45:00-05:00",
        "valueQuantity": {
          "value": 1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1897330",
      "resource": {
        "resourceType": "Observation",
        "id": "1897330",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:24.131-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "11021"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "11021",
              "display": "Heparin Artflush"
            }
          ],
          "text": "Heparin Artflush"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-06T00:45:00-05:00",
        "valueQuantity": {
          "value": 1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1897256",
      "resource": {
        "resourceType": "Observation",
        "id": "1897256",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:24.131-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "7261"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "7261",
              "display": "Docusate NA Syrup"
            }
          ],
          "text": "Docusate NA Syrup"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-06T00:45:00-05:00",
        "valueQuantity": {
          "value": 3,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896479",
      "resource": {
        "resourceType": "Observation",
        "id": "1896479",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:12.976-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "16580"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "16580",
              "display": "Nimodipine"
            }
          ],
          "text": "Nimodipine"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-06T00:45:00-05:00",
        "valueQuantity": {
          "value": 30,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896501",
      "resource": {
        "resourceType": "Observation",
        "id": "1896501",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:12.976-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "16640"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "16640",
              "display": "Ondansetron Inj"
            }
          ],
          "text": "Ondansetron Inj"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-06T00:45:00-05:00",
        "valueQuantity": {
          "value": 1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896863",
      "resource": {
        "resourceType": "Observation",
        "id": "1896863",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "914"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "914",
              "display": "Acetamnphn W/Cod"
            }
          ],
          "text": "Acetamnphn W/Cod"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-06T00:45:00-05:00",
        "valueQuantity": {
          "value": 1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1897262",
      "resource": {
        "resourceType": "Observation",
        "id": "1897262",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:24.131-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "7468"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "7468",
              "display": "Albuterol Inhl"
            }
          ],
          "text": "Albuterol Inhl"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-06T00:45:00-05:00",
        "valueQuantity": {
          "value": 1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894153",
      "resource": {
        "resourceType": "Observation",
        "id": "1894153",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:39.913-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "957"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "957",
              "display": "NaCl"
            }
          ],
          "text": "NaCl"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-06T00:45:00-05:00",
        "valueQuantity": {
          "value": 1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896468",
      "resource": {
        "resourceType": "Observation",
        "id": "1896468",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:12.976-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "16016"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "16016",
              "display": "Enteral Glucose Intol(Glytrol)"
            }
          ],
          "text": "Enteral Glucose Intol(Glytrol)"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-06T00:45:00-05:00",
        "valueQuantity": {
          "value": 1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894152",
      "resource": {
        "resourceType": "Observation",
        "id": "1894152",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:39.913-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6135"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "8310-5",
              "display": "Temperature"
            }
          ],
          "text": "Temperature"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T22:56:00-05:00",
        "valueQuantity": {
          "value": 99.8,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1892980",
      "resource": {
        "resourceType": "Observation",
        "id": "1892980",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:23.045-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "207"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "3150-0",
              "display": "Inspired O2"
            }
          ],
          "text": "Inspired O2"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T22:56:00-05:00",
        "valueQuantity": {
          "value": 35,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894148",
      "resource": {
        "resourceType": "Observation",
        "id": "1894148",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:39.913-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6132"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "33254-4",
              "display": "pH Corrected"
            }
          ],
          "text": "pH Corrected"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T22:56:00-05:00",
        "valueQuantity": {
          "value": 7.408,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894147",
      "resource": {
        "resourceType": "Observation",
        "id": "1894147",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:39.913-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6133"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "34705-4",
              "display": "PCO2 Corrected"
            }
          ],
          "text": "PCO2 Corrected"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T22:56:00-05:00",
        "valueQuantity": {
          "value": 38.5,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894149",
      "resource": {
        "resourceType": "Observation",
        "id": "1894149",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:39.913-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6136"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "1959-6",
              "display": "HCO3 Bld Qn Calc"
            }
          ],
          "text": "HCO3 Bld Qn Calc"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T22:56:00-05:00",
        "valueQuantity": {
          "value": 24.4,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894144",
      "resource": {
        "resourceType": "Observation",
        "id": "1894144",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:39.913-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1274"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2345-7",
              "display": "Glucose SerPl Qn"
            }
          ],
          "text": "Glucose SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T22:56:00-05:00",
        "valueQuantity": {
          "value": 146,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894151",
      "resource": {
        "resourceType": "Observation",
        "id": "1894151",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:39.913-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6141"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "20565-8",
              "display": "CO2 Total Bld Calc"
            }
          ],
          "text": "CO2 Total Bld Calc"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T22:56:00-05:00",
        "valueQuantity": {
          "value": 25.5,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894146",
      "resource": {
        "resourceType": "Observation",
        "id": "1894146",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:39.913-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6134"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "19254-2",
              "display": "PO2 Corrected"
            }
          ],
          "text": "PO2 Corrected"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T22:56:00-05:00",
        "valueQuantity": {
          "value": 87,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893351",
      "resource": {
        "resourceType": "Observation",
        "id": "1893351",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:28.791-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6140"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "11556-8",
              "display": "PO2"
            }
          ],
          "text": "PO2"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T22:56:00-05:00",
        "valueQuantity": {
          "value": 84,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894150",
      "resource": {
        "resourceType": "Observation",
        "id": "1894150",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:39.913-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6131"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "11558-4",
              "display": "pH Bld"
            }
          ],
          "text": "pH Bld"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T22:56:00-05:00",
        "valueQuantity": {
          "value": 7.418,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894145",
      "resource": {
        "resourceType": "Observation",
        "id": "1894145",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:39.913-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6139"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "11557-6",
              "display": "PCO2 Bld"
            }
          ],
          "text": "PCO2 Bld"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T22:56:00-05:00",
        "valueQuantity": {
          "value": 37.4,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1897217",
      "resource": {
        "resourceType": "Observation",
        "id": "1897217",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:24.131-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6131"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "11558-4",
              "display": "pH Bld"
            }
          ],
          "text": "pH Bld"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T20:30:00-05:00",
        "valueQuantity": {
          "value": 7.423,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1897226",
      "resource": {
        "resourceType": "Observation",
        "id": "1897226",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:24.131-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6139"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "11557-6",
              "display": "PCO2 Bld"
            }
          ],
          "text": "PCO2 Bld"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T20:30:00-05:00",
        "valueQuantity": {
          "value": 35.7,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894143",
      "resource": {
        "resourceType": "Observation",
        "id": "1894143",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:39.913-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6140"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "11556-8",
              "display": "PO2"
            }
          ],
          "text": "PO2"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T20:30:00-05:00",
        "valueQuantity": {
          "value": 90,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894142",
      "resource": {
        "resourceType": "Observation",
        "id": "1894142",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:39.913-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6136"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "1959-6",
              "display": "HCO3 Bld Qn Calc"
            }
          ],
          "text": "HCO3 Bld Qn Calc"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T20:30:00-05:00",
        "valueQuantity": {
          "value": 23.5,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896825",
      "resource": {
        "resourceType": "Observation",
        "id": "1896825",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "207"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "3150-0",
              "display": "Inspired O2"
            }
          ],
          "text": "Inspired O2"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T20:30:00-05:00",
        "valueQuantity": {
          "value": 35,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1897235",
      "resource": {
        "resourceType": "Observation",
        "id": "1897235",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:24.131-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6141"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "20565-8",
              "display": "CO2 Total Bld Calc"
            }
          ],
          "text": "CO2 Total Bld Calc"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T20:30:00-05:00",
        "valueQuantity": {
          "value": 24.6,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1897222",
      "resource": {
        "resourceType": "Observation",
        "id": "1897222",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:24.131-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6136"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "1959-6",
              "display": "HCO3 Bld Qn Calc"
            }
          ],
          "text": "HCO3 Bld Qn Calc"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T18:33:00-05:00",
        "valueQuantity": {
          "value": 25.2,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896826",
      "resource": {
        "resourceType": "Observation",
        "id": "1896826",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "207"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "3150-0",
              "display": "Inspired O2"
            }
          ],
          "text": "Inspired O2"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T18:33:00-05:00",
        "valueQuantity": {
          "value": 30,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1897236",
      "resource": {
        "resourceType": "Observation",
        "id": "1897236",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:24.131-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6141"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "20565-8",
              "display": "CO2 Total Bld Calc"
            }
          ],
          "text": "CO2 Total Bld Calc"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T18:33:00-05:00",
        "valueQuantity": {
          "value": 26.3,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1897231",
      "resource": {
        "resourceType": "Observation",
        "id": "1897231",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:24.131-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6140"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "11556-8",
              "display": "PO2"
            }
          ],
          "text": "PO2"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T18:33:00-05:00",
        "valueQuantity": {
          "value": 94,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1897218",
      "resource": {
        "resourceType": "Observation",
        "id": "1897218",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:24.131-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6131"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "11558-4",
              "display": "pH Bld"
            }
          ],
          "text": "pH Bld"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T18:33:00-05:00",
        "valueQuantity": {
          "value": 7.465000000000001,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896892",
      "resource": {
        "resourceType": "Observation",
        "id": "1896892",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1274"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2345-7",
              "display": "Glucose SerPl Qn"
            }
          ],
          "text": "Glucose SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T18:33:00-05:00",
        "valueQuantity": {
          "value": 146,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1897227",
      "resource": {
        "resourceType": "Observation",
        "id": "1897227",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:24.131-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6139"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "11557-6",
              "display": "PCO2 Bld"
            }
          ],
          "text": "PCO2 Bld"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T18:33:00-05:00",
        "valueQuantity": {
          "value": 34.7,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896893",
      "resource": {
        "resourceType": "Observation",
        "id": "1896893",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1274"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2345-7",
              "display": "Glucose SerPl Qn"
            }
          ],
          "text": "Glucose SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T17:13:00-05:00",
        "valueQuantity": {
          "value": 112,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896894",
      "resource": {
        "resourceType": "Observation",
        "id": "1896894",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1274"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2345-7",
              "display": "Glucose SerPl Qn"
            }
          ],
          "text": "Glucose SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T17:06:00-05:00",
        "valueQuantity": {
          "value": 118,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1897228",
      "resource": {
        "resourceType": "Observation",
        "id": "1897228",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:24.131-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6139"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "11557-6",
              "display": "PCO2 Bld"
            }
          ],
          "text": "PCO2 Bld"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T15:02:00-05:00",
        "valueQuantity": {
          "value": 30.6,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896895",
      "resource": {
        "resourceType": "Observation",
        "id": "1896895",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1274"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2345-7",
              "display": "Glucose SerPl Qn"
            }
          ],
          "text": "Glucose SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T15:02:00-05:00",
        "valueQuantity": {
          "value": 145,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896827",
      "resource": {
        "resourceType": "Observation",
        "id": "1896827",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "207"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "3150-0",
              "display": "Inspired O2"
            }
          ],
          "text": "Inspired O2"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T15:02:00-05:00",
        "valueQuantity": {
          "value": 30,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1897237",
      "resource": {
        "resourceType": "Observation",
        "id": "1897237",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:24.131-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6141"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "20565-8",
              "display": "CO2 Total Bld Calc"
            }
          ],
          "text": "CO2 Total Bld Calc"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T15:02:00-05:00",
        "valueQuantity": {
          "value": 23.5,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1897223",
      "resource": {
        "resourceType": "Observation",
        "id": "1897223",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:24.131-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6136"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "1959-6",
              "display": "HCO3 Bld Qn Calc"
            }
          ],
          "text": "HCO3 Bld Qn Calc"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T15:02:00-05:00",
        "valueQuantity": {
          "value": 22.5,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1897219",
      "resource": {
        "resourceType": "Observation",
        "id": "1897219",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:24.131-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6131"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "11558-4",
              "display": "pH Bld"
            }
          ],
          "text": "pH Bld"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T15:02:00-05:00",
        "valueQuantity": {
          "value": 7.471,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1897232",
      "resource": {
        "resourceType": "Observation",
        "id": "1897232",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:24.131-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6140"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "11556-8",
              "display": "PO2"
            }
          ],
          "text": "PO2"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T15:02:00-05:00",
        "valueQuantity": {
          "value": 92,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894138",
      "resource": {
        "resourceType": "Observation",
        "id": "1894138",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:39.913-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "45"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2823-3",
              "display": "Potassium SerPl Qn"
            }
          ],
          "text": "Potassium SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T11:41:00-05:00",
        "valueQuantity": {
          "value": 3.8,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894140",
      "resource": {
        "resourceType": "Observation",
        "id": "1894140",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:39.913-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "46"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2075-0",
              "display": "Chloride SerPl Qn"
            }
          ],
          "text": "Chloride SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T11:41:00-05:00",
        "valueQuantity": {
          "value": 104,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894141",
      "resource": {
        "resourceType": "Observation",
        "id": "1894141",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:39.913-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "47"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2028-9",
              "display": "CO2-Tot SerPl Qn"
            }
          ],
          "text": "CO2-Tot SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T11:41:00-05:00",
        "valueQuantity": {
          "value": 23,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894139",
      "resource": {
        "resourceType": "Observation",
        "id": "1894139",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:39.913-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "44"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2951-2",
              "display": "Sodium SerPl Qn"
            }
          ],
          "text": "Sodium SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T11:41:00-05:00",
        "valueQuantity": {
          "value": 133,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894137",
      "resource": {
        "resourceType": "Observation",
        "id": "1894137",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:39.913-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "9876"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "9876",
              "display": "Total Clinic Charge"
            }
          ],
          "text": "Total Clinic Charge"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T10:36:00-05:00",
        "valueQuantity": {
          "value": 0,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896896",
      "resource": {
        "resourceType": "Observation",
        "id": "1896896",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1274"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2345-7",
              "display": "Glucose SerPl Qn"
            }
          ],
          "text": "Glucose SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T09:20:00-05:00",
        "valueQuantity": {
          "value": 105,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894136",
      "resource": {
        "resourceType": "Observation",
        "id": "1894136",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:39.913-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1274"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2345-7",
              "display": "Glucose SerPl Qn"
            }
          ],
          "text": "Glucose SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T07:46:00-05:00",
        "valueQuantity": {
          "value": 116,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894131",
      "resource": {
        "resourceType": "Observation",
        "id": "1894131",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:39.913-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "46"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2075-0",
              "display": "Chloride SerPl Qn"
            }
          ],
          "text": "Chloride SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T06:50:00-05:00",
        "valueQuantity": {
          "value": 106,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893669",
      "resource": {
        "resourceType": "Observation",
        "id": "1893669",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:34.363-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1276"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "3094-0",
              "display": "BUN SerPl Qn"
            }
          ],
          "text": "BUN SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T06:50:00-05:00",
        "valueQuantity": {
          "value": 12,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893672",
      "resource": {
        "resourceType": "Observation",
        "id": "1893672",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:34.363-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "44"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2951-2",
              "display": "Sodium SerPl Qn"
            }
          ],
          "text": "Sodium SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T06:50:00-05:00",
        "valueQuantity": {
          "value": 134,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894130",
      "resource": {
        "resourceType": "Observation",
        "id": "1894130",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:39.913-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "45"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2823-3",
              "display": "Potassium SerPl Qn"
            }
          ],
          "text": "Potassium SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T06:50:00-05:00",
        "valueQuantity": {
          "value": 3.9,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894133",
      "resource": {
        "resourceType": "Observation",
        "id": "1894133",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:39.913-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "877"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "786-4",
              "display": "MCHC"
            }
          ],
          "text": "MCHC"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T06:50:00-05:00",
        "valueQuantity": {
          "value": 34,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1892876",
      "resource": {
        "resourceType": "Observation",
        "id": "1892876",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:23.045-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "60"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "718-7",
              "display": "Hgb"
            }
          ],
          "text": "Hgb"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T06:50:00-05:00",
        "valueQuantity": {
          "value": 12,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894132",
      "resource": {
        "resourceType": "Observation",
        "id": "1894132",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:39.913-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "875"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "787-2",
              "display": "MCV"
            }
          ],
          "text": "MCV"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T06:50:00-05:00",
        "valueQuantity": {
          "value": 92,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894135",
      "resource": {
        "resourceType": "Observation",
        "id": "1894135",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:39.913-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "11516"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "30385-9",
              "display": "RDW"
            }
          ],
          "text": "RDW"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T06:50:00-05:00",
        "valueQuantity": {
          "value": 15.2,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1894134",
      "resource": {
        "resourceType": "Observation",
        "id": "1894134",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:39.913-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "876"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "785-6",
              "display": "MCH"
            }
          ],
          "text": "MCH"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T06:50:00-05:00",
        "valueQuantity": {
          "value": 31,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893665",
      "resource": {
        "resourceType": "Observation",
        "id": "1893665",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:34.363-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "62"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "26464-8",
              "display": "WBC #"
            }
          ],
          "text": "WBC #"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T06:50:00-05:00",
        "valueQuantity": {
          "value": 37.7,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893667",
      "resource": {
        "resourceType": "Observation",
        "id": "1893667",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:34.363-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "63"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "789-8",
              "display": "RBC #"
            }
          ],
          "text": "RBC #"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T06:50:00-05:00",
        "valueQuantity": {
          "value": 3.8,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893670",
      "resource": {
        "resourceType": "Observation",
        "id": "1893670",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:34.363-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "256"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2160-0",
              "display": "Creatinine SerPl Qn"
            }
          ],
          "text": "Creatinine SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T06:50:00-05:00",
        "valueQuantity": {
          "value": 0.9,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893250",
      "resource": {
        "resourceType": "Observation",
        "id": "1893250",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:28.791-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "758"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2692-2",
              "display": "Osmolality SerPl Qn"
            }
          ],
          "text": "Osmolality SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T06:50:00-05:00",
        "valueQuantity": {
          "value": 288,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893666",
      "resource": {
        "resourceType": "Observation",
        "id": "1893666",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:34.363-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "61"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "20570-8",
              "display": "Hct"
            }
          ],
          "text": "Hct"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T06:50:00-05:00",
        "valueQuantity": {
          "value": 35,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893668",
      "resource": {
        "resourceType": "Observation",
        "id": "1893668",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:34.363-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "213"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "26515-7",
              "display": "Platelet #"
            }
          ],
          "text": "Platelet #"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T06:50:00-05:00",
        "valueQuantity": {
          "value": 254,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893671",
      "resource": {
        "resourceType": "Observation",
        "id": "1893671",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:34.363-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "47"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2028-9",
              "display": "CO2-Tot SerPl Qn"
            }
          ],
          "text": "CO2-Tot SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T06:50:00-05:00",
        "valueQuantity": {
          "value": 23,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893660",
      "resource": {
        "resourceType": "Observation",
        "id": "1893660",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:34.363-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6133"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "34705-4",
              "display": "PCO2 Corrected"
            }
          ],
          "text": "PCO2 Corrected"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T04:40:00-05:00",
        "valueQuantity": {
          "value": 31.1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893663",
      "resource": {
        "resourceType": "Observation",
        "id": "1893663",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:34.363-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6135"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "8310-5",
              "display": "Temperature"
            }
          ],
          "text": "Temperature"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T04:40:00-05:00",
        "valueQuantity": {
          "value": 99.5,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893661",
      "resource": {
        "resourceType": "Observation",
        "id": "1893661",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:34.363-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6136"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "1959-6",
              "display": "HCO3 Bld Qn Calc"
            }
          ],
          "text": "HCO3 Bld Qn Calc"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T04:40:00-05:00",
        "valueQuantity": {
          "value": 21.1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893348",
      "resource": {
        "resourceType": "Observation",
        "id": "1893348",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:28.791-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6139"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "11557-6",
              "display": "PCO2 Bld"
            }
          ],
          "text": "PCO2 Bld"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T04:40:00-05:00",
        "valueQuantity": {
          "value": 30.4,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893659",
      "resource": {
        "resourceType": "Observation",
        "id": "1893659",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:34.363-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6134"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "19254-2",
              "display": "PO2 Corrected"
            }
          ],
          "text": "PO2 Corrected"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T04:40:00-05:00",
        "valueQuantity": {
          "value": 87,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893664",
      "resource": {
        "resourceType": "Observation",
        "id": "1893664",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:34.363-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "207"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "3150-0",
              "display": "Inspired O2"
            }
          ],
          "text": "Inspired O2"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T04:40:00-05:00",
        "valueQuantity": {
          "value": 30,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893662",
      "resource": {
        "resourceType": "Observation",
        "id": "1893662",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:34.363-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6132"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "33254-4",
              "display": "pH Corrected"
            }
          ],
          "text": "pH Corrected"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T04:40:00-05:00",
        "valueQuantity": {
          "value": 7.438000000000001,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893339",
      "resource": {
        "resourceType": "Observation",
        "id": "1893339",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:28.791-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6131"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "11558-4",
              "display": "pH Bld"
            }
          ],
          "text": "pH Bld"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T04:40:00-05:00",
        "valueQuantity": {
          "value": 7.445,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893352",
      "resource": {
        "resourceType": "Observation",
        "id": "1893352",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:28.791-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6140"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "11556-8",
              "display": "PO2"
            }
          ],
          "text": "PO2"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T04:40:00-05:00",
        "valueQuantity": {
          "value": 85,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893424",
      "resource": {
        "resourceType": "Observation",
        "id": "1893424",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:28.791-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6141"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "20565-8",
              "display": "CO2 Total Bld Calc"
            }
          ],
          "text": "CO2 Total Bld Calc"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T04:40:00-05:00",
        "valueQuantity": {
          "value": 22,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896897",
      "resource": {
        "resourceType": "Observation",
        "id": "1896897",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1274"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2345-7",
              "display": "Glucose SerPl Qn"
            }
          ],
          "text": "Glucose SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T04:40:00-05:00",
        "valueQuantity": {
          "value": 158,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896898",
      "resource": {
        "resourceType": "Observation",
        "id": "1896898",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1274"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2345-7",
              "display": "Glucose SerPl Qn"
            }
          ],
          "text": "Glucose SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T02:55:00-05:00",
        "valueQuantity": {
          "value": 185,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893658",
      "resource": {
        "resourceType": "Observation",
        "id": "1893658",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:34.363-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1274"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2345-7",
              "display": "Glucose SerPl Qn"
            }
          ],
          "text": "Glucose SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-05T00:55:00-05:00",
        "valueQuantity": {
          "value": 212,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893655",
      "resource": {
        "resourceType": "Observation",
        "id": "1893655",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:34.363-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6140"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "11556-8",
              "display": "PO2"
            }
          ],
          "text": "PO2"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T23:06:00-05:00",
        "valueQuantity": {
          "value": 86,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893650",
      "resource": {
        "resourceType": "Observation",
        "id": "1893650",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:34.363-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6133"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "34705-4",
              "display": "PCO2 Corrected"
            }
          ],
          "text": "PCO2 Corrected"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T23:06:00-05:00",
        "valueQuantity": {
          "value": 28.8,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893652",
      "resource": {
        "resourceType": "Observation",
        "id": "1893652",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:34.363-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6132"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "33254-4",
              "display": "pH Corrected"
            }
          ],
          "text": "pH Corrected"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T23:06:00-05:00",
        "valueQuantity": {
          "value": 7.455,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893651",
      "resource": {
        "resourceType": "Observation",
        "id": "1893651",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:34.363-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6136"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "1959-6",
              "display": "HCO3 Bld Qn Calc"
            }
          ],
          "text": "HCO3 Bld Qn Calc"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T23:06:00-05:00",
        "valueQuantity": {
          "value": 20.3,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893648",
      "resource": {
        "resourceType": "Observation",
        "id": "1893648",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:34.363-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6139"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "11557-6",
              "display": "PCO2 Bld"
            }
          ],
          "text": "PCO2 Bld"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T23:06:00-05:00",
        "valueQuantity": {
          "value": 28.2,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893653",
      "resource": {
        "resourceType": "Observation",
        "id": "1893653",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:34.363-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6131"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "11558-4",
              "display": "pH Bld"
            }
          ],
          "text": "pH Bld"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T23:06:00-05:00",
        "valueQuantity": {
          "value": 7.462000000000001,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893656",
      "resource": {
        "resourceType": "Observation",
        "id": "1893656",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:34.363-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6135"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "8310-5",
              "display": "Temperature"
            }
          ],
          "text": "Temperature"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T23:06:00-05:00",
        "valueQuantity": {
          "value": 99.4,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893654",
      "resource": {
        "resourceType": "Observation",
        "id": "1893654",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:34.363-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6141"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "20565-8",
              "display": "CO2 Total Bld Calc"
            }
          ],
          "text": "CO2 Total Bld Calc"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T23:06:00-05:00",
        "valueQuantity": {
          "value": 21.2,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893649",
      "resource": {
        "resourceType": "Observation",
        "id": "1893649",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:34.363-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6134"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "19254-2",
              "display": "PO2 Corrected"
            }
          ],
          "text": "PO2 Corrected"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T23:06:00-05:00",
        "valueQuantity": {
          "value": 89,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893657",
      "resource": {
        "resourceType": "Observation",
        "id": "1893657",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:34.363-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "207"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "3150-0",
              "display": "Inspired O2"
            }
          ],
          "text": "Inspired O2"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T23:06:00-05:00",
        "valueQuantity": {
          "value": 30,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893645",
      "resource": {
        "resourceType": "Observation",
        "id": "1893645",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:34.363-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "875"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "787-2",
              "display": "MCV"
            }
          ],
          "text": "MCV"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T23:05:00-05:00",
        "valueQuantity": {
          "value": 93,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893643",
      "resource": {
        "resourceType": "Observation",
        "id": "1893643",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:34.363-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "44"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2951-2",
              "display": "Sodium SerPl Qn"
            }
          ],
          "text": "Sodium SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T23:05:00-05:00",
        "valueQuantity": {
          "value": 134,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893646",
      "resource": {
        "resourceType": "Observation",
        "id": "1893646",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:34.363-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "877"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "786-4",
              "display": "MCHC"
            }
          ],
          "text": "MCHC"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T23:05:00-05:00",
        "valueQuantity": {
          "value": 33,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893644",
      "resource": {
        "resourceType": "Observation",
        "id": "1893644",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:34.363-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "45"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2823-3",
              "display": "Potassium SerPl Qn"
            }
          ],
          "text": "Potassium SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T23:05:00-05:00",
        "valueQuantity": {
          "value": 4,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893638",
      "resource": {
        "resourceType": "Observation",
        "id": "1893638",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:34.363-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "63"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "789-8",
              "display": "RBC #"
            }
          ],
          "text": "RBC #"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T23:05:00-05:00",
        "valueQuantity": {
          "value": 4,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893647",
      "resource": {
        "resourceType": "Observation",
        "id": "1893647",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:34.363-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "876"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "785-6",
              "display": "MCH"
            }
          ],
          "text": "MCH"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T23:05:00-05:00",
        "valueQuantity": {
          "value": 31,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1892877",
      "resource": {
        "resourceType": "Observation",
        "id": "1892877",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:23.045-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "60"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "718-7",
              "display": "Hgb"
            }
          ],
          "text": "Hgb"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T23:05:00-05:00",
        "valueQuantity": {
          "value": 12.4,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893639",
      "resource": {
        "resourceType": "Observation",
        "id": "1893639",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:34.363-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "61"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "20570-8",
              "display": "Hct"
            }
          ],
          "text": "Hct"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T23:05:00-05:00",
        "valueQuantity": {
          "value": 37,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893640",
      "resource": {
        "resourceType": "Observation",
        "id": "1893640",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:34.363-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "62"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "26464-8",
              "display": "WBC #"
            }
          ],
          "text": "WBC #"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T23:05:00-05:00",
        "valueQuantity": {
          "value": 36.5,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893274",
      "resource": {
        "resourceType": "Observation",
        "id": "1893274",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:28.791-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1274"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2345-7",
              "display": "Glucose SerPl Qn"
            }
          ],
          "text": "Glucose SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T23:05:00-05:00",
        "valueQuantity": {
          "value": 208,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893365",
      "resource": {
        "resourceType": "Observation",
        "id": "1893365",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:28.791-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "11516"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "30385-9",
              "display": "RDW"
            }
          ],
          "text": "RDW"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T23:05:00-05:00",
        "valueQuantity": {
          "value": 15.4,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893641",
      "resource": {
        "resourceType": "Observation",
        "id": "1893641",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:34.363-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "758"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2692-2",
              "display": "Osmolality SerPl Qn"
            }
          ],
          "text": "Osmolality SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T23:05:00-05:00",
        "valueQuantity": {
          "value": 288,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893642",
      "resource": {
        "resourceType": "Observation",
        "id": "1893642",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:34.363-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "47"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2028-9",
              "display": "CO2-Tot SerPl Qn"
            }
          ],
          "text": "CO2-Tot SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T23:05:00-05:00",
        "valueQuantity": {
          "value": 23,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1892863",
      "resource": {
        "resourceType": "Observation",
        "id": "1892863",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:23.045-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "46"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2075-0",
              "display": "Chloride SerPl Qn"
            }
          ],
          "text": "Chloride SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T23:05:00-05:00",
        "valueQuantity": {
          "value": 106,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896899",
      "resource": {
        "resourceType": "Observation",
        "id": "1896899",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1274"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2345-7",
              "display": "Glucose SerPl Qn"
            }
          ],
          "text": "Glucose SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T19:59:00-05:00",
        "valueQuantity": {
          "value": 179,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896841",
      "resource": {
        "resourceType": "Observation",
        "id": "1896841",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "758"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2692-2",
              "display": "Osmolality SerPl Qn"
            }
          ],
          "text": "Osmolality SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T18:05:00-05:00",
        "valueQuantity": {
          "value": 287,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893637",
      "resource": {
        "resourceType": "Observation",
        "id": "1893637",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:34.363-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "45"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2823-3",
              "display": "Potassium SerPl Qn"
            }
          ],
          "text": "Potassium SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T18:05:00-05:00",
        "valueQuantity": {
          "value": 3.6,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896582",
      "resource": {
        "resourceType": "Observation",
        "id": "1896582",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:12.976-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "47"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2028-9",
              "display": "CO2-Tot SerPl Qn"
            }
          ],
          "text": "CO2-Tot SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T18:05:00-05:00",
        "valueQuantity": {
          "value": 21,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896545",
      "resource": {
        "resourceType": "Observation",
        "id": "1896545",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:12.976-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "44"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2951-2",
              "display": "Sodium SerPl Qn"
            }
          ],
          "text": "Sodium SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T18:05:00-05:00",
        "valueQuantity": {
          "value": 134,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893636",
      "resource": {
        "resourceType": "Observation",
        "id": "1893636",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:34.363-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "46"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2075-0",
              "display": "Chloride SerPl Qn"
            }
          ],
          "text": "Chloride SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T18:05:00-05:00",
        "valueQuantity": {
          "value": 106,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896900",
      "resource": {
        "resourceType": "Observation",
        "id": "1896900",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1274"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2345-7",
              "display": "Glucose SerPl Qn"
            }
          ],
          "text": "Glucose SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T17:51:00-05:00",
        "valueQuantity": {
          "value": 203,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896901",
      "resource": {
        "resourceType": "Observation",
        "id": "1896901",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1274"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2345-7",
              "display": "Glucose SerPl Qn"
            }
          ],
          "text": "Glucose SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T15:38:00-05:00",
        "valueQuantity": {
          "value": 261,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896902",
      "resource": {
        "resourceType": "Observation",
        "id": "1896902",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1274"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2345-7",
              "display": "Glucose SerPl Qn"
            }
          ],
          "text": "Glucose SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T13:56:00-05:00",
        "valueQuantity": {
          "value": 203,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893635",
      "resource": {
        "resourceType": "Observation",
        "id": "1893635",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:34.363-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1274"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2345-7",
              "display": "Glucose SerPl Qn"
            }
          ],
          "text": "Glucose SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T12:14:00-05:00",
        "valueQuantity": {
          "value": 152,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896856",
      "resource": {
        "resourceType": "Observation",
        "id": "1896856",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "877"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "786-4",
              "display": "MCHC"
            }
          ],
          "text": "MCHC"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T11:16:00-05:00",
        "valueQuantity": {
          "value": 33,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1897338",
      "resource": {
        "resourceType": "Observation",
        "id": "1897338",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:24.131-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "11516"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "30385-9",
              "display": "RDW"
            }
          ],
          "text": "RDW"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T11:16:00-05:00",
        "valueQuantity": {
          "value": 15.5,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896596",
      "resource": {
        "resourceType": "Observation",
        "id": "1896596",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:12.976-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "62"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "26464-8",
              "display": "WBC #"
            }
          ],
          "text": "WBC #"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T11:16:00-05:00",
        "valueQuantity": {
          "value": 33,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896595",
      "resource": {
        "resourceType": "Observation",
        "id": "1896595",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:12.976-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "60"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "718-7",
              "display": "Hgb"
            }
          ],
          "text": "Hgb"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T11:16:00-05:00",
        "valueQuantity": {
          "value": 13.5,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896597",
      "resource": {
        "resourceType": "Observation",
        "id": "1896597",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:12.976-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "63"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "789-8",
              "display": "RBC #"
            }
          ],
          "text": "RBC #"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T11:16:00-05:00",
        "valueQuantity": {
          "value": 4.3,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896571",
      "resource": {
        "resourceType": "Observation",
        "id": "1896571",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:12.976-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "46"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2075-0",
              "display": "Chloride SerPl Qn"
            }
          ],
          "text": "Chloride SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T11:16:00-05:00",
        "valueQuantity": {
          "value": 106,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896854",
      "resource": {
        "resourceType": "Observation",
        "id": "1896854",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "875"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "787-2",
              "display": "MCV"
            }
          ],
          "text": "MCV"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T11:16:00-05:00",
        "valueQuantity": {
          "value": 93,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896842",
      "resource": {
        "resourceType": "Observation",
        "id": "1896842",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "758"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2692-2",
              "display": "Osmolality SerPl Qn"
            }
          ],
          "text": "Osmolality SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T11:16:00-05:00",
        "valueQuantity": {
          "value": 286,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893634",
      "resource": {
        "resourceType": "Observation",
        "id": "1893634",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:34.363-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "61"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "20570-8",
              "display": "Hct"
            }
          ],
          "text": "Hct"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T11:16:00-05:00",
        "valueQuantity": {
          "value": 40,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896559",
      "resource": {
        "resourceType": "Observation",
        "id": "1896559",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:12.976-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "45"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2823-3",
              "display": "Potassium SerPl Qn"
            }
          ],
          "text": "Potassium SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T11:16:00-05:00",
        "valueQuantity": {
          "value": 3.7,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896546",
      "resource": {
        "resourceType": "Observation",
        "id": "1896546",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:12.976-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "44"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2951-2",
              "display": "Sodium SerPl Qn"
            }
          ],
          "text": "Sodium SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T11:16:00-05:00",
        "valueQuantity": {
          "value": 135,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896855",
      "resource": {
        "resourceType": "Observation",
        "id": "1896855",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "876"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "785-6",
              "display": "MCH"
            }
          ],
          "text": "MCH"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T11:16:00-05:00",
        "valueQuantity": {
          "value": 31,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896583",
      "resource": {
        "resourceType": "Observation",
        "id": "1896583",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:12.976-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "47"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2028-9",
              "display": "CO2-Tot SerPl Qn"
            }
          ],
          "text": "CO2-Tot SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T11:16:00-05:00",
        "valueQuantity": {
          "value": 21,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896903",
      "resource": {
        "resourceType": "Observation",
        "id": "1896903",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1274"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2345-7",
              "display": "Glucose SerPl Qn"
            }
          ],
          "text": "Glucose SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T11:05:00-05:00",
        "valueQuantity": {
          "value": 170,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896904",
      "resource": {
        "resourceType": "Observation",
        "id": "1896904",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1274"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2345-7",
              "display": "Glucose SerPl Qn"
            }
          ],
          "text": "Glucose SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T09:46:00-05:00",
        "valueQuantity": {
          "value": 217,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896905",
      "resource": {
        "resourceType": "Observation",
        "id": "1896905",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1274"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2345-7",
              "display": "Glucose SerPl Qn"
            }
          ],
          "text": "Glucose SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T07:02:00-05:00",
        "valueQuantity": {
          "value": 218,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1898996",
      "resource": {
        "resourceType": "Observation",
        "id": "1898996",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:47.206-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "213"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "26515-7",
              "display": "Platelet #"
            }
          ],
          "text": "Platelet #"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T04:55:00-05:00",
        "valueQuantity": {
          "value": 234,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1898547",
      "resource": {
        "resourceType": "Observation",
        "id": "1898547",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:41.478-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "61"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "20570-8",
              "display": "Hct"
            }
          ],
          "text": "Hct"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T04:55:00-05:00",
        "valueQuantity": {
          "value": 37,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896906",
      "resource": {
        "resourceType": "Observation",
        "id": "1896906",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1274"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2345-7",
              "display": "Glucose SerPl Qn"
            }
          ],
          "text": "Glucose SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T04:55:00-05:00",
        "valueQuantity": {
          "value": 206,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1898546",
      "resource": {
        "resourceType": "Observation",
        "id": "1898546",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:41.478-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "60"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "718-7",
              "display": "Hgb"
            }
          ],
          "text": "Hgb"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T04:55:00-05:00",
        "valueQuantity": {
          "value": 12.4,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893630",
      "resource": {
        "resourceType": "Observation",
        "id": "1893630",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:34.363-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "875"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "787-2",
              "display": "MCV"
            }
          ],
          "text": "MCV"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T04:55:00-05:00",
        "valueQuantity": {
          "value": 92,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1898999",
      "resource": {
        "resourceType": "Observation",
        "id": "1898999",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:47.206-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "256"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2160-0",
              "display": "Creatinine SerPl Qn"
            }
          ],
          "text": "Creatinine SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T04:55:00-05:00",
        "valueQuantity": {
          "value": 0.8,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893631",
      "resource": {
        "resourceType": "Observation",
        "id": "1893631",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:34.363-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "877"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "786-4",
              "display": "MCHC"
            }
          ],
          "text": "MCHC"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T04:55:00-05:00",
        "valueQuantity": {
          "value": 33,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1899003",
      "resource": {
        "resourceType": "Observation",
        "id": "1899003",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:47.206-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "46"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2075-0",
              "display": "Chloride SerPl Qn"
            }
          ],
          "text": "Chloride SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T04:55:00-05:00",
        "valueQuantity": {
          "value": 106,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1898998",
      "resource": {
        "resourceType": "Observation",
        "id": "1898998",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:47.206-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1276"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "3094-0",
              "display": "BUN SerPl Qn"
            }
          ],
          "text": "BUN SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T04:55:00-05:00",
        "valueQuantity": {
          "value": 8,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1899002",
      "resource": {
        "resourceType": "Observation",
        "id": "1899002",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:47.206-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "44"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2951-2",
              "display": "Sodium SerPl Qn"
            }
          ],
          "text": "Sodium SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T04:55:00-05:00",
        "valueQuantity": {
          "value": 132,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893632",
      "resource": {
        "resourceType": "Observation",
        "id": "1893632",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:34.363-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "876"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "785-6",
              "display": "MCH"
            }
          ],
          "text": "MCH"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T04:55:00-05:00",
        "valueQuantity": {
          "value": 31,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1898549",
      "resource": {
        "resourceType": "Observation",
        "id": "1898549",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:41.478-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "62"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "26464-8",
              "display": "WBC #"
            }
          ],
          "text": "WBC #"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T04:55:00-05:00",
        "valueQuantity": {
          "value": 34,
          "system": "http://unitsofmeasure.org"
        },
        "comment": "Critical Value Called"
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1899001",
      "resource": {
        "resourceType": "Observation",
        "id": "1899001",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:47.206-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "45"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2823-3",
              "display": "Potassium SerPl Qn"
            }
          ],
          "text": "Potassium SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T04:55:00-05:00",
        "valueQuantity": {
          "value": 4.3,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1898997",
      "resource": {
        "resourceType": "Observation",
        "id": "1898997",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:47.206-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "758"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2692-2",
              "display": "Osmolality SerPl Qn"
            }
          ],
          "text": "Osmolality SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T04:55:00-05:00",
        "valueQuantity": {
          "value": 285,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1899000",
      "resource": {
        "resourceType": "Observation",
        "id": "1899000",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:47.206-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "47"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2028-9",
              "display": "CO2-Tot SerPl Qn"
            }
          ],
          "text": "CO2-Tot SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T04:55:00-05:00",
        "valueQuantity": {
          "value": 21,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893633",
      "resource": {
        "resourceType": "Observation",
        "id": "1893633",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:34.363-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "11516"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "30385-9",
              "display": "RDW"
            }
          ],
          "text": "RDW"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T04:55:00-05:00",
        "valueQuantity": {
          "value": 15.4,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1898548",
      "resource": {
        "resourceType": "Observation",
        "id": "1898548",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:41.478-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "63"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "789-8",
              "display": "RBC #"
            }
          ],
          "text": "RBC #"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T04:55:00-05:00",
        "valueQuantity": {
          "value": 4,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1898541",
      "resource": {
        "resourceType": "Observation",
        "id": "1898541",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:41.478-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6141"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "20565-8",
              "display": "CO2 Total Bld Calc"
            }
          ],
          "text": "CO2 Total Bld Calc"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T04:52:00-05:00",
        "valueQuantity": {
          "value": 18.6,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893343",
      "resource": {
        "resourceType": "Observation",
        "id": "1893343",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:28.791-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6132"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "33254-4",
              "display": "pH Corrected"
            }
          ],
          "text": "pH Corrected"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T04:52:00-05:00",
        "valueQuantity": {
          "value": 7.408,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1898540",
      "resource": {
        "resourceType": "Observation",
        "id": "1898540",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:41.478-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6140"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "11556-8",
              "display": "PO2"
            }
          ],
          "text": "PO2"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T04:52:00-05:00",
        "valueQuantity": {
          "value": 89,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893349",
      "resource": {
        "resourceType": "Observation",
        "id": "1893349",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:28.791-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6139"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "11557-6",
              "display": "PCO2 Bld"
            }
          ],
          "text": "PCO2 Bld"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T04:52:00-05:00",
        "valueQuantity": {
          "value": 26.7,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1892981",
      "resource": {
        "resourceType": "Observation",
        "id": "1892981",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:23.045-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "207"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "3150-0",
              "display": "Inspired O2"
            }
          ],
          "text": "Inspired O2"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T04:52:00-05:00",
        "valueQuantity": {
          "value": 30,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1898539",
      "resource": {
        "resourceType": "Observation",
        "id": "1898539",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:41.478-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6134"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "19254-2",
              "display": "PO2 Corrected"
            }
          ],
          "text": "PO2 Corrected"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T04:52:00-05:00",
        "valueQuantity": {
          "value": 97,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1898545",
      "resource": {
        "resourceType": "Observation",
        "id": "1898545",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:41.478-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6135"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "8310-5",
              "display": "Temperature"
            }
          ],
          "text": "Temperature"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T04:52:00-05:00",
        "valueQuantity": {
          "value": 101,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1898538",
      "resource": {
        "resourceType": "Observation",
        "id": "1898538",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:41.478-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1274"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2345-7",
              "display": "Glucose SerPl Qn"
            }
          ],
          "text": "Glucose SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T04:52:00-05:00",
        "valueQuantity": {
          "value": 230,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1898544",
      "resource": {
        "resourceType": "Observation",
        "id": "1898544",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:41.478-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6131"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "11558-4",
              "display": "pH Bld"
            }
          ],
          "text": "pH Bld"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T04:52:00-05:00",
        "valueQuantity": {
          "value": 7.428,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1898543",
      "resource": {
        "resourceType": "Observation",
        "id": "1898543",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:41.478-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6136"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "1959-6",
              "display": "HCO3 Bld Qn Calc"
            }
          ],
          "text": "HCO3 Bld Qn Calc"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T04:52:00-05:00",
        "valueQuantity": {
          "value": 17.8,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1898542",
      "resource": {
        "resourceType": "Observation",
        "id": "1898542",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:41.478-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6133"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "34705-4",
              "display": "PCO2 Corrected"
            }
          ],
          "text": "PCO2 Corrected"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T04:52:00-05:00",
        "valueQuantity": {
          "value": 28.3,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1898537",
      "resource": {
        "resourceType": "Observation",
        "id": "1898537",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:41.478-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1274"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2345-7",
              "display": "Glucose SerPl Qn"
            }
          ],
          "text": "Glucose SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T02:30:00-05:00",
        "valueQuantity": {
          "value": 235,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1898536",
      "resource": {
        "resourceType": "Observation",
        "id": "1898536",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:41.478-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6855"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "6855",
              "display": "K Cl Inj"
            }
          ],
          "text": "K Cl Inj"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T00:45:00-05:00",
        "valueQuantity": {
          "value": 1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896469",
      "resource": {
        "resourceType": "Observation",
        "id": "1896469",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:12.976-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "16016"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "16016",
              "display": "Enteral Glucose Intol(Glytrol)"
            }
          ],
          "text": "Enteral Glucose Intol(Glytrol)"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T00:45:00-05:00",
        "valueQuantity": {
          "value": 1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896455",
      "resource": {
        "resourceType": "Observation",
        "id": "1896455",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:12.976-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "15508"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "15508",
              "display": "Propofol Inj"
            }
          ],
          "text": "Propofol Inj"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T00:45:00-05:00",
        "valueQuantity": {
          "value": 10,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896864",
      "resource": {
        "resourceType": "Observation",
        "id": "1896864",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "914"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "914",
              "display": "Acetamnphn W/Cod"
            }
          ],
          "text": "Acetamnphn W/Cod"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T00:45:00-05:00",
        "valueQuantity": {
          "value": 1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1898535",
      "resource": {
        "resourceType": "Observation",
        "id": "1898535",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:41.478-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "2622"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "2622",
              "display": "Acetaminophn Sup"
            }
          ],
          "text": "Acetaminophn Sup"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T00:45:00-05:00",
        "valueQuantity": {
          "value": 650,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1897211",
      "resource": {
        "resourceType": "Observation",
        "id": "1897211",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:24.131-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "5779"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "5779",
              "display": "Cimetidine Inj"
            }
          ],
          "text": "Cimetidine Inj"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T00:45:00-05:00",
        "valueQuantity": {
          "value": 1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1897311",
      "resource": {
        "resourceType": "Observation",
        "id": "1897311",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:24.131-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "10920"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "10920",
              "display": "Ticarcillin/Clavulanate Inj"
            }
          ],
          "text": "Ticarcillin/Clavulanate Inj"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T00:45:00-05:00",
        "valueQuantity": {
          "value": 1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896480",
      "resource": {
        "resourceType": "Observation",
        "id": "1896480",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:12.976-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "16580"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "16580",
              "display": "Nimodipine"
            }
          ],
          "text": "Nimodipine"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T00:45:00-05:00",
        "valueQuantity": {
          "value": 30,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1898534",
      "resource": {
        "resourceType": "Observation",
        "id": "1898534",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:41.478-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "16640"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "16640",
              "display": "Ondansetron Inj"
            }
          ],
          "text": "Ondansetron Inj"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T00:45:00-05:00",
        "valueQuantity": {
          "value": 1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1897290",
      "resource": {
        "resourceType": "Observation",
        "id": "1897290",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:24.131-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "8893"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "8893",
              "display": "Labetalol Inj"
            }
          ],
          "text": "Labetalol Inj"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T00:45:00-05:00",
        "valueQuantity": {
          "value": 200,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1897347",
      "resource": {
        "resourceType": "Observation",
        "id": "1897347",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:24.131-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "11574"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "11574",
              "display": "Heparin Flush"
            }
          ],
          "text": "Heparin Flush"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T00:45:00-05:00",
        "valueQuantity": {
          "value": 1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896806",
      "resource": {
        "resourceType": "Observation",
        "id": "1896806",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "78"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "4105-3",
              "display": "Acetaminophen"
            }
          ],
          "text": "Acetaminophen"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T00:45:00-05:00",
        "valueQuantity": {
          "value": 325,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896520",
      "resource": {
        "resourceType": "Observation",
        "id": "1896520",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:12.976-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "17778"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "17778",
              "display": "Benazepril"
            }
          ],
          "text": "Benazepril"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T00:45:00-05:00",
        "valueQuantity": {
          "value": 10,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1897257",
      "resource": {
        "resourceType": "Observation",
        "id": "1897257",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:24.131-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "7261"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "7261",
              "display": "Docusate NA Syrup"
            }
          ],
          "text": "Docusate NA Syrup"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T00:45:00-05:00",
        "valueQuantity": {
          "value": 3,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1897280",
      "resource": {
        "resourceType": "Observation",
        "id": "1897280",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:24.131-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "7978"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "7978",
              "display": "Insulin Reg Hum"
            }
          ],
          "text": "Insulin Reg Hum"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T00:45:00-05:00",
        "valueQuantity": {
          "value": 334,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896828",
      "resource": {
        "resourceType": "Observation",
        "id": "1896828",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "356"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "356",
              "display": "K Cl Liquid"
            }
          ],
          "text": "K Cl Liquid"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-04T00:45:00-05:00",
        "valueQuantity": {
          "value": 60,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1898531",
      "resource": {
        "resourceType": "Observation",
        "id": "1898531",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:41.478-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "45"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2823-3",
              "display": "Potassium SerPl Qn"
            }
          ],
          "text": "Potassium SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T22:35:00-05:00",
        "valueQuantity": {
          "value": 3.5,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1898530",
      "resource": {
        "resourceType": "Observation",
        "id": "1898530",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:41.478-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "46"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2075-0",
              "display": "Chloride SerPl Qn"
            }
          ],
          "text": "Chloride SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T22:35:00-05:00",
        "valueQuantity": {
          "value": 106,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1898529",
      "resource": {
        "resourceType": "Observation",
        "id": "1898529",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:41.478-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "47"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2028-9",
              "display": "CO2-Tot SerPl Qn"
            }
          ],
          "text": "CO2-Tot SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T22:35:00-05:00",
        "valueQuantity": {
          "value": 23,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1898528",
      "resource": {
        "resourceType": "Observation",
        "id": "1898528",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:41.478-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "758"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2692-2",
              "display": "Osmolality SerPl Qn"
            }
          ],
          "text": "Osmolality SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T22:35:00-05:00",
        "valueQuantity": {
          "value": 292,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1898532",
      "resource": {
        "resourceType": "Observation",
        "id": "1898532",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:41.478-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "44"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2951-2",
              "display": "Sodium SerPl Qn"
            }
          ],
          "text": "Sodium SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T22:35:00-05:00",
        "valueQuantity": {
          "value": 133,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896907",
      "resource": {
        "resourceType": "Observation",
        "id": "1896907",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1274"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2345-7",
              "display": "Glucose SerPl Qn"
            }
          ],
          "text": "Glucose SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T22:35:00-05:00",
        "valueQuantity": {
          "value": 264,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896908",
      "resource": {
        "resourceType": "Observation",
        "id": "1896908",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1274"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2345-7",
              "display": "Glucose SerPl Qn"
            }
          ],
          "text": "Glucose SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T20:43:00-05:00",
        "valueQuantity": {
          "value": 208,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896909",
      "resource": {
        "resourceType": "Observation",
        "id": "1896909",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1274"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2345-7",
              "display": "Glucose SerPl Qn"
            }
          ],
          "text": "Glucose SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T18:47:00-05:00",
        "valueQuantity": {
          "value": 171,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1898526",
      "resource": {
        "resourceType": "Observation",
        "id": "1898526",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:41.478-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "876"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "785-6",
              "display": "MCH"
            }
          ],
          "text": "MCH"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T16:59:00-05:00",
        "valueQuantity": {
          "value": 31,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1898525",
      "resource": {
        "resourceType": "Observation",
        "id": "1898525",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:41.478-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "875"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "787-2",
              "display": "MCV"
            }
          ],
          "text": "MCV"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T16:59:00-05:00",
        "valueQuantity": {
          "value": 91,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1898524",
      "resource": {
        "resourceType": "Observation",
        "id": "1898524",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:41.478-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "877"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "786-4",
              "display": "MCHC"
            }
          ],
          "text": "MCHC"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T16:59:00-05:00",
        "valueQuantity": {
          "value": 34,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1898523",
      "resource": {
        "resourceType": "Observation",
        "id": "1898523",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:41.478-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "63"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "789-8",
              "display": "RBC #"
            }
          ],
          "text": "RBC #"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T16:59:00-05:00",
        "valueQuantity": {
          "value": 3.8,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1898522",
      "resource": {
        "resourceType": "Observation",
        "id": "1898522",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:41.478-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "61"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "20570-8",
              "display": "Hct"
            }
          ],
          "text": "Hct"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T16:59:00-05:00",
        "valueQuantity": {
          "value": 34,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1892878",
      "resource": {
        "resourceType": "Observation",
        "id": "1892878",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:23.045-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "60"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "718-7",
              "display": "Hgb"
            }
          ],
          "text": "Hgb"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T16:59:00-05:00",
        "valueQuantity": {
          "value": 11.8,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1898521",
      "resource": {
        "resourceType": "Observation",
        "id": "1898521",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:41.478-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "62"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "26464-8",
              "display": "WBC #"
            }
          ],
          "text": "WBC #"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T16:59:00-05:00",
        "valueQuantity": {
          "value": 30.6,
          "system": "http://unitsofmeasure.org"
        },
        "comment": "Results Checked"
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1898527",
      "resource": {
        "resourceType": "Observation",
        "id": "1898527",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:41.478-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "11516"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "30385-9",
              "display": "RDW"
            }
          ],
          "text": "RDW"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T16:59:00-05:00",
        "valueQuantity": {
          "value": 15.4,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1898520",
      "resource": {
        "resourceType": "Observation",
        "id": "1898520",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:41.478-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "46"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2075-0",
              "display": "Chloride SerPl Qn"
            }
          ],
          "text": "Chloride SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T16:58:00-05:00",
        "valueQuantity": {
          "value": 108,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896560",
      "resource": {
        "resourceType": "Observation",
        "id": "1896560",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:12.976-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "45"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2823-3",
              "display": "Potassium SerPl Qn"
            }
          ],
          "text": "Potassium SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T16:58:00-05:00",
        "valueQuantity": {
          "value": 3.8,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896584",
      "resource": {
        "resourceType": "Observation",
        "id": "1896584",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:12.976-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "47"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2028-9",
              "display": "CO2-Tot SerPl Qn"
            }
          ],
          "text": "CO2-Tot SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T16:58:00-05:00",
        "valueQuantity": {
          "value": 21,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896547",
      "resource": {
        "resourceType": "Observation",
        "id": "1896547",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:12.976-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "44"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2951-2",
              "display": "Sodium SerPl Qn"
            }
          ],
          "text": "Sodium SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T16:58:00-05:00",
        "valueQuantity": {
          "value": 136,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896843",
      "resource": {
        "resourceType": "Observation",
        "id": "1896843",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "758"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2692-2",
              "display": "Osmolality SerPl Qn"
            }
          ],
          "text": "Osmolality SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T16:58:00-05:00",
        "valueQuantity": {
          "value": 280,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896910",
      "resource": {
        "resourceType": "Observation",
        "id": "1896910",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1274"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2345-7",
              "display": "Glucose SerPl Qn"
            }
          ],
          "text": "Glucose SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T16:49:59-05:00",
        "valueQuantity": {
          "value": 205,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896911",
      "resource": {
        "resourceType": "Observation",
        "id": "1896911",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1274"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2345-7",
              "display": "Glucose SerPl Qn"
            }
          ],
          "text": "Glucose SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T15:15:00-05:00",
        "valueQuantity": {
          "value": 231,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1898519",
      "resource": {
        "resourceType": "Observation",
        "id": "1898519",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:41.478-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1274"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2345-7",
              "display": "Glucose SerPl Qn"
            }
          ],
          "text": "Glucose SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T12:49:00-05:00",
        "valueQuantity": {
          "value": 261,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896844",
      "resource": {
        "resourceType": "Observation",
        "id": "1896844",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "758"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2692-2",
              "display": "Osmolality SerPl Qn"
            }
          ],
          "text": "Osmolality SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T10:57:00-05:00",
        "valueQuantity": {
          "value": 282,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896548",
      "resource": {
        "resourceType": "Observation",
        "id": "1896548",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:12.976-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "44"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2951-2",
              "display": "Sodium SerPl Qn"
            }
          ],
          "text": "Sodium SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T10:57:00-05:00",
        "valueQuantity": {
          "value": 135,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896585",
      "resource": {
        "resourceType": "Observation",
        "id": "1896585",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:12.976-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "47"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2028-9",
              "display": "CO2-Tot SerPl Qn"
            }
          ],
          "text": "CO2-Tot SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T10:57:00-05:00",
        "valueQuantity": {
          "value": 22,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896561",
      "resource": {
        "resourceType": "Observation",
        "id": "1896561",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:12.976-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "45"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2823-3",
              "display": "Potassium SerPl Qn"
            }
          ],
          "text": "Potassium SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T10:57:00-05:00",
        "valueQuantity": {
          "value": 3.3,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896572",
      "resource": {
        "resourceType": "Observation",
        "id": "1896572",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:12.976-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "46"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2075-0",
              "display": "Chloride SerPl Qn"
            }
          ],
          "text": "Chloride SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T10:57:00-05:00",
        "valueQuantity": {
          "value": 108,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896912",
      "resource": {
        "resourceType": "Observation",
        "id": "1896912",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1274"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2345-7",
              "display": "Glucose SerPl Qn"
            }
          ],
          "text": "Glucose SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T10:36:00-05:00",
        "valueQuantity": {
          "value": 179,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896913",
      "resource": {
        "resourceType": "Observation",
        "id": "1896913",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1274"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2345-7",
              "display": "Glucose SerPl Qn"
            }
          ],
          "text": "Glucose SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T07:45:00-05:00",
        "valueQuantity": {
          "value": 156,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1898509",
      "resource": {
        "resourceType": "Observation",
        "id": "1898509",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:41.478-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "62"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "26464-8",
              "display": "WBC #"
            }
          ],
          "text": "WBC #"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T05:37:00-05:00",
        "valueQuantity": {
          "value": 35,
          "system": "http://unitsofmeasure.org"
        },
        "comment": "Results Checked"
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1898508",
      "resource": {
        "resourceType": "Observation",
        "id": "1898508",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:41.478-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "63"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "789-8",
              "display": "RBC #"
            }
          ],
          "text": "RBC #"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T05:37:00-05:00",
        "valueQuantity": {
          "value": 3.6,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1898518",
      "resource": {
        "resourceType": "Observation",
        "id": "1898518",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:41.478-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "11516"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "30385-9",
              "display": "RDW"
            }
          ],
          "text": "RDW"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T05:37:00-05:00",
        "valueQuantity": {
          "value": 15.3,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1898507",
      "resource": {
        "resourceType": "Observation",
        "id": "1898507",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:41.478-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "61"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "20570-8",
              "display": "Hct"
            }
          ],
          "text": "Hct"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T05:37:00-05:00",
        "valueQuantity": {
          "value": 34,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1898517",
      "resource": {
        "resourceType": "Observation",
        "id": "1898517",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:41.478-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "877"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "786-4",
              "display": "MCHC"
            }
          ],
          "text": "MCHC"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T05:37:00-05:00",
        "valueQuantity": {
          "value": 34,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1892860",
      "resource": {
        "resourceType": "Observation",
        "id": "1892860",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:23.045-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "45"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2823-3",
              "display": "Potassium SerPl Qn"
            }
          ],
          "text": "Potassium SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T05:37:00-05:00",
        "valueQuantity": {
          "value": 3.8,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1898516",
      "resource": {
        "resourceType": "Observation",
        "id": "1898516",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:41.478-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "46"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2075-0",
              "display": "Chloride SerPl Qn"
            }
          ],
          "text": "Chloride SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T05:37:00-05:00",
        "valueQuantity": {
          "value": 106,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893254",
      "resource": {
        "resourceType": "Observation",
        "id": "1893254",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:28.791-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "875"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "787-2",
              "display": "MCV"
            }
          ],
          "text": "MCV"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T05:37:00-05:00",
        "valueQuantity": {
          "value": 93,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1898515",
      "resource": {
        "resourceType": "Observation",
        "id": "1898515",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:41.478-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "44"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2951-2",
              "display": "Sodium SerPl Qn"
            }
          ],
          "text": "Sodium SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T05:37:00-05:00",
        "valueQuantity": {
          "value": 136,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1898514",
      "resource": {
        "resourceType": "Observation",
        "id": "1898514",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:41.478-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "47"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2028-9",
              "display": "CO2-Tot SerPl Qn"
            }
          ],
          "text": "CO2-Tot SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T05:37:00-05:00",
        "valueQuantity": {
          "value": 22,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1898513",
      "resource": {
        "resourceType": "Observation",
        "id": "1898513",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:41.478-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "256"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2160-0",
              "display": "Creatinine SerPl Qn"
            }
          ],
          "text": "Creatinine SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T05:37:00-05:00",
        "valueQuantity": {
          "value": 0.9,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896914",
      "resource": {
        "resourceType": "Observation",
        "id": "1896914",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1274"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2345-7",
              "display": "Glucose SerPl Qn"
            }
          ],
          "text": "Glucose SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T05:37:00-05:00",
        "valueQuantity": {
          "value": 167,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1898512",
      "resource": {
        "resourceType": "Observation",
        "id": "1898512",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:41.478-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1276"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "3094-0",
              "display": "BUN SerPl Qn"
            }
          ],
          "text": "BUN SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T05:37:00-05:00",
        "valueQuantity": {
          "value": 5,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893258",
      "resource": {
        "resourceType": "Observation",
        "id": "1893258",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:28.791-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "876"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "785-6",
              "display": "MCH"
            }
          ],
          "text": "MCH"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T05:37:00-05:00",
        "valueQuantity": {
          "value": 32,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1898511",
      "resource": {
        "resourceType": "Observation",
        "id": "1898511",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:41.478-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "758"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2692-2",
              "display": "Osmolality SerPl Qn"
            }
          ],
          "text": "Osmolality SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T05:37:00-05:00",
        "valueQuantity": {
          "value": 281,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1892879",
      "resource": {
        "resourceType": "Observation",
        "id": "1892879",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:23.045-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "60"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "718-7",
              "display": "Hgb"
            }
          ],
          "text": "Hgb"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T05:37:00-05:00",
        "valueQuantity": {
          "value": 11.4,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1898510",
      "resource": {
        "resourceType": "Observation",
        "id": "1898510",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:41.478-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "213"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "26515-7",
              "display": "Platelet #"
            }
          ],
          "text": "Platelet #"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T05:37:00-05:00",
        "valueQuantity": {
          "value": 206,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1898499",
      "resource": {
        "resourceType": "Observation",
        "id": "1898499",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:41.478-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6140"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "11556-8",
              "display": "PO2"
            }
          ],
          "text": "PO2"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T04:41:00-05:00",
        "valueQuantity": {
          "value": 108,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1898506",
      "resource": {
        "resourceType": "Observation",
        "id": "1898506",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:41.478-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6135"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "8310-5",
              "display": "Temperature"
            }
          ],
          "text": "Temperature"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T04:41:00-05:00",
        "valueQuantity": {
          "value": 101.1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1898505",
      "resource": {
        "resourceType": "Observation",
        "id": "1898505",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:41.478-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "207"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "3150-0",
              "display": "Inspired O2"
            }
          ],
          "text": "Inspired O2"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T04:41:00-05:00",
        "valueQuantity": {
          "value": 30,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893344",
      "resource": {
        "resourceType": "Observation",
        "id": "1893344",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:28.791-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6134"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "19254-2",
              "display": "PO2 Corrected"
            }
          ],
          "text": "PO2 Corrected"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T04:41:00-05:00",
        "valueQuantity": {
          "value": 117,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1898504",
      "resource": {
        "resourceType": "Observation",
        "id": "1898504",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:41.478-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6136"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "1959-6",
              "display": "HCO3 Bld Qn Calc"
            }
          ],
          "text": "HCO3 Bld Qn Calc"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T04:41:00-05:00",
        "valueQuantity": {
          "value": 17.3,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1898503",
      "resource": {
        "resourceType": "Observation",
        "id": "1898503",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:41.478-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6132"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "33254-4",
              "display": "pH Corrected"
            }
          ],
          "text": "pH Corrected"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T04:41:00-05:00",
        "valueQuantity": {
          "value": 7.422000000000001,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1898502",
      "resource": {
        "resourceType": "Observation",
        "id": "1898502",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:41.478-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6133"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "34705-4",
              "display": "PCO2 Corrected"
            }
          ],
          "text": "PCO2 Corrected"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T04:41:00-05:00",
        "valueQuantity": {
          "value": 26.7,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1898498",
      "resource": {
        "resourceType": "Observation",
        "id": "1898498",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:41.478-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6139"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "11557-6",
              "display": "PCO2 Bld"
            }
          ],
          "text": "PCO2 Bld"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T04:41:00-05:00",
        "valueQuantity": {
          "value": 25.1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896915",
      "resource": {
        "resourceType": "Observation",
        "id": "1896915",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1274"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2345-7",
              "display": "Glucose SerPl Qn"
            }
          ],
          "text": "Glucose SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T04:41:00-05:00",
        "valueQuantity": {
          "value": 199,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1898501",
      "resource": {
        "resourceType": "Observation",
        "id": "1898501",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:41.478-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6131"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "11558-4",
              "display": "pH Bld"
            }
          ],
          "text": "pH Bld"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T04:41:00-05:00",
        "valueQuantity": {
          "value": 7.443000000000001,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1898500",
      "resource": {
        "resourceType": "Observation",
        "id": "1898500",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:41.478-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6141"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "20565-8",
              "display": "CO2 Total Bld Calc"
            }
          ],
          "text": "CO2 Total Bld Calc"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T04:41:00-05:00",
        "valueQuantity": {
          "value": 18.1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896916",
      "resource": {
        "resourceType": "Observation",
        "id": "1896916",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1274"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2345-7",
              "display": "Glucose SerPl Qn"
            }
          ],
          "text": "Glucose SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T02:55:00-05:00",
        "valueQuantity": {
          "value": 196,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1898497",
      "resource": {
        "resourceType": "Observation",
        "id": "1898497",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:41.478-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1274"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2345-7",
              "display": "Glucose SerPl Qn"
            }
          ],
          "text": "Glucose SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T01:09:00-05:00",
        "valueQuantity": {
          "value": 198,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1898496",
      "resource": {
        "resourceType": "Observation",
        "id": "1898496",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:41.478-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "7261"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "7261",
              "display": "Docusate NA Syrup"
            }
          ],
          "text": "Docusate NA Syrup"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T00:45:00-05:00",
        "valueQuantity": {
          "value": 3,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896452",
      "resource": {
        "resourceType": "Observation",
        "id": "1896452",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:12.976-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "13399"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "13399",
              "display": "Lomotil Liq Eqv"
            }
          ],
          "text": "Lomotil Liq Eqv"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T00:45:00-05:00",
        "valueQuantity": {
          "value": 5,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1898495",
      "resource": {
        "resourceType": "Observation",
        "id": "1898495",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:41.478-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "914"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "914",
              "display": "Acetamnphn W/Cod"
            }
          ],
          "text": "Acetamnphn W/Cod"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T00:45:00-05:00",
        "valueQuantity": {
          "value": 1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1897331",
      "resource": {
        "resourceType": "Observation",
        "id": "1897331",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:24.131-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "11021"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "11021",
              "display": "Heparin Artflush"
            }
          ],
          "text": "Heparin Artflush"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T00:45:00-05:00",
        "valueQuantity": {
          "value": 1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896456",
      "resource": {
        "resourceType": "Observation",
        "id": "1896456",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:12.976-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "15508"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "15508",
              "display": "Propofol Inj"
            }
          ],
          "text": "Propofol Inj"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T00:45:00-05:00",
        "valueQuantity": {
          "value": 10,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896521",
      "resource": {
        "resourceType": "Observation",
        "id": "1896521",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:12.976-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "17778"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "17778",
              "display": "Benazepril"
            }
          ],
          "text": "Benazepril"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T00:45:00-05:00",
        "valueQuantity": {
          "value": 10,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1897312",
      "resource": {
        "resourceType": "Observation",
        "id": "1897312",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:24.131-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "10920"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "10920",
              "display": "Ticarcillin/Clavulanate Inj"
            }
          ],
          "text": "Ticarcillin/Clavulanate Inj"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T00:45:00-05:00",
        "valueQuantity": {
          "value": 1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896481",
      "resource": {
        "resourceType": "Observation",
        "id": "1896481",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:12.976-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "16580"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "16580",
              "display": "Nimodipine"
            }
          ],
          "text": "Nimodipine"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T00:45:00-05:00",
        "valueQuantity": {
          "value": 30,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896986",
      "resource": {
        "resourceType": "Observation",
        "id": "1896986",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "2622"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "2622",
              "display": "Acetaminophn Sup"
            }
          ],
          "text": "Acetaminophn Sup"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T00:45:00-05:00",
        "valueQuantity": {
          "value": 650,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1897281",
      "resource": {
        "resourceType": "Observation",
        "id": "1897281",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:24.131-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "7978"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "7978",
              "display": "Insulin Reg Hum"
            }
          ],
          "text": "Insulin Reg Hum"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T00:45:00-05:00",
        "valueQuantity": {
          "value": 334,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1897212",
      "resource": {
        "resourceType": "Observation",
        "id": "1897212",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:24.131-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "5779"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "5779",
              "display": "Cimetidine Inj"
            }
          ],
          "text": "Cimetidine Inj"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T00:45:00-05:00",
        "valueQuantity": {
          "value": 1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1897242",
      "resource": {
        "resourceType": "Observation",
        "id": "1897242",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:24.131-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6855"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "6855",
              "display": "K Cl Inj"
            }
          ],
          "text": "K Cl Inj"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T00:45:00-05:00",
        "valueQuantity": {
          "value": 40,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896882",
      "resource": {
        "resourceType": "Observation",
        "id": "1896882",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "957"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "957",
              "display": "NaCl"
            }
          ],
          "text": "NaCl"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T00:45:00-05:00",
        "valueQuantity": {
          "value": 1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896807",
      "resource": {
        "resourceType": "Observation",
        "id": "1896807",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "78"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "4105-3",
              "display": "Acetaminophen"
            }
          ],
          "text": "Acetaminophen"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T00:45:00-05:00",
        "valueQuantity": {
          "value": 325,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896502",
      "resource": {
        "resourceType": "Observation",
        "id": "1896502",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:12.976-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "16640"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "16640",
              "display": "Ondansetron Inj"
            }
          ],
          "text": "Ondansetron Inj"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T00:45:00-05:00",
        "valueQuantity": {
          "value": 1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1897348",
      "resource": {
        "resourceType": "Observation",
        "id": "1897348",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:24.131-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "11574"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "11574",
              "display": "Heparin Flush"
            }
          ],
          "text": "Heparin Flush"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T00:45:00-05:00",
        "valueQuantity": {
          "value": 1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1898533",
      "resource": {
        "resourceType": "Observation",
        "id": "1898533",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:41.478-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1274"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2345-7",
              "display": "Glucose SerPl Qn"
            }
          ],
          "text": "Glucose SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-03T00:29:59-05:00",
        "valueQuantity": {
          "value": 239,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895755",
      "resource": {
        "resourceType": "Observation",
        "id": "1895755",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:02.280-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1274"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2345-7",
              "display": "Glucose SerPl Qn"
            }
          ],
          "text": "Glucose SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T22:51:00-05:00",
        "valueQuantity": {
          "value": 219,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895751",
      "resource": {
        "resourceType": "Observation",
        "id": "1895751",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:02.280-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "47"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2028-9",
              "display": "CO2-Tot SerPl Qn"
            }
          ],
          "text": "CO2-Tot SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T22:50:00-05:00",
        "valueQuantity": {
          "value": 20,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895753",
      "resource": {
        "resourceType": "Observation",
        "id": "1895753",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:02.280-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "44"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2951-2",
              "display": "Sodium SerPl Qn"
            }
          ],
          "text": "Sodium SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T22:50:00-05:00",
        "valueQuantity": {
          "value": 135,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895750",
      "resource": {
        "resourceType": "Observation",
        "id": "1895750",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:02.280-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "758"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2692-2",
              "display": "Osmolality SerPl Qn"
            }
          ],
          "text": "Osmolality SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T22:50:00-05:00",
        "valueQuantity": {
          "value": 279,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895752",
      "resource": {
        "resourceType": "Observation",
        "id": "1895752",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:02.280-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "46"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2075-0",
              "display": "Chloride SerPl Qn"
            }
          ],
          "text": "Chloride SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T22:50:00-05:00",
        "valueQuantity": {
          "value": 110,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895754",
      "resource": {
        "resourceType": "Observation",
        "id": "1895754",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:02.280-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "45"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2823-3",
              "display": "Potassium SerPl Qn"
            }
          ],
          "text": "Potassium SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T22:50:00-05:00",
        "valueQuantity": {
          "value": 4.2,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895747",
      "resource": {
        "resourceType": "Observation",
        "id": "1895747",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:02.280-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "877"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "786-4",
              "display": "MCHC"
            }
          ],
          "text": "MCHC"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T21:36:00-05:00",
        "valueQuantity": {
          "value": 34,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895746",
      "resource": {
        "resourceType": "Observation",
        "id": "1895746",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:02.280-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "875"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "787-2",
              "display": "MCV"
            }
          ],
          "text": "MCV"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T21:36:00-05:00",
        "valueQuantity": {
          "value": 93,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895749",
      "resource": {
        "resourceType": "Observation",
        "id": "1895749",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:02.280-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "876"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "785-6",
              "display": "MCH"
            }
          ],
          "text": "MCH"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T21:36:00-05:00",
        "valueQuantity": {
          "value": 32,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895748",
      "resource": {
        "resourceType": "Observation",
        "id": "1895748",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:02.280-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "11516"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "30385-9",
              "display": "RDW"
            }
          ],
          "text": "RDW"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T21:36:00-05:00",
        "valueQuantity": {
          "value": 15.1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895743",
      "resource": {
        "resourceType": "Observation",
        "id": "1895743",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:02.280-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "63"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "789-8",
              "display": "RBC #"
            }
          ],
          "text": "RBC #"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T21:36:00-05:00",
        "valueQuantity": {
          "value": 2.9,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895742",
      "resource": {
        "resourceType": "Observation",
        "id": "1895742",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:02.280-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "62"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "26464-8",
              "display": "WBC #"
            }
          ],
          "text": "WBC #"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T21:36:00-05:00",
        "valueQuantity": {
          "value": 35.2,
          "system": "http://unitsofmeasure.org"
        },
        "comment": "Results Checked"
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895745",
      "resource": {
        "resourceType": "Observation",
        "id": "1895745",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:02.280-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "60"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "718-7",
              "display": "Hgb"
            }
          ],
          "text": "Hgb"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T21:36:00-05:00",
        "valueQuantity": {
          "value": 9.1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895744",
      "resource": {
        "resourceType": "Observation",
        "id": "1895744",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:02.280-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "61"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "20570-8",
              "display": "Hct"
            }
          ],
          "text": "Hct"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T21:36:00-05:00",
        "valueQuantity": {
          "value": 27,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896917",
      "resource": {
        "resourceType": "Observation",
        "id": "1896917",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1274"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2345-7",
              "display": "Glucose SerPl Qn"
            }
          ],
          "text": "Glucose SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T21:00:00-05:00",
        "valueQuantity": {
          "value": 185,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896918",
      "resource": {
        "resourceType": "Observation",
        "id": "1896918",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1274"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2345-7",
              "display": "Glucose SerPl Qn"
            }
          ],
          "text": "Glucose SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T19:27:00-05:00",
        "valueQuantity": {
          "value": 151,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895741",
      "resource": {
        "resourceType": "Observation",
        "id": "1895741",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:02.280-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "207"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "3150-0",
              "display": "Inspired O2"
            }
          ],
          "text": "Inspired O2"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T18:15:00-05:00",
        "valueQuantity": {
          "value": 30,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895738",
      "resource": {
        "resourceType": "Observation",
        "id": "1895738",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:02.280-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6136"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "1959-6",
              "display": "HCO3 Bld Qn Calc"
            }
          ],
          "text": "HCO3 Bld Qn Calc"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T18:15:00-05:00",
        "valueQuantity": {
          "value": 17.9,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895740",
      "resource": {
        "resourceType": "Observation",
        "id": "1895740",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:02.280-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6139"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "11557-6",
              "display": "PCO2 Bld"
            }
          ],
          "text": "PCO2 Bld"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T18:15:00-05:00",
        "valueQuantity": {
          "value": 29.3,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895737",
      "resource": {
        "resourceType": "Observation",
        "id": "1895737",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:02.280-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6131"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "11558-4",
              "display": "pH Bld"
            }
          ],
          "text": "pH Bld"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T18:15:00-05:00",
        "valueQuantity": {
          "value": 7.390000000000001,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893425",
      "resource": {
        "resourceType": "Observation",
        "id": "1893425",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:28.791-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6141"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "20565-8",
              "display": "CO2 Total Bld Calc"
            }
          ],
          "text": "CO2 Total Bld Calc"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T18:15:00-05:00",
        "valueQuantity": {
          "value": 18.8,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895739",
      "resource": {
        "resourceType": "Observation",
        "id": "1895739",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:02.280-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6140"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "11556-8",
              "display": "PO2"
            }
          ],
          "text": "PO2"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T18:15:00-05:00",
        "valueQuantity": {
          "value": 90,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896549",
      "resource": {
        "resourceType": "Observation",
        "id": "1896549",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:12.976-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "44"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2951-2",
              "display": "Sodium SerPl Qn"
            }
          ],
          "text": "Sodium SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T17:17:00-05:00",
        "valueQuantity": {
          "value": 136,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896845",
      "resource": {
        "resourceType": "Observation",
        "id": "1896845",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "758"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2692-2",
              "display": "Osmolality SerPl Qn"
            }
          ],
          "text": "Osmolality SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T17:17:00-05:00",
        "valueQuantity": {
          "value": 277,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895736",
      "resource": {
        "resourceType": "Observation",
        "id": "1895736",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:02.280-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "45"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2823-3",
              "display": "Potassium SerPl Qn"
            }
          ],
          "text": "Potassium SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T17:17:00-05:00",
        "valueQuantity": {
          "value": 3.4,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896586",
      "resource": {
        "resourceType": "Observation",
        "id": "1896586",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:12.976-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "47"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2028-9",
              "display": "CO2-Tot SerPl Qn"
            }
          ],
          "text": "CO2-Tot SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T17:17:00-05:00",
        "valueQuantity": {
          "value": 20,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895735",
      "resource": {
        "resourceType": "Observation",
        "id": "1895735",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:02.280-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "46"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2075-0",
              "display": "Chloride SerPl Qn"
            }
          ],
          "text": "Chloride SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T17:17:00-05:00",
        "valueQuantity": {
          "value": 110,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896919",
      "resource": {
        "resourceType": "Observation",
        "id": "1896919",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1274"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2345-7",
              "display": "Glucose SerPl Qn"
            }
          ],
          "text": "Glucose SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T17:12:00-05:00",
        "valueQuantity": {
          "value": 135,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896920",
      "resource": {
        "resourceType": "Observation",
        "id": "1896920",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1274"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2345-7",
              "display": "Glucose SerPl Qn"
            }
          ],
          "text": "Glucose SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T14:42:00-05:00",
        "valueQuantity": {
          "value": 178,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896921",
      "resource": {
        "resourceType": "Observation",
        "id": "1896921",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1274"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2345-7",
              "display": "Glucose SerPl Qn"
            }
          ],
          "text": "Glucose SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T12:48:00-05:00",
        "valueQuantity": {
          "value": 211,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896562",
      "resource": {
        "resourceType": "Observation",
        "id": "1896562",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:12.976-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "45"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2823-3",
              "display": "Potassium SerPl Qn"
            }
          ],
          "text": "Potassium SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T10:48:00-05:00",
        "valueQuantity": {
          "value": 3.4,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896573",
      "resource": {
        "resourceType": "Observation",
        "id": "1896573",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:12.976-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "46"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2075-0",
              "display": "Chloride SerPl Qn"
            }
          ],
          "text": "Chloride SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T10:48:00-05:00",
        "valueQuantity": {
          "value": 110,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896587",
      "resource": {
        "resourceType": "Observation",
        "id": "1896587",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:12.976-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "47"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2028-9",
              "display": "CO2-Tot SerPl Qn"
            }
          ],
          "text": "CO2-Tot SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T10:48:00-05:00",
        "valueQuantity": {
          "value": 19,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896550",
      "resource": {
        "resourceType": "Observation",
        "id": "1896550",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:12.976-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "44"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2951-2",
              "display": "Sodium SerPl Qn"
            }
          ],
          "text": "Sodium SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T10:48:00-05:00",
        "valueQuantity": {
          "value": 136,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896846",
      "resource": {
        "resourceType": "Observation",
        "id": "1896846",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "758"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2692-2",
              "display": "Osmolality SerPl Qn"
            }
          ],
          "text": "Osmolality SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T10:48:00-05:00",
        "valueQuantity": {
          "value": 280,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895734",
      "resource": {
        "resourceType": "Observation",
        "id": "1895734",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:02.280-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1274"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2345-7",
              "display": "Glucose SerPl Qn"
            }
          ],
          "text": "Glucose SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T09:18:00-05:00",
        "valueQuantity": {
          "value": 201,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1892866",
      "resource": {
        "resourceType": "Observation",
        "id": "1892866",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:23.045-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "47"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2028-9",
              "display": "CO2-Tot SerPl Qn"
            }
          ],
          "text": "CO2-Tot SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T05:13:00-05:00",
        "valueQuantity": {
          "value": 18,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895720",
      "resource": {
        "resourceType": "Observation",
        "id": "1895720",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:02.280-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "63"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "789-8",
              "display": "RBC #"
            }
          ],
          "text": "RBC #"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T05:13:00-05:00",
        "valueQuantity": {
          "value": 2.1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895730",
      "resource": {
        "resourceType": "Observation",
        "id": "1895730",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:02.280-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "46"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2075-0",
              "display": "Chloride SerPl Qn"
            }
          ],
          "text": "Chloride SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T05:13:00-05:00",
        "valueQuantity": {
          "value": 109,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895723",
      "resource": {
        "resourceType": "Observation",
        "id": "1895723",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:02.280-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "213"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "26515-7",
              "display": "Platelet #"
            }
          ],
          "text": "Platelet #"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T05:13:00-05:00",
        "valueQuantity": {
          "value": 228,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895729",
      "resource": {
        "resourceType": "Observation",
        "id": "1895729",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:02.280-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "44"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2951-2",
              "display": "Sodium SerPl Qn"
            }
          ],
          "text": "Sodium SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T05:13:00-05:00",
        "valueQuantity": {
          "value": 134,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895728",
      "resource": {
        "resourceType": "Observation",
        "id": "1895728",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:02.280-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "45"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2823-3",
              "display": "Potassium SerPl Qn"
            }
          ],
          "text": "Potassium SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T05:13:00-05:00",
        "valueQuantity": {
          "value": 3.8,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895722",
      "resource": {
        "resourceType": "Observation",
        "id": "1895722",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:02.280-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "60"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "718-7",
              "display": "Hgb"
            }
          ],
          "text": "Hgb"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T05:13:00-05:00",
        "valueQuantity": {
          "value": 6.9,
          "system": "http://unitsofmeasure.org"
        },
        "comment": "Critical Value Called"
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893366",
      "resource": {
        "resourceType": "Observation",
        "id": "1893366",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:28.791-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "11516"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "30385-9",
              "display": "RDW"
            }
          ],
          "text": "RDW"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T05:13:00-05:00",
        "valueQuantity": {
          "value": 13.1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895732",
      "resource": {
        "resourceType": "Observation",
        "id": "1895732",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:02.280-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "877"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "786-4",
              "display": "MCHC"
            }
          ],
          "text": "MCHC"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T05:13:00-05:00",
        "valueQuantity": {
          "value": 34,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895725",
      "resource": {
        "resourceType": "Observation",
        "id": "1895725",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:02.280-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1274"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2345-7",
              "display": "Glucose SerPl Qn"
            }
          ],
          "text": "Glucose SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T05:13:00-05:00",
        "valueQuantity": {
          "value": 229,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895724",
      "resource": {
        "resourceType": "Observation",
        "id": "1895724",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:02.280-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "758"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2692-2",
              "display": "Osmolality SerPl Qn"
            }
          ],
          "text": "Osmolality SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T05:13:00-05:00",
        "valueQuantity": {
          "value": 285,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895731",
      "resource": {
        "resourceType": "Observation",
        "id": "1895731",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:02.280-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "875"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "787-2",
              "display": "MCV"
            }
          ],
          "text": "MCV"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T05:13:00-05:00",
        "valueQuantity": {
          "value": 98,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895727",
      "resource": {
        "resourceType": "Observation",
        "id": "1895727",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:02.280-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "256"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2160-0",
              "display": "Creatinine SerPl Qn"
            }
          ],
          "text": "Creatinine SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T05:13:00-05:00",
        "valueQuantity": {
          "value": 0.9,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895719",
      "resource": {
        "resourceType": "Observation",
        "id": "1895719",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:02.280-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "62"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "26464-8",
              "display": "WBC #"
            }
          ],
          "text": "WBC #"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T05:13:00-05:00",
        "valueQuantity": {
          "value": 32.4,
          "system": "http://unitsofmeasure.org"
        },
        "comment": "Critical Value Called"
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895726",
      "resource": {
        "resourceType": "Observation",
        "id": "1895726",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:02.280-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1276"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "3094-0",
              "display": "BUN SerPl Qn"
            }
          ],
          "text": "BUN SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T05:13:00-05:00",
        "valueQuantity": {
          "value": 6,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895733",
      "resource": {
        "resourceType": "Observation",
        "id": "1895733",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:02.280-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "876"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "785-6",
              "display": "MCH"
            }
          ],
          "text": "MCH"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T05:13:00-05:00",
        "valueQuantity": {
          "value": 33,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895721",
      "resource": {
        "resourceType": "Observation",
        "id": "1895721",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:02.280-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "61"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "20570-8",
              "display": "Hct"
            }
          ],
          "text": "Hct"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T05:13:00-05:00",
        "valueQuantity": {
          "value": 21,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895715",
      "resource": {
        "resourceType": "Observation",
        "id": "1895715",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:02.280-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6140"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "11556-8",
              "display": "PO2"
            }
          ],
          "text": "PO2"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T04:57:00-05:00",
        "valueQuantity": {
          "value": 138,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895718",
      "resource": {
        "resourceType": "Observation",
        "id": "1895718",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:02.280-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "207"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "3150-0",
              "display": "Inspired O2"
            }
          ],
          "text": "Inspired O2"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T04:57:00-05:00",
        "valueQuantity": {
          "value": 40,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895717",
      "resource": {
        "resourceType": "Observation",
        "id": "1895717",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:02.280-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6136"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "1959-6",
              "display": "HCO3 Bld Qn Calc"
            }
          ],
          "text": "HCO3 Bld Qn Calc"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T04:57:00-05:00",
        "valueQuantity": {
          "value": 17.5,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895714",
      "resource": {
        "resourceType": "Observation",
        "id": "1895714",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:02.280-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6141"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "20565-8",
              "display": "CO2 Total Bld Calc"
            }
          ],
          "text": "CO2 Total Bld Calc"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T04:57:00-05:00",
        "valueQuantity": {
          "value": 18.3,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895713",
      "resource": {
        "resourceType": "Observation",
        "id": "1895713",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:02.280-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6139"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "11557-6",
              "display": "PCO2 Bld"
            }
          ],
          "text": "PCO2 Bld"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T04:57:00-05:00",
        "valueQuantity": {
          "value": 28.3,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895716",
      "resource": {
        "resourceType": "Observation",
        "id": "1895716",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:02.280-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6131"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "11558-4",
              "display": "pH Bld"
            }
          ],
          "text": "pH Bld"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T04:57:00-05:00",
        "valueQuantity": {
          "value": 7.394,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896829",
      "resource": {
        "resourceType": "Observation",
        "id": "1896829",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "356"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "356",
              "display": "K Cl Liquid"
            }
          ],
          "text": "K Cl Liquid"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T00:45:00-05:00",
        "valueQuantity": {
          "value": 60,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1897349",
      "resource": {
        "resourceType": "Observation",
        "id": "1897349",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:24.131-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "11574"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "11574",
              "display": "Heparin Flush"
            }
          ],
          "text": "Heparin Flush"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T00:45:00-05:00",
        "valueQuantity": {
          "value": 1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895710",
      "resource": {
        "resourceType": "Observation",
        "id": "1895710",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:02.280-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "10920"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "10920",
              "display": "Ticarcillin/Clavulanate Inj"
            }
          ],
          "text": "Ticarcillin/Clavulanate Inj"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T00:45:00-05:00",
        "valueQuantity": {
          "value": 1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896482",
      "resource": {
        "resourceType": "Observation",
        "id": "1896482",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:12.976-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "16580"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "16580",
              "display": "Nimodipine"
            }
          ],
          "text": "Nimodipine"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T00:45:00-05:00",
        "valueQuantity": {
          "value": 30,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1897258",
      "resource": {
        "resourceType": "Observation",
        "id": "1897258",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:24.131-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "7261"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "7261",
              "display": "Docusate NA Syrup"
            }
          ],
          "text": "Docusate NA Syrup"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T00:45:00-05:00",
        "valueQuantity": {
          "value": 3,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1897332",
      "resource": {
        "resourceType": "Observation",
        "id": "1897332",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:24.131-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "11021"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "11021",
              "display": "Heparin Artflush"
            }
          ],
          "text": "Heparin Artflush"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T00:45:00-05:00",
        "valueQuantity": {
          "value": 1000,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896865",
      "resource": {
        "resourceType": "Observation",
        "id": "1896865",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "914"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "914",
              "display": "Acetamnphn W/Cod"
            }
          ],
          "text": "Acetamnphn W/Cod"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T00:45:00-05:00",
        "valueQuantity": {
          "value": 1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896522",
      "resource": {
        "resourceType": "Observation",
        "id": "1896522",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:12.976-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "17778"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "17778",
              "display": "Benazepril"
            }
          ],
          "text": "Benazepril"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T00:45:00-05:00",
        "valueQuantity": {
          "value": 10,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896453",
      "resource": {
        "resourceType": "Observation",
        "id": "1896453",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:12.976-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "13399"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "13399",
              "display": "Lomotil Liq Eqv"
            }
          ],
          "text": "Lomotil Liq Eqv"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T00:45:00-05:00",
        "valueQuantity": {
          "value": 5,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1897325",
      "resource": {
        "resourceType": "Observation",
        "id": "1897325",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:24.131-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "10966"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "10966",
              "display": "Albuterol Neb Sol"
            }
          ],
          "text": "Albuterol Neb Sol"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T00:45:00-05:00",
        "valueQuantity": {
          "value": 1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1897282",
      "resource": {
        "resourceType": "Observation",
        "id": "1897282",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:24.131-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "7978"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "7978",
              "display": "Insulin Reg Hum"
            }
          ],
          "text": "Insulin Reg Hum"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T00:45:00-05:00",
        "valueQuantity": {
          "value": 334,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895712",
      "resource": {
        "resourceType": "Observation",
        "id": "1895712",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:02.280-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "16640"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "16640",
              "display": "Ondansetron Inj"
            }
          ],
          "text": "Ondansetron Inj"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T00:45:00-05:00",
        "valueQuantity": {
          "value": 1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1897213",
      "resource": {
        "resourceType": "Observation",
        "id": "1897213",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:24.131-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "5779"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "5779",
              "display": "Cimetidine Inj"
            }
          ],
          "text": "Cimetidine Inj"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T00:45:00-05:00",
        "valueQuantity": {
          "value": 1,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896457",
      "resource": {
        "resourceType": "Observation",
        "id": "1896457",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:12.976-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "15508"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "15508",
              "display": "Propofol Inj"
            }
          ],
          "text": "Propofol Inj"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T00:45:00-05:00",
        "valueQuantity": {
          "value": 10,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895709",
      "resource": {
        "resourceType": "Observation",
        "id": "1895709",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:02.280-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "78"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "4105-3",
              "display": "Acetaminophen"
            }
          ],
          "text": "Acetaminophen"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T00:45:00-05:00",
        "valueQuantity": {
          "value": 325,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895711",
      "resource": {
        "resourceType": "Observation",
        "id": "1895711",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:02.280-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "5750"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "5750",
              "display": "Furosemide Inj"
            }
          ],
          "text": "Furosemide Inj"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T00:45:00-05:00",
        "valueQuantity": {
          "value": 20,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896987",
      "resource": {
        "resourceType": "Observation",
        "id": "1896987",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "2622"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "1",
              "code": "2622",
              "display": "Acetaminophn Sup"
            }
          ],
          "text": "Acetaminophn Sup"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-02T00:45:00-05:00",
        "valueQuantity": {
          "value": 650,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896922",
      "resource": {
        "resourceType": "Observation",
        "id": "1896922",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1274"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2345-7",
              "display": "Glucose SerPl Qn"
            }
          ],
          "text": "Glucose SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-01T22:10:00-05:00",
        "valueQuantity": {
          "value": 239,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895703",
      "resource": {
        "resourceType": "Observation",
        "id": "1895703",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:02.280-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "61"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "20570-8",
              "display": "Hct"
            }
          ],
          "text": "Hct"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-01T17:41:00-05:00",
        "valueQuantity": {
          "value": 22,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893262",
      "resource": {
        "resourceType": "Observation",
        "id": "1893262",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:28.791-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "877"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "786-4",
              "display": "MCHC"
            }
          ],
          "text": "MCHC"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-01T17:41:00-05:00",
        "valueQuantity": {
          "value": 33,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895702",
      "resource": {
        "resourceType": "Observation",
        "id": "1895702",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:02.280-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "62"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "26464-8",
              "display": "WBC #"
            }
          ],
          "text": "WBC #"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-01T17:41:00-05:00",
        "valueQuantity": {
          "value": 32.2,
          "system": "http://unitsofmeasure.org"
        },
        "comment": "Critical Value Called"
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895705",
      "resource": {
        "resourceType": "Observation",
        "id": "1895705",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:02.280-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "60"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "718-7",
              "display": "Hgb"
            }
          ],
          "text": "Hgb"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-01T17:41:00-05:00",
        "valueQuantity": {
          "value": 7.3,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896923",
      "resource": {
        "resourceType": "Observation",
        "id": "1896923",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1274"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2345-7",
              "display": "Glucose SerPl Qn"
            }
          ],
          "text": "Glucose SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-01T17:41:00-05:00",
        "valueQuantity": {
          "value": 322,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895704",
      "resource": {
        "resourceType": "Observation",
        "id": "1895704",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:02.280-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "63"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "789-8",
              "display": "RBC #"
            }
          ],
          "text": "RBC #"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-01T17:41:00-05:00",
        "valueQuantity": {
          "value": 2.3,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893255",
      "resource": {
        "resourceType": "Observation",
        "id": "1893255",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:28.791-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "875"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "787-2",
              "display": "MCV"
            }
          ],
          "text": "MCV"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-01T17:41:00-05:00",
        "valueQuantity": {
          "value": 98,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895707",
      "resource": {
        "resourceType": "Observation",
        "id": "1895707",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:02.280-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "876"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "785-6",
              "display": "MCH"
            }
          ],
          "text": "MCH"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-01T17:41:00-05:00",
        "valueQuantity": {
          "value": 32,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895706",
      "resource": {
        "resourceType": "Observation",
        "id": "1895706",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:02.280-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "11516"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "30385-9",
              "display": "RDW"
            }
          ],
          "text": "RDW"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-01T17:41:00-05:00",
        "valueQuantity": {
          "value": 13.3,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895273",
      "resource": {
        "resourceType": "Observation",
        "id": "1895273",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:56.276-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6141"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "20565-8",
              "display": "CO2 Total Bld Calc"
            }
          ],
          "text": "CO2 Total Bld Calc"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-01T12:14:00-05:00",
        "valueQuantity": {
          "value": 21.7,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895272",
      "resource": {
        "resourceType": "Observation",
        "id": "1895272",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:56.276-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6139"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "11557-6",
              "display": "PCO2 Bld"
            }
          ],
          "text": "PCO2 Bld"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-01T12:14:00-05:00",
        "valueQuantity": {
          "value": 33.5,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896924",
      "resource": {
        "resourceType": "Observation",
        "id": "1896924",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1274"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2345-7",
              "display": "Glucose SerPl Qn"
            }
          ],
          "text": "Glucose SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-01T12:14:00-05:00",
        "valueQuantity": {
          "value": 140,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893345",
      "resource": {
        "resourceType": "Observation",
        "id": "1893345",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:28.791-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6136"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "1959-6",
              "display": "HCO3 Bld Qn Calc"
            }
          ],
          "text": "HCO3 Bld Qn Calc"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-01T12:14:00-05:00",
        "valueQuantity": {
          "value": 20.6,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1892982",
      "resource": {
        "resourceType": "Observation",
        "id": "1892982",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:23.045-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "207"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "3150-0",
              "display": "Inspired O2"
            }
          ],
          "text": "Inspired O2"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-01T12:14:00-05:00",
        "valueQuantity": {
          "value": 100,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895274",
      "resource": {
        "resourceType": "Observation",
        "id": "1895274",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:56.276-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6140"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "11556-8",
              "display": "PO2"
            }
          ],
          "text": "PO2"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-01T12:14:00-05:00",
        "valueQuantity": {
          "value": 315,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1893340",
      "resource": {
        "resourceType": "Observation",
        "id": "1893340",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:28.791-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6131"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "11558-4",
              "display": "pH Bld"
            }
          ],
          "text": "pH Bld"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-01T12:14:00-05:00",
        "valueQuantity": {
          "value": 7.393000000000001,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895271",
      "resource": {
        "resourceType": "Observation",
        "id": "1895271",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:56.276-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "45"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2823-3",
              "display": "Potassium SerPl Qn"
            }
          ],
          "text": "Potassium SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-01T11:14:00-05:00",
        "valueQuantity": {
          "value": 3.6,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1892867",
      "resource": {
        "resourceType": "Observation",
        "id": "1892867",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:23.045-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "47"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2028-9",
              "display": "CO2-Tot SerPl Qn"
            }
          ],
          "text": "CO2-Tot SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-01T11:14:00-05:00",
        "valueQuantity": {
          "value": 21,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895270",
      "resource": {
        "resourceType": "Observation",
        "id": "1895270",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:56.276-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "44"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2951-2",
              "display": "Sodium SerPl Qn"
            }
          ],
          "text": "Sodium SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-01T11:14:00-05:00",
        "valueQuantity": {
          "value": 136,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1895269",
      "resource": {
        "resourceType": "Observation",
        "id": "1895269",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:56.276-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "758"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2692-2",
              "display": "Osmolality SerPl Qn"
            }
          ],
          "text": "Osmolality SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-01T11:14:00-05:00",
        "valueQuantity": {
          "value": 278,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1892864",
      "resource": {
        "resourceType": "Observation",
        "id": "1892864",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:50:23.045-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "46"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2075-0",
              "display": "Chloride SerPl Qn"
            }
          ],
          "text": "Chloride SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-01T11:14:00-05:00",
        "valueQuantity": {
          "value": 110,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1896925",
      "resource": {
        "resourceType": "Observation",
        "id": "1896925",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:18.722-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "1274"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "2345-7",
              "display": "Glucose SerPl Qn"
            }
          ],
          "text": "Glucose SerPl Qn"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-01T10:36:00-05:00",
        "valueQuantity": {
          "value": 63,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1897238",
      "resource": {
        "resourceType": "Observation",
        "id": "1897238",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:24.131-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6141"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "20565-8",
              "display": "CO2 Total Bld Calc"
            }
          ],
          "text": "CO2 Total Bld Calc"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-01T10:36:00-05:00",
        "valueQuantity": {
          "value": 21.4,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1897233",
      "resource": {
        "resourceType": "Observation",
        "id": "1897233",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:24.131-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6140"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "11556-8",
              "display": "PO2"
            }
          ],
          "text": "PO2"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-01T10:36:00-05:00",
        "valueQuantity": {
          "value": 66,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://lforms-service-stage-rh7.nlm.nih.gov:8143/hapi-fhir-jpaserver-example/baseDstu3/Observation/1897220",
      "resource": {
        "resourceType": "Observation",
        "id": "1897220",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-06-28T18:51:24.131-04:00"
        },
        "identifier": [
          {
            "system": "1",
            "value": "6131"
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "11558-4",
              "display": "pH Bld"
            }
          ],
          "text": "pH Bld"
        },
        "subject": {
          "reference": "Patient/pat-98",
          "display": "TODO-random-gen dummy-98"
        },
        "effectiveDateTime": "2137-12-01T10:36:00-05:00",
        "valueQuantity": {
          "value": 7.38,
          "system": "http://unitsofmeasure.org"
        }
      },
      "search": {
        "mode": "match"
      }
    }
  ]
};