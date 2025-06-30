import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/img.png'
import { Menu, X, Download } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    const navItems = [
        { name: 'Home', href: 'home' },
        { name: 'About', href: 'about' },
        { name: 'Skills', href: 'skills' },
        { name: 'Projects', href: 'projects' },
        { name: 'Services', href: 'services' },
        { name: 'Testimonials', href: 'testimonials' },
        { name: 'Contact', href: 'contact' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const current = navItems.find(item => {
                const element = document.getElementById(item.href);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });

            if (current) {
                setActiveSection(current.href);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offsetTop = element.offsetTop - 80;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <motion.nav
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                ? 'bg-slate-900/95 backdrop-blur-md shadow-lg shadow-purple-500/10'
                : 'bg-transparent'
                }`}
        >
            <div className="container-width">
                <div className="flex justify-between items-center py-4 px-4">
                    {/* Logo - Left */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="cursor-pointer"
                        onClick={() => scrollToSection('home')}
                    >   
                    <img className='w-12 h-12 rounded-full' src={logo} alt="" />
                        {/* <h1 className="text-3xl font-bold gradient-text ">
                           FS
                        </h1> */}
                    </motion.div>

                    {/* Nav Items - Center */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <motion.button
                                key={item.name}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => scrollToSection(item.href)}
                                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${activeSection === item.href
                                    ? 'text-purple-400'
                                    : 'text-gray-300 hover:text-white'
                                    }`}
                            >
                                {item.name}
                                {activeSection === item.href && (
                                    <motion.div
                                        layoutId="activeSection"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </motion.button>
                        ))}
                    </div>

                    {/* Resume Button - Right */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <motion.a
                            href="/resume.pdf"
                            download="Fariya_Sultana_Resume.pdf"
                            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(139, 92, 246, 0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white  rounded-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center gap-2 glow"
                        >
                            <Download size={20} />
                             Resume
                        </motion.a>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden text-white z-50 relative"
                        aria-label="Toggle menu"
                    >
                        <AnimatePresence mode="wait">
                            {isMenuOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: 0 }}
                                    animate={{ rotate: 180 }}
                                    exit={{ rotate: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <X size={24} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 180 }}
                                    animate={{ rotate: 0 }}
                                    exit={{ rotate: 180 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Menu size={24} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-gray-800"
                    >
                        <div className="container-width py-4">
                            <div className="flex flex-col space-y-4">
                                {navItems.map((item, index) => (
                                    <motion.button
                                        key={item.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        onClick={() => scrollToSection(item.href)}
                                        className={`text-left px-4 py-3 rounded-lg transition-colors duration-200 ${activeSection === item.href
                                            ? 'text-purple-400 bg-purple-400/10'
                                            : 'text-gray-300 hover:text-white hover:bg-gray-800'
                                            }`}
                                    >
                                        {item.name}
                                    </motion.button>
                                ))}

                                {/* Resume Button - Mobile */}
                                <motion.a
                                    href="/resume.pdf"
                                    download="Fariya_Sultana_Resume.pdf"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full mt-4 px-4 py-3 text-center bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex justify-center items-center gap-2"
                                >
                                    <Download size={20} />
                                   Resume
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
