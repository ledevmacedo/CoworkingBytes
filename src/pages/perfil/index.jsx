import { Button } from "@/components/button";
import {
  ArrowRight2,
  Cards,
  DocumentText1,
  Notification,
  Setting,
  Setting2,
  User,
  UserTag,
} from "iconsax-react";
import Link from "next/link";

export default function Perfil() {
  return (
    <div className=" h-screen p-4 flex-col gap-2">
      <div className=" flex justify-between">
        <h1 className=" text-3xl font-bold">Perfil</h1>
        <User size="32" color="#000" />
      </div>
      <div className=" mt-10 flex gap-2 items-center">
        <div className=" border-2 border-black object-cover rounded-full max-w-full max-h-full w-12 h-12"></div>
        <p>Carolina</p>
      </div>
      <div className=" mt-6 w-full h-px bg-slate-200"></div>
      <div className=" w-full flex items-center gap-2 mt-6 ">
        <UserTag size="20" color="#000" />
        <div className=" w-full flex justify-between ">
          <p className="text-sm">Informações Pessoais</p>

          <Link href="/">
            <ArrowRight2 size="20" color="#000" />
          </Link>
        </div>
      </div>
      <div className=" mt-6 w-full h-px bg-slate-200"></div>
      <div className=" flex items-center gap-2 mt-6 ">
        <Cards size="20" color="#000" />

        <div className="w-full flex justify-between">
          <p className="text-sm">Pagamentos</p>
          <Link href="/">
            <ArrowRight2 size="20" color="#000" />
          </Link>
        </div>
      </div>
      <div className=" mt-6 w-full h-px bg-slate-200"></div>
      <div className=" flex items-center gap-2 mt-6 ">
        <Notification size="20" color="#000" />

        <div className=" w-full flex justify-between">
          <p className="text-sm">Notificações</p>
          <Link href="/">
            <ArrowRight2 size="20" color="#000" />
          </Link>
        </div>
      </div>
      <div className=" mt-6 w-full h-px bg-slate-200"></div>
      <div className=" flex items-center gap-2 mt-6 ">
        <Setting2 size="20" color="#000" />

        <div className=" w-full flex justify-between">
          <p className="text-sm">Configurações</p>
          <Link href="/">
            <ArrowRight2 size="20" color="#000" />
          </Link>
        </div>
      </div>
      <div className=" mt-6 w-full h-px bg-slate-200"></div>
      <div className=" flex items-center gap-2 mt-6 ">
        <DocumentText1 size="20" color="#000" />
        <div className="w-full flex justify-between">
          <p className="text-sm">Termos e Condições</p>
          <Link href="/">
            <ArrowRight2 size="20" color="#000" />
          </Link>
        </div>
      </div>
      <div className=" mt-10 text-xs font-semibold ">
        <Link href="/login">Log out</Link>
      </div>
    </div>
  );
}
