import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const ParticleBackground = () => {
    const canvasRef = useRef(null);
    const particlesRef = useRef([]);
    const mouseRef = useRef({ x: 0, y: 0 });
    const animationRef = useRef();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationId;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Particle class
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2 + 1;
                this.opacity = Math.random() * 0.5 + 0.2;
                this.color = this.getRandomColor();
                this.pulseSpeed = Math.random() * 0.02 + 0.01;
                this.pulsePhase = Math.random() * Math.PI * 2;
            }

            getRandomColor() {
                const colors = [
                    'rgba(139, 92, 246, ', // Purple
                    'rgba(236, 72, 153, ', // Pink
                    'rgba(59, 130, 246, ',  // Blue
                    'rgba(16, 185, 129, ',  // Green
                    'rgba(245, 158, 11, ',  // Orange
                ];
                return colors[Math.floor(Math.random() * colors.length)];
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges
                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

                // Keep particles within bounds
                this.x = Math.max(0, Math.min(canvas.width, this.x));
                this.y = Math.max(0, Math.min(canvas.height, this.y));

                // Pulse effect
                this.pulsePhase += this.pulseSpeed;
                this.currentOpacity = this.opacity + Math.sin(this.pulsePhase) * 0.1;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color + this.currentOpacity + ')';
                ctx.fill();

                // Add glow effect
                ctx.shadowBlur = 10;
                ctx.shadowColor = this.color + '0.3)';
                ctx.fill();
                ctx.shadowBlur = 0;
            }
        }

        // Create particles
        const createParticles = () => {
            const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
            particlesRef.current = [];

            for (let i = 0; i < particleCount; i++) {
                particlesRef.current.push(new Particle());
            }
        };

        // Draw connections between nearby particles
        const drawConnections = () => {
            const maxDistance = 100;

            for (let i = 0; i < particlesRef.current.length; i++) {
                for (let j = i + 1; j < particlesRef.current.length; j++) {
                    const particle1 = particlesRef.current[i];
                    const particle2 = particlesRef.current[j];

                    const dx = particle1.x - particle2.x;
                    const dy = particle1.y - particle2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < maxDistance) {
                        const opacity = (maxDistance - distance) / maxDistance * 0.1;

                        ctx.beginPath();
                        ctx.moveTo(particle1.x, particle1.y);
                        ctx.lineTo(particle2.x, particle2.y);
                        ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }
        };

        // Mouse interaction
        const handleMouseMove = (e) => {
            mouseRef.current.x = e.clientX;
            mouseRef.current.y = e.clientY;
        };

        // Mouse attraction effect
        const applyMouseAttraction = () => {
            const attractionRadius = 100;
            const attractionStrength = 0.0001;

            particlesRef.current.forEach(particle => {
                const dx = mouseRef.current.x - particle.x;
                const dy = mouseRef.current.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < attractionRadius) {
                    const force = (attractionRadius - distance) * attractionStrength;
                    particle.vx += (dx / distance) * force;
                    particle.vy += (dy / distance) * force;

                    // Limit velocity
                    const maxVelocity = 2;
                    const velocity = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
                    if (velocity > maxVelocity) {
                        particle.vx = (particle.vx / velocity) * maxVelocity;
                        particle.vy = (particle.vy / velocity) * maxVelocity;
                    }
                }
            });
        };

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw connections first (behind particles)
            drawConnections();

            // Update and draw particles
            particlesRef.current.forEach(particle => {
                particle.update();
                particle.draw();
            });

            // Apply mouse attraction
            applyMouseAttraction();

            animationId = requestAnimationFrame(animate);
        };

        // Initialize
        createParticles();
        animate();

        // Event listeners
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', () => {
            resizeCanvas();
            createParticles();
        });

        // Cleanup
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
        };
    }, []);

    return (
        <>
            <canvas
                ref={canvasRef}
                className="fixed inset-0 pointer-events-none z-0"
                style={{ background: 'transparent' }}
            />

            {/* Additional floating elements */}
            <div className="fixed inset-0 pointer-events-none z-0">
                {/* Floating geometric shapes */}
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-1/4 left-1/4 w-4 h-4 border border-purple-500/20 rotate-45"
                />

                <motion.div
                    animate={{
                        x: [0, -80, 0],
                        y: [0, 100, 0],
                        rotate: [0, -180, -360],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-3/4 right-1/3 w-6 h-6 border border-pink-500/20 rounded-full"
                />

                <motion.div
                    animate={{
                        x: [0, 60, 0],
                        y: [0, -80, 0],
                        rotate: [0, 90, 180],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-1/2 right-1/4 w-3 h-8 bg-gradient-to-b from-blue-500/10 to-transparent"
                />

                <motion.div
                    animate={{
                        x: [0, -40, 0],
                        y: [0, 60, 0],
                        scale: [1, 1.5, 1],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-gradient-to-r from-green-500/30 to-blue-500/30 rounded-full"
                />

                {/* Floating code symbols */}
                <motion.div
                    animate={{
                        x: [0, 120, 0],
                        y: [0, -100, 0],
                        opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-1/6 right-1/6 text-purple-500/20 text-2xl font-mono"
                >
                    {'</>'}
                </motion.div>

                <motion.div
                    animate={{
                        x: [0, -90, 0],
                        y: [0, 80, 0],
                        opacity: [0.1, 0.4, 0.1],
                    }}
                    transition={{
                        duration: 35,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute bottom-1/6 left-1/6 text-pink-500/20 text-xl font-mono"
                >
                    {'{}'}
                </motion.div>

                <motion.div
                    animate={{
                        x: [0, 70, 0],
                        y: [0, -60, 0],
                        opacity: [0.1, 0.35, 0.1],
                    }}
                    transition={{
                        duration: 28,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-2/3 left-1/2 text-blue-500/20 text-lg font-mono"
                >
                    {'()'}
                </motion.div>
            </div>
        </>
    );
};

export default ParticleBackground;