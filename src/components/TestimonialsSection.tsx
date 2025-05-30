'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: "Jean Dupont",
    role: "Client satisfait",
    avatar: "/avatars/1.jpg",
    content: "Mon iPhone avait un problème d'écran, réparé en moins d'une heure avec un excellent service. Je recommande vivement !",
    rating: 5
  },
  {
    name: "Marie Lambert",
    role: "Client régulier",
    avatar: "/avatars/2.jpg",
    content: "J'ai acheté un Samsung reconditionné il y a 6 mois, il fonctionne comme neuf et le prix était imbattable.",
    rating: 4
  },
  {
    name: "Thomas Martin",
    role: "Nouveau client",
    avatar: "/avatars/3.jpg",
    content: "Diagnostic rapide et gratuit, réparation effectuée le jour même avec une garantie de 12 mois. Professionnels et sympas !",
    rating: 5
  }
]

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const item = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6
    }
  }
}

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-950 border-t border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-orange-500/10 text-orange-400">
            Témoignages
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Ce que disent nos <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">clients</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            Découvrez les avis de nos clients satisfaits par notre service et notre expertise.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10 }}
              className="relative"
            >
              <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                <Quote className="w-5 h-5 text-orange-400" />
              </div>
              
              <div className="h-full p-6 rounded-xl border border-gray-800 bg-gray-900/50 hover:bg-gray-900 transition-all">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                    {/* Placeholder for avatar - replace with actual image */}
                    <div className="w-full h-full bg-gray-700 flex items-center justify-center text-gray-500">
                      {testimonial.name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                
                <p className="text-gray-400 mb-6">{testimonial.content}</p>
                
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      className={`w-4 h-4 ${i < testimonial.rating ? 'text-orange-400 fill-orange-400' : 'text-gray-700'}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}