// To run TypeScript files: 
// - use ts-node for quick development/testing; command is: npx ts-node main.ts
// (Do not use node main.ts or node main.js unless you have compiled JS files.)
// - use tsc+node for production or sharing code; command is: tsc main.ts to compile, node main.js to run

// This is how to import a default export
import PatientManager from "./patient/patientManager.ts";

//console.log(PatientManager);

PatientManager.addPatient("Bowser Koopa", 43, "Aggression", ["Mushrooms"]);
//console.log(PatientManager.getAllPatientNames());

console.log(PatientManager.getPatientsOver50());
//PatientManager.prettyPrintPatients();