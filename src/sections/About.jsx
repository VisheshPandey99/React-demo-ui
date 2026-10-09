import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
    const features = [
        "25+ Years of Experience",
        "Global Network in 100+ Countries",
        "End-to-End Supply Chain Management",
        "24/7 Real-time Tracking Support"
    ];

    return (
        <section id="about" className="py-24 bg-primary relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-800/10 skew-x-12 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="relative rounded-sm overflow-hidden border border-slate-700/50">
                            <img
                                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
                                alt="Warehouse Operations"
                                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-primary/20" />
                        </div>
                        {/* Floating Badge */}
                        <div className="absolute -bottom-10 -right-10 bg-secondary p-8 hidden md:block shadow-xl">
                            <p className="text-4xl font-serif font-bold text-primary">10k+</p>
                            <p className="text-primary/80 font-medium uppercase tracking-wider text-sm">Successful Deliveries</p>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h4 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">Who We Are</h4>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                                Redefining Global Trade Standards
                            </h2>
                            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                At NexusGlobal, we don't just move goods; we power businesses. With a legacy built on trust and efficiency, we navigate the complexities of international trade so you don't have to. From customs clearance to final mile delivery, we are your strategic partner in growth.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <CheckCircle2 className="text-secondary w-5 h-5 flex-shrink-0" />
                                        <span className="text-slate-300">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button className="text-white border-b border-secondary pb-1 hover:text-secondary transition-colors uppercase tracking-widest text-sm font-bold">
                                Read Our Story
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
