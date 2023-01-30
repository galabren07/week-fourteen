import React from "react";
import './App.css'
import App2 from "./App2";

function Sar ({yellow}) {
    return (
        <svg className={yellow ? 'yellowStar' : ''} width="24" height="24" img src="https://www.bing.com/th?id=OIP.YObvJxVXFWvYTwDolWwb1wHaHD&pid=3.1&cb=&w=300&h=300&p=0"></svg>
    )
}

function Star () {
    const [hoverIndex, setHoverIndex] = useState(0);
    const [rating, setRating] = useState(0);

    return (
        <div className='mov'>
            <h2>Rate:</h2>
            <ul className='starList'>
                {[1,2,3,4,5].map((index) => {

                    return (
                        <li key={index}
                        onMouseEnter={() => setHoverIndex(index)}
                        onMouseLeave={() => setHoverIndex(0)}
                        onClick={() => setRating(index)}
                        className='starListItem'>
                            <Sar yellow={(index <= hoverIndex) || (index <= rating)}/>
                        </li>
                    )
                })}
            </ul>

        </div>
    )
}
export default Star;