export type RegistrationStatus = 'open' | 'closed' | 'live' | 'completed';

export type TeamStatus = 'Registered' | 'Confirmed' | 'Eliminated' | 'Qualified';

export type CollegeId = 'NITKKR' | 'NITJ';

export interface CollegeInfo {
  id: CollegeId;
  name: string;
  shortName: string;
  acronym: string;
  location: string;
  color: string;
  logoUrl?: string;
  motto: string;
}

export interface TournamentOrganizer {
  name: string;
  college: string;
  role: string;
}

export interface TournamentContacts {
  officialEmail: string;
  instagramUrl: string;
  discordUrl: string;
  whatsappUrl: string;
  contactNumber: string;
}

export interface TournamentConfig {
  name: string;
  shortName: string;
  season: string;
  badge: string;
  tagline: string;
  game: string;
  teamSize: string;
  format: string;
  collegesCount: number;
  entryFee: string;
  prizePool: string;
  tournamentDate: string;
  countdownTarget: string;
  countdownLabel: string;
  registrationStatus: RegistrationStatus;
  registrationUrl: string;
  colleges: {
    nitkkr: CollegeInfo;
    nitj: CollegeInfo;
  };
  contacts: TournamentContacts;
  organizers: TournamentOrganizer[];
}

export interface Team {
  id: string;
  name: string;
  college: string;
  collegeId: CollegeId;
  status: TeamStatus;
  tag?: string;
  avatarUrl?: string;
  registeredAt?: string;
}

export interface Match {
  id: string;
  matchNumber: number;
  title: string;
  date: string;
  time: string;
  map: string;
  lobbyStatus: string;
  status: 'Upcoming' | 'Live' | 'Completed' | 'TBA';
  participatingTeamsCount: string;
  roomDetailsNotice: string;
}

export interface LeaderboardRow {
  rank: number;
  teamName: string;
  college: string;
  collegeId: CollegeId;
  matches: number;
  kills: number;
  placementPoints: number;
  killPoints: number;
  totalPoints: number;
}

export interface Sponsor {
  id: string;
  name: string;
  tier: 'Title' | 'Powered By' | 'Associate' | 'Community';
  logoUrl?: string;
  websiteUrl?: string;
}
