import { useEffect, useRef, useState } from 'react'
import { Phone, Mail, X, Check } from 'lucide-react'

interface ContactButtonProps {
  className?: string
}

const contactInfo = {
  phone: '15976833976',
  email: '2149246161@qq.com',
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // 复制失败时静默处理
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="ml-2 text-xs text-[#D7E2EA]/50 hover:text-[#D7E2EA] transition-colors"
      aria-label="复制"
    >
      {copied ? <Check size={14} /> : '复制'}
    </button>
  )
}

export default function ContactButton({ className = '' }: ContactButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  return (
    <div ref={containerRef} className="relative inline-block">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`
          inline-flex items-center justify-center
          px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4
          text-xs sm:text-sm md:text-base
          font-medium uppercase tracking-widest text-white
          rounded-full
          transition-transform duration-200 hover:scale-105
          ${className}
        `}
        style={{
          background:
            'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
          boxShadow:
            '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
          outline: '2px solid white',
          outlineOffset: '-3px',
        }}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {isOpen ? '关闭' : '联系我'}
      </button>

      {isOpen && (
        <div
          className="absolute bottom-full right-0 mb-3 w-[280px] sm:w-[320px] rounded-[24px] border border-[#D7E2EA]/20 bg-[#0C0C0C] p-4 sm:p-5 shadow-2xl z-50"
          style={{
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-[#D7E2EA] font-semibold text-sm sm:text-base">
              联系方式
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#D7E2EA]/60 hover:text-[#D7E2EA] transition-colors"
              aria-label="关闭"
            >
              <X size={18} />
            </button>
          </div>

          <div className="space-y-3">
            <a
              href={`tel:${contactInfo.phone}`}
              className="flex items-center gap-3 p-3 rounded-xl bg-[#D7E2EA]/5 hover:bg-[#D7E2EA]/10 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-[#D7E2EA]/10 flex items-center justify-center flex-shrink-0">
                <Phone size={18} className="text-[#D7E2EA]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[#D7E2EA]/50 text-xs mb-0.5">手机</div>
                <div className="text-[#D7E2EA] text-sm font-medium truncate">
                  {contactInfo.phone}
                </div>
              </div>
              <CopyButton text={contactInfo.phone} />
            </a>

            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-3 p-3 rounded-xl bg-[#D7E2EA]/5 hover:bg-[#D7E2EA]/10 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-[#D7E2EA]/10 flex items-center justify-center flex-shrink-0">
                <Mail size={18} className="text-[#D7E2EA]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[#D7E2EA]/50 text-xs mb-0.5">邮箱</div>
                <div className="text-[#D7E2EA] text-sm font-medium truncate">
                  {contactInfo.email}
                </div>
              </div>
              <CopyButton text={contactInfo.email} />
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
