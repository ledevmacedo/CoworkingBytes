import { User } from "iconsax-react";
import { Badge } from "./badge";
import { Card } from "./card";
import Image from 'next/image'

export function RoomCard() {
    const bg = "https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

    return (
        <Card className="bg-red-500">
            <div style={{
                backgroundImage: `url(${bg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }} className="rounded-2xl w-full h-96 bg-zinc-900 p-2 flex flex-col justify-start items-end">
                <Badge>
                    <User size="24" />
                    
                    06/10
                </Badge>
            </div>

        </Card>
    )
}