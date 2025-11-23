"use client"

import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";
import { useState } from "react";
import FirstScreen from "@/components/FirstScreen";
import SecondScreen from "@/components/SecondScreen";
import ThirdScreen from "@/components/ThirdScreen";
import FourthScreen from "@/components/FourthScreen";
import BackgroundMusic from "@/components/BackgroundMusic";

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState(0)
  const [musicOn, setMusicOn] = useState(false)

  const screens = [
    <FirstScreen key="first" onNext={() => {
      setMusicOn(true)
      setCurrentScreen(1)
    }} />,
    <SecondScreen key="second" onNext={() => setCurrentScreen(2)} />,
    <ThirdScreen key="third" onNext={() => setCurrentScreen(3)} />,
    <FourthScreen key="fourth" />
  ]

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* BLOBS */}
      <div
        className="absolute top-[-120px] right-[-200px] w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle_at_center,#f8efce_0%,#f8efce_40%,transparent_70%)] blur-md opacity-90"
      />
      <div className="absolute top-[25%] left-[-210px] w-[450px] h-[450px] rounded-full bg-[radial-gradient(circle_at_center,#f6cec5_0%,#f6cec5_40%,transparent_72%)] blur-md opacity-80" />
      <div className="absolute -bottom-40 right-[-200px] w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle_at_center,#d6d3de_0%,#d6d3de_40%,transparent_70%)] blur-sm opacity-90" />

      {/* HEARTS */}
      <Heart className="absolute top-[8%] right-[16%] w-10 h-10 -rotate-12 text-purple-300 fill-purple-300 opacity-40" />
      <Heart className="absolute top-[32%] left-[16%] w-7 h-7 rotate-[8deg] text-pink-300 fill-pink-300 opacity-50" />
      <Heart className="absolute bottom-[18%] right-[26%] w-9 h-9 rotate-[5deg] text-red-300 fill-red-300 opacity-50" />
      <Heart className="absolute top-[10%] left-5 w-16 h-16 rotate-18 text-red-300 opacity-50 stroke-3" />
      <Heart className="absolute top-[10%] left-5 w-16 h-16 rotate-18 text-red-300 opacity-50 stroke-3" />
      <Heart className="absolute bottom-[8%] right-[-18px] w-20 h-20 -rotate-12 text-red-300 opacity-40 stroke-3" />

      {/* BLUR OVERLAY */}
      <div className="absolute inset-0 backdrop-blur-[2px] bg-white/10" />

      <BackgroundMusic shouldPlay={musicOn} />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentScreen}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6 }}
          className="px-4 py-6"
        >
          {screens[currentScreen]}
        </motion.div>
      </AnimatePresence>

      {/* Watermark */}
      {/* <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1,
        }}
        className="fixed bottom-4 right-4 text-sm text-black/40 pointer-events-none z-50 font-light">
        @anujbuilds
      </motion.div> */}
    </div>
  );
}
