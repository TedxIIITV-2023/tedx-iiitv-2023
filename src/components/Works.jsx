import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
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
      {/* <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-[url('./assets/card_bg.png')] bg-contain bg-no-repeat p-8 pt-28 rounded-2xl sm:w-[458px] sm:h-[458px]"
      > */}
      <div className="bg-[url('./assets/card_bg_3.png')] bg-contain bg-no-repeat p-8 pt-28 sm:w-[458px] sm:h-[450px] rounded-2xl">
        <div className='flex w-full h-[280px] h-fit justify-center align-center'>
          <img
            src={image}
            
            alt='project_image'
            className='w-[210px] h-[210px] object-cover rounded-2xl'
          />

          {/* <div className='absolute inset-2 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div> */}
        </div>

        <div className='mt-5 flex flex-col justify-center align-center text-center'>
          <h3 className='text-[#FC2A05] font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-white text-[14px] '>{description}</p>
        </div>
        </div>
      {/* </Tilt> */}
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>TedXIIITV</p>
        <h2 className={`${styles.sectionHeadText}`}>Speakers</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
