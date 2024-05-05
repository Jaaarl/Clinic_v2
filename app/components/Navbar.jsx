import Link from "next/link"
import React from "react"
export default function navbar() {
    return (
        <nav className="">
            <Link href="/"><h1>Dr kwakwak Clinic</h1></Link>
            <Link href="/patient"><h2>Patient </h2></Link>
            <Link href="/queue"><h2>Queue</h2></Link>
        </nav>
    )
}
