// Tests for PatientAnalytics

import PatientAnalytics from "../patientAnalytics";

beforeEach(() => {
    PatientAnalytics.patients = [];
});

test("finds groups of patients by ages", () => {
    PatientAnalytics.patients = [
        {
            id: 1,
            name: "Bumpy McDino",
            age: 5,
            diagnosis: "spiny",
            medications: [],
            appointments: [],
            labs: []
        },
        {
            id: 2,
            name: "Buster Brown",
            age: 89,
            diagnosis: "fit-as-a-fiddle",
            medications: [],
            appointments: [],
            labs: []

        },
        {
            id: 3,
            name: "Lulubelle Cat",
            age: 26,
            diagnosis: "furry",
            medications: [],
            appointments: [],
            labs: []

        }
    ]

    const over50 = PatientAnalytics.getPatientsOver50();
    const under18 = PatientAnalytics.getPatientsUnder18();
    expect(over50.length).toBe(1);
    expect(under18.length).toBe(1);
});