import React, {Component} from 'react';
import axios from 'axios'
import './CustomTable.css'
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
// import CustomButton from './CustomButton';
import _, {debounce} from 'lodash';
import ReactTooltip from 'react-tooltip'

const styles = {
    propContainer: {
        width: 200,
        overflow: 'hidden',
        margin: '20px auto 0'
    },
    propToggleHeader: {
        margin: '20px auto 10px'
    }
};

class CustomTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            MoviesData: [],
            inputValue: ''
        }

        this.updatedMovies = debounce(function (inputValue) {
            axios
                .get('https://api.themoviedb.org/3/search/movie?api_key=0ca81b60e0ccb82d9e38665f13b044' +
                    'f5&query=' + inputValue)
                .then((response) => {
                    console.log('response', response.data.results)
                    this.setState({MoviesData: response.data.results})
                })
                .catch((error) => {
                    console.log(error);
                });
        }, 1000);

    }
    onUpdate = (event) => {
        this.setState({inputValue: event.target.value});
        this.updatedMovies(event.target.value);
        console.log('inputValue', event.target.value)
    }

    componentDidMount() {
        axios
            .get('https://api.themoviedb.org/3/movie/popular?api_key=5fa7c263ea0e33333004d3d6f7785' +
                '1bc')
            .then((response) => {
                console.log('response', response.data.results)
                this.setState({MoviesData: response.data.results})

            })
            .catch((error) => {
                console.log(error);
            })
    }
    getMovieDetail = () => {
        alert("dfd");
    }
    render() {
        return (
            <div className="content-area-inside">
                <div className="row tabs-level1">
                    <div className="ui-selectee">
                        <nav className="column">
                            <ul className="nav nav-tabs">
                                <span className="ulheading">Dashboard</span>
                            </ul>
                        </nav>
                    </div>

                </div>
                <div className="row">
                    <div className="row db-info shadow-btm"></div>
                </div>
                <div className="row content-wrapper">
                    <div className="col-xs-10 col-sm-9 col-md-10 col-lg-10 marginleft">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 content-wrapper">
                            <div className="col-xs-5 col-sm-5 col-md-4 col-lg-5">
                                <h1 className="title">Movies Details</h1>
                            </div>
                            <div className="col-xs-4 col-sm-4 col-md-5 col-lg-4 search-widget">
                                <form className="navbar-form">
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            type="text"
                                            value={this.state.inputValue}
                                            onChange={this.onUpdate}
                                            placeholder="Search for a movie, tv show, person..."/>
                                        <button className="btn btn-search" type="submit">
                                            <i className="fa fa-search sr"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <section className="margintop20 middle-wrapper">

                            <table className="example table  table-condensed cf">
                                <thead className="cf">
                                    <tr>
                                        <th>Id</th>
                                        <th>Title</th>
                                        <th>Release_date</th>
                                        <th>Overview</th>
                                        <th>Rate</th>
                                        <th>Popularity</th>
                                        <th>Vote</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this
                                        .state
                                        .MoviesData
                                        .map(function (item, i) {
                                            return <tr key={i}>
                                                <td>{item.id}</td>
                                                <td>{item.title}</td>
                                                <td>{item.release_date}</td>
                                                <td>{item.overview}</td>
                                                <td>{item.vote_average}</td>
                                                <td>{item.popularity}</td>
                                                <td>{item.vote_count}</td>
                                                <td>
                                                    <button
                                                        className="btn btn-info"
                                                        type="button"
                                                        value={item.id}
                                                        >
                                                        Details</button>
                                                </td>
                                            </tr>
                                        })
                                     }
                                </tbody>
                            </table>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

export default CustomTable;