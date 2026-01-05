import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, ChevronRight, Award, ShieldCheck } from 'lucide-react';
import { Button } from '../ui/Button';

// Staggered Text Component
const StaggeredText = ({ text, className }) => {
    const words = text.split(" ");
    return (
        <span className={className}>
            {words.map((word, i) => (
                <span key={i} className="inline-block whitespace-nowrap overflow-hidden align-bottom">
                    <motion.span
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1, ease: [0.33, 1, 0.68, 1] }}
                        className="inline-block"
                    >
                        {word}&nbsp;
                    </motion.span>
                </span>
            ))}
        </span>
    );
};

// Shooting Star Component
const ShootingStar = ({ delay }) => (
    <motion.div
        initial={{ x: -100, y: -100, opacity: 0 }}
        animate={{ x: "150vw", y: "150vh", opacity: [0, 1, 1, 0] }}
        transition={{
            duration: Math.random() * 2 + 3,
            repeat: Infinity,
            delay: delay,
            ease: "linear",
            repeatDelay: Math.random() * 5 + 2
        }}
        className="absolute w-[150px] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent transform -rotate-45 opacity-20 z-0 pointer-events-none"
    />
);

export const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-navy-900">
            {/* Background with Industrial Gradient & Mesh */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 opacity-90"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

                {/* Shooting Stars Animation */}
                {[...Array(5)].map((_, i) => (
                    <ShootingStar key={i} delay={i * 2} />
                ))}

                {/* Abstract Glow Effects with Flicker Animation */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.4, 0.1, 0.6, 0.2, 0.8, 1] }}
                    transition={{ duration: 2.5, times: [0, 0.1, 0.2, 0.3, 0.4, 0.6, 1], ease: "easeInOut" }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl filter mix-blend-screen"
                ></motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.3, 0.1, 0.7, 0.2, 0.9, 1] }}
                    transition={{ duration: 3, delay: 0.2, times: [0, 0.1, 0.2, 0.3, 0.5, 0.7, 1], ease: "easeOut" }}
                    className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] filter mix-blend-screen"
                ></motion.div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl">
                    {/* Trust Indicators (Top) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-wrap items-center gap-4 mb-8 text-sm font-medium text-blue-200/80 tracking-wide uppercase"
                    >
                        <span className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
                            <Award size={14} className="text-orange-500" /> Est. 1984
                        </span>
                        <span className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
                            <ShieldCheck size={14} className="text-green-500" /> IATF 16949 Certified
                        </span>
                        <span className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
                            <Award size={14} className="text-orange-500" /> National Award Winner
                        </span>
                    </motion.div>

                    {/* Headlines */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white leading-[0.9] mb-8">
                        <StaggeredText text="Engineered to" className="block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
                            <StaggeredText text="Shine." />
                        </span><br />
                        <span className="block mt-2">
                            <StaggeredText text="Built to Last." />
                        </span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="text-lg md:text-xl text-gray-300 max-w-2xl mb-12 font-sans leading-relaxed border-l-4 border-orange-500 pl-6"
                    >
                        Automotive, Defence & Aerospace lighting solutions—engineered, validated, and manufactured at scale with uncompromising quality.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm font-semibold"
                    >
                        <Button variant="primary" size="lg" className="w-full sm:w-auto">
                            Explore Products <ChevronRight size={18} className="ml-2" />
                        </Button>

                        <Button variant="outline" size="lg" className="w-full sm:w-auto group">
                            Request Quote <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>

                        <div className="hidden sm:block h-8 w-[1px] bg-white/20 mx-2"></div>

                        <button className="flex items-center text-gray-400 hover:text-white transition-colors group">
                            <Download size={18} className="mr-2 text-orange-500 group-hover:scale-110 transition-transform" />
                            Download Catalogue
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Hero Visual Element (Right Side/Background Decoration) */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 bg-gradient-to-l from-orange-500/10 to-transparent pointer-events-none"></div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
            >
                <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0"
                />
            </motion.div>
        </section>
    );
};
