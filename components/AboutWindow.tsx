import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";

interface AboutWindowProps {
  boundRef: React.RefObject<HTMLDivElement | null>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AboutWindow = ({ boundRef, isOpen, setIsOpen }: AboutWindowProps) => {
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);
  return (
    <>
      {isOpen && (
        <motion.div
          drag
          dragMomentum={false}
          dragConstraints={boundRef as React.RefObject<HTMLElement>}
          dragElastic={0}
          style={{
            position: "fixed",
            zIndex: 10,
          }}
          initial={windowWidth > 768 ? { x: 100, y: 100 } : { y: 500 }}
          animate={windowWidth > 768 ? {} : { y: 80 }}
          transition={{ duration: 0.5 }}
        >
          <div className="z-1 flex flex-col rounded-xl w-screen md:w-[650px] xl:w-[800px] ">
            <div className="bg-[#424242] py-3 px-5 text-white text-[1.4rem] font-mono rounded-t-lg window-header flex justify-between">
              about
              <motion.button
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                onClick={() => setIsOpen(false)}
              >
                [x]
              </motion.button>
            </div>
            <div className="flex flex-col border-2 bg-white border-[#999999] shadow-xl rounded-b-xl">
              <div className="flex gap-5 sm:gap-10 px-5 md:px-15 pt-10 pb-5 border-b-1 border-[#f4f4f4] sticky">
                <Image
                  src="/profile.jpg"
                  width={140}
                  height={140}
                  alt="profile picture"
                  className="rounded-full border-7 border-orange-400 w-[120px] sm:w-[140px]"
                />
                <div className="flex flex-col justify-center">
                  <div className="text-xl sm:text-2xl md:text-5xl font-medium text-orange-400">
                    Siddharth Mantri
                  </div>
                  <div className="md:text-xl text-[#4b4b4b]">
                    Kolkata-based frontend developer, designer
                  </div>
                </div>
              </div>
              <div className="px-8 sm:px-15 pt-5 pb-10 flex flex-col h-[55vh] md:h-[300px] gap-10 overflow-y-scroll text-xl text-[#4b4b4b] ">
                <div className="">
                  hi! i&apos;m sid, i...
                  <ul className="py-5 pl-5 list-disc">
                    <li>specialize in frontend development,</li>
                    <li>create website wireframes,</li>
                    <li>create apps as a hobby</li>
                  </ul>
                  interested in working with me? send me an email at{" "}
                  <a href="mailto:sidmantri3@gmail.com">sidmantri3@gmail.com</a>
                </div>
                <div>
                  <h1 className="text-2xl font-semibold text-[#2b2b2b] pb-5">
                    EDUCATION
                  </h1>
                  <div className="border-l-3 border-[#d3d3d3] pl-5">
                    <p>Bachelors of Technology (CSBS)</p>
                    <p className="text-[16px] text-[#757575]">
                      Institute of Engineering & Management, 2024 (DGPA: 8.86)
                    </p>
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-semibold text-[#2b2b2b] pb-5">
                    WORK EXPERIENCE
                  </h1>
                  <div className="border-l-3 border-[#d3d3d3] pl-5 mb-2">
                    <p>Tech and Business Development Intern</p>
                    <p className="text-[16px] text-[#757575]">
                      Recircle, 01/2024 - 06/2024 (Mumbai)
                    </p>
                  </div>
                  <ul className="pl-5 list-disc">
                    <li>
                      Managed <b>data sorting, cleaning, and analysis</b> tasks
                      to ensure accurate and reliable datasets.
                    </li>
                    <li>
                      <b>Digitized the Material Recovery Facility</b> (MRF) and
                      developed analytical dashboards using{" "}
                      <b>Zoho Analytics</b>, providing actionable insights to
                      support strategic decision-making.
                    </li>
                    <li>
                      Conducted <b>market research</b> to identify business
                      growth opportunities, contributing to the company&apos;s
                      development strategy.
                    </li>
                  </ul>

                  <div className="border-l-3 border-[#d3d3d3] pl-5 mb-2 mt-5">
                    <p>Founder and Project Leader</p>
                    <p className="text-[16px] text-[#757575]">
                      Armedis Studios Pvt. Ltd., 06/2021 - 12/2022 (Kolkata)
                    </p>
                  </div>
                  <ul className="pl-5 list-disc">
                    <li>
                      <b>Bootstrapped</b> a completely new cryptocurrency game
                      from scratch without any investment to create a turnover
                      of <b>1,25,000 USD</b>.
                    </li>
                    <li>
                      Wrote the entire game concept, and white paper and{" "}
                      <b>led a team</b> of developers and designers.
                    </li>
                    <li>
                      Managed a community of <b>4000 members</b> by actively
                      engaging with them through chat, announcements, and
                      in-house games.
                    </li>
                    <li>
                      <b>Collaborated</b> and engaged with multiple other
                      projects while initially having no connections to becoming
                      a well-known name in the ecosystem.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default AboutWindow;
