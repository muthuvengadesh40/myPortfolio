import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import About from './components/About';
import Projects from './components/Projects';
import ChatBubble from './components/ChatBubble'; // Capitalized name

function App() {
  const [darkMode,setDarkMode] = useState(true);
  const toggleTheme=()=> setDarkMode(!darkMode);
  return (
    <div className={darkMode ? 'App dark': 'App light'}>
      <button 
      className="theme-toggle"
      onClick={toggleTheme}>
        {darkMode ? 'Light Mode': 'Dark Mode'}
      </button>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Resume />
      <ChatBubble />
    </div>
  );
}

export default App;