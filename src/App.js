import React, { useState, useEffect } from "react";
import HomePage from "./pages/HomePage/HomePage";
import axios from "axios";
import { urls } from "./constants";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Event from "./pages/Event";

const App = () => {
  const fetchAllTasks = () => {
    const url = urls.getAllTasks;
    console.log("url ", url);
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
      <Router>
        <Switch>
          <Route path="/event/:id">
            <Event />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
