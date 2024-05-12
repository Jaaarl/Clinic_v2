import Sidebar from "../components/Sidebar";
import PatientList from "../components/PatientList";
export default function patient() {
    return (
        <>
            <div className="flex justify-between">
                <Sidebar />
                <div className="overflow-x-auto w-full">
                    <table className="table-auto w-full border-collapse border border-gray-300 text-[12px]">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 bg-gray-100 border border-gray-300">Profile</th>
                                <th className="px-1 py-2 bg-gray-100 border border-gray-300">Medical History</th>
                                <th className="px-4 py-2 bg-gray-100 border border-gray-300">Medication</th>
                                <th className="px-4 py-2 bg-gray-100 border border-gray-300">Visit History</th>
                                <th className="px-4 py-2 bg-gray-100 border border-gray-300">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <PatientList />
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}