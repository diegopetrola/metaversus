"use client";

import styles from "../styles";
import { motion } from "framer-motion";
import { fadeIn, planetVariants, staggerContainer } from "../utils/motion";
import { TitleText, TypingText } from "../components/CustomTexts";
import { newFeatures } from "../constants/";
import NewFeature from "../components/NewFeatures";

const World = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| People online" textStyles="text-center" />
        <TitleText
          textStyles="text-center"
          title={
            <>
              Track friends around you and invite them to play together in the
              same world
            </>
          }
        />

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="relative mt-[68px] flex w-full h-[550px]"
        >
          <img
            src="/map.png"
            alt="map"
            className="object-cover w-full h-full"
          />
          <div
            className="absolute bottom-[26%] left-[5%] w-[70px] h-[70px] p-[6px] 
          rounded-full bg-indigo-900"
          >
            <img src="/people-01.png" alt="people" className="w-full h-full" />
          </div>
          <div
            className="absolute top-[12%] left-[50%] w-[70px] h-[70px] p-[6px] 
          rounded-full bg-indigo-900"
          >
            <img src="/people-02.png" alt="people" className="w-full h-full" />
          </div>

          <div
            className="absolute bottom-[15%] right-[1%] w-[70px] h-[70px] p-[6px] 
          rounded-full bg-indigo-900"
          >
            <img src="people-03.png" alt="people" className="w-full h-full" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default World;
