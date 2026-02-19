import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const footerRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(footerRef.current,
            { opacity: 0, y: 20 },
            {
                opacity: 1, y: 0, duration: 1, ease: 'power3.out',
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: 'top 90%',
                }
            }
        );
    }, []);

    return (
        <footer ref={footerRef} className="bg-slate-900 border-t border-slate-800 py-12 text-slate-400 opacity-0">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">

                {/* Brand & Copyright */}
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold text-white mb-2">Growth<span className="text-indigo-500">Agency</span></h2>
                    <p className="text-sm">© {new Date().getFullYear()} GrowthAgency. All rights reserved.</p>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col items-center md:items-end gap-2">
                    <a href="tel:+919112152966" className="text-white font-medium hover:text-indigo-400 transition-colors">
                        +91 91121 52966
                    </a>
                    <a href="mailto:hello@growthagency.com" className="text-sm hover:text-white transition-colors">
                        hello@growthagency.com
                    </a>
                </div>

                {/* Social Links (Simple Text/Icons) */}
                <div className="flex gap-6">
                    <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-white transition-colors">Instagram</a>
                    <a href="#" className="hover:text-white transition-colors">Facebook</a>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
