import FadeIn from '../components/FadeIn'
import Magnet from '../components/Magnet'
import ContactButton from '../components/ContactButton'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Works', href: '#projects' },
  { label: 'Posters', href: '#posters' },
]

const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault()
  const target = document.querySelector(href)
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' })
  }
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col overflow-x-clip"
    >
      <FadeIn delay={0} y={-20} duration={0.7}>
        <nav className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </FadeIn>

      <div className="relative flex-1 flex flex-col">
        <div className="overflow-hidden w-full px-6 md:px-10">
          <FadeIn delay={0.15} y={40} duration={0.7}>
            <h1
              className="hero-heading font-black uppercase tracking-tight leading-none w-full mt-6 sm:mt-4 md:-mt-5"
            >
              <span className="block text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
                Hi, i'm
              </span>
              <span className="block text-[22vw] sm:text-[18vw] md:text-[15vw] lg:text-[13vw] -mt-2 sm:-mt-4 md:-mt-6">
                符开强
              </span>
            </h1>
          </FadeIn>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[340px] sm:w-[440px] md:w-[540px] lg:w-[640px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0">
          <FadeIn delay={0.6} y={30} duration={0.7}>
            <Magnet
              padding={150}
              strength={3}
              activeTransition="transform 0.3s ease-out"
              inactiveTransition="transform 0.6s ease-in-out"
              className="flex justify-center"
            >
              <img
                src="/images/avatar-3d.png"
                alt="符开强 3D 头像"
                className="w-full h-auto object-contain"
                loading="eager"
              />
            </Magnet>
          </FadeIn>
        </div>

        <div className="mt-auto flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10">
          <FadeIn delay={0.35} y={20} duration={0.7}>
            <p
              className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
              style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
            >
              传播与策划专业 · 专注短视频创作与新媒体账号运营
            </p>
          </FadeIn>

          <FadeIn delay={0.5} y={20} duration={0.7}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
