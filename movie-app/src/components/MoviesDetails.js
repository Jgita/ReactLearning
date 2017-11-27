import React, {Component} from 'react';
import axios from 'axios';
import './MovieDetails.css';
import './CustomTable.css';
import Loader from 'react-loader-advanced';
import './Loader.css'

const transitionConfig = {
    transitionName: 'fadeTransition',
    transitionEnterTimeout: 300,
    transitionLeaveTimeout: 300
};

class MoviesDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movieId: localStorage.getItem('movieid'),
            MoviesData: [],
            loader: true,
            MoviesActor: [],
            MoviesDirector: '',
            MoviesWriter: '',
            Production: '',
            Music: ''
        }

        setTimeout(() => {
            this.setState({loader: false});
        }, 500);
    }

    componentDidMount() {
        axios
            .get('https://api.themoviedb.org/3/movie/' + this.state.movieId + '?api_key=0ca81b60e0ccb82d9e38665f13b044f5')
            .then((response) => {
                this.setState({MoviesData: response.data})
                console.log('MoviesData', response.data)
            })
            .catch((error) => {
                console.log(error);
            });

        axios
            .get('http://api.themoviedb.org/3/movie/' + this.state.movieId + '/casts?api_key=0ca81b60e0ccb82d9e38665f13b044f5')
            .then((resp) => {

                this.setState({MoviesActor: resp.data, MoviesDirector: resp.data.crew["0"].name, MoviesWriter: resp.data.crew[1].name, Production: resp.data.crew[4].name, Music: resp.data.crew[33].name})

                console.log('resp.data', resp.data)

            })
            .catch((error) => {
                console.log(error)
            })

    }

    render() {
        const spinner = <span>
            <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
        </span>;
        return (
            <div>
                <div className="row tabs-level1">
                    <div className="ui-selectee">
                        <nav className="column">
                            <ul className="nav nav-tabs">
                                <span className="ulheading">More Information</span>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 content-wrapper">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 barpaddingtop">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 paddingright">
                                        <Loader
                                            transitionConfig={transitionConfig}
                                            show={this.state.loader}
                                            message={spinner}>
                                            <div
                                                className="row middle-wrapper"
                                                style={{
                                                'height': 'auto',
                                                'background': '#f4f3ef'
                                            }}>

                                                <div
                                                    className=" col-xs-2 col-sm-2 col-md-2 col-lg-2 paddingtopbar"
                                                    style={{
                                                    'height': '500px'
                                                }}>
                                                    <img
                                                        alt="Not Found"
                                                        height='300px'
                                                        src={"http://image.tmdb.org/t/p/w185/" + this.state.MoviesData.poster_path}/>
                                                </div>
                                                <div className=" col-xs-6 col-sm-6 col-md-6 col-lg-6 paddingtopbar">
                                                    <h1 className="details-title">{this.state.MoviesData.title}</h1>
                                                </div>
                                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 paddingtopbar fontStyle">
                                                    <strong>Director:</strong>&nbsp; &nbsp;{this.state.MoviesDirector}
                                                </div>

                                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 paddingtopbar fontStyle">
                                                    <strong>Writer:</strong>&nbsp; &nbsp;{this.state.MoviesWriter}
                                                </div>

                                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 paddingtopbar fontStyle">
                                                    <strong>Production:</strong>&nbsp; &nbsp;{this.state.Production}
                                                </div>

                                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 paddingtopbar fontStyle">
                                                    <strong>Music:</strong>&nbsp; &nbsp;{this.state.Music}
                                                </div>

                                                <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 paddingtopbar fontStyle">
                                                    <strong>Overview:</strong>&nbsp; &nbsp;{this.state.MoviesData.overview}
                                                </div>

                                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 paddingtopbar fontStyle">
                                                    <strong>Release Date:</strong>&nbsp; &nbsp;{this.state.MoviesData.release_date}
                                                </div>

                                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 paddingtopbar fontStyle">
                                                    <strong>Vote Count:</strong>&nbsp; &nbsp;{this.state.MoviesData.vote_count}
                                                </div>

                                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 paddingtopbar fontStyle">
                                                    <strong>Budget:</strong>&nbsp; &nbsp;{this.state.MoviesData.budget}
                                                </div>

                                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 paddingtopbar fontStyle">
                                                    <strong>Status:</strong>&nbsp; &nbsp;{this.state.MoviesData.status}
                                                </div>

                                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 paddingtopbar fontStyle">
                                                    <strong>Vote Average:</strong>&nbsp; &nbsp;{this.state.MoviesData.vote_average}
                                                </div>

                                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 paddingtopbar fontStyle">
                                                    <strong>Home Page:</strong>&nbsp; &nbsp;<a href="#">{this.state.MoviesData.homepage}</a>
                                                </div>

                                            </div>
                                        </Loader>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MoviesDetails;