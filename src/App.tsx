import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { ScrollToTop } from './components/common/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { RegisterPage } from './pages/RegisterPage';
import { TournamentPage } from './pages/TournamentPage';
import { RulesPage } from './pages/RulesPage';
import { TermsPage } from './pages/TermsPage';
import { LeaderboardPage } from './pages/LeaderboardPage';
import { TeamsPage } from './pages/TeamsPage';
import { SchedulePage } from './pages/SchedulePage';
import { ContactPage } from './pages/ContactPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-dark-950 text-slate-100 selection:bg-primary selection:text-white">
        <ScrollToTop />
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/tournament" element={<TournamentPage />} />
            <Route path="/rules" element={<RulesPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
            <Route path="/teams" element={<TeamsPage />} />
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
