import React, { Component } from "react";
import Header from "./components/header";
import MainContent from "./components/mainContent";
import { Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import UploadPage from "./components/uploadPage";
import { BrowserRouter } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Redirect
              from="/"
              to="/videos/1af0jruup5gu"
              exact
              component={MainContent}
            />
            <Route path="/videos/:Id" component={MainContent} />
            <Route path="/uploadpage" component={UploadPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
