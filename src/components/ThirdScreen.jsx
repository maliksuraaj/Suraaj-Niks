import { thirdHeading, thirdMessages } from "@/data"
import { motion } from "framer-motion"
import { Heart, MoveRight } from "lucide-react"
import { useState } from "react"

export default function ThirdScreen({ onNext }) {
    const [tap1, setTap1] = useState(false)
    const [tap2, setTap2] = useState(false)
    const [tap3, setTap3] = useState(false)

    const cardStates = [tap1, tap2, tap3]
    const setStates = [setTap1, setTap2, setTap3]

    const cardStyles = [
        {
            bg: "bg-linear-to-b from-white/80 to-[#ffd5c7]",
            cover: "bg-linear-to-b from-[#ffe1d8] to-[#ffc4b0]",
            icon: "#e58a7b"
        },
        {
            bg: "bg-linear-to-b from-white/80 to-[#f7cbe2]",
            cover: "bg-linear-to-b from-[#fbd9ec] to-[#f7b7d9]",
            icon: "#d95996"
        },
        {
            bg: "bg-linear-to-b from-white/80 to-[#e9d8fb]",
            cover: "bg-linear-to-b from-[#f0e4ff] to-[#d6b7ff]",
            icon: "#9d67d1"
        }
    ]

    return (
        <motion.div
            className="bg-[#f7f1ea] p-7 rounded-[60px] card-shadow w-full max-w-[400px] relative flex flex-col items-center gap-4"
        >
            <h2 className="text-3xl md:text-4xl text-center text-secondary font-dancing-script font-semibold">
                {thirdHeading}
            </h2>

            <p className="text-primary text-sm opacity-70 font-light -mt-2 mb-2">
                Tap each one
            </p>

            {/* Cards */}
            <div className="flex flex-col gap-5 w-full">
                {cardStyles.map((style, i) => (
                    <div
                        key={i}
                        onClick={() => setStates[i](!cardStates[i])}
                        className={`card ${cardStates[i] ? "tapped" : ""}
                        relative h-24 md:h-28 w-full rounded-[40px]
                        flex items-center justify-center gif-box-shadow
                        overflow-hidden cursor-pointer transition-all
                        ${style.bg}`}
                    >
                        <div className={`cover will-change-auto ${style.cover}`}>
                            <Heart
                                className="w-12 h-12 md:w-14 md:h-14 opacity-70"
                                style={{ color: style.icon, fill: style.icon }}
                            />
                        </div>

                        {/* Text */}
                        <p className="px-4 text-center text-primary md:text-lg max-h-11 overflow-y-auto leading-snug">
                            {thirdMessages[i]}
                        </p>
                    </div>
                ))}
            </div>

            <button
                onClick={onNext}
                className="bg-[#f3c2cd] mt-3 md:text-lg text-secondary font-semibold px-8 py-3 btn-shadow rounded-full hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-2"
            >
                My message <MoveRight size={20} className="fill-secondary" />
            </button>
        </motion.div>
    )
}
