import { Heart, User } from "iconsax-react";
import { Badge } from "./badge";
import { Card } from "./card";
import Image from 'next/image'
import { Description, Title } from "./typography/title";

export function RoomCard({ images, capacidade, name, rating, hour }) {
    const bg = "https://images.pexels.com/photos/273671/pexels-photo-273671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

    return (
        <Card>
            <div style={{
                backgroundImage: `url(${bg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }} className="rounded-2xl w-full h-96 bg-zinc-900 p-2 flex flex-col justify-start items-end">
                <Badge>
                    <User size="14" variant="Bold" />
                    <p className="text-sm pt-0.5"> {capacidade} </p>
                </Badge>
            </div>

            <div className="flex flex-row content-center justify-between items-center">
                <Title variant="normal"> {name} </Title>
                <div className="flex gap-1 items-center justify-center ">
                    <Heart size="14" variant="Bold" />
                    <p className="text-s">{rating}</p>
                </div>
            </div>
            <Description opacity={true} className="font-extrabold">{hour + ":00"} ás {hour + 1 + ":00"}</Description>
        </Card>
    )
}