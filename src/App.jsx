import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Works, StarsCanvas } from "./components";

// import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
import "./App.css";

const App = () => {
  const ref = useRef(null);

  const options = {
    smooth: true,
  } 
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
      {/* <LocomotiveScrollProvider options={options} containerRef={ref}> */}
        <section className='bg-hero-pattern-m bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
          </section>
          <section className='bg-hero-pattern-2 bg-cover bg-no-repeat bg-center'>
          <About />
        </section>
        
        
        <section className='relative z-0'>
        <Experience />
        <StarsCanvas />
        </section>
        <section className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Works />
        </section>
        <section className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Feedbacks />
        </section>
       
        <section className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </section>
        {/* </LocomotiveScrollProvider> */}
      </div>

    </BrowserRouter>
  );
}

export default App;
