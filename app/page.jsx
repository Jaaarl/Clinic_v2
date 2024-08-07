import Link from "next/link"
export default function Home() {
  return (
    <main className="flex flex-col">

      <Link href={"newPatient"}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline text-sm">Add Patient</button>
      </Link>
      <Link href={"/patient"}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline text-sm">Edit Patient</button>
      </Link>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline text-sm">Add Que</button>

    </main>
  )
}
