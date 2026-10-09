import React from 'react';
import { motion } from 'framer-motion';
import { Ship, Plane, Truck, Package, FileCheck, Globe2 } from 'lucide-react';

const services = [
    {
        icon: <Ship size={40} />,
        title: "Ocean Freight",
        description: "Cost-effective shipping for large volumes across all major global routes."
    },
    {
        icon: <Plane size={40} />,
        title: "Air Freight",
        description: "Expedited delivery solutions for time-sensitive and high-value cargo."
    },
    {
        icon: <Truck size={40} />,
        title: "Land Transportation",
        description: "Reliable cross-border trucking and rail services for regional distribution."
    },
    {
        icon: <FileCheck size={40} />,
        title: "Customs Brokerage",
        description: "Expert handling of documentation and compliance to ensure smooth clearance."
    },
    {
        icon: <Package size={40} />,
        title: "Warehousing",
        description: "Secure storage and inventory management solutions at strategic hubs."
    },
    {
        icon: <Globe2 size={40} />,
        title: "Supply Chain Consulting",
        description: "Strategic optimization of your logistics network for maximum efficiency."
    }
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-slate-900 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-secondary font-bold tracking-widest uppercase text-sm mb-4"
                    >
                        Our Expertise
                    </motion.h4>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-serif font-bold text-white"
                    >
                        Comprehensive Logistics Solutions
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-8 bg-primary border border-slate-800 hover:border-secondary/50 transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="mb-6 text-slate-400 group-hover:text-secondary transition-colors duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-secondary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
