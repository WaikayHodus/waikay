import Nav from "./Nav";
import Home from "./Home";
import Table from "./Table";
import Feet from "./Feet";
import Login from "./Login";
import Reg from "./Reg";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import NotFound from "./NotFound";
import cors from "cors";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Table">
              <Table />
            </Route>
            <Route exact path="/Feet">
              <Feet />
            </Route>
            <Route exact path="/Login">
              <Login />
            </Route>
            <Route exact path="/Reg">
              <Reg />
            </Route>
            <Route exact path="/*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
export default App;
