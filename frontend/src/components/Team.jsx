import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
    {
        name: "Priya Nair",
        role: "Head of Marketing",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop"
    },
    {
        name: "Rohan Das",
        role: "Growth Strategist",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop"
    },
    {
        name: "Sneha Kapoor",
        role: "Creative Director",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
    }
];

const Team = () => {
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const gridRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const header = headerRef.current;
        const cardElements = gridRef.current.children;

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

        gsap.fromTo(cardElements,
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
        <section ref={sectionRef} className="py-24 bg-slate-950 relative overflow-hidden" id="team">
            {/* Background Decorative Mesh */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-20 opacity-0">
                    <span className="inline-block py-1 px-3 mb-4 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-bold text-indigo-400 tracking-wider uppercase">
                        Our Experts
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Meet The <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-400">Growth Team</span>
                    </h2>
                    <p className="text-lg text-slate-400">
                        The dedicated strategists and creatives committed to scaling your brand to new heights.
                    </p>
                </div>

                {/* Team Grid */}
                <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="group relative opacity-0">
                            {/* Image Container with fixed height as requested */}
                            <div className="relative h-[450px] w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl transition-all duration-500 group-hover:border-indigo-500/50 group-hover:-translate-y-2">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />


                              
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

                                {/* Member Info */}
                                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="mb-3 h-1 w-12 bg-indigo-500 transition-all duration-300 group-hover:w-20"></div>
                                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors">
                                        {member.name}
                                    </h3>
                                    <p className="text-slate-400 font-medium tracking-wide">
                                        {member.role}
                                    </p>

                                    {/* Social Placeholder/Modern Hint */}
                                    <div className="mt-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white transition-all cursor-pointer">
                                            <span className="text-xs">in</span>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white transition-all cursor-pointer">
                                            <span className="text-xs">tw</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
