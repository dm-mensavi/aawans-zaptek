import React from "react";
import { motion } from "framer-motion";
import { fadeIn, zoomIn } from "../../variants";
import { featuresData } from "./FeaturesData";

function Features() {
  return (
    <div className="my-28 mx-[2%] md:mx-[5%] lg:mx-[10%]">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 justify-center">
        {featuresData.map((feature) => (
          <div
            key={feature.id}
            className="flex w-full lg:w-3/12 pr-3 min-w-[350px] max-w-lg mr-5"
          >
            <div className="pl-5 w-1/3">
              <motion.div
                variants={zoomIn(0.7, 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                className="bg-primaryLight w-16 h-16 rounded-full"
              >
                <img src={feature.icon} alt={`icon${feature.id}`} className="p-4 w-16 h-16" />
              </motion.div>
            </div>
            <div className="flex w-2/3 flex-col max-w-sm">
              <motion.h3
                variants={fadeIn("up", 0.7, 0.3)}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
                className=" h4 mb-4"
              >
                {feature.title}
              </motion.h3>
              <motion.p
                variants={fadeIn("up", 0.7, 0.5)}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                className=" text-lg"
              >
                {feature.description}
              </motion.p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
