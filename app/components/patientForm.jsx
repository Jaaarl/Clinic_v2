// export default function PatientForm() {
//     const [formData, setFormData] = useClient(() => useState({
//         name: '',
//         age: '',
//         gender: '',
//         contact: {
//             phone: '',
//             email: '',
//             address: {
//                 street: '',
//                 city: '',
//                 province: '',
//                 zip: ''
//             }
//         },
//         medical_history: {
//             allergies: [],
//             conditions: [],
//             surgeries: []
//         },
//         medications: []
//     }));

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Handle form submission here, e.g., send data to server
//         console.log(formData);
//     };

//     return (
//         <div className="container mx-auto px-4">
//             <h1 className="text-2xl font-bold mb-4">Patient Form</h1>
//             <form onSubmit={handleSubmit}>
//                 <label className="block mb-2">
//                     Name:
//                     <input
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         className="border border-gray-300 rounded-md px-2 py-1"
//                     />
//                 </label>
//                 <label className="block mb-2">
//                     Age:
//                     <input
//                         type="number"
//                         name="age"
//                         value={formData.age}
//                         onChange={handleChange}
//                         className="border border-gray-300 rounded-md px-2 py-1"
//                     />
//                 </label>
//                 <label className="block mb-2">
//                     Gender:
//                     <select
//                         name="gender"
//                         value={formData.gender}
//                         onChange={handleChange}
//                         className="border border-gray-300 rounded-md px-2 py-1"
//                     >
//                         <option value="male">Male</option>
//                         <option value="female">Female</option>
//                         <option value="other">Other</option>
//                     </select>
//                 </label>
//                 {/* Other fields like contact information, medical history, and medications */}
//                 <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
//                     Submit
//                 </button>
//             </form>
//         </div>
//     );
// }


//2


// import React from 'react'

// export default function patientForm() {
//     return (
//         <div>patientForm</div>
//     )
// }


//3
"use Client"

import { useRouter } from 'next/router';
import React, { useState } from 'react'

export default function patientForm() {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");

    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !description) {
            alert("Fill Out all input")
            return;
        }
        try {
            await fetch('http:http://localhost:3000/editPatient', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ name, gender })
            });
            if (res.ok) {
                router.push('/');
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
            <form onSubmit={handleSubmit} className='mt-3 w-fit'>
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                    Name
                </label>
                <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    id="name"
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
                            id="day"
                            name="day"
                            className="border border-slate-500 px-3 py-2 rounded-l-md w-1/4"
                            type="number"
                            placeholder="DD"
                        />
                        <input
                            id="month"
                            name="month"
                            className="border border-slate-500 px-3 py-2 w-1/4"
                            type="number"
                            placeholder="MM"
                        />
                        <input
                            id="year"
                            name="year"
                            className="border border-slate-500 px-3 py-2 rounded-r-md w-1/4"
                            type="number"
                            placeholder="YYYY"
                        />
                    </div>
                    <div>
                        <label htmlFor="gender" className="block text-gray-700 font-bold mb-2">
                            Gender
                        </label>
                        <select onChange={(e) => setGender(e.target.value)}
                            className="border border-slate-500 px-3 py-2 rounded-md w-[28vh] mb-4"
                        >
                            <option value="">Select Gender</option>

                            <option value="{name}">Male</option>
                            <option value="{name}">Female</option>
                        </select>
                    </div>
                </div>
                <button type='submit' className='button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Add Patient</button>
            </form>
        </>

    )
}
