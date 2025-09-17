// To run TypeScript files: 
// - use ts-node for quick development/testing; command is: npx ts-node main.ts
// - use tsc+node for production or sharing code; command is: tsc main.ts to compile, node main.js to run

// This is how to import a default export
import PatientManager from "./patientManager.js";

PatientManager.addPatient("Bowser Koopa", 43, "Aggression", ["Mushrooms"]);
console.log(PatientManager.getAllPatientNames());

PatientManager.prettyPrintPatients();