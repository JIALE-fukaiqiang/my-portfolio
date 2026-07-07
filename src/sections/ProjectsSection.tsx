import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import StarField from '../components/StarField'
import ProjectDetailModal from '../components/ProjectDetailModal'

interface Project {
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

const projects: Project[] = [
  {
    id: 1,
    number: '01',
    name: 'Delta攻略铺小红书账号运营',
    category: '账号运营',
    description:
      '独立运营小红书游戏垂类账号「Delta攻略铺」，聚焦「三角洲行动」游戏垂直赛道，采用零付费自然流模式。两个月粉丝从 0 增长至 1408，获赞与收藏累计 8047，单条最高自然播放 3W+。',
    creativeExplanation:
      '选择小红书作为核心运营平台，聚焦「三角洲行动」游戏垂直赛道，采用零付费自然流模式。通过精准选题、节点发布、快速评论互动与搜索高频选题优化，实现账号从 0 到 1408 粉丝的冷启动突破。',
    responsibilities:
      '独立统筹账号全链路运营，包括选题策划、文案脚本撰写、视频剪辑制作、平台发布、数据运维及粉丝互动。使用剪映 + AI 生成素材与配音，建立 3 套模板化流程，保持每 5 天一更的稳定产出。',
    media: {
      src: '/images/delta-xiaohongshu-cover.jpg',
      alt: 'Delta攻略铺小红书账号',
    },
  },
  {
    id: 2,
    number: '02',
    name: '广东省职业院校技能大赛',
    category: '融媒体内容策划与制作',
    description:
      '代表学校参加广东省职业院校学生专业技能大赛「融媒体内容策划与制作」赛项，担任视频项目负责人。负责选题构思、分镜脚本、视频拍摄与剪辑制作，最终荣获省级二等奖。',
    creativeExplanation:
      '围绕大赛主题完成融媒体内容策划与制作，从创意构思到视觉呈现全程把控。作品注重叙事逻辑、视觉节奏与品牌信息传递的统一。',
    responsibilities:
      '担任视频项目负责人，负责选题构思、分镜脚本撰写、视频拍摄与剪辑制作。与团队成员协作完成策划方案，根据指导老师反馈多次打磨优化，最终输出高质量参赛作品。',
    image: '/images/sheng-sai-cover-new.png',
    media: {
      src: '/images/sheng-sai-cover-new.png',
      alt: '广东省职业院校技能大赛作品',
    },
  },
  {
    id: 3,
    number: '03',
    name: '中国大学生广告艺术节学院奖',
    category: '短视频创作',
    description:
      '参加中国大学生广告艺术节学院奖秋季赛短视频类赛道，围绕品牌命题独立完成创意概念、脚本撰写、拍摄剪辑与成片输出，最终荣获短视频类优秀奖。',
    creativeExplanation:
      '围绕品牌命题进行创意发想，结合年轻人语境构思差异化切入点。在短视频形式中精准传递品牌信息，同时保持内容的趣味性与传播力。',
    responsibilities:
      '作为独立创作者，完成从创意概念、脚本撰写、拍摄剪辑到成片输出的全流程。按赛事要求输出成片与创作说明，最终获得短视频类优秀奖。',
    media: {
      src: '/images/xueyuanjiang-cover-new.png',
      alt: '学院奖短视频作品',
    },
  },
  {
    id: 4,
    number: '04',
    name: '《强爽·酒鬼地图》',
    category: '活动策划 · 品牌全案',
    description:
      'RIO 强爽营销策划全案，以「一罐强爽解锁一座城」为核心理念，首创 City Drink × 城市漫游模式，通过双社交裂变与线下沉浸体验，打造年度探险 IP。',
    creativeExplanation:
      '本次营销以「一罐强爽解锁一座城」为核心：首创 City Drink × 城市漫游模式。双社交裂变——抖音挑战赛激发「喝后反差」喜剧内容，小红书话题引爆打卡热潮。线下沉浸——强爽之夜派对、MBTI 手环、集章任务构建「种草-核销-分享」闭环。分层触达寻劲青年、酒搭子、潮玩族，打造年度探险 IP。',
    responsibilities:
      '负责创意内容撰写、系列海报创意与延展、全链路推广传播方案（预热/爆发/余热多平台策略），以及所有平面物料的排版与规范统一。确保脚本画面、视觉符号与传播节奏高度协同，输出可执行的设计需求单和排期表，保障活动视觉调性与传播效果一致。',
    image: '/images/rio-cover.jpg',
    media: {
      src: '/images/rio-cover.jpg',
      alt: '《强爽·酒鬼地图》RIO 营销策划全案',
    },
  },
  {
    id: 5,
    number: '05',
    name: '《哇哈哈》大学生广告艺术大赛',
    category: '广告创意 · 学院奖',
    description:
      '参加中国大学生广告艺术节学院奖，围绕哇哈哈品牌命题完成广告创意策划与内容创作，从品牌洞察、创意概念到视觉呈现形成完整方案。',
    creativeExplanation:
      '以大学生视角切入哇哈哈品牌传播，结合年轻群体的消费场景与情感诉求，提出具有传播力的创意概念。通过平面海报、短视频等多元形式，展现品牌活力与产品卖点，提升品牌在年轻人群中的认知与好感。',
    responsibilities:
      '负责品牌洞察分析、创意概念发想、广告文案撰写、视觉创意延展及参赛作品整合。按照学院奖赛事要求输出完整的策划方案与作品物料，确保创意表达与品牌调性一致。',
    image: '/images/wahaha-cover-new.jpg',
    media: {
      src: '/images/wahaha-cover-new.jpg',
      alt: '《哇哈哈》大学生广告艺术大赛作品',
    },
  },
  {
    id: 6,
    number: '06',
    name: '《伢牙乐》品牌营销策划案',
    category: '品牌策划 · 营销全案',
    description:
      '独立完成的伢牙乐品牌营销策划案，涵盖品牌分析、目标人群洞察、传播策略、创意内容及执行规划，形成可落地的品牌营销方案。',
    creativeExplanation:
      '围绕伢牙乐儿童口腔护理品牌定位，深入分析目标家庭消费群体与儿童护理场景。通过趣味化内容、亲子互动玩法与多平台传播策略，建立品牌信任感，强化「专业儿童口腔护理」的心智认知。',
    responsibilities:
      '独立完成市场调研、品牌分析、传播策略制定、创意内容策划及执行排期。输出策划全案文档，包括目标设定、渠道规划、内容矩阵、预算分配与效果评估，确保方案的系统性与可执行性。',
    image: '/images/yayale-cover-new.jpg',
    media: {
      src: '/images/yayale-cover-new.jpg',
      alt: '《伢牙乐》品牌营销策划案',
    },
  },
]

function ProjectCard({
  project,
  index,
  totalCards,
  onViewDetail,
}: {
  project: Project
  index: number
  totalCards: number
  onViewDetail: (project: Project) => void
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const targetScale = 1 - (totalCards - index) * 0.03

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start start', 'end start'],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])

  const baseTop = 80
  const offset = index * 24

  return (
    <div
      ref={cardRef}
      className="h-[85vh] sticky"
      style={{
        top: `${baseTop + offset}px`,
        willChange: 'transform',
      }}
    >
      <motion.div
        className="h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col"
        style={{ scale, willChange: 'transform' }}
      >
        <div className="flex justify-between items-start mb-4 sm:mb-6">
          <div className="flex items-start gap-4 sm:gap-6">
            <span
              className="font-black text-[#D7E2EA] leading-none"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {project.number}
            </span>

            <div className="flex flex-col pt-2 sm:pt-4">
              <span className="text-[#D7E2EA]/60 uppercase text-sm sm:text-base tracking-wider mb-1">
                {project.category}
              </span>
              <h3
                className="font-medium uppercase text-[#D7E2EA]"
                style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {project.name}
              </h3>
            </div>
          </div>
        </div>

        <p
          className="text-[#D7E2EA]/80 font-light leading-relaxed mb-4 sm:mb-6 max-w-3xl"
          style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.2rem)' }}
        >
          {project.description}
        </p>

        <div className="flex-1 min-h-0 mb-4 sm:mb-6">
          <img
            src={project.media.src}
            alt={project.media.alt}
            className="w-full h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover"
            loading="lazy"
          />
        </div>

        <div className="flex justify-end">
          <button
            onClick={() => onViewDetail(project)}
            className="inline-flex items-center justify-center px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base font-medium uppercase tracking-widest text-[#D7E2EA] rounded-full border-2 border-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10"
          >
            查看详情
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section
      id="projects"
      className="relative rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ backgroundColor: '#0C0C0C' }}
    >
      <StarField count={160} meteors={3} />
      <FadeIn delay={0} y={40} duration={0.7}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      <div className="max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            totalCards={projects.length}
            onViewDetail={setSelectedProject}
          />
        ))}
      </div>

      {/* 底部占位，让最后一张卡片有足够滚动空间完成 sticky 堆叠 */}
      <div className="h-[10vh] sm:h-[15vh] md:h-[20vh]" />

      <ProjectDetailModal
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}
