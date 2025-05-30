'use client'

import { motion } from 'framer-motion'
import {  ShoppingCart, Wrench, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'


export default function HeroSection() {
  return (
    <section className="relative pt-22 pb-20 md:pt-30 md:pb-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/50 via-gray-950 to-gray-950 z-0" />
      
      {/* Animated circles */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -right-64 -top-64 w-[600px] h-[600px] rounded-full border-2 border-orange-500/20 z-0"
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute -left-80 -bottom-80 w-[800px] h-[800px] rounded-full border-2 border-orange-500/10 z-0"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-orange-500/10 text-orange-400">
                Expert en téléphonie depuis 2010
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight"
            >
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Votre smartphone
              </span>{' '}
              <br />
              réparé en moins de 2h
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0"
            >
              Vente, réparation et accessoires pour toutes les marques de téléphones. 
              Service rapide et professionnel avec une garantie de 12 mois.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="#"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 text-white font-medium shadow-lg hover:from-orange-600 hover:to-red-700 transition-all flex items-center justify-center space-x-2"
              >
                <span>Réparation express</span>
                <Wrench className="w-5 h-5" />
              </Link>
              
              <Link
                href="#"
                className="px-6 py-3 rounded-lg bg-gray-800 text-white font-medium border border-gray-700 hover:bg-gray-700 transition-all flex items-center justify-center space-x-2"
              >
                <span>Voir nos téléphones</span>
                <ShoppingCart className="w-5 h-5" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-center justify-center lg:justify-start space-x-4 text-sm text-gray-400"
            >
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="w-8 h-8 rounded-full bg-gray-700 border-2 border-gray-800" />
                  ))}
                </div>
                <span>500+ clients satisfaits</span>
              </div>
              
              <div className="h-4 w-px bg-gray-700" />
              
              <Link href="#" className="flex items-center text-orange-400 hover:text-orange-300 transition-colors">
                En savoir plus <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-orange-500/20 blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-blue-500/20 blur-3xl" />
            
            <div className="relative bg-gray-900/50 border border-gray-800 rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-w-16 aspect-h-9 w-full h-auto">
                {/* Placeholder for phone image - replace with actual image */}
                <div className="w-full h-[65vh] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center p-8">
                  <Image src="/images/ip3.png" alt="Phone" width={300} height={200} />
                </div>
              </div>
              
              <div className="p-6 bg-gradient-to-b from-gray-900/80 to-gray-950">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">iPhone 15 Pro Max</h3>
                    <p className="text-orange-400">1 299€</p>
                  </div>
                  <Link
                    href="#"
                    className="px-4 py-2 rounded-md bg-orange-500/10 text-orange-400 text-sm font-medium hover:bg-orange-500/20 transition-colors flex items-center"
                  >
                    Voir l'offre
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}