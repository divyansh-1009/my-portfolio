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

export default function About() {
  const AnimatedHeader = ({ text }: { text: string }) => {
    return (
      <h1 className="text-4xl md:text-5xl font-bold mb-10 inline-block text-[#ffd700] font-serif">
        {text.split('').map((char, index) => (
          <span 
            key={index} 
            className={`inline-block transition-all duration-200 hover:scale-125 origin-center ${
              char === ' ' ? 'mr-2' : ''
            }`}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </h1>
    );
  };
  
  return (
    <>
      <BackgroundAnimation />
      <div className="min-h-screen flex flex-row relative">
        <div className="w-[60%] pr-8 sm:pr-16 md:pr-20 pl-0">
          <div className="max-w-3xl">
            <AnimatedHeader text="ABOUT ME" />
            
            <div className="space-y-6 text-lg leading-relaxed text-left">
              <p className="font-['Dancing_Script'] transition-all duration-500 hover:text-[#ffd700]/90 hover:scale-105 transform origin-left">
                I'm currently pursuing my undergraduate studies in Computer Science and Engineering at the Indian Institute of Technology (IIT) Jodhpur. Ever since I was a child, technology has always fascinated me — from understanding how things work to building systems that solve real-world problems. Studying at one of the premier institutions in the country has only deepened my curiosity and sharpened my technical abilities.
              </p>
              
              <p className="font-['Dancing_Script'] transition-all duration-500 hover:text-[#ffd700]/90 hover:scale-105 transform origin-left">
                What drives me most is the thrill of taking on challenges that others often shy away from. I'm especially passionate about full stack web development — I enjoy creating intuitive and efficient digital experiences, from designing responsive frontends to building powerful backend systems. Alongside this, I'm deeply interested in Artificial Intelligence and Machine Learning, and I often find myself exploring how these technologies can be integrated into web applications to make them smarter and more impactful. This blend of creativity and complexity keeps me constantly motivated.
              </p>
              
              <p className="font-['Dancing_Script'] transition-all duration-500 hover:text-[#ffd700]/90 hover:scale-105 transform origin-left">
                Outside academics, I believe in maintaining a well-rounded life. I enjoy watching movies during my downtime, which helps me relax and recharge creatively. I'm also passionate about sports — particularly skating, basketball, and lawn tennis — as they keep me active and instill discipline, focus, and teamwork. These interests together shape me into a curious, resilient, and balanced individual, both inside and outside the world of code.
              </p>
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