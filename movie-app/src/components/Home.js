import React, {Component} from 'react'
import CustomTable from './CustomTable.js'
import Loader from 'react-loader-advanced';
import './Loader.css'

const transitionConfig = {
    transitionName: 'fadeTransition',
    transitionEnterTimeout: 300,
    transitionLeaveTimeout: 300
};

class Home extends Component {
    constructor() {
        super();
        this.state = {
            loader: true
        }
        setTimeout(() => {
            this.setState({loader: false});
        }, 1000);
    }

    render() {
        const spinner  = <span><i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i></span>;
        return (
            <div>
                <Loader transitionConfig={transitionConfig} show={this.state.loader} message={spinner}>
                    <CustomTable></CustomTable>
                </Loader>

            </div>
        );
    }
}

export default Home;