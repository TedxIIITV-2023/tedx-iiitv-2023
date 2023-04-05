import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { speakers } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import "./css/card.css";

const ProjectCard = ({
  index,
  name,
  description,
  cardbg,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div className="bg-[url('./assets/card_bg_3.png')] bg-contain bg-no-repeat p-8 pt-28 sm:w-[458px] sm:h-[450px] rounded-2xl">
        <div className='flex w-full h-[280px] h-fit justify-center align-center'>
          <img
            src={image}
            alt='project_image'
            className='w-[210px] h-[210px] object-cover rounded-2xl'
          />
        </div>
  
        <div className='mt-5 flex flex-col justify-center align-center text-center'>
          <h3 className='text-[#FC2A05] font-bold text-[24px] sm:text-[28px]'>{name}</h3>
          <p className='mt-2 text-white text-[14px] sm:text-[16px]'>{description}</p>
        </div>
      </div>
      <style jsx>{`
        .rounded-2xl {
          border-radius: 24px;
        }
        @media (max-width: 639px) {
          .sm\\:w-[458px] {
            width: 100%;
          }
          .bg {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </motion.div>
  );
      };  


const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>TEDxIIITV</p>
        <h2 className={`${styles.sectionHeadText}`}>Speakers</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[18px] md:text-[24px] leading-[30px]'
        >
          TEDx speakers are individuals who are invited to speak at a TEDx event, which is a local, independently organized version of the global TED conference. These speakers are often experts in their fields or have unique life experiences that they share in a compelling way. TEDx talks cover a wide range of topics, from science and technology to social issues and personal development. The talks are designed to inspire and inform, and to encourage the spread of new ideas and perspectives. TEDx speakers are chosen based on their ability to deliver a powerful and thought-provoking message that can have a positive impact on their audience.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-8 align-center justify-center'>
        {speakers.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
