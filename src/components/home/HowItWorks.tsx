import { Users, UserCheck, ShieldCheck } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'FORM YOUR SQUAD',
      desc: 'Assemble your 4-player squad from your institute (NIT Kurukshetra or NIT Jalandhar). Elect a team captain to lead communications.',
      icon: Users,
      badge: 'Step 1 • Team Building',
      color: 'border-cyan-500/40 text-cyan-400'
    },
    {
      num: '02',
      title: 'CAPTAIN REGISTERS',
      desc: 'Only the team captain submits the official registration Google Form with team member details, in-game names, and institute verification.',
      icon: UserCheck,
      badge: 'Step 2 • Captain Only',
      color: 'border-primary/50 text-primary'
    },
    {
      num: '03',
      title: 'JOIN THE BATTLE',
      desc: 'Once verified, captains receive private custom-room credentials, match slot allocations, and tournament briefing prior to match time.',
      icon: ShieldCheck,
      badge: 'Step 3 • Custom Room',
      color: 'border-emerald-500/40 text-emerald-400'
    }
  ];

  return (
    <section className="relative py-20 bg-dark-900 border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="font-heading text-xs uppercase tracking-[0.25em] text-accent-orange font-bold">
            Registration Protocol
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl uppercase text-white tracking-tight">
            HOW REGISTRATION WORKS
          </h2>
          <p className="text-slate-400 text-sm">
            Three simple steps to enter your squad into the tournament.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative bg-dark-850 border border-dark-700/90 rounded-2xl p-7 flex flex-col justify-between hover:border-primary/50 transition-all duration-300 group"
              >
                {/* Step Top */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-heading font-black text-4xl sm:text-5xl text-dark-700 group-hover:text-primary transition-colors select-none">
                      {step.num}
                    </span>
                    <div className={`w-12 h-12 rounded-xl bg-dark-900 border ${step.color} flex items-center justify-center`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-2 block">
                    {step.badge}
                  </span>

                  <h3 className="font-heading font-extrabold text-xl text-white uppercase tracking-wider mb-3">
                    {step.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Step Bottom Indicator */}
                <div className="mt-8 pt-4 border-t border-dark-800 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>PHASE {step.num}</span>
                  <span className="text-primary font-bold">MANDATORY</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Note */}
        <div className="mt-10 p-4 bg-dark-950/70 border border-dark-700/60 rounded-xl text-center max-w-xl mx-auto">
          <p className="text-xs text-slate-300 font-mono">
            <span className="text-accent-orange font-bold">CRITICAL NOTE:</span> Individual players do NOT need to fill the form separately. Only the squad captain submits the official registration.
          </p>
        </div>

      </div>
    </section>
  );
};
