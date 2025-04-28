import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";

//dont judge me for not properly making components for this project I wanted to just get this done quick and make it live, I will do it later :(

interface WorkWindowProps {
  boundRef: React.RefObject<HTMLDivElement | null>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const WorkWindow = ({ boundRef, isOpen, setIsOpen }: WorkWindowProps) => {
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
          dragConstraints={boundRef}
          dragElastic={0}
          style={{
            position: "fixed",
            zIndex: 10,
          }}
          initial={windowWidth > 768 ? { x: 440, y: 220 } : { y: 500 }}
          animate={windowWidth > 768 ? {} : { y: 80 }}
          transition={{ duration: 0.5 }}
        >
          <div className="z-1 flex flex-col rounded-xl w-screen md:w-[700px] xl:w-[1000px] ">
            <div className="bg-[#424242] py-3 px-5 text-white text-[1.4rem] font-mono rounded-t-lg window-header flex justify-between">
              work
              <motion.button
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                onClick={() => setIsOpen(false)}
              >
                [x]
              </motion.button>
            </div>
            <div className="flex flex-col border-2 bg-white border-[#999999] shadow-xl rounded-b-xl">
              <div className="xl:px-15 px-5 pt-5 pb-10 flex flex-col h-[85vh] md:h-[480px] gap-10 overflow-y-scroll text-xl text-[#4b4b4b] ">
                <div className="p-5 bg-amber-50 rounded-lg">
                  Want to work with me? Reach me out at my{" "}
                  <a href="mailto:sidmantri3@gmail.com">work email!</a>
                </div>
                <div className="flex flex-col md:flex-row gap-10 basis-1/2 whitespace-nowrap ">
                  <div className="">
                    <h1 className="text-2xl font-semibold text-[#2b2b2b] pb-5">
                      TOOLS
                    </h1>
                    <div className="flex gap-2 text-[17px] flex-wrap">
                      <motion.div
                        className="py-1 px-5 rounded-lg border-b-3 border-1 border-[#f3f3f3] border-b-[#dedede]"
                        whileHover={{ scale: 1.05 }}
                      >
                        Figma
                      </motion.div>
                      <motion.div
                        className="py-1 px-5 rounded-lg border-b-3 border-1 border-[#f3f3f3] border-b-[#dedede]"
                        whileHover={{ scale: 1.05 }}
                      >
                        WordPress
                      </motion.div>
                      <motion.div
                        className="py-1 px-5 rounded-lg border-b-3 border-1 border-[#f3f3f3] border-b-[#dedede]"
                        whileHover={{ scale: 1.05 }}
                      >
                        Zoho Analytics
                      </motion.div>
                    </div>
                  </div>
                  <div className="flex flex-col basis-1/2">
                    <h1 className="text-2xl font-semibold text-[#2b2b2b] pb-5">
                      DEVELOPMENT
                    </h1>
                    <div className="flex gap-2 text-[17px] flex-wrap">
                      <motion.div
                        className="py-1 px-5 rounded-lg border-b-3 border-1 border-[#f3f3f3] border-b-[#dedede]"
                        whileHover={{ scale: 1.05 }}
                      >
                        C++
                      </motion.div>
                      <motion.div
                        className="py-1 px-5 rounded-lg border-b-3 border-1 border-[#f3f3f3] border-b-[#dedede]"
                        whileHover={{ scale: 1.05 }}
                      >
                        HTML/CSS
                      </motion.div>
                      <motion.div
                        className="py-1 px-5 rounded-lg border-b-3 border-1 border-[#f3f3f3] border-b-[#dedede]"
                        whileHover={{ scale: 1.05 }}
                      >
                        JavaScript
                      </motion.div>
                      <motion.div
                        className="py-1 px-5 rounded-lg border-b-3 border-1 border-[#f3f3f3] border-b-[#dedede]"
                        whileHover={{ scale: 1.05 }}
                      >
                        TypeScript
                      </motion.div>
                      <motion.div
                        className="py-1 px-5 rounded-lg border-b-3 border-1 border-[#f3f3f3] border-b-[#dedede]"
                        whileHover={{ scale: 1.05 }}
                      >
                        ReactJs
                      </motion.div>
                      <motion.div
                        className="py-1 px-5 rounded-lg border-b-3 border-1 border-[#f3f3f3] border-b-[#dedede]"
                        whileHover={{ scale: 1.05 }}
                      >
                        NextJs
                      </motion.div>
                      <motion.div
                        className="py-1 px-5 rounded-lg border-b-3 border-1 border-[#f3f3f3] border-b-[#dedede]"
                        whileHover={{ scale: 1.05 }}
                      >
                        Tailwind CSS
                      </motion.div>
                      <motion.div
                        className="py-1 px-5 rounded-lg border-b-3 border-1 border-[#f3f3f3] border-b-[#dedede]"
                        whileHover={{ scale: 1.05 }}
                      >
                        React Native
                      </motion.div>
                      <motion.div
                        className="py-1 px-5 rounded-lg border-b-3 border-1 border-[#f3f3f3] border-b-[#dedede]"
                        whileHover={{ scale: 1.05 }}
                      >
                        Expo
                      </motion.div>
                      <motion.div
                        className="py-1 px-5 rounded-lg border-b-3 border-1 border-[#f3f3f3] border-b-[#dedede]"
                        whileHover={{ scale: 1.05 }}
                      >
                        Redux
                      </motion.div>
                      <motion.div
                        className="py-1 px-5 rounded-lg border-b-3 border-1 border-[#f3f3f3] border-b-[#dedede]"
                        whileHover={{ scale: 1.05 }}
                      >
                        Git
                      </motion.div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <h1 className="text-2xl font-semibold text-[#2b2b2b]">
                    DEVELOPED
                  </h1>
                  <div className="flex flex-col gap-5 p-5 border border-[#f0f0f0] border-b-5 border-b-[#dedede] rounded-lg">
                    <div className="flex flex-col sm:flex-row gap-10">
                      <Image
                        src="/Frame 3.png"
                        width={300}
                        height={250}
                        alt="Project Image"
                        className="rounded-lg h-[200px] xl:w-[300px] xl:h-[200px]"
                      />
                      <div className="gap-5">
                        <h1 className="text-2xl font-medium text-orange-400 pb-5">
                          Real Estate Booking
                        </h1>
                        <div className="text-[17px]">
                          <p>
                            This was a project created as a assignment for
                            Propacity React Developer role.
                          </p>
                          <ul className="list-disc pl-5">
                            <li>
                              Built a property listing app with infinite
                              scrolling, search & price filtering
                            </li>
                            <li>
                              Implemented a booking system with check-in/out and
                              confirmation
                            </li>
                            <li>
                              Added dark mode toggle, toast notifications, and
                              error handling.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 whitespace-nowrap">
                      <div>
                        <h1 className="text-2xl font-medium text-[#2b2b2b] pb-5">
                          Skills
                        </h1>
                        <div className="flex flex-wrap gap-2 text-[17px]">
                          <motion.div
                            className="py-1 px-5 rounded-lg border-b-3 border-1 border-[#f3f3f3] border-b-[#dedede] bg-white"
                            whileHover={{ scale: 1.05 }}
                          >
                            React Native
                          </motion.div>
                          <motion.div
                            className="py-1 px-5 rounded-lg border-b-3 border-1 border-[#f3f3f3] border-b-[#dedede] bg-white"
                            whileHover={{ scale: 1.05 }}
                          >
                            Expo
                          </motion.div>
                          <motion.div
                            className="py-1 px-5 rounded-lg border-b-3 border-1 border-[#f3f3f3] border-b-[#dedede] bg-white"
                            whileHover={{ scale: 1.05 }}
                          >
                            NativeWind
                          </motion.div>
                        </div>
                      </div>
                      <div className="flex flex-grow flex-row gap-2 justify-end items-end text-[17px]">
                        <a
                          target="_blank"
                          href="https://www.figma.com/design/PBkwjy0Ddeq4r3v8OuBlIp/Real-Estate-UI?node-id=0-1&t=2VU6BPlZFwZAUVEI-1"
                        >
                          <motion.button
                            className="pt-1 pb-2 px-5 rounded-lg  bg-[#424242]  text-white"
                            whileHover={{ scale: 1.05 }}
                          >
                            Figma
                          </motion.button>
                        </a>
                        <a
                          target="_blank"
                          href="https://github.com/sidmn/Real-Estate-App"
                        >
                          <motion.button
                            className="pt-1 pb-2 px-5 rounded-lg  bg-[#424242]  text-white"
                            whileHover={{ scale: 1.05 }}
                          >
                            GitHub
                          </motion.button>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-5 p-5 border border-[#f0f0f0] border-b-5 border-b-[#dedede] rounded-lg">
                    <div className="flex flex-col sm:flex-row gap-10">
                      <Image
                        src="/dumbflix.jpg"
                        width={300}
                        height={300}
                        alt="Project Image"
                        className="rounded-lg h-[200px] xl:w-[300px] xl:h-[200px]"
                      />
                      <div className="gap-5">
                        <h1 className="text-2xl font-medium text-orange-400 pb-5">
                          DumbFlix
                        </h1>
                        <div className="text-[17px]">
                          <p>
                            This was a project created as a assignment for
                            Honestly React Developer role.
                          </p>
                          <ul className="list-disc pl-5">
                            <li>
                              Built a Next.js-based website that fetches and
                              displays trending movies using The Movie Database
                              (TMDb) API. Users can search for movies, view
                              details, and explore trending films
                            </li>
                            <li>
                              Utilized NextJs: For improved SEO, Image
                              optimizations and performance. Tailwind CSS: For
                              rapid styling.
                            </li>
                            <li>
                              Integrated revalidation and caching on API calls
                              for better website performance.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 whitespace-nowrap">
                      <div>
                        <h1 className="text-2xl font-medium text-[#2b2b2b] pb-5">
                          Skills
                        </h1>
                        <div className="flex flex-wrap gap-2 text-[17px]">
                          <motion.div
                            className="py-1 px-5 rounded-lg border-b-3 border-1 border-[#f3f3f3] border-b-[#dedede]"
                            whileHover={{ scale: 1.05 }}
                          >
                            React Js
                          </motion.div>
                          <motion.div
                            className="py-1 px-5 rounded-lg border-b-3 border-1 border-[#f3f3f3] border-b-[#dedede]"
                            whileHover={{ scale: 1.05 }}
                          >
                            Next Js
                          </motion.div>
                          <motion.div
                            className="py-1 px-5 rounded-lg border-b-3 border-1 border-[#f3f3f3] border-b-[#dedede]"
                            whileHover={{ scale: 1.05 }}
                          >
                            Tailwind CSS
                          </motion.div>
                          <motion.div
                            className="py-1 px-5 rounded-lg border-b-3 border-1 border-[#f3f3f3] border-b-[#dedede]"
                            whileHover={{ scale: 1.05 }}
                          >
                            Redux
                          </motion.div>
                        </div>
                      </div>
                      <div className="flex flex-grow flex-row gap-2 justify-end items-end text-[17px]">
                        <a
                          target="_blank"
                          href="https://dumbflix-lovat.vercel.app/"
                        >
                          <motion.button
                            className="pt-1 pb-2 px-5 rounded-lg  bg-[#424242]  text-white"
                            whileHover={{ scale: 1.05 }}
                          >
                            Website
                          </motion.button>
                        </a>
                        <a
                          target="_blank"
                          href="https://github.com/sidmn/dumbflix"
                        >
                          <motion.button
                            className="pt-1 pb-2 px-5 rounded-lg  bg-[#424242]  text-white"
                            whileHover={{ scale: 1.05 }}
                          >
                            GitHub
                          </motion.button>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-5 p-5 border border-[#f0f0f0] border-b-5 border-b-[#dedede] rounded-lg">
                    <div className="flex flex-col sm:flex-row gap-10">
                      <Image
                        src="/portfolio.jpg"
                        width={300}
                        height={300}
                        alt="Project Image"
                        className="rounded-lg h-[200px] xl:w-[300px] xl:h-[200px]"
                      />
                      <div className="gap-5">
                        <h1 className="text-2xl font-medium text-orange-400 pb-5">
                          Portfolio Website
                        </h1>
                        <div className="text-[17px]">
                          <p>
                            Yay! This was the first and sadly the only project I
                            created for myself. Until I created this one.
                          </p>
                          <ul className="list-disc pl-5">
                            <li>First time I ever used Next Js.</li>
                            <li>
                              Acertinity UI was a game changer for me but the
                              most important thing was,
                            </li>
                            <li>
                              Tailwind CSS!! God I love this thing. Though I
                              should start managing my global styling a bit
                              more.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 whitespace-nowrap">
                      <div>
                        <h1 className="text-2xl font-medium text-[#2b2b2b] pb-5">
                          Skills
                        </h1>
                        <div className="flex flex-wrap gap-2 text-[17px]">
                          <motion.div
                            className="py-1 px-5 rounded-lg border-b-3 border-1 border-[#f3f3f3] border-b-[#dedede]"
                            whileHover={{ scale: 1.05 }}
                          >
                            React Js
                          </motion.div>
                          <motion.div
                            className="py-1 px-5 rounded-lg border-b-3 border-1 border-[#f3f3f3] border-b-[#dedede]"
                            whileHover={{ scale: 1.05 }}
                          >
                            Next Js
                          </motion.div>
                          <motion.div
                            className="py-1 px-5 rounded-lg border-b-3 border-1 border-[#f3f3f3] border-b-[#dedede]"
                            whileHover={{ scale: 1.05 }}
                          >
                            Tailwind CSS
                          </motion.div>
                          <motion.div
                            className="py-1 px-5 rounded-lg border-b-3 border-1 border-[#f3f3f3] border-b-[#dedede]"
                            whileHover={{ scale: 1.05 }}
                          >
                            Aceternity UI
                          </motion.div>
                        </div>
                      </div>
                      <div className="flex flex-grow flex-row gap-2 justify-end items-end text-[17px]">
                        <a
                          target="_blank"
                          href="https://portfolio.siddharth-mantri.co.in/"
                        >
                          <motion.button
                            className="pt-1 pb-2 px-5 rounded-lg  bg-[#424242]  text-white"
                            whileHover={{ scale: 1.05 }}
                          >
                            Website
                          </motion.button>
                        </a>
                        <a
                          target="_blank"
                          href="https://github.com/sidmn/My-portfolio"
                        >
                          <motion.button
                            className="pt-1 pb-2 px-5 rounded-lg  bg-[#424242]  text-white"
                            whileHover={{ scale: 1.05 }}
                          >
                            GitHub
                          </motion.button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default WorkWindow;
