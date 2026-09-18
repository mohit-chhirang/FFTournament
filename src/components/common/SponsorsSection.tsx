import React from 'react';
import { Link } from 'react-router-dom';
import { Handshake, ArrowRight } from 'lucide-react';
import { sponsorsData } from '../../config/tournamentConfig';

export const SponsorsSection: React.FC = () => {
  const hasSponsors = sponsorsData.length > 0;

  return (
    <section className="relative py-16 bg-dark-900/60 border-y border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {hasSponsors ? (
          <div>
            <div className="text-center mb-8">
              <span className="font-heading text-xs uppercase tracking-[0.2em] text-accent-orange font-bold">
                Official Partners
              </span>
              <h3 className="font-heading text-2xl font-extrabold uppercase text-white mt-1">
                Tournament Sponsors
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
              {sponsorsData.map((sponsor) => (
                <div
                  key={sponsor.id}
                  className="bg-dark-850/80 border border-dark-700/80 p-6 rounded-xl flex flex-col items-center justify-center text-center hover:border-primary/40 transition-colors"
                >
                  {sponsor.logoUrl ? (
                    <img src={sponsor.logoUrl} alt={sponsor.name} className="h-12 object-contain mb-2" />
                  ) : (
                    <span className="font-heading font-bold text-lg text-white mb-1">{sponsor.name}</span>
                  )}
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 bg-dark-950 px-2 py-0.5 rounded border border-dark-700">
                    {sponsor.tier} Partner
                  </span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Empty / Inquiries State without fake brands */
          <div className="max-w-3xl mx-auto text-center space-y-5 bg-gradient-to-b from-dark-850/90 to-dark-900/90 border border-dark-700/70 p-8 sm:p-10 rounded-2xl relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-orange/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl pointer-events-none" />

            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-accent-orange/20 to-primary/20 border border-accent-orange/30 text-accent-orange mx-auto">
              <Handshake className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <span className="font-heading text-xs uppercase tracking-[0.25em] text-accent-orange font-bold block">
                Sponsors & Brand Partnerships
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold uppercase text-white">
                Interested in partnering with the championship?
              </h3>
              <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Reach hundreds of competitive gamers, engineering students, and esports fans across NIT Kurukshetra and NIT Jalandhar.
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 font-heading font-bold text-xs uppercase tracking-widest text-dark-950 bg-accent-orange hover:bg-amber-400 transition-colors rounded clip-chamfer shadow-[0_0_20px_rgba(255,170,0,0.3)] group"
              >
                <span>BECOME A SPONSOR</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
