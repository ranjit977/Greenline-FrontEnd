import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.component";
import Feed from "./pages/Feed/Feed.component";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/" component={Feed} />
      </Switch>
    </div>
  );
}

export default App;
