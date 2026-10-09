import React from 'react';

const Hero = () => {
    return (
        <div className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/hero-bg.png')" }}>
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="relative z-10 text-center px-4">
                <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-lg">
                    Fresh from the Oven
                </h1>
                <p className="text-xl md:text-2xl text-rustic-light mb-8 max-w-2xl mx-auto drop-shadow-md">
                    Artisan breads and pastries baked with love and tradition every single morning.
                </p>
                <div className="space-x-4">
                    <button className="bg-rustic-primary text-white text-lg px-8 py-3 rounded-full hover:bg-rustic-accent transition duration-300 shadow-xl transform hover:scale-105">
                        View Menu
                    </button>
                    <button className="bg-transparent border-2 border-white text-white text-lg px-8 py-3 rounded-full hover:bg-white hover:text-rustic-dark transition duration-300 shadow-xl">
                        Our Story
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
