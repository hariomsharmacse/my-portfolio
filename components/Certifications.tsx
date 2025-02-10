import {Card, CardBody, CardFooter} from "@nextui-org/react";
import Image from "next/image";
// import Link from "next/link";
import { Link } from "@nextui-org/react";
import { RxExternalLink } from "react-icons/rx";
// import { FaGithub } from "react-icons/fa";
import { FaExternalLinkSquareAlt } from "react-icons/fa";


const certifications = [
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
    title: "Cutshort skill certificate - HTML/CSS",
    img: "/cutshortSkill.jpg",
    link: "https://cutshort.io/certificate/108778"
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
    <section className="mb-20 md:mb-40">
      <h2 className="text-3xl text-center mb-6 text-gray-800 dark:text-white">
        My Certifications
      </h2>
      <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-6">
        {certifications.map((item, index) => (
          <Card
            key={index}
            className="relative overflow-hidden bg-gradient-to-tr from-gray-100 to-white shadow-lg rounded-3xl transition transform hover:scale-105"
          >
            {/* Custom Shape Design */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-200 rounded-full opacity-30"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-300 rounded-full opacity-20"></div>

            {/* Card Content */}
            <CardBody className="relative overflow-hidden p-0">
              <Image
                width={1920}
                height={1080}
                alt={item.title}
                className="w-full h-40 object-cover rounded-t-3xl transition hover:brightness-90"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="relative p-4 flex flex-col items-start bg-gray-50 rounded-b-3xl">
              <b className=" text-gray-700 mb-2">{item.title}</b>
              <Link
                underline="hover"
                href={item.link}
                target="_blank"
                className="flex items-center text-blue-600 hover:text-blue-800"
              >
                <FaExternalLinkSquareAlt className="mr-2 text-lg" />
                View Certificate
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}