import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, ShieldAlert, ArrowRight, CheckCircle2 } from 'lucide-react';
import { tournamentConfig } from '../../config/tournamentConfig';

export const RegistrationBanner: React.FC = () => {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto my-6">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-dark-900 via-dark-850 to-dark-900 border-2 border-primary/40 p-8 sm:p-12 lg:p-16 shadow-[0_0_50px_rgba(255,71,66,0.15)]">
        
        {/* Background Ambience */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-nitkkr/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-cyber-grid opacity-25 pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-primary/20 border border-primary/40 rounded-full">
              <Flame className="w-4 h-4 text-primary fill-primary" />
              <span className="font-heading text-xs font-extrabold uppercase tracking-[0.2em] text-primary">
                Slots Are Limited
              </span>
            </div>

            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white leading-tight">
              READY TO REPRESENT YOUR NIT?
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Form your squad and register for the <strong>{tournamentConfig.name} — {tournamentConfig.season}</strong>.
              Clash against rival campus squads for the championship trophy.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-1.5 bg-dark-950/80 px-3 py-1.5 rounded-lg border border-dark-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Squad Format (4v4)</span>
              </div>
              <div className="flex items-center gap-1.5 bg-dark-950/80 px-3 py-1.5 rounded-lg border border-dark-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Verified Students Only</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-end gap-3 w-full lg:w-auto">
            <Link
              to="/register"
              id="cta-banner-register-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-5 font-heading font-black text-base uppercase tracking-widest text-white bg-primary hover:bg-primary-hover transition-all duration-300 rounded clip-chamfer glow-primary-lg active:scale-95 group shadow-2xl"
            >
              <span>REGISTER NOW</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1.5" />
            </Link>

            <div className="flex items-center gap-2 text-xs font-mono text-amber-400/90 bg-dark-950/90 border border-amber-500/30 px-3.5 py-2 rounded-lg">
              <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Only the team captain needs to register.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
