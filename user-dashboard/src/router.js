import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';

import Users from "./routes/Users.js";
import OrderList from "./components/orderList/orderList.js";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/users" component={Users} />
      <Route path="/orderList" component={OrderList} />
    </Router>
  );
}
export default RouterConfig();
// connect(mapStateToProps)(orderList);
// export default connect(RouterConfig);
