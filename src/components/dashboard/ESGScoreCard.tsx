
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

export function ESGScoreCard() {
  const [score, setScore] = useState(0);
  const finalScore = 0; // Reset to 0
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  useEffect(() => {
    const timer = setTimeout(() => {
      setScore(prev => Math.min(prev + 1, finalScore));
    }, 50);
    
    return () => clearTimeout(timer);
  }, [score, finalScore]);

  return (
    <Card className="border-t-4 border-t-emerald shadow-soft overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle>ESG Score</CardTitle>
        <CardDescription>Your current sustainability rating</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center pt-2">
        <div className="progress-ring-container">
          <svg className="progress-ring" width="140" height="140">
            <circle
              className="progress-ring-circle-bg"
              cx="70"
              cy="70"
              r={radius}
              strokeDasharray={circumference}
            />
            <circle
              className="progress-ring-circle"
              cx="70"
              cy="70"
              r={radius}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
            />
          </svg>
          <div className="progress-ring-text">
            <span className="text-4xl font-bold">{score}</span>
            <span className="text-xs">/100</span>
          </div>
        </div>
      </CardContent>
      <div className="px-6 pb-6">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-medium">Environmental</span>
          <span className="text-sm font-medium">0/100</span>
        </div>
        <div className="progress-bar mb-4">
          <div className="progress-bar-fill bg-green-500" style={{ width: '0%' }}></div>
        </div>
        
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-medium">Social</span>
          <span className="text-sm font-medium">0/100</span>
        </div>
        <div className="progress-bar mb-4">
          <div className="progress-bar-fill bg-yellow-500" style={{ width: '0%' }}></div>
        </div>
        
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-medium">Governance</span>
          <span className="text-sm font-medium">0/100</span>
        </div>
        <div className="progress-bar">
          <div className="progress-bar-fill bg-blue-500" style={{ width: '0%' }}></div>
        </div>
      </div>
    </Card>
  );
}
