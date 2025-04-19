/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useRef } from "react";

export default function SkillsMarquee() {
  const skills = [
    { name: "HTML", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Express", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    
  ];

  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    let offset = 0;

    const animate = () => {
      offset -= 1;
      if (Math.abs(offset) >= track.scrollWidth / 3) {
        offset = 0;
      }
      track.style.transform = `translateX(${offset}px)`;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="bg-white py-10 overflow-hidden">
      <div className="relative w-full">
        <div
          className="flex gap-16 animate-none will-change-transform"
          ref={trackRef}
          style={{
            whiteSpace: "nowrap",
          }}
        >
          {[...skills, ...skills, ...skills].map((skill, index) => (
            <div key={index} className="flex-shrink-0">
              <img
                src={skill.src}
                alt={skill.name}
                title={skill.name}
                className="w-16 h-16 md:w-20 md:h-20 object-contain transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
