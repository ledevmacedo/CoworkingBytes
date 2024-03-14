import { TopNav } from "@/components/topNav";
import { Description, Subtitle, Title } from "@/components/typography/title";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Button } from "@/components/button";
import { Badge } from "@/components/badge";
import Link from "next/link";
import { CalendarRemove, User, ArchiveBook, Buildings } from "iconsax-react";
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
    const bg = "https://images.pexels.com/photos/273671/pexels-photo-273671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
                <div className="flex items-center justify-between ">
                    <h1 className="text-3xl">{spaces.name} </h1>
                    <Badge>
                        <User size="14" variant="Bold" />
                        <p className="text-sm pt-0.5"> {spaces.capacidade} </p>
                    </Badge>

                </div>
                <Description>
                    {spaces.description}
                </Description>
                <div className="flex flex-col gap-6 mt-10">
                    <div className="flex gap-6 justify-start items-center content-center">
                        <div>
                            <CalendarRemove size="30" />
                        </div>
                        <div>
                            <p className="font-semibold">Cancelamento gratuito até 24 de outubro</p>
                            <Description opacity={true}>Flexivel com opções de cancelamento</Description>
                        </div>
                    </div>

                    <div className="flex gap-6 justify-start items-center content-center">
                        <div>
                            <ArchiveBook size="30" />
                        </div>
                        <div>
                            <p className="font-semibold">Ideal para reuniões!</p>
                            <Description opacity={true}>Possui uma mesa grande para as conversas.</Description>
                        </div>
                    </div>

                    <div className="flex gap-6 justify-start items-center content-center">
                        <div>
                            <Buildings size="30" />
                        </div>
                        <div>
                            <p className="font-semibold">O mais escolhido entre as empresas!</p>
                            <Description opacity={true}>Dispões de projetor para apresentações.</Description>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fixed bottom-0 left-0 w-full bg-zinc-100 h-14 flex p-4 gap-2 items-center justify-between">
                <div className="w-8/12">
                    <h1 className="font-semibold">            {spaces.price ?
                        spaces.price.toLocaleString('en-US', { style: 'currency', currency: 'EUR' })
                        :
                        "€ 4.00 "
                    }</h1>
                </div>
                <div className="w-4/12">
                    <Link href="/checkout">
                        <Button >Reservar</Button>
                    </Link>

                </div>
            </div>


        </>
    )

}