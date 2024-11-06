import { useNavigate } from "react-router-dom";
import nextbtn from "../assets/nextbtn.png"


function PopUp(props) {

    const navigate = useNavigate()

    const {setRandom, random, popUp, setPopUp, isNext, setHeall} = props;


   
    const next = () => {
        setRandom(random + 1)
        setPopUp(!popUp)
        setHeall(8)
    }
    

  return (
    <div className="">
    
        <div>
          {isNext ? <button className="Next bg-[#2563FD] rounded-2xl lg:px-6 lg:py-5 shadow-xl flex items-center gap-2 px-4 py-3 " onClick={() => next()}> <div className="lg:text-xl ">Next</div> <img className="w-4 h-4" style={{filter: "invert(1)"}} src={nextbtn} /> </button> :
                  <div className="Win flex flex-col items-center gap-5 lg:gap-10">
                   <div className="text-2xl lg:text-3xl" >You Win..</div>
                    <div className="flex items-center flex-col gap-4 lg:gap-5">
                      <button className="py-2 px-6 lg:text-[16px] text-[12px] shadow-xl   rounded-3xl bg-[#2563FD]" onClick={() => navigate('/category')}>NEW CATEGORY</button>
                      <button className="py-2 px-6 lg:text-[16px]  text-[12px] shadow-xl rounded-3xl bg-[#F275FD]" onClick={() => navigate('/')}>QUIT GAME</button>
                    </div>
                  </div>
        }
        </div>
      
        
        
    </div>
  )
}

export default PopUp