import FadeIn from '../components/FadeIn'
import PosterGallery from '../components/PosterGallery'
import StarField from '../components/StarField'

const posters = [
  {
    id: 1,
    src: '/images/posters/rio-poster-1.png',
    alt: 'RIO 海报设计 01',
    title: 'RIO 微醺野餐',
    category: 'RIO 强爽',
    description: '以户外野餐场景呈现 RIO 强爽的轻松社交氛围，插画风格活泼有趣。',
    aspectRatio: '3/4',
  },
  {
    id: 2,
    src: '/images/posters/rio-poster-2.png',
    alt: 'RIO 海报设计 02',
    title: 'RIO 趣味瞬间',
    category: 'RIO 强爽',
    description: '捕捉朋友聚会中的惊喜瞬间，强化产品的趣味与互动感。',
    aspectRatio: '1/1',
  },
  {
    id: 3,
    src: '/images/posters/rio-poster-3.png',
    alt: 'RIO 海报设计 03',
    title: 'RIO 惊喜派对',
    category: 'RIO 强爽',
    description: '用跃动的狐狸形象传递 RIO 带来的活力与惊喜。',
    aspectRatio: '4/5',
  },
  {
    id: 4,
    src: '/images/posters/rio-poster-4.png',
    alt: 'RIO 海报设计 04',
    title: 'RIO 欢聚时刻',
    category: 'RIO 强爽',
    description: '展现年轻人围坐分享 RIO 的欢聚场景，突出品牌社交属性。',
    aspectRatio: '3/4',
  },
]

export default function PosterDesignSection() {
  return (
    <section
      id="posters"
      className="relative rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-14 sm:-mt-16 md:-mt-20 z-20 px-5 sm:px-8 md:px-10 py-12 sm:py-16 md:py-20"
      style={{ backgroundColor: '#0C0C0C' }}
    >
      <StarField count={160} meteors={3} />

      <div className="relative z-10 max-w-6xl mx-auto">
        <FadeIn delay={0} y={40} duration={0.7}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-4 sm:mb-6"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Poster
          </h2>
          <p className="text-[#D7E2EA]/60 text-center uppercase tracking-widest text-sm sm:text-base mb-16 sm:mb-20 md:mb-28">
            海报设计
          </p>
        </FadeIn>

        <PosterGallery posters={posters} columns={2} />
      </div>
    </section>
  )
}
