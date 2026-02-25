import React from 'react';

const Philosophy = () => {
    return (
        <section id="philosophy" className="py-32 px-6 bg-charcoal text-cream relative overflow-hidden">
            {/* Decorative organic shapes */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-moss/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-clay/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-5xl mx-auto relative z-10">
                <div className="mb-12 gsap-reveal">
                    <span className="text-clay uppercase tracking-[0.4em] text-xs font-bold font-sans">A Mi Hitvallásunk</span>
                </div>

                <div className="space-y-12">
                    <h2 className="text-4xl md:text-6xl font-serif leading-tight gsap-reveal">
                        "A legtöbb orvos a tünetek elnyomására fókuszál."
                    </h2>

                    <div className="flex justify-end gsap-reveal">
                        <div className="w-full md:w-2/3">
                            <p className="text-3xl md:text-5xl font-serif text-cream/40 leading-snug">
                                Mi a <span className="text-cream italic border-b-2 border-clay/50 pb-1">teljes emberi egészség</span> helyreállítására fókuszálunk – természetesen.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 gsap-reveal">
                    <div>
                        <h4 className="font-serif text-2xl mb-4 text-clay">Személyre szabott</h4>
                        <p className="text-cream/60 leading-relaxed font-light">
                            Minden szervezet egyedi. Nincs két egyforma terápia, csak egyedi megoldások.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-serif text-2xl mb-4 text-clay">Tudományos</h4>
                        <p className="text-cream/60 leading-relaxed font-light">
                            Az ősi tudást a legmodernebb bio-technológiai mérőműszerekkel validáljuk.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-serif text-2xl mb-4 text-clay">Fenntartható</h4>
                        <p className="text-cream/60 leading-relaxed font-light">
                            Célunk nem az ideiglenes javulás, hanem a test saját öngyógyító erejének aktiválása.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
