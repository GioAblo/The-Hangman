import { useNavigate } from "react-router-dom"
import play from "../assets/play.png"



function Home() {

  const navigate = useNavigate();

  
  return (
    <div className="flex flex-col items-center">
        <div className="flex items-center bg-[#263DA9] flex-col p-11  mt-32 md:mt-40 lg:mt-48 lg:p-16 md:p-12 md:gap-6 lg:gap-10 rounded-3xl gap-4"> 
          <div className="md:text-xl lg:text-2xl">THE HANGMAN GAME</div>
          <button onClick={() => navigate('/category')}>
            <div className="bg-[#F275FD] p-4 md:p-6 lg:p-9 rounded-full">
              <img className="w-6 h-5 lg:w-8 lg:h-7  " style={{filter: "invert(1)", transform: "rotate(-8deg)"}} src={play}></img>
            </div>
          </button>
          <button className="rounded-3xl bg-[#2563FD] lg:py-4 lg:px-10 py-2 px-8">
            <button onClick={() => navigate('/howtoplay')} className="text-sm">HOW TO PLAY</button>
          </button>
        </div>  
        
    </div>
  )
}

export default Home