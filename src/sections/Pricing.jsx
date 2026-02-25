import React from 'react';
import { Star, Gift, Check } from 'lucide-react';

const Pricing = () => {
    return (
        <section id="contact" className="py-32 px-6 bg-cream border-t border-charcoal/5">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20 gsap-reveal">
                    <h2 className="text-5xl md:text-7xl font-serif mb-6 text-charcoal">Kezdje el ma</h2>
                    <p className="text-charcoal/60 text-lg">A legjobb befektetés Önnek és családjának.</p>
                </div>

                <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
                    {/* Nyílt Nap Card */}
                    <div className="w-full md:w-[450px] bg-charcoal text-cream rounded-[40px] p-12 flex flex-col gsap-reveal relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 text-moss group-hover:scale-110 transition-transform duration-500">
                            <Star size={40} fill="currentColor" opacity={0.2} />
                        </div>

                        <div className="mb-8">
                            <span className="px-4 py-1 rounded-full border border-cream/20 text-xs uppercase tracking-widest text-cream/60">
                                Időszakos Esemény
                            </span>
                        </div>

                        <h3 className="text-4xl font-serif mb-4">Nyílt Nap Regisztráció</h3>
                        <p className="text-cream/60 mb-8 leading-relaxed">
                            Ismerje meg a csapatot és a technológiát élőben. Ingyenes bemutatók és mini-konzultációk.
                        </p>

                        <ul className="space-y-4 mb-12 flex-grow">
                            <li className="flex items-center space-x-3">
                                <Check className="text-clay" size={20} />
                                <span>NLS Technológia bemutató</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Check className="text-clay" size={20} />
                                <span>Személyes találkozó Dr. Piri Anikóval</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Check className="text-clay" size={20} />
                                <span>December 13. Dabas</span>
                            </li>
                        </ul>

                        <button className="btn-primary w-full py-5 text-xl tracking-tight bg-clay hover:bg-moss bg-blend-soft-light transition-all duration-700">
                            Regisztrálok az eseményre
                        </button>
                    </div>

                    {/* Ajándék Card */}
                    <div className="w-full md:w-[450px] glass-card border-moss/10 p-12 flex flex-col gsap-reveal" style={{ animationDelay: '0.2s' }}>
                        <div className="w-16 h-16 bg-moss/10 rounded-2xl flex items-center justify-center mb-8 text-moss">
                            <Gift size={32} />
                        </div>

                        <h3 className="text-4xl font-serif mb-4">Egészség-utazvány</h3>
                        <p className="text-charcoal/60 mb-8 leading-relaxed">
                            "Vásárolj egészséget karácsonyra!" Lepje meg szeretteit egy teljes körű állapotfelméréssel.
                        </p>

                        <div className="mb-12">
                            <p className="text-xs uppercase tracking-widest text-moss font-bold mb-2">Ajánlott csomag:</p>
                            <p className="text-3xl font-serif text-charcoal italic leading-tight">Focus Protocol – 2h</p>
                        </div>

                        <div className="mt-auto">
                            <div className="flex items-center space-x-2 text-charcoal/40 text-sm mb-6">
                                <span>Az utalvány 6 hónapig érvényes</span>
                            </div>
                            <button className="w-full btn-primary bg-moss hover:bg-moss-dark">
                                Utalvány igénylése
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
