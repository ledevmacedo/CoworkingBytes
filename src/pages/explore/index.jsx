import { Button } from "@/components/button";
import { Filter } from "@/components/filter";
import { Input } from "@/components/input";
import { Navbar } from "@/components/navbar";
import { RoomCard } from "@/components/roomCard";
import { useState, useEffect, } from "react";
import { useRouter } from "next/router";
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

  const router = useRouter()
  const [spaces, setSpaces] = useState([]);

  useEffect(() => {
    loadSpaces();
  },);
  const fetchSpaces = async () => {
    try {
      const response = await fetch(`/api/espacos/allSpaces`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch all');
      }
      const data = await response.json();
      // Informações dos espaços
      return data; // Retornar os dados buscados
    } catch (error) {
      console.error('Error fetching all', error);
      throw error; // Re-throw para que o erro possa ser tratado externamente
    }
  };


  const loadSpaces = async () => {
    try {
      const spacesData = await fetchSpaces();
      setSpaces(spacesData); 
    } catch (error) {
      // Tratar erros
    }
  };
  return (
    <>
      <div className="flex flex-col gap-4 pb-20 pt-10 p-4">
        <>
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

          <div>
           
          </div>
          {step == "coletive" && (
            <div>
              {spaces.map((space, index) => (
                space.tag === "coletive" ? <RoomCard
                  key={index}
                  id={space.id}
                  name={space.name} rating={Math.floor(space.averageRating)} images={space.images[0]} capacidade={space.capacidade} hour={10} /> : null
              )
              )}
            </div>
          )}

          {step == "single" && (
            <div>
              {spaces.map((space, index) => (
                space.tag === "single" ? <RoomCard
                  key={index}
                  name={space.name} rating={Math.floor(space.averageRating)} images={space.images[0]} capacidade={space.capacidade} hour={10} /> : null
              )
              )}
            </div>
          )}
          {step == "executive" && (
            <div>
              {spaces.map((space, index) => (
                space.tag === "executive" ?
                  <RoomCard                    
                    key={index}
                    name={space.name} rating={Math.floor(space.averageRating)} images={space.images[0]} capacidade={space.capacidade} hour={10} /> : null
              )
              )}
            </div>
          )}

          {step == "meet" && (
            <div>
              {spaces.map((space, index) => (
                space.tag === "meet" ? <RoomCard
                  key={index}
                  name={space.name} rating={Math.floor(space.averageRating)} images={space.images[0]} capacidade={space.capacidade} hour={10} /> : null
              )
              )}
            </div>
          )}
        </>
      </div>
      <Navbar isExplore={true} />
    </>
  )
}