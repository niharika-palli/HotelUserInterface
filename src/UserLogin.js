import React from 'react';
import axios from 'axios';

export default class Formuser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userid: null,
            username: null,
            mobilenumber: null,
            gender: null,
            
            
        }
    }

    useridChangeHandler = (event) => {
        this.setState({userid: event.target.value});
      }

    usernameChangeHandler = (event) => {
        this.setState({username: event.target.value});
      }

    mobilenumberChangeHandler = (event) => {
        this.setState({mobilenumber: event.target.value});
      }

    genderChangeHandler = (event) =>{
        this.setState({gender: event.target.value});
    }

    submitHandler = (event) => {
      event.preventDefault();

      alert("You are submitting " + this.state.userid + "," + this.state.username);
      axios.post('http://localhost:8080/user/keepuser', {
          userid: this.state.userid,
          username: this.state.username,
          mobilenumber:this.state.mobilenumber,
          gender:this.state.gender,
      })
      .then(response => alert(response.body));
    }

render() {
      return (
          <form onSubmit={this.submitHandler}>
            <h1> Dear please remember your userid</h1>
            <p>Enter your userid:</p>
            <input
              type="text"
              onChange={this.useridChangeHandler}
            />
            <p>Enter your username:</p>
            <input
              type="text"
              onChange={this.usernameChangeHandler}
            />
            <p>
             <p>Enter your mobilenumber</p>
             <input
             type="text"
             onChange={this.mobilenumberChangeHandler} 
             />
             <p>Enter your gender</p>
             <input
             type="text"
             onChange={this.genderChangeHandler}  
             />
            <input type='submit'/>
            </p>
          </form>
        );
  }

}
