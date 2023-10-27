"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import { TypingText } from "../components/CustomTexts";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| Abount Metaversus" textStyles="text-center" />
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-secondary-white"
      >
        <span className="font-extrabold text-white">Metaverse </span> lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Ut a neque ut est
        efficitur viverra eu eu arcu. Praesent eget aliquam ex. Quisque sed
        purus at risus lobortis ultricies. Maecenas eleifend euismod turpis.
        Mauris vehicula nec augue a convallis. Fusce et convallis diam, vel
        gravida odio. Suspendisse sit amet auctor purus. Donec euismod volutpat
        commodo. Aenean porttitor ipsum tellus, vitae fringilla elit facilisis
        quis. Aenean at ornare nulla. Sed ac gravida dui. Ut tortor ligula,
        ullamcorper nec lacinia vel, auctor sed felis. Donec ullamcorper nunc
        urna, a faucibus dui vulputate eu.
      </motion.p>
      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
