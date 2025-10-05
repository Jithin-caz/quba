'use client';
import React from 'react';
import { Code2, Cpu, Printer, HardDrive, LucideProps } from 'lucide-react';
import FadeInSection from './fadeIn';

// Service Card Component
type ServiceCardProps = {
    icon: React.ComponentType<LucideProps>;
    title: string;
    description: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => {
    return (
        <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="bg-blue-100 text-blue-600 rounded-full h-12 w-12 flex items-center justify-center mb-4">
                <Icon className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-xl text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
        </div>
    );
};

// Services Section Component
const ServicesSection = () => {
    const services = [
        { icon: Code2, title: "Web & App Development", description: "Crafting responsive websites and powerful mobile applications tailored to your business needs, using the latest technologies for optimal performance." },
        { icon: Cpu, title: "Simulation Services", description: "Providing advanced computational simulations to analyze, validate, and optimize your designs for real-world performance and efficiency." },
        { icon: Printer, title: "3D Printing Service", description: "High-precision 3D printing for rapid prototyping, custom parts, and small-scale manufacturing. We turn your digital models into tangible objects." },
        { icon: HardDrive, title: "OS Installation & Setup", description: "Expert installation and configuration of operating systems (Windows, Linux, macOS) for servers and workstations, ensuring stability and security." },
    ];

    return (
        <section id="services" className="py-20 bg-white">
             <FadeInSection>
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="text-blue-600 font-semibold">WHAT WE DO</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Our Comprehensive Services</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto mt-4">From digital concepts to physical prototypes, we offer a complete suite of services to bring your ideas to life.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map(service => <ServiceCard key={service.title} {...service} />)}
                    </div>
                </div>
            </FadeInSection>
        </section>
    );
};

export default ServicesSection;
