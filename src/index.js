import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/

import Form from './Booking';
import Formcheck from './CheckBooking';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Hotel() {
  return (
    <h2 className="hotel">Hotel</h2>
  )
}




function Default() {
  return (<Router>
    <div>
      
        <ul>
          
            <Link to="/booking">   Booking    </Link>
          {/* </li>
          <li> */}
           <Link to="/checkbooking">   CheckBooking   </Link>
           <Link to="/hotel">Hotel</Link>
        </ul>
      

      <Switch>
        <Route path="/hotel">
          <Hotel />
        </Route>
        <Route path="/booking">
          <Form/>
        </Route>
        <Route path="/checkbooking">
          <Formcheck/>
        </Route>
      </Switch>
    </div>
  </Router>
);
}

ReactDOM.render(
  <Default />,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
