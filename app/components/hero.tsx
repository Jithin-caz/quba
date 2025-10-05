'use client';
import React from 'react';

const HeroSection = () => (
    <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">Engineering Solutions for the Modern World</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">A multidisciplinary team of engineers delivering cutting-edge services in development, simulation, and digital fabrication.</p>
            <a href="#services" className="bg-gray-900 text-white font-medium py-3 px-8 rounded-lg hover:bg-gray-800 transition-all shadow-md inline-block">Our Services</a>
        </div>
    </section>
);

export default HeroSection;
