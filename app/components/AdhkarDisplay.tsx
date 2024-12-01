import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Dhikr } from '../../data/adhkar'
import { ArrowLeft } from 'lucide-react'

interface AdhkarDisplayProps {
  dhikr: Dhikr | undefined
  progress: number
  updateProgress: (dhikrId: string, count: number) => void
  goToNextDhikr: () => void
  goHome: () => void
  sessionComplete: boolean
  overallProgress: number
  category: 'morning' | 'evening'
}

export default function AdhkarDisplay({
  dhikr,
  progress,
  updateProgress,
  goToNextDhikr,
  goHome,
  sessionComplete,
  overallProgress,
  category
}: AdhkarDisplayProps) {
  const [count, setCount] = useState(progress)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setCount(progress)
  }, [progress])

  const scrollToTop = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }

  const incrementCount = () => {
    if (dhikr && count < dhikr.repetitions) {
      const newCount = count + 1
      setCount(newCount)
      updateProgress(dhikr.id, newCount)
      if (newCount === dhikr.repetitions) {
        setTimeout(() => {
          scrollToTop()
          setTimeout(goToNextDhikr, 500)
        }, 300)
      }
    }
  }

  if (sessionComplete) {
    return (
      <div className="flex flex-col items-center space-y-6 p-8 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center">Session Complete!</h2>
        <p className="text-gray-600 text-center">You have completed all the adhkar for this session.</p>
        <Button 
          onClick={goHome} 
          className="w-full max-w-md h-12 text-lg bg-green-600 hover:bg-green-700"
        >
          Return Home
        </Button>
      </div>
    )
  }

  if (!dhikr) return null

  const progressPercentage = (count / (dhikr?.repetitions || 1)) * 100

  return (
    <div 
      ref={containerRef} 
      className="flex flex-col items-center pb-24 max-w-2xl mx-auto h-screen overflow-y-auto relative scrollbar-hide"
      style={{
        scrollbarWidth: 'none',  /* Firefox */
        msOverflowStyle: 'none',  /* IE and Edge */
        WebkitOverflowScrolling: 'touch'
      }}
    >
      {/* Hide scrollbar for Chrome, Safari and Opera */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <div className="w-full sticky top-0 bg-white p-4 z-10">
        <div className="flex items-center justify-between mb-4">
          <Button 
            onClick={goHome} 
            variant="ghost" 
            className="p-2"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h2 className="text-2xl font-bold text-center">
            {category === 'morning' ? 'Morning' : 'Evening'} Adhkar
          </h2>
          <div className="w-10" /> {/* Spacer for alignment */}
        </div>
        
        <div className="w-full">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Overall Progress</span>
            <span>{overallProgress}%</span>
          </div>
          <Progress 
            value={overallProgress} 
            className="w-full h-2"
          />
        </div>
      </div>

      <div className="w-full p-4 space-y-6">
        <div className="text-center">
          <div lang="ar" className="text-3xl font-bold mb-4 leading-relaxed">{dhikr.arabic}</div>
          <div className="text-lg text-gray-600 mb-2">{dhikr.transliteration}</div>
          <div className="text-gray-600">{dhikr.translation}</div>
        </div>
      </div>

      {/* Fixed bottom button with progress */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
        <div className="max-w-2xl mx-auto">
          <Button 
            onClick={incrementCount}
            disabled={count >= dhikr.repetitions}
            className="w-full h-16 relative overflow-hidden bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-300"
          >
            <div className="relative z-10 text-xl font-bold">
              {count}/{dhikr.repetitions}
            </div>
            <div 
              className="absolute bottom-0 left-0 h-1 bg-indigo-400 transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </Button>
        </div>
      </div>
    </div>
  )
}

