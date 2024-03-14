import { ArrowLeft2 } from "iconsax-react";
import Link from "next/link";

export function TopNav({ children }) {
    return (
        <div className="h-10 w-full flex flex-row justify-between px-5 items-center ">
            <Link href="/explore" className="w-full">
                <div className="w-full">
                    <ArrowLeft2
                        size="24"
                        className="text-zinc-950"
                    />
                </div>
            </Link>
            <div className=" w-full text-center text-lg font-semibold">{children}</div>
            <div className="w-full"></div>
        </div>
    )
}