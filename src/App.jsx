import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Philosophy from './sections/Philosophy';
import Protocol from './sections/Protocol';
import Pricing from './sections/Pricing';

gsap.registerPlugin(ScrollTrigger);

function App() {
    const mainRef = useRef(null);

    useEffect(() => {
        // Global reveal animation for elements with .gsap-reveal
        const revealElements = document.querySelectorAll('.gsap-reveal');

        revealElements.forEach((el) => {
            gsap.fromTo(el,
                { y: 50, autoAlpha: 0 },
                {
                    y: 0,
                    autoAlpha: 1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        });
    }, []);

    return (
        <main ref={mainRef} className="relative min-h-screen">
            <Navbar />
            <Hero />
            <Features />
            <Philosophy />
            <Protocol />
            <Pricing />

            <footer className="bg-moss text-cream/60 py-12 px-6 text-center border-t border-cream/10">
                <div className="max-w-7xl mx-auto">
                    <p className="font-serif text-cream text-xl mb-4">Lélekliget Dabas</p>
                    <p className="text-sm">© 2024 Dr. Piri Anikó – Minden jog fenntartva.</p>
                </div>
            </footer>
        </main>
    );
}

export default App;
