import { HashRouter as Rounter, Route, Switch } from "react-router-dom";
import "./App.scss";
import { HomePage } from "./pages/HomePage";
import { MatchPage } from "./pages/MatchPage";
import { TeamPage } from "./pages/TeamPage";

function App() {
  return (
    <div className="App">
      <Rounter>
        <Switch>
          <Route path="/teams/:teamName/matches/:year">
            <MatchPage />
          </Route>
          <Route path="/teams/:teamName">
            <TeamPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Rounter>
    </div>
  );
}

export default App;
