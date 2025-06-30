import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Calendar, Users, Star, Code, Zap, Database } from 'lucide-react';

const Projects = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const [filter, setFilter] = useState('all');

    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard. Built with React and Node.js.",
            category: "fullstack",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
            technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "Express"],
            features: ["Payment Integration", "Admin Dashboard", "Real-time Inventory", "User Authentication"],
            github: "https://github.com/fariya-sultana/ecommerce-platform",
            live: "https://ecommerce-demo.vercel.app",
            stats: {
                stars: 45,
                forks: 12,
                users: "1.2k"
            },
            status: "Live",
            color: "from-blue-500 to-purple-600"
        },
        {
            id: 2,
            title: "Social Media Dashboard",
            description: "Analytics dashboard for social media management with real-time data visualization and automated reporting features.",
            category: "frontend",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
            technologies: ["React", "TypeScript", "Chart.js", "Tailwind", "Firebase"],
            features: ["Real-time Analytics", "Data Visualization", "Automated Reports", "Multi-platform Support"],
            github: "https://github.com/fariya-sultana/social-dashboard",
            live: "https://social-dashboard-demo.vercel.app",
            stats: {
                stars: 32,
                forks: 8,
                users: "850"
            },
            status: "Live",
            color: "from-green-500 to-blue-500"
        },
        {
            id: 3,
            title: "Task Management API",
            description: "RESTful API for task management with user authentication, role-based access control, and real-time notifications.",
            category: "backend",
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
            technologies: ["Node.js", "Express", "PostgreSQL", "JWT", "Socket.io"],
            features: ["REST API", "Real-time Updates", "Role-based Access", "Email Notifications"],
            github: "https://github.com/fariya-sultana/task-api",
            live: "https://task-api-docs.vercel.app",
            stats: {
                stars: 28,
                forks: 15,
                users: "650"
            },
            status: "Live",
            color: "from-orange-500 to-red-500"
        },
        {
            id: 4,
            title: "Weather Forecast App",
            description: "Mobile-responsive weather application with location-based forecasts, interactive maps, and weather alerts.",
            category: "frontend",
            image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
            technologies: ["Vue.js", "Vuex", "OpenWeather API", "Leaflet", "PWA"],
            features: ["Location-based Forecast", "Interactive Maps", "Weather Alerts", "Offline Support"],
            github: "https://github.com/fariya-sultana/weather-app",
            live: "https://weather-forecast-demo.vercel.app",
            stats: {
                stars: 67,
                forks: 23,
                users: "2.1k"
            },
            status: "Live",
            color: "from-cyan-500 to-blue-600"
        },
        {
            id: 5,
            title: "Portfolio Website",
            description: "Personal portfolio website with modern design, smooth animations, and responsive layouts. Built with React and Framer Motion.",
            category: "frontend",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
            technologies: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
            features: ["Smooth Animations", "Responsive Design", "Dark Theme", "Contact Form"],
            github: "https://github.com/fariya-sultana/portfolio",
            live: "https://fariya-portfolio.vercel.app",
            stats: {
                stars: 89,
                forks: 34,
                users: "3.5k"
            },
            status: "Live",
            color: "from-purple-500 to-pink-600"
        },
        {
            id: 6,
            title: "Chat Application",
            description: "Real-time chat application with group messaging, file sharing, and video calling features. Full-stack implementation.",
            category: "fullstack",
            image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop",
            technologies: ["React", "Node.js", "Socket.io", "MongoDB", "WebRTC"],
            features: ["Real-time Messaging", "File Sharing", "Video Calls", "Group Chat"],
            github: "https://github.com/fariya-sultana/chat-app",
            live: "https://chat-app-demo.vercel.app",
            stats: {
                stars: 156,
                forks: 67,
                users: "5.2k"
            },
            status: "Live",
            color: "from-teal-500 to-cyan-600"
        }
    ];

    const categories = [
        { id: 'all', label: 'All Projects', icon: <Code className="w-4 h-4" /> },
        { id: 'fullstack', label: 'Full Stack', icon: <Zap className="w-4 h-4" /> },
        { id: 'frontend', label: 'Frontend', icon: <Star className="w-4 h-4" /> },
        { id: 'backend', label: 'Backend', icon: <Database className="w-4 h-4" /> }
    ];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.category === filter);

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
        <section id="projects" className="section-padding relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 right-10 w-80 h-80 bg-gradient-to-r from-green-500 to-blue-500 rounded-full blur-3xl animate-pulse-slow" />
                <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl animate-pulse-slow delay-1500" />
            </div>

            <div className="container-width relative z-10" ref={ref}>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="space-y-12"
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="text-center space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold">
                            <span className="gradient-text">Featured Projects</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            A showcase of my best work in full-stack development, featuring modern technologies and creative solutions
                        </p>
                    </motion.div>

                    {/* Filter Buttons */}
                    <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <motion.button
                                key={category.id}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setFilter(category.id)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${filter === category.id
                                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25'
                                        : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                                    }`}
                            >
                                {category.icon}
                                <span>{category.label}</span>
                            </motion.button>
                        ))}
                    </motion.div>

                    {/* Projects Grid */}
                    <motion.div
                        layout
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                variants={itemVariants}
                                whileHover={{ y: -10 }}
                                className="group relative rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden"
                            >
                                {/* Project Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                                    {/* Status Badge */}
                                    <div className="absolute top-4 right-4">
                                        <span className="px-3 py-1 text-xs font-medium bg-green-500 text-white rounded-full">
                                            {project.status}
                                        </span>
                                    </div>

                                    {/* Overlay Actions */}
                                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <motion.a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                                        >
                                            <Github className="w-5 h-5" />
                                        </motion.a>
                                        <motion.a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                                        >
                                            <ExternalLink className="w-5 h-5" />
                                        </motion.a>
                                    </div>
                                </div>

                                {/* Project Content */}
                                <div className="p-6 space-y-4">
                                    {/* Title and Description */}
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                                    </div>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.slice(0, 3).map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-2 py-1 text-xs font-medium bg-white/10 text-gray-300 rounded-md"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 3 && (
                                            <span className="px-2 py-1 text-xs font-medium bg-white/10 text-gray-300 rounded-md">
                                                +{project.technologies.length - 3} more
                                            </span>
                                        )}
                                    </div>

                                    {/* Features */}
                                    <div>
                                        <h4 className="text-sm font-semibold text-white mb-2">Key Features</h4>
                                        <ul className="text-xs text-gray-400 space-y-1">
                                            {project.features.slice(0, 2).map((feature, index) => (
                                                <li key={index} className="flex items-center gap-2">
                                                    <div className="w-1 h-1 bg-purple-400 rounded-full" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Stats */}
                                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                        <div className="flex items-center gap-4 text-xs text-gray-400">
                                            <div className="flex items-center gap-1">
                                                <Star className="w-3 h-3" />
                                                <span>{project.stats.stars}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Users className="w-3 h-3" />
                                                <span>{project.stats.users}</span>
                                            </div>
                                        </div>
                                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${project.color}`} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Call to Action */}
                    <motion.div variants={itemVariants} className="text-center">
                        <motion.a
                            href="https://github.com/fariya-sultana"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 group"
                        >
                            <Github className="w-5 h-5" />
                            <span>View More on GitHub</span>
                            <ExternalLink className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;