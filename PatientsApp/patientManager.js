"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var patients_1 = require("./patients");
// Patient Manager Object for patient-related logic
var PatientManagerClass = /** @class */ (function () {
    function PatientManagerClass(initialPatients) {
        if (initialPatients === void 0) { initialPatients = []; }
        this.patients = initialPatients;
    }
    // Reusable function to find the next available id number
    PatientManagerClass.prototype.getNextId = function () {
        return this.patients.length > 0
            ? Math.max.apply(Math, this.patients.map(function (p) { return p.id; })) + 1
            : 1;
    };
    // Reusable function for creating a new patient
    PatientManagerClass.prototype.addPatient = function (name, age, diagnosis, medications, appointments, labs) {
        if (medications === void 0) { medications = []; }
        if (appointments === void 0) { appointments = []; }
        if (labs === void 0) { labs = []; }
        var newPatient = {
            id: this.getNextId(),
            name: name,
            age: age,
            diagnosis: diagnosis,
            medications: medications,
            appointments: appointments,
            labs: labs
        };
        this.patients.push(newPatient); // store it in the patients array
        return newPatient;
    };
    // Get patient by id
    PatientManagerClass.prototype.getPatient = function (id) {
        return this.patients.find(function (p) { return p.id === id; }) || null;
    };
    // Get all patients
    PatientManagerClass.prototype.getAllPatients = function () {
        return this.patients;
    };
    // Get all patients to pretty-print all nested objects/arrays
    PatientManagerClass.prototype.prettyPrintPatients = function () {
        console.log(JSON.stringify(this.patients, null, 2));
    };
    // Get all patient names
    PatientManagerClass.prototype.getAllPatientNames = function () {
        return this.patients.map(function (patient) { return patient.name; });
    };
    return PatientManagerClass;
}());
//Usage
var PatientManager = new PatientManagerClass(patients_1.patients);
// export default allows one to export a single value
exports.default = PatientManager;
