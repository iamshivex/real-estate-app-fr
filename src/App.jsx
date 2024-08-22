import "./index.css"
import "./App.css"
import Header from "./components/header/Header";
import Hero from "./components/hero/hero";
import Companies from "./components/companies/companies";
import Residencies from "./components/residencies/residencies";
import Value from "./components/value/value";
import Contact from "./components/contact/contact";
import GetStarted from "./components/get-started/get-started";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header/>
        <Hero/>
      </div>
      <Companies/>
      <Residencies/>
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;
