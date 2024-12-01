import { Button } from "@/components/ui/button"
import { Sparkles } from 'lucide-react'

interface SessionCompleteProps {
  category: 'morning' | 'evening'
  goHome: () => void
  startNewSession: (category: 'morning' | 'evening') => void
}

export default function SessionComplete({ category, goHome, startNewSession }: SessionCompleteProps) {
  return (
    <div className="flex flex-col items-center gap-6 text-center animate-fade-in">
      <Sparkles className="h-16 w-16 text-yellow-400" />
      <h2 className="text-3xl font-bold">Session Complete!</h2>
      <p className="text-xl">
        Congratulations on completing your {category === 'morning' ? 'Morning' : 'Evening'} Adhkar.
      </p>
      <div className="flex flex-col gap-4 w-full max-w-xs mt-4">
        <Button onClick={goHome} size="lg" className="w-full">
          Return to Home
        </Button>
        <Button onClick={() => startNewSession(category === 'morning' ? 'evening' : 'morning')} variant="outline" size="lg" className="w-full">
          Start {category === 'morning' ? 'Evening' : 'Morning'} Adhkar
        </Button>
      </div>
    </div>
  )
}

