import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { SunIcon, MoonIcon, SunriseIcon, SunsetIcon } from "lucide-react"

interface HomeScreenProps {
  startSession: (category: 'morning' | 'evening') => void
  resumeSession: () => void
  hasIncompleteSession: boolean
  currentProgress: number
  lastCompleted: string | null
  incompleteCategory: 'morning' | 'evening' | null
}

const adhkarTiming = {
  morning: {
    title: "Morning Adhkar",
    Icon: SunriseIcon,
    timing: "Between Fajr and Sunrise",
    color: "bg-orange-500 hover:bg-orange-600",
    description: "Start your day with morning remembrance",
  },
  evening: {
    title: "Evening Adhkar",
    Icon: SunsetIcon,
    timing: "Between Asr and Maghrib",
    color: "bg-indigo-600 hover:bg-indigo-700",
    description: "End your day with evening remembrance",
  }
} as const

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
        {(['morning', 'evening'] as const).map((category) => {
          const { Icon } = adhkarTiming[category];
          return (
            <Card key={category} className="overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-semibold">{adhkarTiming[category].title}</h2>
                    <p className="text-sm text-gray-500 mt-1">
                      <Icon className="inline-block w-4 h-4 mr-1" />
                      {adhkarTiming[category].timing}
                    </p>
                  </div>
                  <div className={`rounded-full p-3 ${category === 'morning' ? 'bg-orange-100' : 'bg-indigo-100'}`}>
                    {category === 'morning' ? 
                      <SunIcon className="h-6 w-6 text-orange-500" /> : 
                      <MoonIcon className="h-6 w-6 text-indigo-600" />
                    }
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">{adhkarTiming[category].description}</p>
                <Button 
                  onClick={() => startSession(category)} 
                  className={`w-full h-12 text-lg font-medium text-white ${adhkarTiming[category].color}`}
                >
                  Start {category === 'morning' ? 'Morning' : 'Evening'} Adhkar
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
      
      {hasIncompleteSession && incompleteCategory && (
        <Card className="w-full max-w-md mt-8 p-6">
          <h2 className="text-xl font-semibold mb-4">
            Resume {incompleteCategory === 'morning' ? 'Morning' : 'Evening'} Adhkar
          </h2>
          <div className="space-y-4">
            <div className="h-2 bg-gray-100 rounded">
              <div 
                className={`h-full rounded transition-all duration-500 ${
                  incompleteCategory === 'morning' ? 'bg-orange-500' : 'bg-indigo-600'
                }`}
                style={{ width: `${currentProgress}%` }} 
              />
            </div>
            <p className="text-sm text-gray-500">{currentProgress}% Complete</p>
            <Button 
              onClick={resumeSession}
              className={`w-full text-white ${
                incompleteCategory === 'morning' 
                  ? 'bg-orange-500 hover:bg-orange-600' 
                  : 'bg-indigo-600 hover:bg-indigo-700'
              }`}
            >
              Resume
            </Button>
          </div>
        </Card>
      )}

      {lastCompleted && (
        <p className="mt-4 text-sm text-gray-500">
          Last completed: {lastCompleted}
        </p>
      )}
    </div>
  )
}

