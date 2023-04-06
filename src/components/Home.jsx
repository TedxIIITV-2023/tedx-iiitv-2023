import React from 'react';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Works, StarsCanvas, AboutUs } from "../components";
// import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import YtFrame from './YtFrame';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

function Home() {
  return (
    <div className='relative z-0 bg-primary'>
      <section className='bg-hero-pattern-m bg-cover bg-no-repeat bg-center'>
        <Hero />
      </section>
      <section className='bg-hero-pattern-2 bg-cover bg-no-repeat bg-center bg-fixed'>
        <About />
      </section>
      
      <section className='bg-hero-pattern bg-cover bg-no-repeat bg-center '>
        <Works />
      </section>
      <section className='relative z-0'>
        <Experience />
        <StarsCanvas />
      </section>
      {/* <section className='bg-hero-pattern bg-cover bg-no-repeat bg-center bg-fixed'>
          <Feedbacks />
        </section> */}
      <section className='relative z-0 mb-8'>
        {/* <YtFrame /> */}
        <h1 style={{ color: "red", margin: "50px", fontSize: "50px", fontWeight: "bolder", textAlign: "center" }}>
  <span style={{ color: "white" }}>PAST </span> TALKS
</h1>
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={false} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          // removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div>
            <iframe className='w-full h-[12em] md:h-[20rem] p-[10px]' src="https://www.youtube.com/embed/ePTYMixCRYw?list=PLfcx5E6GuV4Y_Uv5Ea_GxREzhuZrUUDDo" title="The Future of Work | Pratik Thakker | TEDxIIITV" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div><iframe className='w-full h-[12rem] md:h-[20rem] p-[10px]' src="https://www.youtube.com/embed/KCcUtDvVH3I?list=PLfcx5E6GuV4Y_Uv5Ea_GxREzhuZrUUDDo" title="The Struggle of Identity and Belonging | Barat Ali Batoor | TEDxIIITV" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
          <div><iframe className='w-full h-[12rem] md:h-[20rem] p-[10px] ' src="https://www.youtube.com/embed/seJec9wX2hE?list=PLfcx5E6GuV4Y_Uv5Ea_GxREzhuZrUUDDo" title="Hit Refresh | Gauri Bakshi | TEDxIIITV" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
          <div><iframe className='w-full h-[12rem] md:h-[20rem] p-[10px]' src="https://www.youtube.com/embed/yAZ2pEajOy4?list=PLfcx5E6GuV4Y_Uv5Ea_GxREzhuZrUUDDo" title="Empowering 1 Million Creators from #Bharat | Vinay Mehta | TEDxIIITV" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
        </Carousel>;
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

