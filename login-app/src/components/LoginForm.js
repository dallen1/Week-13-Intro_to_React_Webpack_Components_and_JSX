import React from 'react';

export default class LoginForm extends React.Component {
    render () {
        return (
        <div className='loginForm'>
            <form>
                <h3>Log In</h3>
                <div className="form-group">
                    <label htmlFor="uname">User Name:</label><br></br>
                    <input type="text" id="uname"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="passwd">Password:</label><br></br>
                    <input type="password" id="passwd"></input>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
        )
    }
};