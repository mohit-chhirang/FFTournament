import React from 'react';
import { tournamentConfig } from '../../config/tournamentConfig';
import { Trophy, Gamepad2, Users, LayoutGrid, School, Ticket, Calendar, Gift } from 'lucide-react';

export const OverviewStats: React.FC = () => {
  const stats = [
    {
      label: 'SEASON',
      value: '01',
      sub: 'Championship Inaugural',
      icon: Trophy,
      color: 'text-accent-gold'
    },
    {
      label: 'GAME TITLE',
      value: tournamentConfig.game,
      sub: 'Mobile Battle Royale',
      icon: Gamepad2,
      color: 'text-primary'
    },
    {
      label: 'TEAM SIZE',
      value: tournamentConfig.teamSize,
      sub: 'Squad Battle (Captain + 3)',
      icon: Users,
      color: 'text-nitkkr'
    },
    {
      label: 'FORMAT',
      value: tournamentConfig.format,
      sub: 'Dedicated Private Lobby',
      icon: LayoutGrid,
      color: 'text-accent-orange'
    },
    {
      label: 'COLLEGES',
      value: '2 INSTITUTES',
      sub: 'NITKKR × NITJ',
      icon: School,
      color: 'text-cyan-400'
    },
    {
      label: 'ENTRY',
      value: tournamentConfig.entryFee,
      sub: 'Registration Fee Policy',
      icon: Ticket,
      color: 'text-emerald-400'
    },
    {
      label: 'SCHEDULE DATE',
      value: tournamentConfig.tournamentDate,
      sub: 'Match Day Timetable',
      icon: Calendar,
      color: 'text-purple-400'
    },
    {
      label: 'PRIZE POOL',
      value: tournamentConfig.prizePool,
      sub: 'Trophies & Accolades',
      icon: Gift,
      color: 'text-yellow-400'
    },
  ];

  return (
    <section className="relative py-20 bg-dark-950 border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="font-heading text-xs uppercase tracking-[0.25em] text-primary font-bold">
            Tournament Breakdown
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl uppercase text-white tracking-tight">
            CHAMPIONSHIP AT A GLANCE
          </h2>
          <p className="text-slate-400 text-sm">
            Core tournament specifications and competition parameters.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="relative bg-dark-850/90 border border-dark-700/80 rounded-xl p-6 flex flex-col justify-between hover:border-slate-600 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-slate-400 font-medium">
                    {stat.label}
                  </span>
                  <div className={`p-2 rounded-lg bg-dark-900 border border-dark-700/60 ${stat.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="font-heading font-extrabold text-xl sm:text-2xl text-white tracking-wide">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 font-sans">
                    {stat.sub}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-dark-800 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>SPEC_CODE: 0{idx + 1}</span>
                  <span className="text-emerald-500/80">VERIFIED</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
