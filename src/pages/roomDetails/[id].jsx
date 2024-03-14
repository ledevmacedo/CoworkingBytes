import { TopNav } from "@/components/topNav";
import { Description, Title } from "@/components/typography/title";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Button } from "@/components/button";
export default function RoomDetails({ title, desc, capacidade, img }) {
    const [spaces, setSpaces] = useState([]);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (id) {
            loadSpacesData();
        }
    }, [id]);

    const fetchSpacesData = async () => {
        try {
            const response = await fetch(`/api/espacos/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            if (!response.ok) {
                { console.log("deu merda" + { id }) }
                throw new Error('Failed to fetch all');
            }
            { console.log("deu merda" + { id }) }
            const data = await response.json();
            // Informações dos espaços
            return data; // Retornar os dados buscados
        } catch (error) {
            console.error('Error fetching all', error);
            throw error; // Re-throw para que o erro possa ser tratado externamente
        }
    };

    const loadSpacesData = async () => {
        try {
            const spacesData = await fetchSpacesData();
            setSpaces(spacesData); // Supondo que você tenha um estado para armazenar os espaços
        } catch (error) {
            // Tratar erros
        }
    };
    console.log(spaces)

    return (
        <>
            <TopNav />
            <div className="w-full h-96 bg-zinc-950"
                style={{
                    backgroundImage: `url(${spaces.images})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }} />

            <div className="flex flex-col gap-4 mt-5 p-4">
                <h1 className="text-3xl"> {spaces.name} </h1>
                <p>{spaces.capacidade} </p>
                <Description>
                    {spaces.description}
                </Description>
            </div>

            <div className="fixed bottom-0 left-0 w-full bg-zinc-100 h-14 flex p-4 gap-2 items-center justify-between">
                <div className="w-8/12">
                    <h1 className="font-semibold">{spaces.price.toLocaleString('en-US', { style: 'currency', currency: 'EUR' })}</h1>
                </div>
                <div className="w-4/12">
                    <Button>Reservar</Button>
                </div>
            </div>


        </>
    )

}