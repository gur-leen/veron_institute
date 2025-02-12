import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginRegister from './pages/LoginRegister';
import ContactUs from './pages/ContactUs';
import FeedbackPage from './pages/FeedbackPage';
import TravelRecommendation from './pages/TravelRecommendation';
import CommunityPage from './pages/CommunityPage';
import Newpost from './components/Community/NewPost';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login-register" element={<LoginRegister />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/recommendation" element={<TravelRecommendation />} />

        <Route path="/community" element={<CommunityPage />} />
        <Route path="/community/new-post" element={<Newpost />} />
      </Routes>
    </Router>
  );
}

export default App;

