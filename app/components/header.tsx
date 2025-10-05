'use client';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className=" backdrop-blur-md top-0 z-50 fixed w-full">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <a href="#" className="text-2xl font-bold text-gray-900">
                        Verza Tech<span className="text-blue-600">.</span>
                    </a>
                    <nav className="hidden md:flex items-center space-x-8">
                        <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About Us</a>
                        <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a>
                        <a href="#contact" className="bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition-all shadow-sm">Get in Touch</a>
                    </nav>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
                        {isMenuOpen ? <X className="h-6 w-6 text-gray-800" /> : <Menu className="h-6 w-6 text-gray-800" />}
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden px-6 pb-4">
                    <a href="#about" className="block py-2 text-gray-600 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>About Us</a>
                    <a href="#services" className="block py-2 text-gray-600 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Services</a>
                    <a href="#contact" className="block mt-2 bg-blue-600 text-white font-medium py-2 px-4 rounded-lg text-center hover:bg-blue-700" onClick={() => setIsMenuOpen(false)}>Get in Touch</a>
                </div>
            )}
        </header>
    );
};

export default Header;
