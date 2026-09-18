import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { tournamentConfig } from '../config/tournamentConfig';
import { SectionHeader } from '../components/common/SectionHeader';
import { Trophy, ArrowRight } from 'lucide-react';

export const TournamentPage: React.FC = () => {
  useEffect(() => {
    document.title = "Tournament Overview — NITKKR v/s NITJ Free Fire Championship";
  }, []);

  const flowSteps = [
    {
      phase: '01',
      title: 'Squad Registration',
      desc: 'Captain completes the Google Form with squad in-game IDs and institute roll numbers.'
    },
    {
      phase: '02',
      title: 'Student Verification',
      desc: 'Organisers verify student ID cards and enrolled statuses for both NIT campuses.'
    },
    {
      phase: '03',
      title: 'Team Confirmation',
      desc: 'Verified squads receive slot allocation and are published to the participating teams list.'
    },
    {
      phase: '04',
      title: 'Match Schedule',
      desc: 'Match groups, dates, and lobby timings are announced across official channels.'
    },
    {
      phase: '05',
      title: 'Custom Room Clash',
      desc: 'Captains receive private lobby credentials 15 minutes before the match start.'
    },
    {
      phase: '06',
      title: 'Live Leaderboard',
      desc: 'Elimination points and placement scores are computed after each match concludes.'
    },
    {
      phase: '07',
      title: 'Champion Crowned',
      desc: 'The squad with highest aggregated championship points wins the Season 1 trophy.'
    },
  ];

  const formatSpecs = [
    { label: 'Number of Teams', value: '[TO BE ANNOUNCED]' },
    { label: 'Number of Matches', value: '[TO BE ANNOUNCED]' },
    { label: 'Match Mode', value: '[TO BE ANNOUNCED]' },
    { label: 'Maps', value: '[TO BE ANNOUNCED]' },
    { label: 'Scoring System', value: '[TO BE ANNOUNCED]' },
    { label: 'Game Title', value: tournamentConfig.game },
  ];

  return (
    <div className="pt-28 pb-20 bg-dark-950 min-h-screen relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-cyber-grid opacity-25 pointer-events-none" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-nitkkr/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-dark-850 border border-dark-700 rounded-full">
            <Trophy className="w-3.5 h-3.5 text-accent-gold" />
            <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-accent-gold">
              Tournament Dossier
            </span>
          </div>

          <h1 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            ABOUT THE CHAMPIONSHIP
          </h1>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Comprehensive overview of the inaugural collegiate esports clash between NIT Kurukshetra and NIT Jalandhar.
          </p>
        </div>

        {/* About Card */}
        <div className="bg-dark-900 border border-dark-700/80 rounded-2xl p-8 sm:p-10 mb-16 relative overflow-hidden">
          <div className="space-y-4 max-w-3xl">
            <h2 className="font-heading font-black text-2xl sm:text-3xl uppercase text-white tracking-wide">
              The Premier Inter-NIT Battle Royale
            </h2>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              The <strong>NITKKR v/s NITJ Free Fire Championship — {tournamentConfig.season}</strong> is a student-organised collegiate esports tournament bringing together passionate gamers from <strong>National Institute of Technology Kurukshetra (NITKKR)</strong> and <strong>Dr. B. R. Ambedkar National Institute of Technology Jalandhar (NITJ)</strong>.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Organised collaboratively by student esports leaders from both campuses, this competition fosters healthy inter-institute camaraderie, strategic teamwork, and high-intensity gaming excellence in custom-room lobbies under strict fair-play guidelines.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
              <span className="bg-dark-950 px-3 py-1.5 rounded-lg border border-dark-800">
                Official Title: {tournamentConfig.name}
              </span>
              <span className="bg-dark-950 px-3 py-1.5 rounded-lg border border-dark-800">
                Edition: {tournamentConfig.season}
              </span>
            </div>
          </div>
        </div>

        {/* Tournament Format Section */}
        <div className="mb-16">
          <SectionHeader
            badge="Competition Structure"
            title="TOURNAMENT"
            highlight="FORMAT"
            subtitle="Parameters confirmed to date. Unfinalised specifications will be updated by organisers."
            centered={false}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {formatSpecs.map((spec, idx) => (
              <div
                key={idx}
                className="bg-dark-850/90 border border-dark-700/80 rounded-xl p-5 flex flex-col justify-between hover:border-slate-600 transition-colors"
              >
                <span className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-2">
                  {spec.label}
                </span>

                <div className="font-heading font-bold text-lg sm:text-xl text-white">
                  {spec.value}
                </div>

                <div className="mt-3 pt-3 border-t border-dark-800 flex items-center justify-between text-[10px] font-mono">
                  <span className="text-slate-500">Status</span>
                  <span className={spec.value.includes('ANNOUNCED') ? 'text-amber-400' : 'text-emerald-400'}>
                    {spec.value.includes('ANNOUNCED') ? 'PENDING ANNOUNCEMENT' : 'CONFIRMED'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Structure Section */}
        <div className="bg-gradient-to-r from-dark-900 via-dark-850 to-dark-900 border border-dark-700/80 rounded-2xl p-8 sm:p-10 mb-16">
          <div className="max-w-3xl space-y-4">
            <span className="font-heading text-xs uppercase tracking-[0.25em] text-primary font-bold">
              Roster Requirements
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-3xl uppercase text-white">
              TEAM STRUCTURE & COMPOSITION
            </h2>
            <div className="space-y-2 text-sm text-slate-300 leading-relaxed">
              <p>
                • <strong>4 Players per Team:</strong> Each squad must register exactly four primary active players enrolled in either NIT Kurukshetra or NIT Jalandhar.
              </p>
              <p>
                • <strong>Captain Exclusivity:</strong> Only the squad captain is permitted to fill and submit the registration form. Duplicate submissions for the same team will result in rejection.
              </p>
              <p>
                • <strong>Substitute Player:</strong> Squads may register an optional 5th substitute player via the captain's form subject to verification.
              </p>
            </div>
          </div>
        </div>

        {/* Visual Tournament Flow Pipeline */}
        <div className="mb-16">
          <SectionHeader
            badge="Championship Progression"
            title="TOURNAMENT"
            highlight="FLOW"
            subtitle="The path from team registration to hoisting the Season 1 trophy."
          />

          <div className="relative max-w-4xl mx-auto">
            <div className="space-y-4">
              {flowSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="relative flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-dark-850/90 border border-dark-700/80 rounded-xl p-5 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-dark-900 border border-primary/40 flex items-center justify-center font-heading font-black text-lg text-primary shrink-0">
                    {step.phase}
                  </div>

                  <div className="flex-1 space-y-0.5">
                    <h4 className="font-heading font-extrabold text-base sm:text-lg text-white uppercase tracking-wider">
                      {step.title}
                    </h4>
                    <p className="text-slate-300 text-xs sm:text-sm">
                      {step.desc}
                    </p>
                  </div>

                  {idx < flowSteps.length - 1 && (
                    <div className="hidden sm:block text-slate-600">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-dark-900 border border-dark-700/80 rounded-2xl p-8 max-w-2xl mx-auto space-y-4">
          <h3 className="font-heading font-extrabold text-xl uppercase text-white">
            Have questions about the tournament format?
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm">
            Read the complete official rulebook or get in touch with the student organizing committee.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              to="/rules"
              className="px-6 py-3 font-heading font-bold text-xs uppercase tracking-widest text-white bg-dark-800 hover:bg-dark-700 border border-dark-600 rounded clip-chamfer"
            >
              VIEW RULES
            </Link>
            <Link
              to="/register"
              className="px-6 py-3 font-heading font-bold text-xs uppercase tracking-widest text-white bg-primary hover:bg-primary-hover rounded clip-chamfer glow-primary"
            >
              REGISTER SQUAD NOW
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
