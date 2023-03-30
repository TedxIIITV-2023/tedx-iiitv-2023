import React from "react";
import "./Speaker.css";
import { styles } from "../../styles";
import Anuj from "../../assets/Anuj.png"
import Nandini from "../../assets/Nandini.png"
import "font-awesome/css/font-awesome.min.css";
import Card from "./Card";
import Barat from "../../assets/barat-ali.png";
import Pratik from "../../assets/pratik_thakker.png";
import Vinay from "../../assets/vinay_mehta.png";
import Gauri from "../../assets/gauri-bakshi.png";

const Speaker = () => {
    return (
        <section className={`w-full h-full mx-auto bg-[url('../../assets/wavy.jpg')]`}>
            <div
                className={`inset-1 py-[18%] md:py-[6%]  max-w-7xl mx-auto ${styles.colour} flex flex-row items-start justify-center align-center`}
            >

                <div>
                    <h1 className={`${styles.heroHeadText} text-white font-["FiverFont"]`}>
                        Speakers
                    </h1>
                </div>

            </div>
            <div className="flex flex-col gap-[5em] ">
                <div className="w-[80%] gap-[5%] bg-black text-white m-auto Anuj p-12 flex flex-row justify-between align-center md:flex-col lg:flex-row ">
                    <div className="m-auto flex flex-col gap-[1rem] justify-center align-center">
                        <img src={Anuj} alt="Anuj" />
                        <div className="text-[1.8rem] text-center">
                            Anuj Kumar Sharma
                        </div>
                    </div>
                    <div className="w-[70%] text-[1.2em] text-bold hidden md:block md:m-auto md:w-[80%] md:p-[12px] md:align-center md:justify-center">
                    <span className="text-red-600 text-[1.3em]">Youtuber | Ex-Amazon, Ex-Urban Company | Educator | Founder Coding Shuttle</span> <br></br>
Anuj Kumar Sharma is a seasoned software engineer with years of expertise working for tech behemoths like Amazon and Urban Company. His true passion, however, is teaching others, especially aspiring engineering students, about his knowledge and experience. Anuj founded Coding Shuttle with the intention of improving the lives of millions of pupils by providing them with useful programming skills. Affectionately referred to as "Bhaiya," has amassed a devoted fan base on his well-liked YouTube channel, "Anuj Bhaiya," which has over 410k followers and features regular video posts about subjects like programming, Android Development, and DSA.

                        <div className="py-[20px]">
                            <div className="social fa fa-lg flex flex-row gap-[5%] md:justify-evenly lg:justify-start">
                                <a
                                    className="social-link"
                                    href="https://twitter.com/anujbhaiya716?lang=en"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="fa fa-twitter icon"></i>
                                </a>
                                <a
                                    className="social-link"
                                    href="https://www.instagram.com/anuj.kumar.sharma/?hl=en"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="fa fa-instagram"></i>
                                </a>
                                <a
                                    className="social-link"
                                    href="https://www.youtube.com/@AnujBhaiya"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="fa fa-youtube-play"></i>
                                </a>
                                <a
                                    className="social-link"
                                    href="https://in.linkedin.com/in/sharma-kumar-anuj?trk=public_profile_browsemap#:~:text=Anuj%20Kumar%20Sharma%20%2D%20Founder%20%2D%20Coding%20Shuttle%20%7C%20LinkedIn"
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
                <div className="m-auto flex flex-col gap-[1rem] justify-center align-center">
                        <img src={Nandini} alt="Nandini" />
                        <div className="text-[1.8rem] text-center">
                            Nandini Agrawal
                        </div>
                    </div>
                    <div className="w-[70%] text-[1.2em] align-center justify-center items-center text-bold hidden md:block md:m-auto md:w-[80%] md:p-[12px] md:align-center md:justify-center">
                    <span className="text-red-600 text-[1.3em]">BCG | India Book of Records | CA - AIR 1 | AIR 31  | Ex-PwC</span><br /> Nandini Agrawal, a trailblazing young achiever from Morena, Madhya Pradesh. Nandini made history by becoming the youngest person at 19 years of age, to achieve the prestigious Chartered Accountancy (CA) qualification, a remarkable feat that underscores her exceptional talent and hard work. Despite her youth, Nandini has already gained valuable experience in the corporate world, starting her career as an article trainee at PwC and subsequently working with various dynamic teams and work cultures. Currently, Nandini is an Associate Management Consultant at BCG, where she continues to make a significant impact in the business world. Alongside her impressive academic and professional accomplishments, Nandini is also an active participant in extracurricular activities and has a strong understanding of consulting and finance. With her drive and passion, Nandini is poised to achieve even greater success in the future.

                        <div className="py-[15px]">
                            <div className="social fa fa-lg flex flex-row gap-[5%] md:justify-evenly lg:justify-start">
                                <a
                                    className="social-link"
                                    href="https://twitter.com/canandini19/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="fa fa-twitter icon"></i>
                                </a>
                                <a
                                    className="social-link"
                                    href="https://www.instagram.com/canandini19/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="fa fa-instagram"></i>
                                </a>
                                <a
                                    className="social-link"
                                    href="https://www.youtube.com/@canandini19/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="fa fa-youtube-play"></i>
                                </a>
                                <a
                                    className="social-link"
                                    href="https://www.linkedin.com/in/canandini19"
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

            <div className="flex p-5 lg:flex-row flex-col md:flex-row justify-center sm:flex-col align-center items-center justify-center pb-[10%] gap-[3em]">
                <Card className="align-center justify-center" image={Gauri} name="Gauri Bakshi" title="Founder, Footlights Theatre" desc="Gauri Bakshi is a writer, director, and educator who founded Footlights Theatre, a theatre production company in Ahmedabad that promotes social awareness through theatre among children. Over the last 5 years, she has trained around 5000 children in their formative years through various workshops conducted by Footlights Theatre. " />
                <Card image={Pratik} name="Pratik Thakker" title="Founder, Webzoly" desc="Pratik Thakker is the founder of Webzoly and Israel's tech ambassador to India. He has risen from selling firecrackers as a child to becoming a successful CEO. Thakker is bridging the digital divide between India and Israel and has a passion for learning new skills through hands-on experience." />
                <Card image={Vinay} name="Vinay Mehta" title="CEO,CultureX"desc="Started Expresso Arts: An Online Art Education Platform @16years in age - won several awards/grants for it from Govt. of Guj.
Also hosted India’s Biggest Art Educational Summit with 32+ Leading Bollywood-&-Digital Celebs, making Rs.2 Lacs in the same. Featured in TOI, AM, Mirchi 98.3, etc." />
                <Card image={Barat} name="Barat Ali Batoor" title="Photographer/Filmmaker"desc="Barat Ali Batoor is an internationally acclaimed photographer who was born into a family that fled during the Afghan civil war. He uses photography to draw attention to the suffering of Afghans. His award-winning piece, The Dancing Boys of Afghanistan, focuses on child trafficking in the country." />
            </div>
            
        </section>
    );
}

export default Speaker


