import { useState } from "react"



export function Button({ children, icon }) {
    return (
        <>
            <button className="bg-emerald-500 p-4 rounded-2xl">
                {children}
                <br />
                {icon ? "sim" : ""}
            </button>
        </>
    )
}