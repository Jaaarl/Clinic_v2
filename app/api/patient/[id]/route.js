import connectDB from "@/libs/mongodb";
import Patient from "@/models/patient";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const { id } = params;
    const { name, age, gender, contact, medical_history, medications } = await request.json();
    // const { newName: name, newAge: age, newGender: gender, newContact: contact, newMedical_history: medical_history, newMedications: medications } = await request.json();


    await connectDB();
    await Patient.findByIdAndUpdate(id, { name, age, gender, contact, medical_history, medications })

    return NextResponse.json({ message: "Patient updated" }, { status: 200 });
}

export async function GET(request, { params }) {
    const { id } = params;
    await connectDB();
    const patient = await Patient.findOne({ _id: id });
    return NextResponse.json({ patient }, { status: 200 });
}
