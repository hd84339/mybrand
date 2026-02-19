import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
    {
        title: "Data-Driven Marketing Strategy",
        description: "We don't guess. We use real-time data to build campaigns that convert.",
        icon: (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
        ),
        gradient: "from-blue-500 to-indigo-600"
    },
    {
        title: "Measurable ROI & Reporting",
        description: "Transparent reporting so you always know where your budget is going.",
        icon: (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
        ),
        gradient: "from-emerald-500 to-teal-500"
    },
    {
        title: "Dedicated Growth Experts",
        description: "Work with a team of specialists, not just a generalist account manager.",
        icon: (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
        ),
        gradient: "from-purple-500 to-fuchsia-600"
    },
    {
        title: "Performance-Focused Execution",
        description: "We optimize daily to lower your CAC and increase your LTV.",
        icon: (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
        ),
        gradient: "from-orange-500 to-red-500"
    },
    {
        title: "Customized Plans",
        description: "No cookie-cutter packages. We build exactly what your business needs.",
        icon: (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
        ),
        gradient: "from-pink-500 to-rose-500"
    },
    {
        title: "Rapid Scaling Framework",
        description: "Our proven systems helps brands scale from 6 to 7 figures faster.",
        icon: (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
        ),
        gradient: "from-cyan-500 to-blue-500"
    }
];

const WhyChooseUs = () => {
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const gridRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const header = headerRef.current;
        const cards = gridRef.current.children;

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

        gsap.fromTo(cards,
            { opacity: 0, y: 30 },
            {
                opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1,
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: 'top 75%',
                }
            }
        );

    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Header */}
                <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 opacity-0">
                    <span className="inline-block py-1 px-3 mb-4 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-600 tracking-wider uppercase">
                        Why Choose Us?
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        We Don't Just Run Ads. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-fuchsia-600">We Engineer Growth.</span>
                    </h2>
                </div>

                {/* Features Grid */}
                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-start bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 opacity-0 group">

                            {/* Icon */}
                            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center shrink-0 mr-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                {feature.icon}
                            </div>

                            {/* Content */}
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-700 transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WhyChooseUs;
