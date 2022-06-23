import * as React from 'react';
import {render} from 'react-dom';
import Map, {Marker} from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';


function FirstMap() {

    return (
        <div className='flex justify-center '>
        <div className='w-96 h-96 rounded-full overflow-hidden'>

      <Map

        initialViewState={{
          latitude: 37.8,
          longitude: -122.4,
          zoom: 14
        }}

        mapStyle="mapbox://styles/branden-dupont/ckrdufy001ftm17mtemp7sgwl"
        mapboxAccessToken={'pk.eyJ1IjoiYnJhbmRlbi1kdXBvbnQiLCJhIjoiY2lmeWZqcXVhNTJwdHUzbTJwbGx2NjljNSJ9.fbeofSfEbOnewOSrZ-wMqA'}
      >

      </Map>
      </div>
      </div>
    );
  }

export default FirstMap