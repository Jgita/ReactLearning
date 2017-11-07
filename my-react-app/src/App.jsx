import React from 'react'
class App extends React.Component{
    constructor(props){
        super(props);

         this.state =  {
           data: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }
      handleClick(){
            this.setState(
                {
                    data: !this.state.data,
                });
      }
        
    render(){
        return(
            <div>
              <h1> Hello / Welcome</h1>
               <h1>{this.state.data  === false ? 'Logging out...' : 'Logging in...'}</h1>
             <button onClick = {this.handleClick}>{this.state.data  === false ? 'Log Out' : 'Log In'}</button>
            </div>
        );  
    }
} 

export default App;