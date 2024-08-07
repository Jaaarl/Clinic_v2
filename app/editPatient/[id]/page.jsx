
import EditPatientForm from '@/app/components/EditPatientForm'
import React from 'react'

const getPatientById = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/patient/${id}`, {
            cache: "no-store",

        });
        if (!res.ok) {
            throw new Error("Failed to fetch topic")

        }
        console.log(res);
        return res.json();
    } catch (error) {
        console.log(error)
    }
}

export default async function editPatient({ params }) {
    const { id } = params;
    // console.log(id)
    const { patient } = await getPatientById(id);
    // console.log(patient);
    const { name, gender, contact, medical_history, medications } = patient;
    return (
        <>
            <EditPatientForm id={id} name1={name} gender1={gender} contact1={contact} medical_history1={medical_history} medication1={medications} />
        </>
    )
}
