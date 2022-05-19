import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  c = "jhon";

  apikey = process.env.REACT_APP_NEWS_API;

  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color="#f11946"
            height={5}
            progress={this.state.progress}
          />
          <Switch>
            <Route exact path="/">
              <News
                setProgress={this.setProgress}
                apikey={this.apikey}
                key="general"
                pagesize={5}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/business">
              <News
                setProgress={this.setProgress}
                apikey={this.apikey}
                key="business"
                pagesize={5}
                country="in"
                category="business"
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                setProgress={this.setProgress}
                apikey={this.apikey}
                key="entertainment"
                pagesize={5}
                country="in"
                category="entertainment"
              />
            </Route>
            <Route exact path="/general">
              <News
                setProgress={this.setProgress}
                apikey={this.apikey}
                key="general"
                pagesize={5}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/health">
              <News
                setProgress={this.setProgress}
                apikey={this.apikey}
                key="health "
                pagesize={5}
                country="in"
                category="health"
              />
            </Route>
            <Route exact path="/science">
              <News
                setProgress={this.setProgress}
                apikey={this.apikey}
                key="science"
                pagesize={5}
                country="in"
                category="science"
              />
            </Route>
            <Route exact path="/sports">
              <News
                setProgress={this.setProgress}
                apikey={this.apikey}
                key="/sports"
                pagesize={5}
                country="in"
                category="sports"
              />
            </Route>
            <Route exact path="/technology">
              <News
                setProgress={this.setProgress}
                apikey={this.apikey}
                key="technology"
                pagesize={5}
                country="in"
                category="technology"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
