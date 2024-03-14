
import { User, SearchNormal, GlobalSearch, People, Calendar1 } from "iconsax-react";

import Link from "next/link";

export function Navbar({ isHome, isProfile, isReservations }) {
  return (
    <div className="p-4 ">
      <div className=" p-2 text-center  bg-white fixed bottom-0 left-0 right-0 border-t-2 ">
        <div className="h-full   flex gap-2 items-center justify-evenly align-center">

          <Link href={`/search`}>
            <div className="flex items-center flex-col justify-center cursor-pointer">
              <SearchNormal
                className={`${isProfile ? "text-blue-400" : "text-white-400"
                  }`}
                size="24"
                variant={isProfile ? "Bulk" : "Outline"}
              />
            </div>
          </Link>

          <Link href={`/reservations`}>
            <div className="flex items-center flex-col justify-center cursor-pointer">
              <Calendar1
                className={`${isReservations ? "text-blue-400" : "text-white-400"
                  }`}
                size="24"
                variant={isReservations ? "Bulk" : "Outline"}
              />
            </div>
          </Link>

          <Link href={`/profile/`}>
            <div className="flex items-center flex-col justify-center cursor-pointer">
              <User
                className={`${isHome ? "text-blue-400" : "text-white-400"
                  }`}
                size="24"
                variant={isHome ? "Bulk" : "Outline"}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
