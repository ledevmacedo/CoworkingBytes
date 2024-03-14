import { Subtitle } from "./typography/title";

export function Badge({ children, variant }) {
    return (
        <div className={`flex flex-row items-center justify-center content-center gap-2 rounded-md p-1 bg-white text-zinc-800 font-semibold text-sm 
        ${variant == "discret" ? "bg-zinc-950 bg-opacity-30" : ""}
        ${variant == "gray" ? "bg-zinc-300" : ""}`}
        >
            {children}
        </div>
    )
}