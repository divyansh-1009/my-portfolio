'use client';

import BackgroundAnimation from '@/components/BackgroundAnimation';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function About(){
  const [activeParagraph, setActiveParagraph] = useState<number | null>(null);
  const [rotation, setRotation] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if we're on the client side
    if (typeof window !== 'undefined') {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };
      
      // Initial check
      checkMobile();
      
      // Add event listener for window resize
      window.addEventListener('resize', checkMobile);
      
      // Cleanup
      return () => window.removeEventListener('resize', checkMobile);
    }
  }, []);

  // Animation for the rotating highlight point
  useEffect(() => {
    const intervalId = setInterval(() => {
      setRotation(prevRotation => (prevRotation + 1) % 360);
    }, 20); 

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
    <BackgroundAnimation/>
    <div className={`min-h-screen flex flex-col items-center justify-start p-4 sm:p-8 md:p-16 ${isMobile ? 'mt-20' : 'md:ml-20'}`}>
      <div className="w-full max-w-6xl relative">
        {/* Pulsating neon box */}
        <div className="absolute inset-0 -m-4 rounded-lg opacity-70 animate-pulse" 
          style={{
            boxShadow: '0 0 15px 2px #ffd700, 0 0 25px 5px rgba(255, 215, 0, 0.3)',
            border: '1px solid #ffd700',
            filter: 'blur(1px)',
            zIndex: -1,
          }}>
        </div>
        
        {/* Rotating highlight point */}
        <div 
          className="absolute w-4 h-4 rounded-full bg-white z-0"
          style={{
            top: `calc(50% + ${Math.sin(rotation * (Math.PI / 180)) * 50}%)`,
            left: `calc(50% + ${Math.cos(rotation * (Math.PI / 180)) * 50}%)`,
            transform: 'translate(-50%, -50%)',
            boxShadow: '0 0 10px 3px rgb(110, 99, 38), 0 0 20px 6px rgba(255, 215, 0, 0.5)',
            filter: 'blur(0.5px)',
          }}
        />
        
        <div className="text-center mb-6">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-8 inline-block text-[#ffd700] font-serif"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            ABOUT ME
          </motion.h1>
        </div>
        
        <motion.div 
          className="text-left relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <motion.p 
            className={`transition-all duration-300 ${activeParagraph === 0 ? 'text-[#ffd700] scale-[1.02]' : ''}`}
            whileHover={{ color: "#ffd700", scale: 1.02 }}
            onTouchStart={() => setActiveParagraph(0)}
            onTouchEnd={() => setActiveParagraph(null)}
          >
            I'm currently pursuing my undergraduate studies in Computer Science and Engineering at the Indian Institute of Technology (IIT) Jodhpur. Ever since I was a child, technology has always fascinated me — from understanding how things work to building systems that solve real-world problems. Studying at one of the premier institutions in the country has only deepened my curiosity and sharpened my technical abilities.
          </motion.p>
          <br/>
          <motion.p 
            className={`transition-all duration-300 ${activeParagraph === 1 ? 'text-[#ffd700] scale-[1.02]' : ''}`}
            whileHover={{ color: "#ffd700", scale: 1.02 }}
            onTouchStart={() => setActiveParagraph(1)}
            onTouchEnd={() => setActiveParagraph(null)}
          >
            What drives me most is the thrill of taking on challenges that others often shy away from. I'm especially passionate about full stack web development — I enjoy creating intuitive and efficient digital experiences, from designing responsive frontends to building powerful backend systems. Alongside this, I'm deeply interested in Artificial Intelligence and Machine Learning, and I often find myself exploring how these technologies can be integrated into web applications to make them smarter and more impactful. This blend of creativity and complexity keeps me constantly motivated.
          </motion.p>
          <br/>
          <motion.p 
            className={`transition-all duration-300 ${activeParagraph === 2 ? 'text-[#ffd700] scale-[1.02]' : ''}`}
            whileHover={{ color: "#ffd700", scale: 1.02 }}
            onTouchStart={() => setActiveParagraph(2)}
            onTouchEnd={() => setActiveParagraph(null)}
          >
            Outside academics, I believe in maintaining a well-rounded life. I enjoy watching movies during my downtime, which helps me relax and recharge creatively. I'm also passionate about sports — particularly skating, basketball, and lawn tennis — as they keep me active and instill discipline, focus, and teamwork. These interests together shape me into a curious, resilient, and balanced individual, both inside and outside the world of code.
          </motion.p>
        </motion.div>
      </div>
    </div>
    </>
  )
}