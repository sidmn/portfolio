"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import Wave from "react-wavify";
import useSound from "use-sound";
import { motion } from "motion/react"
import AboutWindow from "@/components/AboutWindow";
import WorkWindow from "@/components/WorkWindow";
import LinksWindow from "@/components/LinksWindow";

export default function Home() {
  const [play, { stop }] = useSound("/Lofi.mp3");
  const [click] = useSound("/pop.wav",{volume:0.05})
  const [isPlaying, setIsPlaying] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const [linksOpen, setLinksOpen] = useState(false);
  const boundRef = useRef<HTMLDivElement>(null);

  const handleMusic=()=>{
    console.log("handle triggered")
    if(!isPlaying){
      console.log("Playing music")
      play();
      setIsPlaying(true);
    }
    else{
      console.log("stopping music")
      stop();
      setIsPlaying(false);
    }
  }

  return (
    <div  ref={boundRef} className="w-full flex flex-col relative h-screen">
      <div className="flex w-full px-8 pt-8">
        <motion.button onClick={handleMusic} whileTap={{scale:0.9}} whileHover={{scale:1.1}}>
          {isPlaying ? (
            <Image src="/volume.png" width={25} height={25} alt="Playing" />
          ) : (
            <Image src="/mute.png" width={25} height={25} alt="Mute" />
          )}
        </motion.button>
      </div>
      <div className="flex grow-1 items-center justify-center">
        <div className="z-1 flex flex-col rounded-xl w-[650px] xl:w-[800px] p-5">
          <div className="bg-[#424242] py-3 pl-5 text-white text-[1.4rem] font-mono rounded-t-lg">
            home
          </div>
          <div className="flex flex-col items-center justify-center py-20 border-2 bg-white border-[#999999] shadow-xl rounded-b-xl px-5">
            <div className="text-5xl sm:text-7xl pt-5 text-[#535353]">
              hi! <span className="font-medium text-orange-400">Sid here</span>{" "}
            </div>
            <div className="text-2xl pt-5 text-[#535353]">
              developer & designer
            </div>
            <div className="flex flex-row gap-15 pt-15">
              <button
                className="transition hover:scale-105 ease-in-out duration-300"
                onClick={()=>{click();setAboutOpen(true)}}
              >
                <div>
                  <Image
                    width={70}
                    height={70}
                    src="/information.png"
                    alt="About"
                    className="contrast-50"
                  />
                  <h1 className="text-center text-lg font-bold font-mono pt-1 text-[#535353]">
                    about
                  </h1>
                </div>
              </button>
              <button className="transition hover:scale-105 ease-in-out duration-300" onClick={()=>{click();setWorkOpen(true)}}>
                <div>
                  <Image
                    width={70}
                    height={70}
                    src="/desk.png"
                    alt="Work"
                    className="contrast-50"
                  />
                  <h1 className="text-center text-lg font-bold font-mono pt-1 text-[#535353]">
                    work
                  </h1>
                </div>
              </button>
              <button className="transition hover:scale-105 ease-in-out duration-300" onClick={()=>{click();setLinksOpen(true)}}>
                <div>
                  <Image
                    width={70}
                    height={70}
                    src="/link.png"
                    alt="Links"
                    className="contrast-50"
                  />
                  <h1 className="text-center text-lg font-bold font-mono pt-1 text-[#535353]">
                    links
                  </h1>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <AboutWindow boundRef={boundRef} isOpen={aboutOpen} setIsOpen={setAboutOpen} />
      <WorkWindow boundRef={boundRef} isOpen={workOpen} setIsOpen={setWorkOpen} />
      <LinksWindow boundRef={boundRef} isOpen={linksOpen} setIsOpen={setLinksOpen} />
      <Wave
        fill="#A0DFFE"
        paused={false}
        style={{ display: "flex" }}
        options={{
          height: 0,
          amplitude: 20,
          speed: 0.15,
          points: 3,
        }}
        className=" h-80 absolute bottom-0 z-0"
      />
      <footer className="z-15 flex items-center justify-center p-4 gap-5"><a
                      href="https://www.linkedin.com/in/siddharth-mantri-webdev/"
                      target="_blank"
                      className="decoration-transparent"
                    >
                      
                        <Image
                          src="/linkedin.png"
                          width={30}
                          height={30}
                          alt="linkedin image"
                          className="mr-1"
                        />
                        
                    </a>
                    <a
                      href="https://www.linkedin.com/in/siddharth-mantri-webdev/"
                      target="_blank"
                      className="decoration-transparent"
                    >
                      
                        <Image
                          src="/github.png"
                          width={30}
                          height={30}
                          alt="github image"
                          className=""
                        />
                        
                    </a>
                    <a
                      href="https://drive.google.com/file/d/1rOnKp9yArdt86P2h-dQqZ2pbgsev0BU5/view?usp=sharing"
                      target="_blank"
                      className="decoration-transparent"
                    >
                      
                        <Image
                          src="/resume.png"
                          width={30}
                          height={30}
                          alt="resume image"
                          className=""
                        />
                        
                    </a></footer>
    </div>
  );
}
