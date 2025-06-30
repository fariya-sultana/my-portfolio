import React from 'react';
import { motion } from 'framer-motion';
import {
    Github,
    Linkedin,
    Mail,
    Phone,
    MapPin,
    Heart,
    Coffee,
    ExternalLink,
    ArrowUp,
    Twitter,
    Instagram,
    Youtube
} from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: 'GitHub',
            icon: Github,
            href: 'https://github.com/fariya-sultana',
            color: 'hover:text-gray-400'
        },
        {
            name: 'LinkedIn',
            icon: Linkedin,
            href: 'https://linkedin.com/in/fariya-sultana',
            color: 'hover:text-blue-400'
        },
        {
            name: 'Email',
            icon: Mail,
            href: 'mailto:fariya.sultana.dev@gmail.com',
            color: 'hover:text-red-400'
        },
        {
            name: 'Twitter',
            icon: Twitter,
            href: 'https://twitter.com/fariya_sultana',
            color: 'hover:text-sky-400'
        },
    ];

    const quickLinks = [
        { name: 'About', href: 'about' },
        { name: 'Skills', href: 'skills' },
        { name: 'Projects', href: 'projects' },
        { name: 'Services', href: 'services' },
        { name: 'Testimonials', href: 'testimonials' },
    ];

    const services = [
        'Web Development',
        'UI/UX Design',
        'API Development',
        'Database Design',
        'DevOps & Deployment'
    ];

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offsetTop = element.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <footer className="relative bg-slate-900 border-t border-gray-800 overflow-hidden px-4">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent" />
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl" />

            <div className="relative z-10">
                {/* Main Footer Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="container-width py-16"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                        {/* About Section */}
                        <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold gradient-text">
                                    Fariya Sultana
                                </h3>
                                <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                                    Passionate Full Stack Developer crafting exceptional digital experiences
                                    with modern technologies and creative solutions.
                                </p>
                            </div>

                            {/* Contact Info */}
                            <div className="space-y-3">
                                <motion.div
                                    whileHover={{ x: 5 }}
                                    className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
                                >
                                    <MapPin size={18} className="text-purple-400" />
                                    <span>Noakhali, Bangladesh</span>
                                </motion.div>
                                <motion.a
                                    href="mailto:fariya.sultana.dev@gmail.com"
                                    whileHover={{ x: 5 }}
                                    className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
                                >
                                    <Mail size={18} className="text-purple-400" />
                                    <span>fariya.sultana.dev@gmail.com</span>
                                </motion.a>
                                <motion.a
                                    href="tel:+8801894690440"
                                    whileHover={{ x: 5 }}
                                    className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
                                >
                                    <Phone size={18} className="text-purple-400" />
                                    <span>+880 1894690440</span>
                                </motion.a>
                            </div>

                            {/* Social Links */}
                            <div className="flex flex-wrap gap-4">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.2, rotate: 5 }}
                                        whileTap={{ scale: 0.9 }}
                                        className={`p-3 bg-gray-800 rounded-full text-gray-400 transition-all duration-300 ${social.color} hover:bg-gray-700 glow`}
                                        aria-label={social.name}
                                    >
                                        <social.icon size={20} />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Quick Links */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            <h4 className="text-xl font-semibold text-white">Quick Links</h4>
                            <ul className="space-y-3">
                                {quickLinks.map((link) => (
                                    <li key={link.name}>
                                        <motion.button
                                            onClick={() => scrollToSection(link.href)}
                                            whileHover={{ x: 5 }}
                                            className="text-gray-400 hover:text-purple-400 transition-colors duration-200 flex items-center space-x-2"
                                        >
                                            <span>•</span>
                                            <span>{link.name}</span>
                                        </motion.button>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Services */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            <h4 className="text-xl font-semibold text-white">Services</h4>
                            <ul className="space-y-3">
                                {services.map((service) => (
                                    <li key={service}>
                                        <motion.div
                                            whileHover={{ x: 5 }}
                                            className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2"
                                        >
                                            <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                                            <span className="text-sm">{service}</span>
                                        </motion.div>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800">
                    <div className="container-width py-6">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="flex items-center space-x-2 text-gray-400"
                            >
                                <span>&copy; {currentYear} Fariya Sultana. Made with</span>
                                <Heart size={16} className="text-red-500 animate-pulse" />
                                <span>and lots of</span>
                                <Coffee size={16} className="text-amber-500" />
                            </motion.div>

                        </div>
                    </div>
                </div>

                {/* Animated Elements */}
                <div className="absolute top-10 left-10 w-2 h-2 bg-purple-400 rounded-full animate-ping" />
                <div className="absolute bottom-10 right-10 w-2 h-2 bg-pink-400 rounded-full animate-ping delay-1000" />
                <div className="absolute top-1/2 left-10 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-2000" />
            </div>
        </footer>
    );
};

export default Footer;