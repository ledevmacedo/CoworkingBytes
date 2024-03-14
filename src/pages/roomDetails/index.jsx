import { TopNav } from "@/components/topNav";
import { Description, Title } from "@/components/typography/title";

import Image from "next/image";
export default function RoomDetails({ title, desc, capacidade, img }) {
    return (
        <>
            <TopNav />
            <Image
                className="w-full h-96 bg-zinc-950"
                src={img} />
            <div className="flex flex-col gap-4 mt-5 p-4">
                <h1 className="text-3xl"> Room Mars </h1>
                <p>{capacidade} Lugares</p>
                <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rerum ducimus quam distinctio laborum ipsam minima rem architecto et modi non, praesentium veritatis repellat id mollitia ut voluptates eius ratione. </Description>
            </div>
            <div>

            </div>

        </>
    )
}