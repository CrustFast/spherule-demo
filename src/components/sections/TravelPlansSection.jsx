'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stays = [
  {
    image: '/img/img-1.png', 
    title: 'Fjordview Cabin Retreat',
  },
  {
    image: '/img/img-2.png', 
    title: 'Northern Lights Lodge',
  },
  {
    image: '/img/img-3.png', 
    title: 'Oslo Forest Hideaway',
  },
];

const TravelPlansSection = () => {

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
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

      tl.from(titleRef.current, { opacity: 0, y: 50 })
        .from(paragraphRef.current, { opacity: 0, y: 40 }, "<0.2") 
        .from(buttonRef.current, { opacity: 0, scale: 0.9, y: 20 }, "<0.3");

    }, sectionRef); 

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
        <h2 ref={titleRef} className="text-3xl sm:text-4xl font-regular text-gray-900 tracking-tight">
            Flexible Travel Plans for Every Explorer
          </h2>
          <p ref={paragraphRef} className="mt-4 text-md text-gray-600">
            Set your travel goals, optimize your itinerary, and explore Norway with ease. Our smart technology helps you plan the perfect adventure, from fjord cruises to Northern Lights excursions.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stays.map((stay) => (
            <div 
              key={stay.title} 
              className="rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative w-full h-88"> 
                <Image
                  src={stay.image}
                  alt={`View of ${stay.title}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-black text-white font-semibold py-3 px-8 rounded-full hover:bg-gray-800 transition-colors duration-300">
            Explore more
          </button>
        </div>
      </div>
    </section>
  );
};

export default TravelPlansSection;