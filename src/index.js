import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Checkout from './components/Checkout';
import Success from './components/Success';
import Canceled from './components/Canceled';

import './css/normalize.css';
import './css/global.css';

function App() {

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/https://stripe-one-time-pay.herokuapp.com/")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div>
    <Router>
      <Switch>
        <Route path="/success.html">
          <Success />
        </Route>
        <Route path="/canceled.html">
          <Canceled />
        </Route>
        <Route path="/">
          <Checkout />
        </Route>
      </Switch>
    </Router>
    <p>{!data ? "Loading..." : data}</p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
