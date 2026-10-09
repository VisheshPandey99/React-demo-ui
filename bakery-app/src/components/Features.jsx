import React from 'react';

const Features = () => {
    const features = [
        {
            title: "Artisan Breads",
            description: "Handcrafted using traditional methods and organic flour.",
            icon: (
                <svg className="w-12 h-12 text-rustic-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ) // Using a cart icon as placeholder for bread, ideally would be a bread icon
        },
        {
            title: "Fresh Pastries",
            description: "Baked fresh every morning for the perfect start to your day.",
            icon: (
                <svg className="w-12 h-12 text-rustic-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ) // Clock icon for freshness
        },
        {
            title: "Premium Coffee",
            description: "Locally sourced beans roasted to perfection.",
            icon: (
                <svg className="w-12 h-12 text-rustic-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ) // Lightning for energy/coffee
        }
    ];

    return (
        <section className="py-20 bg-rustic-secondary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-rustic-dark mb-4">Why Choose Us</h2>
                    <div className="w-24 h-1 bg-rustic-primary mx-auto"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {features.map((feature, index) => (
                        <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                            <div className="flex justify-center mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-rustic-primary mb-4">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
