import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Works, StarsCanvas } from "./components";


const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
          </div>
          <div className='bg-hero-pattern-2 bg-cover bg-no-repeat bg-center'>
          <About />
        </div>
        
        
        <div className='relative z-0'>
        <Experience />
        <StarsCanvas />
        </div>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Works />
        </div>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Feedbacks />
        </div>
       
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
    
     
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
