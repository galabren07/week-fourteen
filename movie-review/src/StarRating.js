import React, { useState } from "react";
import './App.css'
import { FaStar } from 'react-icons/fa';

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