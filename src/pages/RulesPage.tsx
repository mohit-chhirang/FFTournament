import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  FileCheck,
  Users,
  DoorOpen,
  PlayCircle,
  BarChart3,
  WifiOff,
  Clock,
  AlertTriangle,
  Scale,
  Ban,
  Gavel,
  ArrowRight
} from 'lucide-react';

export const RulesPage: React.FC = () => {
  useEffect(() => {
    document.title = "Official Rules — NITKKR v/s NITJ Free Fire Championship";
  }, []);

  const ruleCategories = [
    {
      id: 'eligibility',
      title: 'Eligibility',
      icon: ShieldCheck,
      rules: [
        'Participation is strictly restricted to currently enrolled bona fide students of National Institute of Technology Kurukshetra (NITKKR) and Dr. B. R. Ambedkar National Institute of Technology Jalandhar (NITJ).',
        'Participants must possess a valid college ID card or verifiable student roll number.',
        'Details regarding cross-institute team compositions or batch restrictions will be announced by the organisers.'
      ]
    },
    {
      id: 'team-registration',
      title: 'Team Registration',
      icon: FileCheck,
      rules: [
        'Each team must consist of exactly 4 active players (with an optional 1 substitute).',
        'Only the designated team captain must submit the registration Google Form on behalf of the entire squad.',
        'Duplicate entries or multiple captains registering the same roster will be subject to verification or rejection.',
        'Registration fee and confirmation details will be announced by the organisers.'
      ]
    },
    {
      id: 'player-participation',
      title: 'Player Participation',
      icon: Users,
      rules: [
        'Players must participate using the exact Free Fire / Free Fire MAX In-Game Name (IGN) and UID submitted during registration.',
        'Account sharing, ringing (playing on another student’s account), or proxy players are strictly forbidden.',
        'Roster change deadlines and player substitution policies will be announced by the organisers.'
      ]
    },
    {
      id: 'custom-room',
      title: 'Custom Room',
      icon: DoorOpen,
      rules: [
        'All tournament matches will be hosted within private Free Fire custom room lobbies.',
        'Room ID and Password credentials will be shared securely with verified team captains 15 minutes prior to match schedule.',
        'Captains must strictly join their allocated team slot numbers.',
        'Gun attributes, character skill configurations, and vehicle presets will be announced by the organisers.'
      ]
    },
    {
      id: 'match-procedure',
      title: 'Match Procedure',
      icon: PlayCircle,
      rules: [
        'Captains must ensure their complete 4-player squad is present inside the assigned lobby slot before the scheduled start time.',
        'Matches will commence promptly at the scheduled time. Room creation timings and remake circumstances will be announced by the organisers.'
      ]
    },
    {
      id: 'scoring',
      title: 'Scoring',
      icon: BarChart3,
      rules: [
        'Tournament rankings are determined by combined Placement Points and Elimination (Kill) Points.',
        'Standard point distribution per rank and kill multiplier details will be announced by the organisers.',
        'Tie-breaking criteria (Total Kills > Highest Placement > Most Recent Match Kills) will be announced by the organisers.'
      ]
    },
    {
      id: 'disconnections',
      title: 'Disconnections',
      icon: WifiOff,
      rules: [
        'Participants are personally responsible for their internet connectivity, device performance, and battery charge.',
        'In the event of an individual player disconnect, the match will proceed uninterrupted.',
        'Lobby remake protocols in case of server-wide disruptions will be announced by the organisers.'
      ]
    },
    {
      id: 'late-entry',
      title: 'Late Entry',
      icon: Clock,
      rules: [
        'Squads failing to join the custom room within the allotted preparation window forfeit their lobby slot.',
        'Matches will not be delayed for tardy players. Leniency thresholds will be announced by the organisers.'
      ]
    },
    {
      id: 'cheating-exploits',
      title: 'Cheating & Exploits',
      icon: AlertTriangle,
      rules: [
        'Use of third-party hacks, scripts, aimbots, wall-hacks, modded APKs, or map glitch exploits is strictly prohibited.',
        'Emulators or PC play are prohibited unless an official emulator division is explicitly announced.',
        'Teaming with rival squads (collusion) or sharing strategic positioning will result in immediate penalties.'
      ]
    },
    {
      id: 'disputes',
      title: 'Disputes',
      icon: Scale,
      rules: [
        'All official dispute claims must be raised exclusively by team captains within 15 minutes of match conclusion.',
        'Claims must be backed by tangible evidence (screen recordings or screenshots). Frivolous disputes will not be entertained.',
        'Dispute submission channel details will be announced by the organisers.'
      ]
    },
    {
      id: 'disqualification',
      title: 'Disqualification',
      icon: Ban,
      rules: [
        'Any team found guilty of cheating, ringing, toxic conduct, impersonation, or providing falsified college identity will be disqualified immediately.',
        'Disqualified squads forfeit all tournament standings and privileges.'
      ]
    },
    {
      id: 'organiser-decisions',
      title: 'Organiser Decisions',
      icon: Gavel,
      rules: [
        'The student organizing committee reserves the ultimate right to interpret, modify, or enforce rules in unforeseen situations to safeguard tournament integrity.',
        'Decisions made by the tournament administrators shall be definitive and final.'
      ]
    }
  ];

  return (
    <div className="pt-28 pb-20 bg-dark-950 min-h-screen relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-cyber-grid opacity-25 pointer-events-none" />
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-dark-850 border border-dark-700 rounded-full">
            <Scale className="w-3.5 h-3.5 text-primary" />
            <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Fair Play & Regulations
            </span>
          </div>

          <h1 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            OFFICIAL RULEBOOK
          </h1>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Regulations governing conduct, custom room procedures, eligibility, and match administration for Season 1.
          </p>
        </div>

        {/* Categories Accordion / Grid */}
        <div className="space-y-6 mb-16">
          {ruleCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                id={cat.id}
                className="bg-dark-850/90 border border-dark-700/80 rounded-2xl p-6 sm:p-8 hover:border-slate-600 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-dark-700/70">
                  <div className="w-10 h-10 rounded-xl bg-dark-900 border border-primary/40 flex items-center justify-center text-primary shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block">
                      Section {idx < 9 ? `0${idx + 1}` : idx + 1}
                    </span>
                    <h2 className="font-heading font-extrabold text-lg sm:text-xl uppercase text-white tracking-wider">
                      {cat.title}
                    </h2>
                  </div>
                </div>

                <ul className="space-y-2.5 text-sm text-slate-300">
                  {cat.rules.map((rule, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="leading-relaxed">{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Prominent Terms & Conditions CTA Card */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-dark-900 via-dark-850 to-dark-900 border-2 border-accent-orange/40 p-8 sm:p-10 text-center space-y-5">
          <div className="space-y-2 max-w-xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-accent-orange font-bold">
              Legal & Participation Agreement
            </span>
            <h3 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase">
              Tournament Terms & Conditions
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              All registered teams and participants agree to abide by the formal event terms, cancellation policies, and organiser authority.
            </p>
          </div>

          <div className="pt-2">
            <Link
              to="/terms"
              id="view-terms-btn"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 font-heading font-black text-sm sm:text-base uppercase tracking-widest text-dark-950 bg-accent-orange hover:bg-amber-400 transition-all duration-300 rounded clip-chamfer shadow-[0_0_25px_rgba(255,170,0,0.3)] group"
            >
              <span>VIEW TERMS & CONDITIONS</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
