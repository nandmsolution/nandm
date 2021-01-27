import Home from "./pages/Home";
import Services from "./pages/services/Services";
import About from "./pages/about/About";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ContactUs from "./pages/contact-us/ContactUs";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router basename={window.location.pathname || ""}>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/services" component={Services}></Route>
          <Route exact path="/about-us" component={About}></Route>
          <Route exact path="/contact-us" component={ContactUs}></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
