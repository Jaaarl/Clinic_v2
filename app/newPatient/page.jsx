'use client'



import Sidebar from '../components/Sidebar'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function newPatient() {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [birthday, setBirthday] = useState({ day: '', month: '', year: '' });

    const [contact, setContact] = useState({
        phone: '',
        email: '',
        address: {
            street: '',
            city: '',
            province: '',
            zip: ''
        }
    });
    const [medical_history, setMedicalHistory] = useState({
        allergies: [],
        conditions: [],
        surgeries: []
    });
    const [medications, setMedications] = useState([
        {
            name: '',
            dosage: '',
            frequency: ''
        }
    ]);

    const handleInputChange = (index, category, value) => {
        const newMedicalHistory = { ...medical_history };
        newMedicalHistory[category][index] = value;
        setMedicalHistory(newMedicalHistory);
    };

    // Handle adding new input fields
    const handleAddField = (category) => {
        const newMedicalHistory = { ...medical_history };
        newMedicalHistory[category].push('');
        setMedicalHistory(newMedicalHistory);
    };

    // Handle removing input fields
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




    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !gender) {
            alert("Fill Out all input")
            return;
        }
        try {
            console.log(medical_history);
            const res = await fetch('http://localhost:3000/api/patient', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ name, gender, contact, medical_history, medications })
            });
            if (res.ok) {
                router.push('/');
                console.log('ok');
            }
            else {
                new Error("Failed to create a Patient")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className='flex gap-4 ml-3 '>

                <form onSubmit={handleSubmit} className='mt-3 w-fit'>
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                        Name
                    </label>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        value={name}

                        name="name"
                        className="border border-slate-500 px-3 py-2 rounded-md w-full"
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
                        <div>

                            <input
                                type="radio"
                                id="male"
                                name="gender"
                                value="Male"
                                checked={gender === "Male"}
                                onChange={(e) => setGender(e.target.value)}
                                className="mr-2"
                            />
                            <label htmlFor="male" className="mr-4 text-gray-700 font-bold">Male</label>

                            <input
                                type="radio"
                                id="female"
                                name="gender"
                                value="Female"
                                checked={gender === "Female"}
                                onChange={(e) => setGender(e.target.value)}
                                className="mr-2"
                            />
                            <label htmlFor="female" className='text-gray-700 font-bold'>Female</label>
                        </div>
                    </div>
                    <div className=''>
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
                                onClick={() => handleAddField('allergies')}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-sm focus:outline-none focus:shadow-outline text-sm"

                            >
                                Add Allergy
                            </button>
                        </div>
                        <div>
                            <h2 className='block text-gray-700 font-bold mb-2'>Conditions</h2>
                            {medical_history.conditions.map((condition, index) => (
                                <div key={index}>
                                    <input
                                        className='mb-2 border border-slate-500 px-2 py-1 rounded-md mr-2'
                                        type="text"
                                        value={condition}
                                        onChange={(e) => handleInputChange(index, 'conditions', e.target.value)}
                                        onKeyDown={handleKeyPress}
                                    />
                                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-sm focus:outline-none focus:shadow-outline text-sm" type="button" onClick={() => handleRemoveField(index, 'conditions')}>Remove</button>
                                </div>
                            ))}
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-sm focus:outline-none focus:shadow-outline text-sm" type="button" onClick={() => handleAddField('conditions')}>Add Condition</button>
                        </div>
                        <div className='mb-2'>
                            <h2 className='block text-gray-700 font-bold mb-2'> Surgeries</h2>
                            {medical_history.surgeries.map((surgery, index) => (
                                <div key={index}>
                                    <input

                                        className='border border-slate-500 px-2 py-1 rounded-md mr-2 mb-2 '
                                        type="text"
                                        value={surgery}
                                        onChange={(e) => handleInputChange(index, 'surgeries', e.target.value)}
                                        onKeyDown={handleKeyPress}
                                    />
                                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-sm focus:outline-none focus:shadow-outline text-sm" type="button" onClick={() => handleRemoveField(index, 'surgeries')}>Remove</button>
                                </div>
                            ))}
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-sm focus:outline-none focus:shadow-outline text-sm" type="button" onClick={() => handleAddField('surgeries')}>Add Surgery</button>
                        </div>
                        {medications.map((medication, index) => (
                            <div key={index} className='flex gap-2'>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Medication Name"
                                    value={medication.name}
                                    onChange={(e) => handleMedicationChange(e, index)}
                                    required
                                />
                                <input
                                    type="text"
                                    name="dosage"
                                    placeholder="Dosage"
                                    value={medication.dosage}
                                    onChange={(e) => handleMedicationChange(e, index)}
                                    required
                                />
                                <input
                                    type="text"
                                    name="frequency"
                                    placeholder="Frequency"
                                    value={medication.frequency}
                                    onChange={(e) => handleMedicationChange(e, index)}
                                    required
                                />
                                <button type="button" className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-sm focus:outline-none focus:shadow-outline text-sm" onClick={() => handleRemoveMedication(index)}>Remove</button>
                            </div>
                        ))}
                        <button type="button" onClick={handleAddMedication}>Add Medication</button>

                    </div>
                    <button type='submit' className='button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Add Patient</button>
                </form>
            </div>
        </>
    )
}


