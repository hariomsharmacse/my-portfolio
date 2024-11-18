import {Card, CardBody, CardFooter} from "@nextui-org/react";
import Image from "next/image";
// import Link from "next/link";
import { Link } from "@nextui-org/react";
import { RxExternalLink } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkSquareAlt } from "react-icons/fa";


const projects = [
  {
    title: "TodoList Application",
    img: "/todolist.png",
    link: "https://todo-list-react-tailwind-one.vercel.app/",
    github: 'https://github.com/hariomsharmacse/Todo-List-React-Tailwind'
  },
  {
    title: "Tenzi",
    img: "/tanzi.png",
    link: "https://hariomsharmacse.github.io/Tenzi-Game/",
    github: 'https://github.com/hariomsharmacse/Tenzies-Game'
  },
  {
    title: "QR Code Generator",
    img: "/qrCode.png",
    link: "https://hariomsharmacse.github.io/QR-Code-Generator/",
    github: 'https://github.com/hariomsharmacse/QR-Code-Generator'
  },
  {
    title: "Calculator",
    img: "/calculator.png",
    link: "https://hariomsharmacse.github.io/Calculator-2/",
    github: 'https://github.com/hariomsharmacse/Calculator-2'
  },
  {
    title: "GST Calculator",
    img: "/gstCal.png",
    link: "https://hariomsharmacse.github.io/Gst-Calculator/",
    github: 'https://github.com/hariomsharmacse/Gst-Calculator'
  },
  {
    title: "Palindrome-Checker",
    img: "/palidromechecker.png",
    link: "https://hariomsharmacse.github.io/Palidrome-Checker/",
    github: 'https://github.com/hariomsharmacse/Palidrome-Checker'
  },
  {
    title: "Two Player Game",
    img: "/gametwo.png",
    link: "https://hariomsharmacse.github.io/two_players/",
    github: 'https://github.com/hariomsharmacse/two_players'
  },
  {
    title: "Dice Rolling Game",
    img: "/pigGame.png",
    link: "https://hariomsharmacse.github.io/pig_game/",
    github: 'https://github.com/hariomsharmacse/pig_game'
  },
  {
    title: "Rock Paper Scissors Game",
    img: "/stone.png",
    link: "https://hariomsharmacse.github.io/stonepaper-/",
    github: "https://github.com/hariomsharmacse/stonepaper-"
  },
  {
    title: "Tic Tac Toe - 5X5",
    img: "/tic.png",
    link: "https://hariomsharmacse.github.io/5X5/",
    github: "https://github.com/hariomsharmacse/5X5"
  },
  {
    title: "Age Calculator",
    img: "/age.png",
    link: "https://hariomsharmacse.github.io/Age-Calculator/",
    github: "https://github.com/hariomsharmacse/Age-Calculator"
  },
  {
    title: "Currency Converter",
    img: "/currencyConverter.png",
    link: "https://hariomsharmacse.github.io/Currency-Converter/",
    github: "https://github.com/hariomsharmacse/Currency-Converter.git"
  },
  {
    title: "Gredient Color Generator",
    img: "/color.png",
    link: "https://hariomsharmacse.github.io/Gradient-Color-Generator/",
    github: "https://github.com/hariomsharmacse/Gradient-Color-Generator"
  },
];


export default function Projects() {


  return (
    <section className="mb-20 md:mb-40 md:mt-[-8rem]" id="mywork" >
        <h2 className="text-3xl text-center mb-4" >My Work</h2>
        {/* <p className="text-center mb-4" >Some of the projects are from work and some are on my own time.</p> */}
        <div className="gap-2 sm:gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3" >

      {projects.map((item, index) => (
          <Card shadow="lg" key={index} isPressable={false} >
          <CardBody className="overflow-visible p-0">
            <Image
            //   shadow="sm"
            //   radius="lg"
              width={1920}
              height={1080}
              alt={item.title}
              className="w-full object-cover aspect-video sm:grayscale sm:hover:grayscale-0 transition hover:scale-105  "
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small flex-col gap-1 items-start">
            <b>{item.title}</b>
            <div className="flex gap-6 items-center" >
              <Link underline="hover" href={item.link} target="_blank" className="text-blue-500 dark:text-blue-500" >
                <FaExternalLinkSquareAlt className="mr-1" />
                View live
              </Link>
              {
                item.github &&
                <Link underline="hover" href={item?.github} target="_blank" className="text-blue-500" >
                <FaGithub className="mr-1" />
                View code
              </Link>
              }
            </div>
          </CardFooter>
        </Card>
      ))}
            </div>
    </section>
  );
}
