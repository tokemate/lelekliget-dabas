import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
    const containerRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.hero-bg', {
                scale: 1.2,
                opacity: 0,
                duration: 2,
                ease: 'power2.out'
            });

            gsap.from('.hero-text span', {
                y: 100,
                opacity: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: 'power4.out',
                delay: 0.5
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div
                    className="hero-bg absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=2000')`,
                        filter: 'brightness(0.3) contrast(1.1)'
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-charcoal/20 via-transparent to-cream" />
            </div>

            <div className="relative z-10 text-center px-6 max-w-4xl">
                <h1 className="hero-text text-cream mb-8 overflow-hidden">
                    <span className="block text-4xl md:text-6xl font-sans font-medium mb-2">A gyógyulás az</span>
                    <span className="block text-7xl md:text-9xl font-serif italic font-bold">Egyensúlynál kezdődik.</span>
                </h1>

                <div className="hero-text overflow-hidden mb-10">
                    <span className="block text-cream/80 text-lg md:text-xl font-light tracking-wide">
                        Dr. Piri Anikó holisztikus magánpraxisa – Orvosi precizitás meeting bio-technológia.
                    </span>
                </div>

                <div className="hero-text overflow-hidden">
                    <span className="inline-block">
                        <button className="btn-primary px-10 py-4 text-lg tracking-wider uppercase bg-clay hover:bg-moss">
                            Fedezze fel a jövő diagnosztikáját
                        </button>
                    </span>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-50">
                <span className="text-cream text-[10px] uppercase tracking-[0.3em]">Görgessen le</span>
                <div className="w-[1px] h-12 bg-cream/30 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-cream -translate-y-full animate-[scrollIndicator_2s_infinite]" />
                </div>
            </div>

            <style jsx>{`
        @keyframes scrollIndicator {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
        </section>
    );
};

export default Hero;
