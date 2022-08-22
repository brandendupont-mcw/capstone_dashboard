import React, { PureComponent }  from "react";
import IntroMap   from "@/components/maps/IntroMap"
import Link from '@/components/Link'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label, LabelList, ResponsiveContainer } from 'recharts';



const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },]

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

  const data = [{"name":"Accuracy","value":0.87}];
  const data2 = [{"name":"Accuracy","value":0.93}];
  const data3 = [{"name":"Accuracy","value":0.87}]

    return (
      <div className="px-4  bg-darkBase py-20" >
        <div className="sm:ml-24 mb-4  border-t-8 border-accentRed w-52">
            
        </div>
        <div className=" text-5xl sm:ml-24 font-semibold text-white"> LPCV Pilot Locations</div>
        <div className="sm:text-lg xl:ml-24 mt-6 mr-6 lg:ml-10  text-white  max-w-xl"> At three locations in NYC, we validated our pedestrian tracking model on 7 randomly selected 15-min DOT pedestrian videos. We acheived an accuracy of <span className="bg-accentRed text-white pr-1 pl-1">85 - 93%</span>. Click to view a pilot dashboard. <div className="text-darkBase max-w-sm font-bold mt-2 flex hover:border-darkBase"><a className="" href="https://www.canva.com/design/DAFGB3uAilo/L_WfZriy0ZMs2lu55Tprdw/view?utm_content=DAFGB3uAilo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">Action Toolkit </a> <a href="https://www.canva.com/design/DAFGB3uAilo/L_WfZriy0ZMs2lu55Tprdw/view?utm_content=DAFGB3uAilo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" className="ml-2 over:border-darkBase"></a></div>
        </div>
        <div className="grid 2xl:gap-32 xl:gap-10 sm:gap-4 justify-center row-gap-5 lg:grid-cols-3 xl:mr-32 xl:ml-32">
          <div className="relative">
            
          <div className="flex justify-center mt-10 xl:text-3xl lg:text-xl font-space font-bold hover:text-accentRed text-white mb-6 text-center cursor-pointer"><Link href="/dashboard">Center & Baxter &#x2192;</ Link></div>
            <div className="relative p-5 bg-white rounded-sm">
              
              <div className="flex flex-col mb-2 lg:items-center lg:flex-row">

              </div>
              <div className="w-48 h-72">
              <IntroMap VIEW_STATE={firstViewState} LONG={-73.9993101} LAT={40.717595}  />
              </div>
            </div>
            <div className="xl:w-[350px] lg:w-[250px] h-14 mt-4 justify-items-center ">
            <ResponsiveContainer width="100%" height="100%">
	<BarChart 
            data={data}
            layout="vertical" barCategoryGap={1}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
      <XAxis stroke="white" type="number"  />
       <YAxis stroke="white" type="category" width={80} padding={{ left: 20}} dataKey="name"/>
            
       <Bar 
           dataKey="value" 
           fill="#E1004B"
           >     <LabelList dataKey="value" position="insideTopRight"  stroke="white"/></Bar>
           
      </BarChart>
      </ResponsiveContainer>
      </div>
          </div>
          <div className="relative  ">
          <div className="flex justify-center mt-10 xl:text-3xl lg:text-xl  font-space font-bold hover:text-accentRed text-white mb-6 text-center cursor-pointer"><Link href="/dashboard">Canal & Lafayette &#x2192;</ Link></div>
            <div className="relative p-5 bg-white rounded-sm ">
              <div className="flex flex-col mb-2 lg:items-center lg:flex-row ">

            
              </div>

              <div className="w-48  h-72">
              <IntroMap VIEW_STATE={secondViewState} LONG={-74.0005348} LAT={40.7184369}  />


              </div>
              
            </div>
            <div className="xl:w-[350px] lg:w-[250px] h-14 mt-4 justify-items-center ">
            <ResponsiveContainer width="100%" height="100%">
	<BarChart 
            data={data2}
            layout="vertical" barCategoryGap={1}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
      <XAxis stroke="white" type="number"  />
       <YAxis stroke="white" type="category" width={80} padding={{ left: 20}} dataKey="name"/>
            
       <Bar 
           dataKey="value" 
           fill="#E1004B"
           >     <LabelList dataKey="value" position="insideTopRight"  stroke="white"/></Bar>
           
      </BarChart>
      </ResponsiveContainer>
      </div>
          </div>
          <div className="relative">
          <div className="flex justify-center mt-10 xl:text-3xl lg:text-xl  font-space font-bold hover:text-accentRed text-white mb-6 text-center cursor-pointer"> <Link href="/dashboard">70th and 34th &#x2192;</Link></div>
            <div className="relative p-5 bg-white rounded-sm">
              <div className="flex flex-col mb-2 lg:items-center lg:flex-row">

      

              </div>
              <div className="w-48  h-72">
              <IntroMap VIEW_STATE={thirdViewState} LONG={-73.89619606312276} LAT={40.75252245990084}  />
              
              </div>
            </div>
            <div className="xl:w-[350px] lg:w-[250px] h-14 mt-4 justify-items-center ">
            <ResponsiveContainer width="100%" height="100%">
	<BarChart 
            data={data3}
            layout="vertical" barCategoryGap={1}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
      <XAxis stroke="white" type="number"  > 
      </ XAxis>
       <YAxis stroke="white" type="category" width={80} padding={{ left: 20}} dataKey="name">

        </YAxis>
            
       <Bar 
           dataKey="value" 
           fill="#E1004B"
           >     <LabelList dataKey="value" position="insideTopRight"  stroke="white"/></Bar>
           
      </BarChart>
      </ResponsiveContainer>
      </div>
          </div>
        </div>
      
      <div className="mb-20 bg-darkBase"></div>
      </div>
    );
  };