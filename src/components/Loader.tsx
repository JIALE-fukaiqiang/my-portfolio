import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface LoaderProps {
  onLoaded?: () => void
}

export default function Loader({ onLoaded }: LoaderProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const duration = 2000
    const interval = 30
    const steps = duration / interval
    let current = 0

    const timer = setInterval(() => {
      current += 1
      const easeProgress = 1 - Math.pow(1 - current / steps, 3)
      setProgress(Math.min(Math.round(easeProgress * 100), 100))

      if (current >= steps) {
        clearInterval(timer)
        setTimeout(() => {
          setIsLoading(false)
          onLoaded?.()
        }, 400)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [onLoaded])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
          style={{ backgroundColor: '#0C0C0C' }}
        >
          <div className="relative">
            <motion.div
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-[#D7E2EA]/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              style={{
                borderTopColor: 'rgba(56, 189, 248, 0.9)',
                borderRightColor: 'rgba(56, 189, 248, 0.4)',
              }}
            />
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="text-white font-bold text-lg sm:text-xl">
                {progress}%
              </span>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-[#D7E2EA]/50 text-sm sm:text-base uppercase tracking-widest mt-8"
          >
            Loading Portfolio
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
