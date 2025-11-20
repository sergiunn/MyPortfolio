import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ProjectCard from "./components/ProjectCard";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-900">

        <Navbar />

        <main className="max-w-4xl mx-auto p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>

      <ProjectCard
         title="My First Project"
         description="This is a practice project to learn React."
         link="https://github.com/yourRepo"
         imageUrl="https://via.placeholder.com/300"
      />


    </Router>
  );
}

export default App;
