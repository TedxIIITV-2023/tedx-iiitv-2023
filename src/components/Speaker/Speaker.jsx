import React from "react";
import "./Speaker.css";
import { styles } from "../../styles";
const Speaker = () => {
    return (
        <section className={`relative w-full h-screen mx-auto`}>
            <div
                className={`absolute inset-1 top-[20%]  max-w-7xl mx-auto ${styles.colour} flex flex-row items-start justify-center align-center`}
            >

                <div>
                    <h1 className={`${styles.heroHeadText} text-white font-["FiverFont"]`}>
                        Speakers
                    </h1>
                </div>
            </div>


        </section>
    );
}

export default Speaker