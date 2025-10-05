'use client';
import React from 'react';

const Footer = () => (
    <footer className="bg-white border-t border-gray-200">
        <div className="container mx-auto px-6 py-8">
            <div className="text-center text-gray-600">
                <p>&copy; {new Date().getFullYear()} VersaTech Engineering Solutions. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
);

export default Footer;
