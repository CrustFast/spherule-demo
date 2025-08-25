'use client';

import { useState, useEffect, useRef } from 'react';
import DestinationCard from '@/components/ui/DestinationCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

gsap.registerPlugin(ScrollTrigger);

const DUMMY_DESTINATIONS = [
  { city: 'Oslo', country: 'Norway', videoUrl: '/video/oslo.mp4' },
  { city: 'Bergen', country: 'Norway', videoUrl: '/video/bergen.mp4' },
  { city: 'Tromsø', country: 'Norway', videoUrl: '/video/Tromsø.mp4' },
  { city: 'Lofoten', country: 'Norway', videoUrl: '/video/lofoten.mp4' },
  { city: 'Stavanger', country: 'Norway', videoUrl: '/video/stavanger.mp4' },
];

const SkeletonCard = () => (
  <div className="aspect-[3/4] w-full bg-gray-200 rounded-lg animate-pulse"></div>
);

const DestinationsSection = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setDestinations(DUMMY_DESTINATIONS);
      setLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([titleRef.current, subtitleRef.current], { opacity: 0, y: 50 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
      }).to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
      }, "-=0.8");

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-16 sm:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 ref={titleRef} className="text-3xl sm:text-4xl font-reguler text-gray-900 tracking-tight">
            Exploring Norway's breathtaking scenery & landscapes
          </h2>
          <p ref={subtitleRef} className="mt-4 text-md text-gray-600">
            Discover Norway's Wonders Effortlessly – Your shortcut to one-click adventures!
          </p>
        </div>

        <div className="relative px-8 sm:px-10">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </div>
          ) : (
            <Swiper
              modules={[Navigation]}
              spaceBetween={32}
              slidesPerView={1}
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="!pb-4"
            >
              {destinations.map((dest) => (
                <SwiperSlide key={dest.city}>
                  <DestinationCard
                    videoUrl={dest.videoUrl}
                    city={dest.city}
                    country={dest.country}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          <button
            aria-label="Previous destination"
            className="swiper-button-prev-custom absolute -left-0 top-1/2 -translate-y-1/2 z-10 bg-black rounded-full p-3 border border-white hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FaChevronLeft className="h-5 w-5 text-white" />
          </button>
          <button
            aria-label="Next destination"
            className="swiper-button-next-custom absolute -right-0 top-1/2 -translate-y-1/2 z-10 bg-black rounded-full p-3 border border-white hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FaChevronRight className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;