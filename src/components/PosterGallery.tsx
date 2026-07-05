import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'

export interface Poster {
  id: number
  src: string
  alt: string
  title: string
  category?: string
  description?: string
  aspectRatio?: string
}

interface PosterGalleryProps {
  posters: Poster[]
  columns?: 2 | 3 | 4
}

export default function PosterGallery({ posters, columns = 2 }: PosterGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => setSelectedIndex(index)
  const closeLightbox = () => setSelectedIndex(null)

  const goToPrev = useCallback(() => {
    setSelectedIndex((prev) => {
      if (prev === null) return null
      return prev === 0 ? posters.length - 1 : prev - 1
    })
  }, [posters.length])

  const goToNext = useCallback(() => {
    setSelectedIndex((prev) => {
      if (prev === null) return null
      return prev === posters.length - 1 ? 0 : prev + 1
    })
  }, [posters.length])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') goToPrev()
      if (e.key === 'ArrowRight') goToNext()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedIndex, goToPrev, goToNext])

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedIndex])

  const columnClass = {
    2: 'columns-1 sm:columns-2',
    3: 'columns-1 sm:columns-2 lg:columns-3',
    4: 'columns-1 sm:columns-2 lg:columns-3 xl:columns-4',
  }

  return (
    <>
      <div className={`${columnClass[columns]} gap-4 sm:gap-6 md:gap-8`}>
        {posters.map((poster, index) => (
          <motion.button
            key={poster.id}
            onClick={() => openLightbox(index)}
            className="relative w-full mb-4 sm:mb-6 md:mb-8 rounded-[24px] sm:rounded-[32px] md:rounded-[40px] overflow-hidden bg-[#1A1A1A] border border-[#D7E2EA]/10 cursor-pointer group text-left break-inside-avoid"
            style={{ aspectRatio: poster.aspectRatio || '3/4' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
          >
            <img
              src={poster.src}
              alt={poster.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />

            {/* 悬停遮罩 */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

            {/* 放大图标 */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500">
              <ZoomIn className="w-6 h-6 text-white" />
            </div>

            {/* 底部信息 */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              {poster.category && (
                <span className="text-[#D7E2EA]/70 text-xs sm:text-sm uppercase tracking-wider">
                  {poster.category}
                </span>
              )}
              <h3 className="text-white font-semibold text-base sm:text-lg mt-1">
                {poster.title}
              </h3>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* 背景 */}
            <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

            {/* 关闭按钮 */}
            <button
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-12 h-12 rounded-full border-2 border-[#D7E2EA] flex items-center justify-center text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10 z-10"
              onClick={closeLightbox}
              aria-label="关闭"
            >
              <X size={24} />
            </button>

            {/* 上一张 */}
            <button
              className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-[#D7E2EA]/50 flex items-center justify-center text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10 hover:border-[#D7E2EA] z-10"
              onClick={(e) => {
                e.stopPropagation()
                goToPrev()
              }}
              aria-label="上一张"
            >
              <ChevronLeft size={24} />
            </button>

            {/* 下一张 */}
            <button
              className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-[#D7E2EA]/50 flex items-center justify-center text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10 hover:border-[#D7E2EA] z-10"
              onClick={(e) => {
                e.stopPropagation()
                goToNext()
              }}
              aria-label="下一张"
            >
              <ChevronRight size={24} />
            </button>

            {/* 图片 + 信息 */}
            <motion.div
              key={selectedIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-[90vw] max-h-[80vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={posters[selectedIndex].src}
                alt={posters[selectedIndex].alt}
                className="max-w-full max-h-[70vh] w-auto h-auto object-contain rounded-[20px]"
              />
              <div className="mt-4 text-center">
                {posters[selectedIndex].category && (
                  <span className="text-[#D7E2EA]/60 text-sm uppercase tracking-wider">
                    {posters[selectedIndex].category}
                  </span>
                )}
                <h3 className="text-white text-xl font-semibold mt-1">
                  {posters[selectedIndex].title}
                </h3>
                {posters[selectedIndex].description && (
                  <p className="text-[#D7E2EA]/70 text-sm mt-2 max-w-md">
                    {posters[selectedIndex].description}
                  </p>
                )}
              </div>
            </motion.div>

            {/* 指示器 */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {posters.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedIndex(index)
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === selectedIndex
                      ? 'bg-white w-6'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`查看第 ${index + 1} 张海报`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
