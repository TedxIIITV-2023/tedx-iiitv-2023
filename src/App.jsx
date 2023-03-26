import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Works, StarsCanvas, AboutUs } from "./components";
import { useRef } from "react";
import Home from "./components/Home";
import { Teams } from "./components/Teams";
import "../styles.css"

const App = () => {
  console.log("rendering app js");
  const spinner = document.getElementsByClassName("loader")[0];
  const [loading, setLoading] = React.useState(true);

  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 4590);
  }

  return (
    !loading && (
      <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/teams" element={<Teams />}/>
        </Routes>
      </BrowserRouter>
      </div>
    )
  );
};

export default App;
