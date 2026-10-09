import React from 'react';

const ProductGrid = () => {
    const products = [
        { id: 1, name: "Sourdough Loaf", price: "$8.00", image: "https://placehold.co/400x300/8D6E63/FFF?text=Sourdough" },
        { id: 2, name: "Butter Croissant", price: "$4.50", image: "https://placehold.co/400x300/8D6E63/FFF?text=Croissant" },
        { id: 3, name: "Chocolate Muffin", price: "$3.75", image: "https://placehold.co/400x300/8D6E63/FFF?text=Muffin" },
        { id: 4, name: "Baguette", price: "$5.00", image: "https://placehold.co/400x300/8D6E63/FFF?text=Baguette" },
        { id: 5, name: "Cinnamon Roll", price: "$4.25", image: "https://placehold.co/400x300/8D6E63/FFF?text=Cinnamon+Roll" },
        { id: 6, name: "Fruit Tart", price: "$6.50", image: "https://placehold.co/400x300/8D6E63/FFF?text=Fruit+Tart" },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-rustic-dark mb-4">Our Favorites</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Discover our most loved items, baked fresh daily for you to enjoy.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="group bg-rustic-light rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 border border-rustic-secondary">
                            <div className="relative overflow-hidden h-64">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition duration-300"></div>
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-serif font-bold text-rustic-dark mb-2">{product.name}</h3>
                                <p className="text-rustic-primary font-bold text-lg mb-4">{product.price}</p>
                                <button className="w-full bg-rustic-dark text-white py-2 rounded hover:bg-rustic-primary transition duration-300">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductGrid;
