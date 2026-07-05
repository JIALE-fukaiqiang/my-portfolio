import { Users, PlayCircle, Heart, Film, Award, TrendingUp } from 'lucide-react'

interface StatItem {
  value: string
  label: string
  icon: React.ReactNode
}

interface ImageItem {
  src: string
  title: string
  category: string
}

type MarqueeCard =
  | { type: 'stat'; data: StatItem }
  | { type: 'image'; data: ImageItem }

const iconProps = {
  size: 22,
  strokeWidth: 1.5,
  className: 'text-white relative z-10',
}

const stats: StatItem[] = [
  { value: '1408', label: '小红书粉丝', icon: <Users {...iconProps} /> },
  { value: '3W+', label: '单条最高播放', icon: <PlayCircle {...iconProps} /> },
  { value: '8047', label: '获赞与收藏', icon: <Heart {...iconProps} /> },
  { value: '12', label: '原创短视频', icon: <Film {...iconProps} /> },
  { value: '省级二等', label: '技能大赛', icon: <Award {...iconProps} /> },
  { value: 'Top 10%', label: '专业排名', icon: <TrendingUp {...iconProps} /> },
]

const showcaseImages: ImageItem[] = [
  { src: '/images/delta-xiaohongshu-cover.jpg', title: 'Delta攻略铺', category: '小红书账号运营' },
  { src: '/images/sheng-sai-cover-new.png', title: '广东省职业院校技能大赛', category: '融媒体内容策划' },
  { src: '/images/xueyuanjiang-cover-new.png', title: '中国大学生广告艺术节学院奖', category: '短视频创作' },
  { src: '/images/rio-cover.jpg', title: '强爽·酒鬼地图', category: '品牌营销策划' },
  { src: '/images/wahaha-cover-new.jpg', title: '哇哈哈学院奖', category: '广告创意' },
  { src: '/images/yayale-cover-new.jpg', title: '伢牙乐品牌营销', category: '营销策划全案' },
]

const row1: MarqueeCard[] = [
  { type: 'stat', data: stats[0] },
  { type: 'image', data: showcaseImages[0] },
  { type: 'stat', data: stats[1] },
  { type: 'image', data: showcaseImages[1] },
  { type: 'stat', data: stats[2] },
  { type: 'image', data: showcaseImages[2] },
]

const row2: MarqueeCard[] = [
  { type: 'image', data: showcaseImages[3] },
  { type: 'stat', data: stats[3] },
  { type: 'image', data: showcaseImages[4] },
  { type: 'stat', data: stats[4] },
  { type: 'image', data: showcaseImages[5] },
  { type: 'stat', data: stats[5] },
]

function StatCard({ item }: { item: StatItem }) {
  return (
    <div className="w-[320px] sm:w-[380px] h-[220px] sm:h-[260px] rounded-[24px] sm:rounded-[32px] flex-shrink-0 relative overflow-hidden group">
      {/* 玻璃底层 */}
      <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-md border border-white/[0.08] rounded-[24px] sm:rounded-[32px]" />

      {/* 微光渐变 */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-[60px] group-hover:bg-purple-500/30 transition-all duration-500" />
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-[60px] group-hover:bg-cyan-500/20 transition-all duration-500" />

      <div className="relative h-full flex flex-col items-center justify-center p-6">
        <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4"
          style={{
            background:
              'radial-gradient(circle at 35% 30%, rgba(96, 165, 250, 0.95) 0%, rgba(59, 130, 246, 0.85) 35%, rgba(37, 99, 235, 0.9) 70%, rgba(30, 64, 175, 0.95) 100%)',
            boxShadow:
              'inset 2px 2px 8px rgba(255, 255, 255, 0.5), inset -3px -3px 8px rgba(0, 0, 0, 0.25), 0 0 24px rgba(59, 130, 246, 0.4), 0 6px 16px rgba(0, 0, 0, 0.35)',
            border: '1.5px solid rgba(255, 255, 255, 0.4)',
          }}
        >
          {/* 顶部月牙形高光 */}
          <div
            className="absolute top-[8%] left-[12%] w-[45%] h-[28%] rounded-full"
            style={{
              background:
                'linear-gradient(180deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.2) 100%)',
              filter: 'blur(2px)',
              transform: 'rotate(-15deg)',
            }}
          />
          {/* 左侧边缘反光 */}
          <div
            className="absolute top-[15%] left-[8%] w-[20%] h-[55%] rounded-full"
            style={{
              background:
                'linear-gradient(90deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%)',
              filter: 'blur(3px)',
            }}
          />
          {item.icon}
        </div>
        <span className="text-5xl sm:text-6xl font-black text-white tracking-tight">
          {item.value}
        </span>
        <span className="text-sm sm:text-base text-[#D7E2EA]/60 uppercase tracking-widest mt-2">
          {item.label}
        </span>
      </div>
    </div>
  )
}

function ImageCard({ item }: { item: ImageItem }) {
  return (
    <div className="w-[320px] sm:w-[380px] h-[220px] sm:h-[260px] rounded-[24px] sm:rounded-[32px] flex-shrink-0 relative overflow-hidden group">
      <img
        src={item.src}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
        <span className="text-[#D7E2EA]/70 text-xs sm:text-sm uppercase tracking-wider">
          {item.category}
        </span>
        <h3 className="text-white font-semibold text-lg sm:text-xl mt-1">
          {item.title}
        </h3>
      </div>
    </div>
  )
}

function MarqueeCardRenderer({ card }: { card: MarqueeCard }) {
  if (card.type === 'stat') {
    return <StatCard item={card.data} />
  }
  return <ImageCard item={card.data} />
}

function MarqueeRow({
  cards,
  direction = 'left',
}: {
  cards: MarqueeCard[]
  direction?: 'left' | 'right'
}) {
  // 复制三份保证无缝循环
  const repeatedCards = [...cards, ...cards, ...cards]

  return (
    <div className="flex overflow-hidden group">
      <div
        className={`flex gap-4 sm:gap-5 pr-4 sm:pr-5 ${
          direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'
        } group-hover:[animation-play-state:paused]`}
      >
        {repeatedCards.map((card, index) => (
          <MarqueeCardRenderer key={`${card.type}-${index}`} card={card} />
        ))}
      </div>
    </div>
  )
}

export default function MarqueeSection() {
  return (
    <section className="pt-20 sm:pt-28 md:pt-36 pb-10 overflow-hidden">
      <div className="flex flex-col gap-4 sm:gap-5">
        <MarqueeRow cards={row1} direction="left" />
        <MarqueeRow cards={row2} direction="right" />
      </div>
    </section>
  )
}
