import { useState, useEffect } from "react";
import { SpaceBackground } from "./components/SpaceBackground";
import { SpaceExplorer } from "./components/SpaceExplorer";
import { LessonCard } from "./components/LessonCard";
import { LessonPage } from "./components/LessonPage";
import { ProgressTracker } from "./components/ProgressTracker";
import { lessons, type Lesson } from "./data/lessons";
import { motion, AnimatePresence } from "motion/react";
import { Rocket, Home } from "lucide-react";
import { Button } from "./components/ui/button";

type GameState = 'welcome' | 'missions' | 'lesson';

export default function App() {
  const [gameState, setGameState] = useState<GameState>('welcome');
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const [stars, setStars] = useState(0);

  // Load progress from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem('typescript-space-progress');
    if (savedProgress) {
      const progress = JSON.parse(savedProgress);
      setCompletedLessons(progress.completedLessons || []);
      setStars(progress.stars || 0);
    }
  }, []);

  // Save progress to localStorage
  useEffect(() => {
    const progress = {
      completedLessons,
      stars
    };
    localStorage.setItem('typescript-space-progress', JSON.stringify(progress));
  }, [completedLessons, stars]);

  const startJourney = () => {
    setGameState('missions');
  };

  const startLesson = (lesson: Lesson) => {
    setCurrentLesson(lesson);
    setGameState('lesson');
  };

  const completeLesson = () => {
    if (currentLesson && !completedLessons.includes(currentLesson.id)) {
      setCompletedLessons(prev => [...prev, currentLesson.id]);
      setStars(prev => prev + 3); // Award 3 stars for completing a lesson
    }
    setGameState('missions');
    setCurrentLesson(null);
  };

  const backToMissions = () => {
    setGameState('missions');
    setCurrentLesson(null);
  };

  const backToWelcome = () => {
    setGameState('welcome');
  };

  const isLessonLocked = (lessonId: number) => {
    if (lessonId === 0) return false; // First lesson is always unlocked
    return !completedLessons.includes(lessonId - 1); // Need to complete previous lesson
  };

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      <SpaceBackground />
      
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          {gameState === 'welcome' && (
            <motion.div
              key="welcome"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SpaceExplorer onStartJourney={startJourney} />
            </motion.div>
          )}

          {gameState === 'missions' && (
            <motion.div
              key="missions"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="min-h-screen p-4 md:p-8"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    onClick={backToWelcome}
                    className="border-purple-500/30 text-[rgba(0,10,181,1)] hover:bg-purple-500/10 bg-[rgba(255,255,255,1)]"
                  >
                    <Home size={16} />
                    Home
                  </Button>
                  <div>
                    <h1 className="text-2xl md:text-3xl text-white flex items-center gap-2">
                      <Rocket className="text-blue-400" size={24} />
                      Mission Control
                    </h1>
                    <p className="text-purple-300">Choose your next coding adventure</p>
                  </div>
                </div>

                <ProgressTracker
                  currentLesson={Math.min(...lessons.filter(l => !completedLessons.includes(l.id)).map(l => l.id)) || 0}
                  totalLessons={lessons.length}
                  completedLessons={completedLessons}
                  stars={stars}
                />
              </div>

              {/* Lessons Grid */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                {lessons.map((lesson, index) => (
                  <motion.div
                    key={lesson.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <LessonCard
                      title={lesson.title}
                      description={lesson.description}
                      difficulty={lesson.difficulty}
                      isCompleted={completedLessons.includes(lesson.id)}
                      isLocked={isLessonLocked(lesson.id)}
                      stars={completedLessons.includes(lesson.id) ? 3 : 0}
                      maxStars={3}
                      image={lesson.image}
                      estimatedTime={lesson.estimatedTime}
                      concepts={lesson.concepts}
                      onStart={() => startLesson(lesson)}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Completion message */}
              {completedLessons.length === lessons.length && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-12 text-center"
                >
                  <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30 max-w-2xl mx-auto">
                    <div className="text-6xl mb-4">🎉</div>
                    <h2 className="text-2xl text-white mb-2">Mission Complete!</h2>
                    <p className="text-purple-200 mb-4">
                      Congratulations, Space Commander! You've mastered all TypeScript fundamentals and earned {stars} cosmic stars!
                    </p>
                    <div className="text-yellow-400 text-lg">
                      ⭐ TypeScript Space Academy Graduate ⭐
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}

          {gameState === 'lesson' && currentLesson && (
            <motion.div
              key="lesson"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <LessonPage
                lesson={currentLesson}
                onBack={backToMissions}
                onComplete={completeLesson}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}