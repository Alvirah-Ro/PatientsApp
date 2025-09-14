// use command - node practice - to run file

import patients from './array.js';
import readline from 'readline';

// This converts the patient object into a formatted JSON string
// patients is what we want to print; null means no filtering; 2 is the number of spaces to use for indentation
//console.log(JSON.stringify(patients, null, 2));

// Gets a list of all patient names
const patientNames = patients.map(patient => patient.name);
//console.log(patientNames);

// Finds the next available id number
const nextId = patients.length > 0
    ? Math.max(...patients.map(patient => patient.id)) + 1
    : 1;

// Adds a new patient
const newPatient = {
    id: nextId,
    name: "Dana Lee",
    age: 29,
    diagnosis: "Migraines",
    medications: [],
    appointments: [],
    labs: [],
};
patients.push(newPatient);
//console.log(patients);

// Reusable function to find the next available id number
function getNextId() {
    return patients.length > 0
        ? Math.max(...patients.map(patient => patient.id)) + 1
        : 1;
}

// Reusable function for creating a new patient
function createPatient(name, age, diagnosis, medications = [], appointments = [], labs = []) {
    // Converts these to arrays in case they are passed in as another kind of data
    const normalizedMedications = Array.isArray(medications) ? medications : [medications];
    const normalizedAppointments = Array.isArray(appointments) ? appointments : [appointments];
    const normalizedLabs = Array.isArray(labs) ? labs : [labs];

    const newPatient = {
        id: getNextId(),
        name,
        age,
        diagnosis,
        medications: normalizedMedications,
        appointments: normalizedAppointments,
        labs: normalizedLabs
    };
    
    patients.push(newPatient);  // store it in the patients array
    return newPatient;
}

createPatient("Schuyler Cutiepie", 13, "Underweight");
createPatient("Simon Longfur", 12, "Overweight", [], [{date: "2025-10-31", type: "Checkup"}]);
//console.log(patients);

// Remove Alice Johnson from list
// Loop starts at end of array and removes 1 item from index i
//for (let i = patients.length -1; i >=0; i--) {
//    if (patients[i].name === "Alice Johnson") {
//        patients.splice(i, 1);
//    }
//}
//console.log(patients);

// Get a list of unique medications prescribed
const medicationsList = patients.flatMap(patient => patient.medications);
//console.log(medicationsList);

// Find the average age of patients
const averageAge = patients.reduce((acc, patient) => acc + patient.age, 0) / patients.length;
//console.log(averageAge);

// Get all patients over the age of 50
const over50 = patients.filter(patient => patient.age >= 50);
//console.log(over50);

// Get all patients under the age of 40
const under40 = patients.filter(patient => patient.age < 40);
//console.log(under40);

// Sort patients by age
patients.sort((a, b) => a.age - b.age);
//console.log(patients);

// Sort patients by diagnosis
// Use localeCompare to sort strings, reverse final a and b for reverse alphabet sorting 
patients.sort((a, b) => a.diagnosis.localeCompare(b.diagnosis));
//console.log(patients);

// Find all patients with diabetes
const diabetesPatients = patients.filter(patient => patient.diagnosis.toLowerCase() === "diabetes");
//console.log(diabetesPatients);

// Check if any patient has Asthma
const asthma = patients.some(patient => patient.diagnosis.toLowerCase() === "asthma");
//console.log(asthma);

// Flatten all appointment dates into a single array
// Use .map on inner function because the dates are strings
const appointmentDates = patients.flatMap(patient => 
    patient.appointments.map(appointment => appointment.date)
);    
//console.log(appointmentDates);


// Sort appointments across all patients by date
// Use separate functions to flatten all appointments first, then sort all of them
// new Date(a.date) turns the date string into a Date object.
// [...] is the spread operator and copies the original array rather than mutating it
const allAppointments = patients.flatMap(patient => patient.appointments);
const sortedAppointments = [...allAppointments].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
);
//console.log(allAppointments);
//console.log(sortedAppointments);

// Get all patients who have a lab test scheduled
const labTests = patients.filter(patient => 
    patient.appointments.some(appointment => appointment.type.toLowerCase() === "lab test")
);
//console.log(JSON.stringify(labTests, null, 2));

// Returns the just the names of patients who have a lab test scheduled
//console.log(labTests.map(patient => patient.name));

// Find Bob Smith's cholesterol result
const bob = patients.find(patient => patient.name.toLowerCase() === "bob smith");
const cholesterol = bob.labs.find(lab => lab.test.toLowerCase() === "cholesterol");
//console.log(cholesterol);

// Get a list of all lab test types
const labTypes = patients.flatMap(patient => 
    patient.labs.map(lab => lab.test)
);
// Uses the spread operator to turn the Set back into an array.
const uniqueLabTypes = [...new Set(labTypes)];
//console.log(uniqueLabTypes);

// Get a list of all unique appointment types
const apptTypes = patients.flatMap(patient =>
    patient.appointments.map(appointment => appointment.type)
);
const uniqueApptTypes = [...new Set(apptTypes)];
//console.log(uniqueApptTypes);

// Get a list of patient names who have checkups
const checkupPatients = patients
    .filter(patient => 
    patient.appointments.some(appointment => appointment.type.toLowerCase() === "checkup")
    )
    .map(patient => patient.name);
//console.log(checkupPatients);

// Group lab results by patient
// result (or acc) is the thing we're accumulating into as .reduce() iterates
const labsByPatient = patients.reduce((result, patient) => {
    result[patient.name] = patient.labs.map(lab => Object.values(lab)); // maps each lab into an array of values
    return result; // return the growing result object
}, {});
//console.log(JSON.stringify(labsByPatient, null, 2));

// Group medicataions by patient
// Medications are strings
// If the field is an array of strings → use directly (no Object.values)
const medicationsByPatient = patients.reduce((acc, patient) => {
    acc[patient.name] = patient.medications;
    return acc;
}, {});
//console.log(medicationsByPatient);

// Another way to group lab results by patient
// This grouped structure turns the labs into an object with test names as keys and results as values
const labResultsByPatient = patients.reduce((acc, patient) => {
    acc[patient.name] = patient.labs.reduce((labAcc, lab) => {
        labAcc[lab.test] = lab.result;
        return labAcc;
    }, {});
    return acc;
}, {});
//console.log(JSON.stringify(labResultsByPatient, null, 2));

// Find if any patients have hypertension 
// This should return true
const hypertensionPatients = patients.some(patient =>
    patient.diagnosis.toLowerCase() === "hypertension"
);
//console.log(hypertensionPatients);

// Return the name of the patient with hypertension
const hypertensionPatientNames = patients
    .filter(patient => patient.diagnosis.toLowerCase() === "hypertension")
    .map(patient => patient.name);
//console.log(hypertensionPatientNames);

// Simulate a report generator that takes input of test types 
// and returns an output object that lists each patient's results for those tests if available
// This code has multiple parts: the function to get test results, and the interface to simulate input/output

function testsByPatients(requestedTests) { 
    //normalize user input to lowercase for comparison
    const normalizedTests = requestedTests.map(t => t.toLowerCase());
    
    return patients.reduce((acc, patient) => {
        // for each patient, build their test results object
        const results = patient.labs.reduce((labAcc, lab) => {
            if (normalizedTests.includes(lab.test.toLowerCase())) {
                labAcc[lab.test] = lab.result; // keep original casing in the output
            }
            return labAcc;
        }, {});
        acc[patient.name] = results; // attach to patient
        return acc;
    }, {});
}

// Ask the user which test(s) they want USE IN BROWSER
//let testInput = prompt("Enter test names (comma separated):") 


// Create interface for input/output
// Uncomment the following lines for the testsByPatients function to work
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// // Ask a question and handle the response
// rl.question("Enter test names (comma separated):", (testInput) => {
//     // convert input into an array, trimming whitespace
//     let requestedTests = testInput
//         .split(",")
//         .map(test => test.trim());
//     // Generate and show results
//     const report = testsByPatients(requestedTests);
//     console.log(JSON.stringify(report, null, 2));
//     rl.close(); // closes the interface
// });
