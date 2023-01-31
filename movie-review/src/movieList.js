import React, { Component } from 'react';
import './App.css';
import Star from "./StarRating";
import App2 from "./App2";

let movies = [
    { movieName: 'Frozen',
    imgSrc:
'https://th.bing.com/th/id/R.bbbbd1e60a187da2660f33179cde575b?rik=lpwmXQe%2bmJ%2bcSA&riu=http%3a%2f%2fis5.mzstatic.com%2fimage%2fthumb%2fVideo%2fv4%2fd2%2f0d%2f25%2fd20d2512-5b85-934b-7ded-1b24251afc27%2fsource%2f1200x630bb.jpg&ehk=jNO2%2fA7LrKcRzaybVw0994a1%2bjtlSq7eLH2HnRby%2f%2fA%3d&risl=&pid=ImgRaw&r=0',
     year: '2013',
     info: 'PG - 1h 48m'
},
    { 
        movieName: 'Tangled',
imgSrc:
'https://th.bing.com/th/id/OIP.xSIDKhVK4oJHyo6BrnusVgHaKU?pid=ImgDet&rs=1',
      year: '2010',
      info: 'PG  - 1h 40m'  
},
    { movieName: 'The Nightmare Before Christmas',
imgSrc:
'https://th.bing.com/th/id/OIP.tsPszxYQ2eEceIfGHCIOrQHaKb?pid=ImgDet&rs=1',
      year: '1993',
      info: 'PG - 1h 16m'
},
    { movieName: 'Toy Story',
imgSrc:
'https://th.bing.com/th/id/OIP.Ag4DNQTQk-NRAK2prSV0XgHaLH?pid=ImgDet&rs=1',
      year: '1995',
      info: 'G - 1h 21m'},

]

class MovieList extends Component {
    render() {
        return (
            <div className="mov">
                <h1>
                    Disney Movies <i></i>
                </h1>
                <ul> {movies.map((item, index)=>{
                    return(
                        <li className="line" key={index}>
                         <img src={item.imgSrc} alt='the images of the movie'/>
                            <h1>
                                {item.movieName}</h1>
                            <div>
                                 {item.info} </div>
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