import { BsChevronDown } from "react-icons/bs";
import Link from "next/link";

export default function Downarrow () {
    return (
        <>
        <Link href="#skills" scroll={true}>
        <div className='sm:flex justify-center items-center text-3xl cursor-pointer hidden'><BsChevronDown /></div></Link>
        </>
    )
}