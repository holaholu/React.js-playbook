import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import App2 from './App2.jsx';
import App3 from './App3.jsx';
import App4 from './App4.jsx';
import App5 from './App5.jsx';
import App7 from './App7.jsx';
import MyHOC from './App8.jsx';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {Home,About,Contact} from './App5.jsx';


//ReactDOM.render(<App />, document.getElementById('app'));
//ReactDOM.render(<App2 />, document.getElementById('app2'));
//ReactDOM.render(<App3 />, document.getElementById('app3'));
//ReactDOM.render(<App4 />, document.getElementById('app4'));
//setTimeout(() => {
  // ReactDOM.unmountComponentAtNode(document.getElementById('app3'));}, 10000);


ReactDOM.render(<App7 />, document.getElementById('app7'));

ReactDOM.render(<MyHOC />, document.getElementById('app8'));

ReactDOM.render((
   <Router history = {browserHistory}>
      <Route path = "/" component = {App5}>
         <IndexRoute component = {Contact} />
         <Route path = "home" component = {Home} />
         <Route path = "about" component = {About} />
         <Route path = "contact" component = {Contact} />
      </Route>
   </Router>

	
), document.getElementById('app5'));




