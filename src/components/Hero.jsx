import { motion } from "framer-motion";

import { styles } from "../styles";

 
const Hero = () => {
  
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div 
        className={`absolute inset-1 top-[120px]  max-w-7xl mx-auto ${styles.paddingX}${styles.colour} flex flex-row items-start gap-5`}
      >

        <div>
          <h1 className={`${styles.heroHeadText} text-white font-["FiverFont"]`}>
           Unleash Your <span className='text-[#FF0000] font-["FiverFont"]'>Passion</span>
          </h1>
        </div>
      </div>

      
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
