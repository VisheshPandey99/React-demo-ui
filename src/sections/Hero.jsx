import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Anchor, Plane, Truck } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1494412574643-35d324698428?q=80&w=2072&auto=format&fit=crop" // High quality container ship/port image
                    alt="Global Logistics"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="inline-block py-1 px-3 border border-secondary/50 rounded-full text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-sm">
                        Global Logistics Partner
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight"
                >
                    Bridging Markets <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-amber-200">
                        Across Borders
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 font-light"
                >
                    Seamless import-export solutions tailored for the modern world.
                    We ensure your cargo reaches its destination with precision, speed, and reliability.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col md:flex-row gap-4 justify-center items-center"
                >
                    <button className="group relative px-8 py-4 bg-secondary text-primary font-bold uppercase tracking-wider overflow-hidden rounded-sm">
                        <span className="relative z-10 flex items-center gap-2">
                            Explore Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </button>
                    <button className="px-8 py-4 border border-slate-500 text-white hover:border-secondary hover:text-secondary transition-colors uppercase tracking-wider font-medium rounded-sm">
                        Track Shipment
                    </button>
                </motion.div>
            </div>

            {/* Floating Icons / Decor */}
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-20 left-10 md:left-20 text-slate-500/20 hidden md:block"
            >
                <Anchor size={120} />
            </motion.div>
            <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-40 right-10 md:right-20 text-slate-500/20 hidden md:block"
            >
                <Plane size={120} />
            </motion.div>
        </section>
    );
};

export default Hero;
