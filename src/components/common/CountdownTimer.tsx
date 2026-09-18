import React, { useState, useEffect } from 'react';
import { Timer, Flame } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  expired: boolean;
}

interface CountdownTimerProps {
  targetDate: string; // ISO 8601 string e.g. "2026-09-23T22:00:00+05:30"
  label?: string;
  variant?: 'hero' | 'compact';
}

function calculateTimeLeft(targetDate: string): TimeLeft {
  const diff = new Date(targetDate).getTime() - Date.now();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    expired: false,
  };
}

function pad(n: number): string {
  return n.toString().padStart(2, '0');
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({
  targetDate,
  label = 'REGISTRATION CLOSES IN',
  variant = 'hero',
}) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calculateTimeLeft(targetDate));

  useEffect(() => {
    if (timeLeft.expired) return;

    const id = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(id);
  }, [targetDate, timeLeft.expired]);

  // ─── Expired state ───────────────────────────────────────────────────────────
  if (timeLeft.expired) {
    return (
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-dark-900 border border-primary/40 rounded-xl text-xs font-mono font-bold uppercase tracking-widest text-primary">
        <Flame className="w-4 h-4 fill-primary animate-pulse" />
        <span>Tournament has begun!</span>
      </div>
    );
  }

  const units = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HRS', value: timeLeft.hours },
    { label: 'MIN', value: timeLeft.minutes },
    { label: 'SEC', value: timeLeft.seconds },
  ];

  // ─── Hero (large) variant ────────────────────────────────────────────────────
  if (variant === 'hero') {
    return (
      <div className="w-full max-w-2xl mx-auto">
        {/* Label */}
        <div className="flex items-center justify-center gap-2 mb-3">
          <Timer className="w-4 h-4 text-primary" />
          <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.25em] text-primary font-bold">
            {label}
          </span>
          <Timer className="w-4 h-4 text-primary" />
        </div>

        {/* Countdown tiles */}
        <div className="grid grid-cols-4 gap-2 sm:gap-3">
          {units.map(({ label: unitLabel, value }) => (
            <div key={unitLabel} className="relative flex flex-col items-center">
              {/* Tile */}
              <div className="relative w-full aspect-square sm:aspect-auto sm:h-20 flex items-center justify-center bg-dark-900 border border-dark-700 rounded-xl overflow-hidden group hover:border-primary/50 transition-colors">
                {/* Ambient glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
                {/* Number */}
                <span className="relative font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white tabular-nums leading-none">
                  {pad(value)}
                </span>
                {/* Bottom accent bar */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-70" />
              </div>
              {/* Unit label */}
              <span className="mt-1.5 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-slate-400 font-medium">
                {unitLabel}
              </span>
            </div>
          ))}
        </div>

        {/* Target date footnote */}
        <p className="text-center mt-3 text-[10px] font-mono text-slate-500">
          Target: 23 Sept 2026 • 10:00 PM IST
        </p>
      </div>
    );
  }

  // ─── Compact variant (register page / banner) ────────────────────────────────
  return (
    <div className="inline-flex flex-col items-center gap-1.5">
      <div className="flex items-center gap-1.5">
        <Timer className="w-3.5 h-3.5 text-primary shrink-0" />
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400 font-semibold">
          {label}
        </span>
      </div>
      <div className="inline-flex items-center gap-1 font-heading font-black text-base sm:text-lg text-white tabular-nums">
        <span className="bg-dark-800 border border-dark-700 px-2 py-0.5 rounded">
          {pad(timeLeft.days)}<span className="text-[10px] font-mono text-slate-400 ml-0.5">d</span>
        </span>
        <span className="text-slate-500 text-sm">:</span>
        <span className="bg-dark-800 border border-dark-700 px-2 py-0.5 rounded">
          {pad(timeLeft.hours)}<span className="text-[10px] font-mono text-slate-400 ml-0.5">h</span>
        </span>
        <span className="text-slate-500 text-sm">:</span>
        <span className="bg-dark-800 border border-dark-700 px-2 py-0.5 rounded">
          {pad(timeLeft.minutes)}<span className="text-[10px] font-mono text-slate-400 ml-0.5">m</span>
        </span>
        <span className="text-slate-500 text-sm">:</span>
        <span className="bg-primary/20 border border-primary/40 px-2 py-0.5 rounded text-primary">
          {pad(timeLeft.seconds)}<span className="text-[10px] font-mono text-primary/70 ml-0.5">s</span>
        </span>
      </div>
    </div>
  );
};
