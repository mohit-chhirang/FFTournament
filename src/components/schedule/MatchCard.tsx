import React from 'react';
import type { Match } from '../../types';
import { Calendar, Clock, MapPin, Users, Lock } from 'lucide-react';

interface MatchCardProps {
  match: Match;
}

export const MatchCard: React.FC<MatchCardProps> = ({ match }) => {
  return (
    <div className="relative bg-dark-850 border border-dark-700/80 rounded-2xl p-6 hover:border-slate-500 transition-all duration-300">
      
      {/* Top Header: Match Number & Status */}
      <div className="flex items-center justify-between gap-2 mb-4 pb-4 border-b border-dark-700/60">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center font-heading font-black text-sm text-primary">
            #{match.matchNumber}
          </span>
          <h3 className="font-heading font-extrabold text-lg text-white">
            {match.title}
          </h3>
        </div>

        <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-dark-900 border border-dark-700 text-slate-300">
          {match.lobbyStatus}
        </span>
      </div>

      {/* Grid of specs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs mb-5">
        <div className="flex items-center gap-2 text-slate-300 bg-dark-900/60 p-2.5 rounded-lg border border-dark-800">
          <Calendar className="w-4 h-4 text-primary shrink-0" />
          <span className="truncate">{match.date}</span>
        </div>

        <div className="flex items-center gap-2 text-slate-300 bg-dark-900/60 p-2.5 rounded-lg border border-dark-800">
          <Clock className="w-4 h-4 text-accent-orange shrink-0" />
          <span className="truncate">{match.time}</span>
        </div>

        <div className="flex items-center gap-2 text-slate-300 bg-dark-900/60 p-2.5 rounded-lg border border-dark-800">
          <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
          <span className="truncate">{match.map}</span>
        </div>

        <div className="flex items-center gap-2 text-slate-300 bg-dark-900/60 p-2.5 rounded-lg border border-dark-800">
          <Users className="w-4 h-4 text-purple-400 shrink-0" />
          <span className="truncate">{match.participatingTeamsCount}</span>
        </div>
      </div>

      {/* Private Room Security Box */}
      <div className="bg-dark-950/90 border border-dark-700/60 rounded-xl p-3 flex items-center gap-3 text-xs font-mono text-slate-400">
        <Lock className="w-4 h-4 text-amber-400 shrink-0" />
        <span className="text-slate-300">{match.roomDetailsNotice}</span>
      </div>

    </div>
  );
};
