import { useState, useMemo, useRef, useEffect, type CSSProperties } from 'react'
import titlePageImg from '@/imports/title_page.png'
import toothbrushVideo from '@/imports/toothbrush.mp4'
import iAmABoyVideo from '@/imports/Im_a_boy.mp4'
import iAmAGirlVideo from '@/imports/im a girl.mp4'
import sortObjectsVideo from '@/imports/Sort Objects.mp4'
import shapesAndNumbersVideo from '@/imports/shapes and numbers.mp4'
import vegiesAndFruitsVideo from '@/imports/Vegies and Fruits.mp4'
import dressUpVideo from '@/imports/dress up.mp4'

/* ─── Types ──────────────────────────────────────────────── */

interface Step {
  emoji: string
  text: string
}

interface PageData {
  id: string
  title: string
  emoji: string
  accentColor: string
  badgeColor: string
  headerGradient: string
  pageBackground: string
  intro: string
  steps: Step[]
  video: string
}

interface Deco {
  emoji: string
  top?: string
  bottom?: string
  left?: string
  right?: string
  size: string
  anim: string
  delay: string
}

/* ─── Page content ───────────────────────────────────────── */

const PAGES: PageData[] = [
  {
    id: 'toothbrush',
    title: 'Brush Your Teeth!',
    emoji: '🪥',
    accentColor: '#06B6D4',
    badgeColor: '#ECFEFF',
    headerGradient: 'linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)',
    pageBackground: 'linear-gradient(160deg, #E0F7FA 0%, #E0F2F1 50%, #E8F5E9 100%)',
    intro: 'Brushing our teeth keeps them clean, bright, and healthy! Let\'s practice how to brush!',
    steps: [
      { emoji: '🪥', text: 'Put a small squeeze of toothpaste on your brush!' },
      { emoji: '🦷', text: 'Brush the front, top, and back of every tooth!' },
      { emoji: '⏱️', text: 'Keep brushing for 2 whole minutes to clean them all!' },
      { emoji: '💧', text: 'Rinse your mouth with water and spit it out!' },
      { emoji: '✨', text: 'Smile big and see your sparkling clean teeth!' },
    ],
    video: toothbrushVideo,
  },
  {
    id: 'im-a-boy',
    title: "I'm a Boy!",
    emoji: '👦',
    accentColor: '#3B82F6',
    badgeColor: '#EFF6FF',
    headerGradient: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)',
    pageBackground: 'linear-gradient(160deg, #FFF8F0 0%, #E0ECFF 50%, #F0F4FF 100%)',
    intro:
      "Being a boy is wonderful! Let's celebrate everything that makes you special and amazing!",
    steps: [
      { emoji: '🪞', text: 'Look in the mirror and say "I am a boy!"' },
      { emoji: '💪', text: 'Boys can be strong, kind, and brave!' },
      { emoji: '👕', text: 'Get dressed — pick your favorite shirt and pants.' },
      { emoji: '🤸', text: 'Boys love to run, jump, and play!' },
      { emoji: '⭐', text: 'Be proud of who you are — you are amazing!' },
    ],
    video: iAmABoyVideo,
  },
  {
    id: 'im-a-girl',
    title: "I'm a Girl!",
    emoji: '👧',
    accentColor: '#EC4899',
    badgeColor: '#FDF2F8',
    headerGradient: 'linear-gradient(135deg, #EC4899 0%, #BE185D 100%)',
    pageBackground: 'linear-gradient(160deg, #FFF0F8 0%, #FDE8F0 50%, #F5E6FF 100%)',
    intro:
      "Being a girl is amazing! Let's celebrate everything that makes you wonderful and unique!",
    steps: [
      { emoji: '🪞', text: 'Look in the mirror and say "I am a girl!"' },
      { emoji: '💖', text: 'Girls can be smart, brave, and kind!' },
      { emoji: '👗', text: 'Get dressed — pick your favorite dress or outfit.' },
      { emoji: '💃', text: 'Girls love to dance, sing, and create!' },
      { emoji: '🌟', text: 'Be proud of who you are — you are wonderful!' },
    ],
    video: iAmAGirlVideo,
  },
  {
    id: 'sort-objects',
    title: 'Sort the Objects!',
    emoji: '🧸',
    accentColor: '#8B5CF6',
    badgeColor: '#F5F3FF',
    headerGradient: 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)',
    pageBackground: 'linear-gradient(160deg, #FAF5FF 0%, #EDE9FE 50%, #FAE8FF 100%)',
    intro: "Let's tidy up and put things in the right place! Sorting is like a fun matching puzzle!",
    steps: [
      { emoji: '🧺', text: 'Look at all the different toys and items on the floor!' },
      { emoji: '🧸', text: 'Group all the soft, cuddly toys together in one pile!' },
      { emoji: '🚗', text: 'Put the cars, trucks, and wheeled toys in another spot!' },
      { emoji: '🎨', text: 'Sort your colored blocks and pencils by their colors!' },
      { emoji: '🏆', text: 'Celebrate a tidy room — everything in its place!' },
    ],
    video: sortObjectsVideo,
  },
  {
    id: 'shapes-and-numbers',
    title: 'Shapes & Numbers',
    emoji: '🔺',
    accentColor: '#10B981',
    badgeColor: '#ECFDF5',
    headerGradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
    pageBackground: 'linear-gradient(160deg, #ECFDF5 0%, #F0FFF4 50%, #FFFBEB 100%)',
    intro:
      "Let's explore the wonderful world of shapes and numbers! Can you find them around you?",
    steps: [
      { emoji: '🔵', text: 'Find a circle — wheels, balls, and cookies are circles!' },
      { emoji: '🟥', text: 'Find a square — books, windows, and blocks are squares!' },
      { emoji: '🔺', text: 'Find a triangle — rooftops, pizza slices, and hangers!' },
      { emoji: '🔢', text: 'Count from 1 to 10 using your fingers!' },
      { emoji: '🎯', text: 'Match each shape to the right number — you can do it!' },
    ],
    video: shapesAndNumbersVideo,
  },
  {
    id: 'vegies-and-fruits',
    title: 'Fruits & Vegetables!',
    emoji: '🍎',
    accentColor: '#F59E0B',
    badgeColor: '#FFFBEB',
    headerGradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
    pageBackground: 'linear-gradient(160deg, #FFFBEB 0%, #FEF3C7 50%, #FFEDD5 100%)',
    intro: 'Yummy! Nature gives us delicious fruits and veggies to make us healthy, strong, and active!',
    steps: [
      { emoji: '🍎', text: 'Can you name three sweet fruits? Apples, bananas, and grapes!' },
      { emoji: '🥦', text: 'Can you name three crunchy veggies? Broccoli, carrots, and peas!' },
      { emoji: '🌈', text: 'Eat a rainbow! Try to eat foods of different colors every day!' },
      { emoji: '🧼', text: 'Remember to wash all fruits and veggies before eating!' },
      { emoji: '😋', text: 'Take a bite and taste the juicy, healthy goodness!' },
    ],
    video: vegiesAndFruitsVideo,
  },
  {
    id: 'dress-up',
    title: 'Dress Up Time!',
    emoji: '👑',
    accentColor: '#F43F5E',
    badgeColor: '#FFF1F2',
    headerGradient: 'linear-gradient(135deg, #F43F5E 0%, #E11D48 100%)',
    pageBackground: 'linear-gradient(160deg, #FFF1F2 0%, #FFE4E6 50%, #FFF8E7 100%)',
    intro: 'Who do you want to be today? Let\'s use our imagination and dress up in fun costumes!',
    steps: [
      { emoji: '🎩', text: 'Pick a silly hat, a crown, or a pirate bandanna!' },
      { emoji: '🧥', text: 'Put on a fancy coat, a superhero cape, or a colorful scarf!' },
      { emoji: '🧦', text: 'Don\'t forget your matching shoes or crazy mismatched socks!' },
      { emoji: '🎭', text: 'Act like your character! Roar like a dinosaur or wave a magic wand!' },
      { emoji: '📸', text: 'Strike a pose in the mirror and show off your creative costume!' },
    ],
    video: dressUpVideo,
  },
]

/* ─── Decoration data ────────────────────────────────────── */

const COVER_DECOS: Deco[] = [
  { emoji: '⭐', top: '3%',  left: '3%',   size: '2.2rem', anim: 'busyFloat1',   delay: '0s'   },
  { emoji: '☁️', top: '5%',  left: '22%',  size: '2.8rem', anim: 'busyFloat2',   delay: '0.7s' },
  { emoji: '🌟', top: '2%',  right: '7%',  size: '2rem',   anim: 'busyFloat1',   delay: '0.4s' },
  { emoji: '🦋', top: '15%', right: '3%',  size: '2rem',   anim: 'busyDrift',    delay: '0.2s' },
  { emoji: '✨', top: '32%', left: '2%',   size: '1.6rem', anim: 'busySparkle',  delay: '1s'   },
  { emoji: '🌈', bottom: '22%', left: '2%',  size: '2.2rem', anim: 'busyFloat2', delay: '0.5s' },
  { emoji: '💫', bottom: '10%', right: '5%', size: '1.8rem', anim: 'busySparkle',delay: '0.3s' },
  { emoji: '🌸', top: '55%', right: '2%',  size: '1.7rem', anim: 'busyFloat1',   delay: '1.3s' },
  { emoji: '🎈', top: '65%', left: '4%',   size: '1.9rem', anim: 'busyFloat2',   delay: '0.8s' },
  { emoji: '💖', top: '10%', left: '50%',  size: '1.4rem', anim: 'busySparkle',  delay: '0.6s' },
  { emoji: '🌺', bottom: '5%',  left: '15%', size: '1.7rem', anim: 'busyDrift',  delay: '1.5s' },
  { emoji: '⭐', bottom: '30%', right: '3%', size: '1.4rem', anim: 'busyFloat1', delay: '1.1s' },
  { emoji: '🍀', top: '45%', right: '5%',  size: '1.5rem', anim: 'busyDrift',    delay: '0.9s' },
]

const BOOK_DECOS: Deco[] = [
  { emoji: '✨', top: '8%',   right: '1.5%', size: '1.3rem', anim: 'busySparkle', delay: '0s'   },
  { emoji: '🦋', top: '38%', right: '0.5%', size: '1.4rem', anim: 'busyDrift',   delay: '0.4s' },
  { emoji: '⭐', bottom: '18%', left: '0.8%', size: '1.2rem', anim: 'busyFloat1', delay: '0.8s' },
  { emoji: '💫', bottom: '30%', right: '1%',  size: '1.3rem', anim: 'busySparkle',delay: '1.2s' },
  { emoji: '🌸', top: '65%', left: '1%',    size: '1.2rem', anim: 'busyFloat2',   delay: '0.5s' },
]

/* ─── Fixed star positions (avoids Math.random re-renders) ─ */

const STARS = [
  { top: '8%',  left: '12%',  delay: '0.0s', dur: '2.1s' },
  { top: '14%', left: '73%',  delay: '0.4s', dur: '1.8s' },
  { top: '3%',  left: '45%',  delay: '0.2s', dur: '2.4s' },
  { top: '22%', left: '88%',  delay: '1.1s', dur: '1.6s' },
  { top: '35%', left: '5%',   delay: '0.7s', dur: '2.0s' },
  { top: '48%', left: '92%',  delay: '0.3s', dur: '1.9s' },
  { top: '55%', left: '18%',  delay: '1.5s', dur: '2.3s' },
  { top: '63%', left: '60%',  delay: '0.9s', dur: '1.7s' },
  { top: '72%', left: '35%',  delay: '0.1s', dur: '2.2s' },
  { top: '80%', left: '80%',  delay: '1.3s', dur: '1.5s' },
  { top: '88%', left: '8%',   delay: '0.6s', dur: '2.0s' },
  { top: '92%', left: '55%',  delay: '0.8s', dur: '1.8s' },
  { top: '5%',  left: '30%',  delay: '1.4s', dur: '2.1s' },
  { top: '18%', left: '52%',  delay: '0.5s', dur: '1.6s' },
  { top: '28%', left: '78%',  delay: '1.0s', dur: '2.3s' },
  { top: '42%', left: '42%',  delay: '0.2s', dur: '1.9s' },
  { top: '58%', left: '95%',  delay: '1.6s', dur: '2.0s' },
  { top: '75%', left: '22%',  delay: '0.4s', dur: '1.7s' },
  { top: '85%', left: '68%',  delay: '1.2s', dur: '2.4s' },
  { top: '97%', left: '40%',  delay: '0.7s', dur: '1.5s' },
]

/* ─── Components ─────────────────────────────────────────── */

function FloatingDecos({ decos }: { decos: Deco[] }) {
  return (
    <>
      {decos.map((d, i) => (
        <div
          key={i}
          className="absolute pointer-events-none select-none"
          style={{
            top: d.top,
            bottom: d.bottom,
            left: d.left,
            right: d.right,
            fontSize: d.size,
            animation: `${d.anim} 3.5s ease-in-out infinite`,
            animationDelay: d.delay,
            zIndex: 10,
          }}
        >
          {d.emoji}
        </div>
      ))}
    </>
  )
}

function StepBadge({
  step,
  index,
  accentColor,
}: {
  step: Step
  index: number
  accentColor: string
}) {
  const bg = index % 2 === 0 ? '#FFFBEB' : '#F0F9FF'
  const border = index % 2 === 0 ? '#FCD34D' : accentColor

  return (
    <div
      className="flex items-start gap-3 p-3 rounded-2xl transition-transform hover:scale-[1.02] cursor-default"
      style={{ background: bg, border: `2.5px solid ${border}` }}
    >
      <span className="text-2xl flex-shrink-0 mt-0.5">{step.emoji}</span>
      <div>
        <span
          className="text-xs font-black uppercase tracking-widest block"
          style={{ color: accentColor, fontFamily: "'Fredoka One', cursive" }}
        >
          Step {index + 1}
        </span>
        <p
          className="text-gray-700 font-bold text-sm md:text-base leading-snug mt-0.5"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          {step.text}
        </p>
      </div>
    </div>
  )
}

/* ─── Main App ───────────────────────────────────────────── */

type Screen = 'cover' | 'book'
type FlipState = 'idle' | 'out-left' | 'out-right' | 'in-right' | 'in-left'

export default function App() {
  const [screen, setScreen] = useState<Screen>('cover')
  const [coverLeaving, setCoverLeaving] = useState(false)
  const [pageIndex, setPageIndex] = useState(0)
  const [flip, setFlip] = useState<FlipState>('idle')
  const pendingPage = useRef(0)

  useEffect(() => {
    document.title = 'Busy Little Hands Busy Book | Manual'
  }, [])

  /* Cover → Book transition */
  const handleCoverClick = () => {
    if (coverLeaving) return
    setCoverLeaving(true)
    setTimeout(() => {
      setScreen('book')
      setCoverLeaving(false)
    }, 680)
  }

  /* Book page navigation */
  const navigate = (dir: 'next' | 'prev') => {
    if (flip !== 'idle') return
    const next =
      dir === 'next'
        ? Math.min(pageIndex + 1, PAGES.length - 1)
        : Math.max(pageIndex - 1, 0)
    if (next === pageIndex) return

    pendingPage.current = next
    setFlip(dir === 'next' ? 'out-left' : 'out-right')

    setTimeout(() => {
      setPageIndex(next)
      setFlip(dir === 'next' ? 'in-right' : 'in-left')
    }, 340)

    setTimeout(() => setFlip('idle'), 700)
  }

  const goHome = () => {
    setScreen('cover')
    setPageIndex(0)
    setFlip('idle')
  }

  const page = PAGES[pageIndex]

  /* Page content transition style */
  const pageStyle = useMemo((): CSSProperties => {
    switch (flip) {
      case 'out-left':
        return {
          opacity: 0,
          transform: 'translateX(-80px) perspective(600px) rotateY(12deg)',
          transition: 'all 0.34s cubic-bezier(0.4,0,1,1)',
        }
      case 'out-right':
        return {
          opacity: 0,
          transform: 'translateX(80px) perspective(600px) rotateY(-12deg)',
          transition: 'all 0.34s cubic-bezier(0.4,0,1,1)',
        }
      case 'in-right':
        return { opacity: 0, transform: 'translateX(60px)' }
      case 'in-left':
        return { opacity: 0, transform: 'translateX(-60px)' }
      default:
        return {
          opacity: 1,
          transform: 'translateX(0) perspective(600px) rotateY(0deg)',
          transition: 'all 0.36s cubic-bezier(0,0,0.2,1)',
        }
    }
  }, [flip])

  /* ── COVER SCREEN ─────────────────────────────────────── */
  if (screen === 'cover') {
    return (
      <div
        className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden cursor-pointer"
        style={{
          background:
            'radial-gradient(ellipse at 50% 35%, #2563EB 0%, #1A3FB0 55%, #0F2877 100%)',
          animation: coverLeaving
            ? 'busyCoverLeave 0.68s cubic-bezier(0.4,0,1,1) forwards'
            : undefined,
        }}
        onClick={handleCoverClick}
      >
        {/* Twinkling stars */}
        {STARS.map((s, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white pointer-events-none"
            style={{
              top: s.top,
              left: s.left,
              width: '3px',
              height: '3px',
              animation: `busyTwinkle ${s.dur} ease-in-out infinite`,
              animationDelay: s.delay,
            }}
          />
        ))}

        <FloatingDecos decos={COVER_DECOS} />

        {/* Book cover image */}
        <div
          className="relative z-20 flex flex-col items-center"
          style={{ animation: 'busyBookFloat 4s ease-in-out infinite' }}
        >
          {/* Glowing frame */}
          <div
            className="rounded-3xl p-1.5 shadow-2xl"
            style={{
              background:
                'linear-gradient(135deg, #FF6B6B 0%, #FFD700 25%, #4ECDC4 50%, #45B7D1 75%, #8B5CF6 100%)',
              boxShadow:
                '0 0 40px rgba(255,215,0,0.5), 0 0 80px rgba(69,183,209,0.3)',
            }}
          >
            <div
              className="rounded-2xl overflow-hidden"
              style={{ maxWidth: 'min(520px, 88vw)' }}
            >
              <img
                src={titlePageImg}
                alt="Busy Little Hands – Busy Book cover"
                className="block w-full"
                style={{ display: 'block' }}
                draggable={false}
              />
            </div>
          </div>
        </div>

        {/* Press anywhere prompt */}
        <div
          className="relative z-20 mt-8 px-7 py-3 rounded-full"
          style={{
            background: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(10px)',
            border: '2.5px solid rgba(255,255,255,0.45)',
            animation: 'busyPulseGlow 2.2s ease-in-out infinite',
          }}
        >
          <p
            className="text-white text-lg md:text-2xl font-bold text-center"
            style={{
              fontFamily: "'Fredoka One', cursive",
              textShadow: '0 2px 8px rgba(0,0,0,0.35)',
              letterSpacing: '0.02em',
            }}
          >
            👆 Press Anywhere to Open the Manual! 📖
          </p>
        </div>
      </div>
    )
  }

  /* ── BOOK SCREEN ──────────────────────────────────────── */
  return (
    <div
      className="relative w-full min-h-screen flex flex-col overflow-hidden"
      style={{
        background: page.pageBackground,
        fontFamily: "'Nunito', sans-serif",
      }}
    >
      <FloatingDecos decos={BOOK_DECOS} />

      {/* ── Header ── */}
      <header
        className="relative z-20 shrink-0 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #FF6B6B 0%, #FFB347 25%, #43E97B 50%, #38F9D7 75%, #A18CD1 100%)',
          boxShadow: '0 6px 28px rgba(255, 107, 107, 0.45)',
        }}
      >
        {/* Floating header decorations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <span className="absolute text-2xl" style={{ top: '10%', left: '8%', animation: 'busySparkle 2.5s ease-in-out infinite', animationDelay: '0s', opacity: 0.5 }}>⭐</span>
          <span className="absolute text-xl" style={{ top: '15%', right: '12%', animation: 'busyFloat1 3s ease-in-out infinite', animationDelay: '0.3s', opacity: 0.4 }}>🌈</span>
          <span className="absolute text-lg" style={{ bottom: '10%', left: '25%', animation: 'busySparkle 2s ease-in-out infinite', animationDelay: '0.7s', opacity: 0.4 }}>✨</span>
          <span className="absolute text-xl" style={{ bottom: '8%', right: '30%', animation: 'busyFloat2 2.8s ease-in-out infinite', animationDelay: '1s', opacity: 0.4 }}>🦋</span>
        </div>

        <div className="relative flex items-center justify-between px-4 py-2">
          <button
            onClick={goHome}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full font-bold text-white text-sm md:text-base transition-transform hover:scale-110 active:scale-90"
            style={{
              background: 'rgba(255,255,255,0.28)',
              border: '2.5px solid rgba(255,255,255,0.6)',
              fontFamily: "'Fredoka One', cursive",
              backdropFilter: 'blur(6px)',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            }}
          >
            🏠 Home
          </button>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2">
              <span className="text-2xl md:text-3xl" style={{ animation: 'busyBounce 1.5s ease-in-out infinite' }}>📚</span>
              <h1
                className="text-white text-xl md:text-3xl font-bold"
                style={{
                  fontFamily: "'Fredoka One', cursive",
                  textShadow: '0 3px 8px rgba(0,0,0,0.25), 0 0 20px rgba(255,255,255,0.3)',
                  letterSpacing: '0.03em',
                }}
              >
                Busy Little Hands!
              </h1>
              <span className="text-2xl md:text-3xl" style={{ animation: 'busyBounce 1.5s ease-in-out infinite', animationDelay: '0.3s' }}>🖐️</span>
            </div>
            <p
              className="text-white/90 text-xs md:text-sm font-bold tracking-wide"
              style={{ fontFamily: "'Nunito', sans-serif", textShadow: '0 1px 4px rgba(0,0,0,0.15)' }}
            >
              🌟 Let's Learn Together! 🌟
            </p>
          </div>

          <div
            className="flex items-center gap-1.5 px-4 py-2 rounded-full font-bold text-white text-sm md:text-base"
            style={{
              background: 'rgba(255,255,255,0.28)',
              border: '2.5px solid rgba(255,255,255,0.6)',
              fontFamily: "'Fredoka One', cursive",
              backdropFilter: 'blur(6px)',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            }}
          >
            📖 {pageIndex + 1} / {PAGES.length}
          </div>
        </div>
      </header>

      {/* ── Page content ── */}
      <main className="relative z-10 flex-1 flex flex-col items-center px-3 py-4 md:px-5 md:py-5 overflow-auto">
        <div className="w-full max-w-6xl" style={pageStyle}>
          {/* Page card */}
          <div
            className="w-full rounded-3xl overflow-hidden shadow-2xl"
            style={{
              background: 'white',
              border: `4px solid ${page.accentColor}`,
            }}
          >
            {/* Page header strip */}
            <div
              className="px-5 py-4 flex items-center gap-3"
              style={{ background: page.headerGradient }}
            >
              <span
                className="text-4xl md:text-5xl"
                style={{ animation: 'busyBounce 2s ease-in-out infinite' }}
              >
                {page.emoji}
              </span>
              <div>
                <h2
                  className="text-white text-2xl md:text-3xl font-bold leading-tight"
                  style={{
                    fontFamily: "'Fredoka One', cursive",
                    textShadow: '0 2px 6px rgba(0,0,0,0.2)',
                  }}
                >
                  {page.title}
                </h2>
                <p className="text-white/80 text-sm font-semibold mt-0.5">
                  Watch the video and follow the steps!
                </p>
              </div>
            </div>

            {/* Two-column body */}
            <div className="flex flex-col md:flex-row">
              {/* Left — video */}
              <div
                className="md:w-1/2 p-4 md:p-6 flex flex-col items-center gap-3"
                style={{ background: page.badgeColor }}
              >
                {/* Rainbow animated video frame */}
                <div
                  className="w-full rounded-2xl overflow-hidden shadow-xl"
                  style={{
                    border: `5px solid ${page.accentColor}`,
                    animation: 'busyRainbow 4s linear infinite',
                  }}
                >
                  <video
                    src={page.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="block w-full"
                    style={{ objectFit: 'contain', background: '#000' }}
                  />
                </div>

                <div
                  className="flex items-center gap-2 px-5 py-2 rounded-full font-bold text-white text-sm"
                  style={{
                    background: page.accentColor,
                    fontFamily: "'Fredoka One', cursive",
                    boxShadow: `0 3px 12px ${page.accentColor}60`,
                  }}
                >
                  🎬 Watch and Learn!
                </div>
              </div>

              {/* Right — instructions */}
              <div className="md:w-1/2 p-4 md:p-6 flex flex-col gap-3">
                {/* Intro */}
                <div
                  className="rounded-2xl px-4 py-3"
                  style={{ background: page.badgeColor, border: `2px solid ${page.accentColor}30` }}
                >
                  <p
                    className="text-gray-700 text-base md:text-lg font-bold leading-snug"
                    style={{ fontFamily: "'Nunito', sans-serif" }}
                  >
                    {page.intro}
                  </p>
                </div>

                {/* Steps */}
                <div className="flex flex-col gap-2.5">
                  {page.steps.map((step, i) => (
                    <StepBadge
                      key={i}
                      step={step}
                      index={i}
                      accentColor={page.accentColor}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ── Navigation footer ── */}
      <footer
        className="relative z-20 flex items-center justify-center gap-4 px-4 py-4 shrink-0"
        style={{
          background: 'rgba(255,255,255,0.9)',
          backdropFilter: 'blur(10px)',
          borderTop: '3px solid #FFD700',
        }}
      >
        {/* Prev */}
        <button
          onClick={() => navigate('prev')}
          disabled={pageIndex === 0 || flip !== 'idle'}
          className="flex items-center gap-2 px-5 py-3 rounded-full font-bold text-white text-base md:text-lg transition-all hover:scale-105 active:scale-90 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
          style={{
            background: 'linear-gradient(135deg, #8B5CF6, #6D28D9)',
            fontFamily: "'Fredoka One', cursive",
            boxShadow: '0 4px 14px rgba(139,92,246,0.4)',
          }}
        >
          ◀ Prev
        </button>

        {/* Dot indicators */}
        <div className="flex items-center gap-2">
          {PAGES.map((_, i) => (
            <div
              key={i}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === pageIndex ? '28px' : '12px',
                height: '12px',
                background: i === pageIndex ? page.accentColor : '#D1D5DB',
              }}
            />
          ))}
        </div>

        {/* Next */}
        <button
          onClick={() => navigate('next')}
          disabled={pageIndex === PAGES.length - 1 || flip !== 'idle'}
          className="flex items-center gap-2 px-5 py-3 rounded-full font-bold text-white text-base md:text-lg transition-all hover:scale-105 active:scale-90 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
          style={{
            background: 'linear-gradient(135deg, #10B981, #059669)',
            fontFamily: "'Fredoka One', cursive",
            boxShadow: '0 4px 14px rgba(16,185,129,0.4)',
          }}
        >
          Next ▶
        </button>
      </footer>
    </div>
  )
}
