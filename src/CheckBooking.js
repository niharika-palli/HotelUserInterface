import React from 'react';
import axios from 'axios';


export default class Formcheck extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookingid: null,
            hotelid: null,
            city: null,
            hotelname: null,
            userid:null,
            submitted: false
        }
    }
    bookingidChangeHandler = (event) => {
        this.setState({bookingid: event.target.value});
    }

    submitHandler = (event) => {
        event.preventDefault();

        alert("You are submitting " + this.state.bookingid);
        axios.get('http://localhost:8080/bookingconsole/viewbooking?bookingid='+this.state.bookingid)
        .then(response => {
            console.log(response);
            this.setState({submitted: true,bookingid:response.data.bookingid,hotelid: response.data.hotelid,userid:response.data.userid,hotelname:response.data.hotelname,city:response.data.city});
            console.log('Latest: '+this.state.bookingid);
            
        });
      }

      render() {
        return (<div>
            <form onSubmit={this.submitHandler}>
              <marquee>
              <h1> First Look </h1>
              </marquee>
              <p>Enter bookingid:</p>
              <input
                type="text"
                onChange={this.bookingidChangeHandler}
                placeholder="bookingid"
              />
               <p>
              <input type='submit'/>
              </p>
            </form>
            {this.state.submitted && <Bookingdetails value = {this.state}/>}
            </div>
          );
    }

}

function Bookingdetails(props) {
    console.log('Booking Details: '+props);
    return (


    <div>
    <p>booking id:{props.value.bookingid}</p>  
    <p>Hotel id: {props.value.hotelid}</p>
    <p>userid:{props.value.userid}</p>
    <p>hotel name: {props.value.hotelname}</p>
    <p>City: {props.value.city}</p>
    </div>
    )
}

/*const App = props => { 
  const quoteArray = props.quotes.map((quote) => {
        return (
                <Quote text={quote.text} author={quote.author} />    ); 
                });  return (    <div>    
                    <h2>Famous Quotes</h2> 
                         {quoteArray}    </div> 
                          );};App.propTypes = { 
                             quotes: React.PropTypes.array}*/