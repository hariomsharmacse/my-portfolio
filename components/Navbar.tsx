import ThemeToggler from "./ThemeToggler"
import { FaGithub } from "react-icons/fa";
// import { SiLinkedin } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

import Link from "next/link";
import { Button } from "@nextui-org/react";


export default function Navbar(){
    return(
        <nav className='flex justify-between px-6 py-4' >
            <div className="flex items-center gap-2" >
                <Button variant="light" isIconOnly >
                    <Link target="_blank" href="https://github.com/hariomsharmacse" >
                        <FaGithub size={24} />
                    </Link>
                </Button>
                <Button variant="light" isIconOnly >

                <Link target="_blank" href="https://www.linkedin.com/in/hariom-sharma-5692551b2/" >
                    <FaLinkedinIn size={24} />
                </Link>
                </Button>
            </div>
            <ThemeToggler />
        </nav>
    )
}