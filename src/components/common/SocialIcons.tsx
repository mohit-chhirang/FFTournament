import React from 'react';

interface IconProps {
  className?: string;
}

export const InstagramIcon: React.FC<IconProps> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const DiscordIcon: React.FC<IconProps> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 6h0a14.5 14.5 0 0 0-4-1.5 9.8 9.8 0 0 0-.4 1.5 13.9 13.9 0 0 0-3.2 0A9.8 9.8 0 0 0 10 4.5 14.5 14.5 0 0 0 6 6c-2.5 4-3 8-3 12 2 1.5 4 1.5 5 1.5.5-.6.9-1.3 1.3-2-1.5-.5-2.2-1.4-2.2-1.4.1.1.3.2.4.3 2 1.3 4.5 1.7 6.5 1.7s4.5-.4 6.5-1.7c.1-.1.3-.2.4-.3 0 0-.7.9-2.2 1.4.4.7.8 1.4 1.3 2 1 0 3 0 5-1.5 0-4-.5-8-3-12Z" />
    <circle cx="8.5" cy="12" r="1.5" fill="currentColor" />
    <circle cx="15.5" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

export const WhatsAppIcon: React.FC<IconProps> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);
