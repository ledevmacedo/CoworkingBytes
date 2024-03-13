import { Input } from "@/components/input";
import { Button } from "@/components/button";
import Link from "next/link";
import { Apple, Google } from "iconsax-react";

export default function Login() {
  return (
    <div className=" p-4 ">
      <div>
        <h1 className=" text-3xl font-bold">Log in</h1>
      </div>
      <div className=" h-screen flex justify-center flex-col gap-2">
        <div>
          <Input label="Email:" />
        </div>
        <div className=" mt-4">
          <Input label="Senha:" />
        </div>
        <div className=" justify-center flex gap-1 mt-4">
          <p className=" text-xs text-zinc-400">Esqueceu a senha?</p>
          <Link href="/" className=" text-xs text-blue-500">
            Clique aqui
          </Link>
        </div>
        <div className=" mt-6 flex justify-center">
          <Button>Log in</Button>
        </div>
        <div
          className="mt-8 flex gap-4 w-full  justify-center items-center content-center
"
        >
          <div className="  w-full h-px bg-slate-200"></div>
          <p className="w-full text-xs flex justify-center">ou continue com</p>
          <div className="w-full h-px bg-slate-200"></div>
        </div>
        <div className=" mt-2 flex justify-center gap-2">
          <div className="w-full flex">
            <Button variant="loginButton">
              <Google size="32" color="#000" variant="Bold" />
              Google
            </Button>
          </div>
          <div className="w-full">
            <Button variant="loginButton">
              <Apple size="32" color="#000" variant="Bold" />
              Apple
            </Button>
          </div>
        </div>
        <div className=" justify-center flex gap-1 mt-6">
          <p className=" text-xs text-zinc-400">Ainda não tem uma conta?</p>
          <Link href="/" className=" text-xs text-blue-500">
            Clique aqui
          </Link>
        </div>
      </div>
    </div>
  );
}
