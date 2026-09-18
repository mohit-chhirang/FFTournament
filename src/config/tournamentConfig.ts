import type { TournamentConfig, Team, Match, LeaderboardRow, Sponsor } from '../types';

/**
 * ==============================================================================
 * NITKKR v/s NITJ FREE FIRE CHAMPIONSHIP — CENTRAL CONFIGURATION
 * ==============================================================================
 * 
 * Student Organizers Guide:
 * Update this file to modify tournament dates, registration URLs, contacts,
 * and publish verified teams, schedules, and leaderboard scores.
 * No UI components need to be modified when updating these values.
 */

// Central Google Form Registration Link
// When your official Google Form is ready, replace the string below with your form link:
// Example: export const REGISTRATION_FORM_URL = "https://forms.gle/your-google-form-id";
export const REGISTRATION_FORM_URL = "[GOOGLE FORM URL TO BE ADDED]";

export const tournamentConfig: TournamentConfig = {
  name: "NITKKR v/s NITJ Free Fire Championship",
  shortName: "NITKKR × NITJ",
  season: "Season 1",
  badge: "SEASON 1",
  tagline: "Two NITs. One battlefield. One champion.",
  game: "Free Fire / Free Fire MAX",
  teamSize: "4 Players",
  format: "Custom Room",
  collegesCount: 2,
  entryFee: "[TO BE ANNOUNCED]",
  prizePool: "[TO BE ANNOUNCED]",
  tournamentDate: "[TO BE ANNOUNCED]",
  // Countdown target — ISO 8601 date-time string in IST (UTC+05:30)
  // Set to empty string "" to hide the countdown timer
  countdownTarget: "2026-09-23T22:00:00+05:30",
  countdownLabel: "REGISTRATION CLOSES IN",
  
  // Status options: 'open' | 'closed' | 'live' | 'completed'
  registrationStatus: 'open',

  // Google Form URL (referenced from variable above)
  registrationUrl: REGISTRATION_FORM_URL,

  // Participating Colleges Information
  colleges: {
    nitkkr: {
      id: 'NITKKR',
      name: 'National Institute of Technology Kurukshetra',
      shortName: 'NIT Kurukshetra',
      acronym: 'NITKKR',
      location: 'Kurukshetra, Haryana',
      color: '#0088FF',
      // To add an official logo, place it in /public/colleges/nitkkr.png and set path below:
      logoUrl: '',
      motto: 'Knowledge & Excellence'
    },
    nitj: {
      id: 'NITJ',
      name: 'Dr. B. R. Ambedkar National Institute of Technology Jalandhar',
      shortName: 'NIT Jalandhar',
      acronym: 'NITJ',
      location: 'Jalandhar, Punjab',
      color: '#FF3333',
      // To add an official logo, place it in /public/colleges/nitj.png and set path below:
      logoUrl: '',
      motto: 'Excellence & Commitment'
    }
  },

  // Official Contacts (Replace placeholders once official channels are setup)
  contacts: {
    officialEmail: "[OFFICIAL EMAIL]",
    instagramUrl: "[INSTAGRAM URL]",
    discordUrl: "[DISCORD SERVER URL]",
    whatsappUrl: "[WHATSAPP GROUP URL]",
    contactNumber: "[CONTACT NUMBER]",
  },

  // Student Organising Committee
  organizers: [
    {
      name: "NIT Kurukshetra Student Esports Committee",
      college: "NIT Kurukshetra",
      role: "Host & Operations"
    },
    {
      name: "NIT Jalandhar Student Esports Committee",
      college: "NIT Jalandhar",
      role: "Co-Host & Logistics"
    }
  ]
};

/**
 * ==============================================================================
 * PARTICIPATING TEAMS DATA
 * ==============================================================================
 * Add confirmed teams here once the registration and verification concludes.
 * IMPORTANT PRIVACY NOTICE:
 * Never include captain phone numbers, roll numbers, or personal emails here.
 * Only display team names, college, and competition status.
 */
export const teamsData: Team[] = [
  // Empty by default as registrations are ongoing.
  // Organisers will populate this array with verified squads:
  // {
  //   id: "team-01",
  //   name: "Kurukshetra Vipers",
  //   college: "NIT Kurukshetra",
  //   collegeId: "NITKKR",
  //   status: "Confirmed",
  // },
];

/**
 * ==============================================================================
 * MATCH SCHEDULE DATA
 * ==============================================================================
 * Populate when tournament match slots and fixtures are finalized.
 * NOTE: Private custom-room credentials (Room ID / Password) must NEVER
 * be published on this public website.
 */
export const scheduleData: Match[] = [];

/**
 * ==============================================================================
 * LEADERBOARD STANDINGS DATA
 * ==============================================================================
 * Enter live/match standings after games are played.
 * Keep array empty until tournament matches commence.
 */
export const leaderboardData: LeaderboardRow[] = [];

/**
 * ==============================================================================
 * SPONSORS DATA
 * ==============================================================================
 * Add partners/sponsors here when confirmed.
 */
export const sponsorsData: Sponsor[] = [];
