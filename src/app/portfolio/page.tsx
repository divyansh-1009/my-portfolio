'use client';
import BackgroundAnimation from '@/components/BackgroundAnimation';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHtml5, 
  faCss3Alt, 
  faJs, 
  faReact, 
  faNode, 
  faPython, 
  faJava, 
  faGitAlt, 
  faGithub, 
  faBootstrap
} from '@fortawesome/free-brands-svg-icons';
import { SiTypescript, SiMongodb, SiExpress, SiSpringboot, SiCplusplus } from 'react-icons/si';

export default function Portfolio() {
  const skills = [
    { name: 'C/C++', icon: <SiCplusplus />, color: '#00599C' },
    { name: 'Python', icon: <FontAwesomeIcon icon={faPython} />, color: '#3776AB' },
    { name: 'JavaScript', icon: <FontAwesomeIcon icon={faJs} />, color: '#F7DF1E' },
    { name: 'Java', icon: <FontAwesomeIcon icon={faJava} />, color: '#007396' },
    { name: 'HTML', icon: <FontAwesomeIcon icon={faHtml5} />, color: '#E34F26' },
    { name: 'CSS', icon: <FontAwesomeIcon icon={faCss3Alt} />, color: '#1572B6' },
    { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
    { name: 'React', icon: <FontAwesomeIcon icon={faReact} />, color: '#61DAFB' },
    { name: 'Next.js', icon: <span className="text-2xl font-bold">N</span>, color: '#000000' },
    { name: 'Node.js', icon: <FontAwesomeIcon icon={faNode} />, color: '#339933' },
    { name: 'Express', icon: <SiExpress />, color: '#000000' },
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
    { name: 'Spring Boot', icon: <SiSpringboot />, color: '#6DB33F' },
    { name: 'Bootstrap', icon: <FontAwesomeIcon icon={faBootstrap} />, color: '#7952B3' },
    { name: 'Git', icon: <FontAwesomeIcon icon={faGitAlt} />, color: '#F05032' },
    { name: 'GitHub', icon: <FontAwesomeIcon icon={faGithub} />, color: '#181717' }
  ];

  return (
    <>
      <BackgroundAnimation />
      <div className="min-h-screen flex flex-col items-center justify-start p-8 sm:p-16 md:p-24 ml-[-23vmax] md:ml-[-13vmax]">
        <div className="w-full max-w-6xl">
          <div className="text-center mb-12">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-16 inline-block text-[#ffd700] font-serif"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              TECHNICAL SKILLS
            </motion.h1>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-10">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-card bg-black/20 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center justify-center hover:bg-black/40 transition-all duration-300 border border-transparent hover:border-[#ffd700]/30 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: `0 0 20vmax ${skill.color}40`,
                  y: -5 
                }}
              >
                <div 
                  className="text-4xl mb-3 transition-all duration-300"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </div>
                <h3 className="text-lg font-medium text-center">{skill.name}</h3>
                
                {/* Animated shards/particles */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100">
                  {[...Array(5)].map((_, i) => (
                    <motion.span
                      key={i}
                      className="absolute w-1 h-1 rounded-full"
                      style={{ backgroundColor: skill.color }}
                      initial={{ x: '50%', y: '50%', opacity: 0 }}
                      animate={{ 
                        x: `${50 + (Math.random() * 100 - 50)}%`, 
                        y: `${50 + (Math.random() * 100 - 50)}%`, 
                        opacity: [0, 1, 0],
                        scale: [1, 1.5, 0]
                      }}
                      transition={{ 
                        duration: 1 + Math.random(), 
                        repeat: Infinity, 
                        repeatType: "loop",
                        delay: Math.random() * 2
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}