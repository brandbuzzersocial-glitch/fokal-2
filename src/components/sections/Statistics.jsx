import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const StatItem = ({ number, label, subtext }) => {
    const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

    return (
        <div ref={ref} className="text-center p-6 border border-white/10 bg-white/5 rounded-lg backdrop-blur-sm">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, type: 'spring' }}
                className="text-4xl md:text-5xl font-heading font-bold text-orange-500 mb-2"
            >
                {number}
            </motion.div>
            <div className="font-bold text-white uppercase tracking-wider mb-1 text-sm">{label}</div>
            <div className="text-gray-400 text-xs">{subtext}</div>
        </div>
    );
};

export const Statistics = () => {
    return (
        <section className="py-20 bg-navy-900 relative">
            {/* Background Image Placeholder */}
            <div className="absolute inset-0 bg-navy-900 z-0">
                <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1565514020176-87c2fb27db11?ixlib=rb-4.0.3')] bg-cover bg-center bg-fixed mix-blend-overlay"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between mb-12">
                    <h2 className="text-3xl font-heading font-bold text-white">FOKAL, at a Glance</h2>
                    <div className="h-[1px] bg-white/20 flex-grow ml-8 hidden md:block"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <StatItem number="40+" label="Years" subtext="Experience in Lighting" />
                    <StatItem number="3" label="Divisions" subtext="Auto, Defence, Aerospace" />
                    <StatItem number="2" label="Facilities" subtext="Strategic Locations" />
                    <StatItem number="100+" label="Programs" subtext="Active OEM Partnerships" />
                </div>
            </div>
        </section>
    );
};
