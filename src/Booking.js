import React from 'react';
import axios from 'axios';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hotelname: null,
            city: null,
            bookingid: null,
            userid: null,
            hotelid:null
            
            
        }
    }

    hotelnameChangeHandler = (event) => {
        this.setState({hotelname: event.target.value});
      }

    cityChangeHandler = (event) => {
        this.setState({city: event.target.value});
      }

    bookingidChangeHandler = (event) => {
        this.setState({bookingid: event.target.value});
      }

    hotelidChangeHandler = (event) =>{
        this.setState({hotelid: event.target.value});
    }

    useridChangeHandler = (event) =>{
      this.setState({userid: event.target.value});
  }

    submitHandler = (event) => {
      event.preventDefault();

      alert("You are submitting " + this.state.hotelid + "," + this.state.userid);
      axios.post('http://localhost:8080/bookingconsole/booking', {
          hotelid: this.state.hotelid,
          userid: this.state.userid,
      })
      .then(response => alert(response.body));alert("booking successful");
    }

render() {
      return (
          <form onSubmit={this.submitHandler}>
            <h1> Book your favourites Available 25 hotels </h1>
            <p>Enter your hotelid:</p>
            <input
              type="text"
              onChange={this.hotelidChangeHandler}
            />
            <p>Enter your userid:extactly given at the time of login</p>
            <input
              type="text"
              onChange={this.useridChangeHandler}
            />
            <p>
            <input type='submit'/>
            </p>
          </form>
        );
  }

}
