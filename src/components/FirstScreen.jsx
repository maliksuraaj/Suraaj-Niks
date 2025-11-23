import { firstHeading, firstParagraph } from "@/data"
import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export default function FirstScreen({ onNext }) {
    return (
        <motion.div

            className="bg-[#f7f1ea] p-7 rounded-[60px] card-shadow min-w-48 w-full max-w-[400px] relative flex flex-col items-center gap-4"
        >
            <div className="relative h-95 md:h-62 bg-linear-to-b from-white/80 to-rose-200 w-full rounded-[40px] flex items-end justify-center gif-box-shadow">
                <Heart className="absolute top-[18%] left-[26%] w-9 h-9 -rotate-16 text-red-300 fill-red-300 opacity-50" />
                <Heart className="absolute top-[18%] right-[26%] w-9 h-9 rotate-16 text-red-300 fill-red-300 opacity-50" />
                <img src="/gifs/flower.gif" alt="flower" className="absolute w-28 -left-8 bottom-2 opacity-60" />
                <img src="/gifs/flower.gif" alt="flower" className="absolute w-28 right-12 bottom-2 opacity-60" />
                <img
                    src="/gifs/first.gif"
                    className="absolute bottom-10 md:bottom-12 h-28 md:h-32 drop-shadow-xl"
                    alt="sad panda"
                />
            </div>

            <div className="flex flex-col items-center gap-1 md:gap-2">
                <h2 className="text-4xl md:text-5xl text-secondary font-dancing-script font-semibold">
                    {firstHeading}
                </h2>
                <p className="text-center text-primary md:text-lg leading-normal max-h-24 md:max-h-28 overflow-y-auto">
                    {firstParagraph}
                </p>
            </div>
            <button
                onClick={onNext}
                className="bg-[#ebc9d4] md:text-lg text-secondary font-semibold px-8 py-3 btn-shadow rounded-full hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-2"
            >
                Continue <Heart size={22} className="fill-secondary" />
            </button>
        </motion.div>
    )
}