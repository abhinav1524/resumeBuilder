import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/Layout';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import ResumeBuilder from "./pages/FreeForm"
import ResumePreview from './pages/FinalPreview';
const App = () => {
  return (
      <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="resumebuilder" element={<ResumeBuilder />} />
          <Route path="resume-preview" element={<ResumePreview />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App