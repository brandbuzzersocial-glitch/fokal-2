import React from 'react';
import { motion } from 'framer-motion';
import { Car, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

const DivisionCard = ({ icon: Icon, title, description, linkText, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="group relative bg-white p-8 rounded-xl border border-gray-200 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 overflow-hidden"
        >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <Icon size={120} />
            </div>

            <div className="relative z-10">
                <div className="w-14 h-14 bg-navy-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                    <Icon size={28} className="text-navy-900 group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-2xl font-heading font-bold text-navy-900 mb-4">{title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-sm md:text-base">{description}</p>

                <a href="#" className="inline-flex items-center text-orange-600 font-bold uppercase text-sm tracking-wider hover:text-orange-700 transition-colors group/link">
                    {linkText} <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                </a>
            </div>
        </motion.div>
    );
};

export const DivisionsOverview = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl font-heading font-bold text-navy-900 mb-4">Lighting Solutions Across Critical Domains</h2>
                    <div className="h-1 w-20 bg-orange-500 mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <DivisionCard
                        icon={Car}
                        title="Automotive Lighting"
                        description="Precision-engineered lamps for two-wheelers, passenger vehicles, and commercial platforms—built for consistency, compliance, and long service life."
                        linkText="Explore Automotive"
                        delay={0.1}
                    />
                    <DivisionCard
                        icon={Shield}
                        title="Defence & Aerospace"
                        description="Mission-critical lighting for air, land, and naval platforms—designed for extreme environments, reliability, and indigenization programs."
                        linkText="Explore Defence"
                        delay={0.2}
                    />
                    <DivisionCard
                        icon={CheckCircle}
                        title="Certified Products"
                        description="A complete portfolio of certified automotive bulbs and specialty lamps—validated for photometry, durability, and environmental performance."
                        linkText="View Products"
                        delay={0.3}
                    />
                </div>
            </div>
        </section>
    );
};
