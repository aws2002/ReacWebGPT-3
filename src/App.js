import Navbar from "./components/Navbar/Navbar";
import Navbar_2 from "./components/Navbar/Navbar_2";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/Tools/ScrollToTop";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Page_2 from "./Page_2";
export default function App() {
  // const [darkMode, setDarkMode] = React.useState(true)
  //   function toggleDarkMode() {
  //       setDarkMode(prevMode => !prevMode)
  //   }

  return (
    <Router>
      <div className="App">
        {/* <Navbar_2 darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Main darkMode={darkMode} /> */}
        <Navbar />
        {/* <Main /> */}
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/page_2">
            <Page_2/>
          </Route>
        </Switch>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}
