
import React from 'react'
import headerImg from './images.jfif'
import CustomTable from './components/CustomTable.js'
import CustomButton from './components/CustomButton.js'
import './App.css'

class App extends React.Component{
    // constructor(props){
    //     super(props);
    // }
    // this.buttonLogin =>(){

    // }
    buttonLogin = () => {
        alert('Login...')
    }
    render(){
        return <div>
        <header className="App-header">
        <div className="row">
        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
        <img src={headerImg} className="App-logo" alt="logo"/>
        </div>
        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5" style={{'paddingTop': '20px'}}>
        <h1>MovieDB</h1>
        </div>
        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
         <CustomButton name="Login" buttonClick={this.buttonLogin} />
         </div>
        </div>
        </header>
        <CustomTable></CustomTable>
        <footer>I am a footer</footer>
        </div>
    }
}

export default App;
