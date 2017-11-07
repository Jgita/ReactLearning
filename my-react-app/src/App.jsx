import React from 'react'
import Header from './containers/Header.jsx'

class App extends React.Component{
    constructor(props){
        super(props);

         this.state =  {
           data: false,
           header:'Header  from props',
           content:'Content from props'
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
             <br/> <br/>
             <Header headerProp={this.state.header}></Header>
             <Content contentProp={this.state.content}></Content>


            </div>
        );  
    }
} 

// class Header extends  React.Component{
//     render(){
//         return(
//             <div>
//             <h1>{this.props.headerProp}</h1>
//             </div>
//         );
//     }
// }

class Content extends React.Component{
    render(){
        return(
            <div>
             <h2>{this.props.contentProp}</h2>
             </div>
        );
    }
}

export default App;