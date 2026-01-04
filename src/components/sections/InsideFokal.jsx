import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ title, description, imagePlaceholder }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="relative h-[500px] overflow-hidden group cursor-pointer"
        >
            <div className="absolute inset-0 bg-gray-800 transition-transform duration-700 group-hover:scale-110">
                {/* Placeholder for Image */}
                <div className="w-full h-full flex items-center justify-center text-gray-600 font-mono text-sm bg-gradient-to-br from-gray-700 to-gray-800">
                    {imagePlaceholder}
                </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>

            <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="border-l-4 border-orange-500 pl-4 mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-gray-300 text-sm">{description}</p>
                </div>
                <h3 className="text-2xl font-heading font-bold text-white uppercase tracking-wider group-hover:text-orange-500 transition-colors">
                    {title}
                </h3>
            </div>
        </motion.div>
    );
}

export const InsideFokal = () => {
    return (
        <section className="bg-white">
            <div className="grid grid-cols-1 md:grid-cols-3">
                <FeatureCard
                    title="Engineering & R&D"
                    description="Design, prototyping, and application-specific development."
                    imagePlaceholder="[CAD Workstation / Design Team]"
                />
                <FeatureCard
                    title="Quality & Testing"
                    description="Standards-aligned validation for photometry and durability."
                    imagePlaceholder="[Testing Lab / Photometry]"
                />
                <FeatureCard
                    title="Manufacturing Excellence"
                    description="Disciplined, automation-led processes for scale."
                    imagePlaceholder="[Production Floor / Assembly]"
                />
            </div>
        </section>
    );
};
