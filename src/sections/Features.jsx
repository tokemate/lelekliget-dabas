import React, { useState, useEffect } from 'react';
import { Activity, ShieldCheck, Microscope, Calendar } from 'lucide-react';

const Features = () => {
    return (
        <section id="features" className="py-32 px-6 bg-cream">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24 gsap-reveal">
                    <h2 className="text-5xl md:text-7xl font-serif mb-6 text-charcoal">Interaktív Útmutató az Egészséghez</h2>
                    <p className="text-charcoal/60 max-w-2xl mx-auto text-lg italic">
                        A technológia és az orvosi szakértelem találkozása egy új dimenziót nyit a megelőzésben.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Card 1: Diagnostic Shuffler */}
                    <div className="glass-card hover:shadow-2xl transition-all duration-500 group gsap-reveal">
                        <div className="w-16 h-16 bg-moss/10 rounded-2xl flex items-center justify-center mb-8 text-moss group-hover:bg-moss group-hover:text-cream transition-colors duration-500">
                            <Microscope size={32} />
                        </div>
                        <h3 className="text-2xl font-serif mb-6">Diagnostic Shuffler</h3>
                        <div className="space-y-4">
                            {['NLS Mérés', 'Holisztikus Szemlélet', 'Orvosi Kontroll'].map((item, idx) => (
                                <div key={idx} className="flex items-center space-x-3 p-3 bg-white/50 rounded-xl border border-charcoal/5">
                                    <ShieldCheck className="text-moss" size={20} />
                                    <span className="font-medium text-charcoal/80">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Card 2: Telemetry Typewriter */}
                    <div className="glass-card bg-moss text-cream overflow-hidden gsap-reveal" style={{ animationDelay: '0.2s' }}>
                        <div className="flex items-center space-x-3 mb-8 opacity-70">
                            <Activity size={24} className="animate-pulse" />
                            <span className="text-xs uppercase tracking-widest font-mono">Live Bio-Telemetry</span>
                        </div>
                        <TypewriterText />
                        <div className="mt-12 pt-8 border-t border-cream/10">
                            <p className="text-cream/60 text-sm leading-relaxed">
                                Az NLS technológia nem-invazív módon, sejt szinten elemzi a test rezgéseit, feltárva a rejtett egyensúlytalanságokat.
                            </p>
                        </div>
                    </div>

                    {/* Card 3: Cursor Protocol Scheduler */}
                    <div className="glass-card hover:shadow-2xl transition-all duration-500 gsap-reveal" style={{ animationDelay: '0.4s' }}>
                        <div className="w-16 h-16 bg-clay/10 rounded-2xl flex items-center justify-center mb-8 text-clay">
                            <Calendar size={32} />
                        </div>
                        <h3 className="text-2xl font-serif mb-6">Események & Protokoll</h3>
                        <div className="bg-white/50 rounded-2xl p-6 border border-charcoal/5">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-sm font-bold uppercase tracking-tighter text-clay">Kiemelt esemény</span>
                                <span className="text-xs px-2 py-1 bg-moss/10 text-moss rounded text-center">Nyitva</span>
                            </div>
                            <p className="text-xl font-serif mb-2 text-charcoal">Nyílt Nap: Lélekliget</p>
                            <p className="text-sm text-charcoal/60 mb-6">Dec. 13 | 10:00 - 18:00</p>
                            <button className="w-full btn-primary bg-clay hover:bg-clay-dark">
                                Regisztráció
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const TypewriterText = () => {
    const [text, setText] = useState('');
    const fullText = [
        "Frekvencia elemzés folyamatban...",
        "Sejtszintű egyensúly mérése...",
        "Eredmény: Optimális öngyógyító folyamatok."
    ];
    const [lineIndex, setLineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        if (lineIndex >= fullText.length) {
            setTimeout(() => {
                setLineIndex(0);
                setCharIndex(0);
                setText('');
            }, 3000);
            return;
        }

        if (charIndex < fullText[lineIndex].length) {
            const timer = setTimeout(() => {
                setText(prev => prev + fullText[lineIndex][charIndex]);
                setCharIndex(prev => prev + 1);
            }, 50);
            return () => clearTimeout(timer);
        } else {
            const timer = setTimeout(() => {
                setText(prev => prev + '\n');
                setLineIndex(prev => prev + 1);
                setCharIndex(0);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [charIndex, lineIndex]);

    return (
        <pre className="font-mono text-lg md:text-xl text-cream/90 whitespace-pre-wrap leading-relaxed h-[150px]">
            {text}<span className="animate-pulse">_</span>
        </pre>
    );
};

export default Features;
