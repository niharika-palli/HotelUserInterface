import React from 'react';
import axios from 'axios';


export default class Formfetch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hotelid: null,
            city: null,
            hotelname: null,
            rooms:null,
            landmark:null,
            submitted: false
        }
    }
    hotelidChangeHandler = (event) => {
        this.setState({hotelid: event.target.value});
    }

    submitHandler = (event) => {
        event.preventDefault();

        alert("You are submitting " + this.state.hotelid);
        axios.get('http://localhost:8080/hotel/getdata/?hotelid='+this.state.hotelid)
        .then(response => {
            console.log(response);
            this.setState({submitted: true,hotelid:response.data.hotelid,city: response.data.city,hotelname:response.data.hotelname,rooms:response.data.rooms,landmark:response.data.landmark});
            console.log('Latest: '+this.state.city);
            
        });
      }

      render() {
        return (<div>
            <form onSubmit={this.submitHandler}>
              <h1> Its show time 25 hotels here</h1>
              <p>Enter the hotelid:</p>
              <input
                type="text"
                onChange={this.hotelidChangeHandler}
              />
               <p>
              <input type='submit'/>
              </p>
            </form>
            {this.state.submitted && <Hoteldetails value = {this.state}/>}
            </div>
          );
    }

}

function Hoteldetails(props) {
    console.log('Booking Details: '+props);
    return (
    <div>
    <p>Hotel id:{props.value.hotelid}</p>
    <p>City: {props.value.city}</p>
    <p>hotel name: {props.value.hotelname}</p>
    <p>Rooms: {props.value.rooms}</p>
    <p>Landmark:{props.value.landmark}</p>
    </div>
    )
}