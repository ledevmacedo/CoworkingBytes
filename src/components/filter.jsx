import { People } from "iconsax-react"
import { Description } from "./typography/title"

export function Filter({ isColective }) {

    return (
        <>
            <div className="flex gap-0 text-center justify-center content-center items-center cursor-pointer">
                <div className="w-full p-2 flex flex-col gap-3 items-center justify-center content-center">
                    <People size="22" className="text-zinc-950" />
                    <Description>Coletiva</Description>
                    <div className="w-full h-0.5 bg-black"></div>
                </div>

                <div onClick={onClick} className="w-full p-2 flex flex-col gap-3 items-center justify-center content-center">
                    <People size="22" className="text-zinc-950" />
                    <Description>Coletiva</Description>
                    <div className="w-full h-0.5 bg-black"></div>
                </div>


                <div className="w-full p-2 flex flex-col gap-3 items-center justify-center content-center">
                    <People size="22" className="text-zinc-950" />
                    <Description>Coletiva</Description>
                    <div className="w-full h-0.5 bg-black"></div>
                </div>
            </div>
        </>
    )
}