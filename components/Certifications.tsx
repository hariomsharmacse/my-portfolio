import {Card, CardBody, CardFooter} from "@nextui-org/react";
import Image from "next/image";
// import Link from "next/link";
import { Link } from "@nextui-org/react";
import { RxExternalLink } from "react-icons/rx";
// import { FaGithub } from "react-icons/fa";
import { FaExternalLinkSquareAlt } from "react-icons/fa";


const projects = [
  {
    title: "Certificate of HTML - KG Coding",
    img: "/HTML-certificate.png",
    link: "https://drive.google.com/file/d/1J8drBsa4UME86JIjd40ax9K-6hkRIPfk/view?usp=sharing"
  },
  {
    title: "Certificate of CSS - KG Coding",
    img: "/CSS-certificate.png",
    link: "https://drive.google.com/file/d/1J2MXdo9cs4xEcVV_p81y7nC7qdiUsbkc/view?usp=sharing"
  },
  {
    title: "Certificate of JavaScript - KG Coding",
    img: "/Javascript-certificate.png",
    link: "https://drive.google.com/file/d/1J1UYR1A9P5-L1OOPVlhfycARovYWDNPI/view?usp=sharing"
  },
  {
    title: "Certificate of HTML - Great Learning",
    img: "/htmlGreat.jpg",
    link: "https://www.mygreatlearning.com/certificate/GAMFGIAR"
  },
  {
    title: "Programming Basics - Great Learning",
    img: "/prog.jpg",
    link: "https://www.mygreatlearning.com/certificate/CHQPZUAU"
  },
  {
    title: "Software Testing - Great Learning",
    img: "/stesting.jpg",
    link: "https://www.mygreatlearning.com/certificate/ZCMTYTKU"
  },
  {
    title: "Basics of Business Communication - Infosys",
    img: "/comm.jpg",
    link: "https://drive.google.com/file/d/1ICt-qqXvqBNJGCNIq6EAy1iUwZJ6j5z4/view?usp=sharing"
  },
  {
    title: "Certificate of Appreciation - Devtown",
    img: "/dev.jpg",
    link: "https://www.cert.devtown.in/verify/vM5GM",
  },
  {
    title: "Information Technology Level 1 - NSDC",
    img: "/level-one.jpg",
    link: "https://drive.google.com/file/d/1UjwHsJInX33mmQ_Ek2LIr2G8mvuRrVri/view?usp=sharing"
  },
  {
    title: "Information Technology Level 2 - NSDC",
    img: "/level-2.jpg",
    link: "https://drive.google.com/file/d/1-ch6g4aHPH2o6pRG2jVyAwTgc3s_mDsp/view?usp=sharing"
  },
  {
    title: "Information Technology Level 4 - NSDC",
    img: "/levle-4.jpg",
    link: "https://drive.google.com/file/d/13ovCupKtl_fNaDJFz7vn2rxzvVO5ARit/view?usp=sharing"
  },
  {
    title: "Customer Care Executive - NSDC",
    img: "/CCE.jpg",
    link: "https://drive.google.com/file/d/1JoIQlsYuaxW2s_E8kQvuop2OTJLkd49s/view?usp=sharing"
  },
  {
    title: "Talent Hunt Exam Cerificate",
    img: "/hunt.jpg",
    link: "https://drive.google.com/file/d/1FDM03T8t8hTwo5WdAKlEX-0IrcDGwI7U/view?usp=sharing"
  },
  {
    title: "National Service Scheme",
    img: "/NSS.jpg",
    link: "https://drive.google.com/file/d/1KoJT0CbAPQMO8VUT_iNYG4J2-XHkRgem/view?usp=sharing"
  },
  {
    title: "National Cadet Corps Certificate - A",
    img: "/NCC.jpg",
    link: "https://drive.google.com/file/d/1F0yLlvFMwPptHwdOoKYpsRniSDKmU-Yx/view?usp=sharing"
  },
];


export default function Certifications() {


  return (
    <section className="mb-20 md:mb-40" >
        <h2 className="text-3xl text-center mb-4" >My Certificates</h2>
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
              className="w-full object-cover aspect-video sm:grayscale sm:hover:grayscale-0 transition hover:scale-105"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small flex-col gap-1 items-start">
            <b>{item.title}</b>
            <div className="flex gap-6 items-center" >
              <Link underline="hover" href={item.link} target="_blank" className="text-blue-500 dark:text-blue-500" >
                <FaExternalLinkSquareAlt className="mr-1" />
                View Certificate
              </Link>
              {/* {
                item.github &&
                <Link underline="hover" href={item?.github} target="_blank" className="text-blue-500" >
                <FaGithub className="mr-1" />
                View code
              </Link>
              } */}
            </div>
          </CardFooter>
        </Card>
      ))}
            </div>
    </section>
  );
}
