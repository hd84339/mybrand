import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        title: "Social Media Management",
        description: "We build your presence across Instagram, Facebook, LinkedIn & more — creating engaging content that builds authority and drives leads.",
        icon: (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
            </svg>
        ),
        gradient: "from-pink-500 to-rose-500"
    },
    {
        title: "Search Engine Optimization (SEO)",
        description: "Technical SEO, keyword research, on-page optimization, and high-quality backlinks to help your website rank higher and attract organic traffic.",
        icon: (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        ),
        gradient: "from-blue-500 to-cyan-500"
    },
    {
        title: "Content Marketing",
        description: "Strategic blog writing, social media content, and brand storytelling that builds trust and authority in your industry.",
        icon: (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
        ),
        gradient: "from-purple-500 to-indigo-500"
    },
    {
        title: "Paid Advertising (Google & Meta Ads)",
        description: "High-performing ad campaigns designed to generate qualified leads and maximize return on ad spend.",
        icon: (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        gradient: "from-green-500 to-emerald-500"
    },
    {
        title: "Website Optimization",
        description: "Landing page design, funnel optimization, and CRO strategies that improve user experience and increase conversions.",
        icon: (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        gradient: "from-orange-500 to-amber-500"
    },
    {
        title: "Analytics & Reporting",
        description: "Transparent performance tracking with detailed monthly reports — so you always know what’s working.",
        icon: (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
        gradient: "from-indigo-500 to-blue-500"
    }
];

const Services = () => {
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
            { opacity: 0, y: 50 },
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
            {/* Background Decorative Lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Header */}
                <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-20 opacity-0">
                    <span className="inline-block py-1 px-3 mb-4 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-bold text-indigo-600 tracking-wider uppercase">
                        Expertise
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        💼 Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-fuchsia-600">Services</span>
                    </h2>
                    <p className="text-lg text-slate-600">
                        Comprehensive digital solutions tailored to scale your business.
                    </p>
                </div>

                {/* Services Grid */}
                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-indigo-100/50 hover:-translate-y-2 transition-all duration-300 opacity-0 flex flex-col items-start relative overflow-hidden">

                            {/* Accent Top Line */}
                            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>

                            {/* Icon */}
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                                {service.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-700 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Services;
