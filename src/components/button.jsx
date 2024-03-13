import { useState } from "react";

export function Button({ children, variant }) {
  return (
    <>
      <button
        variant={variant}
        className={`w-36 h-14 font-bold border-2 border-zinc-950 p-4 rounded-2xl ${
          variant == "outline" ? " bg-white" : " bg-zinc-950 text-white"
        }`}
      >
        {children}
        <br />
      </button>
    </>
  );
}
