import React, { useState } from "react";
import './App.css'
import { FaStar } from 'react-icons/fa';




// function Sar
//  ({yellow}) {
//     return (
//         <svg className={yellow ? 'yellowStar' : ''} width="24" height="24"  src="https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/1542681/4531/4008/m1/fpnw/wm1/star-18-.jpg?1470822121&s=8482c797df800829ac14686afab712d6"></svg>
//     )
// }

// function Star () {
//     const [hoverIndex, setHoverIndex] = useState(0);
//     const [rating, setRating] = useState(0);

//     return (
//         <div className='mov'>
//             <h2>Rate:</h2>
//             <ul className='starList'>
//                 {[1,2,3,4,5].map((index) => {

//                     return (
//                         <li key={index}
//                         onMouseEnter={() => setHoverIndex(index)}
//                         onMouseLeave={() => setHoverIndex(0)}
//                         onClick={() => setRating(index)}
//                         className='starListItem'>
//                             <Sar yellow={(index <= hoverIndex) || (index <= rating)}/>
//                             <FaStar size={50} />
//                         </li>
//                     )
//                 })}
//             </ul>

//         </div>
//     )
// }
const StarRating = () => {
  
    
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    return (
        <div className ="mov">
            {[ ...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
              
                return (
                    <label key={i}>
                        <input 
                        type="radio" 
                        name="rating" 
                        value={ratingValue} 
                        onClick={() => setRating(ratingValue)}
                        
                        />
                        <FaStar 
                        className="star" 
                        color={ratingValue < (hover || rating) ? "#ffc107" : "#e4e5e9"} 
                        size={75}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)}
                        />
                    </label>
                );
            })}
            <p>The Rating is {rating}.</p>
        </div>
    );
};


export default StarRating;