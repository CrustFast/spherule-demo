import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

  const DestinationCard = ({ videoUrl, city, country }) => {
  const cardRef = useRef(null);
  const videoRef = useRef(null);
  const overlayRef = useRef(null);
  const textContentRef = useRef(null);
  const tl = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline({ paused: true })
        .to(overlayRef.current, { opacity: 1, duration: 0.5, ease: 'power2.inOut' })
        .fromTo(textContentRef.current, 
          { y: 20, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
          "-=0.3" 
        );
    }, cardRef);

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
    if (tl.current) {
      tl.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (tl.current) {
      tl.current.reverse().then(() => {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0; 
        }
      });
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative aspect-[4/5] w-full rounded-xl overflow-hidden shadow-lg cursor-pointer"
    >
      <video
        ref={videoRef}
        src={videoUrl}
        className="absolute inset-0 w-full h-full object-cover"
        loop
        muted
        playsInline
        preload="metadata" 
      />
      
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0"
      ></div>
      
      <div
        ref={textContentRef}
        className="absolute bottom-0 left-0 p-6 opacity-0"
      >
        <h3 className="text-white text-2xl font-reguler">{city}</h3>
        <p className="text-white/90">{country}</p>
      </div>
    </div>
  );
};

export default DestinationCard;