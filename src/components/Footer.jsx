import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
    return (
        <footer className="bg-primary pt-20 pb-10 border-t border-slate-800 text-slate-400 text-sm">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div>
                        <a href="#" className="inline-block mb-6 transition-transform duration-300 hover:scale-[1.02]">
                            <Logo size="md" />
                        </a>
                        <p className="mb-6 leading-relaxed">
                            Your trusted partner in global trade. We bridge markets with efficiency, reliability, and innovation.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-slate-400 hover:text-secondary transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-slate-400 hover:text-secondary transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-slate-400 hover:text-secondary transition-colors"><Linkedin size={20} /></a>
                            <a href="#" className="text-slate-400 hover:text-secondary transition-colors"><Instagram size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-wider mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><a href="#about" className="hover:text-secondary transition-colors">About Us</a></li>
                            <li><a href="#services" className="hover:text-secondary transition-colors">Services</a></li>
                            <li><a href="#global" className="hover:text-secondary transition-colors">Global Network</a></li>
                            <li><a href="#" className="hover:text-secondary transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-secondary transition-colors">News & Insights</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-wider mb-6">Services</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="hover:text-secondary transition-colors">Ocean Freight</a></li>
                            <li><a href="#" className="hover:text-secondary transition-colors">Air Freight</a></li>
                            <li><a href="#" className="hover:text-secondary transition-colors">Land Transportation</a></li>
                            <li><a href="#" className="hover:text-secondary transition-colors">Warehousing</a></li>
                            <li><a href="#" className="hover:text-secondary transition-colors">Customs Brokerage</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-wider mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-secondary w-5 h-5 flex-shrink-0" />
                                <span>123 Global Trade Blvd, <br />Logistics City, NY 10001</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-secondary w-5 h-5 flex-shrink-0" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-secondary w-5 h-5 flex-shrink-0" />
                                <span>info@nexusglobal.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>&copy; {new Date().getFullYear()} NexusGlobal. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
