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
    const [medicalHistory, setMedicalHistory] = useState({
        allergies: [],
        conditions: [],
        surgeries: []
    });
    
    const handleInputChange = (index, category, value) => {
        const newMedicalHistory = { ...medicalHistory };
        newMedicalHistory[category][index] = value;
        setMedicalHistory(newMedicalHistory);
      };
    
      // Handle adding new input fields
      const handleAddField = (category) => {
        const newMedicalHistory = { ...medicalHistory };
        newMedicalHistory[category].push('');
        setMedicalHistory(newMedicalHistory);
      };
    
      // Handle removing input fields
      const handleRemoveField = (index, category) => {
        const newMedicalHistory = { ...medicalHistory };
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
      


    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !gender) {
            alert("Fill Out all input")
            return;
        }
        try {
            const res = await fetch('http://localhost:3000/api/patient', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ name, gender, contact })
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
                            {/* <label htmlFor="gender" className="block text-gray-700 font-bold mb-2">
                                Gender
                            </label>
                            <select onChange={(e) => setGender(e.target.value)}
                                className="border border-slate-500 px-3 py-2 rounded-md w-[28vh] mb-4"
                            >
                                <option value="">Select Gender</option>

                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select> */}
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
        {medicalHistory.allergies.map((allergy, index) => (
          <div key={index}>
            <input
              type="text"
              value={allergy}
              onChange={(e) => handleInputChange(index, 'allergies', e.target.value)}
              onKeyDown={handleKeyPress}

            />
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-sm focus:outline-none focus:shadow-outline text-sm"    type="button" onClick={() => handleRemoveField(index, 'allergies')}>Remove</button>
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
        {medicalHistory.conditions.map((condition, index) => (
          <div key={index}>
            <input
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
      <div>
        <h2 className='block text-gray-700 font-bold mb-2'> Surgeries</h2>
        {medicalHistory.surgeries.map((surgery, index) => (
          <div key={index}>
            <input
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

</div>
                    <button type='submit' className='button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Add Patient</button>
                </form>
            </div>
        </>
    )
}


