import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';

const GenericPage = ({ title, subtitle }) => (
    <div className="min-h-screen bg-white">
        <PageHeader title={title} subtitle={subtitle} />
        <div className="container mx-auto px-4 py-20 text-center">
            <div className="inline-block p-10 border-2 border-dashed border-gray-200 rounded-lg">
                <p className="text-gray-500 text-lg">Content for <span className="font-bold text-navy-900">{title}</span> is coming soon.</p>
            </div>
        </div>
    </div>
);

export const About = () => <GenericPage title="About Us" subtitle="40 Years of Engineering Excellence and Innovation." />;
export const Divisions = () => <GenericPage title="Our Divisions" subtitle="Specialized lighting solutions for Automotive, Defence, and Aerospace." />;
export const Products = () => <GenericPage title="Our Products" subtitle="Explore our certified range of lighting solutions." />;
export const Technology = () => <GenericPage title="Technology & R&D" subtitle="Innovation driven by in-house engineering and testing." />;
export const Partners = () => <GenericPage title="Partners" subtitle="Trusted by leaders in the industry." />;
export const Careers = () => <GenericPage title="Careers" subtitle="Join our team of engineers and innovators." />;
export const Contact = () => <GenericPage title="Contact Us" subtitle="Get in touch with our team for quotes and support." />;
