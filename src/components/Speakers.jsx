import React from "react";
import Navbar from "./Navbar";
import Speaker from "./Speaker/Speaker";
const Speakers = () => {
    return (
        <div className="block">
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