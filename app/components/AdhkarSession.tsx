import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card } from "@/components/ui/card"
import { Dhikr, getSessionProgress, getEstimatedTimeRemaining } from '../../lib/adhkar'
import { Home, Settings } from 'lucide-react'

interface AdhkarSessionProps {
  dhikr: Dhikr | undefined
  progress: Record<string, number>
  updateProgress: (dhikrId: string, count: number) => void
  goToNextDhikr: () => void
  goHome: () => void
  currentIndex: number
  totalAdhkar: number
  category: 'morning' | 'evening'
}

export default function AdhkarSession({
  dhikr,
  progress,
  updateProgress,
  goToNextDhikr,
  goHome,
  currentIndex,
  totalAdhkar,
  category
}: AdhkarSessionProps) {
  const [count, setCount] = useState(0)
  const [sessionProgress, setSessionProgress] = useState(0)
  const [timeRemaining, setTimeRemaining] = useState('')

  useEffect(() => {
    if (dhikr) {
      setCount(progress[dhikr.id] || 0)
    }
  }, [dhikr, progress])

  useEffect(() => {
    setSessionProgress(getSessionProgress(category, progress))
    setTimeRemaining(getEstimatedTimeRemaining(category, progress))
  }, [category, progress])

  const incrementCount = () => {
    if (dhikr && count < dhikr.repetitions) {
      const newCount = count + 1
      setCount(newCount)
      updateProgress(dhikr.id, newCount)
      if (newCount === dhikr.repetitions) {
        setTimeout(goToNextDhikr, 1000)
      }
    }
  }

  if (!dhikr) return null

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-md animate-fade-in">
      <div className="w-full flex justify-between items-center mb-4">
        <Button variant="ghost" size="icon" onClick={goHome}>
          <Home className="h-6 w-6" />
        </Button>
        <div className="text-center">
          <h2 className="text-xl font-semibold">{category === 'morning' ? 'Morning' : 'Evening'} Adhkar</h2>
          <p className="text-sm text-gray-500">{currentIndex + 1}/{totalAdhkar} • {timeRemaining} remaining</p>
        </div>
        <Button variant="ghost" size="icon">
          <Settings className="h-6 w-6" />
        </Button>
      </div>
      <Progress value={sessionProgress} className="w-full mb-4" />
      <Card className="w-full p-6 mb-4">
        <div className="text-3xl font-bold mb-4 text-right" lang="ar" dir="rtl">{dhikr.arabic}</div>
        <div className="text-lg mb-2">{dhikr.transliteration}</div>
        <div className="text-md text-gray-600">{dhikr.translation}</div>
      </Card>
      <div className="relative w-48 h-48">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            className="text-gray-200"
            strokeWidth="8"
            stroke="currentColor"
            fill="transparent"
            r="44"
            cx="50"
            cy="50"
          />
          <circle
            className="text-primary"
            strokeWidth="8"
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r="44"
            cx="50"
            cy="50"
            style={{
              strokeDasharray: `${2 * Math.PI * 44}`,
              strokeDashoffset: `${2 * Math.PI * 44 * (1 - count / dhikr.repetitions)}`,
              transition: 'stroke-dashoffset 0.3s ease 0s',
            }}
          />
        </svg>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="text-4xl font-bold">{count}</div>
          <div className="text-sm text-gray-500">/ {dhikr.repetitions}</div>
        </div>
      </div>
      <Button onClick={incrementCount} size="lg" className="w-48 h-16 text-xl mt-4">
        Tap to Count
      </Button>
    </div>
  )
}

