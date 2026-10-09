import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    { value: "150+", label: "Countries Served" },
    { value: "10k+", label: "Happy Clients" },
    { value: "5M+", label: "Tons Shipped" },
    { value: "25", label: "Global Offices" }
];

const GlobalReach = () => {
    return (
        <section id="global" className="py-24 bg-primary relative overflow-hidden">
            {/* World Map Background (Abstract) */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
                    alt="World Map"
                    className="w-full h-full object-cover invert"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-secondary font-bold tracking-widest uppercase text-sm mb-4"
                    >
                        Global Network
                    </motion.h4>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
                    >
                        Connecting Continents
                    </motion.h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Our strategic presence in key logistics hubs ensures your cargo moves smoothly across borders, time zones, and oceans.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center p-6 bg-slate-800/30 backdrop-blur-sm rounded-sm border border-slate-700 hover:border-secondary/50 transition-colors"
                        >
                            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</h3>
                            <p className="text-secondary uppercase tracking-wider text-xs font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-secondary to-amber-500 rounded-sm p-12 text-center relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-multiply" />
                    <div className="relative z-10">
                        <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                            Ready to Expand Your Reach?
                        </h3>
                        <button className="px-8 py-3 bg-primary text-white font-bold uppercase tracking-wider hover:bg-slate-900 transition-colors rounded-sm shadow-lg">
                            Get a Quote Today
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default GlobalReach;
