import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';



class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
                    first_name:'',
                    last_name:'',
                    email:'',
                    password:''
                 }
    }

    updateState = (event) => {

        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name] : value
        });        
    }

    handleClick = (event) =>{
      
        //  var payload = {
        //             "first_name": this.state.first_name,
        //             "last_name":this.state.last_name,
        //             "email":this.state.email,
        //             "password":this.state.password
        //             }
        //       document.getElementById("create-course-form").reset();
        //  this.state = initialState;
        // this.replaceState(initialState);
        this.setState(
            {
                first_name: '',
                last_name:'',
                email:'',
                password:''
            });

            
    }
    render(){
        return(
            <div>
            <MuiThemeProvider>
            <div className="row col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <AppBar title="Register"/>
            <div style={{'textAlign': 'center'}}>
          <form id = 'create-course-form'>
            <TextField 
            hintText="Enter Your First Name"
            floatingLabelText="First Name"
            onChange = {this.updateState} value={this.state.first_name} name="first_name" />
            <br/>
            <TextField
             hintText="Enter your Last Name"
             floatingLabelText="Last Name"
             onChange = {this.updateState} value={this.state.last_name} name="last_name"
             />
           <br/>
           <TextField
             hintText="Enter your Email"
             type="email"
             floatingLabelText="Email"
             onChange = {this.updateState} value={this.state.email} name="email"
             />
           <br/>
           <TextField
             type = "password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {this.updateState} value={this.state.password} name="password"
             />
           <br/>
          </form>
           <RaisedButton label="Submit" primary={true} style={style} onClick={this.handleClick}/>
           </div>
          </div>
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
           </div>
            
         </MuiThemeProvider>
      </div>
    );
  }
}

const style = {
  margin: 15,
};


export default Register;