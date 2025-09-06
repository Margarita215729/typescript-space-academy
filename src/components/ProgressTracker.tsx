import { motion } from "motion/react";
import { Star, Rocket, Target } from "lucide-react";

interface ProgressTrackerProps {
  currentLesson: number;
  totalLessons: number;
  completedLessons: number[];
  stars: number;
}

export function ProgressTracker({ currentLesson, totalLessons, completedLessons, stars }: ProgressTrackerProps) {
  const progressPercentage = (completedLessons.length / totalLessons) * 100;

  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-purple-200">Mission Progress</h3>
        <div className="flex items-center gap-2 text-yellow-400">
          <Star size={16} className="fill-current" />
          <span>{stars}</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="relative mb-4">
        <div className="h-3 bg-purple-950/50 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
            style={{ width: `${progressPercentage}%` }}
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>
        <motion.div
          className="absolute -top-1 -right-1 text-blue-400"
          style={{ left: `${progressPercentage}%` }}
          animate={{ 
            y: [0, -5, 0],
            rotate: [0, 360]
          }}
          transition={{ 
            y: { duration: 2, repeat: Infinity },
            rotate: { duration: 4, repeat: Infinity }
          }}
        >
          <Rocket size={20} />
        </motion.div>
      </div>

      {/* Lesson dots */}
      <div className="flex gap-2 flex-wrap">
        {Array.from({ length: totalLessons }).map((_, index) => (
          <motion.div
            key={index}
            className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
              completedLessons.includes(index)
                ? 'bg-green-500/80 border-green-400 text-white'
                : index === currentLesson
                ? 'bg-blue-500/80 border-blue-400 text-white'
                : 'bg-purple-950/50 border-purple-500/30 text-purple-300'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            {completedLessons.includes(index) ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Target size={12} className="fill-current" />
              </motion.div>
            ) : (
              <span>{index + 1}</span>
            )}
          </motion.div>
        ))}
      </div>

      <div className="mt-3 text-sm text-purple-300">
        <span>Mission {currentLesson + 1} of {totalLessons}</span>
        <span className="ml-2">•</span>
        <span className="ml-2">{completedLessons.length} completed</span>
      </div>
    </div>
  );
}