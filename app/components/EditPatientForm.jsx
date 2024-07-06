"use client";
import React from 'react'
import { useState } from 'react';
const EditPatientForm = (id, newName, newGender, newContact) => {

    const [name, setName] = useState(newName.name);
    // // const [gender, setGender] = useState("");
    // // const [birthday, setBirthday] = useState({ day: '', month: '', year: '' });

    // // const [contact, setContact] = useState({
    // //     phone: '',
    // //     email: '',
    // //     address: {
    // //         street: '',
    // //         city: '',
    // //         province: '',
    // //         zip: ''
    // //     }
    // // });
    // // const [medical_history, setMedicalHistory] = useState({
    // //     allergies: [],
    // //     conditions: [],
    // //     surgeries: []
    // // });
    // // const [medications, setMedications] = useState([
    // //     {
    // //         name: '',
    // //         dosage: '',
    // //         frequency: ''
    // //     }
    // // ]);

    // const [name, setName] = useState("newName");
    // const [gender, setGender] = useState("newGender");
    // const [contact, setContact] = useState({
    //     phone: 'newContact.phone',
    //     email: 'newContact.email',
    //     address: {
    //         street: 'newContact.address.street',
    //         city: 'newContact.address.city',
    //         province: 'newcontact.address.province',
    //         zip: 'newcontact.address.province'
    //     }
    // });



    return (
        <div>
            console.log({name}, {id})
        </div>
    )
}

export default EditPatientForm