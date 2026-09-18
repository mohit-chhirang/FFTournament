import React, { useState, useEffect } from 'react';
import { MatchCard } from '../components/schedule/MatchCard';
import { scheduleData, tournamentConfig } from '../config/tournamentConfig';
import type { Match } from '../types';
import { Calendar, Clock, Lock, Eye, Bell } from 'lucide-react';

// Sample demonstration dataset for organizers to preview schedule card styling
const sampleDemoSchedule: Match[] = [
  {
    id: 'm-01',
    matchNumber: 1,
    title: 'Group Stage — Round 1 [Bermuda]',
    date: 'TBA',
    time: 'TBA',
    map: 'Bermuda',
    lobbyStatus: 'Room Setup',
    status: 'Upcoming',
    participatingTeamsCount: '12 Squads (6 NITKKR + 6 NITJ)',
    roomDetailsNotice: 'Room ID & Password shared with captains 15 mins prior'
  },
  {
    id: 'm-02',
    matchNumber: 2,
    title: 'Group Stage — Round 2 [Purgatory]',
    date: 'TBA',
    time: 'TBA',
    map: 'Purgatory',
    lobbyStatus: 'Scheduled',
    status: 'Upcoming',
    participatingTeamsCount: '12 Squads (6 NITKKR + 6 NITJ)',
    roomDetailsNotice: 'Room ID & Password shared with captains 15 mins prior'
  },
  {
    id: 'm-03',
    matchNumber: 3,
    title: 'Grand Finals — Championship Clash [Kalahari]',
    date: 'TBA',
    time: 'TBA',
    map: 'Kalahari',
    lobbyStatus: 'Scheduled',
    status: 'Upcoming',
    participatingTeamsCount: 'Top 12 Finalist Squads',
    roomDetailsNotice: 'Room credentials distributed directly to finalist captains'
  }
];

export const SchedulePage: React.FC = () => {
  const [showDemoPreview, setShowDemoPreview] = useState(false);

  useEffect(() => {
    document.title = "Match Schedule — NITKKR v/s NITJ Free Fire Championship";
  }, []);

  const activeMatches = scheduleData.length > 0
    ? scheduleData
    : (showDemoPreview ? sampleDemoSchedule : []);

  const isUsingDemo = scheduleData.length === 0 && showDemoPreview;

  return (
    <div className="pt-28 pb-20 bg-dark-950 min-h-screen relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-cyber-grid opacity-25 pointer-events-none" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-accent-orange/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-dark-850 border border-dark-700 rounded-full">
            <Calendar className="w-3.5 h-3.5 text-accent-orange" />
            <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-accent-orange">
              Match Fixtures & Timetable
            </span>
          </div>

          <h1 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            MATCH SCHEDULE
          </h1>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Timings, custom room maps, and lobby schedules for {tournamentConfig.name}.
          </p>
        </div>

        {/* Demo Switch for Organizers */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-dark-900 border border-dark-700/80 rounded-xl mb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Clock className="w-4 h-4 text-primary shrink-0" />
            <span>
              {scheduleData.length > 0
                ? `${scheduleData.length} scheduled matches configured.`
                : `Match fixtures are being finalized.`}
            </span>
          </div>

          {scheduleData.length === 0 && (
            <button
              onClick={() => setShowDemoPreview(!showDemoPreview)}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-dark-800 hover:bg-dark-700 border border-dark-600 rounded-lg text-xs font-mono text-slate-200 transition-colors"
            >
              <Eye className="w-3.5 h-3.5 text-accent-orange" />
              <span>{showDemoPreview ? 'Hide Preview Demo' : 'Preview Match Schedule Layout'}</span>
            </button>
          )}
        </div>

        {isUsingDemo && (
          <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg text-xs font-mono text-amber-300 text-center mb-8">
            ⚠️ <strong>ORGANIZER PREVIEW MODE:</strong> The fixtures below display sample mock match slots. They will not be visible to participants until real fixtures are added to <code>scheduleData</code> in <code>tournamentConfig.ts</code>.
          </div>
        )}

        {/* Matches List */}
        {activeMatches.length > 0 ? (
          <div className="space-y-6 mb-16">
            <div className="border-b border-dark-800 pb-3">
              <h2 className="font-heading font-black text-xl uppercase text-white tracking-wide">
                UPCOMING MATCHES
              </h2>
            </div>

            <div className="space-y-4">
              {activeMatches.map((match) => (
                <MatchCard key={match.id} match={match} />
              ))}
            </div>
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-20 px-4 bg-dark-900/80 border border-dark-700/70 rounded-2xl max-w-2xl mx-auto space-y-4 mb-16">
            <div className="w-16 h-16 rounded-2xl bg-dark-850 border border-dark-700 flex items-center justify-center text-slate-500 mx-auto">
              <Calendar className="w-8 h-8" />
            </div>

            <h3 className="font-heading font-extrabold text-2xl uppercase text-white">
              Schedule will be announced soon.
            </h3>

            <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
              Match timings, group brackets, and map rotations will be published here following the conclusion of squad registrations and verification.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-2 text-xs font-mono text-accent-orange bg-accent-orange/10 border border-accent-orange/30 px-3.5 py-1.5 rounded-full">
                <Bell className="w-3.5 h-3.5" />
                Notification updates will be posted to official channels
              </span>
            </div>
          </div>
        )}

        {/* Security & Private Room Protocol Notice */}
        <div className="bg-dark-900/60 border border-dark-700/80 rounded-2xl p-6 sm:p-8 space-y-3">
          <div className="flex items-center gap-2.5 text-amber-400 font-heading font-bold text-sm uppercase tracking-wider">
            <Lock className="w-4 h-4" />
            <span>Private Custom Room Credential Protocol</span>
          </div>
          <p className="text-xs text-slate-300 font-sans leading-relaxed">
            Custom room lobby IDs and passwords will <strong>never be displayed publicly</strong> on this website to prevent unauthorized spectators or intruders. Credentials are dispatched directly to verified squad captains via the official captain communications channel exactly 15 minutes prior to match start.
          </p>
        </div>

      </div>
    </div>
  );
};
