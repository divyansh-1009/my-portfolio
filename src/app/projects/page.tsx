'use client';
import BackgroundAnimation from '@/components/BackgroundAnimation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Projects() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };
      checkMobile();
      window.addEventListener('resize', checkMobile);
      
      // Cleanup
      return () => window.removeEventListener('resize', checkMobile);
    }
  }, []);

  const projects = [
    {
      id: 1,
      name: "Yearbook portal",
      description: "Developed a portal for the graduating batch of IIT Jodhpur where they can upload their memories and those memories will be compiled in their personalized yearbooks.",
      image: "/yearbook_dashboard.png", 
      URL: "https://yearbook.saa-iitj.com"
    }
  ];

  const loadingCircleVariants = {
    initial: {
      y: 0,
    },
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 0.6,
        ease: "easeInOut",
        times: [0, 0.5, 1],
        repeat: Infinity,
        repeatDelay: 0.25,
      },
    },
  };

  return (
    <>
      <BackgroundAnimation />
      <div className={`min-h-screen flex flex-col items-center justify-start p-4 sm:p-8 md:p-16 ${isMobile ? 'mt-20' : 'md:ml-20'}`}>
        <div className="w-full max-w-6xl">
          <div className="text-center mb-12">
            {/* Animated header without character splitting */}
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-8 md:mb-16 inline-block text-[#ffd700] font-serif"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              MY PROJECTS
            </motion.h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="bg-black/20 backdrop-blur-sm rounded-lg overflow-hidden border border-transparent hover:border-[#ffd700]/30 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 8px 24px -12px rgba(255, 215, 0, 0.2)"
                }}
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image 
                    src={project.image || "https://via.placeholder.com/600x400?text=Project+Image"} 
                    alt={project.name}
                    fill
                    className="object-contain transition-all duration-500 group-hover:scale-105"
                    style={{ objectFit: 'contain' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[#ffd700] group-hover:text-[#ffd700] transition-colors">
                    {project.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex justify-between mt-4 pt-4 border-t border-gray-700">
                    <Link 
                      href={project.URL} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#ffd700] hover:text-white transition-colors"
                    >
                      Website Link
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* Loading animation for more projects coming soon */}
            <motion.div 
              className="bg-black/20 backdrop-blur-sm rounded-lg overflow-hidden border border-dashed border-[#ffd700]/30 transition-all duration-300 flex flex-col items-center justify-center h-full min-h-[350px] p-6 md:p-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-6 text-[#ffd700]">More Projects Coming Soon</h3>
              
              {/* Animated loading dots */}
              <div className="flex space-x-3 mt-2">
                {[0, 1, 2, 3, 4].map((dot) => (
                  <motion.div
                    key={dot}
                    className="w-3 h-3 rounded-full bg-[#ffd700]"
                    variants={loadingCircleVariants}
                    initial="initial"
                    animate="animate"
                    custom={dot}
                    transition={{
                      delay: dot * 0.1
                    }}
                  />
                ))}
              </div>
              
              {/* Code element animation */}
              <motion.div 
                className="mt-10 bg-black/30 p-4 rounded-md w-3/4 text-sm font-mono mx-4"
                initial={{ width: "50%" }}
                animate={{ width: ["50%", "70%", "65%", "80%"] }}
                transition={{ 
                  duration: 4, 
                  ease: "easeInOut",
                  times: [0, 0.4, 0.6, 1],
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <div className="text-green-400">// Coding in progress...</div>
                <div className="text-blue-400 mt-2">function <span className="text-yellow-400">buildProject</span>() &#123;</div>
                <div className="ml-4 text-gray-300">return <span className="text-purple-400">amazing</span>;</div>
                <div className="text-blue-400">&#125;</div>
              </motion.div>
              
              <div className="text-gray-300 mt-6 text-sm">Check back soon!</div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}