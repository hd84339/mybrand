import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
    {
        name: "Rahul Mehta",
        role: "Founder, E-commerce Brand",
        result: "📈 ROI Increased by 200% in 90 Days",
        quote: "My Brand Growth completely transformed our digital strategy. Leads doubled, conversions improved, and our brand visibility skyrocketed.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
    },
    {
        name: "Aisha Khan",
        role: "Marketing Head, Tech Startup",
        result: "🚀 300% Growth in Website Traffic",
        quote: "Their SEO and paid ad strategies delivered measurable results within weeks. Highly professional and data-driven.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop"
    },
    {
        name: "Vikram Singh",
        role: "Director, Real Estate Firm",
        result: "🏠 50+ Qualified Leads Per Month",
        quote: "We struggled with lead quality until we started working with them. Now, our sales team is fully booked with high-intent prospects.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"
    }
];

const Testimonials = () => {
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
                opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.2,
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: 'top 75%',
                }
            }
        );

    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Soft Background Blur */}
            <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-indigo-500/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>

            <div className="container mx-auto px-6">

                {/* Header */}
                <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-20 opacity-0">
                    <span className="inline-block py-1 px-3 mb-4 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-bold text-orange-400 tracking-wider uppercase">
                        Success Stories
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-400">Ambitious Brands</span>
                    </h2>
                    <p className="text-lg text-slate-400">
                        Don't just take our word for it. See the results we've delivered.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="group bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-800 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-2 transition-all duration-300 opacity-0 flex flex-col">

                            {/* User Info */}
                            <div className="flex items-center gap-4 mb-6">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-14 h-14 rounded-full object-cover border-2 border-slate-700 shadow-md"
                                />
                                <div>
                                    <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                                    <p className="text-sm text-slate-400 font-medium">{testimonial.role}</p>
                                </div>
                            </div>

                            {/* Result Headline */}
                            <div className="mb-4 inline-block">
                                <span className="bg-green-500/10 text-green-400 text-sm font-bold px-3 py-1.5 rounded-lg border border-green-500/20">
                                    {testimonial.result}
                                </span>
                            </div>

                            {/* Quote */}
                            <p className="text-slate-300 italic leading-relaxed">
                                "{testimonial.quote}"
                            </p>

                            {/* Stars */}
                            <div className="mt-auto pt-6 flex text-amber-400">
                                {'★★★★★'.split('').map((star, i) => (
                                    <span key={i}>{star}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
