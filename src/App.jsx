import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './Components/Header';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Education } from './Pages/Education';
import { Projects } from './Pages/Project';
import { Certificates } from './Pages/Certificates';
import { Skills } from './Pages/Skills';
import { Contact } from './Pages/Contact';
// import { Footer } from './Components/Footer';
import { FooterWrapper } from './Components/FooterWrapper'


function App() {

  const navLinks = [
    { path: "/about", label: "About" },
    { path: "/education", label: "Experience" },
    { path: "/projects", label: "Projects" },
    { path: "/certificates", label: "Certificates" },
    { path: "/skills", label: "Skills" },
  ];

  return (
    <div>
    <BrowserRouter>
      <Header siteName="Prerna" navLinks={navLinks} />      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
          <FooterWrapper/>

    </BrowserRouter>
    {/* <Footer/> */}
    </div>
  );
}

export default App;
