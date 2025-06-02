"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faLaptopCode,
  faBriefcase,
  faUser,
  faEnvelope,
  faPhone
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { useState, useEffect } from "react";

export default function Sidebar() {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };
      checkMobile(); 
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }
  }, []);

  const navItems = [
    { name: "Home", path: "/", icon: faHome },
    { name: "Projects", path: "/projects", icon: faLaptopCode },
    { name: "Portfolio", path: "/portfolio", icon: faBriefcase },
    { name: "About", path: "/about", icon: faUser }
  ];

  const socialItems = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/divyansh-yadav-b17b2b328/", icon: faLinkedin },
    { name: "GitHub", url: "https://github.com/divyansh-1009", icon: faGithub },
    { name: "Email", url: "mailto:b24cs1027@iitj.ac.in", icon: faEnvelope },
    { name: "Phone", url: "tel:+919210992006", icon: faPhone }
  ];

  return (
    <>
      <style jsx global>{`
        @keyframes radialAppear {
          0% {
            opacity: 0;
            transform: scale(0.2);
            letter-spacing: -0.5em;
          }
          50% {
            opacity: 0.5;
            letter-spacing: -0.25em;
          }
          100% {
            opacity: 1;
            transform: scale(1);
            letter-spacing: normal;
          }
        }
        
        .radial-text {
          animation: radialAppear 0.3s ease-out forwards;
          transform-origin: center;
          font-family: 'La Belle Aurore', cursive;
        }
      `}</style>

      {isMobile ? (
        <div className="fixed top-0 left-0 w-full bg-[#181818] text-white border-b border-gray-700 z-50">
          <div className="flex justify-between items-center px-4 py-2">
            <div className="flex items-center">
              <Image
                src="/logo-d.png"
                alt="Logo"
                width={30}
                height={30}
                className="rounded-full mr-2"
              />
              <h1 className="text-xs font-bold">DIVYANSH</h1>
            </div>
            
            <nav>
              <ul className="flex space-x-4">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className={`relative flex items-center justify-center p-2 rounded-md ${
                        pathname === item.path
                          ? "text-[#ffd700]"
                          : "text-white hover:text-[#ffd700]"
                      }`}
                      title={item.name}
                    >
                      <FontAwesomeIcon
                        icon={item.icon}
                        className="w-4 h-4"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          
          <div className="py-1 bg-gray-800">
            <div className="flex justify-center gap-3">
              {socialItems.map((item) => (
                <a 
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#ffd700] transition-colors duration-300"
                  title={item.name}
                >
                  <FontAwesomeIcon icon={item.icon} className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <aside className="w-20 fixed h-full bg-[#181818] text-white border-r border-gray-700 flex flex-col justify-between z-50">
          <div className="p-3">
            <div className="flex justify-center mb-3">
              <Image
                src="/logo-d.png"
                alt="Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <h1 className="text-xs font-bold mb-8 text-center">DIVYANSH</h1>
            <nav>
              <ul className="space-y-5">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className={`relative flex items-center justify-center p-3 rounded-md ${
                        pathname === item.path
                          ? "bg-gray-700 font-medium"
                          : "hover:bg-gray-700"
                      }`}
                      title={item.name}
                      onMouseEnter={() => setHoveredItem(item.path)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      {!hoveredItem || hoveredItem !== item.path ? (
                        <FontAwesomeIcon
                          icon={item.icon}
                          className={`w-5 h-5 ${
                            pathname === item.path ? "text-[#ffd700]" : "text-white"
                          }`}
                        />
                      ) : (
                        <span className="text-sm text-[#ffd700] radial-text">
                          {item.name}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          
          <div className="p-3 pb-6">
            <div className="flex flex-wrap justify-center gap-3">
              {socialItems.map((item) => (
                <a 
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#ffd700] transition-colors duration-300"
                  title={item.name}
                >
                  <FontAwesomeIcon icon={item.icon} className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </aside>
      )}
    </>
  );
}