import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Szolgáltatások', href: '#features' },
        { name: 'NLS Mérés', href: '#nls' },
        { name: 'Filozófia', href: '#philosophy' },
        { name: 'Kapcsolat', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[90%] max-w-5xl`}>
            <div className={`
        relative flex items-center justify-between px-6 py-4 rounded-full border border-white/20
        transition-all duration-500 backdrop-blur-xl
        ${isScrolled ? 'bg-moss/80 py-3' : 'bg-white/10'}
      `}>
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <span className="font-serif text-xl md:text-2xl tracking-tight text-cream">
                        Lélekliget <span className="font-light opacity-80">Dabas</span>
                    </span>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-cream/80 hover:text-cream text-sm font-medium transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button className="btn-primary py-2 px-6 text-sm">
                        Időpontfoglalás
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-cream"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-20 left-0 w-full bg-moss/95 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 md:hidden animate-fade-up">
                    <div className="flex flex-col space-y-6 text-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-cream text-lg font-serif"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <button className="btn-primary w-full">
                            Időpontfoglalás
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
