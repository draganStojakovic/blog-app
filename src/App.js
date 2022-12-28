import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import { AppPostsPage } from "./pages/AppPostsPage";

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
          <Route path="/posts">
            <AppPostsPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
