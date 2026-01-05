import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BadgeCheck } from 'lucide-react';
import { Button } from '../ui/Button';

const ProductCard = ({ name, code, type, badges }) => {
    const divRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setOpacity(1);
    };

    const handleBlur = () => {
        setOpacity(0);
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <motion.div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            whileHover={{ y: -5 }}
            className="bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-xl hover:border-orange-500/20 transition-all duration-300 overflow-hidden group relative"
        >
            {/* Spotlight Effect */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(220,38,38,0.1), transparent 40%)`,
                }}
            />

            <div className="h-48 bg-gray-100 relative overflow-hidden flex items-center justify-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 text-xs font-mono">
                    [Img: {code}]
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/80 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 z-10">
                    <Button size="sm" variant="primary">View Details</Button>
                </div>
                {/* Badges */}
                <div className="absolute top-3 left-3 flex gap-2 z-10">
                    {badges.map((badge, idx) => (
                        <span key={idx} className="px-2 py-0.5 bg-white/90 backdrop-blur text-[10px] font-bold text-navy-900 rounded shadow-sm border border-gray-200 uppercase tracking-tight">
                            {badge}
                        </span>
                    ))}
                </div>
            </div>

            <div className="p-5 relative z-10">
                <div className="text-xs text-orange-600 font-bold mb-1 uppercase tracking-wider">{type}</div>
                <h4 className="font-heading font-bold text-lg text-navy-900 mb-1">{name}</h4>
                <div className="text-sm text-gray-500 font-mono mb-4">{code}</div>

                <div className="flex items-center text-xs text-gray-400 font-medium group-hover:text-orange-500 transition-colors">
                    View Specs <ArrowRight size={12} className="ml-1" />
                </div>
            </div>
        </motion.div>
    );
};

export const FeaturedProducts = () => {
    const products = [
        { code: "S25", name: "Bayonet Lamp", type: "Signalling & Tail", badges: ["E-MARK", "AIS"] },
        { code: "G18", name: "Compact Lamp", type: "Parking & Indicator", badges: ["AIS"] },
        { code: "T10", name: "Wedge Lamp", type: "Interior & Position", badges: ["E-MARK"] },
        { code: "HS1", name: "Headlamp Bulb", type: "2W Headlamp", badges: ["AIS", "DOT"] },
        { code: "H4", name: "Halogen Main", type: "Main Beam", badges: ["E-MARK", "AIS"] },
        { code: "R5W", name: "Tail Lamp", type: "Signalling", badges: ["E-MARK"] },
        { code: "PY21W", name: "Amber Indicator", type: "Front/Rear Indicator", badges: ["E-MARK"] },
        { code: "T20", name: "Dual Filament", type: "Stop/Tail", badges: ["AIS"] },
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center justify-between mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-center md:text-left mb-6 md:mb-0"
                    >
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-2">Certified Range. Ready to Deploy.</h2>
                        <p className="text-gray-500">Validated for photometry, durability, and environmental performance.</p>
                    </motion.div>
                    <div className="flex gap-4">
                        <Button variant="outline" className="border-navy-200 text-navy-900 hover:bg-navy-50">
                            View All Products
                        </Button>
                        <Button variant="primary">
                            Download Catalogue
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((p, idx) => (
                        <ProductCard key={idx} {...p} />
                    ))}
                </div>
            </div>
        </section>
    );
};
