import React from "react";
import Navbar from "./Navbar";
import Speaker from "./Speaker/Speaker";
import Footer from "./Footer/Footer";
const Speakers = () => {
    return (
        <div>
            <Navbar />
            <div>
                <Speaker />
            </div>
            <Footer /> 
        </div>
    );
}

export default Speakers;