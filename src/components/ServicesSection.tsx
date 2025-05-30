'use client'

import { motion } from 'framer-motion'
import { Smartphone, Shield, Zap, Clock, ChevronRight } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Smartphone,
    title: "Vente de téléphones",
    description: "Large choix de smartphones neufs et reconditionnés toutes marques avec garantie.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    href: "#"
  },
  {
    icon: Zap,
    title: "Réparation express",
    description: "Écran cassé, batterie, chargeur... Réparé en moins de 2h avec pièces d'origine.",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    href: "#"
  },
  {
    icon: Shield,
    title: "Accessoires premium",
    description: "Coques, écrans protecteurs, chargeurs et câbles de qualité supérieure.",
    color: "text-green-400",
    bg: "bg-green-400/10",
    href: "#"
  },
  {
    icon: Clock,
    title: "Diagnostic gratuit",
    description: "Analyse complète de votre appareil sans engagement sous 30 minutes.",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    href: "#"
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
}

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-950 border-t border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-orange-500/10 text-orange-400">
            Nos services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Des solutions
            </span>{' '}
            pour tous vos besoins
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            Nous proposons une gamme complète de services pour répondre à toutes vos attentes en matière de téléphonie mobile.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Link
                href={service.href}
                className={`h-full flex flex-col p-6 rounded-xl border border-gray-800 bg-gray-900/50 group-hover:bg-gray-900 transition-all ${service.bg} group-hover:shadow-lg group-hover:shadow-orange-500/10`}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gray-800 group-hover:bg-gray-700 transition-colors mb-6">
                  <service.icon className={`w-6 h-6 ${service.color}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <div className="mt-auto flex items-center text-orange-400 group-hover:text-orange-300 transition-colors">
                  <span className="text-sm font-medium">En savoir plus</span>
                  <ChevronRight className="w-4 h-4 ml-2" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 transition-all"
          >
            Voir tous nos services
          </Link>
        </motion.div>
      </div>
    </section>
  )
}