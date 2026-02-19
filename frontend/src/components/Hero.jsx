import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Hero = () => {
    const headlineRef = useRef(null);
    const subheadlineRef = useRef(null);
    const ctaRef = useRef(null);
    const trustRef = useRef(null);
    const visualRef = useRef(null);

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
            )
            .fromTo(visualRef.current,
                { opacity: 0, x: 50, scale: 0.95 },
                { opacity: 1, x: 0, scale: 1, duration: 1.2, ease: 'power2.out' },
                "-=0.8"
            );

    }, []);

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-white text-slate-900 selection:bg-indigo-100 pt-20">
            {/* Background Gradients (Softer for Light Mode) */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-indigo-100 rounded-full blur-3xl mix-blend-multiply opacity-70"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-fuchsia-100 rounded-full blur-3xl mix-blend-multiply opacity-70"></div>
            </div>

            <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

                {/* Left Column: Text Content */}
                <div className="w-full lg:w-1/2 flex flex-col items-start text-left z-10">
                    {/* Trust Micro-Line */}
                    <div ref={trustRef} className="mb-6 opacity-0">
                        <span className="inline-block py-1.5 px-4 rounded-full bg-slate-50 border border-slate-200 text-sm font-medium text-slate-500">
                            Trusted by ambitious brands ready to scale.
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 ref={headlineRef} className="opacity-0 text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-slate-900">
                        <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">Scale Your Brand.</span> <br />
                        <span className="bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-indigo-600 bg-clip-text text-transparent">Multiply Your Leads.</span> <br />
                        <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">Dominate Your Market.</span>
                    </h1>

                    {/* Subheadline */}
                    <p ref={subheadlineRef} className="opacity-0 max-w-xl text-lg lg:text-xl text-slate-600 mb-10 leading-relaxed">
                        We help growth-focused businesses attract high-quality traffic, convert more customers, and build powerful digital brands using data-driven marketing strategies that deliver real, measurable results.
                    </p>

                    {/* CTAs */}
                    <div ref={ctaRef} className="opacity-0 flex flex-col sm:flex-row items-center gap-4">
                        <div className="flex flex-col items-start w-full sm:w-auto">
                            <a href={`tel:${phoneNumber}`} onClick={handleCall} className="group relative px-8 py-4 bg-slate-900 text-white text-lg font-bold rounded-full transition-transform hover:scale-105 hover:shadow-xl shadow-slate-900/20 w-full sm:w-auto text-center inline-block cursor-pointer">
                                Get Your Free Growth Strategy Call
                                <span className="absolute inset-0 rounded-full ring-2 ring-white/10 transition-all group-hover:ring-white/30"></span>
                            </a>
                            <span className="mt-2 text-xs text-slate-400 font-medium ml-2">No obligation. Just actionable insights.</span>
                        </div>
                    </div>
                </div>

                {/* Right Column: Visuals */}
                <div ref={visualRef} className="w-full lg:w-1/2 opacity-0 relative flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-lg lg:max-w-xl">
                        <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-fuchsia-500 rounded-xl blur-2xl opacity-30 animate-pulse-slow"></div>
                        <div className="relative rounded-2xl shadow-2xl overflow-hidden transform rotate-[-2deg] hover:rotate-0 transition-transform duration-700 ease-out border-4 border-white/50">
                            <img
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                                alt="Analytics Dashboard"
                                className="w-full h-auto object-cover"
                            />
                            {/* Glass Overlay Effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent mix-blend-overlay"></div>
                        </div>

                        {/* Floating Icons/Elements */}
                        <div className="absolute -top-12 -right-8 w-20 h-20 bg-white rounded-2xl shadow-xl shadow-indigo-500/20 border border-slate-100 flex items-center justify-center animate-bounce-slow z-20">
                            <span className="text-4xl filter drop-shadow-sm">🚀</span>
                        </div>
                        <div className="absolute -bottom-10 -left-10 bg-white px-6 py-4 rounded-2xl shadow-xl shadow-fuchsia-500/20 border border-slate-100 flex items-center gap-4 animate-pulse-slow z-20">
                            <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                            </div>
                            <div>
                                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Growth</div>
                                <div className="text-2xl text-slate-900 font-black">+125%</div>
                            </div>
                        </div>
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
