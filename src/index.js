import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Button from 'react-bootstrap/Button';


/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/

import Form from './Booking';
import Formcheck from './CheckBooking';
import Formcan from './CancelBooking';
import Formfetch from './HotelDetails';
import Formuser from './UserLogin';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { ButtonToolbar } from 'react-bootstrap';


function Hotel() {
  return (
    <h2 className="hotel">Hotel</h2>
  )
}





function Default() {
  return (
  
  <Router>

    <div className="new">
   
        <div>

        <ul>
           <Link to="/hotel"><Button>  Hotel  </Button>  </Link>
           <Link to="/booking"><Button>   Booking  </Button>  </Link>
           <Link to="/checkbooking"> <Button>   CheckBooking   </Button>   </Link>
           <Link to="/cancelbooking"><Button>  CancelBooking   </Button>   </Link>
           <Link to="/hoteldetails"><Button >  HotelDetails    </Button>   </Link>
           <Link to="/userlogin"><Button>   UserLogin    </Button>   </Link>
        </ul>

        </div>
        
        

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
        <Route path="/cancelbooking">
          <Formcan/>
         </Route> 
         <Route path="/hoteldetails">
           <Formfetch/>
           </Route>
           <Route path="/userlogin">
             <Formuser/>
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
