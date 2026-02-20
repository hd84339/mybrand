import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(containerRef.current,
            { opacity: 0, y: 30 },
            {
                opacity: 1, y: 0, duration: 1, ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                }
            }
        );
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-slate-950 relative overflow-hidden text-white">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-indigo-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-fuchsia-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

            <div ref={containerRef} className="container mx-auto px-6 opacity-0">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                    {/* Left Col: Headline & Context */}
                    <div className="w-full lg:w-1/2 pt-10">
                        <span className="inline-block py-1 px-3 mb-6 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold tracking-wider uppercase">
                            Start Your Growth Journey
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-400">Scale Your Business?</span>
                        </h2>
                        <p className="text-lg text-slate-400 mb-10 leading-relaxed">
                            Book your free growth strategy call and discover exactly how to increase traffic, leads, and revenue.
                        </p>

                        {/* Benefits List */}
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-lg">Custom Growth Roadmap</h4>
                                    <p className="text-slate-500 text-sm">No generic advice. We build a plan tailored to your market.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-lg">Competitor Analysis</h4>
                                    <p className="text-slate-500 text-sm">We uncover exactly what your competitors are doing to win.</p>
                                </div>
                            </div>
                        </div>

                        {/* Trust Badge */}
                        <div className="mt-12 flex items-center gap-4 text-slate-400 text-sm font-medium">
                            <div className="flex -space-x-2">
                                <img className="w-8 h-8 rounded-full border-2 border-slate-900" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" alt="User" />
                                <img className="w-8 h-8 rounded-full border-2 border-slate-900" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100" alt="User" />
                                <img className="w-8 h-8 rounded-full border-2 border-slate-900" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100" alt="User" />
                            </div>
                            <span>Trusted by 50+ Founders</span>
                        </div>
                    </div>

                    {/* Right Col: Form */}
                    <div className="w-full lg:w-1/2">
                        <div className="bg-slate-900 p-8 md:p-10 rounded-2xl border border-slate-800 shadow-2xl shadow-indigo-500/10">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-white ml-1">Name <span className="text-red-500">*</span></label>
                                        <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all text-white placeholder:text-slate-500" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-white ml-1">Phone</label>
                                        <input type="tel" placeholder="+1 (555) 000-0000" className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all text-white placeholder:text-slate-500" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-white ml-1">Email <span className="text-red-500">*</span></label>
                                    <input type="email" placeholder="john@company.com" className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all text-white placeholder:text-slate-500" required />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-white ml-1">Website URL</label>
                                    <input type="url" placeholder="https://yourwebsite.com" className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all text-white placeholder:text-slate-500" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-white ml-1">Message</label>
                                    <textarea rows="4" placeholder="Tell us about your business goals..." className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all text-white placeholder:text-slate-500 resize-none"></textarea>
                                </div>

                                <button type="submit" className="w-full py-4 bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white font-bold text-lg rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-[1.02] transition-all transform duration-200 relative overflow-hidden group">
                                    <span className="relative z-10">🔥 Book My Free Strategy Call</span>
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                </button>

                                <p className="text-center text-xs text-slate-400 font-medium">
                                    No spam. No pressure. Just actionable insights.
                                </p>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
