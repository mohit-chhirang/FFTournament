import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Swords } from 'lucide-react';
import { tournamentConfig } from '../../config/tournamentConfig';
import { StatusBadge } from './StatusBadge';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer upon navigating
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Tournament', path: '/tournament' },
    { label: 'Rules', path: '/rules' },
    { label: 'Teams', path: '/teams' },
    { label: 'Leaderboard', path: '/leaderboard' },
    { label: 'Schedule', path: '/schedule' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-950/90 backdrop-blur-md border-b border-dark-700/80 shadow-2xl py-3'
          : 'bg-dark-950/60 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
            aria-label="NITKKR v/s NITJ Free Fire Championship Home"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-nitkkr via-primary to-nitj p-[1.5px] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-dark-900 rounded-[7px] flex items-center justify-center">
                <Swords className="w-5 h-5 text-primary group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 font-heading font-extrabold text-lg sm:text-xl tracking-wider leading-none">
                <span className="text-nitkkr drop-shadow-[0_0_8px_rgba(0,136,255,0.4)]">NITKKR</span>
                <span className="text-slate-400 font-light text-sm">×</span>
                <span className="text-nitj drop-shadow-[0_0_8px_rgba(255,51,51,0.4)]">NITJ</span>
              </div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 font-medium">
                FF Championship S1
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-3 py-1.5 text-sm font-heading font-medium tracking-wide uppercase transition-all duration-200 rounded-md ${
                    active
                      ? 'text-white font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-primary to-accent-orange rounded-full shadow-[0_0_8px_#ff4742]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action & Status Badge */}
          <div className="hidden md:flex items-center gap-3">
            <StatusBadge status={tournamentConfig.registrationStatus} size="sm" />
            
            <Link
              to="/register"
              id="nav-register-btn"
              className="relative inline-flex items-center justify-center px-4 py-2 font-heading font-bold text-xs uppercase tracking-wider text-white transition-all duration-300 bg-primary hover:bg-primary-hover active:scale-95 clip-chamfer glow-primary group"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                REGISTER NOW
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              to="/register"
              className="px-3 py-1.5 text-xs font-heading font-bold uppercase tracking-wider text-white bg-primary rounded clip-chamfer"
            >
              REGISTER
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-dark-950/98 backdrop-blur-xl border-b border-dark-700 shadow-2xl p-5 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-1 mb-5">
            <div className="pb-3 border-b border-dark-800 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Tournament Status</span>
              <StatusBadge status={tournamentConfig.registrationStatus} size="sm" />
            </div>

            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center justify-between px-4 py-3 text-base font-heading font-semibold uppercase tracking-wider rounded-lg transition-colors ${
                    active
                      ? 'bg-primary/15 text-primary border-l-4 border-primary'
                      : 'text-slate-200 hover:bg-dark-850 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {active && <span className="w-2 h-2 rounded-full bg-primary animate-ping" />}
                </Link>
              );
            })}
          </div>

          <div className="pt-2 border-t border-dark-800 flex flex-col gap-3">
            <Link
              to="/register"
              className="w-full py-3 text-center font-heading font-bold text-sm uppercase tracking-widest text-white bg-primary hover:bg-primary-hover active:scale-98 clip-chamfer glow-primary"
            >
              REGISTER YOUR SQUAD NOW →
            </Link>
            <p className="text-center text-xs text-slate-400 font-mono">
              Only team captain needs to register
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
