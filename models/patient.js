const mongoose = require('mongoose');
const { Schema } = mongoose;

const patientSchema = new Schema({
    name: String,
    age: Number,
    gender: String,
    contact: {
        phone: String,
        email: String,
        address: {
            street: String,
            city: String,
            province: String,
            zip: String
        }
    },
    medical_history: {
        allergies: [String],
        conditions: [String],
        surgeries: [String]
    },
    medications: [
        {
            name: String,
            dosage: String,
            frequency: String
        }
    ],
    visit_history: [
        {
            visit_date: String,
            soap: {
                subjective: String,
                assessment: String,
                plan: String
            },
            vitals: {
                height: Number,
                weight: Number,
                respiratory_rate: Number,
                blood_pressure: String,
                heart_rate: Number,
                temperature: Number
            }
        }
    ]
});

const Patient = mongoose.models.patient || mongoose.model('patient', patientSchema);

module.exports = Patient;