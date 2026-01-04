import React from 'react';
import { motion } from 'framer-motion';

const LogoMarquee = ({ items, direction = 'left', speed = 20 }) => {
    return (
        <div className="flex overflow-hidden relative w-full group">
            <motion.div
                className="flex gap-16 items-center whitespace-nowrap min-w-full px-8"
                animate={{ x: direction === 'left' ? ["0%", "-50%"] : ["-50%", "0%"] }}
                transition={{ duration: speed, ease: "linear", repeat: Infinity }}
            >
                {[...items, ...items].map((logo, idx) => (
                    <div key={idx} className="flex items-center justify-center min-w-[120px] h-16 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                        <span className="text-xl font-heading font-bold text-gray-400 hover:text-white transition-colors cursor-default select-none">
                            {logo}
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}

export const TrustBadgeSection = () => {
    const oemLogos = [
        "HERO", "HONDA", "SUZUKI", "YAMAHA", "BAJAJ", "TVS", "KAWASAKI", "MAHINDRA", "HYUNDAI", "PIAGGIO", "ASHOK LEYLAND"
    ];
    const defenseLogos = [
        "INDIAN ARMY", "INDIAN NAVY", "INDIAN AIR FORCE", "HAL", "DRDO", "INDIAN RAILWAYS", "ORDNANCE FACTORY", "BEML"
    ];

    return (
        <section className="py-12 bg-navy-900 border-b border-white/5 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 mb-8 text-center">
                <h3 className="text-sm font-bold tracking-widest text-gray-500 uppercase font-barlow">Trusted by India's Leading Manufacturers</h3>
            </div>

            <div className="flex flex-col gap-12">
                {/* Automotive Row */}
                <LogoMarquee items={oemLogos} direction="left" speed={40} />

                {/* Horizontal Divider with Text */}
                <div className="relative flex items-center justify-center my-2">
                    <div className="h-[1px] bg-white/5 w-full max-w-xs"></div>
                    <span className="mx-4 text-xs text-gray-600 font-mono tracking-widest">DEFENCE & GOVT.</span>
                    <div className="h-[1px] bg-white/5 w-full max-w-xs"></div>
                </div>

                {/* Defense Row */}
                <LogoMarquee items={defenseLogos} direction="right" speed={45} />
            </div>
        </section>
    );
};
