import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";

interface LinksWindowProps {
  boundRef: React.RefObject<HTMLDivElement | null>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const LinksWindow = ({ boundRef, isOpen, setIsOpen }: LinksWindowProps) => {
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
          initial={windowWidth > 768 ? { x: 240, y: 160 } : { y: 500 }}
          animate={windowWidth > 768 ? {} : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="z-1 flex flex-col rounded-xl w-[300px] xl:w-[400px] ">
            <div className="bg-[#424242] py-3 px-5 text-white text-[1.4rem] font-mono rounded-t-lg window-header flex justify-between">
              links
              <motion.button
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                onClick={() => setIsOpen(false)}
              >
                [x]
              </motion.button>
            </div>
            <div className="flex flex-col border-2 bg-white border-[#999999] shadow-xl rounded-b-xl px-5 py-5 gap-2 ">
              <a
                href="https://www.linkedin.com/in/siddharth-mantri-webdev/"
                target="_blank"
                className="decoration-transparent"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex gap-5 text-2xl font-semibold border border-[#e4e4e4] p-2 rounded-lg items-center text-[#515151]"
                >
                  <Image
                    src="/linkedin.png"
                    width={30}
                    height={30}
                    alt="linkedin image"
                    className="contrast-30"
                  />
                  LinkedIn
                </motion.div>
              </a>
              <a
                href="https://www.linkedin.com/in/siddharth-mantri-webdev/"
                target="_blank"
                className="decoration-transparent"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex gap-5 text-2xl font-semibold border border-[#e4e4e4] p-2 rounded-lg items-center text-[#515151]"
                >
                  <Image
                    src="/github.png"
                    width={30}
                    height={30}
                    alt="github image"
                    className="contrast-50"
                  />
                  GitHub
                </motion.div>
              </a>
              <a
                href="https://drive.google.com/file/d/1rOnKp9yArdt86P2h-dQqZ2pbgsev0BU5/view?usp=sharing"
                target="_blank"
                className="decoration-transparent"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex gap-5 text-2xl font-semibold border border-[#e4e4e4] p-2 rounded-lg items-center text-[#515151]"
                >
                  <Image
                    src="/resume.png"
                    width={30}
                    height={30}
                    alt="resume image"
                    className="contrast-50"
                  />
                  Resume
                </motion.div>
              </a>
              <div className="p-5 bg-amber-50 rounded-lg">
                Might add some more links if I ever decide to become an
                influencer :{")"}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};
//https://drive.google.com/file/d/1rOnKp9yArdt86P2h-dQqZ2pbgsev0BU5/view?usp=sharing
export default LinksWindow;
