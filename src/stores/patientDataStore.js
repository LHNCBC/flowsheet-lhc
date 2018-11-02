//import { observable, action, computed } from 'mobx';

class PatientDataStore {
  patient;

  setPatient(patientResource) {
    this.patient = patientResource;
  }
  
  getPatientName(patient = this.patient) {
    let name = "";
    if (patient && patient.name && patient.name.length > 0) {
      if (patient.name[0].given && patient.name[0].family) {
        name = patient.name[0].given.join(" ") + " " + patient.name[0].family;
      }
      else if (patient.name[0].family) {
        name = patient.name[0].family;
      }
      else if (patient.name[0].given ) {
        name = patient.name[0].given.join(" ");
      }
    }
    return name;
  };

  getPatientPhoneNumber(patient = this.patient) {
    let phone = "";
    if (patient && patient.telecom) {
      for (let i=0, iLen=patient.telecom.length; i<iLen; i++) {
        if (patient.telecom[i].system==="phone" && patient.telecom[i].value) {
          phone = patient.telecom[i].use ? patient.telecom[i].use + ": " + patient.telecom[i].value :
            patient.telecom[i].value;
          break;
        }
      }
    }
    return phone;
  };

}

export default new PatientDataStore();