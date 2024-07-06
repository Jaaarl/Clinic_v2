
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
    console.log(id)
    const { patient } = await getPatientById(id);
    console.log(patient);
    const { name, gender, contact } = patient;
    return (
        <>
            <EditPatientForm id={id} newName={name} newGender={gender} newContact={contact} />
        </>
    )
}
