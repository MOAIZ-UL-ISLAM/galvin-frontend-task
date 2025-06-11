'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'
import { ArrowRight, MapPin } from "lucide-react"

const Hero = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/bg.jpg"
                        alt="Alabama Forest Background"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-green-800/30 to-amber-900/40" />
                    <div className="absolute inset-0 bg-black/20" />
                </div>

                {/* Animated Background Elements */}
                <motion.div
                    animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 30,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                    }}
                    className="absolute top-20 left-10 w-32 h-32 bg-emerald-200/20 rounded-full blur-xl z-10"
                />
                <motion.div
                    animate={{
                        rotate: [360, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                    }}
                    className="absolute bottom-20 right-10 w-40 h-40 bg-amber-200/20 rounded-full blur-xl z-10"
                />

                <div className="container mx-auto px-4 text-center relative z-20">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <motion.h1
                            className="text-6xl md:text-8xl font-black mb-6 leading-tight drop-shadow-2xl"
                            style={{
                                background: "linear-gradient(135deg, #10b981, #059669, #f59e0b, #d97706)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                                filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.3))"
                            }}
                        >
                            Discover
                            <br />
                            <motion.span
                                animate={{
                                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                }}
                                style={{
                                    background: "linear-gradient(90deg, #10b981, #059669, #f59e0b, #10b981)",
                                    backgroundSize: "200% 200%",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                Alabamas
                            </motion.span>
                            <br />
                            Wild Beauty
                        </motion.h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-lg"
                    >
                        Immerse yourself in pristine wilderness where ancient trees whisper stories and every trail leads to
                        breathtaking discoveries
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                href='#'
                                className="inline-flex items-center bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white rounded-full px-8 py-4 text-lg font-semibold shadow-xl backdrop-blur-sm border border-white/10 transition-all duration-300"
                            >
                                Explore Trails
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                href='#'
                                className="inline-flex items-center border-2 border-white/80 text-white hover:bg-white/10 hover:text-white rounded-full px-8 py-4 text-lg font-semibold backdrop-blur-sm shadow-xl transition-all duration-300"
                            >
                                <MapPin className="mr-2 h-5 w-5" />
                                Find Locations
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Floating Scroll Indicator */}
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                    className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-20"
                >
                    <div className="w-6 h-10 border-2 border-white/80 rounded-full flex justify-center backdrop-blur-sm">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                            }}
                            className="w-1 h-3 bg-white/80 rounded-full mt-2"
                        />
                    </div>
                </motion.div>
            </section>
        </div>
    )
}

export default Hero;