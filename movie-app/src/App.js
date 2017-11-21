import React from 'react'
import headerImg from './images.jfif'
import CustomButton from './components/CustomButton.js'
import './App.css'
import Routes from './Routes.js'
import Login from './components/Login.js'


class App extends React.Component {
    constructor(props){
        super(props);
    }
    
    buttonLogin = () => {
        alert('Login...')
    }
    render() {
        return <div>
            <header className="App-header">
            
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <img src={headerImg} className="App-logo" alt="logo" />
                    </div>
                    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5" style={{ 'paddingTop': '20px' }}>
                        <h1>MovieDB</h1>
                    </div>
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        <CustomButton name="Login" buttonClick={this.buttonLogin} />
                    </div>
                </div>
            </header>
           
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
                    <Routes></Routes>
                </div>
            </div>
        </div>
    }
}

export default App;
