import { motion } from "motion/react";
import { Play, CheckCircle, Lock, Star } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface LessonCardProps {
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  isCompleted: boolean;
  isLocked: boolean;
  stars: number;
  maxStars: number;
  image: string;
  onStart: () => void;
  estimatedTime: string;
  concepts: string[];
}

export function LessonCard({
  title,
  description,
  difficulty,
  isCompleted,
  isLocked,
  stars,
  maxStars,
  image,
  onStart,
  estimatedTime,
  concepts
}: LessonCardProps) {
  const difficultyColors = {
    Beginner: 'bg-green-500/20 text-green-400 border-green-500/30',
    Intermediate: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    Advanced: 'bg-red-500/20 text-red-400 border-red-500/30'
  };

  return (
    <motion.div
      className={`relative bg-black/40 backdrop-blur-sm rounded-xl border overflow-hidden ${
        isLocked 
          ? 'border-gray-500/30 opacity-60' 
          : isCompleted 
          ? 'border-green-500/50' 
          : 'border-purple-500/30'
      }`}
      whileHover={!isLocked ? { scale: 1.02, y: -5 } : {}}
      whileTap={!isLocked ? { scale: 0.98 } : {}}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${image})` }}
      />
      
      {/* Content */}
      <div className="relative p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-white">{title}</h3>
              {isCompleted && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                >
                  <CheckCircle size={20} className="text-green-400 fill-current" />
                </motion.div>
              )}
              {isLocked && <Lock size={16} className="text-gray-400" />}
            </div>
            
            <div className="flex items-center gap-2 mb-3">
              <Badge className={difficultyColors[difficulty]}>
                {difficulty}
              </Badge>
              <span className="text-purple-300 text-sm">⏱️ {estimatedTime}</span>
            </div>
          </div>

          {/* Stars */}
          <div className="flex gap-1">
            {Array.from({ length: maxStars }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, rotate: 0 }}
                animate={{ 
                  scale: i < stars ? 1 : 0.6,
                  rotate: i < stars ? 360 : 0
                }}
                transition={{ 
                  delay: i * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
              >
                <Star 
                  size={16} 
                  className={i < stars ? "text-yellow-400 fill-current" : "text-gray-500"} 
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Description */}
        <p className="text-purple-200 text-sm mb-4 leading-relaxed">
          {description}
        </p>

        {/* Concepts */}
        <div className="mb-4">
          <p className="text-xs text-purple-400 mb-2">You'll learn:</p>
          <div className="flex flex-wrap gap-1">
            {concepts.map((concept, index) => (
              <span
                key={index}
                className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full"
              >
                {concept}
              </span>
            ))}
          </div>
        </div>

        {/* Action button */}
        <Button
          onClick={onStart}
          disabled={isLocked}
          className={`w-full ${
            isCompleted
              ? 'bg-green-600/80 hover:bg-green-600 text-white'
              : isLocked
              ? 'bg-gray-600/50 text-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white'
          }`}
        >
          <div className="flex items-center gap-2">
            {isLocked ? (
              <>
                <Lock size={16} />
                <span>Complete previous missions</span>
              </>
            ) : isCompleted ? (
              <>
                <CheckCircle size={16} />
                <span>Review Mission</span>
              </>
            ) : (
              <>
                <Play size={16} />
                <span>Start Mission</span>
              </>
            )}
          </div>
        </Button>
      </div>

      {/* Glow effect for active lessons */}
      {!isLocked && !isCompleted && (
        <motion.div
          className="absolute inset-0 rounded-xl border border-blue-500/50 pointer-events-none"
          animate={{ 
            boxShadow: [
              '0 0 0 rgba(59, 130, 246, 0)',
              '0 0 20px rgba(59, 130, 246, 0.3)',
              '0 0 0 rgba(59, 130, 246, 0)'
            ]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
    </motion.div>
  );
}