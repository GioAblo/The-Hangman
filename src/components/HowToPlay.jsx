import { useNavigate } from "react-router-dom"
import arrow from "../assets/back.png"

const HowToPlay = () => {

    const navigate = useNavigate()

    const back = () =>{
        navigate('/')
      }

  return (
    <div className="flex justify-center pt-[150px] lg:pt-[200px] lg:p-14 p-10">
        
        <div className=" bg-[#263DA9] max-w-[500px] p-5  rounded-3xl "> 
            <button className="p-3 sm:p-6 bg-[#F275FD] rounded-full" onClick={() => back()}>
                <img className="w-4 sm:w-6" style={{filter: "invert(1)"}} src={arrow} />
            </button>
            <div className="mt-6 sm:mt-10 text-xl md:text-3xl text-center sm:text-2xl">
                Guess letters to help you figure out an unknown word. With more than 8  wrong letter guesses, you'll be hanged!
            </div>
        </div>  
        
    </div>
  )
}

export default HowToPlay