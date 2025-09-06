import { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, BookOpen, Code, Target } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { CodePlayground } from "./CodePlayground";

interface LessonPageProps {
  lesson: {
    id: number;
    title: string;
    description: string;
    theory: {
      title: string;
      content: string;
      examples: { code: string; explanation: string }[];
    };
    practice: {
      initialCode: string;
      expectedOutput: string;
      hint: string;
      concept: string;
      explanation: string;
    };
  };
  onBack: () => void;
  onComplete: () => void;
}

export function LessonPage({ lesson, onBack, onComplete }: LessonPageProps) {
  const [activeTab, setActiveTab] = useState("theory");
  const [theoryCompleted, setTheoryCompleted] = useState(false);

  const handlePracticeComplete = () => {
    onComplete();
  };

  const markTheoryComplete = () => {
    setTheoryCompleted(true);
    setActiveTab("practice");
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between mb-8"
      >
        <Button
          variant="outline"
          onClick={onBack}
          className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10"
        >
          <ArrowLeft size={16} />
          Back to Missions
        </Button>

        <div className="text-center">
          <h1 className="text-white text-xl md:text-2xl mb-1">{lesson.title}</h1>
          <p className="text-purple-300 text-sm">{lesson.description}</p>
        </div>

        <div className="w-24" /> {/* Spacer for centering */}
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 bg-black/40 border-purple-500/30">
            <TabsTrigger
              value="theory"
              className="flex items-center gap-2 data-[state=active]:bg-purple-600/50 data-[state=active]:text-white"
            >
              <BookOpen size={16} />
              Theory
            </TabsTrigger>
            <TabsTrigger
              value="practice"
              className="flex items-center gap-2 data-[state=active]:bg-blue-600/50 data-[state=active]:text-white"
              disabled={!theoryCompleted}
            >
              <Code size={16} />
              Practice
            </TabsTrigger>
          </TabsList>

          <TabsContent value="theory" className="space-y-6">
            <Card className="p-6 bg-black/40 backdrop-blur-sm border-purple-500/30">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="text-purple-400" size={20} />
                <h2 className="text-purple-200">{lesson.theory.title}</h2>
              </div>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-purple-100 leading-relaxed mb-6">
                  {lesson.theory.content}
                </p>
              </div>

              {/* Examples */}
              <div className="space-y-4 mb-6">
                <h3 className="text-purple-300">Examples:</h3>
                {lesson.theory.examples.map((example, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="bg-black/60 rounded-lg p-4 border border-purple-500/20"
                  >
                    <pre className="text-green-400 font-mono text-sm mb-3 overflow-x-auto">
                      <code>{example.code}</code>
                    </pre>
                    <p className="text-purple-200 text-sm">{example.explanation}</p>
                  </motion.div>
                ))}
              </div>

              <Button
                onClick={markTheoryComplete}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                <Target size={16} />
                Ready for Practice!
              </Button>
            </Card>
          </TabsContent>

          <TabsContent value="practice" className="space-y-6">
            <CodePlayground
              initialCode={lesson.practice.initialCode}
              expectedOutput={lesson.practice.expectedOutput}
              hint={lesson.practice.hint}
              concept={lesson.practice.concept}
              explanation={lesson.practice.explanation}
              onSuccess={handlePracticeComplete}
            />
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
}