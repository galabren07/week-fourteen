import React from 'react';



export default class Login extends React.Component {
    render () {
        return (
            <div class="Login">
                <h3>Log In</h3>
                <input placeholder="userNama"></input>
                <input placeholder="password"></input>
                <button>Submit</button>
                
            </div>
        );
    }
}
