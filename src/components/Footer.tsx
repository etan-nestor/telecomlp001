'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'

const footerLinks = [
  {
    title: 'Services',
    links: [
      { name: 'Vente de téléphones', href: '#' },
      { name: 'Réparation smartphone', href: '#' },
      { name: 'Accessoires', href: '#' },
      { name: 'Diagnostic gratuit', href: '#' },
    ],
  },
  {
    title: 'Marques',
    links: [
      { name: 'iPhone', href: '#' },
      { name: 'Samsung', href: '#' },
      { name: 'Techno', href: '#' },
      { name: 'Nokia', href: '#' },
      { name: 'Toutes les marques', href: '#' },
    ],
  },
  {
    title: 'Entreprise',
    links: [
      { name: 'À propos', href: '#' },
      { name: 'Notre équipe', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Carrières', href: '#' },
    ],
  },
]

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com' },
  { icon: Twitter, href: 'https://twitter.com' },
  { icon: Instagram, href: 'https://instagram.com' },
  { icon: Linkedin, href: 'https://linkedin.com' },
]

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-gray-900 text-gray-300 border-t border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-600">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Nestor Telecom
              </span>
            </Link>
            <p className="text-sm">
              Votre partenaire de confiance pour la vente et la réparation de téléphones portables.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-orange-400 mt-0.5" />
                <span className="text-sm">+226 65 03 37 42</span>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-orange-400 mt-0.5" />
                <span className="text-sm">contact@nestortelecom.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-0.5" />
                <span className="text-sm">123 Rue des Téléphones, Ouagadougou-BF</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-orange-400 mt-0.5" />
                <span className="text-sm">Lun-Sam: 9h-19h</span>
              </div>
            </div>
          </div>

          {/* Footer links */}
          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold text-white">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li 
                    key={linkIndex}
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Link 
                      href={link.href} 
                      className="text-sm hover:text-orange-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Newsletter</h3>
            <p className="text-sm">
              Abonnez-vous pour recevoir nos offres spéciales et actualités.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Votre email"
                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none text-sm transition-all"
                required
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-4 py-2 rounded-md bg-gradient-to-r from-orange-500 to-red-600 text-white text-sm font-medium shadow-lg hover:from-orange-600 hover:to-red-700 transition-all"
              >
                S'abonner
              </motion.button>
            </form>

            <div className="pt-4">
              <h4 className="text-sm font-medium text-white mb-3">Suivez-nous</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, color: '#FB923C' }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="text-gray-400 hover:text-orange-400"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Nestor Telecom. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-xs text-gray-500 hover:text-orange-400 transition-colors">
              Politique de confidentialité
            </Link>
            <Link href="/terms" className="text-xs text-gray-500 hover:text-orange-400 transition-colors">
              Conditions d'utilisation
            </Link>
            <Link href="/cookies" className="text-xs text-gray-500 hover:text-orange-400 transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}