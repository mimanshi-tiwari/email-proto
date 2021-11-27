import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { MailBox } from "./components/mailbox/MailBox";
import { MailDetails } from "./components/mailbox/MailDetails"
function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route exact path="/dashboard" component={MailBox} />
          <Route  path="/dashboard/:id" component={MailBox} />
          <Route  path="/dashboard/:id" component={MailDetails} />
          <Route exact path="/">
            <Redirect to="/dashboard" />
          </Route>
          <Route exact path="*">
            <Redirect to="/dashboard" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

