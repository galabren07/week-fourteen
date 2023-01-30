import React from 'react';




export default class Movie extends React.Component {
    render() {
        return(
            <div>
                <h3>{this.props.movie.movieName}</h3>
            </div>
        );
    }
}