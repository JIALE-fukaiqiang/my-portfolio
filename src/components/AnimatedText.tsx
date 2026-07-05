import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
}

export default function AnimatedText({ text, className = '' }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  })

  const words = text.split(' ')

  return (
    <p
      ref={containerRef}
      className={`${className}`}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-[0.25em]">
          {word.split('').map((char, charIndex) => {
            const globalIndex =
              words.slice(0, wordIndex).reduce((acc, w) => acc + w.length, 0) + charIndex
            const totalChars = text.replace(/\s/g, '').length
            const start = globalIndex / totalChars
            const end = (globalIndex + 1) / totalChars

            return (
              <Char
                key={charIndex}
                char={char}
                progress={scrollYProgress}
                start={start}
                end={end}
              />
            )
          })}
        </span>
      ))}
    </p>
  )
}

interface CharProps {
  char: string
  progress: ReturnType<typeof useScroll>['scrollYProgress']
  start: number
  end: number
}

function Char({ char, progress, start, end }: CharProps) {
  const opacity = useTransform(progress, [start, end], [0.2, 1])

  return (
    <span className="relative inline-block">
      <span className="opacity-0">{char}</span>
      <motion.span
        className="absolute inset-0"
        style={{ opacity }}
      >
        {char}
      </motion.span>
    </span>
  )
}
