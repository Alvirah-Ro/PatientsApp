"use strict";
// EHR Array Practice Exercises
// Dataset (use this for all exercises)
// patients is an array of patient objects
// Each patient is an object with properties (some properties are arrays)
// medications is an array of strings
// appointments and labs are an array of objects
Object.defineProperty(exports, "__esModule", { value: true });
exports.patients = void 0;
exports.patients = [
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
