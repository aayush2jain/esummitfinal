import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import styles from './style.module.scss';

export default function Paragraph({paragraph}) {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"]
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <motion.p 
      ref={container}         
      className="text-center max-w-[90%] md:max-w-[60%] my-12 text-xl md:text-3xl mx-auto font-DarkerBold text-[#fff]"
      style={{opacity}}
    >
      {paragraph}
    </motion.p>
  )
}