import { useState } from "react";

export function Button({ children, variant }) {
  return (
    <>
      <button
        variant={variant}
        className={` flex w-full content-center justify-center items-center gap-2 font-bold border-2 border-zinc-950  rounded-2xl 
        ${variant == "outline" ? " bg-white" : " bg-zinc-950 text-white"} ${
          variant == "button" ? " bg-zinc-200 px-2 py-2" : ""
        } ${
          variant == "loginButton"
            ? " bg-slate-300 text-zinc-950 border-0 w-full"
            : ""
        }
        px-4 py-2 capitalize text-base`}
      >
        {children}
      </button>
    </>
  );
}
