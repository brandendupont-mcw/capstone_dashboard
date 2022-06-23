import React from "react";
import IntroMap  from "@/components/maps/IntroMap"

export const Feature = () => {
    return (
      <div className="px-4 mb-20 " >
        <div className="ml-24 mb-4  border-t-8 border-accentRed w-52">
            
        </div>
        <div className=" text-5xl ml-24 mb-20 font-semibold"> LPCV Pilot Locations</div>
        <div className="grid gap-2 justify-center row-gap-5 lg:grid-cols-3">
          <div className="relative ">
            
            <div className="relative p-5 bg-white rounded-sm">
              <div className="flex flex-col mb-2 lg:items-center lg:flex-row">

              </div>
              <IntroMap />
              <div className="flex justify-center mt-10 text-2xl font-space font-bold hover:text-accentRed  mt-8">10th and Jay St</div>
            </div>
          </div>
          <div className="relative  ">

            <div className="relative p-5 bg-white rounded-sm ">
              <div className="flex flex-col mb-2 lg:items-center lg:flex-row">

            
              </div>

              <IntroMap />
              <div className="flex justify-center mt-10 text-2xl font-space font-bold hover:text-accentRed  mt-8 ">Boerum Pl and Schermerhorn St</div>

            </div>
          </div>
          <div className="relative">
           
            <div className="relative p-5 bg-white rounded-sm">
              <div className="flex flex-col mb-2 lg:items-center lg:flex-row">

      
              </div>
              <IntroMap />
              <div className="flex justify-center mt-10 text-2xl font-space font-bold hover:text-accentRed mt-8">34th and 8 av</div>
            </div>
          </div>
        </div>
      
      </div>
    );
  };