import React, { Suspense, useState } from "react";
import { myProjects } from "../constants/index.js";
import { Canvas } from "@react-three/fiber"
import { Center, OrbitControls } from '@react-three/drei'
import  CanvasLoader  from '../components/CanvasLoader.jsx'
import DemoComputer from "../components/DemoComputer.jsx";

const Project = () => {
  const projectCount = myProjects.length
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0)
  const currentProject = myProjects[selectedProjectIndex];
  const handleNavigation = (direction) =>{
    setSelectedProjectIndex((prevIndex)=>{
        if(direction==='previous'){
            return prevIndex === 0 ? projectCount -1 : prevIndex - 1 
        }else{
            return prevIndex === projectCount -1 ? 0 : prevIndex + 1
        }
    })
  }
  return (
    <section className="c-space my-20 ">
      <p className="head-text">My Work</p>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            <img
              src={currentProject.spotlight}
              alt=""
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>
          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={currentProject.logoStyle}
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.5 42V37.5H12V34.5H16.5V13.5H12V10.5H18.5V6H21.5V10.5H27V6H30V10.65C31.8 11.0167 33.25 11.9 34.35 13.3C35.45 14.7 36 16.2667 36 18C36 18.9333 35.8167 19.8583 35.45 20.775C35.0833 21.6917 34.55 22.5167 33.85 23.25C35.15 23.9167 36.1667 24.8583 36.9 26.075C37.6333 27.2917 38 28.6 38 30C38 32.0667 37.275 33.8333 35.825 35.3C34.375 36.7667 32.6 37.5 30.5 37.5H30V42H27V37.5H21.5V42H18.5ZM19.5 22.5H28.5C29.7667 22.5 30.8333 22.0583 31.7 21.175C32.5667 20.2917 33 19.2333 33 18C33 16.7333 32.5667 15.6667 31.7 14.8C30.8333 13.9333 29.7667 13.5 28.5 13.5H19.5V22.5ZM19.5 34.5H30.5C31.7667 34.5 32.8333 34.0583 33.7 33.175C34.5667 32.2917 35 31.2333 35 30C35 28.7333 34.5667 27.6667 33.7 26.8C32.8333 25.9333 31.7667 25.5 30.5 25.5H19.5V34.5Z"
                fill="#AA3C304D"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>
            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">{currentProject.tags.map((tag,index)=>(
                <div key={index} className="tech-logo">
                    <img src={tag.path} alt="" />
                </div>
            ))}</div>
            <a className="flex items-center gap-2 cursor-pointer text-white-600" href={""} target="_blank" rel="noreferrer">
                <p>Check Live Site</p>
                <img src="/assets/arrow-up.png" className="w-3 h-3" alt="" />
            </a>
          </div>
          <div className="flex justify-between items-center mt-7">
            <button className="arrow-btn" onClick={()=> handleNavigation('previous')}>
                <img src="/assets/left-arrow.png" className="w-4 h-4" alt="" />
            </button>
            <button className="arrow-btn" onClick={()=> handleNavigation('next')}>
                <img src="/assets/right-arrow.png" className="w-4 h-4" alt="" />
            </button>
          </div>
        </div>

        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
            <Canvas>
                <ambientLight intensity={Math.PI}/>
                <directionalLight position={[10,10,5]}/>
                <Center>
                    <Suspense fallback={<CanvasLoader/>}>
                        <group scale={2} position={[0,-3,0]} rotation={[0,-0.1,0]}>
                            <DemoComputer texture={currentProject.texture}/>
                        </group>
                    </Suspense>
                </Center>
                <OrbitControls maxPolarAngle={Math.PI/2} enableZoom={false}/>
            </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Project;
