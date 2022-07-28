import React, { Component, Fragment } from "react";
import { useState, useEffect } from 'react';

import {useRef, useCallback} from 'react';
import DeckGL, {GeoJsonLayer, PolygonLayer, TripsLayer, FlyToInterpolator } from 'deck.gl';
import { MapView } from "@deck.gl/core";
import ReactMapGL, { Marker, ScaleControl, NavigationControl, MapRef, }  from "react-map-gl"
import { StaticMap } from "react-map-gl";
import Map from 'react-map-gl';
import {AmbientLight, PointLight, LightingEffect} from '@deck.gl/core';
import { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];


const Chart = ({data}) => {


 {
    return (
      <ResponsiveContainer width="95%" height="75%">
        <LineChart
          width={400}
          height={200}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 20,
          }}
        >

          <XAxis dataKey="Hour" stroke="white" />
          <YAxis stroke="white" />
          <Tooltip cursor={{ stroke: 'white', strokeWidth: 2 }}  
          wrapperStyle={{ backgroundColor: '#042D36', border: '1px solid white',  }} contentStyle={{backgroundColor: '#042D36'}} labelStyle={{color:'white'}}  />
          <Legend />
          <Line type="monotone" dataKey="Total" stroke="white" activeDot={{ r: 4 }} />
          <Line type="monotone" dataKey="NS-EB" stroke="#0BB7C2"  />
          <Line type="monotone" dataKey="NS-WB" stroke="#E1004B" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}



function DeckTest() {

    const AIR_PORTS =
  'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_airports.geojson';

  
// Source data CSV
    const DATA_URL = {
        BUILDINGS:
        'https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/trips/buildings.json', // eslint-disable-line
        TRIPS: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/trips/trips-v7.json' // eslint-disable-line
        
    };


    const countData = [{"Hour":8,"NS-EB":243,"NS-WB":186,"Total":429},{"Hour":9,"NS-EB":384,"NS-WB":237,"Total":621},{"Hour":10,"NS-EB":416,"NS-WB":280,"Total":696},{"Hour":11,"NS-EB":562,"NS-WB":378,"Total":940},{"Hour":12,"NS-EB":611,"NS-WB":499,"Total":1110},{"Hour":13,"NS-EB":650,"NS-WB":596,"Total":1246},{"Hour":14,"NS-EB":610,"NS-WB":684,"Total":1294},{"Hour":15,"NS-EB":528,"NS-WB":651,"Total":1179},{"Hour":16,"NS-EB":477,"NS-WB":610,"Total":1087},{"Hour":17,"NS-EB":446,"NS-WB":646,"Total":1092},{"Hour":18,"NS-EB":398,"NS-WB":462,"Total":860},{"Hour":19,"NS-EB":246,"NS-WB":282,"Total":528}]

    const newCountData = [{"Hour":8,"NS-EB":343,"NS-WB":286,"Total":629},{"Hour":9,"NS-EB":384,"NS-WB":237,"Total":621},{"Hour":10,"NS-EB":516,"NS-WB":380,"Total":896},{"Hour":11,"NS-EB":562,"NS-WB":378,"Total":940},{"Hour":12,"NS-EB":611,"NS-WB":499,"Total":1110},{"Hour":13,"NS-EB":650,"NS-WB":596,"Total":1246},{"Hour":14,"NS-EB":610,"NS-WB":684,"Total":1294},{"Hour":15,"NS-EB":628,"NS-WB":751,"Total":1379},{"Hour":16,"NS-EB":577,"NS-WB":710,"Total":1287},{"Hour":17,"NS-EB":546,"NS-WB":746,"Total":1292},{"Hour":18,"NS-EB":498,"NS-WB":562,"Total":1060},{"Hour":19,"NS-EB":246,"NS-WB":282,"Total":528}]



    const MAPBOX_ACCESS_TOKEN = "pk.eyJ1IjoiYnJhbmRlbi1kdXBvbnQiLCJhIjoiY2lmeWZqcXVhNTJwdHUzbTJwbGx2NjljNSJ9.fbeofSfEbOnewOSrZ-wMqA";
    const mapStyle = "mapbox://styles/branden-dupont/ckrdufy001ftm17mtemp7sgwl";


    /// use state
    const [time, setTime] = useState(0);
    const [animation] = useState({});

    const animate = () => {
    setTime(t => (t + animationSpeed) % loopLength);
    animation.id = window.requestAnimationFrame(animate);
    };

    /// use effect
    useEffect(() => {
    animation.id = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(animation.id);
    }, [animation]);


    const [address , setAddress] =  useState('Canal St Between Center & Baxter')

    const [newData , setNewData] =  useState(countData);
    const [totalCount, setTotalCount] = useState('11,082');

  
    

    // set data
    const buildings = DATA_URL.BUILDINGS

    const trips = DATA_URL.TRIPS
    const trailLength = 20




    const loopLength = 1800, // unit corresponds to the timestamp in source data
    animationSpeed = 1

    const ambientLight = new AmbientLight({
        color: [255, 255, 255],
        intensity: 1.0
      });
      
      const pointLight = new PointLight({
        color: [255, 255, 255],
        intensity: 2.0,
        position: [-74.05, 40.7, 8000]
      });
      
      const lightingEffect = new LightingEffect({ambientLight, pointLight});
      
      const material = {
        ambient: 0.1,
        diffuse: 0.6,
        shininess: 32,
        specularColor: [60, 64, 70]
      };
      
      const theme = {
        buildingColor: [255, 255, 255],
        trailColor0: [225, 0, 75],
        trailColor1: [225, 0, 75],
        material,
        effects: [lightingEffect]
      };



    const [viewport, setViewport] = useState({
        height: "100%",
        width: "100%"
      });

      const onClick = info => {
        if (info.object) {
          // eslint-disable-next-line
          alert(`${info.object.properties.name} (${info.object.properties.abbrev})`);
        }
      };



      const oldLayers = [
        // This is only needed when using shadow effects
        new PolygonLayer({
          id: 'buildings',
          data: buildings,
          extruded: true,
          wireframe: false,
          getPolygon: f => f.polygon,
          getElevation: f => f.height,
          getFillColor: theme.buildingColor,
         // material: theme.material
        }),
        new TripsLayer({
            id: 'trips',
            data: trips,
            getPath: d => d.path,
            getTimestamps: d => d.timestamps,
            getColor: d => (d.vendor === 0 ? theme.trailColor0 : theme.trailColor1),
            opacity: 0.8,
            widthMinPixels: 5,
            rounded: true,
            trailLength,
            currentTime: time,
      
            shadowEnabled: false
          }),
      ];

      const layers = [
        // This is only needed when using shadow effects
        new TripsLayer({
            id: 'trips',
            data: trips,
            getPath: d => d.path,
            getTimestamps: d => d.timestamps,
            getColor: d => (d.vendor === 0 ? theme.trailColor0 : theme.trailColor1),
            opacity: 0.8,
            widthMinPixels: 5,
            rounded: true,
            trailLength,
            currentTime: time,
      
            shadowEnabled: false
          }),
      ];

      //const mapRef = useRef(MapRef);




      const mapRef = useRef(null);

      
      const [INITIAL_VIEW_STATE  , setInitialViewState] =  useState( {
        longitude: -73.9993101,
        latitude: 40.717595,
        zoom: 18,
        bearing: 0,
        pitch: 40,
      });

      const goToNYC = useCallback(() => {
        setInitialViewState({
          longitude: -73.89619606312276,
          latitude:  40.75252245990084,                 
          zoom: 18,
          bearing: 0,
          pitch: 40,
          transitionDuration: 8000,
          transitionInterpolator: new FlyToInterpolator()
        })
      }, []);


      
      
    return (
        <Fragment>
        <div  className='flex justify-center '>
        <div className='w-96 h-96'>
       
        <DeckGL initialViewState={INITIAL_VIEW_STATE} controller={true}  layers={layers} >
        < Map
        
            reuseMaps
            mapStyle={"mapbox://styles/branden-dupont/cl61cd7tr007w14qnw3qskiui"}
            mapboxAccessToken={'pk.eyJ1IjoiYnJhbmRlbi1kdXBvbnQiLCJhIjoiY2lmeWZqcXVhNTJwdHUzbTJwbGx2NjljNSJ9.fbeofSfEbOnewOSrZ-wMqA'}
            ref={mapRef}
 
            
            >
              <NavigationControl position={'bottom-left'} />
                  <Marker longitude={-73.9993101} latitude={40.717595} anchor="bottom" >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20"  fill="#E1004B">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                </Marker>
                <Marker longitude={ -73.89619606312276} latitude={40.75252245990084} id=' Canal St & Lafayette St' anchor="bottom" >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20"  fill="#E1004B">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                </Marker>
               </Map >
                <div className="p-10 flex justify-end">
               <div className="bg-darkBase h-[500px] w-[450px] ">
                <div className="text-xl text-white pt-6 text-center font-space">{address}</div>
                <hr className="text-white mt-2"></hr>
                <div className="text-white text-center font-space p-2">Total daily pedestrian count: {totalCount}.
</div>
                <div className="text-white text-center font-space">Wednesday, March 23, 2022</div>
                <Chart data={newData } />
                <div className="text-white text-center font-space bg-darkBase pb-4 text-xl" onClick={() => { goToNYC(); setAddress('34th & 70th'); setNewData(newCountData); setTotalCount("12,082")}}><a>Next Intersection &#x2192;</a></div>


              </div>
              </div>
        

        </DeckGL>
        
        <style jsx>
        {`
          .root {
            position: absolute;
            top: 0;
            left: 0;
            height: 100vh;
            width: 100vw;
          }
        `}
      </style>
        </div>
        </div>
        </Fragment>
   
    );
  }

export default DeckTest