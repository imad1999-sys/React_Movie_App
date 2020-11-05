import Navbar from "../src/component/Navbar";
import logo from './logo.svg';
import './App.css';
import Footer from "./component/Footer";
import Landing from "./component/Home/Landing";
import Store from "../src/Store/Store.js"
import { Provider } from "react-redux";
import { HashRouter as Router , Route } from "react-router-dom";
import MovieDetail from "./Details/MovieDetail";

function App() {
  return (
    <Provider store={Store}>
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Landing}/>
          <Route exact path="/movie/:id" component={MovieDetail}/>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
