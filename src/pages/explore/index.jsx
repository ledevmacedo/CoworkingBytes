import { Button } from "@/components/button";
import { Filter } from "@/components/filter";
import { Input } from "@/components/input";
import { Navbar } from "@/components/navbar";
import { RoomCard } from "@/components/roomCard";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { People, PresentionChart, User, Buildings } from "iconsax-react"
import { Description } from "@/components/typography/title";
import { Card } from "@/components/card";



const five = 5
export default function Explore() {
  const [step, setStep] = useState("coletive");
  const [startDate, setStartDate] = useState(new Date());

  const coletiveStep = () => {
    setStep("coletive");
  }

  const singleStap = () => {
    setStep("single");
  }

  const executiveStap = () => {
    setStep("executive");
  }

  const meetStap = () => {
    setStep("meet");
  }
  const filterCheck = true
  return (
    <>
      <div className="flex flex-col gap-2 pb-10 p-4">
        <>
          { }
          <div className="flex gap-3 text-center w-full justify-between content-center items-center cursor-pointer">
            <div onClick={coletiveStep} className="flex flex-col items-center gap-2 w-full py-3 shadow-custom rounded-xl">
              <People size="22" className={`${step == "coletive" ? "text-zinc-950" : "text-zinc-500"}`} />
              <Description className={`${step == "coletive" ? "text-zinc-950" : "text-zinc-500"}`}>Coletive</Description>
            </div>

            <div onClick={singleStap} className="flex flex-col items-center gap-2 w-full py-3 shadow-custom rounded-xl">
              <User size="22" className={`${step == "single" ? "text-zinc-950" : "text-zinc-500"}`} />
              <Description className={`${step == "single" ? "text-zinc-950" : "text-zinc-500"}`}>Single</Description>
            </div>

            <div onClick={executiveStap} className="flex flex-col items-center gap-2 w-full py-3 shadow-custom rounded-xl">
              <Buildings size="22" className={`${step == "executive" ? "text-zinc-950" : "text-zinc-500"}`} />
              <Description className={`${step == "executive" ? "text-zinc-950" : "text-zinc-500"}`}>executive</Description>
            </div>

            <div onClick={meetStap} className="flex flex-col items-center gap-2 w-full py-3 shadow-custom rounded-xl">
              <PresentionChart size="22" className={`${step == "meet" ? "text-zinc-950" : "text-zinc-500"}`} />
              <Description className={`${step == "meet" ? "text-zinc-950" : "text-zinc-500"}`}>Meet</Description>
            </div>


          </div>
          {step == "coletive" && (
            <div>
              <p>Compartilhada</p>
              <RoomCard name="Luna Room" rating="1,00" images="dsd" capacidade="6" hour={10} />
            </div>
          )}
          {step == "single" && (
            <div>
              <p>Single</p>
              <RoomCard name="Luna Room" rating="1,00" images="dsd" capacidade="6" hour={10} />
            </div>
          )}
          {step == "executive" && (
            <div>
              <p>Executiva</p>
              <RoomCard name="Luna Room" rating="1,00" images="dsd" capacidade="6" hour={10} />
            </div>
          )}

          {step == "meet" && (
            <div>
              <p>Meet room</p>
              <RoomCard name="Luna Room" rating="1,00" images="dsd" capacidade="6" hour={10} />
            </div>
          )}
        </>
      </div>
      <Navbar isReservations={true} />
    </>
  )
}