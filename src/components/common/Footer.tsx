import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Shield, Swords } from 'lucide-react';
import { InstagramIcon, DiscordIcon } from './SocialIcons';
import { tournamentConfig } from '../../config/tournamentConfig';

export const Footer: React.FC = () => {
  const currentYear = 2026;

  return (
    <footer className="relative bg-dark-950 border-t border-dark-700/70 pt-16 pb-12 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-nitkkr/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-nitj/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-nitkkr via-primary to-nitj p-[1.5px]">
                <div className="w-full h-full bg-dark-900 rounded-[7px] flex items-center justify-center">
                  <Swords className="w-5 h-5 text-primary" />
                </div>
              </div>
              <div className="font-heading font-extrabold text-xl tracking-wider">
                <span className="text-nitkkr">NITKKR</span>
                <span className="text-slate-400 font-light mx-1">v/s</span>
                <span className="text-nitj">NITJ</span>
              </div>
            </div>
            
            <p className="text-xs uppercase font-mono text-primary tracking-widest font-semibold">
              Free Fire Championship • {tournamentConfig.season}
            </p>

            <p className="text-sm text-slate-400 leading-relaxed">
              Two premier national institutes collide on the battlegrounds. An inter-NIT collegiate esports championship for ultimate campus supremacy.
            </p>

            {/* Quick Status */}
            <div className="pt-2 text-xs font-mono text-slate-400">
              <span className="text-slate-200 font-semibold">Organised by:</span> Students of NIT Kurukshetra × NIT Jalandhar
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading text-sm font-bold tracking-widest text-slate-200 uppercase flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-sm" />
              Championship
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/tournament" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                  About Tournament
                </Link>
              </li>
              <li>
                <Link to="/teams" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                  Participating Teams
                </Link>
              </li>
              <li>
                <Link to="/leaderboard" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                  Standings & Points
                </Link>
              </li>
              <li>
                <Link to="/schedule" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                  Match Schedule
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-primary hover:text-primary-hover font-semibold transition-colors flex items-center gap-1.5">
                  Captain Registration →
                </Link>
              </li>
            </ul>
          </div>

          {/* Rules & Compliance */}
          <div className="space-y-4">
            <h3 className="font-heading text-sm font-bold tracking-widest text-slate-200 uppercase flex items-center gap-2">
              <span className="w-2 h-2 bg-accent-orange rounded-sm" />
              Information & Terms
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/rules" className="text-slate-400 hover:text-white transition-colors">
                  Official Rulebook
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-slate-400 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact Organisers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Become a Sponsor
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Channels */}
          <div className="space-y-4">
            <h3 className="font-heading text-sm font-bold tracking-widest text-slate-200 uppercase flex items-center gap-2">
              <span className="w-2 h-2 bg-nitkkr rounded-sm" />
              Official Channels
            </h3>
            <p className="text-xs text-slate-400">
              For queries, disputes, and sponsorship opportunities:
            </p>

            <div className="flex flex-col gap-2 pt-1 text-xs font-mono">
              <div className="flex items-center gap-2 text-slate-300 bg-dark-900 border border-dark-700/60 px-3 py-2 rounded">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span className="truncate">{tournamentConfig.contacts.officialEmail}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 bg-dark-900 border border-dark-700/60 px-3 py-2 rounded">
                <InstagramIcon className="w-4 h-4 text-accent-orange shrink-0" />
                <span className="truncate">{tournamentConfig.contacts.instagramUrl}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 bg-dark-900 border border-dark-700/60 px-3 py-2 rounded">
                <DiscordIcon className="w-4 h-4 text-nitkkr shrink-0" />
                <span className="truncate">{tournamentConfig.contacts.discordUrl}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer Box */}
        <div className="pt-8 pb-6 border-t border-dark-800">
          <div className="bg-dark-900/60 border border-dark-700/60 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-400 leading-relaxed space-y-1">
                <p className="font-semibold text-slate-300 uppercase tracking-wider font-heading">
                  Official Event Notice & Disclaimer:
                </p>
                <p>
                  This is an independent student-organised collegiate esports event between students of NIT Kurukshetra and NIT Jalandhar.
                  This tournament is <strong>not an official Garena-sponsored tournament</strong> unless explicitly stated otherwise.
                  Free Fire and Free Fire MAX are registered trademarks of Garena International. All associated logos and intellectual property belong to their respective owners.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
            <p>
              © {currentYear} NITKKR v/s NITJ Free Fire Championship. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link to="/rules" className="hover:text-slate-300 transition-colors">Rules</Link>
              <span>•</span>
              <Link to="/terms" className="hover:text-slate-300 transition-colors">Terms</Link>
              <span>•</span>
              <Link to="/contact" className="hover:text-slate-300 transition-colors">Support</Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
