import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote, ChevronLeft, ChevronRight, User, MapPin } from 'lucide-react';

const Testimonials = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            position: "CEO, TechStartup Inc.",
            location: "San Francisco, CA",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b602?w=150&h=150&fit=crop&crop=face",
            rating: 5,
            text: "Fariya delivered an exceptional e-commerce platform that exceeded our expectations. Her attention to detail and technical expertise is outstanding. The project was completed on time and the code quality is top-notch.",
            project: "E-commerce Platform",
            technologies: ["React", "Node.js", "MongoDB"],
            duration: "3 months"
        },
        {
            id: 2,
            name: "Michael Chen",
            position: "Product Manager, InnovateLab",
            location: "New York, NY",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
            rating: 5,
            text: "Working with Fariya was a game-changer for our startup. She built a scalable mobile app that perfectly matched our vision. Her communication throughout the project was excellent, and she provided valuable insights.",
            project: "Mobile App Development",
            technologies: ["React Native", "Firebase", "Redux"],
            duration: "4 months"
        },
        {
            id: 3,
            name: "Emily Rodriguez",
            position: "Marketing Director, CreativeAgency",
            location: "Los Angeles, CA",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
            rating: 5,
            text: "Fariya transformed our outdated website into a modern, responsive masterpiece. The design is beautiful and the performance improvements are remarkable. Our conversion rates increased by 40% after the launch.",
            project: "Website Redesign",
            technologies: ["React", "Tailwind CSS", "Next.js"],
            duration: "2 months"
        },
        {
            id: 4,
            name: "David Thompson",
            position: "CTO, DataDriven Solutions",
            location: "Austin, TX",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
            rating: 5,
            text: "The backend architecture Fariya designed for our analytics platform is robust and scalable. She handled complex data processing requirements seamlessly and delivered clean, maintainable code.",
            project: "Analytics Platform",
            technologies: ["Python", "PostgreSQL", "AWS"],
            duration: "5 months"
        },
        {
            id: 5,
            name: "Lisa Wang",
            position: "Founder, EduTech Startup",
            location: "Seattle, WA",
            image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
            rating: 5,
            text: "Fariya built our learning management system from scratch. Her understanding of both technical requirements and user experience resulted in a platform that our students love using. Highly recommended!",
            project: "Learning Management System",
            technologies: ["React", "Node.js", "Socket.io"],
            duration: "6 months"
        }
    ];

    const nextTestimonial = () => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setDirection(-1);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextTestimonial();
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <Star
                key={index}
                className={`w-5 h-5 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'
                    }`}
            />
        ));
    };

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
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
        <section id="testimonials" className="section-padding relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-3xl animate-pulse-slow" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full blur-3xl animate-pulse-slow delay-1000" />
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
                            <span className="gradient-text">What Clients Say</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Don't just take my word for it. Here's what my clients have to say about working with me.
                        </p>
                    </motion.div>

                    {/* Main Testimonial */}
                    <motion.div variants={itemVariants} className="relative">
                        <div className="max-w-4xl mx-auto">
                            <AnimatePresence initial={false} custom={direction} mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        x: { type: "spring", stiffness: 300, damping: 30 },
                                        opacity: { duration: 0.2 }
                                    }}
                                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 relative"
                                >
                                    {/* Quote Icon */}
                                    <div className="absolute top-6 left-6 p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                                        <Quote className="w-6 h-6 text-white" />
                                    </div>

                                    <div className="space-y-8">
                                        {/* Testimonial Text */}
                                        <div className="pl-16">
                                            <p className="text-lg md:text-xl text-gray-300 leading-relaxed italic">
                                                "{testimonials[currentIndex].text}"
                                            </p>
                                        </div>

                                        {/* Client Info */}
                                        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                                            {/* Client Avatar and Info */}
                                            <div className="flex items-center gap-4">
                                                <img
                                                    src={testimonials[currentIndex].image}
                                                    alt={testimonials[currentIndex].name}
                                                    className="w-16 h-16 rounded-full object-cover border-2 border-purple-500"
                                                />
                                                <div>
                                                    <h4 className="text-lg font-semibold text-white">
                                                        {testimonials[currentIndex].name}
                                                    </h4>
                                                    <p className="text-gray-400 text-sm">
                                                        {testimonials[currentIndex].position}
                                                    </p>
                                                    <div className="flex items-center gap-1 mt-1">
                                                        <MapPin className="w-3 h-3 text-gray-500" />
                                                        <span className="text-xs text-gray-500">
                                                            {testimonials[currentIndex].location}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Project Details */}
                                            <div className="flex-1 space-y-4">
                                                <div className="flex items-center gap-1">
                                                    {renderStars(testimonials[currentIndex].rating)}
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                                    <div>
                                                        <span className="text-gray-500">Project:</span>
                                                        <p className="text-white font-medium">
                                                            {testimonials[currentIndex].project}
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <span className="text-gray-500">Duration:</span>
                                                        <p className="text-white font-medium">
                                                            {testimonials[currentIndex].duration}
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <span className="text-gray-500">Technologies:</span>
                                                        <div className="flex flex-wrap gap-1 mt-1">
                                                            {testimonials[currentIndex].technologies.slice(0, 2).map((tech, index) => (
                                                                <span
                                                                    key={index}
                                                                    className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded"
                                                                >
                                                                    {tech}
                                                                </span>
                                                            ))}
                                                            {testimonials[currentIndex].technologies.length > 2 && (
                                                                <span className="text-xs text-gray-400">
                                                                    +{testimonials[currentIndex].technologies.length - 2}
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex items-center justify-center gap-4 mt-8">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={prevTestimonial}
                                className="p-3 bg-white/10 hover:bg-white/20 rounded-full border border-white/20 transition-all duration-300"
                            >
                                <ChevronLeft className="w-6 h-6 text-white" />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={nextTestimonial}
                                className="p-3 bg-white/10 hover:bg-white/20 rounded-full border border-white/20 transition-all duration-300"
                            >
                                <ChevronRight className="w-6 h-6 text-white" />
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Testimonial Dots */}
                    <motion.div variants={itemVariants} className="flex justify-center gap-3">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setDirection(index > currentIndex ? 1 : -1);
                                    setCurrentIndex(index);
                                }}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-125'
                                        : 'bg-white/30 hover:bg-white/50'
                                    }`}
                            />
                        ))}
                    </motion.div>

                    {/* Stats Section */}
                    <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { number: "50+", label: "Projects Completed" },
                            { number: "30+", label: "Happy Clients" },
                            { number: "98%", label: "Client Satisfaction" },
                            { number: "24/7", label: "Support Available" }
                        ].map((stat, index) => (
                            <div key={index} className="text-center space-y-2">
                                <div className="text-3xl md:text-4xl font-bold gradient-text">
                                    {stat.number}
                                </div>
                                <div className="text-gray-400 text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;