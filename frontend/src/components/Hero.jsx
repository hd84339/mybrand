import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Hero = () => {
    const headlineRef = useRef(null);
    const subheadlineRef = useRef(null);
    const ctaRef = useRef(null);
    const trustRef = useRef(null);


    const [showModal, setShowModal] = useState(false);

    const phoneNumber = "+919112152966";
    const displayPhoneNumber = "+91 91121 52966";

    const handleCall = (e) => {
        e.preventDefault();
        if (window.innerWidth < 768) {
            window.location.href = `tel:${phoneNumber}`;
        } else {
            setShowModal(true);
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(phoneNumber);
        alert("Phone number copied to clipboard!");
    };

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.fromTo(trustRef.current,
            { opacity: 0, x: -30 },
            { opacity: 1, x: 0, duration: 0.8, delay: 0.2 }
        )
            .fromTo(headlineRef.current,
                { opacity: 0, x: -30 },
                { opacity: 1, x: 0, duration: 1 },
                "-=0.6"
            )
            .fromTo(subheadlineRef.current,
                { opacity: 0, x: -30 },
                { opacity: 1, x: 0, duration: 0.8 },
                "-=0.6"
            )
            .fromTo(ctaRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.6 },
                "-=0.4"
            );

    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 text-white selection:bg-indigo-500 selection:text-white pt-20">

            {/* Modern Background Effects */}
            <div className="absolute inset-0 w-full h-full bg-slate-950">
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            </div>

            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-1/4 w-[500px] h-[500px] bg-indigo-500/30 rounded-full blur-[100px] mix-blend-screen animate-pulse-slow"></div>
                <div className="absolute bottom-[-10%] right-1/4 w-[500px] h-[500px] bg-fuchsia-500/30 rounded-full blur-[100px] mix-blend-screen animate-pulse-slow delay-1000"></div>
                <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] mix-blend-screen"></div>
            </div>

            <div className="container mx-auto px-6 flex flex-col items-center justify-center pt-12 pb-24 text-center">

                {/* Content Container */}
                <div className="w-full max-w-4xl flex flex-col items-center z-10">
                    {/* Trust Micro-Line */}
                    <div ref={trustRef} className="mb-8 opacity-0">
                        <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-slate-900/50 border border-slate-700 backdrop-blur-sm shadow-lg shadow-indigo-500/10 hover:border-indigo-500/50 transition-colors duration-300">
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                            </span>
                            <span className="text-sm font-medium text-slate-300">
                                Trusted by <span className="text-white font-semibold">50+ ambitious brands</span>
                            </span>
                        </div>
                    </div>

                    {/* Headline */}
                    <h1 ref={headlineRef} className="opacity-0 text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] mb-8 text-white drop-shadow-2xl">
                        Scale Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Brand</span>. <br className="hidden md:block" />
                        Dominate <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">The Market</span>.
                    </h1>

                    {/* Subheadline */}
                    <p ref={subheadlineRef} className="opacity-0 max-w-2xl text-lg md:text-xl text-slate-300 mb-12 leading-relaxed mx-auto font-light">
                        Unlock explosive growth with data-driven strategies designed for <span className="text-indigo-300 font-semibold">ambitious businesses</span> ready to lead.
                    </p>

                    {/* CTAs */}
                    <div ref={ctaRef} className="opacity-0 flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
                        <div className="flex flex-col items-center w-full sm:w-auto group">
                            <a href={`tel:${phoneNumber}`} onClick={handleCall} className="relative px-8 py-4 bg-white text-slate-950 text-lg font-bold rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 overflow-hidden">
                                <span className="relative z-10">Get Free Strategy Call</span>
                                <svg className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 via-white to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </a>
                            <span className="mt-3 text-xs text-slate-400 font-medium tracking-wide">✨ No obligation. 100% Free.</span>
                        </div>

                        <a href="#services" className="group px-8 py-4 bg-slate-900 border border-slate-700 text-white text-lg font-semibold rounded-full hover:bg-slate-800 hover:border-indigo-500/50 transition-all duration-300 w-full sm:w-auto text-center shadow-lg shadow-black/20 flex items-center justify-center gap-2">
                            <span>Explore Our Work</span>
                            <span className="text-indigo-400 group-hover:translate-x-1 transition-transform">↓</span>
                        </a>
                    </div>
                </div>

            </div>

            {/* Contact Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" onClick={() => setShowModal(false)}></div>
                    <div className="relative bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 text-center transform transition-all scale-100">
                        <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>

                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Contact Us</h3>
                        <p className="text-slate-500 mb-6">Give us a call to discuss your growth strategy.</p>

                        <div className="bg-slate-50 rounded-xl p-4 mb-6 border border-slate-100 flex items-center justify-between">
                            <span className="text-lg font-mono font-bold text-slate-900">{displayPhoneNumber}</span>
                            <button onClick={copyToClipboard} className="text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors">
                                Copy
                            </button>
                        </div>

                        <div className="space-y-3">
                            <a href={`tel:${phoneNumber}`} className="flex items-center justify-center w-full px-4 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors">
                                Call Now
                            </a>
                            <button onClick={() => setShowModal(false)} className="w-full px-4 py-3 bg-white text-slate-700 font-bold rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </section>
    );
};

export default Hero;
