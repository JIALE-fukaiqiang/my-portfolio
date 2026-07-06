import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: '首页', href: '#hero' },
  { label: '关于', href: '#about' },
  { label: '能力', href: '#services' },
  { label: '项目', href: '#projects' },
  { label: '海报', href: '#posters' },
]

export default function StickyNav() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.8)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-10 py-3 sm:py-4"
          >
            <div
              className="max-w-5xl mx-auto rounded-full px-4 sm:px-6 py-3 flex items-center justify-between"
              style={{
                backgroundColor: 'rgba(12, 12, 12, 0.75)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(215, 226, 234, 0.1)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
              }}
            >
              <a
                href="#hero"
                onClick={(e) => handleNavClick(e, '#hero')}
                className="text-white font-semibold text-sm sm:text-base"
              >
                符开强
              </a>

              {/* Desktop Nav */}
              <div className="hidden md:flex items-center gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="px-4 py-2 text-[#D7E2EA]/70 hover:text-white text-sm rounded-full hover:bg-white/5 transition-all"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-[#D7E2EA]"
                aria-label="切换菜单"
              >
                {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="md:hidden mt-2 rounded-2xl overflow-hidden"
                  style={{
                    backgroundColor: 'rgba(12, 12, 12, 0.9)',
                    backdropFilter: 'blur(16px)',
                    border: '1px solid rgba(215, 226, 234, 0.1)',
                  }}
                >
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="block px-6 py-3 text-[#D7E2EA]/80 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
