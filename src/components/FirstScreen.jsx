import { firstHeading, firstParagraph } from "@/data"
import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export default function FirstScreen({ onNext }) {
  return (
    <motion.div
      className="bg-[#f7f1ea] p-4 sm:p-6 md:p-7 rounded-[40px] card-shadow w-full max-w-[400px] flex flex-col items-center gap-4"
    >
      {/* GIF Box */}
      <div className="relative w-full rounded-[30px] flex items-center justify-center bg-gradient-to-b from-white/80 to-rose-200 h-60 sm:h-72 md:h-80 gif-box-shadow">
        {/* Hearts */}
        <Heart className="absolute top-1/4 left-1/4 w-6 sm:w-8 md:w-9 h-6 sm:h-8 md:h-9 -rotate-16 text-red-300 fill-red-300 opacity-50" />
        <Heart className="absolute top-1/4 right-1/4 w-6 sm:w-8 md:w-9 h-6 sm:h-8 md:h-9 rotate-16 text-red-300 fill-red-300 opacity-50" />

        {/* Side flowers */}
        <img src="/gifs/flower.gif" alt="flower" className="absolute w-20 sm:w-24 md:w-28 left-2 sm:left-0 bottom-2 sm:bottom-3 md:bottom-4 opacity-60" />
        <img src="/gifs/flower.gif" alt="flower" className="absolute w-20 sm:w-24 md:w-28 right-2 sm:right-0 bottom-2 sm:bottom-3 md:bottom-4 opacity-60" />

        {/* Main GIF */}
        <img
          src="/gifs/first.gif"
          alt="sad panda"
          className="relative h-24 sm:h-28 md:h-32"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col items-center gap-1 sm:gap-2">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-secondary font-dancing-script font-semibold text-center">
          {firstHeading}
        </h2>
        <p className="text-center text-primary sm:text-base md:text-lg leading-normal max-h-28 overflow-y-auto px-2">
          {firstParagraph}
        </p>
      </div>

      {/* Button */}
      <button
        onClick={onNext}
        className="bg-[#ebc9d4] text-secondary font-semibold md:text-lg px-6 sm:px-8 py-2 sm:py-3 btn-shadow rounded-full hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-2"
      >
        Continue <Heart size={20} className="fill-secondary" />
      </button>
    </motion.div>
  )
}
