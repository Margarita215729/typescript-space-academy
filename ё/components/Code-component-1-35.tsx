import { motion } from "motion/react";
import { Rocket, Star, Zap } from "lucide-react";
import { ImageWithFallback } from './figma/ImageWithFallback';

interface SpaceExplorerProps {
  onStartJourney: () => void;
}

export function SpaceExplorer({ onStartJourney }: SpaceExplorerProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
      {/* Floating astronaut */}
      <motion.div
        className="mb-8"
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1654122107610-9b3b024f1a27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc3Ryb25hdXQlMjBoZWxtZXQlMjBzcGFjZXxlbnwxfHx8fDE3NTcxODkwMTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Space Explorer"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-purple-500/50"
        />
      </motion.div>

      {/* Title with animated text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mb-6"
      >
        <h1 className="text-4xl md:text-6xl mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
          TypeScript
        </h1>
        <motion.h2 
          className="text-2xl md:text-3xl text-white mb-2"
          animate={{ 
            textShadow: [
              "0 0 0 rgba(147, 51, 234, 0)",
              "0 0 20px rgba(147, 51, 234, 0.5)",
              "0 0 0 rgba(147, 51, 234, 0)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Space Academy
        </motion.h2>
        <p className="text-purple-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Blast off on an epic coding adventure! Learn TypeScript through interactive missions, 
          space-themed challenges, and cosmic code battles.
        </p>
      </motion.div>

      {/* Features */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-3xl mx-auto"
      >
        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
          <div className="text-blue-400 mb-3">
            <Rocket size={32} className="mx-auto" />
          </div>
          <h3 className="text-white mb-2">Interactive Missions</h3>
          <p className="text-purple-300 text-sm">
            Code your way through space with hands-on challenges
          </p>
        </div>

        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
          <div className="text-yellow-400 mb-3">
            <Star size={32} className="mx-auto" />
          </div>
          <h3 className="text-white mb-2">Earn Cosmic Stars</h3>
          <p className="text-purple-300 text-sm">
            Collect stars as you master each TypeScript concept
          </p>
        </div>

        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
          <div className="text-cyan-400 mb-3">
            <Zap size={32} className="mx-auto" />
          </div>
          <h3 className="text-white mb-2">Visual Learning</h3>
          <p className="text-purple-300 text-sm">
            See code come to life with animations and visual metaphors
          </p>
        </div>
      </motion.div>

      {/* Start button */}
      <motion.button
        onClick={onStartJourney}
        className="relative group"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity" />
        <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium flex items-center gap-3">
          <Rocket size={20} />
          Begin Your Journey
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            →
          </motion.div>
        </div>
      </motion.button>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.6, 0.2, 0.6],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}