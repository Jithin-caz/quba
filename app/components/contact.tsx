'use client';
import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import FadeInSection from './fadeIn';

const ContactSection = () => {
    const [formMessage, setFormMessage] = useState({ type: '', text: '' });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormMessage({ type: 'success', text: 'Thank you! Your message has been sent.' });
        // In a real app, you would handle form submission to a backend here.
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setFormMessage({ type: '', text: '' }), 5000);
    };
    
    return (
        <section id="contact" className="py-20 bg-gray-50">
            <FadeInSection>
                <div className="container mx-auto px-6">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden grid md:grid-cols-2">
                        <div className="p-8 md:p-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Let&apos;s Build Something Great Together</h2>
                            <p className="text-gray-600 mb-8">Have a project in mind or just want to learn more about our services? Fill out the form, and we&apos;ll get back to you as soon as possible.</p>
                            <form onSubmit={handleSubmit}>
                                <div className="space-y-4">
                                    <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" required />
                                    <input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" required />
                                    <textarea placeholder="Your Message" rows={5} className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" required></textarea>
                                    <button type="submit" className="w-full bg-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700 transition-all shadow-sm">Send Message</button>
                                </div>
                            </form>
                             {formMessage.text && (
                                <div className={`mt-4 text-center p-2 rounded-lg ${formMessage.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                    {formMessage.text}
                                </div>
                            )}
                        </div>
                        <div className="bg-blue-600 text-white p-8 md:p-12 flex flex-col justify-center">
                            <h3 className="font-bold text-xl mb-4">Contact Information</h3>
                            <div className="space-y-4">
                                <p className="flex items-center"><Mail className="h-5 w-5 mr-3" /> contact@versatech.com</p>
                                <p className="flex items-center"><Phone className="h-5 w-5 mr-3" /> +1 (555) 123-4567</p>
                                <p className="flex items-start"><MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0" /> 123 Innovation Drive, Tech City, 54321</p>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeInSection>
        </section>
    );
};

export default ContactSection;
