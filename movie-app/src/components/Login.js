import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios'
import {withRouter} from "react-router-dom";
import './CustomTable.css'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    //  updateUser = (e) => {          console.log('e',e.target.value)
    // this.setState({data: e.target.value});      }

    updateUser = (event, newValue) => {
        // console.log(newValue)
        this.setState({username: newValue})
    }

    updatePassword = (event, newValue) => {
        // console.log(newValue)
        this.setState({password: newValue})
    }

    ButtonClick = (event) => {
        var self = this;
        var payload = {
            'email': this.state.username,
            'password': this.state.password
        }
        this.props.history.push("/Home");

        // if (this.state.username === 'admin' && this.state.password === 'admin') {
        //     this
        //         .props
        //         .history
        //         .push("/Home");

        // } else {
        //     alert('Please Enter Correct Username and Password...');
        // }
    }

    handelRegister = (event) => {
        this
            .props
            .history
            .push('/Register')

    }

    render() {
        const style = {
            margin: 15
        };

        return (
            <div>
                {/*<h1>Login</h1>
            <label>Enter User Name:&nbsp;&nbsp;&nbsp;</label>
            <input type="text" value = {this.state.data}  onChange = {this.updateUser}/>
            <h1>{this.state.data}</h1>*/}
                <div className="content-area-inside">
                    <div className="row">
                        <div className="row db-info shadow-btm"></div>
                    </div>
                    <div className="row content-wrapper">
                        <div className="col-xs-5 col-sm-4 col-md-5 col-lg-5 loginleft">
                            <section className="margintop20 middle-wrapper">
                                <MuiThemeProvider>
                                    <AppBar title="Login"/>
                                    <div
                                        style={{
                                        'textAlign': 'center'
                                    }}>

                                        <TextField
                                            hintText="Enter your Username"
                                            floatingLabelText="Username"
                                            onChange={this.updateUser}></TextField>
                                        <br/>
                                        <TextField
                                            type="password"
                                            hintText="Enter your Password"
                                            floatingLabelText="Password"
                                            onChange={this.updatePassword}></TextField>
                                        <br/>
                                        <RaisedButton
                                            label="Login"
                                            primary={true}
                                            style={style}
                                            name={this.state.username}
                                            password={this.state.password}
                                            onClick={this.ButtonClick}/>
                                        <h3>Not registered yet, Register Now</h3>
                                        <RaisedButton
                                            label="Register"
                                            primary={true}
                                            style={style}
                                            onClick={this.handelRegister}/>
                                    </div>

                                </MuiThemeProvider>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

//export default Login;

export default withRouter(Login);