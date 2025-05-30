'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function ContactSection() {
  return (
    <section className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-orange-500/10 text-orange-400">
                Contactez-nous
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4">
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Besoin d'aide ?
                </span>{' '}
                Nous sommes là
              </h2>
              <p className="mt-4 text-lg text-gray-400">
                Notre équipe est disponible pour répondre à toutes vos questions et prendre rendez-vous pour une réparation.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gray-800">
                  <Phone className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">Téléphone</h4>
                  <p className="text-gray-400">+33 1 23 45 67 89</p>
                  <p className="text-sm text-gray-500 mt-1">Lun-Sam: 9h-19h</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gray-800">
                  <Mail className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">Email</h4>
                  <p className="text-gray-400">contact@nestortelecom.com</p>
                  <p className="text-sm text-gray-500 mt-1">Réponse sous 24h</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gray-800">
                  <MapPin className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">Adresse</h4>
                  <p className="text-gray-400">123 Rue des Téléphones, 75000 Paris</p>
                  <p className="text-sm text-gray-500 mt-1">Métro: République</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gray-800">
                  <Clock className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">Horaires</h4>
                  <p className="text-gray-400">Lundi - Samedi: 9h00 - 19h00</p>
                  <p className="text-gray-400">Dimanche: Fermé</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Envoyez-nous un message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-400 mb-1">
                    Prénom
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    name="first-name"
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-400 mb-1">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    name="last-name"
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-1">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all"
                  required
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 text-white font-medium shadow-lg hover:from-orange-600 hover:to-red-700 transition-all"
              >
                Envoyer le message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}