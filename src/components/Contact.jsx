import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    Mail,
    Phone,
    MapPin,
    Send,
    User,
    MessageSquare,
    Calendar,
    Clock,
    Github,
    Linkedin,
    Twitter,
    CheckCircle,
    AlertCircle
} from 'lucide-react';

const Contact = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            });

            setTimeout(() => {
                setSubmitStatus(null);
            }, 5000);
        }, 2000);
    };

    const contactInfo = [
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Email",
            value: "fariya.sultana.dev@gmail.com",
            link: "mailto:fariya.sultana.dev@gmail.com",
            color: "from-blue-500 to-purple-500"
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: "Phone",
            value: "+880 1894690440",
            link: "tel:+8801894690440",
            color: "from-green-500 to-teal-500"
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: "Location",
            value: "Noakhali, Bangladesh",
            link: "#",
            color: "from-orange-500 to-red-500"
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "Response Time",
            value: "Within 24 hours",
            link: "https://maps.google.com/?q=Noakhali, Bangladesh",
            color: "from-purple-500 to-pink-500"
        }
    ];

    const socialLinks = [
        {
            icon: <Github className="w-6 h-6" />,
            name: "GitHub",
            url: "https://github.com/fariya-sultana",
            color: "hover:text-gray-400"
        },
        {
            icon: <Linkedin className="w-6 h-6" />,
            name: "LinkedIn",
            url: "https://linkedin.com/in/fariya-sultana",
            color: "hover:text-blue-400"
        },
        {
            icon: <Twitter className="w-6 h-6" />,
            name: "Twitter",
            url: "https://twitter.com/fariya_sultana",
            color: "hover:text-sky-400"
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
        <section id="contact" className="section-padding relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl animate-pulse-slow" />
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
                            <span className="gradient-text">Let's Work Together</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Ready to bring your project to life? I'd love to hear about your ideas and discuss how we can make them reality.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <motion.div variants={itemVariants} className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4">Send Me a Message</h3>
                                <p className="text-gray-400">
                                    Fill out the form below and I'll get back to you as soon as possible.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                            Full Name *
                                        </label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                                                placeholder="Your full name"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                            Email Address *
                                        </label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                                                placeholder="your.email@example.com"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                                        Subject *
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                                        placeholder="What's this about?"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                        Message *
                                    </label>
                                    <div className="relative">
                                        <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows={5}
                                            className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300 resize-none"
                                            placeholder="Tell me about your project..."
                                        />
                                    </div>
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            <span>Send Message</span>
                                        </>
                                    )}
                                </motion.button>

                                {/* Submit Status */}
                                {submitStatus && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={`p-4 rounded-lg flex items-center gap-3 ${submitStatus === 'success'
                                            ? 'bg-green-500/20 border border-green-500/30 text-green-300'
                                            : 'bg-red-500/20 border border-red-500/30 text-red-300'
                                            }`}
                                    >
                                        {submitStatus === 'success' ? (
                                            <CheckCircle className="w-5 h-5" />
                                        ) : (
                                            <AlertCircle className="w-5 h-5" />
                                        )}
                                        <span>
                                            {submitStatus === 'success'
                                                ? 'Message sent successfully! I\'ll get back to you soon.'
                                                : 'Failed to send message. Please try again.'
                                            }
                                        </span>
                                    </motion.div>
                                )}
                            </form>

                            <div className="p-6 bg-gradient-to-r from-green-500/10 to-teal-500/10 border border-green-500/20 rounded-xl">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                    <h4 className="text-white font-semibold">Currently Available</h4>
                                </div>
                                <p className="text-gray-300 text-sm">
                                    I'm currently accepting new projects and would love to work with you.
                                    Let's discuss your ideas and create something amazing together!
                                </p>
                            </div>

                        </motion.div>


                        {/* Contact Information */}
                        <motion.div variants={itemVariants} className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4">Get in Touch</h3>
                                <p className="text-gray-400">
                                    Prefer to reach out directly? Here are all the ways you can contact me.
                                </p>
                            </div>

                            {/* Contact Info Cards */}
                            <div className="space-y-4">
                                {contactInfo.map((info, index) => (
                                    <motion.a
                                        key={index}
                                        href={info.link}
                                        whileHover={{ scale: 1.02, x: 10 }}
                                        className="flex items-center gap-4 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-white/20 transition-all duration-300 group"
                                    >
                                        <div className={`p-3 bg-gradient-to-r ${info.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                                            {info.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold">{info.title}</h4>
                                            <p className="text-gray-400">{info.value}</p>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>

                            {/* Social Links */}
                            <div className="space-y-4">
                                <h4 className="text-lg font-semibold text-white">Follow Me</h4>
                                <div className="flex gap-4">
                                    {socialLinks.map((social, index) => (
                                        <motion.a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            className={`p-3 bg-white/10 rounded-lg text-white ${social.color} transition-all duration-300 hover:bg-white/20`}
                                        >
                                            {social.icon}
                                        </motion.a>
                                    ))}
                                </div>
                            </div>

                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;