'use client'
import React from 'react'
import { motion } from "framer-motion"
import { Trees, Leaf, } from "lucide-react"
import Link from 'next/link'


const Navbar = () => {
    return (
        <div>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-lg shadow-emerald-500/10"
                style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    borderImage: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent) 1'
                }}
            >
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-2 border border-white/20"
                        >
                            <div className="relative">
                                <Trees className="h-8 w-8 text-emerald-300 drop-shadow-lg" />
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                                    className="absolute -top-1 -right-1"
                                >
                                    <Leaf className="h-4 w-4 text-amber-400 drop-shadow-lg" />
                                </motion.div>
                            </div>
                            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-300 to-green-400 bg-clip-text text-transparent drop-shadow-sm">
                                Alabama Forests
                            </span>
                        </motion.div>

                        <div className="hidden md:flex items-center space-x-8 bg-white/5 backdrop-blur-md rounded-full px-6 py-3 border border-white/10">
                            {["Home", "About", "Trails", "Visit", "Contact"].map((item) => (
                                <motion.a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    whileHover={{ y: -2, scale: 1.05 }}
                                    transition={{ duration: 0.2 }}
                                    className="text-black/90 hover:text-gray-700 font-medium relative group px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-300"
                                >
                                    {item}
                                    <motion.div
                                        className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-green-400 group-hover:w-4/5 transition-all duration-300 transform -translate-x-1/2 rounded-full"
                                    />
                                </motion.a>
                            ))}
                        </div>

                        <motion.div
                            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(16, 185, 129, 0.3)' }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href='#'
                                className="bg-gradient-to-r from-emerald-500/80 to-green-500/80 hover:from-emerald-400/90 hover:to-green-400/90 text-white rounded-full px-6 py-3 backdrop-blur-sm border border-white/20 shadow-lg transition-all duration-300 font-medium"
                            >
                                Plan Visit
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </motion.nav>
        </div>
    )
}

export default Navbar