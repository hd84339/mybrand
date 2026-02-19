import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        number: "01",
        title: "Book a Free Growth Strategy Call",
        description: "We understand your business goals, challenges, and growth targets to enable us to create a plan that works for you.",
        colors: "from-blue-500 to-indigo-600",
        icon: (
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
        )
    },
    {
        number: "02",
        title: "Analyze & Build a Custom Plan",
        description: "Our team researches your market, competitors, and audience to design a personalized growth strategy.",
        colors: "from-fuchsia-500 to-pink-600",
        icon: (
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        )
    },
    {
        number: "03",
        title: "Launch, Optimize & Scale",
        description: "We execute campaigns, track performance, optimize results, and scale what works to maximize ROI.",
        colors: "from-indigo-500 to-purple-600",
        icon: (
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        )
    }
];

const HowItWorks = () => {
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const stepsRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const header = headerRef.current;
        const stepElements = stepsRef.current.children;

        gsap.fromTo(header,
            { opacity: 0, y: 30 },
            {
                opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                }
            }
        );

        gsap.fromTo(stepElements,
            { opacity: 0, y: 50 },
            {
                opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.2,
                scrollTrigger: {
                    trigger: stepsRef.current,
                    start: 'top 75%',
                }
            }
        );

    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
            {/* Background Decorative Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-indigo-50/50 rounded-full blur-3xl -z-10 pointer-events-none"></div>

            <div className="container mx-auto px-6">
                {/* Header */}
                <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-20 opacity-0">
                    <span className="inline-block py-1 px-3 mb-4 rounded-full bg-fuchsia-50 border border-fuchsia-100 text-xs font-bold text-fuchsia-600 tracking-wider uppercase">
                        Process
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        📈 Our Growth Process Is <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-fuchsia-600">Simple & Effective</span>
                    </h2>
                    <p className="text-lg text-slate-600">
                        We’ve streamlined our approach to deliver maximum impact in minimum time.
                    </p>
                </div>

                {/* Steps Grid */}
                <div ref={stepsRef} className="relative grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">

                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-indigo-100 via-fuchsia-100 to-indigo-100 -z-10"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="relative flex flex-col items-center text-center opacity-0 group">

                            {/* Icon Circle */}
                            <div className={`w-24 h-24 rounded-full bg-white border-4 border-slate-50 shadow-xl shadow-indigo-100 flex items-center justify-center mb-8 relative z-10 transition-transform duration-500 group-hover:scale-110`}>
                                <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.colors} opacity-90 transition-opacity duration-300`}></div>
                                <div className="relative z-10">
                                    {step.icon}
                                </div>

                                {/* Number Badge */}
                                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-bold border-2 border-white">
                                    {step.number}
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-indigo-900 transition-colors">
                                {step.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed max-w-xs mx-auto">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Footer Tagline */}
                <div className="text-center mt-16 animate-fade-in-up delay-700">
                    <p className="text-sm font-bold tracking-[0.2em] text-slate-400 uppercase">
                        Simple. Transparent. Results-focused.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default HowItWorks;
