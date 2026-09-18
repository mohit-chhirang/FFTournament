import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TeamCard } from '../components/teams/TeamCard';
import { teamsData, tournamentConfig } from '../config/tournamentConfig';
import type { Team } from '../types';
import { Users, Eye, ArrowRight, ShieldCheck } from 'lucide-react';

// Sample demonstration dataset for organizers to preview team card styling
const sampleDemoTeams: Team[] = [
  {
    id: 't-01',
    name: 'KKR NightHawks',
    college: 'NIT Kurukshetra',
    collegeId: 'NITKKR',
    status: 'Confirmed',
  },
  {
    id: 't-02',
    name: 'Jalandhar Apex',
    college: 'NIT Jalandhar',
    collegeId: 'NITJ',
    status: 'Confirmed',
  },
  {
    id: 't-03',
    name: 'Kurukshetra Vipers',
    college: 'NIT Kurukshetra',
    collegeId: 'NITKKR',
    status: 'Confirmed',
  },
  {
    id: 't-04',
    name: 'Doaba Strikers',
    college: 'NIT Jalandhar',
    collegeId: 'NITJ',
    status: 'Registered',
  },
  {
    id: 't-05',
    name: 'BrahmaSarovar Elites',
    college: 'NIT Kurukshetra',
    collegeId: 'NITKKR',
    status: 'Confirmed',
  },
  {
    id: 't-06',
    name: 'GT Road Assassins',
    college: 'NIT Jalandhar',
    collegeId: 'NITJ',
    status: 'Registered',
  },
];

export const TeamsPage: React.FC = () => {
  const [selectedCollege, setSelectedCollege] = useState<'All' | 'NITKKR' | 'NITJ'>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [showDemoPreview, setShowDemoPreview] = useState(false);

  useEffect(() => {
    document.title = "Participating Teams — NITKKR v/s NITJ Free Fire Championship";
  }, []);

  const activeTeams = teamsData.length > 0
    ? teamsData
    : (showDemoPreview ? sampleDemoTeams : []);

  const isUsingDemo = teamsData.length === 0 && showDemoPreview;

  const filteredTeams = activeTeams.filter((team) => {
    const matchCollege = selectedCollege === 'All' || team.collegeId === selectedCollege;
    const matchStatus = selectedStatus === 'All' || team.status === selectedStatus;
    return matchCollege && matchStatus;
  });

  return (
    <div className="pt-28 pb-20 bg-dark-950 min-h-screen relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-cyber-grid opacity-25 pointer-events-none" />
      <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-dark-850 border border-dark-700 rounded-full">
            <Users className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
              Championship Rosters
            </span>
          </div>

          <h1 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            PARTICIPATING SQUADS
          </h1>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Verified squads competing for collegiate supremacy in {tournamentConfig.name}.
          </p>
        </div>

        {/* Demo Switch for Organizers */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-dark-900 border border-dark-700/80 rounded-xl mb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
            <span>
              {teamsData.length > 0
                ? `${teamsData.length} squads verified and published.`
                : `Registration open. Squads undergoing review.`}
            </span>
          </div>

          {teamsData.length === 0 && (
            <button
              onClick={() => setShowDemoPreview(!showDemoPreview)}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-dark-800 hover:bg-dark-700 border border-dark-600 rounded-lg text-xs font-mono text-slate-200 transition-colors"
            >
              <Eye className="w-3.5 h-3.5 text-accent-orange" />
              <span>{showDemoPreview ? 'Hide Preview Demo' : 'Preview Squads Grid'}</span>
            </button>
          )}
        </div>

        {isUsingDemo && (
          <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg text-xs font-mono text-amber-300 text-center mb-8">
            ⚠️ <strong>ORGANIZER PREVIEW MODE:</strong> The squad cards below are mock sample teams to preview the card layout. They will not be visible to participants until real squads are populated in <code>teamsData</code> in <code>tournamentConfig.ts</code>.
          </div>
        )}

        {/* College & Status Filters */}
        {activeTeams.length > 0 && (
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 bg-dark-900/60 p-4 rounded-xl border border-dark-700/70">
            
            {/* Institute Filter */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase text-slate-400">College:</span>
              <div className="inline-flex rounded-lg bg-dark-950 p-1 border border-dark-800 text-xs font-heading">
                <button
                  onClick={() => setSelectedCollege('All')}
                  className={`px-3 py-1 rounded transition-colors ${
                    selectedCollege === 'All' ? 'bg-primary text-white font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  ALL
                </button>
                <button
                  onClick={() => setSelectedCollege('NITKKR')}
                  className={`px-3 py-1 rounded transition-colors ${
                    selectedCollege === 'NITKKR' ? 'bg-nitkkr text-white font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  NITKKR
                </button>
                <button
                  onClick={() => setSelectedCollege('NITJ')}
                  className={`px-3 py-1 rounded transition-colors ${
                    selectedCollege === 'NITJ' ? 'bg-nitj text-white font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  NITJ
                </button>
              </div>
            </div>

            {/* Status Filter */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase text-slate-400">Status:</span>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="bg-dark-950 border border-dark-800 text-xs font-mono text-slate-300 rounded-lg px-3 py-1.5 focus:outline-none focus:border-primary"
              >
                <option value="All">All Statuses</option>
                <option value="Confirmed">Confirmed</option>
                <option value="Registered">Under Review</option>
                <option value="Qualified">Qualified</option>
                <option value="Eliminated">Eliminated</option>
              </select>
            </div>

          </div>
        )}

        {/* Teams Cards Grid */}
        {filteredTeams.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTeams.map((team) => (
              <TeamCard key={team.id} team={team} />
            ))}
          </div>
        ) : activeTeams.length > 0 ? (
          <div className="text-center py-14 bg-dark-900/60 rounded-2xl border border-dark-800 p-6">
            <p className="text-sm font-mono text-slate-400">
              No squads found matching the selected filter criteria.
            </p>
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-20 px-4 bg-dark-900/80 border border-dark-700/70 rounded-2xl max-w-2xl mx-auto space-y-5">
            <div className="w-16 h-16 rounded-2xl bg-dark-850 border border-dark-700 flex items-center justify-center text-slate-500 mx-auto">
              <Users className="w-8 h-8" />
            </div>

            <h3 className="font-heading font-extrabold text-2xl uppercase text-white">
              Participating Teams Will Be Announced Soon
            </h3>

            <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
              Squad registrations are currently open. Once the registration period closes and student credentials are authenticated by the organizing committee, confirmed team rosters will appear here.
            </p>

            <div className="pt-3">
              <Link
                to="/register"
                className="inline-flex items-center gap-2 px-6 py-3 font-heading font-bold text-xs uppercase tracking-widest text-white bg-primary hover:bg-primary-hover rounded clip-chamfer glow-primary"
              >
                <span>REGISTER YOUR SQUAD NOW</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}

        {/* Privacy Assurance Box */}
        <div className="mt-16 p-5 bg-dark-900/50 border border-dark-800 rounded-xl text-xs font-mono text-slate-500 text-center max-w-2xl mx-auto">
          🔒 <strong>Privacy Assurance:</strong> Player contact numbers, email addresses, college roll numbers, and private UIDs are never published publicly to safeguard student security.
        </div>

      </div>
    </div>
  );
};
