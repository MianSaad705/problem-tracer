'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { IoIosBug } from "react-icons/io";
import classNames from 'classnames';


const Navbar = () => {
    const activePath = usePathname();
    const navLinks = [
        {
            name: "Home",
            href: "/"
        },
        {
            name: "Issues",
            href: "/issues"
        }
    ]
    return (
        <nav className='flex space-x-5 px-2 border-b mb-4 h-14 items-center  '>
            <IoIosBug />
            <ul className='flex space-x-5 ' >
                {navLinks.map((link) => <li key={link.href} className={classNames({
                    'text-zinc-900': activePath === link.href,
                    'text-zinc-300': activePath !== link.href,
                    'hover:text-zinc-600 transition-colors': true
                })} ><Link href={link.href} >{link.name}</Link></li>)}
            </ul>
        </nav>
    )
}

export default Navbar
