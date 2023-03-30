import React from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar";
import Speaker from "./Speaker/Speaker";
// import { wavy } from "../assets";
const Speakers = () => {
    return (
        <div style={{
            // backgroundImage: "url('../assets/wavy.jpg')",
            // backgroundRepeat: "no-repeat",
        }}>
            <div>
                <Navbar />
            </div>
            <div className="h-auto">
                <Speaker />
            </div>
        </div>
    );
}

export default Speakers;