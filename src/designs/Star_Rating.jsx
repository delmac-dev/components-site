import { useState } from 'react'
import Wrapper from '../components/Wrapper';
import { FaArrowRightLong, FaStar } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const Star_Rating = () => {
  const [open, setOpen] = useState(false);
  const starArray = new Array(5).fill(null);

  return (
    <Wrapper title={"Star Trick"}>
        {/* button */}
        <button onClick={() => setOpen(true)} className="absolute z-10 px-3 py-2 rounded-md bg-accent text-accent-foreground flex items-center gap-3 hover:bg-accent/80">
          Feedback
          <FaArrowRightLong />
        </button>
        {/* modal */}
        <div className={`relative ${open ? "z-20 opacity-100 scale-1" : "z-0 opacity-0 scale-0"} max-w-md bg-card text-card-foreground border border-border w-full p-8 h-[27rem] rounded-lg shadow flex flex-col items-center transition-all ease-in duration-100`}>
          <button onClick={() => setOpen(false)} className="absolute right-4 top-4 p-0.5 rounded-sm">
            <IoMdClose size={24} />
          </button>
          <h2 className="relative text-4xl mt-7">Rate your experience</h2>
          <p class="text-lg mt-4 w-3/4 text-center text-foreground/50">We love to know your opinion! How satisfied were you with us.</p>
          <div className="rating relative flex w-full h-20 top-8 justify-center items-center flex-row-reverse rounded-md gap-5">
            {starArray.map((_, index) => (
              <Star key={index} index={starArray.length - index} />
            ))}
          </div>
          <button onClick={() => setOpen(false)} className="relative mt-16 text-2xl py-3 px-5 rounded-md bg-primary hover:bg-primary/90 text-foreground font-semibold">
            Submit
          </button>
        </div>
    </Wrapper>
  )
}

export default Star_Rating

const Star = ({index}) => (
  <>
    <input type="radio" name="rating" id={`rating_${index}`} className="hidden peer" />
    <label htmlFor={`rating_${index}`} className='text-foreground/50 cursor-pointer relative flex transition-colors duration-300 peer-checked:text-yellow-600 hover:peer-checked:text-yellow-700 hover:text-yellow-700 peer/label peer-hover/label:text-yellow-700'><FaStar size={40} /></label>
  </>
)