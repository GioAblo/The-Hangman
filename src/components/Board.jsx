import { useContext, useEffect, useState } from "react";
import data from "../assets/data.json"
import { AppContext } from "../App";
import PopUp from "./PopUp";
import { useNavigate } from "react-router-dom";
import arrow from "../assets/back.png"
import heart from "../assets/heart.png"

const letters = [ 'A', "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", 'M', "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", 'Z' ];

function Board() {

  const [answer, setAnswer] = useState('SPAIN');
  const [words, setWords] = useState([]); // Initialize with the length of `answer`
  const [heall, setHeall] = useState(8);
  const [popUp, setPopUp] = useState(false);
  const [isNext, setIsNext] = useState(true);
  const [lose, setLose] = useState(false)

  const [random, setRandom] = useState(0)

  const {category} = useContext(AppContext);

  const navigate = useNavigate()


  useEffect(() => {
    const getAnswers = () => {

      if (category && data[category]) {

        const selectedAnswer = data[category][random];
        setAnswer(selectedAnswer);
        setWords(Array(selectedAnswer.length).fill(''));

        
        
      }

    };
    
    
    
    getAnswers();
  }, [category, random]);



  

  const handleClick = (prop) => {

    const lastElement = data[category].slice(-1)
    const arrayAnswer = answer.split(''); 
   
   
    

    if (arrayAnswer.includes(prop)) {
      const indexArray = [];

      arrayAnswer.forEach((char, index) => {
        if (char === prop) {
          indexArray.push(index);
        }
      });


      // Create a copy of the current words state
      const updatedWords = [...words];

      
      // Update the copy with the letter at the correct indices
      indexArray.forEach(index => {
        updatedWords[index] = prop;
      });

      if (!updatedWords.includes('')) {
       
        if (lastElement[0] == answer) {
          setIsNext(false)
          
        }
        setPopUp(true)
      }
      
      // Set the updated words array to the state
      setWords(updatedWords);
      
    }else{
      setHeall(heall - 1)
        
      if (heall == 1) {
       setLose(true);
       
      }
      
    }
    
  }


  const repeat = () => {
    setRandom(0)
    setLose(false)
    setHeall(8)
  }

  useEffect(() => {
    

  },[random])

  return (
    <div className="p-7 pt-9">

      <div className="flex  justify-between items-center">
        <div className="flex gap-5 xl:gap-8 items-center">
          <button className="p-3 xl:p-6 bg-[#F275FD] rounded-full" onClick={() => navigate('/category')}>
            <img className="w-4  xl:w-8" style={{filter: "invert(1)"}} src={arrow} />
          </button>
          <div className="xl:text-2xl">{category}</div>
        </div>

        <div className="flex items-center gap-3">
          <div  className="xl:text-2xl">{heall}</div>
          <img style={{filter: "invert(1)"}} className="xl:w-8 w-6" src={heart} />
        </div>
      </div>

      
      { lose || popUp ? 

        <div className="MainPop bg-[#01011f78] absolute top-0 left-0 w-full h-screen flex justify-center items-center">
        
          <div className="innerPop bg-[#2C41AE] p-9 lg:p-16 lg:px-20 rounded-3xl">

            {lose ? 
         
            <div className="Lose flex flex-col items-center gap-5 lg:gap-10">
                <div className="text-2xl lg:text-3xl">You Lose..</div>
                <div className="flex items-center flex-col gap-4 lg:gap-5">
                  <button className="py-2 px-6 text-[12px] lg:text-[16px] shadow-xl   rounded-3xl bg-[#2563FD]" onClick={() => navigate('/category')}>CATEGORY</button>
                  <button className="py-2 px-6 text-[12px] shadow-xl lg:text-[16px]  rounded-3xl bg-[#2563FD]" onClick={() => repeat()}>REPEAT</button>
                  <button className="py-2 px-6  text-[12px] shadow-xl rounded-3xl lg:text-[16px] bg-[#F275FD]" onClick={() => navigate('/')}>QUIT GAME</button>
                </div>
              </div>
            
            : 
            <div >
                {popUp ? <PopUp random={random} setHeall={setHeall} isNext={isNext} lose={lose} setRandom={setRandom} popUp={popUp} setPopUp={setPopUp} /> : null}
            </div>
            } 
          </div>
      </div>
        :
        null

       }
      
      <div className="flex flex-col items-center mt-14 xl:mt-36 gap-20 xl:gap-32">
        <div className="flex gap-4 xl:gap-9">
          {words.map((word, index) => (
            <input className="  bg-[#2563FD] w-10 h-12 sm:w-11 sm:h-14 xl:w-14 xl:h-16 rounded-xl text-white xl:text-3xl text-center text-2xl  text-bold" key={index} value={word} type="text" readOnly />
          ))}
        </div>

        
          <div className="flex gap-3 xl:gap-5 flex-wrap ">
            {letters.map((letter, index) => (
              <button className="bg-white text-[#251670] w-10 h-8 sm:w-11 sm:h-9 sm:text-xl lg:w-14 lg:h-10 xl:w-16 xl:h-14 rounded-[8px] font-light lg:text-2xl xl:text-3xl cursor-pointer" onClick={() => handleClick(letter)} key={index}>
                {letter}
              </button>
            ))}
          </div>
         
      </div>
    </div>
  );
}

export default Board;
