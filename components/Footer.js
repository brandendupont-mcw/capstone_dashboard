
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";



const Footer = () => {


//   <div className="flex-grow border-t-2 border-white"></div>

    return (
    

<footer className="bg-accentRed">
  <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
    <div className="mt-20 bg-accentRed"></div>
  <div className="flex sm:flex-row flex-col justify-center gap-0 justify-items-center mt-10 mb-20">
<img width="400" height="300" className="border-none" src='https://www.floodnet.nyc/wp-content/uploads/2021/03/nyu-logo.png'></img>
  <img width="350" height="300" className="border-none" src='https://www.floodnet.nyc/wp-content/uploads/2021/03/nyc-logo.png'></img>
  </div>
  <div className="pt-8 mt-12 border-t border-white ">
    </div>
  <div>
</div>

  <div className="sm:grid sm:grid-cols-2 flex flex-col grid-cols-1 grid-flow-col gap-4 justify-items-center">
  <div className="">

    <div className="text-3xl font-bold text-white">Team</div>
    <div className="text-darkBase font-space text-md  sm:justify-end mt-6" >

<ul className="space-y-2 text-white">
<li>
<a className="hover:border-b-2 hover:border-white cursor-pointer" href="https://www.linkedin.com/in/abdulaziz-alaql-11483569/">Abdulaziz Alaql</a>
</li>

<li>
<a className="hover:border-b-2 hover:border-white cursor-pointer" href="https://www.linkedin.com/in/alec-bardey-b1278779/"> Alec Bardey</a>
</li>
<li>
<a className="hover:border-b-2 hover:border-white cursor-pointer" href="https://www.linkedin.com/in/turbold-baatarchuluu-194b73a2/"> Turbold Baatarchuluu </a>
</li>
<li>
<a className="hover:border-b-2 hover:border-white cursor-pointer" href="https://www.linkedin.com/in/branden-dupont-b8a70254/"> Branden DuPont </a>
</li>
</ul>
</div>
  
<div className="">


</div>


  </div>
  

  <div className="">

<div className="text-3xl font-bold text-white ">Project Partners</div>
<div className="text-white font-space text-md  sm:justify-end mt-6" >

<ul className="space-y-2  mr-4">
<li>
<a className="hover:border-b-2 hover:border-white cursor-pointer" href="https://www.linkedin.com/in/abdulaziz-alaql-11483569/">Paul Rothman, Director, Smart Cities + IoT at the New York City Office of Technology and Innovation </a>
</li>
<hr></hr>
<li>
<a className="hover:border-b-2 hover:border-white cursor-pointer" href="https://engineering.nyu.edu/faculty/chen-feng"> Chen Feng, Assistant Professor of Civil and Urban Engineering at New York University</a>
</li>
<hr></hr>
<li>
<a className="hover:border-b-2 hover:border-white cursor-pointer" href="https://www.linkedin.com/in/casey-gorrell-65350949">Casey Gorrell, Senior Project Manager at New York City Department of Transportation</a>
</li>
<hr></hr>
</ul>
</div>
</div>


  
</div>



  </div>
</footer>

      
    );
  };

export default Footer


