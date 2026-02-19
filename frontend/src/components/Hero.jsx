import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
    const headlineRef = useRef(null);
    const subheadlineRef = useRef(null);
    const ctaRef = useRef(null);
    const trustRef = useRef(null);
    const visualRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.fromTo(headlineRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, delay: 0.2 }
        )
            .fromTo(subheadlineRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.8 },
                "-=0.6"
            )
            .fromTo(ctaRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.6 },
                "-=0.4"
            )
            .fromTo(trustRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 0.8 },
                "-=0.2"
            )
            .fromTo(visualRef.current,
                { opacity: 0, scale: 0.95, y: 40 },
                { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: 'power2.out' },
                "-=0.8"
            );

    }, []);

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white text-slate-900 selection:bg-indigo-100">
            {/* Background Gradients (Softer for Light Mode) */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-100 rounded-full blur-3xl -z-10 mix-blend-multiply opacity-70"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-fuchsia-100 rounded-full blur-3xl -z-10 mix-blend-multiply opacity-70"></div>

            <div className="container mx-auto px-6 py-20 lg:py-32 flex flex-col items-center text-center">

                {/* Trust Micro-Line */}
                <div ref={trustRef} className="mb-8 opacity-0">
                    <span className="inline-block py-1 px-3 rounded-full bg-slate-50 border border-slate-200 text-sm font-medium text-slate-500">
                        Trusted by ambitious brands ready to scale.
                    </span>
                </div>

                {/* Headline */}
                <h1 ref={headlineRef} className="opacity-0 max-w-5xl text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-8 text-slate-900">
                    <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">Scale Your Brand.</span> <br className="hidden md:block" />
                    <span className="bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-indigo-600 bg-clip-text text-transparent">Multiply Your Leads.</span> <br className="hidden md:block" />
                    <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">Dominate Your Market.</span>
                </h1>

                {/* Subheadline */}
                <p ref={subheadlineRef} className="opacity-0 max-w-2xl text-lg md:text-xl text-slate-600 mb-12 leading-relaxed">
                    We help growth-focused businesses attract high-quality traffic, convert more customers, and build powerful digital brands using data-driven marketing strategies that deliver real, measurable results.
                </p>

                {/* CTAs */}
                <div ref={ctaRef} className="opacity-0 flex flex-col md:flex-row items-center gap-6 mb-20">
                    <div className="flex flex-col items-center">
                        <button className="group relative px-8 py-4 bg-slate-900 text-white text-lg font-bold rounded-full transition-transform hover:scale-105 hover:shadow-xl shadow-slate-900/20">
                            Get Your Free Growth Strategy Call
                            <span className="absolute inset-0 rounded-full ring-2 ring-white/10 transition-all group-hover:ring-white/30"></span>
                        </button>
                        <span className="mt-3 text-xs text-slate-500 font-medium">No obligation. Just actionable insights.</span>
                    </div>

                    <button className="px-8 py-4 bg-transparent border border-slate-200 text-slate-700 text-lg font-semibold rounded-full hover:bg-slate-50 hover:border-slate-300 transition-colors">
                        See How We Grow Brands
                    </button>
                </div>

                {/* Dashboard Mockup Visual */}
                <div ref={visualRef} className="opacity-0 relative w-full max-w-5xl">
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-200 to-fuchsia-200 rounded-2xl blur opacity-30"></div>
                    <div className="relative bg-white border border-slate-200 rounded-xl shadow-2xl shadow-indigo-100 overflow-hidden aspect-[16/9] md:aspect-[21/9] flex flex-col">
                        {/* Mockup Header */}
                        <div className="h-10 border-b border-slate-100 flex items-center px-4 space-x-2 bg-slate-50/80">
                            <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                            <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                            <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                        </div>
                        {/* Mockup Body - Abstract Dashboard */}
                        <div className="flex-1 p-6 grid grid-cols-12 gap-6 bg-white">
                            <div className="col-span-3 bg-slate-50 rounded-lg animate-pulse h-full"></div>
                            <div className="col-span-9 grid grid-rows-3 gap-6">
                                <div className="row-span-1 grid grid-cols-3 gap-6">
                                    <div className="bg-slate-50 rounded-lg h-24"></div>
                                    <div className="bg-slate-50 rounded-lg h-24"></div>
                                    <div className="bg-slate-50 rounded-lg h-24"></div>
                                </div>
                                <div className="row-span-2 bg-slate-50 rounded-lg relative overflow-hidden">
                                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Soft Shadow */}
                    <div className="absolute -bottom-10 left-10 right-10 h-20 bg-indigo-200/50 blur-3xl -z-10 rounded-full"></div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
