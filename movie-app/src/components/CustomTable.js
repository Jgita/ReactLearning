import React, {Component} from 'react';
import axios from 'axios'
import './CustomTable.css'
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
// import CustomButton from './CustomButton';

const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
};

class CustomTable extends Component{
    constructor(props){
        super(props);
        this.state = {
            MoviesData : []
        }
    }

    componentWillMount(){
        console.log('componentWillMount');  
    }

    componentDidMount(){
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=5fa7c263ea0e33333004d3d6f77851bc')
        .then( (response) => {
            console.log('response',response.data.results)
            this.setState({MoviesData : response.data.results})

        })
        .catch((error) => {
            console.log(error);
        })
    }
    
    render(){
       

        return(
            <div>

           <div className="table-responsive"> 
                <table className="table table-bordered table-sm table-striped table-inverse table-condensed">
                    <thead>
                         <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Release_date</th>
                            <th>Overview</th> 
                            <th>Rate</th>
                            <th>Popularity</th>
                            <th>Vote</th>
                            
                        </tr>
                    </thead>
                         <tbody>
                         {
                             this.state.MoviesData.map(function(item, i){
                                 return <tr key={i}>
                                 <td>{item.id}</td>
                                 <td>{item.title}</td>
                                 <td>{item.release_date}</td>
                                 <td>{item.overview}</td>
                                 <td>{item.vote_average}</td>
                                 <td>{item.popularity}</td>
                                 <td>{item.vote_count}</td>
                                 
                                 </tr>
                             })
                         }
                     
                        </tbody>
                    </table>   
                  </div>
          </div>
        );
    }
}

export default CustomTable;