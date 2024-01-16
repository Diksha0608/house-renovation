import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar'
import About from './components/about/About';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import Experience from './components/Experience.jsx/Experience';
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';



function App() {
  return (
    <div className="App">
 <Home/>
      <Navbar/>
     
      <About />
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
