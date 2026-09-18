import React, { useEffect } from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { RivalrySection } from '../components/home/RivalrySection';
import { OverviewStats } from '../components/home/OverviewStats';
import { HowItWorks } from '../components/home/HowItWorks';
import { RegistrationBanner } from '../components/home/RegistrationBanner';
import { SponsorsSection } from '../components/common/SponsorsSection';

export const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = "NITKKR v/s NITJ Free Fire Championship Season 1";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <RivalrySection />
      <OverviewStats />
      <HowItWorks />
      <RegistrationBanner />
      <SponsorsSection />
    </div>
  );
};
