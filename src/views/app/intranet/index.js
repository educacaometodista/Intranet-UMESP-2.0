import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Home = React.lazy(() =>
  import(/* webpackChunkName: "start" */ './home')
);
const Intranet = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/home`} />
      <Route
        path={`${match.url}/home`}
        render={props => <Home {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Intranet;
