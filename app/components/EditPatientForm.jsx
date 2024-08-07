// "use client";
// import React from 'react'
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';


// export default function EditPatientForm({ id, name1, gender1, contact1, medical_history1, medication1 }) {
//     const [name, setName] = useState(name1);
//     const [gender, setGender] = useState(gender1);
//     const [birthday, setBirthday] = useState({ day: '', month: '', year: '' });

//     const [contact, setContact] = useState({
//         phone: 'contact1.phone',
//         email: 'contact1.email',
//         address: {
//             street: 'contact1.address.street',
//             city: 'contact1.address.city',
//             province: 'contact1.address.province',
//             zip: 'contact1.address.zip'
//         }
//     });
//     const [medical_history, setMedicalHistory] = useState({
//         allergies: [...medical_history1.allergies],
//         conditions: [...medical_history1.conditions],
//         surgeries: [...medical_history1.surgeries]
//     });
//     const [medications, setMedications] = useState([
//         {
//             name: medication1.name,
//             dosage: medication1.dosage,
//             frequency: medication1.freq
//         }
//     ]);

//     const handleInputChange = (index, category, value) => {
//         const newMedicalHistory = { ...medical_history };
//         newMedicalHistory[category][index] = value;
//         setMedicalHistory(newMedicalHistory);
//     };

//     // Handle adding new input fields
//     const handleAddField = (category) => {
//         const newMedicalHistory = { ...medical_history };
//         newMedicalHistory[category].push('');
//         setMedicalHistory(newMedicalHistory);
//     };

//     // Handle removing input fields
//     const handleRemoveField = (index, category) => {
//         const newMedicalHistory = { ...medical_history };
//         newMedicalHistory[category].splice(index, 1);
//         setMedicalHistory(newMedicalHistory);
//     };



//     const handleChange = (e, field, subfield = null) => {
//         const value = e.target.value;
//         setContact(prevState => ({
//             ...prevState,
//             [field]: subfield ? { ...prevState[field], [subfield]: value } : value
//         }));
//     };

//     const handleBirthdayChange = (e, field) => {
//         const value = e.target.value;
//         setBirthday(prevState => ({ ...prevState, [field]: value }));
//     };

//     const handleKeyPress = (e) => {
//         if (e.key === 'Enter') {
//             e.preventDefault();
//         }
//     };

//     const handleMedicationChange = (e, index) => {
//         const { name, value } = e.target;
//         const newMedications = [...medications];
//         newMedications[index][name] = value;
//         setMedications(newMedications);
//     };

//     const handleAddMedication = () => {
//         setMedications([...medications, { name: '', dosage: '', frequency: '' }]);
//     };

//     const handleRemoveMedication = (index) => {
//         const newMedications = medications.filter((_, i) => i !== index);
//         setMedications(newMedications);
//     };


//     const router = useRouter()
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const res = await fetch(`http://localhost:3000/api/patient${id}`,
//                 {
//                     method: "PUT",
//                     headers: {
//                         "Content-type": "application/json",
//                     },
//                     body: JSON.stringify({ name }),
//                 }
//             )
//             if (!res.ok) {
//                 throw new Error("failed to update topic");
//             }
//             router.push("/");
//         } catch (error) {
//             console.log(error)
//         }
//     };
//     return (
//         <>
//             <>
//                 <div className='flex gap-4 ml-3 '>

//                     <form onSubmit={handleSubmit} className='mt-3 w-fit'>
//                         <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
//                             Name
//                         </label>
//                         <input
//                             onChange={(e) => setName(e.target.value)}
//                             value={name}
//                             disabled
//                             name="name"
//                             className="border border-gray-300 bg-gray-100 text-gray-500 px-3 py-2 rounded-md w-full cursor-not-allowed"
//                             type="text"
//                             placeholder="Name"
//                         />

//                         <div>
//                             <label htmlFor="day" className="block text-gray-700 font-bold mb-2">
//                                 Birthday
//                             </label>


//                             <div className="flex">
//                                 <input
//                                     className="border border-slate-500 px-3 py-2 rounded-l-md w-1/4"
//                                     type="number"
//                                     placeholder="DD"

//                                     min="1"
//                                     max="31"
//                                     value={birthday.day}
//                                     onChange={(e) => handleBirthdayChange(e, 'day')}
//                                 />
//                                 <input
//                                     className="border border-slate-500 px-3 py-2 w-1/4"

//                                     type="number"
//                                     min="1"
//                                     max="12"
//                                     value={birthday.month}
//                                     onChange={(e) => handleBirthdayChange(e, 'month')}
//                                     placeholder="MM"
//                                 />
//                                 <input
//                                     className="border border-slate-500 px-3 py-2 rounded-r-md w-1/3"
//                                     type="number"
//                                     min="1900"
//                                     max="2100"
//                                     value={birthday.year}
//                                     onChange={(e) => handleBirthdayChange(e, 'year')}
//                                     placeholder="YYYY"
//                                 />
//                             </div>
//                         </div>
//                         <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
//                             Gender
//                         </label>
//                         <input
//                             onChange={(e) => setName(e.target.value)}
//                             value={gender}

//                             name="gender"
//                             // className="border border-slate-500 px-3 py-2 rounded-md w-full"
//                             className="border border-gray-300 bg-gray-100 text-gray-500 px-3 py-2 rounded-md w-full cursor-not-allowed"

//                             type="text"
//                             placeholder="Name"
//                             disabled
//                         />

//                         <div className=''>
//                             <label htmlFor="phone" className='block text-gray-700 font-bold mb-2'>Phone Number</label>
//                             <input
//                                 type="text"
//                                 value={contact1.phone}
//                                 onChange={(e) => handleChange(e, 'phone')}
//                                 className='border border-slate-500 px-3 py-2 rounded-md'
//                             />

//                             <label htmlFor="email" className='block text-gray-700 font-bold mb-2'>Email</label>
//                             <input
//                                 type="text"
//                                 value={contact1.email}
//                                 onChange={(e) => handleChange(e, 'email')}
//                                 className='border border-slate-500 px-3 py-2 rounded-md'
//                             />

//                             <label htmlFor="street" className='block text-gray-700 font-bold mb-2'>Street</label>
//                             <input
//                                 type="text"
//                                 value={contact1.address.street}
//                                 onChange={(e) => handleChange(e, 'address', 'street')}
//                                 className='border border-slate-500 px-3 py-2 rounded-md'
//                             />


//                             <label htmlFor="city" className='block text-gray-700 font-bold mb-2'>City</label>
//                             <input

//                                 type="text"
//                                 value={contact1.address.city}
//                                 onChange={(e) => handleChange(e, 'address', 'city')}
//                                 className='border border-slate-500 px-3 py-2 rounded-md'
//                             />

//                             <label htmlFor="province" className='block text-gray-700 font-bold mb-2'>Province</label>
//                             <input

//                                 type="text"
//                                 value={contact1.address.province}
//                                 onChange={(e) => handleChange(e, 'address', 'province')}
//                                 className='border border-slate-500 px-3 py-2 rounded-md'
//                             />

//                             <label htmlFor="zip" className='block text-gray-700 font-bold mb-2'>Zip</label>
//                             <input

//                                 type="text"
//                                 value={contact1.address.zip}
//                                 onChange={(e) => handleChange(e, 'address', 'zip')}
//                                 className='border border-slate-500 px-3 py-2 rounded-md'
//                             />
//                         </div>

//                         <div>
//                             <div>
//                                 <h2 className='block text-gray-700 font-bold mb-2'>Allergies</h2>
//                                 {medical_history.allergies.map((allergy, index) => (
//                                     <div key={index}>
//                                         <input
//                                             className=' mb-2 border border-slate-500 px-2 py-1 rounded-md mr-2'
//                                             type="text"
//                                             value={allergy}
//                                             onChange={(e) => handleInputChange(index, 'allergies', e.target.value)}
//                                             onKeyDown={handleKeyPress}

//                                         />
//                                         <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-sm focus:outline-none focus:shadow-outline text-sm" type="button" onClick={() => handleRemoveField(index, 'allergies')}>Remove</button>
//                                     </div>
//                                 ))}
//                                 <button
//                                     type="button"
//                                     onClick={() => handleAddField('allergies')}
//                                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-sm focus:outline-none focus:shadow-outline text-sm"

//                                 >
//                                     Add Allergy
//                                 </button>
//                             </div>
//                             <div>
//                                 <h2 className='block text-gray-700 font-bold mb-2'>Conditions</h2>
//                                 {medical_history.conditions.map((condition, index) => (
//                                     <div key={index}>
//                                         <input
//                                             className='mb-2 border border-slate-500 px-2 py-1 rounded-md mr-2'
//                                             type="text"
//                                             value={condition}
//                                             onChange={(e) => handleInputChange(index, 'conditions', e.target.value)}
//                                             onKeyDown={handleKeyPress}
//                                         />
//                                         <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-sm focus:outline-none focus:shadow-outline text-sm" type="button" onClick={() => handleRemoveField(index, 'conditions')}>Remove</button>
//                                     </div>
//                                 ))}
//                                 <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-sm focus:outline-none focus:shadow-outline text-sm" type="button" onClick={() => handleAddField('conditions')}>Add Condition</button>
//                             </div>
//                             <div className='mb-2'>
//                                 <h2 className='block text-gray-700 font-bold mb-2'> Surgeries</h2>
//                                 {medical_history.surgeries.map((surgery, index) => (
//                                     <div key={index}>
//                                         <input

//                                             className='border border-slate-500 px-2 py-1 rounded-md mr-2 mb-2 '
//                                             type="text"
//                                             value={surgery}
//                                             onChange={(e) => handleInputChange(index, 'surgeries', e.target.value)}
//                                             onKeyDown={handleKeyPress}
//                                         />
//                                         <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-sm focus:outline-none focus:shadow-outline text-sm" type="button" onClick={() => handleRemoveField(index, 'surgeries')}>Remove</button>
//                                     </div>
//                                 ))}
//                                 <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-sm focus:outline-none focus:shadow-outline text-sm" type="button" onClick={() => handleAddField('surgeries')}>Add Surgery</button>
//                             </div>
//                             <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-sm focus:outline-none focus:shadow-outline text-sm mb-2' type="button" onClick={handleAddMedication}>Add Medication</button>

//                         </div>
//                         <button type='submit' className='button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Edit Patient</button>
//                     </form>
//                 </div>
//             </>
//         </>

//     )
// }
"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function EditPatientForm({ id, name1, gender1, contact1, medical_history1, medication1 }) {
    const [name, setName] = useState(name1);
    const [gender, setGender] = useState(gender1);
    const [birthday, setBirthday] = useState({ day: '', month: '', year: '' });

    const [contact, setContact] = useState({
        phone: contact1.phone,
        email: contact1.email,
        address: {
            street: contact1.address.street,
            city: contact1.address.city,
            province: contact1.address.province,
            zip: contact1.address.zip
        }
    });

    const [medical_history, setMedicalHistory] = useState({
        allergies: [...medical_history1.allergies],
        conditions: [...medical_history1.conditions],
        surgeries: [...medical_history1.surgeries]
    });

    const [medications, setMedications] = useState(medication1.map(med => ({
        name: med.name,
        dosage: med.dosage,
        frequency: med.freq
    })));

    const handleInputChange = (index, category, value) => {
        const newMedicalHistory = { ...medical_history };
        newMedicalHistory[category][index] = value;
        setMedicalHistory(newMedicalHistory);
    };

    const handleAddField = (category) => {
        const newMedicalHistory = { ...medical_history };
        newMedicalHistory[category].push('');
        setMedicalHistory(newMedicalHistory);
    };

    const handleRemoveField = (index, category) => {
        const newMedicalHistory = { ...medical_history };
        newMedicalHistory[category].splice(index, 1);
        setMedicalHistory(newMedicalHistory);
    };

    const handleChange = (e, field, subfield = null) => {
        const value = e.target.value;
        setContact(prevState => ({
            ...prevState,
            [field]: subfield ? { ...prevState[field], [subfield]: value } : value
        }));
    };

    const handleBirthdayChange = (e, field) => {
        const value = e.target.value;
        setBirthday(prevState => ({ ...prevState, [field]: value }));
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    };

    const handleMedicationChange = (e, index) => {
        const { name, value } = e.target;
        const newMedications = [...medications];
        newMedications[index][name] = value;
        setMedications(newMedications);
    };

    const handleAddMedication = () => {
        setMedications([...medications, { name: '', dosage: '', frequency: '' }]);
    };

    const handleRemoveMedication = (index) => {
        const newMedications = medications.filter((_, i) => i !== index);
        setMedications(newMedications);
    };

    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`http://localhost:3000/api/patient/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ name, gender, contact, medical_history, medications, birthday }),
            });
            if (!res.ok) {
                throw new Error("failed to update patient");
            }
            router.push("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='flex gap-4 ml-3'>
            <form onSubmit={handleSubmit} className='mt-3 w-fit'>
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                    Name
                </label>
                <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    disabled
                    name="name"
                    className="border border-gray-300 bg-gray-100 text-gray-500 px-3 py-2 rounded-md w-full cursor-not-allowed"
                    type="text"
                    placeholder="Name"
                />

                <div>
                    <label htmlFor="day" className="block text-gray-700 font-bold mb-2">
                        Birthday
                    </label>
                    <div className="flex">
                        <input
                            className="border border-slate-500 px-3 py-2 rounded-l-md w-1/4"
                            type="number"
                            placeholder="DD"
                            min="1"
                            max="31"
                            value={birthday.day}
                            onChange={(e) => handleBirthdayChange(e, 'day')}
                        />
                        <input
                            className="border border-slate-500 px-3 py-2 w-1/4"
                            type="number"
                            min="1"
                            max="12"
                            value={birthday.month}
                            onChange={(e) => handleBirthdayChange(e, 'month')}
                            placeholder="MM"
                        />
                        <input
                            className="border border-slate-500 px-3 py-2 rounded-r-md w-1/3"
                            type="number"
                            min="1900"
                            max="2100"
                            value={birthday.year}
                            onChange={(e) => handleBirthdayChange(e, 'year')}
                            placeholder="YYYY"
                        />
                    </div>
                </div>
                <label htmlFor="gender" className="block text-gray-700 font-bold mb-2">
                    Gender
                </label>
                <input
                    onChange={(e) => setGender(e.target.value)}
                    value={gender}
                    name="gender"
                    className="border border-gray-300 bg-gray-100 text-gray-500 px-3 py-2 rounded-md w-full cursor-not-allowed"
                    type="text"
                    placeholder="Gender"
                    disabled
                />

                <div>
                    <label htmlFor="phone" className='block text-gray-700 font-bold mb-2'>Phone Number</label>
                    <input
                        type="text"
                        value={contact.phone}
                        onChange={(e) => handleChange(e, 'phone')}
                        className='border border-slate-500 px-3 py-2 rounded-md'
                    />

                    <label htmlFor="email" className='block text-gray-700 font-bold mb-2'>Email</label>
                    <input
                        type="text"
                        value={contact.email}
                        onChange={(e) => handleChange(e, 'email')}
                        className='border border-slate-500 px-3 py-2 rounded-md'
                    />

                    <label htmlFor="street" className='block text-gray-700 font-bold mb-2'>Street</label>
                    <input
                        type="text"
                        value={contact.address.street}
                        onChange={(e) => handleChange(e, 'address', 'street')}
                        className='border border-slate-500 px-3 py-2 rounded-md'
                    />

                    <label htmlFor="city" className='block text-gray-700 font-bold mb-2'>City</label>
                    <input
                        type="text"
                        value={contact.address.city}
                        onChange={(e) => handleChange(e, 'address', 'city')}
                        className='border border-slate-500 px-3 py-2 rounded-md'
                    />

                    <label htmlFor="province" className='block text-gray-700 font-bold mb-2'>Province</label>
                    <input
                        type="text"
                        value={contact.address.province}
                        onChange={(e) => handleChange(e, 'address', 'province')}
                        className='border border-slate-500 px-3 py-2 rounded-md'
                    />

                    <label htmlFor="zip" className='block text-gray-700 font-bold mb-2'>Zip</label>
                    <input
                        type="text"
                        value={contact.address.zip}
                        onChange={(e) => handleChange(e, 'address', 'zip')}
                        className='border border-slate-500 px-3 py-2 rounded-md'
                    />
                </div>

                <div>
                    <h2 className='block text-gray-700 font-bold mb-2'>Allergies</h2>
                    {medical_history.allergies.map((allergy, index) => (
                        <div key={index}>
                            <input
                                className=' mb-2 border border-slate-500 px-2 py-1 rounded-md mr-2'
                                type="text"
                                value={allergy}
                                onChange={(e) => handleInputChange(index, 'allergies', e.target.value)}
                                onKeyDown={handleKeyPress}
                            />
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-sm focus:outline-none focus:shadow-outline text-sm" type="button" onClick={() => handleRemoveField(index, 'allergies')}>Remove</button>
                        </div>
                    ))}
                    <button
                        type="button"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline text-sm"
                        onClick={() => handleAddField('allergies')}
                    >
                        Add Allergy
                    </button>
                </div>

                <div>
                    <h2 className='block text-gray-700 font-bold mb-2'>Conditions</h2>
                    {medical_history.conditions.map((condition, index) => (
                        <div key={index}>
                            <input
                                className=' mb-2 border border-slate-500 px-2 py-1 rounded-md mr-2'
                                type="text"
                                value={condition}
                                onChange={(e) => handleInputChange(index, 'conditions', e.target.value)}
                                onKeyDown={handleKeyPress}
                            />
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-sm focus:outline-none focus:shadow-outline text-sm" type="button" onClick={() => handleRemoveField(index, 'conditions')}>Remove</button>
                        </div>
                    ))}
                    <button
                        type="button"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline text-sm"
                        onClick={() => handleAddField('conditions')}
                    >
                        Add Condition
                    </button>
                </div>

                <div>
                    <h2 className='block text-gray-700 font-bold mb-2'>Surgeries</h2>
                    {medical_history.surgeries.map((surgery, index) => (
                        <div key={index}>
                            <input
                                className=' mb-2 border border-slate-500 px-2 py-1 rounded-md mr-2'
                                type="text"
                                value={surgery}
                                onChange={(e) => handleInputChange(index, 'surgeries', e.target.value)}
                                onKeyDown={handleKeyPress}
                            />
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-sm focus:outline-none focus:shadow-outline text-sm" type="button" onClick={() => handleRemoveField(index, 'surgeries')}>Remove</button>
                        </div>
                    ))}
                    <button
                        type="button"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline text-sm"
                        onClick={() => handleAddField('surgeries')}
                    >
                        Add Surgery
                    </button>
                </div>

                {/* <div>
                    <h2 className='block text-gray-700 font-bold mb-2'>Medications</h2>
                    {medications.map((med, index) => (
                        <div key={index}>
                            <input
                                type="text"
                                name="name"
                                value={med.name}
                                placeholder="Name"
                                onChange={(e) => handleMedicationChange(e, index)}
                                className='border border-slate-500 px-2 py-1 rounded-md mb-2 mr-2'
                            />
                            <input
                                type="text"
                                name="dosage"
                                value={med.dosage}
                                placeholder="Dosage"
                                onChange={(e) => handleMedicationChange(e, index)}
                                className='border border-slate-500 px-2 py-1 rounded-md mb-2 mr-2'
                            />
                            <input
                                type="text"
                                name="frequency"
                                value={med.frequency}
                                placeholder="Frequency"
                                onChange={(e) => handleMedicationChange(e, index)}
                                className='border border-slate-500 px-2 py-1 rounded-md mb-2 mr-2'
                            />
                            <button
                                type="button"
                                onClick={() => handleRemoveMedication(index)}
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline text-sm"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={handleAddMedication}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline text-sm"
                    >
                        Add Medication
                    </button>
                </div> */}

                <button
                    type="submit"
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold mt-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                >
                    Update Patient
                </button>
            </form>
        </div>
    );
}