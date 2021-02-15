import React, { useEffect } from "react";
import HomePage from "./pages/HomePage/HomePage";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EditEvent from "./pages/EditEventPage/EditEventPage";
import CreateEventPage from "./pages/CreateEventPage/CreateEventPage";
import CalendarDemo from "./components/organisms/Calendar/calendar";
import { fetchAllTasks } from "./services/Task";

const App = () => {
  useEffect(() => {
    fetchAllTasks();
  }, []);

  return (
    <div>
      <Router history={createBrowserHistory()}>
        <Switch>
          <Route path="/event/:id" exact>
            <EditEvent />
          </Route>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/create/event" exact>
            <CreateEventPage />
          </Route>
          <Route path="/calendar" exact>
            <CalendarDemo />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
