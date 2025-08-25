'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "I didn't just visit Norway—I experienced its soul. A magical journey through fjords and mountains.",
    name: 'Jordan Blake',
    title: 'Co-Founder, SnapWave',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  },
  {
    quote: 'With this platform, I discovered hidden gems, from Arctic landscapes to cozy Scandinavian villages.',
    name: 'Taylor Morgan',
    title: 'Co-Founder, ClipNest',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b8c5?w=150&h=150&fit=crop&crop=face',
  },
  {
    quote: 'Exploring the vibrant culture of Norway opened my eyes to new traditions and culinary delights.',
    name: 'Avery Chen',
    title: 'Co-Founder, TrendSphere',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
  },
  {
    quote: 'The entire trip was seamless, from booking to the final day. Truly a five-star experience.',
    name: 'Casey Lee',
    title: 'Travel Blogger, Wanderlust Diaries',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
  },
  {
    quote: 'An unforgettable adventure under the Northern Lights. This platform made it all possible.',
    name: 'Riley Kim',
    title: 'Photographer',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
  },
  {
    quote: "The fjords are even more breathtaking in person. A must-do for any nature lover.",
    name: 'Alex Rivera',
    title: 'Lead Developer, TechSolutions',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
  },
];

const TestimonialsSection = () => {
  const scrollerRef = useRef(null);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    if (!scrollerRef.current) return;
    const scroller = scrollerRef.current;

    const scrollerWidth = scroller.offsetWidth;
    const scrollWidth = scroller.scrollWidth;
    const animationWidth = scrollWidth / 2;

    const tween = gsap.to(scroller, {
      x: -animationWidth,
      duration: 50,
      ease: 'none',
      repeat: -1,
    });

    return () => {
      tween.kill();
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);


  return (
    <section ref={sectionRef} className="bg-white py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 ref={titleRef} className="text-3xl sm:text-4xl font-regular text-gray-900 tracking-tight">
            Hear What Travelers Say About Their Nordic Adventure!
          </h2>
        </div>

        <div className="mt-16 relative">
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div className="overflow-hidden">
            <div ref={scrollerRef} className="flex gap-8">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <figure
                  key={`${testimonial.name}-${index}`}
                  className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm flex-shrink-0 w-[380px]"
                >
                  <blockquote className="text-lg text-gray-700">
                    <p>"{testimonial.quote}"</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.title}</div>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;