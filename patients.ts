import {Patient, Appointment, Lab} from './interface';
import {patients} from './interface';


// Patient Manager Object for patient-related logic
class PatientManagerClass {
    patients: Patient[]; // Type annotation for the array

    constructor(initialPatients: Patient[] = []) {
        this.patients = initialPatients;
    }

    // Reusable function to find the next available id number
    getNextId(): number {
        return this.patients.length > 0
        ? Math.max(...this.patients.map(p => p.id)) + 1
        : 1;
    },

    // Reusable function for creating a new patient
    addPatient(
        name: string,
        age: number,
        diagnosis: string,
        medications: string[] = [],
        appointments: [] as Appointment[],
        labs: [] as Lab[]
    ): Patient {
        const newPatient: Patient = {
        id: this.getNextId(),
        name,
        age,
        diagnosis,
        medications,
        appointments,
        labs
    };
    this.patients.push(newPatient);  // store it in the patients array
    return newPatient;
}

// Get patient by id
getPatient(id: number): Patient | null {
    return this.patients.find(p => p.id === id) || null;
}

// Get all patients
getAllPatients() {
    return this.patients;
}

// Get all patients to pretty-print all nested objects/arrays
prettyPrintPatients() {
    console.log(JSON.stringify(this.patients, null, 2));
}

// Get all patient names
getAllPatientNames() {
    return this.patients.map(patient => patient.name);
}

}

//Usage
const PatientManager = new PatientManagerClass(patients);

export default PatientManager;