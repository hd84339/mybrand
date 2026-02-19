import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Navbar = () => {
    const navRef = useRef(null);
    const linksRef = useRef(null);
    const ctaRef = useRef(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const mobileMenuRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.fromTo(navRef.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8 }
        )
            .fromTo(linksRef.current?.children || [],
                { y: -20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 },
                "-=0.4"
            )
            .fromTo(ctaRef.current,
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.5 },
                "-=0.4"
            );
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            gsap.fromTo(mobileMenuRef.current,
                { height: 0, opacity: 0 },
                { height: 'auto', opacity: 1, duration: 0.3, ease: 'power2.out' }
            );
        }
    }, [isMobileMenuOpen]);

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">

                {/* Logo */}
                <div className="flex-shrink-0 cursor-pointer">
                    <span className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                        MyBrand.
                    </span>
                </div>

                {/* Desktop Links */}
                <div ref={linksRef} className="hidden md:flex items-center space-x-8">
                    {['Features', 'How it Works', 'Testimonials', 'Pricing'].map((item) => (
                        <a key={item} href="#" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
                            {item}
                        </a>
                    ))}
                </div>

                {/* CTA Button */}
                <div ref={ctaRef} className="hidden md:block">
                    <button className="px-5 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10">
                        Get Started
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-slate-900 focus:outline-none p-2">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div ref={mobileMenuRef} className="md:hidden bg-white border-b border-slate-100 overflow-hidden">
                    <div className="px-6 py-4 flex flex-col space-y-4">
                        {['Features', 'How it Works', 'Testimonials', 'Pricing'].map((item) => (
                            <a key={item} href="#" className="text-base font-medium text-slate-600 hover:text-indigo-600 transition-colors">
                                {item}
                            </a>
                        ))}
                        <button className="w-full px-5 py-3 bg-slate-900 text-white text-base font-bold rounded-full hover:bg-slate-800 transition-colors">
                            Get Started
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
