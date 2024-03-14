import { Badge } from "./badge";
import { Card } from "./card";
import { Description, Subtitle, Title } from "./typography/title";

export function CardReserv() {
    return (
        <>
            <Card>
                <div className="flex flex-start flex-col w-full">
                    <div className="flex justify-between items-center">
                        <Title>Room Name</Title>
                        <Badge variant="discret">Executive</Badge>
                    </div>
                    <Subtitle opacity={true}>10:00 PM</Subtitle>
                    <Subtitle>Tomorow</Subtitle>
                </div>
            </Card>
        </>
    )
}