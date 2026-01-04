import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Linkedin, Twitter, ChevronRight, Award } from 'lucide-react';
import { Button } from '../ui/Button';

export const Footer = () => {
    return (
        <footer className="bg-navy-900 text-white pt-20 pb-8 border-t border-white/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

                    {/* Column 1: Brand */}
                    <div className="lg:col-span-1">
                        <Link to="/" className="text-3xl font-heading font-bold text-white tracking-widest uppercase mb-6 block">
                            FOKAL<span className="text-orange-500">.</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Lighting the way for India's leading manufacturers since 1984. Engineered for precision, built for durability.
                        </p>
                        <div className="flex items-center space-x-3 bg-white/5 p-3 rounded-lg border border-white/10">
                            <Award className="text-orange-500 flex-shrink-0" />
                            <div className="text-xs">
                                <div className="font-bold text-white">National Award Winner</div>
                                <div className="text-gray-500">Ministry of Defence</div>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="font-heading font-bold text-lg mb-6 uppercase tracking-wider">Quick Links</h4>
                        <ul className="space-y-3">
                            {['Home', 'About Us', 'Products', 'Careers', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link to="/" className="text-gray-400 hover:text-orange-500 text-sm flex items-center transition-colors">
                                        <ChevronRight size={14} className="mr-2 text-white/30" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Divisions */}
                    <div>
                        <h4 className="font-heading font-bold text-lg mb-6 uppercase tracking-wider">Divisions</h4>
                        <ul className="space-y-3">
                            {['Automotive Lighting', 'Defence & Aerospace', 'Airfield & Runway', 'Signal & Railways'].map((item) => (
                                <li key={item}>
                                    <Link to="/" className="text-gray-400 hover:text-orange-500 text-sm flex items-center transition-colors">
                                        <ChevronRight size={14} className="mr-2 text-white/30" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Resources */}
                    <div>
                        <h4 className="font-heading font-bold text-lg mb-6 uppercase tracking-wider">Resources</h4>
                        <ul className="space-y-3">
                            {['Download Catalogue', 'Technical Docs', 'Certifications', 'Quality Policy'].map((item) => (
                                <li key={item}>
                                    <Link to="/" className="text-gray-400 hover:text-orange-500 text-sm flex items-center transition-colors">
                                        <ChevronRight size={14} className="mr-2 text-white/30" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 5: Connect */}
                    <div>
                        <h4 className="font-heading font-bold text-lg mb-6 uppercase tracking-wider">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 text-sm text-gray-400">
                                <Mail className="text-orange-500 mt-1 flex-shrink-0" size={16} />
                                <span>custcare@fokallamps.com<br />mithabhi@fokallamps.com</span>
                            </li>
                            <li className="flex items-start space-x-3 text-sm text-gray-400">
                                <Phone className="text-orange-500 mt-1 flex-shrink-0" size={16} />
                                <span>+91 8130329152<br />+91 1275 262136</span>
                            </li>
                            <li className="flex items-start space-x-3 text-sm text-gray-400">
                                <MapPin className="text-orange-500 mt-1 flex-shrink-0" size={16} />
                                <span>Tatarpur Road, Prithla Industrial Area, Palwal 121102, Haryana, India</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>© 2025 FOKAL (Mithabhi Lamps Pvt. Ltd.). All rights reserved.</p>
                    <div className="flex items-center space-x-6 mt-4 md:mt-0">
                        <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
                        <div className="flex items-center space-x-4 ml-4">
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-orange-500 hover:text-white transition-all"><Linkedin size={16} /></a>
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-orange-500 hover:text-white transition-all"><Twitter size={16} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
