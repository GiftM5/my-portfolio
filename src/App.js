import logo from './logo.svg';
import './App.css';
import { CloudSecNetworck } from "./components/CloudSecNetworck";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { WhyHireMe } from "./components/WhyHireMe";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <WhyHireMe />
      <Footer />
    </div>
  );
}

export default App;
