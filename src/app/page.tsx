"use client"
import Image from 'next/image';
import { useState, useEffect } from 'react';
import BackgroundAnimation from '@/components/BackgroundAnimation';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  const greeting = "Hi,";
  const intro = "I'm ";
  const name = "ivyansh";
  const subtitle = "FULLSTACK DEVELOPER || AI/ML ENTHUSIAST";
  
  const [displayedSubtitle, setDisplayedSubtitle] = useState("");
  const [isSubtitleComplete, setIsSubtitleComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const subtitleLength = subtitle.length;
    const delayPerChar = 5000 / subtitleLength;
    
    if (!isSubtitleComplete) {
      const typingInterval = setInterval(() => {
        if (currentIndex <= subtitleLength) {
          setDisplayedSubtitle(subtitle.substring(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setIsSubtitleComplete(true);
        }
      }, delayPerChar);
      
      return () => clearInterval(typingInterval);
    }
  }, [subtitle, isSubtitleComplete]);

  const cursorVariants = {
    blinking: {
      opacity: [0, 1, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "loop" as const,
      },
    },
  };

  // Animation variants for the coding figure
  const codeLines = [
    { width: "60%", delay: 0 },
    { width: "40%", delay: 0.5 },
    { width: "70%", delay: 1 },
    { width: "30%", delay: 1.5 },
    { width: "50%", delay: 2 },
    { width: "60%", delay: 2.5 }
  ];

  return (
    <>
      <BackgroundAnimation />
      <div className="flex flex-col md:flex-row items-center justify-between min-h-screen p-8 sm:p-20 ml-[-20vmax] md:ml-[-10vmax]">
        {/* Text content */}
        <main className="flex flex-col gap-6 w-full md:w-1/2">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="inline-block hover:text-[#ffd700] transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {greeting}
            </motion.span> 
            <br /> 
            <motion.span className="flex items-center">
              <motion.span 
                className="inline-block hover:text-[#ffd700] transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                {intro}
              </motion.span>
              <div className="relative group ml-2 mr-0">
                <Image 
                  src="/logo-d.png" 
                  alt="Logo" 
                  width={70} 
                  height={70} 
                  className="rounded-full transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg group-hover:shadow-[#ffd700]/30"
                />
                <div className="absolute inset-0 rounded-full bg-[#ffd700] opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-md"></div>
              </div>
              <motion.span 
                className="inline-block hover:text-[#ffd700] transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                {name}
              </motion.span>
            </motion.span>
          </motion.h1>
          
          {/* Subtitle with typing effect */}
          <motion.div 
            className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="hover:text-[#ffd700] transition-colors duration-300">
              {displayedSubtitle}
            </span>
            {!isSubtitleComplete && (
              <motion.span
                variants={cursorVariants}
                animate="blinking"
                className="w-0.5 h-5 bg-[#ffd700] ml-1"
              />
            )}
          </motion.div>
          
          <motion.div 
            className="mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Link 
              href="https://www.linkedin.com/in/divyansh-yadav-b17b2b328/"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-transparent text-[#ffd700] font-medium border-2 border-[#ffd700] rounded-md hover:bg-[#ffd700]/10 transition-all transform hover:scale-105 hover:shadow-md hover:shadow-[#ffd700]/20"
            >
              CONNECT WITH ME
            </Link>
          </motion.div>
        </main>

        {/* Coding person animation with neon effects */}
        <motion.div 
          className="flex mt-16 md:mt-0 w-full md:w-1/2 justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-72 h-72 md:w-80 md:h-80">
            {/* Coder silhouette */}
            <motion.div 
              className="absolute inset-0 z-10"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <svg viewBox="0 0 500 500" className="w-full h-full">
                {/* Coder outline with neon glow */}
                <path 
                  d="M250,120 C270,120 290,130 300,150 C305,160 300,170 310,175 C320,180 330,170 335,180 C340,190 330,200 340,210 C350,220 360,210 370,220 C380,230 370,240 380,250 L380,350 L300,350 L300,380 L340,380 L340,400 L160,400 L160,380 L200,380 L200,350 L120,350 L120,250 C130,240 140,230 150,220 C160,210 170,220 180,210 C190,200 180,190 185,180 C190,170 200,180 205,175 C210,170 205,160 210,150 C220,130 230,120 250,120 z"
                  className="fill-black/40 stroke-[#00ffff] stroke-2"
                  style={{ 
                    filter: 'drop-shadow(0 0 10vmax #00ffff) drop-shadow(0 0 20vmax #00ffff)'
                  }}
                />
                
                {/* Computer screen with neon border */}
                <motion.rect 
                  x="170" y="280" width="160" height="110" rx="5" 
                  className="fill-black/60 stroke-[#ffd700] stroke-2"
                  style={{ 
                    filter: 'drop-shadow(0 0 5vmax #ffd700)'
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                />
                
                {/* Animated code lines */}
                {codeLines.map((line, index) => (
                  <motion.rect
                    key={index}
                    x="180"
                    y={290 + index * 15}
                    rx="2"
                    height="6"
                    className="fill-[#00ffff]"
                    style={{ 
                      filter: 'drop-shadow(0 0 3vmax #00ffff)'
                    }}
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ 
                      width: line.width === "60%" ? 90 : line.width === "40%" ? 60 : line.width === "70%" ? 105 : line.width === "30%" ? 45 : line.width === "50%" ? 75 : 90,
                      opacity: [0, 1, 1, 0.8],
                    }}
                    transition={{ 
                      delay: line.delay, 
                      duration: 2, 
                      repeat: Infinity, 
                      repeatType: "reverse" 
                    }}
                  />
                ))}
                
                {/* Pulsing brain representing AI/ML */}
                <motion.circle
                  cx="250" cy="145" r="20"
                  className="fill-[#ff00ff]/40 stroke-[#ff00ff] stroke-1"
                  style={{ 
                    filter: 'drop-shadow(0 0 8vmax #ff00ff)'
                  }}
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse" 
                  }}
                />

                {/* Small network lines representing neural network */}
                {[1, 2, 3, 4, 5].map((i) => (
                  <motion.path
                    key={`network-${i}`}
                    d={`M${48 + i}vmax,31vmax C${46 + i * 2}vmax,34vmax ${52 - i}vmax,36vmax ${50 + i * 0.4}vmax,38vmax`}
                    className="fill-none stroke-[#ff00ff] stroke-1"
                    style={{ 
                      filter: 'drop-shadow(0 0 3vmax #ff00ff)'
                    }}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ 
                      pathLength: 1,
                      opacity: [0, 1, 0]
                    }}
                    transition={{ 
                      delay: i * 0.2,
                      duration: 2, 
                      repeat: Infinity
                    }}
                  />
                ))}
              </svg>
            </motion.div>
            
            {/* Glowing background effect */}
            <motion.div 
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl -z-10"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
                rotate: [0, 5, 0, -5, 0]
              }}
              transition={{ 
                duration: 10,
                repeat: Infinity 
              }}
            />
          </div>
        </motion.div>
      </div>
    </>
  );
}
