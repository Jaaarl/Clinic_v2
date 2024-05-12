import Link from "next/link"
import React from "react"
export default function navbar() {
    return (
        <nav className="flex items-center justify-between gap-3 p-4 bg-gray-800 text-white">
            <Link href="/">
                Dr. Kwakwak Clinic
            </Link>
            <div className="flex gap-4">
                <Link href="/patient">
                    Patient
                </Link>
                <Link href="/queue">
                    Queue
                </Link>
            </div>
        </nav>

    )
}
