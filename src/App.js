import "./style.css";
import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./pages/Landing";
import ServicesPage from "./pages/Services";
import WorkPage from "./pages/Work";
import ContactPage from "./pages/Contact";

function App() {
  const [toggleNav, setToggleNav] = useState("");

  const handleToggle = () => {
    toggleNav ? setToggleNav("") : setToggleNav("active");
  };

  return (
    <Switch>
      <Route exact path="/">
        <LandingPage toggleNav={toggleNav} handleToggle={handleToggle} />
      </Route>
      <Route path="/work">
        <WorkPage toggleNav={toggleNav} handleToggle={handleToggle} />
      </Route>
      <Route path="/services">
        <ServicesPage toggleNav={toggleNav} handleToggle={handleToggle} />
      </Route>
      <Route path="/contact">
        <ContactPage toggleNav={toggleNav} handleToggle={handleToggle} />
      </Route>
    </Switch>
  );
}

export default App;
