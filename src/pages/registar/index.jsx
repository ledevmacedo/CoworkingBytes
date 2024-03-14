import { Button } from "@/components/button";
import { Input } from "@/components/input";

export default function Registar() {
  return (
    <div className=" p-4">
      <div>
        <h1 className=" text-3xl font-bold">Registar</h1>
      </div>
      <div className=" h-screen flex justify-center flex-col gap-2">
        <div>
          <Input label="Nome:" />
        </div>
        <div className=" mt-4">
          <Input label="Email:" />
        </div>
        <div className=" mt-4">
          <Input label="Senha:" />
        </div>
        <div className=" mt-4">
          <Input label="Confirmação de Senha:" />
        </div>
        <div className=" mt-10 flex justify-center">
          <Button>Registar</Button>
        </div>
      </div>
    </div>
  );
}
