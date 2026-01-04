import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Maximize, Repeat, FileCheck, Flag, Users } from 'lucide-react';

const ValuePropItem = ({ icon: Icon, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="flex items-start space-x-4 p-6 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
    >
        <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-navy-800 flex items-center justify-center border border-white/10 text-orange-500">
                <Icon size={24} />
            </div>
        </div>
        <div>
            <h4 className="text-lg font-bold text-white mb-2 font-heading tracking-wide">{title}</h4>
            <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
        </div>
    </motion.div>
);

export const ValuePropositions = () => {
    const props = [
        { icon: Settings, title: "Reliability", description: "Products designed to perform consistently across real-world operating conditions." },
        { icon: Maximize, title: "Precision", description: "Tight control over geometry, output, and assembly for predictable performance." },
        { icon: Repeat, title: "Consistency", description: "Repeatable quality across large volumes, batches, and programs." },
        { icon: FileCheck, title: "Compliance", description: "Standards-led development aligned with automotive and institutional requirements." },
        { icon: Flag, title: "Indigenization", description: "Supporting India's self-reliance in critical defense and automotive sectors." },
        { icon: Users, title: "Trust", description: "Partnerships built over decades through accountability and delivery." },
    ];

    return (
        <section className="py-24 bg-navy-900 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:20px_20px]"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="mb-16 md:flex md:items-end md:justify-between border-b border-white/10 pb-8">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">What Defines <span className="text-orange-500">FOKAL</span></h2>
                        <p className="text-gray-400 max-w-xl">Engineering excellence and core values that drive our manufacturing philosophy.</p>
                    </div>
                    <div className="hidden md:block">
                        <span className="text-6xl font-black text-white/5 font-heading">VALUES</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {props.map((prop, idx) => (
                        <ValuePropItem key={idx} {...prop} delay={idx * 0.1} />
                    ))}
                </div>
            </div>
        </section>
    );
};
