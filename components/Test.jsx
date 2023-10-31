"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const Test = () => {
  const [id, setId] = useState(0);

  return (
    <div className="text-white ">
      <div
        className={`flex  flex-col justify-items-center 
        text-center m-10 transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer gap-2`}
      >
        <div
          onClick={() => setId(id === 1 ? 0 : 1)}
          key={1}
          className={`bg-red-900 ${
            id === 1 ? "flex-[4]" : "flex-[1]"
          } lg:rotate-90`}
        >
          123
        </div>
        <div key={2} className="bg-blue-900 flex-[1]">
          123
        </div>
        <div key={3} className="bg-green-900 flex-[1]">
          123
        </div>
        <div key={4} className="bg-cyan-900 flex-[1]">
          123
        </div>
      </div>
    </div>
  );
};

export default Test;
