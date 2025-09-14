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

export const patients = [
  {
    id: 1,
    name: "Alice Johnson",
    age: 32,
    diagnosis: "Hypertension",
    medications: ["Lisinopril"],
    appointments: [
      { date: "2025-09-01", type: "Checkup" },
      { date: "2025-09-10", type: "Lab Test" }
    ],
    labs: [
      { test: "Cholesterol", result: 190 },
      { test: "Blood Pressure", result: "120/80" }
    ]
  },
  {
    id: 2,
    name: "Bob Smith",
    age: 54,
    diagnosis: "Diabetes",
    medications: ["Metformin", "Insulin"],
    appointments: [
      { date: "2025-09-03", type: "Follow-up" }
    ],
    labs: [
      { test: "Cholesterol", result: 220 },
      { test: "A1C", result: 7.8 }
    ]
  },
  {
    id: 3,
    name: "Carlos Martinez",
    age: 45,
    diagnosis: "Asthma",
    medications: ["Albuterol"],
    appointments: [
      { date: "2025-09-02", type: "Checkup" }
    ],
    labs: [
      { test: "Lung Function", result: "Mild obstruction" }
    ]
  }
];

