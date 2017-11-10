import React, {Component} from 'react';
import axios from 'axios'
import './CustomTable.css'
// import CustomButton from './CustomButton';

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
            this.setState({MoviesData : response.data.results || []})

        })
        .catch((error) => {
            console.log(error);
        })
    }
    
    render(){
       

        return(
            <div>

           
                <table className="table table-bordered table-striped table-inverse">
                    <thead>
                         <tr>
                            <th>id</th>
                            <th>title</th>
                            <th>release_date</th>
                            <th>overview</th> 
                            <th>popularity</th>
                            <th>vote_count</th>
                            
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
                                 <td>{item.popularity}</td>
                                 <td>{item.vote_count}</td>
                                 
                                 </tr>
                             })
                         }
                     
                        </tbody>
                    </table>   
                  
          </div>
        );
    }
}

export default CustomTable;