import './App.css';
import React, { useState } from 'react';


function App2() {
    const [inputArr,
    setInputArr] = useState([])

    const [inputData,
    setInputData] = useState({
        name: "",
        review: ""})
 
        function changeHandle(e) {

            setInputData({
                ...inputData,
                [e.target.name]: e.target.value
            })

        }

        let {name, review} = inputData;
        function changeHandle() {
            setInputArr([
                ...inputArr, {
                    name,
                    review,
                }
            ])

            console.log(inputData)
            setInputData({name: "", review: ""})
        }
        let deleteHandle =(i)=>{
            let newDataArr=[...inputArr]
            newDataArr.splice(i,i)
            setInputArr(newDataArr)
        }

        return (
            <div>
                <input
                type="text"
                name='name'
                value={inputData.name}
                onChange={changeHandle}
                placeHolder="Enter Name"/>
               <input
               type="text"
               name='review'
               value={inputData.review}
               onChange={changeHandle}
               placeHolder="Review"/>

               <button onClick={changeHandle}>Enter
               </button><br/>
               <br/><br/>

               <table className='right' border={1} width="30%" cellPadding={10}>
                <tbody>
                    <tr>
                        <td>No</td>
                        <th>Name </th>
                        <th>Review</th>
                        <th>Remove</th>
                    </tr>
                    {inputArr.map((info, ind) => {
                        return (
                            <tr key={ind}>
                                <td>{ind +1}</td>
                                <td>{info.name}</td>
                                <td>{info.review}</td>
                                <td><button onClick={()=>deleteHandle(ind)}>Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
               </table>
            </div>
        );

}

export default App2;