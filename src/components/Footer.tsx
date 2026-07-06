import { ArrowUp, Mail, Phone } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer
      className="relative z-20 px-5 sm:px-8 md:px-10 py-16 sm:py-20 md:py-24 border-t border-[#D7E2EA]/10"
      style={{ backgroundColor: '#0C0C0C' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <div>
            <h3 className="text-white text-2xl sm:text-3xl font-bold mb-2">
              符开强
            </h3>
            <p className="text-[#D7E2EA]/60 text-sm sm:text-base max-w-md">
              传播与策划专业 · 专注短视频创作与新媒体账号运营
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a
              href="mailto:2149246161@qq.com"
              className="flex items-center gap-3 text-[#D7E2EA]/70 hover:text-white transition-colors"
            >
              <Mail size={18} />
              <span>2149246161@qq.com</span>
            </a>
            <a
              href="tel:15976833976"
              className="flex items-center gap-3 text-[#D7E2EA]/70 hover:text-white transition-colors"
            >
              <Phone size={18} />
              <span>159-7683-3976</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-[#D7E2EA]/10">
          <p className="text-[#D7E2EA]/40 text-sm">
            © 2026 符开强. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-[#D7E2EA]/60 hover:text-white transition-colors text-sm"
          >
            <span>回到顶部</span>
            <div className="w-8 h-8 rounded-full border border-[#D7E2EA]/20 flex items-center justify-center group-hover:bg-[#D7E2EA]/10 transition-colors">
              <ArrowUp size={16} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  )
}
