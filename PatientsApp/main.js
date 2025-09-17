"use strict";
// To run TypeScript files: 
// - use ts-node for quick development/testing; command is: npx ts-node main.ts
// - use tsc+node for production or sharing code; command is: tsc main.ts to compile, node main.js to run
Object.defineProperty(exports, "__esModule", { value: true });
// This is how to import a default export
var patientManager_1 = require("./patientManager");
patientManager_1.default.addPatient("Bowser Koopa", 43, "Aggression", ["Mushrooms"]);
console.log(patientManager_1.default.getAllPatientNames());
patientManager_1.default.prettyPrintPatients();
