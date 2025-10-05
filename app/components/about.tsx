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
                        <p className="text-gray-600 mb-4">We are a collective of passionate engineers with a broad spectrum of experience across software, mechanical, and systems engineering. Our diverse backgrounds empower us to tackle complex challenges and deliver robust, innovative solutions that drive success for our clients.</p>
                        <p className="text-gray-600">Our collaborative approach ensures that we leverage the full depth of our expertise on every project, resulting in high-quality, efficient, and scalable outcomes.</p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                        <h3 className="font-bold text-xl mb-4 text-gray-900">Our Core Strengths</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <Zap className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                                <span className="text-gray-800"><strong >Innovation:</strong> Continuously exploring new technologies to provide creative and effective solutions.</span>
                            </li>
                            <li className="flex items-start">
                                <Users className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                                <span className="text-gray-800"><strong >Collaboration:</strong> Working closely with clients to understand their vision and goals perfectly.</span>
                            </li>
                            <li className="flex items-start">
                                <ShieldCheck className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                                <span className="text-gray-800"><strong >Quality:</strong> Upholding the highest standards of engineering excellence in every project we undertake.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </FadeInSection>
    </section>
);

export default AboutSection;
