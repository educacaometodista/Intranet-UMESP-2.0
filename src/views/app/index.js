import React, { Component, Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AppLayout from '../../layout/AppLayout';

const Gogo = React.lazy(() =>
  import(/* webpackChunkName: "viwes-gogo" */ './intranet')
);
const Setores = React.lazy(() =>
  import(/* webpackChunkName: "viwes-second-menu" */ './setores')
);
const BlankPage = React.lazy(() =>
  import(/* webpackChunkName: "viwes-blank-page" */ './blank-page')
);
const Aniversariantes = React.lazy(() =>
  import(/* webpackChunkName: "viwes-blank-page" */ './aniversariantes')
);

class App extends Component {
  render() {
    const { match } = this.props;

    return (
      <AppLayout>
        <div className="dashboard-wrapper">
          <Suspense fallback={<div className="loading" />}>
            <Switch>
              <Redirect exact from={`${match.url}/`} to={`${match.url}/intranet`} />
              <Route
                path={`${match.url}/intranet`}
                render={props => <Gogo {...props} />}
              />
              <Route
                path={`${match.url}/setores`}
                render={props => <Setores {...props} />}
              />
              <Route
                path={`${match.url}/blank-page`}
                render={props => <BlankPage {...props} />}
              />
              <Route
                path={`${match.url}/aniversariantes`}
                render={props => <Aniversariantes {...props} />}
              />
              <Redirect to="/error" />
            </Switch>
          </Suspense>
        </div>
      </AppLayout>
    );
  }
}
const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(App)
);
