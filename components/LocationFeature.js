import React from "react";
import IntroMap   from "@/components/maps/IntroMap"
import Link from '@/components/Link'

const  firstViewState = {
  longitude: -73.9993101,
  latitude: 40.717595,
  zoom: 16,
  bearing: 0,
  pitch: 40,
}

const  secondViewState = {
  longitude: -74.0005348,
  latitude: 40.7184369,
  zoom: 16,
  bearing: 0,
  pitch: 40,
}



const thirdViewState = {
  longitude: -73.89619606312276,
  latitude:  40.75252245990084,                 
  zoom: 16,
  bearing: 0,
  pitch: 40,
}

export const Feature = () => {
    return (
      <div className="px-4 mb-20 bg-darkBase py-20 " >
        <div className="ml-24 mb-4  border-t-8 border-accentRed w-52">
            
        </div>
        <div className=" text-5xl ml-24 mb-20 font-semibold text-white"> LPCV Pilot Locations</div>
        <div className="grid gap-32 justify-center row-gap-5 lg:grid-cols-3 xl:mr-32 xl:ml-32">
          <div className="relative">
            
            <div className="relative p-5 bg-white rounded-sm">
              <div className="flex flex-col mb-2 lg:items-center lg:flex-row">

              </div>
              <div className=" h-96">
              <IntroMap VIEW_STATE={firstViewState} LONG={-73.9993101} LAT={40.717595}  />
              </div>
            </div>
            <div className="flex justify-center mt-10 text-2xl font-space font-bold hover:text-accentRed text-white mt-8 text-center cursor-pointer"><Link href="/dashboard">Center & Baxter &#x2192;</ Link></div>
          </div>
          <div className="relative  ">

            <div className="relative p-5 bg-white rounded-sm ">
              <div className="flex flex-col mb-2 lg:items-center lg:flex-row ">

            
              </div>

              <div className=" h-96">
              <IntroMap VIEW_STATE={secondViewState} LONG={-74.0005348} LAT={40.7184369}  />


              </div>
            </div>
            <div className="flex justify-center mt-10 text-2xl font-space font-bold hover:text-accentRed text-white mt-8 text-center cursor-pointer "> <Link href="/dashboard">Canal & Lafayette &#x2192;</Link></div>
          </div>
          <div className="relative">

            <div className="relative p-5 bg-white rounded-sm">
              <div className="flex flex-col mb-2 lg:items-center lg:flex-row">

      

              </div>
              <div className=" h-96">
              <IntroMap VIEW_STATE={thirdViewState} LONG={-73.89619606312276} LAT={40.75252245990084}  />
              </div>
            </div>
            <div className="flex justify-center mt-10 text-2xl font-space font-bold hover:text-accentRed text-white mt-8 text-center cursor-pointer "><Link href="/dashboard">34th and 70th &#x2192;</Link></div>
          </div>
        </div>
      
      </div>
    );
  };