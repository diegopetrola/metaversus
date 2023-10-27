"use client";

import styles from "../styles";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { TitleText, TypingText } from "../components/CustomTexts";
import { useState } from "react";
import ExploreCard from "../components/ExploreCard";
import { exploreWorlds } from "../constants";

const Explore = () => {
  const [active, setActive] = useState(false);
  return (
    <section className={`${styles.paddings}`}>
      <motion.div
        variants={{ staggerContainer }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| The World" textStyles="text-center" />
        <TitleText
          title={
            <>
              Choose your World <br className="md:block hidden" /> to explore
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row min-h-[70px] flex-col gap-5">
          {exploreWorlds.map((world, i) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={i}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
