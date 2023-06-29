import React from 'react';

export default class LoginForm extends React.Component {
    render () {
        return (
        <div className='loginForm'>
            <form>
                <h3>Log In</h3>
                <div className="form-group">
                    <label htmlFor="uName">User Name:</label><br></br>
                    <input type="text" className="form-control" id="uName"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="passwd">Password:</label><br></br>
                    <input type="password" className="form-control" id="passwd"></input>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        )
    }
};