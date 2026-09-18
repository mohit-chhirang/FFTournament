import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowLeft, AlertCircle } from 'lucide-react';
import { tournamentConfig } from '../config/tournamentConfig';

export const TermsPage: React.FC = () => {
  useEffect(() => {
    document.title = "Terms & Conditions — NITKKR v/s NITJ Free Fire Championship";
  }, []);

  const clauses = [
    {
      num: '1',
      title: 'Tournament Cancellation / Modification',
      content: 'The organisers reserve the right to cancel, postpone, suspend or modify the tournament without prior notice where circumstances require.'
    },
    {
      num: '2',
      title: 'Tournament Rules & Administration',
      content: 'The organisers reserve the right to modify, interpret or amend tournament rules whenever deemed necessary for the administration and smooth conduct of the tournament. Decisions made by the organisers regarding tournament administration shall be final.'
    },
    {
      num: '3',
      title: 'Registration / Participation Fee',
      content: 'Any registration or participation fee paid by a team shall be non-refundable under normal circumstances. Any refund, if applicable, shall be made solely at the discretion of the organisers.'
    },
    {
      num: '4',
      title: 'Eligibility',
      content: 'Participation is subject to verified student enrollment in NIT Kurukshetra or NIT Jalandhar. Additional eligibility guidelines and verification procedures are subject to final organiser approval.'
    },
    {
      num: '5',
      title: 'Player Conduct',
      content: 'Participants must maintain sportsmanlike conduct, mutual respect, and collegiate decorum at all times across all official tournament platforms and lobbies. Specific penalty structures are subject to organiser approval.'
    },
    {
      num: '6',
      title: 'Cheating and Unfair Practices',
      content: 'The use of illicit scripts, cheats, third-party software, account ringing, or match collusion is strictly forbidden. Specific investigation and enforcement protocols are subject to organiser approval.'
    },
    {
      num: '7',
      title: 'Disqualification',
      content: 'Teams or players found in violation of tournament integrity or event guidelines are liable to immediate expulsion. Forfeiture terms are subject to organiser approval.'
    },
    {
      num: '8',
      title: 'Technical Issues',
      content: 'Participants are responsible for individual hardware, software, and cellular data connections. Specific match remake criteria for broader lobby outages are subject to organiser approval.'
    },
    {
      num: '9',
      title: 'Disputes',
      content: 'Official complaints must be submitted through designated channels within stipulated match windows with supporting video/screenshot evidence. Grievance adjudication procedures are subject to organiser approval.'
    },
    {
      num: '10',
      title: 'Privacy',
      content: 'Personal contact credentials collected through the official registration form are strictly utilized for tournament coordination and identification verification. Participant data handling procedures are subject to organiser approval.'
    }
  ];

  return (
    <div className="pt-28 pb-20 bg-dark-950 min-h-screen relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-cyber-grid opacity-25 pointer-events-none" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-accent-orange/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-6">
          <Link
            to="/rules"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO OFFICIAL RULEBOOK</span>
          </Link>
        </div>

        {/* Header */}
        <div className="space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-dark-850 border border-dark-700 rounded-full">
            <Shield className="w-3.5 h-3.5 text-accent-orange" />
            <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-accent-orange">
              Legal Framework
            </span>
          </div>

          <h1 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            TERMS & CONDITIONS
          </h1>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Please read these terms and conditions carefully before participating in the {tournamentConfig.name} — {tournamentConfig.season}.
          </p>

          <div className="p-4 bg-dark-900 border border-dark-700/80 rounded-xl flex items-start gap-3 text-xs font-mono text-amber-300/90">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span>
              <strong>Organiser Notice:</strong> All terms listed herein are governed by the student esports organizing committee representing NIT Kurukshetra and NIT Jalandhar. Final terms remain subject to ongoing organiser review and approval.
            </span>
          </div>
        </div>

        {/* Formal Clauses List */}
        <div className="space-y-6 mb-16">
          {clauses.map((clause) => (
            <div
              key={clause.num}
              className="bg-dark-850/90 border border-dark-700/80 rounded-2xl p-6 sm:p-7 hover:border-slate-600 transition-colors"
            >
              <div className="flex items-start gap-4">
                <span className="w-8 h-8 rounded-lg bg-dark-900 border border-accent-orange/30 text-accent-orange font-heading font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">
                  {clause.num}
                </span>

                <div className="space-y-2 flex-1">
                  <h2 className="font-heading font-extrabold text-lg text-white uppercase tracking-wider">
                    {clause.num}. {clause.title}
                  </h2>
                  <p className="text-slate-300 text-sm leading-relaxed font-sans">
                    {clause.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Non-Affiliation Disclaimer Box */}
        <div className="p-6 bg-dark-900/60 border border-dark-700/80 rounded-2xl space-y-2 text-xs font-mono text-slate-400">
          <span className="text-slate-200 font-bold uppercase block font-heading">
            Garena Non-Affiliation Disclaimer
          </span>
          <p className="leading-relaxed">
            This tournament is an independent collegiate student-organised competition between enrolled students of NIT Kurukshetra and NIT Jalandhar. It is not affiliated with, endorsed by, or sponsored by Garena International or Free Fire unless explicitly stated otherwise in written agreement.
          </p>
        </div>

      </div>
    </div>
  );
};
