import React, { useState } from 'react';
import { Globe } from 'lucide-react';

const Logo = ({ size = 'md', showSubtitle = true, className = '' }) => {
    const [imgError, setImgError] = useState(false);

    const sizeMap = {
        sm: { icon: 'w-8 h-8', text: 'text-lg', subtitle: 'text-[8px]' },
        md: { icon: 'w-10 h-10', text: 'text-2xl', subtitle: 'text-[9px]' },
        lg: { icon: 'w-12 h-12', text: 'text-3xl', subtitle: 'text-[10px]' },
    };

    const currentSize = sizeMap[size] || sizeMap.md;

    return (
        <div className={`flex items-center gap-3 select-none group ${className}`}>
            {/* Luxury Vector Emblem Icon */}
            <div
                className={`relative ${currentSize.icon} rounded-full border border-secondary/60 shadow-lg shadow-secondary/15 bg-slate-900/90 flex items-center justify-center p-1.5 transition-all duration-300 group-hover:border-secondary group-hover:shadow-secondary/30 group-hover:scale-105`}
            >
                <svg
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                >
                    <defs>
                        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#FDE68A" />
                            <stop offset="40%" stopColor="#E5B869" />
                            <stop offset="100%" stopColor="#B48222" />
                        </linearGradient>
                        <linearGradient id="goldLight" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#FFF2B2" />
                            <stop offset="100%" stopColor="#E5B869" />
                        </linearGradient>
                        <linearGradient id="goldDark" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#C59324" />
                            <stop offset="100%" stopColor="#8C620E" />
                        </linearGradient>
                    </defs>

                    {/* Outer Coordinate Rings */}
                    <circle cx="50" cy="50" r="46" stroke="url(#goldGrad)" strokeWidth="1.5" strokeOpacity="0.7" />
                    <circle cx="50" cy="50" r="41" stroke="url(#goldGrad)" strokeWidth="0.75" strokeDasharray="2 3" strokeOpacity="0.5" />

                    {/* Globe Meridian and Parallels */}
                    <ellipse cx="50" cy="50" rx="34" ry="14" stroke="url(#goldGrad)" strokeWidth="0.8" strokeOpacity="0.4" />
                    <ellipse cx="50" cy="50" rx="14" ry="34" stroke="url(#goldGrad)" strokeWidth="0.8" strokeOpacity="0.4" />
                    <circle cx="50" cy="50" r="34" stroke="url(#goldGrad)" strokeWidth="0.8" strokeOpacity="0.4" />

                    {/* 4 Minor Compass Points (Intercardinal) */}
                    {/* NE */}
                    <polygon points="50,50 47,47 70,30" fill="url(#goldLight)" opacity="0.85" />
                    <polygon points="50,50 53,53 70,30" fill="url(#goldDark)" opacity="0.85" />
                    {/* NW */}
                    <polygon points="50,50 53,47 30,30" fill="url(#goldLight)" opacity="0.85" />
                    <polygon points="50,50 47,53 30,30" fill="url(#goldDark)" opacity="0.85" />
                    {/* SE */}
                    <polygon points="50,50 47,53 70,70" fill="url(#goldLight)" opacity="0.85" />
                    <polygon points="50,50 53,47 70,70" fill="url(#goldDark)" opacity="0.85" />
                    {/* SW */}
                    <polygon points="50,50 53,53 30,70" fill="url(#goldLight)" opacity="0.85" />
                    <polygon points="50,50 47,47 30,70" fill="url(#goldDark)" opacity="0.85" />

                    {/* 4 Major Compass Points (Cardinal) - Faceted 3D Metal Sheen */}
                    {/* North */}
                    <polygon points="50,50 45,50 50,10" fill="url(#goldLight)" />
                    <polygon points="50,50 55,50 50,10" fill="url(#goldDark)" />
                    {/* South */}
                    <polygon points="50,50 55,50 50,90" fill="url(#goldLight)" />
                    <polygon points="50,50 45,50 50,90" fill="url(#goldDark)" />
                    {/* East */}
                    <polygon points="50,50 50,45 90,50" fill="url(#goldLight)" />
                    <polygon points="50,50 50,55 90,50" fill="url(#goldDark)" />
                    {/* West */}
                    <polygon points="50,50 50,55 10,50" fill="url(#goldLight)" />
                    <polygon points="50,50 50,45 10,50" fill="url(#goldDark)" />

                    {/* Central Core Ring & Gem */}
                    <circle cx="50" cy="50" r="8" fill="#0B1325" stroke="url(#goldGrad)" strokeWidth="1.5" />
                    <circle cx="50" cy="50" r="3.5" fill="url(#goldGrad)" />
                </svg>
            </div>

            {/* Brand Typography */}
            <div className="flex flex-col">
                <span className={`font-serif font-bold text-white tracking-wider flex items-center leading-none ${currentSize.text}`}>
                    NEXUS<span className="text-secondary ml-0.5">GLOBAL</span>
                </span>
                {showSubtitle && (
                    <span
                        className={`uppercase tracking-[0.22em] text-slate-400 font-medium mt-1 leading-none ${currentSize.subtitle}`}
                    >
                        Logistics & Shipping
                    </span>
                )}
            </div>
        </div>
    );
};

export default Logo;
