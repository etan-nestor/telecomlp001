'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const brands = [
  { name: 'Apple', logo: '/images/ip2.png', href: '#' },
  { name: 'Samsung', logo: '/images/s3.png', href: '#' },
  { name: 'Techno', logo: '/images/t1.png', href: '#' },
  { name: 'Nokia', logo: '/images/n2.png', href: '#' },
  { name: 'Xiaomi', logo: '/images/x1.png', href: '#' },
  { name: 'Oppo', logo: '/images/o1.png', href: '#' },
  { name: 'Huawei', logo: '/images/h4.png', href: '#' },
  { name: 'Google', logo: '/images/g1.png', href: '#' },
]

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

const item = {
  hidden: { 
    y: 30,
    opacity: 0,
    scale: 0.9
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 0.5
    }
  },
  hover: {
    y: -10,
    scale: 1.05,
    boxShadow: "0 10px 25px -5px rgba(249, 115, 22, 0.2)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
}

export default function BrandsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "backOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-400 border border-orange-500/30"
          >
            Nos marques partenaires
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold mt-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 bg-[length:200%_auto] animate-gradient"
          >
            Toutes les grandes marques disponibles
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Nous travaillons avec les leaders du marché pour vous offrir le meilleur choix de smartphones et accessoires.
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        >
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover="hover"
              className="group relative"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-orange-500/10 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />
              
              <Link
                href={brand.href}
                className="relative flex flex-col items-center justify-center p-6 rounded-xl border border-gray-800 bg-gradient-to-b from-gray-900/50 to-gray-900 hover:border-orange-500/30 transition-all duration-300 h-full"
              >
                <motion.div 
                  className="w-28 h-28 flex items-center justify-center mb-5 p-4 bg-gray-800/50 rounded-xl group-hover:bg-gray-800 transition-colors duration-300"
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.6 }}
                >
                  <Image 
                    src={brand.logo} 
                    alt={brand.name}
                    width={100}
                    height={100}
                    className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                    style={{
                      filter: 'drop-shadow(0 4px 8px rgba(249, 115, 22, 0.2))'
                    }}
                  />
                </motion.div>
                
                <motion.span 
                  className="text-lg font-medium text-gray-300 group-hover:text-white transition-colors duration-300 relative"
                >
                  {brand.name}
                  <motion.span 
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-500"
                    initial={{ width: 0 }}
                  />
                </motion.span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
            href="/marques"
            className="inline-flex items-center px-8 py-3.5 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 text-white font-medium shadow-lg hover:shadow-orange-500/30 hover:from-orange-600 hover:to-red-700 transition-all duration-300 group"
          >
            <span className="mr-2">Découvrir toutes nos marques</span>
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
              →
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}