import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    Code,
    Smartphone,
    Database,
    Cloud,
    Palette,
    Search,
    Shield,
    Zap,
    CheckCircle,
    ArrowRight,
    Globe,
    Cpu
} from 'lucide-react';

const Services = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const services = [
        {
            id: 1,
            icon: <Code className="w-8 h-8" />,
            title: "Full Stack Development",
            description: "End-to-end web application development using modern technologies like React, Node.js, and cloud services.",
            features: [
                "Custom Web Applications",
                "API Development & Integration",
                "Database Design & Optimization",
                "Third-party Service Integration"
            ],
            technologies: ["React", "Node.js", "Python", "PostgreSQL", "AWS"],
            color: "from-blue-500 to-purple-600",
            bgColor: "bg-blue-500/10",
            price: "Starting at $2,500",
            deliveryTime: "2-4 weeks"
        },
        {
            id: 2,
            icon: <Smartphone className="w-8 h-8" />,
            title: "Mobile App Development",
            description: "Cross-platform mobile applications with native performance and modern UI/UX design principles.",
            features: [
                "React Native Development",
                "Cross-platform Compatibility",
                "Push Notifications",
                "Offline Functionality"
            ],
            technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
            color: "from-green-500 to-teal-600",
            bgColor: "bg-green-500/10",
            price: "Starting at $3,000",
            deliveryTime: "3-6 weeks"
        },
        {
            id: 3,
            icon: <Database className="w-8 h-8" />,
            title: "Backend Development",
            description: "Scalable backend solutions with robust APIs, database management, and server optimization.",
            features: [
                "RESTful API Development",
                "Database Architecture",
                "Server Optimization",
                "Security Implementation"
            ],
            technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Redis"],
            color: "from-orange-500 to-red-600",
            bgColor: "bg-orange-500/10",
            price: "Starting at $1,800",
            deliveryTime: "1-3 weeks"
        },
        {
            id: 4,
            icon: <Cloud className="w-8 h-8" />,
            title: "Cloud Solutions",
            description: "Cloud infrastructure setup, deployment automation, and scalable hosting solutions for your applications.",
            features: [
                "AWS/Azure Deployment",
                "CI/CD Pipeline Setup",
                "Auto-scaling Configuration",
                "Monitoring & Analytics"
            ],
            technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
            color: "from-cyan-500 to-blue-600",
            bgColor: "bg-cyan-500/10",
            price: "Starting at $1,200",
            deliveryTime: "1-2 weeks"
        },
        {
            id: 5,
            icon: <Palette className="w-8 h-8" />,
            title: "UI/UX Design",
            description: "Modern, responsive web design with focus on user experience and conversion optimization.",
            features: [
                "Responsive Web Design",
                "User Experience Optimization",
                "Prototyping & Wireframing",
                "Design System Creation"
            ],
            technologies: ["Figma", "Adobe XD", "Tailwind CSS", "Framer Motion"],
            color: "from-purple-500 to-pink-600",
            bgColor: "bg-purple-500/10",
            price: "Starting at $800",
            deliveryTime: "1-2 weeks"
        },
        {
            id: 6,
            icon: <Search className="w-8 h-8" />,
            title: "SEO Optimization",
            description: "Complete SEO audit and optimization to improve your website's search engine rankings and visibility.",
            features: [
                "Technical SEO Audit",
                "Performance Optimization",
                "Content Strategy",
                "Analytics Setup"
            ],
            technologies: ["Google Analytics", "Search Console", "Lighthouse", "GTM"],
            color: "from-teal-500 to-green-600",
            bgColor: "bg-teal-500/10",
            price: "Starting at $600",
            deliveryTime: "1 week"
        }
    ];

    const processSteps = [
        {
            step: "01",
            title: "Discovery & Planning",
            description: "Understanding your requirements and creating a detailed project roadmap.",
            icon: <Globe className="w-6 h-6" />
        },
        {
            step: "02",
            title: "Design & Prototyping",
            description: "Creating wireframes, mockups, and interactive prototypes for approval.",
            icon: <Palette className="w-6 h-6" />
        },
        {
            step: "03",
            title: "Development",
            description: "Building your solution using modern technologies and best practices.",
            icon: <Cpu className="w-6 h-6" />
        },
        {
            step: "04",
            title: "Testing & Launch",
            description: "Thorough testing, deployment, and ongoing support for your project.",
            icon: <Zap className="w-6 h-6" />
        }
    ];

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
        hidden: { opacity: 0, y: 30 },
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
        <section id="services" className="section-padding relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl animate-pulse-slow" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full blur-3xl animate-pulse-slow delay-1000" />
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
                            <span className="gradient-text">Services I Offer</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Comprehensive development services to bring your ideas to life with cutting-edge technology
                        </p>
                    </motion.div>

                    {/* Services Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <motion.div
                                key={service.id}
                                variants={itemVariants}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden"
                            >
                                {/* Background Gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                                {/* Service Icon */}
                                <div className={`inline-flex p-4 rounded-xl ${service.bgColor} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <div className={`bg-gradient-to-r ${service.color} p-2 rounded-lg`}>
                                        {service.icon}
                                    </div>
                                </div>

                                {/* Service Content */}
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{service.description}</p>

                                    {/* Features */}
                                    <ul className="space-y-2">
                                        {service.features.map((feature, index) => (
                                            <li key={index} className="flex items-center gap-2 text-sm text-gray-300">
                                                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Technologies */}
                                    <div>
                                        <h4 className="text-sm font-semibold text-white mb-2">Technologies</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {service.technologies.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-2 py-1 text-xs font-medium bg-white/10 text-gray-300 rounded-md"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Pricing and Timeline */}
                                    <div className="pt-4 border-t border-white/10 space-y-2">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-400">Starting Price</span>
                                            <span className="text-sm font-semibold text-white">{service.price}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-400">Delivery Time</span>
                                            <span className="text-sm font-semibold text-white">{service.deliveryTime}</span>
                                        </div>
                                    </div>

                                    {/* CTA Button */}
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`w-full mt-6 px-6 py-3 bg-gradient-to-r ${service.color} text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group`}
                                    >
                                        <span>Get Started</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Process Section */}
                    <motion.div variants={itemVariants} className="space-y-12">
                        <div className="text-center space-y-4">
                            <h3 className="text-3xl md:text-4xl font-bold">
                                <span className="gradient-text">My Work Process</span>
                            </h3>
                            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                                A structured approach to deliver exceptional results for every project
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {processSteps.map((step, index) => (
                                <motion.div
                                    key={step.step}
                                    variants={itemVariants}
                                    whileHover={{ y: -5 }}
                                    className="text-center space-y-4 group relative"
                                >
                                    {/* Step Number */}
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                                        {step.step}
                                    </div>

                                    {/* Step Icon */}
                                    <div className="inline-flex p-3 rounded-xl bg-white/10 text-purple-400 group-hover:bg-white/20 transition-colors duration-300">
                                        {step.icon}
                                    </div>

                                    {/* Step Content */}
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                                    </div>

                                    {/* Connection Line */}
                                    {index < processSteps.length - 1 && (
                                        <div className="hidden lg:block absolute top-8 left-full w-8 h-px bg-gradient-to-r from-purple-500 to-transparent" />
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Call to Action */}
                    <motion.div variants={itemVariants} className="text-center space-y-8">
                        <div className="space-y-4">
                            <h3 className="text-2xl md:text-3xl font-bold text-white">
                                Ready to Start Your Project?
                            </h3>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                Let's discuss your requirements and create something amazing together.
                                I'm here to help you bring your vision to life.
                            </p>
                        </div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex"
                        >
                            <a
                                href="#contact"
                                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
                            >
                                <span>Let's Work Together</span>
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;