import { TopNav } from "@/components/topNav";
import { Description, Title } from "@/components/typography/title";

export default function Checkout() {
    return (
        <>
            <TopNav>
                Checkout
            </TopNav>
            <div className="p-4">
                <h1 className="text-2xl">A Sua reserva</h1>
                <p>Nome da sala</p>
                <Description>Data e hora</Description>
            </div>
        </>
    )
}