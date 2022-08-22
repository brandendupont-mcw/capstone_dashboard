import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";



const OpenPage = () => {


//   <div class="flex-grow border-t-2 border-white"></div>

//https://images.unsplash.com/photo-1534657908974-53f7e6f1c1ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1975&q=80

    return (
      <div className="w-full min-h-screen bg-darkBase bg-[url(https://images.unsplash.com/photo-1571145551427-35601e8bcf3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80)]  bg-darkBas bg-blend-multiply bg-center bg-no-repeat bg-cover">

        <div className="flex p-10 sm:mr-4  justify-end ">

            </div>
          
        <div className="font-black sm:ml-20 pt-20 ml-4 ">
        <div className="text-white font-space  sm:text-8xl text-4xl">
        Low-Power {<br></br>} <span className="">Computer-Vision  </span>{<br></br>} Counting Research
        </div>
        
        <div className="text-white font-libre text-md  mt-10 max-w-lg " >4 NYU CUSP grad students piloted a machine learning model in NYC that counts pedestrians   on <span className="border-b-2 border-accentRed">  Low Powered Devices</span>.   </div>
        </div>


        <div className="text-white font-space sm:mr-32 text-md  flex p-10 mr-2  sm:justify-end  mt-24 " >

            <ul>
            <li>
            <a className="hover:border-b-2 hover:border-accentRed cursor-pointer" href="https://www.linkedin.com/in/abdulaziz-alaql-11483569/">Abdulaziz Alaql</a>
            </li>

            <li>
            <a className="hover:border-b-2 hover:border-accentRed cursor-pointer" href="https://www.linkedin.com/in/alec-bardey-b1278779/"> Alec Bardey</a>
            </li>
            <li>
            <a className="hover:border-b-2 hover:border-accentRed cursor-pointer" href="https://www.linkedin.com/in/turbold-baatarchuluu-194b73a2/"> Turbold Baatarchuluu </a>
            </li>
            <li>
            <a className="hover:border-b-2 hover:border-accentRed cursor-pointer" href="https://www.linkedin.com/in/branden-dupont-b8a70254/"> Branden DuPont </a>
            </li>
            </ul>
          </div>
        
          <div className="absolute bottom-4 text-white sm:right-1/2 sm:block hidden h-10 ">Scroll To Read More</div>

      </div>
      
    );
  };

export default OpenPage