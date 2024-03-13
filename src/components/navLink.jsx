import Link from 'next/link'
F
export function NavLink({ profileActive, url, locale }) {
    return (
        <>
            <Link href={`/${locale}/${url}`}>
                <div className="flex items-center flex-col justify-center cursor-pointer">
                    <User className={`${profileActive ? "text-blue-400" : "text-white-400"
                        }`}
                        size="24"
                        variant={profileActive ? "Bulk" : "Outline"}
                    />
                </div>
            </Link>
        </>
    )
}

