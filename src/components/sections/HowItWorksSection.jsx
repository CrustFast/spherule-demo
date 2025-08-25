'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { IoLocationOutline, IoBriefcaseOutline, IoMapOutline } from 'react-icons/io5';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: <IoLocationOutline className="h-6 w-6 text-gray-900" />,
    title: 'Choose Your Destination',
    description: 'Select from thousands of beautiful places',
  },
  {
    icon: <IoBriefcaseOutline className="h-6 w-6 text-gray-900" />,
    title: 'Personalize Your Trip',
    description: 'Get custom itineraries tailored to your preferences',
  },
  {
    icon: <IoMapOutline className="h-6 w-6 text-gray-900" />,
    title: 'Travel Effortlessly',
    description: 'Book and explore Norway without hassle',
  },
];

const HowItWorksSection = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null); 
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const featuresRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
        defaults: { ease: 'power3.out', duration: 0.8 },
      });

      tl.from(imageRef.current, { opacity: 0, x: 100, duration: 1 })
        .from(titleRef.current, { opacity: 0, y: 50 }, "-=0.8")
        .from(paragraphRef.current, { opacity: 0, y: 40 }, "<0.2")
        .from(featuresRef.current.children, {
          opacity: 0,
          y: 30,
          stagger: 0.2,
          duration: 0.5,
        }, "<0.2")
        .from(buttonRef.current, { opacity: 0, scale: 0.95, y: 20 }, "<0.3");

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = () => {
    gsap.to(imageRef.current.querySelector('img'), { 
      scale: 1.1, 
      duration: 0.4, 
      ease: 'power2.out' 
    });
  };

  const handleMouseLeave = () => {
    gsap.to(imageRef.current.querySelector('img'), { 
      scale: 1, 
      duration: 0.4, 
      ease: 'power2.out' 
    });
  };

  return (
    <section ref={sectionRef} className="bg-white py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="flex flex-col gap-y-8">
            <div className="max-w-md">
              <h2 ref={titleRef} className="text-3xl sm:text-4xl font-regular text-gray-900 tracking-tight">
                How Our Platform Works
              </h2>
              <p ref={paragraphRef} className="mt-4 text-md text-gray-600">
                Set your travel goals, optimize your itinerary, and explore Norway with ease. Our smart technology helps you plan the perfect adventure, from fjord cruises to Northern Lights excursions.
              </p>
            </div>
            <div ref={featuresRef} className="flex flex-col gap-y-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-x-4">
                  <div className="flex-shrink-0 bg-gray-100 rounded-full p-3">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                    <p className="mt-1 text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div ref={buttonRef}>
              <button className="bg-black text-white font-semibold py-3 px-6 rounded-full hover:bg-gray-800 transition-colors duration-300">
                Book your spot
              </button>
            </div>
          </div>

          <div 
            ref={imageRef} 
            className="w-full h-full rounded-xl shadow-lg overflow-hidden cursor-pointer" 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              src="/img/how-it-works.png" 
              alt="Beautiful fjord in Norway with a boat"
              width={600}
              height={600}
              className="object-cover w-full h-full" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;