import React from "react";
import "./Speaker.css";
import { styles } from "../../styles";
import Anuj from "../../assets/Anuj.png"
import Nandini from "../../assets/Nandini.png"
import "font-awesome/css/font-awesome.min.css";
import Card from "./Card";

const Speaker = () => {
    return (
        <section className={`relative w-full h-screen mx-auto`}>
            <div
                className={`inset-1 py-[18%] md:py-[6%]  max-w-7xl mx-auto ${styles.colour} flex flex-row items-start justify-center align-center`}
            >

                <div>
                    <h1 className={`${styles.heroHeadText} text-white font-["FiverFont"]`}>
                        Speakers
                    </h1>
                </div>

            </div>
            <div className="flex flex-col gap-[5em]">
                <div className="w-[80%] gap-[5%] bg-black text-white m-auto Anuj p-12 flex flex-row justify-between align-center md:flex-col lg:flex-row ">
                    <div className="md:m-auto flex flex-col gap-[1rem]">
                        <img src={Anuj} alt="Anuj" />
                        <div className="text-[1.2rem] text-center">
                            Anuj Kumar
                        </div>
                    </div>
                    <div className="w-[70%] text-[1.5em] text-bold hidden md:block md:m-auto md:w-[80%] md:p-[12px] md:align-center md:justify-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.Ut enim ad minim veniam.
                        <div className="py-[20px]">
                            <div className="social fa fa-lg flex flex-row gap-[5%] md:justify-evenly lg:justify-start">
                                <a
                                    className="social-link"
                                    href="https://twitter.com/tedxiiitv"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="fa fa-twitter icon"></i>
                                </a>
                                <a
                                    className="social-link"
                                    href="https://www.instagram.com/tedxiiitv"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="fa fa-instagram"></i>
                                </a>
                                <a
                                    className="social-link"
                                    href="https://www.youtube.com/channel/UC4mwsjxwalruq9tga_3a92g"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="fa fa-youtube-play"></i>
                                </a>
                                <a
                                    className="social-link"
                                    href="https://www.linkedin.com/company/tedxiiitv"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="fa fa-linkedin"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    
                </div>
                <div className="w-[80%] gap-[5%] bg-black text-white m-auto Anuj p-12 flex flex-row-reverse justify-between align-center md:flex-col lg:flex-row-reverse">
                <div className="md:m-auto flex flex-col gap-[1rem]">
                        <img src={Nandini} alt="Anuj" />
                        <div className="text-[1.2rem] text-center">
                            Nandini Agrawal
                        </div>
                    </div>
                    <div className="w-[70%] text-[1.5em] text-bold hidden md:block md:m-auto md:w-[80%] md:p-[12px] md:align-center md:justify-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.Ut enim ad minim veniam.
                        <div className="py-[20px]">
                            <div className="social fa fa-lg flex flex-row gap-[5%] md:justify-evenly lg:justify-start">
                                <a
                                    className="social-link"
                                    href="https://twitter.com/tedxiiitv"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="fa fa-twitter icon"></i>
                                </a>
                                <a
                                    className="social-link"
                                    href="https://www.instagram.com/tedxiiitv"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="fa fa-instagram"></i>
                                </a>
                                <a
                                    className="social-link"
                                    href="https://www.youtube.com/channel/UC4mwsjxwalruq9tga_3a92g"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="fa fa-youtube-play"></i>
                                </a>
                                <a
                                    className="social-link"
                                    href="https://www.linkedin.com/company/tedxiiitv"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="fa fa-linkedin"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={`inset-1 py-[8%] max-w-7xl mx-auto ${styles.colour} flex flex-row items-start justify-center align-center`}
            >

                <div>
                    <h1 className={`${styles.heroHeadText} text-white font-["FiverFont"]`}>
                        Past Speakers
                    </h1>
                </div>

            </div>

            <div className="flex lg:flex-row flex-col md:justify-center align-center justify-center pb-[10%] gap-[3em]">
                <Card image={Anuj} name="Gauri Bakshi" title="YT" />
                <Card image={Anuj} name="Pratik Thakker" title="YT" />
                <Card image={Anuj} name="Vinay Mehta" title="YT" />
                <Card image={Anuj} name="Barat Ali Batoor" title="YT" />
            </div>
            
        </section>
    );
}

export default Speaker