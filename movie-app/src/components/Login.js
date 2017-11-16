import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios'
import {withRouter} from "react-router-dom";

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }    
    }
    //  updateUser = (e) => {
    //          console.log('e',e.target.value)
    //          this.setState({data: e.target.value});
    //      }

    updateUser = (event,newValue) => {
        console.log(newValue)
        this.setState({username: newValue})
    }

    updatePassword = (event, newValue) => {
        console.log(newValue)
         this.setState({password: newValue})
    }

    ButtonClick = (event) => {
        var apiBaseUrl = 'http://localhost:3000/'
        var self = this;
        var payload = {
            'email':this.state.username,
            'password':this.state.password
        }

       if(this.state.username === 'admin' && this.state.password === 'admin'){
          this.props.history.push("/Home");
           
       } else{
            alert('Please Enter Correct Username and Password...');
       }
    }

    handelRegister = (event) =>{
        this.props.history.push('/Register')

    }

    render(){
        const style = {
              margin: 15,
                };
    
        return(
            <div>
            {/*<h1>Login</h1>
            <label>Enter User Name:&nbsp;&nbsp;&nbsp;</label>
            <input type="text" value = {this.state.data}  onChange = {this.updateUser}/>
            <h1>{this.state.data}</h1>*/}
            
            <MuiThemeProvider>
            <div className="row col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <AppBar title = "Login"/>
            <div style={{'textAlign': 'center'}}>
            <TextField 
            hintText="Enter your Username" 
            floatingLabelText="Username" 
            onChange = {this.updateUser}>
            </TextField>
            <br/>
            <TextField 
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password" 
               onChange = {this.updatePassword}></TextField>
            <br/>
            <RaisedButton label="Login" primary={true} style={style} onClick = {this.ButtonClick}/>
            <h3>Not registered yet, Register Now</h3>
            <RaisedButton label="Register" primary={true} style={style} onClick = {this.handelRegister}/>
            </div>
             
            </div>
             <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
            </div>
            </MuiThemeProvider>
            </div>
        );
    }
}

//export default Login;


export default withRouter(Login);