import { Button } from "@/components/ui/button"
import { SunIcon, MoonIcon } from "lucide-react"

interface HomeScreenProps {
  startSession: (category: 'morning' | 'evening') => void
  resumeSession: () => void
  hasIncompleteSession: boolean
  currentProgress: number
  lastCompleted: string | null
  incompleteCategory: 'morning' | 'evening' | null
}

export default function HomeScreen({ 
  startSession, 
  resumeSession, 
  hasIncompleteSession,
  currentProgress,
  lastCompleted,
  incompleteCategory
}: HomeScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-4">
      <h1 className="text-4xl font-bold mb-8">Daily Adhkar</h1>
      <div className="w-full max-w-md space-y-4">
        <Button 
          onClick={() => startSession('morning')} 
          className="w-full h-14 text-lg font-medium bg-orange-500 hover:bg-orange-600 text-white"
        >
          <SunIcon className="mr-2 h-5 w-5" /> Morning Adhkar
        </Button>
        <Button 
          onClick={() => startSession('evening')} 
          className="w-full h-14 text-lg font-medium bg-indigo-600 hover:bg-indigo-700 text-white"
        >
          <MoonIcon className="mr-2 h-5 w-5" /> Evening Adhkar
        </Button>
      </div>
      
      {hasIncompleteSession && incompleteCategory && (
        <div className="w-full max-w-md mt-8 bg-white rounded-lg border p-6">
          <h2 className="text-xl font-semibold mb-4">
            Resume {incompleteCategory === 'morning' ? 'Morning' : 'Evening'} Adhkar
          </h2>
          <div className="space-y-4">
            <div className="h-2 bg-gray-100 rounded">
              <div 
                className="h-full bg-indigo-600 rounded transition-all duration-500" 
                style={{ width: `${currentProgress}%` }} 
              />
            </div>
            <p className="text-sm text-gray-500">{currentProgress}% Complete</p>
            <Button 
              onClick={resumeSession}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
            >
              Resume
            </Button>
          </div>
        </div>
      )}

      {lastCompleted && (
        <p className="mt-4 text-sm text-gray-500">
          Last completed: {lastCompleted}
        </p>
      )}
    </div>
  )
}

