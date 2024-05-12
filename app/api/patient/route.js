// import connectDB from "@/libs/mongodb";
// import Patient from "@/models/patient";
// import { NextResponse } from "next/server";

// export async function POST(request) {
//     const { name, gender } = await request.json();
//     await connectDB();
//     await Patient.create({ name, gender });
//     return NextResponse.json({ message: "Patient Created" }, { status: 201 })
// }


import connectDB from "@/libs/mongodb";
import Patient from "@/models/patient";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { name, gender, contact } = await request.json();
        await connectDB();
        await Patient.create({ name, gender, contact });
        return NextResponse.json({ message: "Patient Created" }, { status: 201 });
    } catch (error) {
        console.error("Error creating patient:", error);
        return NextResponse.json({ error: "Failed to create patient" }, { status: 500 });
    }
}

export async function GET() {
    await connectDB();
    const patients = await Patient.find();
    return NextResponse.json({ patients });
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id")
    await connectDB();
    await Patient.findByIdAndDelete(id);
    return NextResponse.json({ message: "Patient deleted" }, { status: 200 });
}