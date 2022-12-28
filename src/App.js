import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import { AppPostsPage } from "./pages/AppPostsPage";
import { AppPostDetailsPage } from "./pages/AppPostDetailsPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <header>
          <nav>
            <Link to="/posts">Posts</Link>
            <hr />
          </nav>
        </header>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Redirect to="/posts" />;
            }}
          />
          <Route exact path="/posts">
            <AppPostsPage />
          </Route>
          <Route path="/posts/:id">
            <AppPostDetailsPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
