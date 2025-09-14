import PatientManager from './patients.ts';

PatientManager.addPatient("Bowser Koopa", 43, "Aggression", ["Mushrooms"]);
console.log(PatientManager.getAllPatientNames());

PatientManager.prettyPrintPatients();