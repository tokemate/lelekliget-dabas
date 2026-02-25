import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Protocol = () => {
    const containerRef = useRef(null);

    const steps = [
        {
            title: "NLS Mérés",
            description: "1.5-2 órás mélyelemzés a test rezgéseiről, sejt és szerv szinten.",
            image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=1000"
        },
        {
            title: "Szakértői Konzultáció",
            description: "Orvosi és természetgyógyászati kiértékelés, ahol válaszokat kap a miértekre.",
            image: "https://images.unsplash.com/photo-1576091160550-2173599211d0?auto=format&fit=crop&q=80&w=1000"
        },
        {
            title: "Személyre szabott terv",
            description: "Masszázs, táplálkozás és holisztikus támogatás egy konkrét akciótervben.",
            image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?auto=format&fit=crop&q=80&w=1000"
        }
    ];

    return (
        <section id="nls" ref={containerRef} className="py-32 bg-cream text-charcoal">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-24 gsap-reveal">
                    <h2 className="text-6xl md:text-8xl font-serif mb-8 italic tracking-tighter">Protokoll</h2>
                    <p className="text-xl text-charcoal/60 uppercase tracking-widest font-sans font-medium">Lépésről lépésre az egyensúly felé</p>
                </div>

                <div className="space-y-24">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16 gsap-reveal`}
                        >
                            <div className="w-full md:w-1/2">
                                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl group">
                                    <img
                                        src={step.image}
                                        alt={step.title}
                                        className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-moss/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 space-y-6">
                                <span className="text-clay font-mono text-4xl opacity-30 italic">0{index + 1}</span>
                                <h3 className="text-4xl md:text-5xl font-serif">{step.title}</h3>
                                <p className="text-xl text-charcoal/70 leading-relaxed font-light">
                                    {step.description}
                                </p>
                                <button className="flex items-center space-x-2 text-clay font-bold group">
                                    <span className="border-b border-transparent group-hover:border-clay pb-1 transition-all">Részletek megismerése</span>
                                    <span className="translate-x-0 group-hover:translate-x-2 transition-transform">→</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Protocol;
