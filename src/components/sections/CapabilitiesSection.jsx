import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const CapabilityBlock = ({ title, description, imagePlaceholder, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group h-[400px] overflow-hidden rounded-xl bg-navy-800"
        >
            {/* Placeholder Image Background */}
            <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10`} />
            <div className="absolute inset-0 bg-gray-700 group-hover:scale-110 transition-transform duration-700 ease-out flex items-center justify-center text-gray-500 font-mono text-xs">
                {imagePlaceholder}
            </div>

            <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                <div className="w-10 h-1 bg-orange-500 mb-4 transform origin-left group-hover:scale-x-150 transition-transform"></div>
                <h3 className="text-2xl font-heading font-bold text-white mb-2">{title}</h3>
                <p className="text-gray-300 text-sm mb-6 max-w-sm">{description}</p>
                <button className="flex items-center text-sm font-bold text-orange-500 tracking-wider uppercase group/btn">
                    Learn More <ArrowUpRight size={16} className="ml-2 group-hover/btn:rotate-45 transition-transform" />
                </button>
            </div>
        </motion.div>
    );
};

export const CapabilitiesSection = () => {
    const capabilities = [
        { title: "In-house R&D", description: "Optical design, prototyping, and application-specific development.", imagePlaceholder: "[Image: Engineering/R&D Facility]" },
        { title: "Quality & Testing", description: "Standards-aligned validation for performance, durability, and reliability.", imagePlaceholder: "[Image: Quality Lab/Testing]" },
        { title: "Automation-led Manufacturing", description: "Controlled, repeatable processes designed for consistency at scale.", imagePlaceholder: "[Image: Automated Assembly Line]" },
        { title: "Traceability & Process Control", description: "Disciplined systems that ensure accountability across production.", imagePlaceholder: "[Image: Process Control Screen]" },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl font-heading font-bold text-navy-900 mb-6">Engineering That <span className="text-orange-600">Scales</span></h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            FOKAL's lighting solutions are built on a foundation of in-house engineering, testing, and automation.
                            From design and validation to controlled production, our systems are developed to deliver predictable performance.
                        </p>
                    </div>
                    <div className="hidden lg:block w-32 h-1 bg-gray-100 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {capabilities.map((cap, idx) => (
                        <CapabilityBlock key={idx} {...cap} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
};
