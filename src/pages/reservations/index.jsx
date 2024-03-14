import { CardReserv } from "@/components/cardReserves";
import { Navbar } from "@/components/navbar";
import { TopNav } from "@/components/topNav";

export default function Reservations() {
    return (
        <>
            <TopNav>Your Reserves</TopNav>
            <div className="flex flex-col p-4 gap-4">
                <CardReserv />
            </div>
            <Navbar isReservations={true} />
        </>
    )
}