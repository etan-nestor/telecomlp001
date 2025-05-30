'use client'

import { motion, useAnimation } from 'framer-motion'
import { X, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true)
  const controls = useAnimation()
  const textControls = useAnimation()
  const buttonControls = useAnimation()

  useEffect(() => {
    if (isVisible) {
      // Animation d'entrée séquentielle
      const sequence = async () => {
        await controls.start({
          scale: [0.8, 1.05, 1],
          opacity: [0, 1],
          transition: { duration: 0.6 }
        })
        await textControls.start({
          x: [-20, 0],
          opacity: [0, 1],
          transition: { duration: 0.4 }
        })
        buttonControls.start({
          scale: [0.9, 1.1, 1],
          opacity: [0, 1],
          transition: { duration: 0.5 }
        })
      }
      sequence()
    }
  }, [isVisible, controls, textControls, buttonControls])

  const handleClose = async () => {
    await controls.start({
      scale: 0.9,
      opacity: 0,
      transition: { duration: 0.3 }
    })
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={controls}
      className="relative overflow-hidden rounded-xl border border-orange-500/30 bg-gradient-to-r from-gray-900 to-gray-950 shadow-lg"
    >
      {/* Fond animé */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear'
        }}
        className="absolute inset-0 bg-gradient-to-r from-blue-950/20 via-orange-500/10 to-blue-950/20 bg-[length:300%_100%]"
      />

      {/* Effet de particules */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            className="absolute rounded-full bg-orange-400"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Texte */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={textControls}
            className="text-center md:text-left"
          >
            <motion.h3
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'linear'
              }}
              className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-[length:300%] bg-gradient-to-r from-orange-300 via-orange-500 to-red-500"
            >
              PROMO EXCEPTIONNELLE !
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-2 text-orange-100"
            >
              Jusqu'à <span className="font-bold text-white">30% de réduction</span> sur les réparations
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-sm text-gray-400 mt-1"
            >
              Offre valable jusqu'au 31/12/2023 - Hors pièces détachées
            </motion.p>
          </motion.div>

          {/* Bouton */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={buttonControls}
            className="flex-shrink-0"
          >
            <Link
              href="#"
              className="flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 text-white font-medium shadow-lg hover:shadow-orange-500/40 hover:from-orange-600 hover:to-red-700 transition-all duration-300 group"
            >
              <span className="mr-2">Profiter de l'offre</span>
              <motion.span
                animate={{
                  x: [0, 4, 0]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut"
                }}
                className="inline-block"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.span>
            </Link>
          </motion.div>
        </div>

        {/* Bouton fermer */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleClose}
          className="absolute top-3 right-3 p-1 rounded-full bg-gray-800/50 hover:bg-gray-700/80 transition-colors text-gray-400 hover:text-white"
          aria-label="Fermer la bannière"
        >
          <X className="w-4 h-4" />
        </motion.button>
      </div>

      {/* Élément décoratif */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -right-20 -bottom-20 w-40 h-40 rounded-full border-2 border-orange-500/10"
      />
    </motion.div>
  )
}