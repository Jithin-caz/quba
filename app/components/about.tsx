'use client';
import React from 'react';
import { Zap, Users, ShieldCheck } from 'lucide-react';
import FadeInSection from './fadeIn';

const AboutSection = () => (
    <section id="about" className="py-20 bg-gray-50">
        <FadeInSection>
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-blue-600 font-semibold">WHO WE ARE</span>
                        <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">A Team of Diverse Engineering Experts</h2>
                        <p className="text-gray-600 mb-4">We are a group of engineers who love turning ideas into reality. Our team brings together experience in software development, mechanical design, and system engineering, allowing us to take on a wide range of projects , from building sleek web apps to running detailed simulations and creating 3D-printed prototypes.</p>
                        <p className="text-gray-600">What drives us is curiosity and the thrill of solving problems. We enjoy experimenting, learning, and finding smarter ways to build things that actually make a difference. Every project we take on is a chance to collaborate, create, and deliver something that truly works  efficiently, reliably, and with care.</p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                        <h3 className="font-bold text-xl mb-4 text-gray-900">Our Core Strengths</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <Zap className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                                <span className="text-gray-800"><strong >Diverse Expertise:</strong> We combine skills in software, mechanical, and systems engineering to deliver complete solutions.</span>
                            </li>
                            <li className="flex items-start">
                                <Users className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                                <span className="text-gray-800"><strong >Practical Approach:</strong> We focus on building, testing, and refining ideas that work in the real world.</span>
                            </li>
                            <li className="flex items-start">
                                <ShieldCheck className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                                <span className="text-gray-800"><strong >Collaborative Mindset:</strong> We value teamwork, creativity, and continuous learning in everything we do.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </FadeInSection>
    </section>
);

export default AboutSection;
