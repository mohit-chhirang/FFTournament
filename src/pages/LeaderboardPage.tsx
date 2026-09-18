import React, { useEffect } from 'react';
import { LeaderboardTable } from '../components/leaderboard/LeaderboardTable';
import { leaderboardData, tournamentConfig } from '../config/tournamentConfig';
import { Trophy, Shield } from 'lucide-react';

export const LeaderboardPage: React.FC = () => {
  useEffect(() => {
    document.title = "Leaderboard & Standings — NITKKR v/s NITJ Free Fire Championship";
  }, []);

  return (
    <div className="pt-28 pb-20 bg-dark-950 min-h-screen relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-cyber-grid opacity-25 pointer-events-none" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[650px] h-[300px] bg-yellow-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-dark-850 border border-dark-700 rounded-full">
            <Trophy className="w-3.5 h-3.5 text-accent-gold" />
            <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-accent-gold">
              Live Tournament Standings
            </span>
          </div>

          <h1 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            CHAMPIONSHIP LEADERBOARD
          </h1>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Aggregated standings, elimination statistics, and match points for {tournamentConfig.name} — {tournamentConfig.season}.
          </p>
        </div>

        {/* Esports Points Scoring System Notice */}
        <div className="mb-10 p-5 bg-dark-900 border border-dark-700/80 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center text-primary shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-sm uppercase text-white tracking-wider">
                Official Points Distribution Formula
              </h3>
              <p className="text-xs text-slate-400 font-sans mt-0.5">
                Total Score = Placement Points + Elimination Kill Points (1 pt per confirmed kill).
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
            <span className="bg-dark-950 px-3 py-1.5 rounded-lg border border-dark-800">
              Standard Battle Royale Rules
            </span>
          </div>
        </div>

        {/* Data-Driven Table Component */}
        <LeaderboardTable data={leaderboardData} />

      </div>
    </div>
  );
};
