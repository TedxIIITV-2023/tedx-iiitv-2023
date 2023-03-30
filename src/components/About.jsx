import React from "react";
import Timer from "./Timer/Timer";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import YtFrame from "./YtFrame";

import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const About = () => {
  return (
    <>

      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Theme</p>
        <h2 className={styles.sectionHeadText}>Unleash your Passion</h2>
      </motion.div>
      <div className="flex flex-col md:flex-row justify-center align-center">
        <iframe
          title="TEDxIIITV 2023 | Theme Reveal - 'Unleash your Passion'"
          className="w-full md:w-3/4 m-[10px]"
          src="https://www.youtube.com/embed/SpfcvJL-bIA"
          loading="eager"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-white text-[20px] max-w-3xl leading-6 text-justify mb-6 w-full'
        >
          The theme "Unleash Your Passion" inspires people to explore their passions, hobbies, and aspirations and to start working towards their goals. Passion is a powerful motivator that drives individuals toward achieving their objectives with commitment and dedication. It serves as the incentive for individuals to overcome challenges and succeed in their chosen professions.

          The subject emphasizes the important role of discovering one's true calling and pursuing it tortuously. Those that are passionate about what they do are more likely to be original, creative, and successful. People with passion can push themselves above their comfort zones and venture into uncharted waters, frequently leading to innovations and discoveries.
        </motion.p>

      </div>

      <h2 className={styles.sectionHeadText}>Are You Ready?</h2>
      <Timer />

    </>
  );
};

export default SectionWrapper(About, "about");
