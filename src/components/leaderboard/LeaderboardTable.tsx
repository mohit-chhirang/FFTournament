import React, { useState } from 'react';
import type { LeaderboardRow } from '../../types';
import { Trophy, Flame, Award, Eye, AlertCircle } from 'lucide-react';
import { CollegeEmblem } from '../common/CollegeEmblem';

interface LeaderboardTableProps {
  data: LeaderboardRow[];
}

// Sample demonstration dataset for organizers to preview styling
const sampleDemoData: LeaderboardRow[] = [
  {
    rank: 1,
    teamName: "KKR NightHawks",
    college: "NIT Kurukshetra",
    collegeId: "NITKKR",
    matches: 4,
    kills: 34,
    placementPoints: 48,
    killPoints: 34,
    totalPoints: 82,
  },
  {
    rank: 2,
    teamName: "Jalandhar Apex",
    college: "NIT Jalandhar",
    collegeId: "NITJ",
    matches: 4,
    kills: 28,
    placementPoints: 42,
    killPoints: 28,
    totalPoints: 70,
  },
  {
    rank: 3,
    teamName: "Kurukshetra Vipers",
    college: "NIT Kurukshetra",
    collegeId: "NITKKR",
    matches: 4,
    kills: 26,
    placementPoints: 36,
    killPoints: 26,
    totalPoints: 62,
  },
  {
    rank: 4,
    teamName: "Doaba Strikers",
    college: "NIT Jalandhar",
    collegeId: "NITJ",
    matches: 4,
    kills: 21,
    placementPoints: 30,
    killPoints: 21,
    totalPoints: 51,
  },
  {
    rank: 5,
    teamName: "BrahmaSarovar Elites",
    college: "NIT Kurukshetra",
    collegeId: "NITKKR",
    matches: 4,
    kills: 18,
    placementPoints: 24,
    killPoints: 18,
    totalPoints: 42,
  },
];

export const LeaderboardTable: React.FC<LeaderboardTableProps> = ({ data }) => {
  const [showDemoPreview, setShowDemoPreview] = useState(false);

  // Use real data if present; otherwise check preview toggle
  const activeData = data.length > 0 ? data : (showDemoPreview ? sampleDemoData : []);
  const isUsingDemo = data.length === 0 && showDemoPreview;

  // Highlights computation when data exists
  const topTeam = activeData.length > 0 ? activeData[0] : null;
  const topKillsTeam = activeData.length > 0
    ? [...activeData].sort((a, b) => b.kills - a.kills)[0]
    : null;
  const topScoreTeam = topTeam;

  return (
    <div className="space-y-8">
      
      {/* Demo Switch for Organisers */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-dark-900 border border-dark-700/80 rounded-xl">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <AlertCircle className="w-4 h-4 text-primary shrink-0" />
          <span>
            {data.length > 0
              ? `Displaying ${data.length} official match standings.`
              : `Matches pending. Authentic state active.`}
          </span>
        </div>

        {data.length === 0 && (
          <button
            onClick={() => setShowDemoPreview(!showDemoPreview)}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-dark-800 hover:bg-dark-700 border border-dark-600 rounded-lg text-xs font-mono text-slate-200 transition-colors"
          >
            <Eye className="w-3.5 h-3.5 text-accent-orange" />
            <span>{showDemoPreview ? 'Hide Preview Demo' : 'Preview Live Table Layout'}</span>
          </button>
        )}
      </div>

      {isUsingDemo && (
        <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg text-xs font-mono text-amber-300 text-center">
          ⚠️ <strong>ORGANIZER PREVIEW MODE ACTIVE:</strong> The table below displays sample mock scores to verify UI layout and will not be visible to participants until real match results are added to <code>tournamentConfig.ts</code>.
        </div>
      )}

      {activeData.length > 0 ? (
        <div className="space-y-8">
          
          {/* Top Highlights Strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Current #1 */}
            <div className="bg-gradient-to-br from-yellow-500/15 via-dark-850 to-dark-900 border border-yellow-500/40 rounded-2xl p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/20 border border-yellow-500/40 flex items-center justify-center text-yellow-400 shrink-0">
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-yellow-400/90 block">
                  Current Rank #1
                </span>
                <h4 className="font-heading font-extrabold text-lg text-white">
                  {topTeam?.teamName}
                </h4>
                <p className="text-xs text-slate-400 font-mono">
                  {topTeam?.totalPoints} Total Points • {topTeam?.college}
                </p>
              </div>
            </div>

            {/* Top Kills */}
            <div className="bg-gradient-to-br from-primary/15 via-dark-850 to-dark-900 border border-primary/40 rounded-2xl p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center text-primary shrink-0">
                <Flame className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-primary/90 block">
                  Most Eliminations
                </span>
                <h4 className="font-heading font-extrabold text-lg text-white">
                  {topKillsTeam?.teamName}
                </h4>
                <p className="text-xs text-slate-400 font-mono">
                  {topKillsTeam?.kills} Total Kills • {topKillsTeam?.college}
                </p>
              </div>
            </div>

            {/* Highest Match Score */}
            <div className="bg-gradient-to-br from-cyan-500/15 via-dark-850 to-dark-900 border border-cyan-500/40 rounded-2xl p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400/90 block">
                  Highest Score
                </span>
                <h4 className="font-heading font-extrabold text-lg text-white">
                  {topScoreTeam?.teamName}
                </h4>
                <p className="text-xs text-slate-400 font-mono">
                  {topScoreTeam?.totalPoints} Points Total
                </p>
              </div>
            </div>

          </div>

          {/* Leaderboard Esports Table */}
          <div className="overflow-x-auto rounded-2xl border border-dark-700/80 bg-dark-900/90 shadow-2xl">
            <table className="w-full text-left border-collapse min-w-[750px]">
              <thead>
                <tr className="border-b border-dark-700 bg-dark-950/80 font-heading text-xs uppercase tracking-wider text-slate-400">
                  <th className="py-4 px-5 w-16 text-center">Rank</th>
                  <th className="py-4 px-5">Team</th>
                  <th className="py-4 px-5">College</th>
                  <th className="py-4 px-4 text-center">Matches</th>
                  <th className="py-4 px-4 text-center">Kills</th>
                  <th className="py-4 px-4 text-center">Placement Pts</th>
                  <th className="py-4 px-4 text-center">Kill Pts</th>
                  <th className="py-4 px-6 text-right font-bold text-white">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-dark-800 text-sm font-sans">
                {activeData.map((row) => {
                  const isFirst = row.rank === 1;
                  const isSecond = row.rank === 2;
                  const isThird = row.rank === 3;

                  return (
                    <tr
                      key={row.rank}
                      className={`hover:bg-dark-800/60 transition-colors ${
                        isFirst ? 'bg-yellow-500/5' : ''
                      }`}
                    >
                      {/* Rank Cell */}
                      <td className="py-4 px-5 text-center font-heading font-black">
                        {isFirst ? (
                          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-500/40 text-sm">
                            1
                          </span>
                        ) : isSecond ? (
                          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-slate-400/20 text-slate-300 border border-slate-400/40 text-sm">
                            2
                          </span>
                        ) : isThird ? (
                          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-700/20 text-amber-500 border border-amber-600/40 text-sm">
                            3
                          </span>
                        ) : (
                          <span className="text-slate-400 text-sm">#{row.rank}</span>
                        )}
                      </td>

                      {/* Team Name */}
                      <td className="py-4 px-5 font-heading font-bold text-base text-white">
                        <div className="flex items-center gap-2">
                          <span>{row.teamName}</span>
                          {isFirst && (
                            <span className="text-[10px] font-mono uppercase bg-yellow-500/20 text-yellow-300 px-2 py-0.5 rounded border border-yellow-500/30">
                              Leader
                            </span>
                          )}
                        </div>
                      </td>

                      {/* College */}
                      <td className="py-4 px-5">
                        <div className="flex items-center gap-2">
                          <CollegeEmblem collegeId={row.collegeId} size="sm" />
                          <span className="text-xs text-slate-300 font-mono">{row.college}</span>
                        </div>
                      </td>

                      {/* Matches */}
                      <td className="py-4 px-4 text-center font-mono text-slate-300">
                        {row.matches}
                      </td>

                      {/* Kills */}
                      <td className="py-4 px-4 text-center font-mono text-primary font-bold">
                        {row.kills}
                      </td>

                      {/* Placement Points */}
                      <td className="py-4 px-4 text-center font-mono text-slate-300">
                        {row.placementPoints}
                      </td>

                      {/* Kill Points */}
                      <td className="py-4 px-4 text-center font-mono text-slate-300">
                        {row.killPoints}
                      </td>

                      {/* Total Points */}
                      <td className="py-4 px-6 text-right font-heading font-black text-lg text-white">
                        <span className="bg-gradient-to-r from-primary to-accent-orange bg-clip-text text-transparent">
                          {row.totalPoints}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="text-xs font-mono text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2 px-2">
            <span>Scoring: Placement Points + (1 Point per Kill)</span>
            <span>Official Organiser Verification Required</span>
          </div>

        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-20 px-4 bg-dark-900/80 border border-dark-700/70 rounded-2xl max-w-2xl mx-auto space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-dark-800 border border-dark-700 flex items-center justify-center text-slate-500 mx-auto">
            <Trophy className="w-8 h-8" />
          </div>

          <h3 className="font-heading font-extrabold text-2xl uppercase text-white">
            Leaderboard will appear once tournament matches begin.
          </h3>

          <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
            Standings, placement scores, and elimination leaderboards will update live after each custom room match concludes.
          </p>

          <div className="pt-2">
            <span className="inline-flex items-center gap-2 text-xs font-mono text-primary bg-primary/10 border border-primary/30 px-3.5 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Tournament Stage: Registration & Verification
            </span>
          </div>
        </div>
      )}

    </div>
  );
};
