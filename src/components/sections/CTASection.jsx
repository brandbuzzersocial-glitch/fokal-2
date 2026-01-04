import React from 'react';
import { Button } from '../ui/Button';

export const CTASection = () => {
    return (
        <section className="py-24 bg-navy-950 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            <div className="container mx-auto px-4 relative z-10">
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">Have a Specific Requirement?</h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
                    Our team can help you select the right certified product or develop a platform-specific lighting solution tailored to your needs.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button variant="primary" size="lg" className="px-10">
                        Request Quote
                    </Button>
                    <Button variant="outline" size="lg">
                        Schedule Consultation
                    </Button>
                </div>
            </div>
        </section>
    );
};
