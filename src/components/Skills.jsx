import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const [activeCategory, setActiveCategory] = useState('frontend');

    const skillCategories = {
        frontend: {
            title: 'Frontend Development',
            skills: [
                { name: 'React', level: 95, color: 'from-blue-400 to-blue-600', icon: '⚛️' },
                { name: 'JavaScript', level: 90, color: 'from-yellow-400 to-orange-500', icon: '🟨' },
                { name: 'Next.js', level: 88, color: 'from-gray-700 to-gray-900', icon: '▲' },
                { name: 'HTML5', level: 98, color: 'from-orange-500 to-red-500', icon: '🌐' },
                { name: 'CSS3', level: 95, color: 'from-blue-400 to-purple-500', icon: '🎨' },
                { name: 'Tailwind CSS', level: 92, color: 'from-cyan-400 to-blue-500', icon: '💨' },
                
            ]
        },
        backend: {
            title: 'Backend Development',
            skills: [
                { name: 'Node.js', level: 90, color: 'from-green-400 to-green-600', icon: '🟢' },
                { name: 'Express.js', level: 88, color: 'from-gray-600 to-gray-800', icon: '🚀' },
                { name: 'FastAPI', level: 78, color: 'from-teal-400 to-teal-600', icon: '⚡' },
                { name: 'GraphQL', level: 82, color: 'from-pink-500 to-purple-600', icon: '📊' },
                { name: 'REST APIs', level: 92, color: 'from-orange-400 to-red-500', icon: '🔗' }
            ]
        },
        database: {
            title: 'Database & Cloud',
            skills: [
                { name: 'MongoDB', level: 88, color: 'from-green-500 to-green-700', icon: '🍃' },
                { name: 'MySQL', level: 82, color: 'from-orange-500 to-orange-700', icon: '🗄️' },
                { name: 'Firebase', level: 82, color: 'from-yellow-400 to-orange-500', icon: '🔥' }
            ]
        },
        tools: {
            title: 'Tools & Others',
            skills: [
                { name: 'Git', level: 92, color: 'from-orange-500 to-red-500', icon: '📚' },
                { name: 'GitHub', level: 90, color: 'from-yellow-700 to-gray-900', icon: '🐙' },
                { name: 'VS Code', level: 95, color: 'from-blue-500 to-blue-700', icon: '💻' },
                { name: 'Figma', level: 85, color: 'from-purple-500 to-pink-500', icon: '🎨' },
                { name: 'Postman', level: 88, color: 'from-orange-400 to-orange-600', icon: '📮' },
                { name: 'Webpack', level: 80, color: 'from-blue-400 to-cyan-500', icon: '📦' }
            ]
        }
    };

    const categories = Object.keys(skillCategories);

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
                ease: 'easeOut'
            }
        }
    };

    const skillBarVariants = {
        hidden: { width: 0 },
        visible: (level) => ({
            width: `${level}%`,
            transition: {
                duration: 1.5,
                ease: 'easeOut',
                delay: 0.5
            }
        })
    };

    return (
        <section id="skills" className="section-padding relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl animate-pulse-slow" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl animate-pulse-slow delay-1000" />
            </div>

            <div className="container-width relative z-10" ref={ref}>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="space-y-12"
                >
                    <motion.div variants={itemVariants} className="text-center space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold">
                            <span className="gradient-text">Skills & Expertise</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            A comprehensive overview of my technical skills and proficiency levels
                        </p>
                    </motion.div>

                    {/* Category Tabs */}
                    <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <motion.button
                                key={category}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === category
                                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25'
                                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                                    }`}
                            >
                                {skillCategories[category].title}
                            </motion.button>
                        ))}
                    </motion.div>

                    {/* Skills Grid */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="space-y-8"
                        >
                            <h3 className="text-2xl font-semibold text-center gradient-text">
                                {skillCategories[activeCategory].title}
                            </h3>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {skillCategories[activeCategory].skills.map((skill) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.5 }}
                                        whileHover={{ scale: 1.02, y: -5 }}
                                        className="group relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden"
                                    >
                                        <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-3">
                                                <span className="text-2xl">{skill.icon}</span>
                                                <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
                                            </div>
                                            <span className="text-sm font-medium text-gray-400">{skill.level}%</span>
                                        </div>

                                        <div className="relative">
                                            <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                                                <motion.div
                                                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                                                    variants={skillBarVariants}
                                                    initial="hidden"
                                                    animate={inView ? 'visible' : 'hidden'}
                                                    custom={skill.level}
                                                >
                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                                                </motion.div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
