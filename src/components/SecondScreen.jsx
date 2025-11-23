import { secondParagraph } from "@/data"
import { motion } from "framer-motion"
import { Heart, MoveRight } from "lucide-react"

export default function SecondScreen({ onNext }) {
    return (
        <motion.div
            className="bg-[#f7f1ea] p-7 rounded-[60px] card-shadow min-w-48 w-full max-w-[400px] relative flex flex-col items-center gap-4"
        >
            <div className="relative h-44 md:h-52 bg-linear-to-b from-white/80 to-purple-200 w-full rounded-[40px] flex items-end justify-center gif-box-shadow">
                <Heart className="absolute top-[18%] left-[26%] w-9 h-9 -rotate-16 text-purple-300 fill-purple-300 opacity-50" />
                <Heart className="absolute top-[18%] right-[26%] w-9 h-9 rotate-16 text-purple-300 fill-purple-300 opacity-50" />
                <img
                    src="/gifs/second.gif"
                    className="h-50 md:h-50 drop-shadow-xl"
                    alt="sad panda"
                />
            </div>

            <p className="text-center text-primary md:text-lg max-h-24 md:max-h-28 overflow-y-auto">
                {secondParagraph}
            </p>

            <button
                onClick={onNext}
                className="bg-[#dbc9eb] md:text-lg text-[#6a3f4e] font-semibold px-8 py-3 btn-shadow rounded-full hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-2"
            >
                Next <MoveRight size={20} className="fill-[#6a3f4e]" />
            </button>
        </motion.div>
    )
}