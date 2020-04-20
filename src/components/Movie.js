import React, {Component, Link} from 'react';

class Movie extends Component {
    render(){
        return(
            <div className="movie">
                <h4>{this.props.name}</h4>
                <a href={this.props.url}>IMDB site!</a>
            </div>
        )
    }
}

export default Movie;