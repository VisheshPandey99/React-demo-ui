import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        quote: "NexusGlobal transformed our supply chain. Their attention to detail and global reach is unmatched.",
        author: "Sarah Jenkins",
        role: "CEO, TechImports Ltd."
    },
    {
        quote: "Reliable, efficient, and professional. The best logistics partner we've worked with in 10 years.",
        author: "Michael Chen",
        role: "Director of Operations, GlobalTrade Co."
    },
    {
        quote: "They handled our complex machinery shipment with ease. Highly recommended for heavy cargo.",
        author: "David Ross",
        role: "Logistics Manager, BuildCorp"
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-24 bg-slate-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h4 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">Testimonials</h4>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Trusted by Industry Leaders</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-primary p-8 border border-slate-800 relative"
                        >
                            <Quote className="text-secondary/20 w-12 h-12 absolute top-6 left-6" />
                            <p className="text-slate-300 italic mb-6 relative z-10 pt-8">"{item.quote}"</p>
                            <div>
                                <h5 className="text-white font-bold">{item.author}</h5>
                                <p className="text-slate-500 text-sm">{item.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
