import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";


const Statistic = () => {

  function Box(){

    const ref = useRef();
    
    useFrame(() => {
      ref.current.rotation.x -= .01
    })

    return(
      <mesh ref={ref}>
  <boxGeometry />
  <meshPhongMaterial color="yellow" />

    </mesh>
    )
  }



    return (
      <div className="w-full ">
        <div className="h-96">
      <Canvas>
        <Box>
        </Box>
      </Canvas>
      </div>
      </div>
    );
  };

export default Statistic