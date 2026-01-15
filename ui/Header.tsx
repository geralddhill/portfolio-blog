'use client'

import {Logo} from "@/ui/SVGs";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/20/solid";
import {useState} from "react";
import {cn} from "@/lib/utils";
import {usePathname} from "next/dist/client/components/navigation";
import Link from "next/dist/client/link";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const pathname = usePathname();

    const navMenu = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "Projects",
            path: "/projects"
        },
        {
            name: "Blog",
            path: "/blog"
        },
        {
            name: "Contact",
            path: "/contact"
        }
    ]

    return (<header className="flex flex-col items-center w-full">
        <div className="flex align-center justify-between h-20 w-full px-6 py-4 border-b border-subtle md:h-24 xl:h-28">
            <Logo className="h-full" />
            <button onClick={() => setMenuOpen(!menuOpen)} className="h-8 my-auto md:hidden">
                {menuOpen ? <XMarkIcon className="h-full text-foregound"/> : <Bars3Icon className="h-full text-foreground" />}
            </button>
            <nav className="hidden md:block"><ul className="h-full flex flex-row items-center space-x-4">
                {navMenu.map((item) => (<Link key={item.name} href={item.path}>
                    <li className={cn("flex items-center justify-center px-2 py-4 transition duration-300 border-transparent hover:border-t hover:border-primary hover:text-primary", {"text-primary": item.path === pathname})}>
                        {item.name}
                    </li>
                </Link>))}
            </ul></nav>
        </div>
        {menuOpen && (<nav className="w-full"><ul className="w-full">
            {navMenu.map((item) => (<Link key={item.name} href={item.path} className="w-full h-12">
                    <li className={cn("w-full h-12 flex items-center justify-center hover:text-primary transition-colors duration-300 border-b border-subtle",
                        {"text-primary": item.path === pathname})}>
                        {item.name}
                    </li>
                </Link>
            ))}
        </ul></nav>)}
    </header>)
}