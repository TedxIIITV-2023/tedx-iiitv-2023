import React from 'react';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Works, StarsCanvas, AboutUs} from "../components";
// import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function Home() {
  return (
      <div className='relative z-0 bg-primary'>
        <section className='bg-hero-pattern-m bg-cover bg-no-repeat bg-center'>
          <Hero />
        </section>
        <section className='bg-hero-pattern-2 bg-cover bg-no-repeat bg-center bg-fixed'>
          <About />
        </section>
        <section className='relative z-0'>
          <Experience />
          <StarsCanvas />
        </section>
        <section className='bg-hero-pattern bg-cover bg-no-repeat bg-center bg-fixed'>
          <Works />
        </section>
        {/* <section className='bg-hero-pattern bg-cover bg-no-repeat bg-center bg-fixed'>
          <Feedbacks />
        </section> */}
        <section className='relative z-0 '>
        <Feedbacks />
          <StarsCanvas />
        </section>
        {/* <section className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </section> */}
      </div>
  );
}

export default Home;
