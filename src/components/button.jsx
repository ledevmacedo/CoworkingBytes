import { useState } from "react";

export function Button({ children, variant }) {
  return (
    <>
      <button
        variant={variant}
        className={` font-bold border-2 border-zinc-950  rounded-2xl 
        ${variant == "outline" ? " bg-white" : " bg-zinc-950 text-white"} ${
          variant == "button" ? " bg-zinc-200 px-2 py-2" : ""
        }px-4 py-2 capitalize`}
      >
        {children}
      </button>
    </>
  );
}
