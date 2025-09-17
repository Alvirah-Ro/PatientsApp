// Changing javascript to typescript and defining interfaces for data
// This ensures that every patient object has the correct structure

// Represents a single appointment
export interface Appointment {
    date: string;
    type: string;
}

// Represents a lab test
// The | Symbol is a union type - the value can be either a string or a number
export interface Lab {
    test: string;
    result: string | number;
}

// Represents a patient
export interface Patient {
    id: number;
    name: string;
    age: number;
    diagnosis: string;
    medications: string[];
    appointments: Appointment[];
    labs: Lab[];
}

