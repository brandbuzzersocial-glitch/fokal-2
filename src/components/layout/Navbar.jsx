import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import { Button } from '../ui/Button';
import { clsx } from 'clsx';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Divisions', path: '/divisions' },
        { name: 'Products', path: '/products' },
        { name: 'Technology', path: '/technology' },
        { name: 'Partners', path: '/partners' },
        { name: 'Careers', path: '/careers' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <>
            {/* Top Bar - Optional for extra contact info, usually good for industrial sites */}
            <div className="hidden lg:flex bg-navy-900 text-gray-400 text-xs py-2 px-6 justify-end space-x-6 border-b border-white/5 z-50 relative">
                <div className="flex items-center space-x-2">
                    <Phone size={14} className="text-orange-500" />
                    <span>+91 8130329152</span>
                </div>
                <div className="flex items-center space-x-2">
                    <Mail size={14} className="text-orange-500" />
                    <span>custcare@fokallamps.com</span>
                </div>
            </div>

            <header
                className={clsx(
                    "fixed w-full z-40 transition-all duration-300",
                    isScrolled ? "bg-navy-900/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"
                )}
            >
                <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2 group">
                        <div className="text-3xl font-heading font-bold text-white tracking-widest uppercase">
                            FOKAL<span className="text-orange-500">.</span>
                        </div>
                        <div className="hidden xl:block h-8 w-[1px] bg-white/20 mx-3"></div>
                        <span className={clsx("hidden xl:block text-xs text-gray-300 leading-tight uppercase tracking-wider transition-opacity", isScrolled ? "opacity-0 w-0" : "opacity-100")}>
                            Mithabhi Lamps<br />Pvt. Ltd.
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-white/80 hover:text-orange-500 px-3 py-2 text-sm font-medium uppercase tracking-wide transition-colors font-barlow"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA & Mobile Toggle */}
                    <div className="flex items-center space-x-4">
                        <Button variant="primary" size="sm" className="hidden sm:flex">
                            Get Quote
                        </Button>

                        <button
                            className="lg:hidden text-white p-2"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="absolute top-full left-0 w-full bg-navy-900 border-t border-white/10 p-4 lg:hidden flex flex-col space-y-4 shadow-xl">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-white hover:text-orange-500 py-2 border-b border-white/5 uppercase font-medium tracking-wider text-sm"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button variant="primary" className="w-full justify-center">Get Quote</Button>
                    </div>
                )}
            </header>
        </>
    );
};
