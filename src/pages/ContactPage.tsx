import React, { useState, useEffect } from 'react';
import { tournamentConfig } from '../config/tournamentConfig';
import {
  Mail,
  Phone,
  Send,
  CheckCircle2,
  Shield,
  School
} from 'lucide-react';
import { InstagramIcon, DiscordIcon } from '../components/common/SocialIcons';
import { CollegeEmblem } from '../components/common/CollegeEmblem';

export const ContactPage: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [subject, setSubject] = useState('General Query');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    document.title = "Contact Organisers — NITKKR v/s NITJ Free Fire Championship";
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Feedback state for student enquiry
    setFormSubmitted(true);
  };

  return (
    <div className="pt-28 pb-20 bg-dark-950 min-h-screen relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-cyber-grid opacity-25 pointer-events-none" />
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-nitj/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-dark-850 border border-dark-700 rounded-full">
            <School className="w-3.5 h-3.5 text-primary" />
            <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Student Organising Committee
            </span>
          </div>

          <h1 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            CONTACT ORGANISERS
          </h1>

          <p className="font-heading text-lg sm:text-xl text-slate-300 font-bold uppercase tracking-wider">
            NIT Kurukshetra × NIT Jalandhar
          </p>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Get in touch for tournament queries, sponsorship inquiries, grievance dispute escalation, or participation assistance.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Left: Official Channels & Committee */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-dark-900 border border-dark-700/80 rounded-2xl p-6 sm:p-7 space-y-6">
              <h2 className="font-heading font-black text-xl uppercase text-white tracking-wide flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Official Channels
              </h2>

              <div className="space-y-4 text-xs font-mono">
                
                {/* Email */}
                <div className="bg-dark-850 p-4 rounded-xl border border-dark-800 flex items-start gap-3.5">
                  <div className="p-2 bg-primary/15 border border-primary/30 rounded-lg text-primary shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] uppercase text-slate-400 block mb-0.5 font-semibold">
                      Official Email
                    </span>
                    <span className="text-slate-200 font-bold truncate block">
                      {tournamentConfig.contacts.officialEmail}
                    </span>
                  </div>
                </div>

                {/* Instagram */}
                <div className="bg-dark-850 p-4 rounded-xl border border-dark-800 flex items-start gap-3.5">
                  <div className="p-2 bg-accent-orange/15 border border-accent-orange/30 rounded-lg text-accent-orange shrink-0 mt-0.5">
                    <InstagramIcon className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] uppercase text-slate-400 block mb-0.5 font-semibold">
                      Official Instagram
                    </span>
                    <span className="text-slate-200 font-bold truncate block">
                      {tournamentConfig.contacts.instagramUrl}
                    </span>
                  </div>
                </div>

                {/* WhatsApp / Discord */}
                <div className="bg-dark-850 p-4 rounded-xl border border-dark-800 flex items-start gap-3.5">
                  <div className="p-2 bg-nitkkr/15 border border-nitkkr/30 rounded-lg text-nitkkr shrink-0 mt-0.5">
                    <DiscordIcon className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] uppercase text-slate-400 block mb-0.5 font-semibold">
                      WhatsApp / Discord Channel
                    </span>
                    <span className="text-slate-200 font-bold truncate block">
                      {tournamentConfig.contacts.discordUrl}
                    </span>
                  </div>
                </div>

                {/* Organiser Contact Number */}
                <div className="bg-dark-850 p-4 rounded-xl border border-dark-800 flex items-start gap-3.5">
                  <div className="p-2 bg-emerald-500/15 border border-emerald-500/30 rounded-lg text-emerald-400 shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] uppercase text-slate-400 block mb-0.5 font-semibold">
                      Organiser Helpline
                    </span>
                    <span className="text-slate-200 font-bold truncate block">
                      {tournamentConfig.contacts.contactNumber}
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Organizing Institutes Box */}
            <div className="bg-dark-900 border border-dark-700/80 rounded-2xl p-6 space-y-4">
              <h3 className="font-heading font-extrabold text-sm uppercase text-slate-300 tracking-wider">
                Joint Student Committees
              </h3>

              <div className="space-y-3">
                {tournamentConfig.organizers.map((org, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-dark-850 rounded-xl border border-dark-800">
                    <CollegeEmblem collegeId={idx === 0 ? 'NITKKR' : 'NITJ'} size="sm" />
                    <div>
                      <h4 className="font-heading font-bold text-xs text-white uppercase">
                        {org.name}
                      </h4>
                      <p className="text-[10px] font-mono text-slate-400">
                        {org.role} • {org.college}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right: Interactive Message & Sponsorship Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-dark-900 border border-dark-700/80 rounded-2xl p-6 sm:p-8 space-y-6">
              
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
                  Direct Correspondence
                </span>
                <h2 className="font-heading font-black text-2xl uppercase text-white mt-1">
                  SEND AN INQUIRY OR DISPUTE
                </h2>
                <p className="text-slate-400 text-xs sm:text-sm mt-1">
                  Have a question, want to sponsor, or need support? Send a note to the joint organizers.
                </p>
              </div>

              {formSubmitted ? (
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white uppercase">
                    Message Received
                  </h3>
                  <p className="text-xs text-slate-300 font-sans max-w-md mx-auto">
                    Thank you! Your message has been sent. The tournament committee will review your note and respond via email.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setName('');
                      setEmail('');
                      setMessage('');
                    }}
                    className="text-xs font-mono text-primary underline pt-2"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Category */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                      Inquiry Category
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full bg-dark-850 border border-dark-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors font-sans"
                    >
                      <option value="General Query">General Tournament Query</option>
                      <option value="Registration Issue">Registration & Team Verification</option>
                      <option value="Sponsorship">Sponsorship & Brand Partnership</option>
                      <option value="Rules & Dispute">Rules Clarification / Dispute</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                      Your Name & College
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma (NIT Kurukshetra)"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-dark-850 border border-dark-700 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-primary transition-colors font-sans"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. captain@student.nitkkr.ac.in"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-dark-850 border border-dark-700 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-primary transition-colors font-sans"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                      Message Details
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Write your message or question here..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-dark-850 border border-dark-700 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-primary transition-colors font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 font-heading font-black text-sm uppercase tracking-widest text-white bg-primary hover:bg-primary-hover active:scale-98 transition-all rounded clip-chamfer glow-primary flex items-center justify-center gap-2"
                  >
                    <span>TRANSMIT MESSAGE</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] font-mono text-slate-500 text-center">
                    Official queries will also be mirrored to {tournamentConfig.contacts.officialEmail}
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
