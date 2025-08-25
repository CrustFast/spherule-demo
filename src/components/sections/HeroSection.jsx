'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const HeroSection = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const statsRef = useRef(null);
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    if (isVideoLoaded) {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.to(videoRef.current, {
        opacity: 0.5,
        duration: 1.5,
        ease: 'power2.inOut'
      });

      tl.fromTo(titleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.5"
      );
      tl.fromTo(subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.6"
      );
      tl.fromTo(buttonRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.5 },
        "-=0.5"
      );
      tl.fromTo(statsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.2"
      );
    }
  }, [isVideoLoaded]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVideoLoad = () => {
      setIsVideoLoaded(true);
    };

    if (video.readyState >= 4) {
      handleVideoLoad();
    } else {
      video.addEventListener('loadeddata', handleVideoLoad);
    }

    return () => {
      video.removeEventListener('loadeddata', handleVideoLoad);
    };
  }, []);

  return (
    <section ref={heroRef} className="relative h-screen w-full flex flex-col justify-center items-center text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-black -z-10">
        <video
          ref={videoRef}
          preload="metadata"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-0"
        >
          <source src="/norway.webm" type="video/webm" />
          <source src="/norway.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="text-center px-4">
        <h1 ref={titleRef} className="text-4xl md:text-6xl font-semibold mb-4 leading-tight">
          Discover Norway's <br /> Breathtaking Beauty
        </h1>
        <p ref={subtitleRef} className="max-w-xl mx-auto mb-8 text-base md:text-lg text-gray-200">
          Embark on a journey through Norway's stunning fjords, vibrant cities, and Northern Lights. Your gateway to unforgettable experiences!
        </p>
        <button ref={buttonRef} className="bg-black text-white font-medium py-3 px-8 rounded-full text-base hover:bg-gray-800 transition-colors">
          Explore now
        </button>
      </div>

      <div ref={statsRef} className="absolute bottom-0 w-full max-w-5xl py-8 px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-2xl font-reguler">3K+</h3>
            <p className="text-gray-300">Beautiful Destinations</p>
          </div>
          <div>
            <h3 className="text-2xl font-reguler">8+</h3>
            <p className="text-gray-300">Years of Expertise</p>
          </div>
          <div>
            <h3 className="text-2xl font-reguler">10K+</h3>
            <p className="text-gray-300">Happy Travelers</p>
          </div>
          <div>
            <h3 className="text-2xl font-reguler">4.5</h3>
            <p className="text-gray-300">User Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;