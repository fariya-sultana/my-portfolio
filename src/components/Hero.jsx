import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    Download,
    MapPin,
    Coffee,
    Code,
    Github,
    ExternalLink,
    ChevronDown,
    Linkedin,
    Twitter,
    Mail
} from 'lucide-react';

const Hero = () => {
    const [currentRole, setCurrentRole] = useState(0);
    const roles = [
        'Full Stack Developer',
        'React Specialist',
        'Node.js Expert',
        'UI/UX Enthusiast',
        'Problem Solver'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const scrollToNext = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    // const floatingVariants = {
    //     animate: {
    //         y: [-10, 10, -10],
    //         transition: {
    //             duration: 4,
    //             repeat: Infinity,
    //             ease: "easeInOut"
    //         }
    //     }
    // };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-pink-900/20" />
            <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse-slow delay-1000" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow delay-2000" />

            <div className="container-width relative z-10 pt-4">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-center space-y-8"
                >
                    {/* Profile Image */}
                    {/* <motion.div
                        variants={itemVariants}
                        className="relative mx-auto w-48 h-48 mb-8"
                    >
                        <motion.div
                            variants={floatingVariants}
                            animate="animate"
                            className="relative w-full h-full"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full p-1 animate-gradient">
                                <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
                                    <img
                                        src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face"
                                        alt="Fariya Sultana"
                                        className="w-40 h-40 rounded-full object-cover border-4 border-white/10"
                                    />
                                </div>
                            </div>
                            <div className="absolute -top-2 -right-2 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center shadow-lg">
                                <div className="w-3 h-3 bg-green-600 rounded-full animate-pulse" />
                            </div>
                        </motion.div>
                    </motion.div> */}

                    {/* Main Heading */}
                    <motion.div variants={itemVariants} className="space-y-4">
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                            <span className="block text-white">Hi, I'm</span>
                            <span className="block gradient-text ">Fariya Sultana</span>
                        </h1>

                        {/* Animated Role */}
                        <div className="h-16 flex items-center justify-center">
                            <motion.p
                                key={currentRole}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-300"
                            >
                                {roles[currentRole]}
                            </motion.p>
                        </div>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
                    >
                        Passionate about creating exceptional digital experiences with clean code and innovative solutions.
                        I specialize in building scalable web applications using modern technologies and best practices.
                    </motion.p>

                    {/* Stats */}
                    {/* <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
                    >
                        <div className="text-center">
                            <div className="text-2xl md:text-3xl font-bold gradient-text">3+</div>
                            <div className="text-sm text-gray-400">Years Experience</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl md:text-3xl font-bold gradient-text">50+</div>
                            <div className="text-sm text-gray-400">Projects Completed</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl md:text-3xl font-bold gradient-text">25+</div>
                            <div className="text-sm text-gray-400">Happy Clients</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl md:text-3xl font-bold gradient-text">1000+</div>
                            <div className="text-sm text-gray-400">Commits</div>
                        </div>
                    </motion.div> */}

                    {/* Location & Status */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-400"
                    >
                        <div className="flex items-center gap-2">
                            <MapPin size={18} className="text-purple-400" />
                            <span>Noakhali, Bangladesh</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Coffee size={18} className="text-purple-400" />
                            <span>Available for new projects</span>
                        </div>
                    </motion.div>

                    {/* social links */}
                    <motion.div
                        variants={itemVariants}
                        className="flex gap-5 justify-center  mt-2 text-gray-400"
                    >
                        <a href="https://github.com/fariya-sultana" target="_blank" rel="noreferrer" className="hover:text-white transition">
                            <Github />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition">
                            <Linkedin />
                        </a>
                        {/* <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition">
                            <Twitter />
                        </a> */}
                        <a href="mailto:fariya@example.com" className="hover:text-white transition">
                            <Mail />
                        </a>
                    </motion.div>


                    {/* CTA Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >


                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                            className="px-6 py-3 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center gap-2"
                        >
                            <Code size={20} />
                            View My Work
                        </motion.button>
                    </motion.div>

                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
            >
                <motion.button
                    onClick={scrollToNext}
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                    aria-label="Scroll to next section"
                >
                    <ChevronDown size={32} />
                </motion.button>
            </motion.div>
        </section>
    );
};

export default Hero;