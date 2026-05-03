'use client';

import { useEffect, useState } from 'react';

interface PlatformStats {
  api_calls_today: number;
  tools_deployed: number;
  active_integrations: number;
  vendors_listed: number;
  uptime_pct: string;
}

function AnimatedNumber({ value }: { value: number }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (value === 0) return;
    let start = display;
    const diff = value - start;
    const steps = 30;
    const step = diff / steps;
    let count = 0;
    const timer = setInterval(() => {
      count++;
      setDisplay(Math.round(start + step * count));
      if (count >= steps) clearInterval(timer);
    }, 20);
    return () => clearInterval(timer);
  }, [value]);

  return <span>{display.toLocaleString()}</span>;
}

export default function LiveStats() {
  const [stats, setStats] = useState<PlatformStats | null>(null);
  const [pulse, setPulse] = useState(false);

  async function fetchStats() {
    try {
      const res = await fetch('/api/platform-stats');
      if (!res.ok) return;
      const data = await res.json();
      setStats(data);
      setPulse(true);
      setTimeout(() => setPulse(false), 600);
    } catch {
      // silently fail — widget is non-critical
    }
  }

  useEffect(() => {
    fetchStats();
    const interval = setInterval(fetchStats, 30000);
    return () => clearInterval(interval);
  }, []);

  if (!stats) return null;

  const items = [
    { label: 'API calls today', value: stats.api_calls_today, icon: '⚡' },
    { label: 'Tools deployed', value: stats.tools_deployed, icon: '🔧' },
    { label: 'Active integrations', value: stats.active_integrations, icon: '🔗' },
    { label: 'Vendors listed', value: stats.vendors_listed, icon: '🏪' },
  ];

  return (
    <div
      className={`w-full border-t border-b border-white/10 bg-black/30 backdrop-blur-sm py-3 px-4 transition-opacity duration-500 ${
        pulse ? 'opacity-80' : 'opacity-100'
      }`}
    >
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-2 text-sm">
            <span className="text-base leading-none">{item.icon}</span>
            <span className="text-white/40 font-mono">{item.label}</span>
            <span className="text-white/80 font-mono font-medium tabular-nums">
              <AnimatedNumber value={item.value} />
            </span>
          </div>
        ))}
        <div className="flex items-center gap-2 text-sm">
          <span
            className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"
            aria-hidden="true"
          />
          <span className="text-white/40 font-mono">uptime</span>
          <span className="text-emerald-400 font-mono font-medium">{stats.uptime_pct}</span>
        </div>
      </div>
    </div>
  );
}
