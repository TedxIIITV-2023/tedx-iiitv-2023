import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Works, StarsCanvas, AboutUs, Speakers } from "./components";
import { useRef } from "react";
// import MeetOurTeam from "./components/MeetOurTeam";
import Home from "./components/Home";
import { Teams } from "./components/Teams";
import "../styles.css";
import Footer from "./components/Footer/Footer";
import MobileFooter from "./components/Footer/MobileFooter/MobileFooter";
import YtFrame from "./components/YtFrame";

const App = () => {
  // console.log("rendering app js");
  const spinner = document.getElementsByClassName("loader")[0];
  const [loading, setLoading] = React.useState(true);

  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 500);
  }

  return (
    <>
      {/* {loading && (
        <div className="loader-container">
          <div className="loader" />
        </div>
      )} */}
      {!loading && (
        <div>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="/aboutUs" element={<AboutUs />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/speakers" element={<Speakers />} />
            </Routes>
            <Footer />
            <MobileFooter />
          </BrowserRouter>
        </div>
      )}
    </>
  );
};

export default App;
