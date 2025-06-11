'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, Leaf, TreePine, Camera, Heart } from 'lucide-react'

const testimonials = [
    {
        id: 1,
        name: "Sarah Mitchell",
        location: "Birmingham, AL",
        text: "The trail through Cheaha State Park was absolutely breathtaking. Every step felt like walking through a living painting. The morning mist and towering pines created moments I'll treasure forever.",
        rating: 5,
        image: "/api/placeholder/80/80",
        experience: "Hiking Enthusiast",
        icon: TreePine,
        color: "emerald"
    },
    {
        id: 2,
        name: "Marcus Johnson",
        location: "Mobile, AL",
        text: "As a photographer, Alabama's forests have given me the most stunning shots of my career. The way sunlight filters through the canopy is pure magic. This place has my heart.",
        rating: 5,
        image: "/api/placeholder/80/80",
        experience: "Nature Photographer",
        icon: Camera,
        color: "green"
    },
    {
        id: 3,
        name: "Emma Rodriguez",
        location: "Huntsville, AL",
        text: "Brought my family here for our first camping trip. The kids were amazed by the wildlife and the peaceful sounds of nature. It's become our annual tradition now.",
        rating: 5,
        image: "/api/placeholder/80/80",
        experience: "Family Adventurer",
        icon: Heart,
        color: "amber"
    },
    {
        id: 4,
        name: "David Thompson",
        location: "Montgomery, AL",
        text: "The biodiversity here is incredible. Found rare wildflowers and spotted deer on multiple occasions. It's a naturalist's paradise that needs to be protected and celebrated.",
        rating: 5,
        image: "/api/placeholder/80/80",
        experience: "Wildlife Researcher",
        icon: Leaf,
        color: "teal"
    }
]

const TestimonialCard = ({ testimonial, isActive, onClick }) => {
    const IconComponent = testimonial.icon

    return (
        <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            className={`relative cursor-pointer p-6 rounded-3xl backdrop-blur-xl border transition-all duration-500 ${isActive
                ? 'bg-white/20 border-white/40 shadow-2xl'
                : 'bg-white/10 border-white/20 shadow-lg hover:bg-white/15'
                }`}
            style={{
                background: isActive
                    ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))'
                    : 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))'
            }}
        >
            {/* Floating Icon */}
            <motion.div
                animate={{
                    rotate: isActive ? [0, 5, -5, 0] : 0,
                    scale: isActive ? [1, 1.1, 1] : 1
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className={`absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 ${testimonial.color === 'emerald' ? 'bg-emerald-500/30' :
                    testimonial.color === 'green' ? 'bg-green-500/30' :
                        testimonial.color === 'amber' ? 'bg-amber-500/30' :
                            'bg-teal-500/30'
                    }`}
            >
                <IconComponent className="w-4 h-4 text-white" />
            </motion.div>

            {/* Quote Icon */}
            <motion.div
                animate={{ rotate: isActive ? 360 : 0 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="mb-4"
            >
                <Quote className="w-6 h-6 text-white/60" />
            </motion.div>

            {/* Stars */}
            <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    </motion.div>
                ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-white/90 mb-6 leading-relaxed text-sm md:text-base font-medium">
                "{testimonial.text}"
            </p>

            {/* Profile */}
            <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center text-white font-bold text-lg mr-4 shadow-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-white/70 text-sm">{testimonial.experience}</p>
                    <p className="text-white/50 text-xs">{testimonial.location}</p>
                </div>
            </div>
        </motion.div>
    )
}

const Testimonials = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section className="relative py-20 overflow-hidden">
            {/* Background with subtle pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 via-green-800/20 to-amber-900/30" />

            {/* Floating Background Elements */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    rotate: [0, 180, 360],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute top-10 left-10 w-20 h-20 bg-emerald-300/10 rounded-full blur-xl"
            />
            <motion.div
                animate={{
                    x: [0, -80, 0],
                    y: [0, 60, 0],
                    rotate: [360, 180, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute bottom-10 right-10 w-32 h-32 bg-amber-300/10 rounded-full blur-xl"
            />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="inline-block mb-4"
                    >
                        <div className="w-16 h-16 bg-gradient-to-br from-emerald-400/20 to-green-600/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 mx-auto">
                            <TreePine className="w-8 h-8 text-emerald-300" />
                        </div>
                    </motion.div>

                    <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-emerald-300 via-green-400 to-amber-400 bg-clip-text text-transparent">
                        Forest Stories
                    </h2>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        Discover what fellow nature lovers have experienced in Alabama's pristine wilderness
                    </p>
                </motion.div>

                {/* Featured Testimonial */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTestimonial}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.5 }}
                            className="max-w-4xl mx-auto"
                        >
                            <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
                                <div className="flex items-center justify-center mb-8">
                                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0, rotate: -180 }}
                                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                            transition={{ delay: i * 0.1, duration: 0.5 }}
                                        >
                                            <Star className="w-8 h-8 text-amber-400 fill-amber-400 mx-1" />
                                        </motion.div>
                                    ))}
                                </div>

                                <blockquote className="text-2xl md:text-3xl text-white/90 text-center mb-8 leading-relaxed font-medium">
                                    "{testimonials[activeTestimonial].text}"
                                </blockquote>

                                <div className="flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center text-white font-bold text-xl mr-6 shadow-lg">
                                        {testimonials[activeTestimonial].name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div className="text-center">
                                        <h4 className="text-white text-xl font-semibold">{testimonials[activeTestimonial].name}</h4>
                                        <p className="text-white/70">{testimonials[activeTestimonial].experience}</p>
                                        <p className="text-white/50 text-sm">{testimonials[activeTestimonial].location}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </motion.div>

                {/* Testimonial Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={testimonial.id}
                            testimonial={testimonial}
                            isActive={index === activeTestimonial}
                            onClick={() => setActiveTestimonial(index)}
                        />
                    ))}
                </motion.div>

                {/* Navigation Dots */}
                <div className="flex justify-center mt-12 space-x-3">
                    {testimonials.map((_, index) => (
                        <motion.button
                            key={index}
                            onClick={() => setActiveTestimonial(index)}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeTestimonial
                                ? 'bg-emerald-400 shadow-lg shadow-emerald-400/50'
                                : 'bg-white/40 hover:bg-white/60'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials