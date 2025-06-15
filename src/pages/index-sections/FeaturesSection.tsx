
import { AreaChart, Target, TrendingDown } from "lucide-react";

// New feature bullets as suggested
const featureBullets = [
  {
    icon: <TrendingDown className="text-emerald-600 w-5 h-5 mr-2" />,
    label: "Track your company’s carbon footprint in real time",
  },
  {
    icon: <AreaChart className="text-blue-500 w-5 h-5 mr-2" />,
    label: "Set reduction targets with AI-generated roadmaps",
  },
  {
    icon: <Target className="text-fuchsia-500 w-5 h-5 mr-2" />,
    label: "Monitor progress and receive actionable insights",
  },
];

// Simple timeline/roadmap bar
function RoadmapTimeline() {
  return (
    <div className="flex items-center gap-3 my-4">
      <div className="flex-1 h-2 rounded-full bg-gradient-to-r from-emerald-400 via-blue-400 to-fuchsia-500 relative">
        <div className="absolute left-1/5 top-[-10px] flex flex-col items-center">
          <span className="w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></span>
          <span className="text-xs mt-1 text-emerald-700 font-semibold">Today</span>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 top-[-10px] flex flex-col items-center">
          <span className="w-3 h-3 bg-blue-500 border-2 border-white rounded-full"></span>
          <span className="text-xs mt-1 text-blue-600 font-semibold">Milestone</span>
        </div>
        <div className="absolute right-1 top-[-10px] flex flex-col items-center">
          <span className="w-3 h-3 bg-fuchsia-500 border-2 border-white rounded-full"></span>
          <span className="text-xs mt-1 text-fuchsia-700 font-semibold">Target</span>
        </div>
      </div>
    </div>
  );
}

export function FeaturesSection() {
  return (
    <section className="py-8 sm:py-12 bg-white/95 dark:bg-background border-b">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        {/* Visual: dashboard mockup & timeline */}
        <div className="flex-shrink-0 w-full md:w-1/2 max-w-xs mx-auto md:mx-0 md:mr-8">
          <div className="relative bg-gradient-to-br from-emerald-100 via-blue-100 to-fuchsia-100 rounded-xl shadow-soft p-4 flex flex-col items-center justify-center">
            {/* Dashboard mockup: use placeholder image but visually "frame" it like a dashboard */}
            <div className="w-36 h-24 bg-white rounded-md border border-blue-100 shadow mb-2 flex flex-col justify-between p-2">
              {/* Simulate a line/area chart */}
              <div className="flex-1 flex items-end gap-0.5">
                <div className="w-1.5 h-2 bg-emerald-300 rounded-sm"></div>
                <div className="w-1.5 h-5 bg-emerald-500 rounded-sm"></div>
                <div className="w-1.5 h-4 bg-emerald-400 rounded-sm"></div>
                <div className="w-1.5 h-8 bg-blue-400 rounded-sm"></div>
                <div className="w-1.5 h-12 bg-emerald-600 rounded-sm"></div>
                <div className="w-1.5 h-6 bg-fuchsia-400 rounded-sm"></div>
                <div className="w-1.5 h-10 bg-blue-500 rounded-sm"></div>
                <div className="w-1.5 h-7 bg-fuchsia-500 rounded-sm"></div>
                <div className="w-1.5 h-4 bg-blue-300 rounded-sm"></div>
              </div>
              <span className="text-[10px] leading-tight text-gray-400 mt-1">
                Carbon Emissions (tons)
              </span>
            </div>
            <RoadmapTimeline />
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-4 py-1 text-sm shadow ring-1 ring-emerald-100 font-semibold text-emerald-700 flex items-center">
              <AreaChart className="w-4 h-4 mr-1 text-emerald-500" /> Emissions Dashboard
            </div>
          </div>
        </div>
        {/* Bullets & explainer */}
        <div className="w-full md:w-1/2">
          <h2 className="text-xl sm:text-2xl font-bold mb-3">Features at a glance</h2>
          <ul className="mb-5 space-y-3">
            {featureBullets.map(bullet => (
              <li key={bullet.label} className="flex items-center text-base">
                {bullet.icon}
                <span>{bullet.label}</span>
              </li>
            ))}
          </ul>
          <div>
            <h3 className="font-semibold text-base mb-1">How it works</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              Our platform continuously tracks your carbon output and uses AI to recommend practical steps and milestones
              to reduce your environmental impact — helping you meet regulatory targets and sustainability commitments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

