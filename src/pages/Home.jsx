import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { TrustBadgeSection } from '../components/sections/TrustBadges';
import { DivisionsOverview } from '../components/sections/DivisionsOverview';
import { ValuePropositions } from '../components/sections/ValuePropositions';
import { CapabilitiesSection } from '../components/sections/CapabilitiesSection';
import { FeaturedProducts } from '../components/sections/FeaturedProducts';
import { Statistics } from '../components/sections/Statistics';
import { InsideFokal } from '../components/sections/InsideFokal';
import { LeadMagnetSection } from '../components/sections/LeadMagnetSection';
import { CTASection } from '../components/sections/CTASection';

export const Home = () => {
    return (
        <div className="bg-white">
            <HeroSection />
            <TrustBadgeSection />
            <DivisionsOverview />
            <ValuePropositions />
            <CapabilitiesSection />
            <FeaturedProducts />
            <Statistics />
            <InsideFokal />
            <LeadMagnetSection />
            <CTASection />
        </div>
    );
};
