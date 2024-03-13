import { Subtitle } from "./typography/title";

export function Badge({ children }) {
    return (
        <div className="rounded-md p-1 bg-white text-zinc-950 font-semibold">
            {children}
        </div>
    )
}