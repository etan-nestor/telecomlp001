'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Phone, ChevronDown, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

const navLinks = [
  { name: 'Accueil', href: '/' },
  { 
    name: 'Services', 
    href: '/services',
    subLinks: [
      { name: 'Vente de Téléphones', href: '/services/vente' },
      { name: 'Réparation', href: '/services/reparation' },
      { name: 'Accessoires', href: '/services/accessoires' },
    ]
  },
  { name: 'Marques', href: '/marques' },
  { name: 'À Propos', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredLink, setHoveredLink] = useState<number | null>(null)
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setHoveredLink(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 ${scrolled ? 'bg-gray-900/90 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between h-14 md:h-20">
          {/* Logo - Version mobile (icône seule) */}
          <Link href="/" className="flex-shrink-0">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-600"
            >
              <Phone className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </motion.div>
          </Link>

          {/* Nom de l'entreprise - visible uniquement sur desktop */}
          <motion.span 
            className="hidden md:block text-xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent ml-2"
          >
            Nestor Telecom
          </motion.span>

          {/* Bouton Devis mobile - positionné au centre */}
          <motion.div 
            whileTap={{ scale: 0.95 }}
            className="md:hidden mx-auto"
          >
            <Link 
              href="/contact" 
              className="px-3 py-1.5 text-xs rounded-md bg-gradient-to-r from-orange-500 to-red-600 text-white font-medium shadow-lg"
            >
              Devis
            </Link>
          </motion.div>

          {/* Menu hamburger - positionné à gauche */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none ml-auto"
            aria-label="Menu"
          >
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </motion.button>

          {/* Navigation desktop */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 ml-8">
            {navLinks.map((link, index) => (
              <div 
                key={index}
                className="relative"
                onMouseEnter={() => setHoveredLink(index)}
                onMouseLeave={() => setHoveredLink(null)}
                ref={dropdownRef}
              >
                <Link 
                  href={link.href}
                  className={`flex items-center px-1 py-2 text-sm lg:text-[15px] font-medium transition-colors ${
                    pathname === link.href 
                      ? 'text-orange-400' 
                      : 'text-gray-300 hover:text-orange-400'
                  }`}
                >
                  {link.name}
                  {link.subLinks && (
                    <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${
                      hoveredLink === index ? 'rotate-180' : ''
                    }`} />
                  )}
                </Link>

                {pathname === link.href && (
                  <motion.div 
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 rounded-full"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}

                {link.subLinks && hoveredLink === index && (
                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute left-0 top-full mt-1 w-56 rounded-md shadow-lg bg-gray-800 border border-gray-700 z-50 overflow-hidden"
                    >
                      <div className="py-1">
                        {link.subLinks.map((subLink, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subLink.href}
                            className={`block px-4 py-3 text-sm transition-colors ${
                              pathname === subLink.href
                                ? 'bg-gray-700 text-orange-400'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-orange-400'
                            }`}
                            onMouseEnter={() => setHoveredLink(index)}
                          >
                            {subLink.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>
            ))}

            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="hidden lg:block"
            >
              <Link 
                href="/contact" 
                className="px-4 py-2 rounded-md bg-gradient-to-r from-orange-500 to-red-600 text-white text-sm font-medium shadow-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300"
              >
                Demander un devis
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-gray-900/95 backdrop-blur-sm border-t border-gray-800 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link, index) => (
                <div key={index} className="overflow-hidden">
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center justify-between px-3 py-3 rounded-md text-base font-medium ${
                        pathname === link.href
                          ? 'bg-gray-800 text-orange-400'
                          : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                      }`}
                      onClick={() => !link.subLinks && setIsOpen(false)}
                    >
                      {link.name}
                      {link.subLinks && (
                        <ChevronDown className={`w-4 h-4 transition-transform ${
                          hoveredLink === index ? 'rotate-180' : ''
                        }`} />
                      )}
                    </Link>

                    {link.subLinks && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: hoveredLink === index ? 'auto' : 0 }}
                        className="pl-4 overflow-hidden"
                      >
                        <div className="space-y-1 py-1">
                          {link.subLinks.map((subLink, subIndex) => (
                            <motion.div
                              key={subIndex}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: subIndex * 0.05 + 0.2 }}
                            >
                              <Link
                                href={subLink.href}
                                className={`block px-3 py-2.5 rounded-md text-sm font-medium ${
                                  pathname === subLink.href
                                    ? 'bg-gray-700 text-orange-400'
                                    : 'text-gray-400 hover:bg-gray-700 hover:text-white'
                                }`}
                                onClick={() => setIsOpen(false)}
                              >
                                {subLink.name}
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              ))}
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.05 + 0.1 }}
              className="px-4 py-3 border-t border-gray-800"
            >
              <Link
                href="/contact"
                className="w-full flex items-center justify-center px-4 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Demander un devis
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}