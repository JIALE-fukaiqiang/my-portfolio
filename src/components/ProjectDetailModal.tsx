import { useEffect } from 'react'
import { X } from 'lucide-react'

interface ProjectDetail {
  id: number
  number: string
  name: string
  category: string
  description: string
  creativeExplanation?: string
  responsibilities?: string
  image?: string
  media: {
    src: string
    alt?: string
  }
}

interface ProjectDetailModalProps {
  project: ProjectDetail | null
  isOpen: boolean
  onClose: () => void
}

export default function ProjectDetailModal({ project, isOpen, onClose }: ProjectDetailModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      window.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen || !project) return null

  const coverSrc = project.image || project.media.src

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-6 sm:p-8 md:p-10">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 w-12 h-12 rounded-full border-2 border-[#D7E2EA] flex items-center justify-center text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10 z-10"
          aria-label="关闭"
        >
          <X size={24} />
        </button>

        <div className="flex items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
          <span
            className="font-black text-[#D7E2EA] leading-none"
            style={{ fontSize: 'clamp(3rem, 10vw, 100px)' }}
          >
            {project.number}
          </span>

          <div className="flex flex-col pt-2 sm:pt-4">
            <span className="text-[#D7E2EA]/60 uppercase text-sm sm:text-base tracking-wider mb-1">
              {project.category}
            </span>
            <h3
              className="font-medium uppercase text-[#D7E2EA]"
              style={{ fontSize: 'clamp(1.2rem, 2.5vw, 2.5rem)' }}
            >
              {project.name}
            </h3>
          </div>
        </div>

        {coverSrc && (
          <div className="mb-6 sm:mb-8 rounded-[30px] sm:rounded-[40px] md:rounded-[50px] overflow-hidden">
            <img
              src={coverSrc}
              alt={project.name}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        )}

        <div className="space-y-6 sm:space-y-8">
          <div>
            <h4 className="text-[#D7E2EA] font-semibold text-lg sm:text-xl mb-3">项目简介</h4>
            <p className="text-[#D7E2EA]/80 font-light leading-relaxed"
              style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.15rem)' }}
            >
              {project.description}
            </p>
          </div>

          {project.creativeExplanation && (
            <div>
              <h4 className="text-[#D7E2EA] font-semibold text-lg sm:text-xl mb-3">创意说明</h4>
              <p className="text-[#D7E2EA]/80 font-light leading-relaxed"
                style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.15rem)' }}
              >
                {project.creativeExplanation}
              </p>
            </div>
          )}

          {project.responsibilities && (
            <div>
              <h4 className="text-[#D7E2EA] font-semibold text-lg sm:text-xl mb-3">主要负责</h4>
              <p className="text-[#D7E2EA]/80 font-light leading-relaxed"
                style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.15rem)' }}
              >
                {project.responsibilities}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
