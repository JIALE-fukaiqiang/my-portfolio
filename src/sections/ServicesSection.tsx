import FadeIn from '../components/FadeIn'

const services = [
  {
    number: '01',
    name: '短视频创作',
    description:
      '独立完成选题策划、脚本撰写、拍摄剪辑与封面设计，熟悉小红书、抖音等平台短视频逻辑，能持续产出优质原创内容。',
  },
  {
    number: '02',
    name: '账号运营',
    description:
      '具备账号从 0 到 1 冷启动实战经验，擅长用户定位、内容规划、发布节奏把控、评论互动与数据复盘，实现精准粉丝增长。',
  },
  {
    number: '03',
    name: '视频剪辑',
    description:
      '熟练使用剪映、Premiere 完成短视频全流程制作，掌握调色、节奏把控、字幕包装与平台化内容优化，具备爆款视频制作经验。',
  },
  {
    number: '04',
    name: '活动策划',
    description:
      '系统学习活动策划与执行，能独立完成活动方案设计、传播内容策划、物料制作与执行流程规划，注重细节与落地效果。',
  },
  {
    number: '05',
    name: '新媒体推广',
    description:
      '熟悉小红书、微信等新媒体平台运营规则，擅长内容分发、话题运营、用户互动与数据分析，提升内容曝光与转化。',
  },
]

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <FadeIn delay={0} y={40} duration={0.7}>
        <h2
          className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Services
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {services.map((service, index) => (
          <FadeIn key={service.number} delay={index * 0.1} y={30} duration={0.7}>
            <div
              className="flex items-start gap-6 sm:gap-8 md:gap-12 py-8 sm:py-10 md:py-12"
              style={{
                borderBottom:
                  index < services.length - 1 ? '1px solid rgba(12, 12, 12, 0.15)' : 'none',
              }}
            >
              <span
                className="font-black text-[#0C0C0C] leading-none"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {service.number}
              </span>

              <div className="flex flex-col gap-2 sm:gap-3 pt-2 sm:pt-4">
                <h3
                  className="font-medium uppercase text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl opacity-60 text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
