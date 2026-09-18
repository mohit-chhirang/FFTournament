import React from 'react';
import type { RegistrationStatus } from '../../types';

interface StatusBadgeProps {
  status: RegistrationStatus;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  size = 'md',
  className = ''
}) => {
  const getStatusConfig = () => {
    switch (status) {
      case 'open':
        return {
          label: 'REGISTRATION OPEN',
          bg: 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400',
          dot: 'bg-emerald-400 animate-pulse',
          glow: 'shadow-[0_0_12px_rgba(16,185,129,0.3)]'
        };
      case 'closed':
        return {
          label: 'REGISTRATION CLOSED',
          bg: 'bg-amber-500/10 border-amber-500/40 text-amber-400',
          dot: 'bg-amber-400',
          glow: 'shadow-[0_0_12px_rgba(245,158,11,0.2)]'
        };
      case 'live':
        return {
          label: 'TOURNAMENT LIVE',
          bg: 'bg-red-500/15 border-red-500/50 text-red-400',
          dot: 'bg-red-500 animate-ping',
          glow: 'shadow-[0_0_16px_rgba(239,68,68,0.4)]'
        };
      case 'completed':
        return {
          label: 'TOURNAMENT COMPLETED',
          bg: 'bg-yellow-500/10 border-yellow-500/40 text-yellow-400',
          dot: 'bg-yellow-400',
          glow: 'shadow-[0_0_12px_rgba(234,179,8,0.25)]'
        };
      default:
        return {
          label: 'ANNOUNCING SOON',
          bg: 'bg-slate-500/10 border-slate-500/30 text-slate-400',
          dot: 'bg-slate-400',
          glow: ''
        };
    }
  };

  const config = getStatusConfig();
  const sizeClasses = {
    sm: 'text-[10px] px-2 py-0.5 tracking-wider',
    md: 'text-xs px-3 py-1 tracking-widest',
    lg: 'text-sm px-4 py-1.5 tracking-widest font-semibold'
  }[size];

  return (
    <span
      className={`inline-flex items-center gap-2 uppercase font-heading font-semibold border rounded-full backdrop-blur-md ${config.bg} ${config.glow} ${sizeClasses} ${className}`}
    >
      <span className={`w-2 h-2 rounded-full ${config.dot}`} />
      <span>{config.label}</span>
    </span>
  );
};
