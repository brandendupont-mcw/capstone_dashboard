import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";


const OpenPage = () => {


//   <div class="flex-grow border-t-2 border-white"></div>

    return (
      <div className="w-full min-h-screen bg-darkBase">

        <div className="flex p-10 mr-4  justify-end ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="white"  strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
            </div>
          
        <div className="font-black ml-20 pt-20 ">
        <div className="text-white font-space  text-8xl">
        Low-Power {<br></br>} <span className="">Computer-Vision  </span>{<br></br>} Counting Research
        </div>
        
        <div className="text-white font-libre text-md  mt-10 max-w-lg " >We piloted a machine learning model in NYC that counts pedestrians   on <span className="border-b-2 border-accentRed">  Low Powered Devices</span>.   </div>
        </div>

        <div className="text-white font-space mr-32 text-md  flex p-10 mr-4  justify-end mt-24 " >

            <ul>
            <li>
            Abdulaziz Alaql
            </li>

            <li>
            Alec Bardey
            </li>
            <li>
            Turbold Baatarchuluu
            </li>
            <li>
                Branden DuPont
            </li>
            </ul>
          </div>
        
          <div class="absolute bottom-4 text-white right-1/2   h-10 ">Scroll To Read More</div>

      </div>
      
    );
  };

export default OpenPage