'use client'

import { useState, useEffect } from 'react'
import { adhkarData, Dhikr } from '../data/adhkar'
import HomeScreen from './components/HomeScreen'
import AdhkarDisplay from './components/AdhkarDisplay'

export default function Home() {
  const [currentCategory, setCurrentCategory] = useState<'morning' | 'evening' | null>(null)
  const [currentDhikrIndex, setCurrentDhikrIndex] = useState(0)
  const [progress, setProgress] = useState<Record<string, number>>({})
  const [sessionComplete, setSessionComplete] = useState(false)
  const [hasIncompleteSession, setHasIncompleteSession] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [lastCompleted, setLastCompleted] = useState<string | null>(null)
  const [incompleteCategory, setIncompleteCategory] = useState<'morning' | 'evening' | null>(null)

  // Load saved state on mount
  useEffect(() => {
    setMounted(true)
    const savedCategory = localStorage.getItem('currentCategory') as 'morning' | 'evening' | null
    const savedIndex = localStorage.getItem('currentDhikrIndex')
    const savedProgress = localStorage.getItem('adhkarProgress')
    const savedLastCompleted = localStorage.getItem('lastCompleted')

    if (savedCategory) {
      setIncompleteCategory(savedCategory)
      setHasIncompleteSession(true)
      if (savedIndex) {
        setCurrentDhikrIndex(parseInt(savedIndex))
      }
    }

    if (savedProgress) {
      setProgress(JSON.parse(savedProgress))
    }

    if (savedLastCompleted) {
      setLastCompleted(savedLastCompleted)
    }
  }, [])

  // Save state when it changes
  useEffect(() => {
    if (!mounted) return

    if (currentCategory) {
      localStorage.setItem('currentCategory', currentCategory)
      localStorage.setItem('currentDhikrIndex', currentDhikrIndex.toString())
      localStorage.setItem('adhkarProgress', JSON.stringify(progress))
    }
  }, [currentCategory, currentDhikrIndex, progress, mounted])

  const startSession = (category: 'morning' | 'evening') => {
    setCurrentCategory(category)
    setCurrentDhikrIndex(0)
    setSessionComplete(false)
    setProgress({})
    setIncompleteCategory(null)
    setHasIncompleteSession(false)
    localStorage.setItem('currentCategory', category)
    localStorage.setItem('currentDhikrIndex', '0')
    localStorage.setItem('adhkarProgress', JSON.stringify({}))
  }

  const resumeSession = () => {
    if (incompleteCategory) {
      setCurrentCategory(incompleteCategory)
      const savedIndex = localStorage.getItem('currentDhikrIndex')
      setCurrentDhikrIndex(savedIndex ? parseInt(savedIndex) : 0)
      const savedProgress = localStorage.getItem('adhkarProgress')
      if (savedProgress) {
        setProgress(JSON.parse(savedProgress))
      }
      setSessionComplete(false)
    }
  }

  const updateProgress = (dhikrId: string, count: number) => {
    setProgress(prev => {
      const newProgress = { ...prev, [dhikrId]: count }
      localStorage.setItem('adhkarProgress', JSON.stringify(newProgress))
      return newProgress
    })
  }

  const goToNextDhikr = () => {
    if (currentCategory) {
      const categoryAdhkar = adhkarData.filter(d => d.category === currentCategory)
      if (currentDhikrIndex < categoryAdhkar.length - 1) {
        const nextIndex = currentDhikrIndex + 1
        setCurrentDhikrIndex(nextIndex)
        localStorage.setItem('currentDhikrIndex', nextIndex.toString())
      } else {
        setSessionComplete(true)
        const now = new Date().toLocaleString()
        setLastCompleted(`${currentCategory} Adhkar, ${now}`)
        localStorage.setItem('lastCompleted', `${currentCategory} Adhkar, ${now}`)
        localStorage.removeItem('currentCategory')
        localStorage.removeItem('currentDhikrIndex')
        localStorage.removeItem('adhkarProgress')
        setHasIncompleteSession(false)
        setIncompleteCategory(null)
      }
    }
  }

  const goHome = () => {
    if (currentCategory && !sessionComplete) {
      localStorage.setItem('currentCategory', currentCategory)
      localStorage.setItem('currentDhikrIndex', currentDhikrIndex.toString())
      localStorage.setItem('adhkarProgress', JSON.stringify(progress))
      setHasIncompleteSession(true)
      setIncompleteCategory(currentCategory)
    }
    setCurrentCategory(null)
  }

  const getCurrentProgress = () => {
    if (!currentCategory) {
      const savedCategory = localStorage.getItem('currentCategory') as 'morning' | 'evening' | null
      const savedProgress = localStorage.getItem('adhkarProgress')
      if (!savedCategory || !savedProgress) return 0
      
      const categoryAdhkar = adhkarData.filter(d => d.category === savedCategory)
      const progressData = JSON.parse(savedProgress)
      
      const totalRepetitions = categoryAdhkar.reduce((sum, dhikr) => sum + dhikr.repetitions, 0)
      const completedRepetitions = categoryAdhkar.reduce((sum, dhikr) => {
        const count = progressData[dhikr.id] || 0
        return sum + Math.min(count, dhikr.repetitions)
      }, 0)
      
      return Math.round((completedRepetitions / totalRepetitions) * 100)
    }

    const categoryAdhkar = adhkarData.filter(d => d.category === currentCategory)
    const totalRepetitions = categoryAdhkar.reduce((sum, dhikr) => sum + dhikr.repetitions, 0)
    const completedRepetitions = categoryAdhkar.reduce((sum, dhikr) => {
      const count = progress[dhikr.id] || 0
      return sum + Math.min(count, dhikr.repetitions)
    }, 0)
    
    return Math.round((completedRepetitions / totalRepetitions) * 100)
  }

  const currentDhikr: Dhikr | undefined = currentCategory
    ? adhkarData.filter(d => d.category === currentCategory)[currentDhikrIndex]
    : undefined

  if (!mounted) {
    return null
  }

  return (
    <div className="container mx-auto max-w-2xl px-4 py-8">
      {!currentCategory ? (
        <HomeScreen
          startSession={startSession}
          resumeSession={resumeSession}
          hasIncompleteSession={hasIncompleteSession}
          currentProgress={getCurrentProgress()}
          lastCompleted={lastCompleted}
          incompleteCategory={incompleteCategory}
        />
      ) : (
        <AdhkarDisplay
          dhikr={currentDhikr}
          progress={progress[currentDhikr?.id || ''] || 0}
          updateProgress={updateProgress}
          goToNextDhikr={goToNextDhikr}
          goHome={goHome}
          sessionComplete={sessionComplete}
          overallProgress={getCurrentProgress()}
          category={currentCategory}
        />
      )}
    </div>
  )
}

