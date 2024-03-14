import { useState } from "react";

export function Button({ children, variant, onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        variant={variant}
        className={` 
        flex w-full content-center justify-center items-center gap-2 font-bold rounded-2xl
        ${variant == "loginButton" ? " bg-slate-300 text-zinc-950  w-full" : ""} 
        ${variant == "outline" ? " bg-white" : ""} 
        ${variant == "button" ? " bg-zinc-200 px-2 py-2" : ""}
        ${!variant ? "bg-zinc-950 text-white" : ""}
        px-4 py-2 capitalize text-base`}
      >
        {children}
      </button>
    </>
  );
}
