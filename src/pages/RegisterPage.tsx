import React, { useState, useEffect } from 'react';
import { tournamentConfig } from '../config/tournamentConfig';
import { StatusBadge } from '../components/common/StatusBadge';
import {
  ShieldAlert,
  ExternalLink,
  UserCheck,
  AlertTriangle,
  Info,
  FileText
} from 'lucide-react';

export const RegisterPage: React.FC = () => {
  const [showPendingModal, setShowPendingModal] = useState(false);

  useEffect(() => {
    document.title = "Register Squad — NITKKR v/s NITJ Free Fire Championship";
  }, []);

  const isFormConfigured =
    tournamentConfig.registrationUrl &&
    tournamentConfig.registrationUrl.startsWith('http');

  const captainFields = [
    { label: 'Full Name', desc: 'Official legal name of the squad captain' },
    { label: 'College', desc: 'NIT Kurukshetra or NIT Jalandhar' },
    { label: 'College Roll Number', desc: 'Valid institute student roll / registration number' },
    { label: 'Phone Number (WhatsApp)', desc: 'Primary contact for custom room match credentials' },
    { label: 'Email Address', desc: 'Active student email address for communications' },
    { label: 'Free Fire / FF MAX UID', desc: 'Accurate numeric UID from your game profile' },
    { label: 'In-Game Name (IGN)', desc: 'Exact character name used inside the game' },
  ];

  return (
    <div className="pt-28 pb-20 bg-dark-950 min-h-screen relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-cyber-grid opacity-25 pointer-events-none" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center space-y-4 mb-12">
          <div className="flex items-center justify-center gap-3">
            <StatusBadge status={tournamentConfig.registrationStatus} size="sm" />
          </div>

          <h1 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            TEAM REGISTRATION
          </h1>

          <p className="font-heading text-lg sm:text-xl text-primary font-bold uppercase tracking-wider">
            NITKKR v/s NITJ Free Fire Championship — {tournamentConfig.season}
          </p>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Official squad registration is conducted exclusively via Google Form.
            Please review the team guidelines below before submitting.
          </p>
        </div>

        {/* Primary Captain Alert Card */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-dark-900 via-dark-850 to-dark-900 border-2 border-primary/40 p-6 sm:p-8 mb-12 shadow-[0_0_35px_rgba(255,71,66,0.15)]">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-primary/20 border border-primary/40 flex items-center justify-center text-primary shrink-0 shadow-lg">
              <UserCheck className="w-8 h-8" />
            </div>

            <div className="space-y-3 flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/15 border border-amber-500/30 rounded-full">
                <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-heading text-xs font-black uppercase tracking-wider text-amber-400">
                  CRITICAL REGISTRATION RULE
                </span>
              </div>

              <h2 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase tracking-wide">
                Only the team captain needs to register.
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed">
                Team members do <strong>not</strong> need to fill out individual forms. The designated team captain submits the squad registration form once on behalf of all 4 members. The captain serves as the sole official liaison with tournament officials.
              </p>
            </div>
          </div>
        </div>

        {/* Action Button Box */}
        <div className="bg-dark-900 border border-dark-700/80 rounded-2xl p-8 sm:p-10 text-center mb-14 space-y-5">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
              Official Entry Portal
            </span>
            <h3 className="font-heading font-extrabold text-2xl text-white uppercase">
              Submit Your Squad Entry
            </h3>
            <p className="text-slate-400 text-sm max-w-md mx-auto">
              Click the button below to open the official tournament registration Google Form.
            </p>
          </div>

          <div className="pt-2">
            {isFormConfigured ? (
              <a
                href={tournamentConfig.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="main-google-form-btn"
                className="inline-flex items-center justify-center gap-3 px-8 py-5 font-heading font-black text-base sm:text-lg uppercase tracking-widest text-white bg-primary hover:bg-primary-hover active:scale-95 transition-all duration-300 rounded clip-chamfer glow-primary-lg shadow-2xl group"
              >
                <span>REGISTER VIA GOOGLE FORM</span>
                <ExternalLink className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            ) : (
              <button
                onClick={() => setShowPendingModal(true)}
                id="main-google-form-btn-pending"
                className="inline-flex items-center justify-center gap-3 px-8 py-5 font-heading font-black text-base sm:text-lg uppercase tracking-widest text-white bg-primary hover:bg-primary-hover active:scale-95 transition-all duration-300 rounded clip-chamfer glow-primary-lg shadow-2xl group"
              >
                <span>REGISTER VIA GOOGLE FORM</span>
                <ExternalLink className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            )}
          </div>

          <p className="text-xs font-mono text-slate-400">
            Form link configured via <code className="text-primary bg-dark-950 px-1.5 py-0.5 rounded border border-dark-800">REGISTRATION_FORM_URL</code>
          </p>
        </div>

        {/* What Captain Will Need to Provide */}
        <div className="space-y-6 mb-14">
          <div className="border-b border-dark-800 pb-4">
            <h3 className="font-heading font-black text-xl sm:text-2xl uppercase text-white tracking-wide flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Captain Information Checklist
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Have the following credentials ready before opening the registration form:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {captainFields.map((field, idx) => (
              <div
                key={idx}
                className="bg-dark-850/90 border border-dark-700/80 rounded-xl p-4 flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-md bg-dark-900 border border-primary/40 flex items-center justify-center text-primary shrink-0 mt-0.5 font-mono text-xs font-bold">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
                    {field.label}
                  </h4>
                  <p className="text-xs text-slate-400 font-sans mt-0.5">
                    {field.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-dark-900/80 border border-dark-700/70 rounded-xl flex items-start gap-3 text-xs text-slate-400 leading-relaxed font-mono">
            <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <span>
              The captain will also provide the In-Game Names (IGNs) and UIDs of the other 3 squad members and optional substitute player.
            </span>
          </div>
        </div>

        {/* Verification & Privacy Notice */}
        <div className="p-6 rounded-2xl bg-dark-900/60 border border-dark-700/70 space-y-3">
          <h4 className="font-heading font-extrabold text-sm uppercase text-slate-200 tracking-wider flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-amber-400" />
            Verification & Privacy Commitment
          </h4>
          <p className="text-xs text-slate-400 leading-relaxed font-sans">
            To preserve fairness and security, participant phone numbers, roll numbers, and personal emails submitted via the official Google Form will strictly remain private to the tournament organising committee. Only team names, college representation, and competition standings will be visible on the tournament website.
          </p>
        </div>

      </div>

      {/* Pending Google Form Link Modal */}
      {showPendingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-dark-900 border border-dark-700 rounded-2xl p-6 sm:p-8 max-w-lg w-full space-y-5 shadow-2xl relative">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <AlertTriangle className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <h3 className="font-heading font-extrabold text-xl text-white uppercase">
                Google Form URL Not Configured Yet
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                The organisers have not yet updated the Google Form link in the configuration file.
              </p>
            </div>

            <div className="p-3 bg-dark-950 rounded-xl border border-dark-800 text-xs font-mono text-slate-400 space-y-1">
              <div className="text-primary font-bold">Organizer Instruction:</div>
              <div>Open <code>src/config/tournamentConfig.ts</code></div>
              <div>Set <code>REGISTRATION_FORM_URL = "https://forms.gle/your-form"</code></div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setShowPendingModal(false)}
                className="px-5 py-2.5 bg-dark-800 hover:bg-dark-700 text-white text-xs font-heading font-bold uppercase tracking-wider rounded-lg transition-colors"
              >
                Close Notice
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
