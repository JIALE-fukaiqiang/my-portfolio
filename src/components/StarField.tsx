import { useMemo } from 'react'

interface Star {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  duration: number
  delay: number
}

interface Meteor {
  id: number
  x: number
  y: number
  width: number
  duration: number
  delay: number
}

interface StarFieldProps {
  count?: number
  meteors?: number
  fixed?: boolean
  className?: string
}

export default function StarField({
  count = 200,
  meteors = 5,
  fixed = false,
  className = '',
}: StarFieldProps) {
  const stars = useMemo<Star[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 0.5,
      opacity: Math.random() * 0.7 + 0.3,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 5,
    }))
  }, [count])

  const shootingStars = useMemo<Meteor[]>(() => {
    return Array.from({ length: meteors }, (_, i) => ({
      id: i,
      x: Math.random() * 80 + 20,
      y: Math.random() * 50,
      width: Math.random() * 80 + 60,
      duration: Math.random() * 1.5 + 1,
      delay: Math.random() * 8 + i * 2,
    }))
  }, [meteors])

  const positionClass = fixed ? 'fixed inset-0 z-[1]' : 'absolute inset-0 z-0'

  return (
    <div
      className={`${positionClass} pointer-events-none overflow-hidden ${className}`}
      style={{ backgroundColor: 'transparent' }}
      aria-hidden="true"
    >
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite alternate`,
            boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.5)`,
          }}
        />
      ))}

      {shootingStars.map((meteor) => (
        <div
          key={`meteor-${meteor.id}`}
          className="absolute h-[1px] origin-right"
          style={{
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            width: `${meteor.width}px`,
            transform: 'rotate(-45deg)',
            background:
              'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,1) 100%)',
            opacity: 0,
            animation: `shooting ${meteor.duration}s linear ${meteor.delay}s infinite`,
          }}
        />
      ))}
    </div>
  )
}
