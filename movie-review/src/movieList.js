import React, { Component } from 'react';
import './App.css';

import Star from "./stars";
import App2 from "./App2";



// export default class MovieList extends React.Component {

//     render() {
//         let movies = [
//         { movieName: 'Frozen' },
//         { movieName: 'Tangled' },
//         { movieName: 'The Nightmare Before Christmas' },
//         { movieName: 'Toy Story' },
//         { movieName: 'Aladdin' },
//                 ]
//                 return (
//                     <div>
//                         {movies.map((movie, index) => {
//                             return <Movie key={index} movie={movie} />
//                         })}
//                     </div>
//                 );
//     }
// }

class MovieList extends Component {
    render() {
        return (
            <div className="mov">
                <h1>
                    Horror Movies <i></i>
                </h1>
                <ul> {List.map((item, index)=>{
                    return(
                        <li className="line" key={index}>
                            <img src="https://townsquare.media/site/442/files/2015/10/besthorrormovies2.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89" alt='the images of the movie'/>
                            <h1>{item.title},{item.year}</h1>
                            <div> {item.info} </div>
                            <Star />
                            <App2 />
                        </li>
                    )
                })}

                </ul>
            </div>
        )
    }
}

export default MovieList