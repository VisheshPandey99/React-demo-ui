import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-rustic-dark text-rustic-secondary py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-2xl font-serif font-bold text-white mb-4">Rustic Crumb</h3>
                        <p className="text-gray-400">
                            Bringing the warmth of traditional baking to your home. Fresh ingredients, timeless recipes, and a whole lot of love.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white transition">Home</a></li>
                            <li><a href="#" className="hover:text-white transition">Menu</a></li>
                            <li><a href="#" className="hover:text-white transition">About Us</a></li>
                            <li><a href="#" className="hover:text-white transition">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-white mb-4">Contact Us</h4>
                        <p className="text-gray-400 mb-2">123 Baker Street, Foodie City</p>
                        <p className="text-gray-400 mb-2">hello@rusticcrumb.com</p>
                        <p className="text-gray-400">(555) 123-4567</p>
                        <div className="flex space-x-4 mt-4">
                            {/* Social Icons Placeholders */}
                            <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-rustic-primary transition">
                                <span className="sr-only">Facebook</span>
                                f
                            </a>
                            <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-rustic-primary transition">
                                <span className="sr-only">Instagram</span>
                                i
                            </a>
                            <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-rustic-primary transition">
                                <span className="sr-only">Twitter</span>
                                t
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Rustic Crumb Bakery. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
