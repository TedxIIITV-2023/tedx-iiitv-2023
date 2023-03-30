import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import {tedposter} from "../assets";

const FeedbackCard = ({
  index,
  testimonial,
  p1,
  p2
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-[#181717] p-10 rounded-3xl  w-full'
  >
    <p className='text-white font-black text-[28px]'>Unleash Your Passion</p>

    <div className='mt-1'>
      <p className='text-white mb-4 tracking-wider text-[18px]'>{testimonial}</p>
      
      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
        </div>

      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="flex flex-row justify-between w-full">
      <div className={`mt-1 bg-[#0e0e0e] rounded-[20px] w-2/3`}>
        <div
          className={`bg-[#0e0e0e] rounded-2xl ${styles.padding} `}
        >
          <motion.div variants={textVariant()}>
            <h2 className={styles.sectionHeadText}>Our <span className='text-[#FF0000]'>Theme</span></h2>
          </motion.div>
        </div>
        <div className={`pb-14 ${styles.paddingX} bg-[#0e0e0e] flex flex-col gap-7 w-full`}>
          {testimonials.map((testimonial, index) => (
            <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
          ))}
        </div>
      </div>
      {/* <div className="w-1/3 h-full m-28">
        <img src={tedposter} alt="Mic"/>
        </div> */}
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
