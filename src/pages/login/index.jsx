import { Input } from "@/components/input";
import { Button } from "@/components/button";
import Link from "next/link";
import { Apple, Google } from "iconsax-react";
import { useEffect } from "react";
import Image from 'next/image'
export default function Login() {


  useEffect(() => {

  },)

  const fetchInfoReceitas = async (query) => {
    try {
      const response = await fetch(`/api/receitas/receitas?titulo=${query}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      if (!response.ok) {
        throw new Error('Failed to fetch favorite recipes')
      }
      const data = await response.json()
      // informacoes da receita, likes sendo array de ids
      setReceita(data)
    } catch (error) {
      console.error('Error fetching favorite recipes:', error)
    }
    setIsLoading(false)
  }



  return (
    <div className="h-screen p-4 flex justify-evenly flex-col gap-2">
      <div>
        <h1 className=" text-3xl text-center font-bold">Wellcome to Co Orbit</h1>
        <div className="flex justify-center mt-6">
          <Image width={150} height={150} src="logo.svg" />
        </div>

      </div>
      <div className="flex flex-col gap-4">
        <Input label="Email" required={true} type="email" />
        <Input label="Senha" type="password" required={true} />
        <div className="flex gap-2">
          <p className=" text-xs text-zinc-400">Esqueceu a senha? </p>
          <Link href="/resetPassword" className=" text-xs text-blue-500">
            Clique aqui
          </Link>
        </div>
        <Link href="/explore" className="w-full mt-6">
          <Button variant="">Log in</Button>
        </Link>

        <div
          className="mt-8 flex gap-4 w-full  justify-center items-center content-center font-semibold">
          <div className="  w-full h-px bg-slate-200"></div>
          <p className="w-full text-xs flex justify-center">ou continue com</p>
          <div className="w-full h-px bg-slate-200"></div>
        </div>
        <div className="flex justify-center gap-2 mt-6">
          <div className="w-full flex">
            <Button variant="loginButton">
              <Google size="32"  className="text-zinc-950" variant="Bold" />
              Google
            </Button>
          </div>
          <div className="w-full">
            <Button variant="loginButton">
              <Apple size="32" className="text-zinc-950" variant="Bold" />
              Apple
            </Button>
          </div>
        </div>
        <div className="flex gap-1 items-center w-full mt-6 justify-center">
          <p className=" text-xs text-zinc-400">Ainda não tem uma conta?</p>
          <Link href="/registar" className=" text-xs text-blue-500">
            Clique aqui
          </Link>
        </div>
      </div>
    </div>
  );
}
