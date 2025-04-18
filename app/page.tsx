import Image from 'next/image'
import Hero from '@/components/Hero'
import ThemeToggler from '@/components/ThemeToggler'
import Navbar from '@/components/Navbar'
import Skills from '@/components/Skills'
import ContactMe from '@/components/ContactMe'
import Projects from '@/components/Projects'
import AboutMe from '@/components/AboutMe'
import Downarrow from '@/components/Downarrow'
import Certifications from '@/components/Certifications'
import Experience from '@/components/Experience'



export default function Home() {
  return (
    <main className='dark:bg-[240_10%_3.9%]' >
      <Navbar />
      {/* <div className='max-w-[90%] md:max-w-[85%] mx-auto' > */}
      <div className='max-w-[1440px] xl:px-16 px-[5%] mx-auto' >
        <Hero />
        <br></br>
        {/* <br></br> */}
        {/* <br></br> */}
        <Downarrow />
        <Skills />
        <Projects />
        <Certifications />
        <Experience />
        <AboutMe />
        <ContactMe />
      </div>
    </main>
  )
}
