import React, {useEffect, useRef, useState} from 'react';
import Car from '../assets/car/car.mp4';
import Truck from '../assets/truck.mp4';
import CompleteBodyImg from '../assets/car/complete_body.png';
import ExteriorImg from '../assets/car/exterior.png';
import FrontImg from '../assets/car/front.png';
import TrunkImg from '../assets/car/trunk.png';
import CarFrontVideo from '../assets/car/front.mp4';
import CarCabinVideo from '../assets/car/cabin.mp4';
import CarExteriorVideo from '../assets/car/exterior.mp4';
import CarTrunkVideo from '../assets/car/trunk.mp4';
import {FaPlay, FaPause} from "react-icons/fa";

const parts = [
  {
    id: 'complete',
    label: 'Complete body',
    image: CompleteBodyImg,
    video: Car
  }, {
    id: 'front',
    label: 'Front',
    image: FrontImg,
    video: CarFrontVideo
  }, {
    id: 'cabin',
    label: 'Cabin',
    image: CompleteBodyImg,
    video: CarCabinVideo
  }, {
    id: 'trunk',
    label: 'Trunk',
    image: TrunkImg,
    video: CarTrunkVideo
  }, {
    id: 'exterior',
    label: 'Exterior',
    image: ExteriorImg,
    video: CarExteriorVideo
  }
];

const ScrollSection = () => {
  const [section,
    setSection] = useState('passenger');
  const [activePart,
    setActivePart] = useState('complete');
  const [isPlaying,
    setIsPlaying] = useState(true);
  const [progress,
    setProgress] = useState(0);

  const videoRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
  
    if (video) {
      video.pause(); // stop current playback
      video.load();  // load the new source
  
      const handleCanPlay = () => {
        video.play().catch((err) => {
          console.warn('Play failed:', err);
        });
        setIsPlaying(true);
      };
  
      video.addEventListener('canplay', handleCanPlay);
  
      return () => {
        video.removeEventListener('canplay', handleCanPlay);
      };
    }
  }, [section, activePart]);
  

  useEffect(() => {
    const handleScroll = () => {
      const triggerTop = triggerRef
        .current
        .getBoundingClientRect()
        .top;
      const isCommercial = triggerTop < window.innerHeight / 2;
      setSection(isCommercial
        ? 'commercial'
        : 'passenger');

      // Reset part to complete when switching section
      setActivePart('complete');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.load();
      video.play();
      setIsPlaying(true);
    }
  }, [section, activePart]);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (!video) 
      return;
    
    if (isPlaying) {
      video.pause();
    } else {
      video.currentTime = 0;
      video.play();
    }

    setIsPlaying(!isPlaying);
  };

  const selectedPart = parts.find((p) => p.id === activePart);

  return (
    <div className="relative">
      
      {/* Sticky Section */}
      <div className="h-screen sticky top-0 bg-black text-white flex">
        {/* LEFT PANEL */}
        <div className="w-1/2 flex flex-col justify-center px-16 space-y-10">
          <div>
            <div
              className={section === 'passenger'
              ? 'text-white'
              : 'text-gray-600'}>
              <h1 className="text-3xl font-bold mb-2">Passenger vehicles</h1>
              <p>Revving up innovation from<br/>interior to exterior.</p>
            </div>
            <div
              className={section === 'commercial'
              ? 'text-white mt-6'
              : 'text-gray-600 mt-6'}>
              <h1 className="text-3xl font-bold mb-2">Commercial vehicles</h1>
              <p>Advancing engineering<br/>for heavy-duty vehicles.</p>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="w-1/2 flex flex-col items-center justify-center relative">
          {/* Video */}
          <video
            ref={videoRef}
            key={`${section}-${activePart}`}
            muted
            playsInline
            loop
            className="w-full h-auto">
            <source
              src={section === 'passenger'
              ? selectedPart
                ?.video
                : Truck}
              type="video/mp4"/>
          </video>

          {/* Part Selector (only for passenger) */}
          {section === 'passenger' && (
            <div className="absolute bottom-6 flex gap-6 items-center">
              {parts.map((part) => (
                <div
                  key={part.id}
                  onClick={() => setActivePart(part.id)}
                  className={`flex flex-col items-center text-sm cursor-pointer ${activePart === part.id
                  ? 'text-white'
                  : 'text-gray-400'}`}>
                  <div
                    className={`w-10 h-6 rounded overflow-hidden ${activePart === part.id
                    ? 'opacity-100'
                    : 'opacity-50'}`}>
                    <img src={part.image} alt={part.label} className="w-full h-full object-cover"/>
                  </div>
                  <span className="mt-1">{part.label}</span>
                </div>
              ))}

              {/* Play/Pause Button (moved here) */}
              <button
                onClick={handlePlayPause}
                className="relative w-12 h-12 rounded-full ml-4 flex items-center justify-center group">
                <svg
                  className="absolute top-0 left-0 w-full h-full transform -rotate-90"
                  viewBox="0 0 36 36">
                  <circle
                    className="text-gray-600"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    cx="18"
                    cy="18"
                    r="16"/>
                  <circle
                    className="text-white"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    cx="18"
                    cy="18"
                    r="16"
                    strokeDasharray="100"
                    strokeDashoffset={100 - progress}
                    strokeLinecap="round"
                    style={{
                    transition: 'stroke-dashoffset 0.3s ease'
                  }}/>
                </svg>
                <div className="relative z-10 text-white">
                  {isPlaying
                    ? <FaPause className="w-4 h-4"/>
                    : <FaPlay className="w-4 h-4 ml-[1px]"/>}
                </div>
              </button>

            </div>
          )}
        </div>
      </div>

      {/* Scroll trigger */}
      <div ref={triggerRef} className="h-screen"></div>
    </div>
  );
};

export default ScrollSection;
