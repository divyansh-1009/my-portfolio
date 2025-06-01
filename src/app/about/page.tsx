'use client';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faAngular, 
  faHtml5, 
  faCss3, 
  faReact, 
  faJsSquare, 
  faGitAlt 
} from '@fortawesome/free-brands-svg-icons';
import styles from '@/styles/Cube.module.css';
import BackgroundAnimation from '@/components/BackgroundAnimation';
import { motion } from 'framer-motion';

export default function About() {
  // Replace the character-by-character animation with a whole title animation
  return (
    <>
      <BackgroundAnimation />
      <div className="min-h-screen flex flex-row relative">
        <div className="w-[60%] pr-8 sm:pr-16 md:pr-20 pl-0">
          <div className="max-w-3xl">
            {/* Animated header without splitting characters */}
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-10 inline-block text-[#ffd700] font-serif"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              ABOUT ME
            </motion.h1>
            
            <div className="space-y-6 text-lg leading-relaxed font-playfair text-left">
              <motion.p 
                className="font-['Dancing_Script'] transition-all duration-500 hover:text-[#ffd700]/90 hover:scale-105 transform origin-left"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                I'm currently pursuing my undergraduate studies in Computer Science and Engineering at the Indian Institute of Technology (IIT) Jodhpur. Ever since I was a child, technology has always fascinated me — from understanding how things work to building systems that solve real-world problems. Studying at one of the premier institutions in the country has only deepened my curiosity and sharpened my technical abilities.
              </motion.p>
              
              <motion.p 
                className="font-['Dancing_Script'] transition-all duration-500 hover:text-[#ffd700]/90 hover:scale-105 transform origin-left"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                What drives me most is the thrill of taking on challenges that others often shy away from. I'm especially passionate about full stack web development — I enjoy creating intuitive and efficient digital experiences, from designing responsive frontends to building powerful backend systems. Alongside this, I'm deeply interested in Artificial Intelligence and Machine Learning, and I often find myself exploring how these technologies can be integrated into web applications to make them smarter and more impactful. This blend of creativity and complexity keeps me constantly motivated.
              </motion.p>
              
              <motion.p 
                className="font-['Dancing_Script'] transition-all duration-500 hover:text-[#ffd700]/90 hover:scale-105 transform origin-left"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Outside academics, I believe in maintaining a well-rounded life. I enjoy watching movies during my downtime, which helps me relax and recharge creatively. I'm also passionate about sports — particularly skating, basketball, and lawn tennis — as they keep me active and instill discipline, focus, and teamwork. These interests together shape me into a curious, resilient, and balanced individual, both inside and outside the world of code.
              </motion.p>
            </div>
          </div>
        </div>
        
        <div className={styles['stage-cube-cont']}>
          <div className={styles.cubespinner}>
            <div className={styles.face1}>
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className={styles.face2}>
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className={styles.face3}>
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className={styles.face4}>
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className={styles.face5}>
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className={styles.face6}>
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}