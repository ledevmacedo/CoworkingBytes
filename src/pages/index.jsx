import Image from "next/image";
import { Button } from "@/components/button";
import { Input } from "@/components/input";

export default function Home() {
  return (
    <>
      Hello Cowrking Bytes
      <Button icon={"s"}>
        <div className="bg-red-500">ola mundo</div>
        Reservar
      </Button>
    </>
  );
}
