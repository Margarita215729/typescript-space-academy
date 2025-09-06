import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, Pause, RotateCcw, Zap, Rocket, Star, Globe, User } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface InteractiveVisualizationProps {
  type: 'variables' | 'functions' | 'arrays' | 'objects' | 'interfaces' | 'classes';
  onInteraction?: (data: any) => void;
}

export function InteractiveVisualization({ type, onInteraction }: InteractiveVisualizationProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [userInput, setUserInput] = useState<any>({});

  const visualizations = {
    variables: {
      title: "Variables & Space Suits",
      description: "Watch how different data types work like different space suits!",
      steps: [
        { 
          title: "String Variable", 
          description: "Text data like mission names",
          visual: { type: 'string', value: 'Mars Explorer', color: 'blue' }
        },
        { 
          title: "Number Variable", 
          description: "Numeric data like rocket speed",
          visual: { type: 'number', value: 25000, color: 'green' }
        },
        { 
          title: "Boolean Variable", 
          description: "True/false data like engine status",
          visual: { type: 'boolean', value: true, color: 'purple' }
        }
      ]
    },
    functions: {
      title: "Functions & Rocket Engines",
      description: "Functions take inputs and produce outputs, just like rocket engines!",
      steps: [
        { 
          title: "Input Parameters", 
          description: "Fuel goes into the engine",
          visual: { type: 'input', value: 'speed: 1000, time: 5', color: 'orange' }
        },
        { 
          title: "Function Processing", 
          description: "Engine processes the fuel",
          visual: { type: 'process', value: 'speed * time', color: 'yellow' }
        },
        { 
          title: "Output Result", 
          description: "Thrust comes out of the engine",
          visual: { type: 'output', value: 5000, color: 'red' }
        }
      ]
    },
    arrays: {
      title: "Arrays & Space Fleets",
      description: "Arrays are like fleets of spaceships working together!",
      steps: [
        { 
          title: "Fleet Formation", 
          description: "Multiple ships in formation",
          visual: { type: 'fleet', ships: ['Enterprise', 'Voyager', 'Discovery'], color: 'blue' }
        },
        { 
          title: "Adding Ships", 
          description: "New ships join the fleet",
          visual: { type: 'add', newShip: 'Endeavour', color: 'green' }
        },
        { 
          title: "Fleet Operations", 
          description: "All ships work together",
          visual: { type: 'operate', action: 'Launch sequence', color: 'purple' }
        }
      ]
    },
    objects: {
      title: "Objects & Space Stations",
      description: "Objects are like space stations with different rooms and functions!",
      steps: [
        { 
          title: "Station Structure", 
          description: "Different rooms for different purposes",
          visual: { type: 'station', rooms: ['Control', 'Lab', 'Quarters'], color: 'blue' }
        },
        { 
          title: "Station Properties", 
          description: "Each room has specific features",
          visual: { type: 'properties', data: { altitude: 408, crew: 7 }, color: 'green' }
        },
        { 
          title: "Station Methods", 
          description: "Functions that operate the station",
          visual: { type: 'methods', action: 'adjustAltitude(410)', color: 'purple' }
        }
      ]
    },
    interfaces: {
      title: "Interfaces & Mission Blueprints",
      description: "Interfaces define the structure that objects must follow!",
      steps: [
        { 
          title: "Blueprint Design", 
          description: "Define required components",
          visual: { type: 'blueprint', requirements: ['name', 'crew', 'fuel'], color: 'blue' }
        },
        { 
          title: "Optional Features", 
          description: "Some features are optional",
          visual: { type: 'optional', feature: 'destination?', color: 'yellow' }
        },
        { 
          title: "Implementation", 
          description: "Build according to blueprint",
          visual: { type: 'build', result: 'Apollo 11', color: 'green' }
        }
      ]
    },
    classes: {
      title: "Classes & Starship Construction",
      description: "Classes are templates for building multiple objects!",
      steps: [
        { 
          title: "Construction Template", 
          description: "Blueprint for building starships",
          visual: { type: 'template', features: ['fuel', 'crew', 'name'], color: 'blue' }
        },
        { 
          title: "Access Control", 
          description: "Different access levels",
          visual: { type: 'access', levels: ['public', 'private', 'protected'], color: 'orange' }
        },
        { 
          title: "Multiple Ships", 
          description: "Build many ships from one template",
          visual: { type: 'multiple', ships: ['Enterprise', 'Voyager'], color: 'green' }
        }
      ]
    }
  };

  const currentViz = visualizations[type];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentStep(prev => (prev + 1) % currentViz.steps.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, currentViz.steps.length]);

  const renderVisual = (step: any) => {
    const { visual } = step;
    
    switch (visual.type) {
      case 'string':
        return (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-32 h-16 bg-blue-500/20 border-2 border-blue-400 rounded-lg flex items-center justify-center"
          >
            <span className="text-blue-400 font-mono text-sm">"{visual.value}"</span>
          </motion.div>
        );
      
      case 'number':
        return (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-32 h-16 bg-green-500/20 border-2 border-green-400 rounded-lg flex items-center justify-center"
          >
            <span className="text-green-400 font-mono text-sm">{visual.value}</span>
          </motion.div>
        );
      
      case 'boolean':
        return (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-32 h-16 bg-purple-500/20 border-2 border-purple-400 rounded-lg flex items-center justify-center"
          >
            <span className="text-purple-400 font-mono text-sm">{visual.value ? 'true' : 'false'}</span>
          </motion.div>
        );
      
      case 'fleet':
        return (
          <div className="flex gap-2">
            {visual.ships.map((ship: string, index: number) => (
              <motion.div
                key={ship}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="w-20 h-12 bg-blue-500/20 border border-blue-400 rounded flex items-center justify-center"
              >
                <span className="text-blue-400 text-xs">{ship}</span>
              </motion.div>
            ))}
          </div>
        );
      
      case 'station':
        return (
          <div className="grid grid-cols-3 gap-2">
            {visual.rooms.map((room: string, index: number) => (
              <motion.div
                key={room}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.3 }}
                className="w-16 h-16 bg-green-500/20 border border-green-400 rounded flex items-center justify-center"
              >
                <span className="text-green-400 text-xs text-center">{room}</span>
              </motion.div>
            ))}
          </div>
        );
      
      default:
        return (
          <div className="w-32 h-16 bg-gray-500/20 border-2 border-gray-400 rounded-lg flex items-center justify-center">
            <span className="text-gray-400 text-sm">Visual</span>
          </div>
        );
    }
  };

  return (
    <Card className="p-6 bg-gradient-to-br from-purple-900/40 to-blue-900/40 border-purple-500/30">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-xl text-white mb-1">{currentViz.title}</h3>
          <p className="text-purple-300 text-sm">{currentViz.description}</p>
        </div>
        
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => setIsPlaying(!isPlaying)}
            className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10"
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              setCurrentStep(0);
              setIsPlaying(false);
            }}
            className="border-gray-500/30 text-gray-400 hover:bg-gray-500/10"
          >
            <RotateCcw size={16} />
          </Button>
        </div>
      </div>

      {/* Progress indicator */}
      <div className="flex gap-2 mb-6">
        {currentViz.steps.map((_, index) => (
          <div
            key={index}
            className={`h-2 flex-1 rounded ${
              index === currentStep 
                ? 'bg-purple-400' 
                : index < currentStep 
                  ? 'bg-purple-400/50' 
                  : 'bg-gray-600'
            }`}
          />
        ))}
      </div>

      {/* Current step visualization */}
      <div className="text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4">
              <h4 className="text-lg text-white mb-2">{currentViz.steps[currentStep].title}</h4>
              <p className="text-purple-300 text-sm mb-4">{currentViz.steps[currentStep].description}</p>
            </div>
            
            <div className="flex justify-center">
              {renderVisual(currentViz.steps[currentStep])}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Interactive elements */}
      <div className="mt-6 p-4 bg-black/20 rounded-lg">
        <h5 className="text-white text-sm mb-3">Try it yourself:</h5>
        <div className="space-y-2">
          {type === 'variables' && (
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter a mission name"
                className="flex-1 px-3 py-2 bg-black/40 border border-purple-500/30 rounded text-white text-sm"
                onChange={(e) => setUserInput({...userInput, missionName: e.target.value})}
              />
              <Button
                size="sm"
                onClick={() => onInteraction?.(userInput)}
                className="bg-purple-600 hover:bg-purple-700"
              >
                <Zap size={16} />
              </Button>
            </div>
          )}
          
          {type === 'functions' && (
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="Speed"
                className="w-20 px-3 py-2 bg-black/40 border border-purple-500/30 rounded text-white text-sm"
                onChange={(e) => setUserInput({...userInput, speed: e.target.value})}
              />
              <input
                type="number"
                placeholder="Time"
                className="w-20 px-3 py-2 bg-black/40 border border-purple-500/30 rounded text-white text-sm"
                onChange={(e) => setUserInput({...userInput, time: e.target.value})}
              />
              <Button
                size="sm"
                onClick={() => onInteraction?.(userInput)}
                className="bg-purple-600 hover:bg-purple-700"
              >
                <Rocket size={16} />
              </Button>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
