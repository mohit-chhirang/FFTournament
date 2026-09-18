import React from 'react';
import type { Team, TeamStatus } from '../../types';
import { Shield, ShieldCheck, XCircle, Award } from 'lucide-react';
import { CollegeEmblem } from '../common/CollegeEmblem';

interface TeamCardProps {
  team: Team;
}

export const TeamCard: React.FC<TeamCardProps> = ({ team }) => {
  const getStatusBadge = (status: TeamStatus) => {
    switch (status) {
      case 'Confirmed':
        return {
          label: 'CONFIRMED SQUAD',
          classes: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
          icon: ShieldCheck
        };
      case 'Registered':
        return {
          label: 'UNDER REVIEW',
          classes: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
          icon: Shield
        };
      case 'Qualified':
        return {
          label: 'QUALIFIED',
          classes: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
          icon: Award
        };
      case 'Eliminated':
        return {
          label: 'ELIMINATED',
          classes: 'bg-slate-500/10 text-slate-400 border-slate-500/30',
          icon: XCircle
        };
      default:
        return {
          label: status,
          classes: 'bg-slate-500/10 text-slate-400 border-slate-500/30',
          icon: Shield
        };
    }
  };

  const statusConfig = getStatusBadge(team.status);
  const StatusIcon = statusConfig.icon;

  return (
    <div className="relative bg-dark-850 border border-dark-700/80 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-500 transition-all duration-300 group">
      
      {/* Top Header */}
      <div>
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            {team.avatarUrl ? (
              <img
                src={team.avatarUrl}
                alt={team.name}
                className="w-12 h-12 rounded-xl object-cover bg-dark-900 border border-dark-700"
              />
            ) : (
              <CollegeEmblem collegeId={team.collegeId} size="sm" />
            )}
            <div>
              <h3 className="font-heading font-extrabold text-lg text-white group-hover:text-primary transition-colors">
                {team.name}
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                {team.college}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="pt-4 border-t border-dark-800 flex items-center justify-between">
        <span className={`inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full border ${statusConfig.classes}`}>
          <StatusIcon className="w-3.5 h-3.5" />
          <span>{statusConfig.label}</span>
        </span>

        <span className="text-[10px] font-mono text-slate-500">
          4 PLAYERS SQUAD
        </span>
      </div>

    </div>
  );
};
