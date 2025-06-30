import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, ExternalLink, ChevronRight, Building2, Trophy, Code2, Users } from 'lucide-react';

const Experience = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const experiences = [
        {
            id: 1,
            company: "TechCorp Solutions",
            position: "Senior Full Stack Developer",
            type: "Full-time",
            location: "San Francisco, CA",
            duration: "Jan 2023 - Present",
            description: "Leading development of enterprise-level web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting scalable solutions.",
            technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker", "PostgreSQL"],
            achievements: [
                "Improved application performance by 40% through optimization",
                "Led a team of 5 developers on a major product redesign",
                "Implemented CI/CD pipeline reducing deployment time by 60%",
                "Mentored 8+ junior developers"
            ],
            color: "from-blue-500 to-purple-600",
            icon: <Building2 className="w-6 h-6" />
        },
        {
            id: 2,
            company: "InnovateLab",
            position: "Full Stack Developer",
            type: "Full-time",
            location: "New York, NY",
            duration: "Jun 2021 - Dec 2022",
            description: "Developed and maintained multiple client projects using modern web technologies. Collaborated with cross-functional teams to deliver high-quality solutions.",
            technologies: ["Vue.js", "Express.js", "MongoDB", "Python", "Django", "Redis"],
            achievements: [
                "Built 15+ responsive web applications from scratch",
                "Reduced server response time by 35% through optimization",
                "Implemented real-time features using WebSocket",
                "Achieved 99.9% uptime for critical applications"
            ],
            color: "from-green-500 to-teal-600",
            icon: <Code2 className="w-6 h-6" />
        },
        {
            id: 3,
            company: "StartupXYZ",
            position: "Junior Full Stack Developer",
            type: "Full-time",
            location: "Austin, TX",
            duration: "Aug 2020 - May 2021",
            description: "Contributed to the development of a fintech application serving 10,000+ users. Gained experience in agile development and modern web technologies.",
            technologies: ["React", "PHP", "MySQL", "JavaScript", "Bootstrap", "Git"],
            achievements: [
                "Contributed to 50+ feature implementations",
                "Fixed 200+ bugs and improved code quality",
                "Collaborated with UX team to improve user experience",
                "Participated in code reviews and maintained documentation"
            ],
            color: "from-orange-500 to-red-600",
            icon: <Users className="w-6 h-6" />
        },
        {
            id: 4,
            company: "FreelanceHub",
            position: "Freelance Web Developer",
            type: "Contract",
            location: "Remote",
            duration: "Jan 2020 - Jul 2020",
            description: "Worked on various client projects ranging from small business websites to complex web applications. Developed strong client communication and project management skills.",
            technologies: ["HTML5", "CSS3", "JavaScript", "WordPress", "PHP", "jQuery"],
            achievements: [
                "Completed 25+ client projects successfully",
                "Maintained 100% client satisfaction rate",
                "Delivered all projects on time and within budget",
                "Built long-term relationships with repeat clients"
            ],
            color: "from-purple-500 to-pink-600",
            icon: <Trophy className="w-6 h-6" />
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const timelineVariants = {
        hidden: { height: 0 },
        visible: {
            height: "100%",
            transition: {
                duration: 2,
                ease: "easeInOut",
                delay: 0.5
            }
        }
    };

    return (
        <section id="experience" className="section-padding relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl animate-pulse-slow" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl animate-pulse-slow delay-2000" />
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
                            <span className="gradient-text">Work Experience</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            My professional journey and key achievements in full-stack development
                        </p>
                    </motion.div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-8 md:left-1/2 top-0 w-px bg-gradient-to-b from-purple-500 via-blue-500 to-pink-500 transform md:-translate-x-1/2">
                            <motion.div
                                className="w-full bg-gradient-to-b from-purple-500 via-blue-500 to-pink-500"
                                variants={timelineVariants}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                            />
                        </div>

                        {/* Experience Items */}
                        <div className="space-y-12">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={exp.id}
                                    variants={itemVariants}
                                    className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                        }`}
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transform md:-translate-x-1/2 z-10 shadow-lg shadow-purple-500/50">
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-ping opacity-20" />
                                    </div>

                                    {/* Content Card */}
                                    <motion.div
                                        whileHover={{ scale: 1.02, y: -5 }}
                                        className={`ml-16 md:ml-0 w-full md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                                            }`}
                                    >
                                        <div className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
                                            {/* Background Gradient */}
                                            <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                                            {/* Company Header */}
                                            <div className="flex items-start justify-between mb-6">
                                                <div className="flex items-center gap-4">
                                                    <div className={`p-3 rounded-xl bg-gradient-to-r ${exp.color} text-white shadow-lg`}>
                                                        {exp.icon}
                                                    </div>
                                                    <div>
                                                        <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                                                        <p className="text-lg text-gray-300">{exp.position}</p>
                                                    </div>
                                                </div>
                                                <span className="px-3 py-1 text-xs font-medium bg-white/10 text-gray-300 rounded-full">
                                                    {exp.type}
                                                </span>
                                            </div>

                                            {/* Duration and Location */}
                                            <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                                                <div className="flex items-center gap-2">
                                                    <Calendar className="w-4 h-4" />
                                                    <span>{exp.duration}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <MapPin className="w-4 h-4" />
                                                    <span>{exp.location}</span>
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <p className="text-gray-300 mb-6 leading-relaxed">
                                                {exp.description}
                                            </p>

                                            {/* Technologies */}
                                            <div className="mb-6">
                                                <h4 className="text-sm font-semibold text-white mb-3">Technologies Used</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {exp.technologies.map((tech, i) => (
                                                        <span
                                                            key={i}
                                                            className="px-3 py-1 text-xs font-medium bg-white/10 text-gray-300 rounded-full hover:bg-white/20 transition-colors duration-200"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Achievements */}
                                            <div>
                                                <h4 className="text-sm font-semibold text-white mb-3">Key Achievements</h4>
                                                <ul className="space-y-2">
                                                    {exp.achievements.map((achievement, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                                                            <ChevronRight className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                                                            <span>{achievement}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Call to Action */}
                    <motion.div variants={itemVariants} className="text-center">
                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 cursor-pointer group">
                            <span>View Full Resume</span>
                            <ExternalLink className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;