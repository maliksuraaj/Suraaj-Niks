import { fourthHeading, message } from "@/data"
import { MoveDown } from "lucide-react"
import { useState } from "react"

export default function FourthScreen() {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="bg-[#f7f1ea] p-7 rounded-[60px] card-shadow min-w-48 md:min-w-[400px] w-full max-w-[400px] relative flex flex-col items-center gap-4"
    >
      <h2 className="text-4xl md:text-5xl text-secondary font-dancing-script font-semibold text-center">
        {fourthHeading}
      </h2>

      <div className="flex items-center justify-center gap-8">
        <div className="relative mt-4 h-30 w-30 md:h-36 md:w-36 bg-linear-to-b from-white/80 to-[#e7d7fb] rounded-[40px] flex items-end justify-center gif-box-shadow">
          <img
            src="/gifs/holding-heart.gif"
            className="h-20 md:h-24 drop-shadow-xl"
            alt="heart"
          />
        </div>
        <div className="relative mt-4 h-30 w-30 md:h-36 md:w-36 bg-linear-to-b from-white/80 to-[#ffdde6] rounded-[40px] flex items-end justify-center gif-box-shadow">
          <img
            src="/gifs/holding-heart.gif"
            className="h-20 md:h-24 drop-shadow-xl scale-x-[-1]"
            alt="heart"
          />
        </div>
      </div>

      <div className={`relative mt-4 h-44 md:h-48 bg-linear-to-b from-white/80 to-rose-200 w-full rounded-[40px] flex justify-center gif-box-shadow`}>
        <p className="mt-7 md:mt-9 opacity-70 flex gap-1">
          <span><MoveDown size={14} className="mt-[5px]" /></span>
          Tap to see message
          <span><MoveDown size={14} className="mt-[5px]" /></span>
        </p>
        <div onClick={() => setOpen(!open)} className={`bg-rose-50 px-5 pt-10 pb-20 rounded-[36px] text-center msg-card absolute bottom-0 h-0 ${open && "h-[228%] md:h-[233%]"} overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)] cursor-pointer`}>
          <h2 className="text-5xl md:text-6xl font-dancing-script font-bold mb-4 text-secondary mt-3 md:mt-0">I'm Sorry</h2>
          <p className="md:text-lg max-h-60 md:max-h-64 overflow-y-auto">{message}</p>
        </div>
      </div>
    </div >
  )
}