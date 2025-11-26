import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header, { Navbar } from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <Header />
        <main>
          <About />
          <Experience />
          <Projects />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
