// Tests for PatientManager
// Use command: npm test
import PatientManager from "../patientManager";

// This runs before every single test
// Reset the patients array to empty so tests don't affect each other
beforeEach(() => {
    PatientManager.patients = [];
});

// Arrange -> set up environment and inputs 
// (beforeEach already reset patients so nothing new here)
test("adds a new patient", () => {
    // Act -> call addPatient and run code being tested
    const patient = PatientManager.addPatient("Philomena Phonics", 86, "Migraines");

    // Assert -> use expect(...).toBe(...) to check results
    expect(patient.id).toBe(1);
    expect(patient.name).toBe("Philomena Phonics");
    expect(patient.age).toBe(86);
    expect(patient.diagnosis).toBe("Migraines");
    expect(PatientManager.patients.length).toBe(1);
});

test("increments patient ID correctly", () => {
    PatientManager.addPatient("Cory Thaiders", 36, "Hypertention");
    const patient2 = PatientManager.addPatient("Jack Thaiders", 40, "Diabetes");

    expect(patient2.id).toBe(2);
});

test("retrieves patient by ID", () => {
    const patient = PatientManager.addPatient("Sierra August-Eastwood", 45, "Asthma");
    const found = PatientManager.getPatient(patient.id);

    expect(found).toEqual(patient);
});



