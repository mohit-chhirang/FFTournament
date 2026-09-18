import React from 'react';
import type { CollegeId } from '../../types';

interface CollegeEmblemProps {
  collegeId: CollegeId;
  logoUrl?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const CollegeEmblem: React.FC<CollegeEmblemProps> = ({
  collegeId,
  logoUrl,
  className = '',
  size = 'md'
}) => {
  const sizeMap = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32'
  };

  const isNitkkr = collegeId === 'NITKKR';

  // If the organizers uploaded a real logo image, render it
  if (logoUrl && logoUrl.trim() !== '') {
    return (
      <div className={`relative flex items-center justify-center rounded-xl bg-dark-900 border border-slate-700/60 p-2 ${sizeMap[size]} ${className}`}>
        <img
          src={logoUrl}
          alt={isNitkkr ? 'NIT Kurukshetra' : 'NIT Jalandhar'}
          className="w-full h-full object-contain filter drop-shadow-md"
        />
      </div>
    );
  }

  // High-energy esports collegiate emblem fallback
  return (
    <div
      className={`relative flex items-center justify-center transition-transform hover:scale-105 ${sizeMap[size]} ${className}`}
      title={isNitkkr ? 'NIT Kurukshetra' : 'NIT Jalandhar'}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`grad-${collegeId}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={isNitkkr ? '#00A3FF' : '#FF4D4D'} />
            <stop offset="100%" stopColor={isNitkkr ? '#0047BA' : '#990011'} />
          </linearGradient>
          <linearGradient id={`border-${collegeId}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.7" />
            <stop offset="100%" stopColor={isNitkkr ? '#0088FF' : '#FF3333'} stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* Shield Frame */}
        <polygon
          points="50,6 92,20 80,78 50,96 20,78 8,20"
          fill="#0B0F19"
          stroke={`url(#border-${collegeId})`}
          strokeWidth="3.5"
        />

        {/* Inner Graphic Accent */}
        <polygon
          points="50,14 84,26 74,72 50,88 26,72 16,26"
          fill={`url(#grad-${collegeId})`}
          fillOpacity="0.18"
        />

        {/* Tactical Cross Chevrons */}
        <path
          d={isNitkkr ? "M30 40 L50 25 L70 40 L50 32 Z" : "M30 35 L50 22 L70 35 L50 30 Z"}
          fill={`url(#grad-${collegeId})`}
        />

        {/* Monogram / Acronym */}
        <text
          x="50"
          y="62"
          textAnchor="middle"
          fill="#FFFFFF"
          fontFamily="'Chakra Petch', sans-serif"
          fontWeight="800"
          fontSize={isNitkkr ? "19" : "21"}
          letterSpacing="1"
          style={{ textShadow: isNitkkr ? '0 0 10px rgba(0,136,255,0.7)' : '0 0 10px rgba(255,51,51,0.7)' }}
        >
          {collegeId}
        </text>

        {/* Collegiate Star */}
        <circle
          cx="50"
          cy="74"
          r="2.5"
          fill={isNitkkr ? '#00D9FF' : '#FFB300'}
        />
      </svg>
    </div>
  );
};
