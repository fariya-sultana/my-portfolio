import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    Code,
    Database,
    Globe,
    Smartphone,
    Server,
    Palette,
    Zap,
    Heart,
    Target,
    Lightbulb
} from 'lucide-react';

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
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

    const services = [
        {
            icon: Globe,
            title: 'Web Development',
            description: 'Building responsive and interactive web applications using modern frameworks and technologies.',
            gradient: 'from-blue-400 to-cyan-500'
        },
        {
            icon: Database,
            title: 'Backend Development',
            description: 'Designing robust APIs and database architectures for scalable applications.',
            gradient: 'from-green-400 to-emerald-500'
        },
        {
            icon: Palette,
            title: 'UI/UX Design',
            description: 'Crafting beautiful and intuitive user interfaces with focus on user experience.',
            gradient: 'from-orange-400 to-red-500'
        },
        {
            icon: Server,
            title: 'DevOps & Cloud',
            description: 'Implementing CI/CD pipelines and cloud infrastructure for optimal performance.',
            gradient: 'from-indigo-400 to-purple-500'
        }
    ];

    const personalValues = [
        {
            icon: Heart,
            title: 'Passion',
            description: 'I love what I do and it shows in every line of code I write.'
        },
        {
            icon: Target,
            title: 'Precision',
            description: 'Attention to detail and commitment to delivering pixel-perfect results.'
        },
        {
            icon: Lightbulb,
            title: 'Innovation',
            description: 'Always exploring new technologies and creative solutions to complex problems.'
        }
    ];

    return (
        <section id="about" className="section-padding bg-slate-800/50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl" />
            </div>

            <div className="container-width relative z-10" ref={ref}>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="space-y-16"
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="text-center space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold">
                            <span className="gradient-text">About Me</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Discover my journey, skills, and passion for creating exceptional digital experiences
                        </p>
                    </motion.div>

                    {/* Main About Content */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left Column - Image and Personal Info */}
                        <motion.div variants={itemVariants} className="space-y-8">
                            {/* Quick Stats */}
                            <div className="grid grid-cols-3 gap-4">
                                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-4 rounded-lg border border-purple-500/30">
                                    <div className="text-2xl font-bold gradient-text">1+</div>
                                    <div className="text-gray-400 text-sm">Years of Experience</div>
                                </div>
                                <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-4 rounded-lg border border-blue-500/30">
                                    <div className="text-2xl font-bold gradient-text">10+</div>
                                    <div className="text-gray-400 text-sm">Projects Completed</div>
                                </div>
                                {/* <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-4 rounded-lg border border-green-500/30">
                                    <div className="text-2xl font-bold gradient-text">25+</div>
                                    <div className="text-gray-400 text-sm">Happy Clients</div>
                                </div> */}
                                <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 p-4 rounded-lg border border-orange-500/30">
                                    <div className="text-2xl font-bold gradient-text">2024</div>
                                    <div className="text-gray-400 text-sm">Started Journey</div>
                                </div>
                            </div>
                            {/* Personal Values */}
                            <div className="space-y-4">
                                <h3 className="text-2xl font-semibold gradient-text">My Values</h3>
                                <div className="grid gap-4">
                                    {personalValues.map((value) => (
                                        <motion.div
                                            key={value.title}
                                            variants={itemVariants}
                                            className="flex items-start gap-4 p-4 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                                        >
                                            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                                                <value.icon className="w-5 h-5 text-white" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-white mb-1">{value.title}</h4>
                                                <p className="text-gray-400 text-sm">{value.description}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column - Description and Story */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            <div className="space-y-4">
                                <h3 className="text-2xl font-semibold gradient-text">My Story</h3>
                                <div className="space-y-4 text-gray-300 leading-relaxed">
                                    <p>
                                        Hello! I'm Fariya Sultana, a passionate Full Stack Developer based in Feni, Chittagong, Bangladesh.
                                        My journey in web development started over 3 years ago, and I've been fascinated by the endless
                                        possibilities of creating digital solutions that make a real impact.
                                    </p>
                                    <p>
                                        I specialize in building modern, scalable web applications using cutting-edge technologies like
                                        React, Node.js, and cloud platforms. My approach combines technical expertise with creative
                                        problem-solving to deliver exceptional user experiences.
                                    </p>
                                    <p>
                                        When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
                                        or sharing knowledge with the developer community. I believe in continuous learning and staying
                                        ahead of the curve in this ever-evolving tech landscape.
                                    </p>
                                </div>
                            </div>


                        </motion.div>
                    </div>

                    {/* Services Grid */}
                    <motion.div variants={itemVariants} className="space-y-8">
                        <div className="text-center">
                            <h3 className="text-3xl font-bold gradient-text mb-4">What I Do</h3>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                I offer a comprehensive range of development services to bring your ideas to life
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {services.map((service) => (
                                <motion.div
                                    key={service.title}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05, rotateY: 5 }}
                                    className="group relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden"
                                >
                                    {/* Background Gradient */}
                                    <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                                    {/* Icon */}
                                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        <service.icon className="w-6 h-6 text-white" />
                                    </div>

                                    {/* Content */}
                                    <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-500 transition-all duration-300">
                                        {service.title}
                                    </h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {service.description}
                                    </p>

                                    {/* Hover Effect */}
                                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;