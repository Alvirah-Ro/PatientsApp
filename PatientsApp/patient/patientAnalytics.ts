import type {Patient} from '../interface.ts';
import {patients} from './patients.ts';

// Parent Analyics Manager for stats, filters, and groupings
class PatientAnalyticsClass {
    constructor(public patients: Patient[] = []) {}

    // Get all patients over the age of 50
    getPatientsOver50() {
        return this.patients.filter(patient => patient.age >= 50);
    }
    
    // Get all patients under the age of 18
    getPatientsUnder18() {
        return this.patients.filter(patient => patient.age < 18);
    }
}

const PatientAnalytics = new PatientAnalyticsClass(patients);

export default PatientAnalytics;