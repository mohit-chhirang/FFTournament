import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, ChevronRight, Flame, Target } from 'lucide-react';
import { tournamentConfig } from '../../config/tournamentConfig';
import { StatusBadge } from '../common/StatusBadge';
import { CountdownTimer } from '../common/CountdownTimer';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-dark-950">
      
      {/* Dynamic Tactical Background Elements */}
      <div className="absolute inset-0 bg-cyber-grid opacity-35 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950/40 via-dark-950/80 to-dark-950 pointer-events-none" />
      
      {/* College Clash Radial Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-nitkkr/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-nitj/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Esports Crosshair Graphical Accent Overlay */}
      <div className="absolute top-12 left-12 hidden xl:block opacity-20 font-mono text-[10px] text-slate-400 space-y-1 select-none">
        <div>SYS_COORD: 29.9695° N, 76.8783° E [KKR]</div>
        <div>SYS_COORD: 31.3959° N, 75.5358° E [JAL]</div>
        <div>MATCH_SYS: LOBBY_SECURE_V1</div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        
        {/* Top Badges & Status Pill */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-dark-850/90 border border-dark-700/80 rounded-full backdrop-blur-md">
            <Trophy className="w-3.5 h-3.5 text-accent-gold" />
            <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-accent-gold">
              {tournamentConfig.badge}
            </span>
          </div>

          <StatusBadge status={tournamentConfig.registrationStatus} size="sm" />
        </div>

        {/* Primary Championship Title */}
        <div className="space-y-2 mb-6">
          <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tighter text-white leading-none">
            <span className="relative inline-block text-nitkkr drop-shadow-[0_0_20px_rgba(0,136,255,0.4)]">
              NITKKR
            </span>
            <span className="inline-block text-slate-500 font-light mx-2 sm:mx-4 text-3xl sm:text-5xl md:text-6xl">
              v/s
            </span>
            <span className="relative inline-block text-nitj drop-shadow-[0_0_20px_rgba(255,51,51,0.4)]">
              NITJ
            </span>
          </h1>

          <div className="relative inline-block">
            <h2 className="font-heading font-extrabold text-xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-widest text-white">
              <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                FREE FIRE
              </span>{' '}
              <span className="bg-gradient-to-r from-primary via-accent-orange to-accent-crimson bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,71,66,0.5)]">
                CHAMPIONSHIP
              </span>
            </h2>
          </div>
        </div>

        {/* Supporting Tagline */}
        <p className="font-heading text-lg sm:text-2xl font-bold uppercase tracking-wider text-slate-300 max-w-2xl mx-auto mb-4">
          Two NITs. One battlefield. One champion.
        </p>

        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
          The official inter-institute Free Fire &amp; Free Fire MAX clash between NIT Kurukshetra and NIT Jalandhar.
          Gather your squad and compete for collegiate glory.
        </p>

        {/* Countdown Timer */}
        {tournamentConfig.countdownTarget && (
          <div className="mb-10">
            <CountdownTimer
              targetDate={tournamentConfig.countdownTarget}
              label={tournamentConfig.countdownLabel}
              variant="hero"
            />
          </div>
        )}

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <Link
            to="/register"
            id="hero-register-squad-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 font-heading font-extrabold text-sm sm:text-base uppercase tracking-widest text-white bg-gradient-to-r from-primary via-accent-orange to-primary bg-[length:200%_auto] hover:bg-right transition-all duration-300 clip-chamfer glow-primary-lg active:scale-95 group"
          >
            <Flame className="w-5 h-5 text-yellow-200 fill-yellow-300" />
            <span>REGISTER YOUR SQUAD</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            to="/tournament"
            id="hero-view-tournament-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 font-heading font-bold text-sm sm:text-base uppercase tracking-widest text-slate-200 bg-dark-900/80 hover:bg-dark-800 hover:text-white border border-dark-700/80 hover:border-slate-500 transition-all duration-300 clip-chamfer active:scale-95"
          >
            <Target className="w-4 h-4 text-slate-400" />
            <span>VIEW TOURNAMENT</span>
          </Link>
        </div>

        {/* Floating Esports Key Specs Strip */}
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-3 sm:p-4 bg-dark-900/80 border border-dark-700/70 rounded-2xl backdrop-blur-md shadow-2xl">
          <div className="p-3 bg-dark-950/60 rounded-xl border border-dark-800 text-center">
            <span className="text-[10px] sm:text-xs font-mono uppercase text-slate-500 block">Game Mode</span>
            <span className="font-heading font-bold text-sm sm:text-base text-white">Free Fire / MAX</span>
          </div>

          <div className="p-3 bg-dark-950/60 rounded-xl border border-dark-800 text-center">
            <span className="text-[10px] sm:text-xs font-mono uppercase text-slate-500 block">Squad Size</span>
            <span className="font-heading font-bold text-sm sm:text-base text-white">4 Players</span>
          </div>

          <div className="p-3 bg-dark-950/60 rounded-xl border border-dark-800 text-center">
            <span className="text-[10px] sm:text-xs font-mono uppercase text-slate-500 block">Lobby Type</span>
            <span className="font-heading font-bold text-sm sm:text-base text-white">Custom Room</span>
          </div>

          <div className="p-3 bg-dark-950/60 rounded-xl border border-dark-800 text-center">
            <span className="text-[10px] sm:text-xs font-mono uppercase text-slate-500 block">Colleges</span>
            <span className="font-heading font-bold text-sm sm:text-base text-primary">NITKKR × NITJ</span>
          </div>
        </div>

      </div>
    </section>
  );
};
