import Image from 'next/image';
import { useState } from 'react';
import BackgroundAnimation from '@/components/BackgroundAnimation';
import Link from 'next/link';

export default function Home() {
  const greeting = "Hi,";
  const intro = "I'm ";
  const name = "ivyansh";
  const subtitle = "FULLSTACK DEVELOPER || AI/ML ENTHUSIAST";
  
  const AnimatedText = ({ text, className }: { text: string, className?: string }) => {
    return (
      <span className={className}>
        {text.split('').map((char, index) => (
          <span 
            key={index} 
            className={`inline-block transition-all duration-200 hover:text-[#ffd700] hover:scale-125 origin-center ${
              char === ' ' ? 'mr-2' : '' 
            }`}
          >
            {char === ' ' ? '\u00A0' : char} 
          </span>
        ))}
      </span>
    );
  };

  return (
    <>
      <BackgroundAnimation />
      <div className="flex flex-col items-center justify-center min-h-screen p-8 sm:p-20">
        <main className="flex flex-col gap-6 max-w-4xl w-full">
          <h1 className="text-5xl md:text-7xl font-bold">
            <AnimatedText text={greeting} /> <br /> 
            <span className="flex items-center">
              <AnimatedText text={intro} />
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
              <AnimatedText text={name} />
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-500 dark:text-gray-400">
            <AnimatedText text={subtitle} />
          </h2>
          
          <div className="mt-6">
            <Link 
              href="https://www.linkedin.com/in/divyansh-yadav-b17b2b328/"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-transparent text-[#ffd700] font-medium border-2 border-[#ffd700] rounded-md hover:bg-[#ffd700]/10 transition-all transform hover:scale-105 hover:shadow-md hover:shadow-[#ffd700]/20"
            >
              CONNECT WITH ME
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
