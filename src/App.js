import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Project from './Components/Project';
import ReactGA from 'react-ga4'
function App() {
 ReactGA.initialize("G-8RLV8JFTG0");
 ReactGA.send({ hitType: "pageview", page: "/my-path" })
 ReactGA.set({
  "userName" : "I am sherlock"
 })
 console.log(document.location.pathname);
 const handleClick = (e) => {
  console.log("Clickes")
  ReactGA.event({
    action: "navbar_click",
    category: "custom_navbar_click",
    label: "navbar_click"
  })
 }
 return (
    <div className="App">
      <Navbar handleClick = {handleClick} />
      <Home/>
      <About/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
