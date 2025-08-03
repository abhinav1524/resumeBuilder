import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/Layout';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import ResumeBuilder from "./pages/FreeForm"
import ResumePreview from './pages/FinalPreview';
import AiGeneratedResume from "./pages/GenerateResume"
import Login from "./pages/Login"
import Register from "./pages/Register"
const App = () => {
  return (
      <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="resumebuilder" element={<ResumeBuilder />} />
          <Route path="resume-preview" element={<ResumePreview />} />
          <Route path="airesumegenerator" element={<AiGeneratedResume />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App