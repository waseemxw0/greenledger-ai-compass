
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ESGScoreCard() {
  const score = 76;
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <Card>
      <CardHeader>
        <CardTitle>ESG Score</CardTitle>
        <CardDescription>Your current sustainability rating</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center">
        <div className="progress-ring-container">
          <svg className="progress-ring" width="120" height="120">
            <circle
              className="progress-ring-circle-bg"
              cx="60"
              cy="60"
              r={radius}
              strokeDasharray={circumference}
            />
            <circle
              className="progress-ring-circle"
              cx="60"
              cy="60"
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
      <div className="px-6 pb-4">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm">Environmental</span>
          <span className="text-sm font-medium">82/100</span>
        </div>
        <div className="progress-bar mb-3">
          <div className="progress-bar-fill bg-green-500" style={{ width: '82%' }}></div>
        </div>
        
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm">Social</span>
          <span className="text-sm font-medium">68/100</span>
        </div>
        <div className="progress-bar mb-3">
          <div className="progress-bar-fill bg-yellow-500" style={{ width: '68%' }}></div>
        </div>
        
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm">Governance</span>
          <span className="text-sm font-medium">75/100</span>
        </div>
        <div className="progress-bar">
          <div className="progress-bar-fill bg-blue-500" style={{ width: '75%' }}></div>
        </div>
      </div>
    </Card>
  );
}
