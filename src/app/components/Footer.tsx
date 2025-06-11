'use client'

import React from 'react'
import { motion } from "framer-motion"
import { Trees } from "lucide-react"
import { Facebook, Instagram, Twitter } from "lucide-react"
const Footer = () => {
    return (
        <div>
            {/* Footer */}
            <footer className="bg-gradient-to-br from-emerald-950 via-green-900 to-emerald-950 text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center space-x-2 mb-6">
                                <Trees className="h-8 w-8 text-emerald-400" />
                                <span className="text-2xl font-bold">Alabama Forests</span>
                            </div>
                            <p className="text-emerald-200 leading-relaxed mb-4">
                                Discover the untamed beauty of Alabama's pristine wilderness areas.
                            </p>
                            <div className="flex space-x-4">
                                {[
                                    { name: "facebook", icon: Facebook },
                                    { name: "instagram", icon: Instagram },
                                    { name: "twitter", icon: Twitter }
                                ].map((social) => (
                                    <motion.a
                                        key={social.name}
                                        href="#"
                                        whileHover={{ scale: 1.2, rotate: 5 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="w-10 h-10 bg-emerald-700 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-colors"
                                    >
                                        <span className="sr-only">{social.name}</span>
                                        <social.icon className="w-5 h-5 text-white" />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        {[
                            {
                                title: "Explore",
                                links: ["Trail Maps", "Wildlife Guide", "Camping", "Photography Tips"],
                            },
                            {
                                title: "Plan Visit",
                                links: ["Park Hours", "Admission", "Group Tours", "Events"],
                            },
                            {
                                title: "Contact",
                                links: ["Visitor Center", "Emergency", "Feedback", "Volunteer"],
                            },
                        ].map((section, index) => (
                            <motion.div
                                key={section.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-xl font-bold mb-6 text-emerald-300">{section.title}</h3>
                                <ul className="space-y-3">
                                    {section.links.map((link) => (
                                        <li key={link}>
                                            <motion.a
                                                href="#"
                                                whileHover={{ x: 5 }}
                                                className="text-emerald-200 hover:text-white transition-colors inline-flex items-center group"
                                            >
                                                <span className="w-0 group-hover:w-2 h-0.5 bg-emerald-400 mr-0 group-hover:mr-2 transition-all duration-300" />
                                                {link}
                                            </motion.a>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="border-t border-emerald-800 mt-12 pt-8 text-center"
                    >
                        <p className="text-emerald-300">
                            © {new Date().getFullYear()} Alabama Forests. Preserving nature's beauty for future generations.
                        </p>
                    </motion.div>
                </div>
            </footer>
        </div>
    )
}

export default Footer