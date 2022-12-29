import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import { AppPostsPage } from "./pages/AppPostsPage";
import { AppPostDetailsPage } from "./pages/AppPostDetailsPage";
import { AddPostPage } from "./pages/AddPostPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <header>
          <nav>
            <Link to="/posts"> Posts </Link>
            <Link to="/add"> Add </Link>
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
          <Route path="/add">
            <AddPostPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
