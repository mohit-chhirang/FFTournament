import React from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  highlight,
  subtitle,
  centered = true,
  className = ''
}) => {
  return (
    <div className={`space-y-3 mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : ''} ${className}`}>
      {badge && (
        <div className="inline-flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
          <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-primary">
            {badge}
          </span>
          <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
        </div>
      )}

      <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-white">
        {title}{' '}
        {highlight && (
          <span className="bg-gradient-to-r from-primary via-accent-orange to-primary bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          {subtitle}
        </p>
      )}

      <div className={`flex items-center gap-1 pt-1 ${centered ? 'justify-center' : ''}`}>
        <div className="w-12 h-1 bg-gradient-to-r from-transparent to-primary rounded-full" />
        <div className="w-3 h-1 bg-primary rounded-full" />
        <div className="w-12 h-1 bg-gradient-to-l from-transparent to-primary rounded-full" />
      </div>
    </div>
  );
};
