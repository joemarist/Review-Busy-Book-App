import { useState, useMemo, useRef, useEffect, type CSSProperties, type ReactNode, type RefObject } from 'react'
import titlePageImg from '@/imports/title_page.png'
import lastPageImg from '@/imports/last_page.png'
import author1Img from '@/imports/author1.jpg'
import author2Img from '@/imports/author2.jpg'
import busyHandsVideo from '@/imports/busy hands.mp4'
import dinosaurHatchingVideo from '@/imports/Dinosaur hatching.mp4'
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
    id: 'dinosaur-hatching',
    title: 'Dinosaur Hatching!',
    emoji: '🦖',
    accentColor: '#65A30D',
    badgeColor: '#F7FEE7',
    headerGradient: 'linear-gradient(135deg, #84CC16 0%,rgb(86, 93, 76) 100%)',
    pageBackground: 'linear-gradient(160deg, #F7FEE7 0%, #ECFCCB 50%, #FEF9C3 100%)',
    intro:
      'A baby dinosaur is hiding inside an egg! Let\'s crack the egg and help our new dino friend hatch!',
    steps: [
      { emoji: '🥚', text: 'Find the dinosaur egg hidden inside the busy book!' },
      { emoji: '🔓', text: 'Slowly detach the upper shell — listen to the zip-zip sound!' },
      { emoji: '🦕', text: 'Gently pull out the soft dinosaur out of its cozy egg!' },
      { emoji: '🦖', text: 'Stand your dinosaur up and give it a big friendly roar — RAAWR!' },
      { emoji: '🎉', text: 'Name your new dinosaur friend and give it a big smile!' },
    ],
    video: dinosaurHatchingVideo,
  },
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
      { emoji: '⏱️', text: 'Keep brushing for 2 whole minutes to clean them all! You can sing a happy birthday song.' },
      { emoji: '💧', text: 'When brushing your teeth, rinse your mouth with water and spit it out!' },
      { emoji: '✨', text: 'Smile big and see your sparkling clean teeth!' },
    ],
    video: toothbrushVideo,
  },
  {
    id: 'busy-hands',
    title: 'Busy Hands!',
    emoji: '🖐️',
    accentColor: '#DC2626',
    badgeColor: '#FEF2F2',
    headerGradient: 'linear-gradient(135deg, #EF4444 0%, #B91C1C 100%)',
    pageBackground: 'linear-gradient(160deg, #FEF2F2 0%, #FEE2E2 50%, #FFFBEB 100%)',
    intro:
      'Let\'s get our hands busy! Practice lacing, zipping, buckling, and fastening — just like getting ready for the day!',
    steps: [
      { emoji: '👟', text: 'Find the Busy Hands page with the red sneakers, yellow zipper, green buckle, and white Velcro strip!' },
      { emoji: '🎀', text: 'Thread the white lace through the holes on the sneakers — try a criss-cross pattern!' },
      { emoji: '🔒', text: 'Grip the yellow zipper tab and slide it smoothly up and down!' },
      { emoji: '🔗', text: 'Push the black buckle together until it clicks — then squeeze the sides to release!' },
      { emoji: '✨', text: 'Peel and press the white Velcro strip — feel the texture and celebrate your busy hands!' },
    ],
    video: busyHandsVideo,
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
      { emoji: '👦', text: 'Complete the face by attaching the parts of the face to the right place.' },
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
      { emoji: '👧', text: 'Complete the face by attaching the parts of the face to the right place.' },
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
      { emoji: '🧑‍🏫', text: 'Look at all the different toys and items on the board!' },
      { emoji: '🧸', text: 'Group all the cute and color coded stuff together!' },
      { emoji: '🚗', text: 'Put the cars, trucks, and wheeled toys in another spot!' },
      { emoji: '🎨', text: 'Sort your colored stuff by their colors!' },
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
      { emoji: '🔢', text: 'Count from 1 to 10 and draw it using your fingers!' },
      { emoji: '🎯', text: 'Match and fill in each shapes and numbers accordingly — you can do it!' },
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
      { emoji: '🥦', text: 'Can you name three yummy veggies? Broccoli, carrots, and potato!' },
      { emoji: '🥕', text: 'Attach the fruits and veggies to the right place!' },
      { emoji: '🍆', text: 'Gently remove them from the board and put them in the basket!' },
      { emoji: '😋', text: 'Make sure to put the fruits and veggies in the basket!' },
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
      { emoji: '👦', text: 'Pick a cute outfit for the boy and girl!' },
      { emoji: '🧥', text: 'Gently remove the clothes from the board and put them on the person!' },
      { emoji: '🧦', text: 'Don\'t forget that they should wear matching clothes!' },
      { emoji: '🎭', text: 'Act like your character! Wear them school outfits for school time or their pajamas for bedtime!' },
      { emoji: '📸', text: 'Have fun and help them look cute!' },
    ],
    video: dressUpVideo,
  },
]

const CONFETTI = [
  { emoji: '⭐', left: '8%',  delay: '0s',   dur: '4.2s', size: '1.4rem' },
  { emoji: '💖', left: '18%', delay: '0.8s', dur: '5.1s', size: '1.2rem' },
  { emoji: '🌟', left: '28%', delay: '1.4s', dur: '4.8s', size: '1.6rem' },
  { emoji: '🎈', left: '42%', delay: '0.3s', dur: '5.5s', size: '1.5rem' },
  { emoji: '✨', left: '55%', delay: '1.8s', dur: '4.5s', size: '1.3rem' },
  { emoji: '🦋', left: '68%', delay: '0.6s', dur: '5.8s', size: '1.4rem' },
  { emoji: '🌈', left: '78%', delay: '2.1s', dur: '4.9s', size: '1.7rem' },
  { emoji: '💫', left: '88%', delay: '1.1s', dur: '5.3s', size: '1.2rem' },
  { emoji: '🎉', left: '35%', delay: '2.5s', dur: '4.6s', size: '1.5rem' },
  { emoji: '🌸', left: '62%', delay: '3s',   dur: '5.0s', size: '1.3rem' },
]

/* ─── Decoration data ────────────────────────────────────── */

const COVER_DECOS: Deco[] = [
  { emoji: '⭐', top: '3%',  left: '3%',   size: 'clamp(1.4rem, 4vw, 2.2rem)', anim: 'busyFloat1',   delay: '0s'   },
  { emoji: '☁️', top: '5%',  left: '22%',  size: 'clamp(1.8rem, 5vw, 2.8rem)', anim: 'busyFloat2',   delay: '0.7s' },
  { emoji: '🌟', top: '2%',  right: '7%',  size: 'clamp(1.3rem, 3.5vw, 2rem)',   anim: 'busyFloat1',   delay: '0.4s' },
  { emoji: '🦋', top: '15%', right: '3%',  size: 'clamp(1.3rem, 3.5vw, 2rem)',   anim: 'busyDrift',    delay: '0.2s' },
  { emoji: '🦖', top: '28%', left: '6%',   size: 'clamp(1.5rem, 4vw, 2.2rem)', anim: 'busyWiggle',   delay: '0.9s' },
  { emoji: '✨', top: '32%', left: '2%',   size: 'clamp(1.1rem, 3vw, 1.6rem)', anim: 'busySparkle',  delay: '1s'   },
  { emoji: '🌈', bottom: '22%', left: '2%',  size: 'clamp(1.4rem, 4vw, 2.2rem)', anim: 'busyFloat2', delay: '0.5s' },
  { emoji: '💫', bottom: '10%', right: '5%', size: 'clamp(1.2rem, 3.5vw, 1.8rem)', anim: 'busySparkle',delay: '0.3s' },
  { emoji: '🌸', top: '55%', right: '2%',  size: 'clamp(1.2rem, 3.5vw, 1.7rem)', anim: 'busyFloat1',   delay: '1.3s' },
  { emoji: '🎈', top: '65%', left: '4%',   size: 'clamp(1.3rem, 3.5vw, 1.9rem)', anim: 'busyFloat2',   delay: '0.8s' },
  { emoji: '💖', top: '10%', left: '50%',  size: 'clamp(1rem, 3vw, 1.4rem)', anim: 'busySparkle',  delay: '0.6s' },
  { emoji: '🥚', bottom: '5%',  left: '15%', size: 'clamp(1.2rem, 3.5vw, 1.7rem)', anim: 'busyDrift',  delay: '1.5s' },
  { emoji: '⭐', bottom: '30%', right: '3%', size: 'clamp(1rem, 3vw, 1.4rem)', anim: 'busyFloat1', delay: '1.1s' },
]

const BOOK_DECOS: Deco[] = [
  { emoji: '✨', top: '8%',   right: '1.5%', size: 'clamp(1rem, 3vw, 1.3rem)', anim: 'busySparkle', delay: '0s'   },
  { emoji: '🦋', top: '38%', right: '0.5%', size: 'clamp(1rem, 3vw, 1.4rem)', anim: 'busyDrift',   delay: '0.4s' },
  { emoji: '⭐', bottom: '18%', left: '0.8%', size: 'clamp(0.9rem, 2.5vw, 1.2rem)', anim: 'busyFloat1', delay: '0.8s' },
  { emoji: '💫', bottom: '30%', right: '1%',  size: 'clamp(0.9rem, 2.5vw, 1.3rem)', anim: 'busySparkle',delay: '1.2s' },
  { emoji: '🌸', top: '65%', left: '1%',    size: 'clamp(0.9rem, 2.5vw, 1.2rem)', anim: 'busyFloat2',   delay: '0.5s' },
]

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
      className="flex items-start gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-2xl transition-transform hover:scale-[1.02] active:scale-[0.98] cursor-default"
      style={{ background: bg, border: `3px solid ${border}` }}
    >
      <span className="text-3xl sm:text-4xl flex-shrink-0 mt-0.5">{step.emoji}</span>
      <div className="min-w-0">
        <span
          className="text-xs sm:text-sm font-black uppercase tracking-widest block"
          style={{ color: accentColor, fontFamily: "'Fredoka One', cursive" }}
        >
          Step {index + 1}
        </span>
        <p
          className="text-gray-700 font-bold text-base sm:text-lg leading-snug mt-1"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          {step.text}
        </p>
      </div>
    </div>
  )
}

function PageDots({
  current,
  accentColor,
  onSelect,
  disabled,
}: {
  current: number
  accentColor: string
  onSelect: (index: number) => void
  disabled: boolean
}) {
  return (
    <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto max-w-[42vw] sm:max-w-none px-1 py-1 scrollbar-none">
      {PAGES.map((p, i) => (
        <button
          key={p.id}
          type="button"
          aria-label={`Go to page ${i + 1}: ${p.title}`}
          aria-current={i === current ? 'step' : undefined}
          disabled={disabled}
          onClick={() => onSelect(i)}
          className="rounded-full transition-all duration-300 flex-shrink-0 disabled:cursor-not-allowed"
          style={{
            width: i === current ? '32px' : '14px',
            height: '14px',
            minWidth: i === current ? '32px' : '14px',
            background: i === current ? accentColor : '#D1D5DB',
            boxShadow: i === current ? `0 2px 8px ${accentColor}50` : undefined,
          }}
        />
      ))}
    </div>
  )
}

function KidButton({
  children,
  onClick,
  disabled,
  gradient,
  shadow,
  className = '',
}: {
  children: ReactNode
  onClick: () => void
  disabled?: boolean
  gradient: string
  shadow: string
  className?: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center gap-2 px-5 sm:px-7 py-3.5 sm:py-4 min-h-[52px] rounded-full font-bold text-white text-base sm:text-lg transition-all hover:scale-105 active:scale-90 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 ${className}`}
      style={{
        background: gradient,
        fontFamily: "'Fredoka One', cursive",
        boxShadow: shadow,
      }}
    >
      {children}
    </button>
  )
}

type InfoPanel = 'authors' | 'why-matters' | null
type AudienceTab = 'children' | 'parents' | 'educators'

const WHY_BOOK_MATTERS: {
  id: AudienceTab
  label: string
  emoji: string
  gradient: string
  text: string
}[] = [
  {
    id: 'children',
    label: 'For the Children',
    emoji: '🧒',
    gradient: 'linear-gradient(135deg, #F59E0B, #D97706)',
    text: 'This book is a playground for growth! It stimulates imagination, enhances fine motor skills, and hand-eye coordination through tactile manipulation (buttoning, zipping, matching, and tracing). It also promotes cognitive development, problem-solving, and foundational literacy and numeracy, turning early learning into a joyful, independent experience.',
  },
  {
    id: 'parents',
    label: 'For Parents & Guardians',
    emoji: '👨‍👩‍👧',
    gradient: 'linear-gradient(135deg, #EC4899, #BE185D)',
    text: '"Busy Little Hands" is your go-to partner for screen-free engagement. It is a portable, quiet, and meaningful way to keep your child productively occupied at home or on the go. More than that, it provides a beautiful opportunity for interactive bonding and shared milestones as you guide your child through new challenges.',
  },
  {
    id: 'educators',
    label: 'For Educators',
    emoji: '👩‍🏫',
    gradient: 'linear-gradient(135deg, #3B82F6, #1D4ED8)',
    text: 'This book serves as a valuable, versatile classroom resource. It aligns seamlessly with student-centered, play-based learning and Developmentally Appropriate Practices (DAP). It can be integrated into independent learning centers, used for individualized instruction, or utilized as a creative tool to assess a child\'s fine motor and cognitive readiness.',
  },
]

function InfoFabButton({
  children,
  onClick,
  gradient,
}: {
  children: ReactNode
  onClick: () => void
  gradient: string
}) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation()
        onClick()
      }}
      className="flex items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 rounded-2xl font-bold text-white text-xs sm:text-sm transition-all hover:scale-[1.03] active:scale-95 shadow-lg text-left max-w-[200px] sm:max-w-[220px]"
      style={{
        background: gradient,
        fontFamily: "'Fredoka One', cursive",
        boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
        backdropFilter: 'blur(6px)',
      }}
    >
      {children}
    </button>
  )
}

function InfoButtons({ onOpen }: { onOpen: (panel: InfoPanel) => void }) {
  return (
    <div
      className="fixed z-40 flex flex-col items-end gap-2 sm:gap-2.5 right-3 sm:right-5 pointer-events-none"
      style={{ bottom: 'max(1rem, env(safe-area-inset-bottom))' }}
    >
      <div className="pointer-events-auto flex flex-col items-end gap-2 sm:gap-2.5">
        <InfoFabButton
          onClick={() => onOpen('authors')}
          gradient="linear-gradient(135deg, #8B5CF6, #6D28D9)"
        >
          <span className="text-base sm:text-lg flex-shrink-0">💌</span>
          <span>A Note from the Authors</span>
        </InfoFabButton>
        <InfoFabButton
          onClick={() => onOpen('why-matters')}
          gradient="linear-gradient(135deg, #F59E0B, #D97706)"
        >
          <span className="text-base sm:text-lg flex-shrink-0">📖</span>
          <span>Why this book matters</span>
        </InfoFabButton>
      </div>
    </div>
  )
}

function InfoModal({
  title,
  emoji,
  onClose,
  children,
  headerGradient,
}: {
  title: string
  emoji: string
  onClose: () => void
  children: ReactNode
  headerGradient: string
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-3 sm:p-6"
      style={{ background: 'rgba(15, 40, 119, 0.55)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[88dvh] overflow-hidden rounded-3xl shadow-2xl flex flex-col"
        style={{ background: '#FFFBEB', border: '4px solid #FFD700' }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="info-modal-title"
      >
        <div
          className="flex items-center justify-between gap-3 px-4 sm:px-6 py-3.5 sm:py-4 shrink-0"
          style={{ background: headerGradient }}
        >
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <span className="text-2xl sm:text-3xl flex-shrink-0">{emoji}</span>
            <h2
              id="info-modal-title"
              className="text-white text-lg sm:text-2xl font-bold truncate"
              style={{ fontFamily: "'Fredoka One', cursive", textShadow: '0 2px 6px rgba(0,0,0,0.2)' }}
            >
              {title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white text-xl font-bold transition-transform hover:scale-110 active:scale-90"
            style={{ background: 'rgba(255,255,255,0.25)', border: '2px solid rgba(255,255,255,0.5)' }}
          >
            ✕
          </button>
        </div>

        <div className="overflow-y-auto flex-1 p-4 sm:p-6">{children}</div>
      </div>
    </div>
  )
}

function AuthorsNoteContent() {
  const paragraphs = [
    'Dear Parents, Guardians, and Educators,',
    'Welcome to "Busy Little Hands"!',
    'As third-year students of the Bachelor of Early Childhood Education (BECEd) program, our passion lies in understanding how young minds grow, play, and learn. We designed this busy book not just as a collection of activities, but as an interactive tool crafted intentionally to support early childhood development through meaningful, hands-on experiences.',
    'We believe that learning should be an adventure—one where little fingers can explore, experiment, and succeed at their own pace.',
    'Thank you for allowing us to be a part of your child\'s early learning journey. We hope "Busy Little Hands" sparks curiosity, fosters resilience, and brings endless moments of discovery to your home or classroom!',
    'With love and dedication to early learning,',
    'Suzette Merca & Shan Chai Fuentes',
    'Authors & Future Early Childhood Educators',
  ]

  return (
    <div className="flex flex-col items-center gap-5 sm:gap-6">
      <div className="flex items-center justify-center gap-4 sm:gap-6 w-full">
        {[
          { src: author1Img, name: 'Suzette Merca' },
          { src: author2Img, name: 'Shan Chai Fuentes' },
        ].map((author) => (
          <figure key={author.name} className="flex flex-col items-center gap-2 flex-1 max-w-[160px]">
            <div
              className="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-lg"
              style={{ border: '4px solid #8B5CF6' }}
            >
              <img
                src={author.src}
                alt={author.name}
                className="w-full h-full object-cover object-top"
                draggable={false}
              />
            </div>
            <figcaption
              className="text-center text-sm sm:text-base font-bold text-gray-700"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              {author.name}
            </figcaption>
          </figure>
        ))}
      </div>

      <div
        className="w-full rounded-2xl px-4 sm:px-6 py-4 sm:py-5 space-y-3 sm:space-y-4"
        style={{ background: '#F5F3FF', border: '3px solid #C4B5FD' }}
      >
        {paragraphs.map((text, i) => (
          <p
            key={i}
            className={`text-gray-700 leading-relaxed ${
              i === paragraphs.length - 1 || i === paragraphs.length - 2
                ? 'font-bold text-base sm:text-lg text-purple-800'
                : i === 0 || i === 1
                  ? 'font-bold text-base sm:text-lg text-purple-900'
                  : 'font-semibold text-sm sm:text-base'
            }`}
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            {text}
          </p>
        ))}
      </div>
    </div>
  )
}

function WhyBookMattersContent() {
  const [tab, setTab] = useState<AudienceTab>('children')
  const active = WHY_BOOK_MATTERS.find((a) => a.id === tab)!

  return (
    <div className="flex flex-col gap-4 sm:gap-5">
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-2.5">
        {WHY_BOOK_MATTERS.map((audience) => (
          <button
            key={audience.id}
            type="button"
            onClick={() => setTab(audience.id)}
            className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-3 py-3 sm:py-3.5 rounded-2xl font-bold text-xs sm:text-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: tab === audience.id ? audience.gradient : '#F3F4F6',
              color: tab === audience.id ? 'white' : '#4B5563',
              fontFamily: "'Fredoka One', cursive",
              boxShadow: tab === audience.id ? '0 4px 14px rgba(0,0,0,0.15)' : undefined,
              border: tab === audience.id ? 'none' : '2px solid #E5E7EB',
            }}
          >
            <span className="text-lg sm:text-xl">{audience.emoji}</span>
            <span className="leading-tight text-center">{audience.label}</span>
          </button>
        ))}
      </div>

      <div
        className="rounded-2xl px-4 sm:px-6 py-4 sm:py-5 transition-all"
        style={{
          background: 'white',
          border: `3px solid ${tab === 'children' ? '#FCD34D' : tab === 'parents' ? '#F9A8D4' : '#93C5FD'}`,
        }}
      >
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <span className="text-3xl sm:text-4xl">{active.emoji}</span>
          <h3
            className="text-lg sm:text-xl font-bold text-gray-800"
            style={{ fontFamily: "'Fredoka One', cursive" }}
          >
            {active.label}
          </h3>
        </div>
        <p
          className="text-gray-700 text-sm sm:text-base font-semibold leading-relaxed"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          {active.text}
        </p>
      </div>
    </div>
  )
}

function InfoPanels({ panel, onClose }: { panel: InfoPanel; onClose: () => void }) {
  if (!panel) return null

  if (panel === 'authors') {
    return (
      <InfoModal
        title="A Note from the Authors"
        emoji="💌"
        headerGradient="linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)"
        onClose={onClose}
      >
        <AuthorsNoteContent />
      </InfoModal>
    )
  }

  return (
    <InfoModal
      title="Why This Book Matters"
      emoji="📖"
      headerGradient="linear-gradient(135deg, #F59E0B 0%, #D97706 100%)"
      onClose={onClose}
    >
      <WhyBookMattersContent />
    </InfoModal>
  )
}

const BOOK_FOOTER_HEIGHT = 'calc(5.75rem + max(0.75rem, env(safe-area-inset-bottom)))'

function ScrollHint({
  scrollRef,
  accentColor,
  pageKey,
}: {
  scrollRef: RefObject<HTMLElement | null>
  accentColor: string
  pageKey: string
}) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const update = () => {
      const canScroll = el.scrollHeight > el.clientHeight + 12
      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 20
      setShow(canScroll && !atBottom)
    }

    update()
    el.addEventListener('scroll', update, { passive: true })
    const observer = new ResizeObserver(update)
    observer.observe(el)

    return () => {
      el.removeEventListener('scroll', update)
      observer.disconnect()
    }
  }, [scrollRef, pageKey])

  if (!show) return null

  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex flex-col items-center"
      aria-hidden="true"
    >
      <div
        className="w-full h-20"
        style={{
          background: 'linear-gradient(to top, rgba(255,255,255,0.95) 35%, transparent 100%)',
        }}
      />
      <div
        className="flex items-center gap-1.5 px-4 py-2 rounded-full font-bold text-white text-xs sm:text-sm -mt-10 shadow-lg"
        style={{
          background: accentColor,
          fontFamily: "'Fredoka One', cursive",
          animation: 'busyBounce 1.5s ease-in-out infinite',
        }}
      >
        <span>↓</span>
        <span>Scroll for more</span>
      </div>
    </div>
  )
}

/* ─── Main App ───────────────────────────────────────────── */

type Screen = 'cover' | 'book' | 'finale'
type FlipState = 'idle' | 'out-left' | 'out-right' | 'in-right' | 'in-left'

export default function App() {
  const [screen, setScreen] = useState<Screen>('cover')
  const [coverLeaving, setCoverLeaving] = useState(false)
  const [pageIndex, setPageIndex] = useState(0)
  const [flip, setFlip] = useState<FlipState>('idle')
  const [infoPanel, setInfoPanel] = useState<InfoPanel>(null)
  const mainScrollRef = useRef<HTMLElement>(null)
  const pendingPage = useRef(0)

  useEffect(() => {
    document.title = 'Busy Little Hands Busy Book | Manual'
  }, [])

  useEffect(() => {
    mainScrollRef.current?.scrollTo({ top: 0, behavior: 'instant' in document.documentElement.style ? 'instant' : 'auto' })
  }, [pageIndex, screen])

  const handleCoverClick = () => {
    if (coverLeaving) return
    setInfoPanel(null)
    setCoverLeaving(true)
    setTimeout(() => {
      setScreen('book')
      setCoverLeaving(false)
    }, 680)
  }

  const goToPage = (index: number) => {
    if (flip !== 'idle' || index === pageIndex) return
    const dir = index > pageIndex ? 'next' : 'prev'
    pendingPage.current = index
    setFlip(dir === 'next' ? 'out-left' : 'out-right')
    setTimeout(() => {
      setPageIndex(index)
      setFlip(dir === 'next' ? 'in-right' : 'in-left')
    }, 340)
    setTimeout(() => setFlip('idle'), 700)
  }

  const navigate = (dir: 'next' | 'prev') => {
    if (flip !== 'idle') return

    if (dir === 'next' && pageIndex === PAGES.length - 1) {
      setFlip('out-left')
      setTimeout(() => {
        setScreen('finale')
        setFlip('idle')
      }, 340)
      return
    }

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
    setInfoPanel(null)
    setScreen('cover')
    setPageIndex(0)
    setFlip('idle')
  }

  const readAgain = () => {
    setPageIndex(0)
    setScreen('book')
    setFlip('idle')
  }

  const page = PAGES[pageIndex]

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
        className="relative w-full min-h-dvh flex flex-col items-center justify-center overflow-hidden cursor-pointer px-4 pb-[max(1rem,env(safe-area-inset-bottom))]"
        style={{
          background:
            'radial-gradient(ellipse at 50% 35%, #2563EB 0%, #1A3FB0 55%, #0F2877 100%)',
          animation: coverLeaving
            ? 'busyCoverLeave 0.68s cubic-bezier(0.4,0,1,1) forwards'
            : undefined,
        }}
        onClick={handleCoverClick}
      >
        {STARS.map((s, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white pointer-events-none"
            style={{
              top: s.top,
              left: s.left,
              width: '4px',
              height: '4px',
              animation: `busyTwinkle ${s.dur} ease-in-out infinite`,
              animationDelay: s.delay,
            }}
          />
        ))}

        <FloatingDecos decos={COVER_DECOS} />

        <div
          className="relative z-20 flex flex-col items-center w-full"
          style={{ animation: 'busyBookFloat 4s ease-in-out infinite' }}
        >
          <div
            className="rounded-3xl p-1.5 sm:p-2 shadow-2xl w-full max-w-[min(520px,92vw)]"
            style={{
              background:
                'linear-gradient(135deg, #FF6B6B 0%, #FFD700 25%, #4ECDC4 50%, #45B7D1 75%, #8B5CF6 100%)',
              boxShadow:
                '0 0 40px rgba(255,215,0,0.5), 0 0 80px rgba(69,183,209,0.3)',
            }}
          >
            <div className="rounded-2xl overflow-hidden bg-white">
              <img
                src={titlePageImg}
                alt="Busy Little Hands – Busy Book cover"
                className="block w-full h-auto"
                draggable={false}
              />
            </div>
          </div>
        </div>

        <div
          className="relative z-20 mt-6 sm:mt-8 px-5 sm:px-8 py-3.5 sm:py-4 rounded-full max-w-[92vw]"
          style={{
            background: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(10px)',
            border: '3px solid rgba(255,255,255,0.45)',
            animation: 'busyPulseGlow 2.2s ease-in-out infinite',
          }}
        >
          <p
            className="text-white text-base sm:text-xl md:text-2xl font-bold text-center"
            style={{
              fontFamily: "'Fredoka One', cursive",
              textShadow: '0 2px 8px rgba(0,0,0,0.35)',
              letterSpacing: '0.02em',
            }}
          >
            👆 Tap Anywhere to Open the Manual! 📖
          </p>
        </div>

        <InfoButtons onOpen={setInfoPanel} />
        <InfoPanels panel={infoPanel} onClose={() => setInfoPanel(null)} />
      </div>
    )
  }

  /* ── FINALE SCREEN (back cover) ───────────────────────── */
  if (screen === 'finale') {
    return (
      <div
        className="relative w-full min-h-dvh flex flex-col items-center justify-center overflow-hidden px-3 sm:px-6 py-6"
        style={{
          background: 'linear-gradient(160deg, #E0F2FE 0%, #FEF9C3 40%, #FCE7F3 100%)',
        }}
      >
        {CONFETTI.map((c, i) => (
          <div
            key={i}
            className="absolute pointer-events-none select-none"
            style={{
              left: c.left,
              top: '-5%',
              fontSize: c.size,
              animation: `busyConfettiFall ${c.dur} linear infinite`,
              animationDelay: c.delay,
            }}
          >
            {c.emoji}
          </div>
        ))}

        <div
          className="relative z-20 flex flex-col items-center w-full max-w-3xl"
          style={{ animation: 'busyFinaleIn 0.7s cubic-bezier(0,0,0.2,1) forwards' }}
        >
          <div
            className="mb-4 sm:mb-6 px-5 sm:px-8 py-3 rounded-full text-center"
            style={{
              background: 'linear-gradient(135deg, #FF6B6B, #FFD700, #4ECDC4)',
              animation: 'busyCelebrate 2s ease-in-out infinite',
            }}
          >
            <p
              className="text-white text-lg sm:text-2xl md:text-3xl font-bold"
              style={{
                fontFamily: "'Fredoka One', cursive",
                textShadow: '0 2px 6px rgba(0,0,0,0.2)',
              }}
            >
              🎉 You Did It! Great Job! 🌟
            </p>
          </div>

          <div
            className="rounded-3xl p-1.5 sm:p-2 shadow-2xl w-full"
            style={{
              background:
                'linear-gradient(135deg, #3B82F6 0%, #60A5FA 25%, #34D399 50%, #FBBF24 75%, #F472B6 100%)',
              boxShadow: '0 8px 40px rgba(59,130,246,0.25)',
            }}
          >
            <div className="rounded-2xl overflow-hidden bg-[#FFFDF5]">
              <img
                src={lastPageImg}
                alt="Let's Play, Learn and Stay Healthy — thank you page"
                className="block w-full h-auto"
                draggable={false}
              />
            </div>
          </div>

          <p
            className="mt-5 sm:mt-6 text-center text-gray-600 font-bold text-sm sm:text-base max-w-md px-2"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            You finished every activity in the Busy Book! Keep playing, learning, and staying healthy every day!
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-5 w-full sm:w-auto">
            <KidButton
              onClick={readAgain}
              gradient="linear-gradient(135deg, #10B981, #059669)"
              shadow="0 4px 14px rgba(16,185,129,0.4)"
              className="w-full sm:w-auto"
            >
              📖 Read Again
            </KidButton>
            <KidButton
              onClick={goHome}
              gradient="linear-gradient(135deg, #8B5CF6, #6D28D9)"
              shadow="0 4px 14px rgba(139,92,246,0.4)"
              className="w-full sm:w-auto"
            >
              🏠 Back to Cover
            </KidButton>
          </div>
        </div>
      </div>
    )
  }

  /* ── BOOK SCREEN ──────────────────────────────────────── */
  return (
    <div
      className="relative w-full h-dvh flex flex-col overflow-hidden"
      style={{
        background: page.pageBackground,
        fontFamily: "'Nunito', sans-serif",
      }}
    >
      <FloatingDecos decos={BOOK_DECOS} />

      <header
        className="relative z-20 shrink-0 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #FF6B6B 0%, #FFB347 25%, #43E97B 50%, #38F9D7 75%, #A18CD1 100%)',
          boxShadow: '0 6px 28px rgba(255, 107, 107, 0.45)',
        }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <span className="absolute text-xl sm:text-2xl" style={{ top: '10%', left: '8%', animation: 'busySparkle 2.5s ease-in-out infinite', opacity: 0.5 }}>⭐</span>
          <span className="absolute text-lg sm:text-xl" style={{ top: '15%', right: '12%', animation: 'busyFloat1 3s ease-in-out infinite', animationDelay: '0.3s', opacity: 0.4 }}>🌈</span>
          <span className="absolute text-base sm:text-lg" style={{ bottom: '10%', left: '25%', animation: 'busySparkle 2s ease-in-out infinite', animationDelay: '0.7s', opacity: 0.4 }}>✨</span>
        </div>

        <div className="relative flex items-center justify-between gap-2 px-3 sm:px-5 py-2.5 sm:py-3">
          <button
            type="button"
            onClick={goHome}
            aria-label="Go home"
            className="flex items-center gap-1 px-3 sm:px-4 py-2.5 min-h-[44px] rounded-full font-bold text-white text-sm sm:text-base transition-transform hover:scale-110 active:scale-90 flex-shrink-0"
            style={{
              background: 'rgba(255,255,255,0.28)',
              border: '2.5px solid rgba(255,255,255,0.6)',
              fontFamily: "'Fredoka One', cursive",
              backdropFilter: 'blur(6px)',
            }}
          >
            <span className="text-lg">🏠</span>
            <span className="hidden sm:inline">Home</span>
          </button>

          <div className="flex flex-col items-center min-w-0 flex-1 px-1">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-xl sm:text-3xl flex-shrink-0" style={{ animation: 'busyBounce 1.5s ease-in-out infinite' }}>📚</span>
              <h1
                className="text-white text-base sm:text-2xl md:text-3xl font-bold truncate"
                style={{
                  fontFamily: "'Fredoka One', cursive",
                  textShadow: '0 3px 8px rgba(0,0,0,0.25)',
                }}
              >
                Busy Little Hands!
              </h1>
              <span className="text-xl sm:text-3xl flex-shrink-0 hidden sm:inline" style={{ animation: 'busyBounce 1.5s ease-in-out infinite', animationDelay: '0.3s' }}>🖐️</span>
            </div>
            <p
              className="text-white/90 text-[10px] sm:text-sm font-bold tracking-wide hidden sm:block"
              style={{ textShadow: '0 1px 4px rgba(0,0,0,0.15)' }}
            >
              🌟 Let's Learn Together! 🌟
            </p>
          </div>

          <div
            className="flex items-center gap-1 px-3 sm:px-4 py-2.5 min-h-[44px] rounded-full font-bold text-white text-sm sm:text-base flex-shrink-0"
            style={{
              background: 'rgba(255,255,255,0.28)',
              border: '2.5px solid rgba(255,255,255,0.6)',
              fontFamily: "'Fredoka One', cursive",
              backdropFilter: 'blur(6px)',
            }}
          >
            📖 {pageIndex + 1}/{PAGES.length}
          </div>
        </div>
      </header>

      <div className="relative flex-1 min-h-0">
        <main
          ref={mainScrollRef}
          className="relative z-10 h-full overflow-y-auto overflow-x-hidden px-3 sm:px-5 py-3 sm:py-5"
          style={{ paddingBottom: BOOK_FOOTER_HEIGHT }}
        >
          <div className="w-full max-w-6xl mx-auto" style={pageStyle}>
          <div
            className="w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
            style={{
              background: 'white',
              border: `4px solid ${page.accentColor}`,
            }}
          >
            <div
              className="px-4 sm:px-5 py-3.5 sm:py-4 flex items-center gap-3"
              style={{ background: page.headerGradient }}
            >
              <span
                className="text-3xl sm:text-5xl flex-shrink-0"
                style={{ animation: 'busyBounce 2s ease-in-out infinite' }}
              >
                {page.emoji}
              </span>
              <div className="min-w-0">
                <h2
                  className="text-white text-xl sm:text-2xl md:text-3xl font-bold leading-tight"
                  style={{
                    fontFamily: "'Fredoka One', cursive",
                    textShadow: '0 2px 6px rgba(0,0,0,0.2)',
                  }}
                >
                  {page.title}
                </h2>
                <p className="text-white/85 text-xs sm:text-sm font-semibold mt-0.5">
                  Watch the video and follow the steps!
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row">
              <div
                className="lg:w-1/2 p-3 sm:p-5 md:p-6 flex flex-col items-center gap-3"
                style={{ background: page.badgeColor }}
              >
                <div
                  className="w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-xl"
                  style={{
                    border: `5px solid ${page.accentColor}`,
                    animation: 'busyRainbow 4s linear infinite',
                  }}
                >
                  <video
                    key={page.id}
                    src={page.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="block w-full max-h-[40vh] sm:max-h-[50vh] lg:max-h-none"
                    style={{ objectFit: 'contain', background: '#000' }}
                  />
                </div>

                <div
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-white text-sm sm:text-base"
                  style={{
                    background: page.accentColor,
                    fontFamily: "'Fredoka One', cursive",
                    boxShadow: `0 3px 12px ${page.accentColor}60`,
                  }}
                >
                  🎬 Watch and Learn!
                </div>
              </div>

              <div className="lg:w-1/2 p-3 sm:p-5 md:p-6 flex flex-col gap-3">
                <div
                  className="rounded-xl sm:rounded-2xl px-4 py-3.5"
                  style={{ background: page.badgeColor, border: `2px solid ${page.accentColor}30` }}
                >
                  <p
                    className="text-gray-700 text-base sm:text-lg font-bold leading-relaxed"
                    style={{ fontFamily: "'Nunito', sans-serif" }}
                  >
                    {page.intro}
                  </p>
                </div>

                <div className="flex flex-col gap-2.5 sm:gap-3">
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

        <ScrollHint
          scrollRef={mainScrollRef}
          accentColor={page.accentColor}
          pageKey={page.id}
        />
      </div>

      <footer
        className="fixed bottom-0 left-0 right-0 z-30 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-3 sm:px-5 py-3 sm:py-4"
        style={{
          background: 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(10px)',
          borderTop: '3px solid #FFD700',
          paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))',
        }}
      >
        <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto justify-center">
          <KidButton
            onClick={() => navigate('prev')}
            disabled={pageIndex === 0 || flip !== 'idle'}
            gradient="linear-gradient(135deg, #8B5CF6, #6D28D9)"
            shadow="0 4px 14px rgba(139,92,246,0.4)"
          >
            ◀ Prev
          </KidButton>

          <PageDots
            current={pageIndex}
            accentColor={page.accentColor}
            onSelect={goToPage}
            disabled={flip !== 'idle'}
          />

          <KidButton
            onClick={() => navigate('next')}
            disabled={flip !== 'idle'}
            gradient={
              pageIndex === PAGES.length - 1
                ? 'linear-gradient(135deg, #F59E0B, #D97706)'
                : 'linear-gradient(135deg, #10B981, #059669)'
            }
            shadow={
              pageIndex === PAGES.length - 1
                ? '0 4px 14px rgba(245,158,11,0.4)'
                : '0 4px 14px rgba(16,185,129,0.4)'
            }
          >
            {pageIndex === PAGES.length - 1 ? 'Finish 🎉' : 'Next ▶'}
          </KidButton>
        </div>
      </footer>
    </div>
  )
}
