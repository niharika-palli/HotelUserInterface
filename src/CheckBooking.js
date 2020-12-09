import React from 'react';
import axios from 'axios';


export default class Formcheck extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userid:null,
            bookingid: null,
            hotelid: null,
            city: null,
            hotelname: null,
            submitted: false
        }
    }
    useridChangeHandler = (event) => {
        this.setState({userid: event.target.value});
    }

    submitHandler = (event) => {
        event.preventDefault();

        alert("You are submitting " + this.state.userid);
        axios.get('http://localhost:8080/book/database/?userid='+this.state.userid)
        .then(response => {
            console.log(response);
            this.setState({submitted: true,userid:response.data[0].userid,hotelid: response.data[0].hotelid,bookingid:response.data[0].bookingid,hotelname:response.data[0].hotelname,city:response.data[0].city});
            console.log('Latest: '+this.state.hotelid);
            
        });
      }

      render() {
        return (<div>
            <form onSubmit={this.submitHandler}>
              <marquee>
              <h1> First Look </h1>
              </marquee>
              <p>Enter userid:</p>
              <input
                type="text"
                onChange={this.useridChangeHandler}
                placeholder="userid"
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
        <table>
   <tr>
     <th>userid</th>
     <th>bookingid</th>
     <th>hotelid</th>
     <th>hotelname</th>
     <th>city</th>
   </tr>
       <tr> 
        <td> {props.value.userid}</td>
        <td> {props.value.bookingid}</td>
        <td> {props.value.hotelid}</td>
        <td> {props.value.hotelname}</td> 
        <td> {props.value.city}</td>
        </tr>
        </table>
      </div>
        )





    /*<div>
    <p>userid:{props.value.userid}</p>  
    <p>booking id:{props.value.bookingid}</p>  
    <p>Hotel id: {props.value.hotelid}</p>
    <p>hotel name: {props.value.hotelname}</p>
    <p>City: {props.value.city}</p>
    </div>
    )*/
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