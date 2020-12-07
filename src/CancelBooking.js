import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

export default class FormCan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookingid: null,
            submitted: false
        }
    }
    bookingidChangeHandler = (event) => {
        this.setState({bookingid: event.target.value});
    }

    submitHandler = (event) => {
        event.preventDefault();
        axios.delete('http://localhost:8080/bookingconsole/deletebooking/'+this.state.bookingid)
        .then(response => {
            this.setState({submitted: true});
            alert("Are you sure to cancel your booking");
        });
      }
      render() {
        return (<div>
            <form onSubmit={this.submitHandler}>
              <marquee>
              <h1>Cancel your Booking</h1>
              </marquee>
              <p>Enter Booking iD:</p>
              <input
                type="text"
                onChange={this.bookingidChangeHandler}
                placeholder="bookingid"
              />
               <p>
              <input type='submit' value="delete"/>
              </p>
            </form>
            {this.state.submitted}
            </div>
          );
    }
}

/*function deleteRow(row){
    // var d = row.parentNode.parentNode.rowIndex;
    document.getElementById('passengers').deleteRow(this.state.bookingid);
 }*/
