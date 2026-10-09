import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-rustic-light shadow-md fixed w-full z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <div className="flex items-center">
                        <span className="font-serif text-3xl font-bold text-rustic-primary">Rustic Crumb</span>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#" className="text-rustic-dark hover:text-rustic-primary font-medium transition">Home</a>
                        <a href="#" className="text-rustic-dark hover:text-rustic-primary font-medium transition">Menu</a>
                        <a href="#" className="text-rustic-dark hover:text-rustic-primary font-medium transition">About</a>
                        <a href="#" className="text-rustic-dark hover:text-rustic-primary font-medium transition">Contact</a>
                        <button className="bg-rustic-primary text-white px-6 py-2 rounded-full hover:bg-rustic-dark transition duration-300 shadow-lg">
                            Order Now
                        </button>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-rustic-dark focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-rustic-light pb-4 px-4">
                    <a href="#" className="block py-2 text-rustic-dark hover:text-rustic-primary">Home</a>
                    <a href="#" className="block py-2 text-rustic-dark hover:text-rustic-primary">Menu</a>
                    <a href="#" className="block py-2 text-rustic-dark hover:text-rustic-primary">About</a>
                    <a href="#" className="block py-2 text-rustic-dark hover:text-rustic-primary">Contact</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
