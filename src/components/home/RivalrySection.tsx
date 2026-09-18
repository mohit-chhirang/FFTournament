import React from 'react';
import { tournamentConfig } from '../../config/tournamentConfig';
import { CollegeEmblem } from '../common/CollegeEmblem';
import { Swords, MapPin } from 'lucide-react';

export const RivalrySection: React.FC = () => {
  const { nitkkr, nitj } = tournamentConfig.colleges;

  return (
    <section className="relative py-20 bg-dark-900 border-t border-dark-800 overflow-hidden">
      {/* Background ambient dual color split */}
      <div className="absolute top-0 left-0 bottom-0 w-1/2 bg-gradient-to-r from-nitkkr/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 bottom-0 w-1/2 bg-gradient-to-l from-nitj/5 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-dark-800/80 border border-dark-700 rounded-full">
            <Swords className="w-3.5 h-3.5 text-primary" />
            <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-slate-300">
              The Great Inter-NIT Faceoff
            </span>
          </div>
          
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white">
            CAMPUS RIVALRY UNLEASHED
          </h2>

          <p className="font-heading text-base sm:text-lg text-primary font-bold uppercase tracking-wider">
            Represent your institute. Build your squad. Take the battlefield.
          </p>
        </div>

        {/* Rivalry Cards Arena */}
        <div className="relative grid grid-cols-1 lg:grid-cols-11 gap-6 items-center">
          
          {/* NIT Kurukshetra Side */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-nitkkr to-cyan-500 rounded-2xl blur-sm opacity-30 group-hover:opacity-60 transition duration-500" />
            <div className="relative bg-dark-850 border border-dark-700/80 rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center">
              
              <div className="mb-4">
                <CollegeEmblem collegeId="NITKKR" logoUrl={nitkkr.logoUrl} size="lg" />
              </div>

              <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 px-3 py-1 rounded-full mb-2">
                ESTD. 1963 • HARYANA
              </span>

              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white uppercase tracking-wider mb-1">
                {nitkkr.name}
              </h3>

              <div className="text-xs text-slate-400 flex items-center gap-1.5 mb-4">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{nitkkr.location}</span>
              </div>

              <div className="w-full pt-4 border-t border-dark-700/60 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Battle Tag</span>
                <span className="font-bold text-cyan-400 font-heading tracking-wider">#KKR_WARRIORS</span>
              </div>
            </div>
          </div>

          {/* Center Clash VS Indicator */}
          <div className="lg:col-span-1 flex flex-col items-center justify-center my-4 lg:my-0">
            <div className="relative flex items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-nitkkr via-dark-950 to-nitj p-1 shadow-2xl flex items-center justify-center">
                <div className="w-full h-full bg-dark-950 rounded-full flex flex-col items-center justify-center border border-dark-700">
                  <span className="font-heading font-black text-xl sm:text-2xl text-white italic tracking-tighter drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">
                    VS
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* NIT Jalandhar Side */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-nitj rounded-2xl blur-sm opacity-30 group-hover:opacity-60 transition duration-500" />
            <div className="relative bg-dark-850 border border-dark-700/80 rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center">
              
              <div className="mb-4">
                <CollegeEmblem collegeId="NITJ" logoUrl={nitj.logoUrl} size="lg" />
              </div>

              <span className="text-[11px] font-mono uppercase tracking-widest text-nitj bg-red-950/40 border border-red-800/40 px-3 py-1 rounded-full mb-2">
                ESTD. 1987 • PUNJAB
              </span>

              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white uppercase tracking-wider mb-1">
                {nitj.name}
              </h3>

              <div className="text-xs text-slate-400 flex items-center gap-1.5 mb-4">
                <MapPin className="w-3.5 h-3.5 text-nitj" />
                <span>{nitj.location}</span>
              </div>

              <div className="w-full pt-4 border-t border-dark-700/60 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Battle Tag</span>
                <span className="font-bold text-nitj font-heading tracking-wider">#NITJ_TITANS</span>
              </div>
            </div>
          </div>

        </div>

        {/* Neutral Organiser Note */}
        <p className="text-center text-xs font-mono text-slate-500 mt-10">
          Honour. Discipline. Sportsmanship. Both institutes meet as equals on neutral custom room battlefields.
        </p>

      </div>
    </section>
  );
};
