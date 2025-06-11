'use client'
import React from 'react'
import { motion } from "framer-motion"
import { Trees, Mountain, Camera, } from "lucide-react"

const About = () => {
    return (
        <div>

            <section id="about" className="py-20 bg-gradient-to-br from-white via-emerald-50/50 to-green-50/50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-emerald-800 to-green-600 bg-clip-text text-transparent">
                            Nature's Masterpiece
                        </h2>
                        <p className="text-xl text-emerald-700 max-w-3xl mx-auto leading-relaxed">
                            Alabama's forests are living galleries where every season paints a new masterpiece
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Trees,
                                title: "Ancient Giants",
                                description: "Walk among centuries-old trees that have witnessed Alabama's rich history",
                                color: "from-emerald-500 to-green-500",
                            },
                            {
                                icon: Mountain,
                                title: "Diverse Landscapes",
                                description: "From rolling hills to pristine valleys, discover Alabama's varied terrain",
                                color: "from-green-500 to-lime-500",
                            },
                            {
                                icon: Camera,
                                title: "Photo Paradise",
                                description: "Capture Instagram-worthy moments at every turn of the trail",
                                color: "from-amber-500 to-orange-500",
                            },
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="group"
                            >
                                <div className="h-full bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                                    <div className="p-8 text-center relative">
                                        <motion.div
                                            whileHover={{ rotate: 360, scale: 1.1 }}
                                            transition={{ duration: 0.6 }}
                                            className={`inline-flex p-4 rounded-full bg-gradient-to-r ${feature.color} mb-6 shadow-lg`}
                                        >
                                            <feature.icon className="h-8 w-8 text-white" />
                                        </motion.div>
                                        <h3 className="text-2xl font-bold text-emerald-800 mb-4">{feature.title}</h3>
                                        <p className="text-emerald-600 leading-relaxed">{feature.description}</p>

                                        {/* Decorative element */}
                                        <motion.div
                                            animate={{
                                                scale: [1, 1.2, 1],
                                                opacity: [0.3, 0.6, 0.3],
                                            }}
                                            transition={{
                                                duration: 3,
                                                repeat: Number.POSITIVE_INFINITY,
                                                ease: "easeInOut",
                                            }}
                                            className={`absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r ${feature.color} rounded-full opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300`}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About