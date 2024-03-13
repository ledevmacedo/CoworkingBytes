import { Card } from "@/components/card";
import { Input } from "@/components/input";
import { Navbar } from "@/components/navbar";
import { RoomCard } from "@/components/roomCard";
import { TopNav } from "@/components/topNav";
import { Description, Subtitle, Title } from "@/components/typography/title";

export default function Playground() {
    return (
        <div>
            {/* <TopNav>Profile</TopNav> */}
            {/* <Title>Happy</Title>
            <Subtitle>Happy</Subtitle>
            <h1 className="text-3xl">Log In</h1>
            <Description>Happy</Description> */}
            <div className="p-4">
                <RoomCard />
            </div>
            <Navbar />
            {/* <Card>
                <h1 className="text-2xl">Card Title</h1>
                <p className="font-bold">dsdsad</p>
            </Card> */}
            {/* <Input></Input> */}
        </div>
    )
}
