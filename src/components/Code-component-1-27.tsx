import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, CheckCircle, XCircle, Lightbulb, RotateCcw } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

interface CodePlaygroundProps {
  initialCode: string;
  expectedOutput: string;
  hint: string;
  concept: string;
  explanation: string;
  onSuccess: () => void;
}

export function CodePlayground({
  initialCode,
  expectedOutput,
  hint,
  concept,
  explanation,
  onSuccess
}: CodePlaygroundProps) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState("");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);

  const runCode = () => {
    setAttempts(prev => prev + 1);
    
    try {
      // Simple code evaluation (in a real app, you'd want a proper sandbox)
      // This is a simplified version for demonstration
      const result = evaluateTypeScriptCode(code);
      setOutput(result);
      
      const correct = result.trim() === expectedOutput.trim();
      setIsCorrect(correct);
      
      if (correct) {
        setTimeout(() => {
          onSuccess();
          setShowExplanation(true);
        }, 1000);
      }
    } catch (error) {
      setOutput(`Error: ${error}`);
      setIsCorrect(false);
    }
  };

  // Simplified TypeScript code evaluation (for demo purposes)
  const evaluateTypeScriptCode = (code: string): string => {
    try {
      // Remove TypeScript type annotations for execution
      const jsCode = code
        .replace(/: (string|number|boolean|any)\[\]/g, '')
        .replace(/: (string|number|boolean|any)/g, '')
        .replace(/interface\s+\w+\s*{[^}]*}/g, '')
        .replace(/type\s+\w+\s*=\s*[^;]+;/g, '');

      // Create a safe execution environment
      const func = new Function(`
        const console = {
          log: (...args) => args.join(' ')
        };
        ${jsCode}
      `);
      
      return func() || 'Code executed successfully!';
    } catch (error) {
      throw new Error('Syntax error in your code');
    }
  };

  const resetCode = () => {
    setCode(initialCode);
    setOutput("");
    setIsCorrect(null);
    setShowHint(false);
    setAttempts(0);
    setShowExplanation(false);
  };

  return (
    <div className="space-y-4">
      {/* Concept header */}
      <Card className="p-4 bg-gradient-to-r from-purple-900/40 to-blue-900/40 border-purple-500/30">
        <div className="flex items-center gap-2 mb-2">
          <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
            {concept}
          </Badge>
          <span className="text-sm text-purple-300">Attempt {attempts}</span>
        </div>
        <p className="text-purple-200 text-sm">{explanation}</p>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Code Editor */}
        <Card className="p-4 bg-black/60 border-purple-500/30">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-purple-200">Code Editor</h3>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => setShowHint(!showHint)}
                className="border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/10"
              >
                <Lightbulb size={16} />
                Hint
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={resetCode}
                className="border-gray-500/30 text-gray-400 hover:bg-gray-500/10"
              >
                <RotateCcw size={16} />
                Reset
              </Button>
            </div>
          </div>

          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-40 p-3 bg-black/40 border border-purple-500/20 rounded text-green-400 font-mono text-sm resize-none focus:outline-none focus:border-purple-500/50"
            spellCheck={false}
          />

          <Button
            onClick={runCode}
            className="w-full mt-3 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
          >
            <Play size={16} />
            Run Code
          </Button>
        </Card>

        {/* Output */}
        <Card className="p-4 bg-black/60 border-purple-500/30">
          <h3 className="text-purple-200 mb-3">Output</h3>
          
          <div className="h-40 p-3 bg-black/40 border border-purple-500/20 rounded mb-3">
            <AnimatePresence>
              {output && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="font-mono text-sm"
                >
                  <div className={`flex items-start gap-2 ${
                    isCorrect === true ? 'text-green-400' : 
                    isCorrect === false ? 'text-red-400' : 
                    'text-blue-400'
                  }`}>
                    {isCorrect === true && <CheckCircle size={16} className="mt-0.5 flex-shrink-0" />}
                    {isCorrect === false && <XCircle size={16} className="mt-0.5 flex-shrink-0" />}
                    <span className="whitespace-pre-wrap break-words">{output}</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Expected output */}
          <div className="text-xs text-purple-300">
            <span className="opacity-70">Expected:</span>
            <div className="mt-1 p-2 bg-purple-900/20 rounded font-mono text-purple-200">
              {expectedOutput}
            </div>
          </div>
        </Card>
      </div>

      {/* Hint */}
      <AnimatePresence>
        {showHint && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="p-4 bg-yellow-900/20 border-yellow-500/30">
              <div className="flex items-start gap-2">
                <Lightbulb size={16} className="text-yellow-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-yellow-400 text-sm mb-1">Hint</h4>
                  <p className="text-yellow-200 text-sm">{hint}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success celebration */}
      <AnimatePresence>
        {isCorrect && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 pointer-events-none"
          >
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              className="text-center"
            >
              <motion.div
                animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                transition={{ duration: 1 }}
                className="text-6xl mb-4"
              >
                🎉
              </motion.div>
              <h2 className="text-2xl text-green-400 mb-2">Mission Complete!</h2>
              <p className="text-green-300">Well done, Space Coder!</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Explanation after success */}
      <AnimatePresence>
        {showExplanation && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <Card className="p-4 bg-green-900/20 border-green-500/30">
              <h4 className="text-green-400 mb-2">🎯 What you learned</h4>
              <p className="text-green-200 text-sm">{explanation}</p>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}