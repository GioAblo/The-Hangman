import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AppContext } from "../App"
import arrow from "../assets/back.png"


const categories = ["Animal", "Countries", "Cities", "Movies", "TV Shows"]

function Category() {
  const {setCategory} = useContext(AppContext)
  const navigate = useNavigate()

  const back = () =>{
    navigate('/')
  }

  const play = (prop) => {
    setCategory(prop)
    navigate('/board')
  }



  return (
    <div className="px-8 py-7 sm:px-12 sm:py-10">

      <div className="flex gap-8 items-center">
        <button className="p-3 sm:p-6 bg-[#F275FD] rounded-full" onClick={() => back()}>
          <img className="w-4 sm:w-6" style={{filter: "invert(1)"}} src={arrow} />
        </button>
        <div className="text-2xl sm:text-3xl">Pick a category</div>
      </div>

      <div className="mt-14 sm:mt-20 flex flex-col sm:flex-wrap  sm:flex-row gap-5">
        {categories.map((res, index) => (
          <div className="  " key={index}>
            <button className="py-5 text-xl w-full sm:w-40  sm:h-32 sm:text-2xl  sm:rounded-3xl   rounded-xl bg-[#2563FD]" onClick={() => {play(res)}} >{res}</button>
          </div>
        ) )}
      </div>
      
    </div>
  )
}

export default Category