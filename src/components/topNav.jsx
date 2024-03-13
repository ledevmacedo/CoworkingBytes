import { ArrowLeft2 } from "iconsax-react";

export function TopNav({ children }) {
    return (
        <div className="h-10 mt-6  w-full flex flex-row justify-between px-5 items-center ">
            <div className="w-full">
                <ArrowLeft2
                    size="24"
                    className="text-zinc-950"
                />
            </div>
            <div className=" w-full text-center">{children}</div>
            <div className="w-full"></div>
        </div>
    )
}