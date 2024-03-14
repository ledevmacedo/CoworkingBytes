
import { User, SearchNormal, GlobalSearch, People, Calendar1 } from "iconsax-react";
import Link from "next/link";

export function Navbar({ isExplore, isReservations, isProfile }) {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-zinc-100 h-14 flex p-4 gap-2 items-center justify-around">
      <Link href="/explore" >
        <div className="flex items-center flex-col z-10 justify-center cursor-pointer">
          <SearchNormal
            className={`${isExplore ? "text-blue-400" : "text-white-400"
              }`}
            size="24"
            variant={isExplore ? "Bulk" : "Outline"}
          />
        </div>
      </Link>

      <Link href="/reservations">
        <div className="flex items-center flex-col justify-center cursor-pointer">
          <Calendar1
            className={`${isReservations ? "text-blue-400" : "text-white-400"
              }`}
            size="24"
            variant={isReservations ? "Bulk" : "Outline"}
          />
        </div>
      </Link>

      <Link href="/perfil">
        <div className="flex items-center flex-col justify-center cursor-pointer">
          <User
            className={`${isProfile ? "text-blue-400" : "text-white-400"
              }`}
            size="24"
            variant={isProfile ? "Bulk" : "Outline"}
          />
        </div>
      </Link>
    </div >
  );
}

