import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollProgress } from '../ui/ScrollProgress';

export const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <ScrollProgress />
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
};
