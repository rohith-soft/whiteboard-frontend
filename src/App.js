import React, { useEffect } from "react";
import HomePage from "./pages/HomePage/HomePage";
import axios from "axios";
import { createBrowserHistory } from "history";
import { urls } from "./constants";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EditEvent from "./pages/EditEventPage/EditEventPage";
import CreateEventPage from "./pages/CreateEventPage/CreateEventPage";

const App = () => {
  const fetchAllTasks = () => {
    const url = urls.getAllTasks;
    axios
      .get(url)
      .then((resp) => {
        if (resp.status == 200) {
          resp.data.map((task) => {
            window.localStorage.setItem(task.id, task.name);
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
        </Switch>
      </Router>
    </div>
  );
};

export default App;
