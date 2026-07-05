import { Quote } from 'lucide-react'
import FadeIn from '../components/FadeIn'

const evaluations = [
  '逻辑清晰，兼具创意与执行力，既能独立完成剪辑、运营全流程工作，也能配合团队完成项目落地。',
  '抗压能力强，适应快节奏的新媒体工作模式，面对数据反馈能快速调整优化方向，持续产出优质内容。',
]

export default function EvaluationSection() {
  return (
    <section
      id="evaluation"
      className="relative px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <div className="max-w-4xl mx-auto">
        <FadeIn delay={0} y={40} duration={0.7}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-4 sm:mb-6"
            style={{ fontSize: 'clamp(3rem, 12vw, 140px)' }}
          >
            Evaluation
          </h2>
          <p className="text-[#D7E2EA]/60 text-center uppercase tracking-widest text-sm sm:text-base mb-16 sm:mb-20 md:mb-24">
            个人评价
          </p>
        </FadeIn>

        <div className="relative">
          <Quote
            className="absolute -top-4 -left-2 sm:-top-6 sm:-left-6 w-12 h-12 sm:w-20 sm:h-20 text-[#D7E2EA]/10 rotate-180"
            strokeWidth={1}
          />

          <div className="space-y-6 sm:space-y-8">
            {evaluations.map((text, index) => (
              <FadeIn key={index} delay={0.1 + index * 0.15} y={30} duration={0.7}>
                <p
                  className="text-[#D7E2EA] font-light leading-relaxed text-center sm:text-left"
                  style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
                >
                  {text}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
