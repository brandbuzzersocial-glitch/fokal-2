import React from 'react';

export const PageHeader = ({ title, subtitle }) => {
    return (
        <div className="bg-navy-900 pt-32 pb-20 px-4">
            <div className="container mx-auto">
                <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">{title}</h1>
                {subtitle && <p className="text-xl text-gray-400 max-w-2xl">{subtitle}</p>}
            </div>
        </div>
    );
};
