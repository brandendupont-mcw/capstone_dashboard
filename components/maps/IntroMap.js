import * as React from 'react';
import {render} from 'react-dom';
import Map, {Marker} from 'react-map-gl';
import DeckGL, {GeoJsonLayer, PolygonLayer, TripsLayer, FlyToInterpolator } from 'deck.gl';
import ReactMapGL, { ScaleControl, NavigationControl, MapRef, }  from "react-map-gl"
import {useRef, useCallback} from 'react';

import 'mapbox-gl/dist/mapbox-gl.css';


function FirstMap({VIEW_STATE, LAT, LONG }) {

  const INITIAL_VIEW_STATE  = VIEW_STATE

  const mapRef = useRef(null);

    return (
        <div className='flex justify-center '>
        <div className=' overflow-hidden'>

        <DeckGL initialViewState={INITIAL_VIEW_STATE} controller={true}  >
        < Map
        
            reuseMaps
            mapStyle={"mapbox://styles/branden-dupont/cl61cd7tr007w14qnw3qskiui"}
            mapboxAccessToken={'pk.eyJ1IjoiYnJhbmRlbi1kdXBvbnQiLCJhIjoiY2lmeWZqcXVhNTJwdHUzbTJwbGx2NjljNSJ9.fbeofSfEbOnewOSrZ-wMqA'}
            ref={mapRef}
 
            
            >
                  <Marker longitude={LONG} latitude={LAT} anchor="bottom" >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20"  fill="#E1004B">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                </Marker>
               </Map >

       
        

        </DeckGL>
        
      </div>
      </div>
    );
  }

export default FirstMap