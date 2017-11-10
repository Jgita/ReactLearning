import React, {Component} from 'react';

class CustomButton extends Component{
    
    render(){
        return(
            <div>
            <button className="btn-primary" style={{'paddingTop': '50px'}} title={this.props.name} onClick={this.props.buttonClick}>{this.props.name}</button>
            </div>
        );
    }
}

export default CustomButton;