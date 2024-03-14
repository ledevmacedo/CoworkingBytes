import { Button } from "@/components/button";
import { ArrowRight2, User, UserTag } from "iconsax-react";
import Link from "next/link";

export default function Perfil() {
  return (
    <div className="p-4">
      <div className=" flex justify-between">
        <h1 className=" text-3xl font-bold">Perfil</h1>
        <User size="32" color="#000" />
      </div>
      <div className=" mt-10 flex gap-2 items-center">
        <div className=" border-2 border-black object-cover rounded-full max-w-full max-h-full w-12 h-12"></div>
        <p>Carolina</p>
      </div>
      <div className=" mt-4 w-full h-px bg-slate-200"></div>
      <div className=" flex items-center  gap-2 mt-6 text-xs">
        <UserTag size="18" color="#000" />
        <p>Informações Pessoais</p>
        <Link href="/">
          <ArrowRight2 size="18" color="#000" />
        </Link>
      </div>
      <div className=" mt-6 text-xs font-semibold ">
        <Link href="/">Log out</Link>
      </div>
    </div>
  );
}
