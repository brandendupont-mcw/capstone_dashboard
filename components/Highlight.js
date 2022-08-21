
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";



const Highlight = () => {


//   <div className="flex-grow border-t-2 border-white"></div>

    return (
    
<aside
  className="overflow-hidden bg-gray sm:grid sm:grid-cols-2 sm:items-center"
>
  <div className="p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="max-w-xl mx-auto text-center sm:text-left ">
      <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
         We Developed and Piloted an In-House Pedestrian Counter that Runs on the Edge
      </h2>

      <p className="hidden text-gray-700 md:mt-4 md:block">
       Our NYU CUSP capstone program partnered with the Smart Cities IoT Lab at the NYC Office of CTO and the New York City DOT Pedestrian Unit. We developed an open-sourced pedestrian tracking system that can be run a on low powered battery operated device (Google’s Coral Edge TPU). With close to industry level accuracy, it can be utilized by City agencies to count pedestrians as they move through public space in the city.
      </p>

      <div className="mt-4 md:mt-8">
        <a
          href="#"
          className="relative inline-block group focus:outline-none focus:ring bg-electricBlue focus:ring-accentRed"
        >
          <span
            className="relative z-10 block px-12 py-3 text-sm font-medium text-white transition  rounded group-hover:scale-105"
          >
           Read More About Our Pilot Below
          </span>

          <span
            className="absolute inset-0 transition scale-105 rounded bg-gray-500/25 -rotate-3 group-hover:rotate-0"
          ></span>
        </a>
      </div>
    </div>
  </div>

  <img
    alt="#"
    src="https://lh3.googleusercontent.com/UU-kL1rnVc3ADw3Dyw6i_R8GKT75SERhsMrx7M4hIVW5zBOxdLkibaY6nt-FzfUQuM6c7qeQJXRHUw3MB36aOWBCA49fTORMy5pdyg=w2000-rw"
    className="object-cover w-full h-full sm:h-[calc(100%_-_2rem)] md:h-[calc(100%_-_4rem)] sm:rounded-tl-[30px] md:rounded-tl-[60px] sm:self-end border-l-4 border-t-4 border-accentRed"
  />
</aside>

      
    );
  };

export default Highlight


