import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
};
