import { SiJavascript } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiRedis } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { FaLinux } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { GrDocumentWord } from "react-icons/gr";
import { GrDocumentExcel } from "react-icons/gr";
import { TbWorldSearch } from "react-icons/tb";
import { SiMicrosoftpowerpoint } from "react-icons/si";
import { TbBrandOffice } from "react-icons/tb";
import { FaDatabase } from "react-icons/fa";

import { Button } from "@nextui-org/react";
import { BsChevronDown } from "react-icons/bs";
import Link from "next/link";




export default function Skills(){

    const skills = [
        {
            id: 1, 
            skillName: 'HTML',
            skillIcon: SiHtml5,
            category: 'frontend'
        },
        {
            id: 2, 
            skillName: 'CSS',
            skillIcon: SiCss3,
            category: 'frontend'
        },
        {
            id: 3, 
            skillName: 'Javascript',
            skillIcon: SiJavascript
        },
        {
            id: 4, 
            skillName: 'React.js',
            skillIcon: SiReact,
            category: 'frontend'
        },
        {
            id: 5, 
            skillName: 'Node.js',
            skillIcon: SiNodedotjs,
            category: 'backend'
        },
        {
            id: 6, 
            skillName: 'Express.js',
            skillIcon: SiExpress,
            category: 'backend'
        },
        {
            id: 7, 
            skillName: 'MonogDB',
            skillIcon: SiMongodb,
            category: 'backend'
        },
        {
            id: 8, 
            skillName: 'Typescript',
            skillIcon: SiTypescript,
            category: 'backend'
        },
        {
            id: 9, 
            skillName: 'Tailwind',
            skillIcon: SiTailwindcss,
            category: 'frontend'
        },
        {
            id: 10, 
            skillName: 'Bootstrap',
            skillIcon: FaBootstrap,
            category: 'frontend'
        },
        {
            id: 11, 
            skillName: 'Git & Github',
            skillIcon: FaGitAlt,
            category: 'devops'
        },
        {
            id: 12, 
            skillName: 'Redux',
            skillIcon: SiRedux,
            category: 'frontend'
        },
        {
            id: 13, 
            skillName: 'Linux',
            skillIcon: FaLinux,
            category: 'backend'
        },
        {
            id: 14, 
            skillName: 'MS Office',
            skillIcon: TbBrandOffice,
            category: 'backend'
        },
        {
            id: 15, 
            skillName: 'Data Processing',
            skillIcon: FaDatabase,
            category: 'backend'
        },
        {
            id: 16, 
            skillName: 'Web Research',
            skillIcon: TbWorldSearch,
            category: 'research'
        },
        

    ]


    return(
        <section className="mt-9 mb-20 md:mb-40" id="skills">
            <h2 className="text-3xl mb-4 text-center" >My Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 sm:gap-4 " >
            {
                skills.map(skill => (
                    <Button key={skill.id} variant="flat" className=" cursor-default px-6 py-16  rounded-lg text-center flex flex-col justify-center items-center gap-4" >
                        <skill.skillIcon className="flex-none" size="32" />
                        <p className="text-xl" >{skill.skillName}</p>
                    </Button>
                ))
            }
            </div>
            <Link href="#mywork" scroll={true}>
        <div className='sm:flex justify-center items-center text-3xl cursor-pointer hidden mt-[8rem]'><BsChevronDown /></div></Link>
        </section>
    )
}