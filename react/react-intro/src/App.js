import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import TeamPage from './TeamPage';
import ReportPage from './ReportPage';
import CandidatePage from './CandidatePage';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/teams" element={<TeamPage />} />
          <Route path="/reports" element={<ReportPage />} />
          <Route path="/candidates" element={<CandidatePage />} />
        </Routes>
    </Router>
    </div>
  );
}
export default App
