
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useESGScore } from "@/hooks/useESGScore";

export function ESGScoreCard(): JSX.Element {
  const { data, isLoading } = useESGScore();
  const [score, setScore] = useState(0);

  // Progress ring params
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const finalScore = data?.score ?? 0;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  useEffect(() => {
    if (!data?.score) {
      setScore(0);
      return;
    }
    if (score < finalScore) {
      const timer = setTimeout(() => {
        setScore((prev) => Math.min(prev + 1, finalScore));
      }, 20);
      return () => clearTimeout(timer);
    } else if (score > finalScore) {
      setScore(finalScore);
    }
  }, [finalScore, score, data?.score]);

  // If loading or no data, show placeholder
  if (isLoading || !data) {
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
                strokeDashoffset={circumference}
              />
            </svg>
            <div className="progress-ring-text">
              <span className="text-4xl font-bold">0</span>
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

  // Clamp bar values to [0,100]
  const env = Math.max(0, Math.min(100, data.env ?? 0));
  const social = Math.max(0, Math.min(100, data.social ?? 0));
  const governance = Math.max(0, Math.min(100, data.governance ?? 0));

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
          <span className="text-sm font-medium">{env}/100</span>
        </div>
        <div className="progress-bar mb-4">
          <div className="progress-bar-fill bg-green-500"
            style={{ width: `${env}%` }}></div>
        </div>
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-medium">Social</span>
          <span className="text-sm font-medium">{social}/100</span>
        </div>
        <div className="progress-bar mb-4">
          <div className="progress-bar-fill bg-yellow-500"
            style={{ width: `${social}%` }}></div>
        </div>
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-medium">Governance</span>
          <span className="text-sm font-medium">{governance}/100</span>
        </div>
        <div className="progress-bar">
          <div className="progress-bar-fill bg-blue-500"
            style={{ width: `${governance}%` }}></div>
        </div>
      </div>
    </Card>
  );
}
