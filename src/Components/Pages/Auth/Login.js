import React, {useState} from 'react';
import './App.css'

const Login = (props) => {

    const[state, setState] = useState({
        username: "",
        password: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setState({
            ...state,
            [name]: value
        })
    } 

    const onRegister = (e) => {
        props.history.push('/register')
    }

    return (
        <div className="container mt-5">
            <h1>Log in</h1>
            <div className="row justify-content-center">
                <form onSubmit>
                    <div className="form-group">
                        <div className="input-group-prepend">
                        <input 
                            onChange={(e) => handleChange(e)}
                            value={state.username}
                            type="text" 
                            name="username" 
                            id="username" 
                            className="form-control" 
                            placeholder="Insert username"
                        />
                        </div>
                    </div>
                    <div className="form-group"> 
                        <input 
                            onChange={(e) => handleChange(e)}
                            value={state.password}
                            type="password" 
                            name="password" 
                            id="password" 
                            className="form-control" 
                            placeholder="Insert password"
                        />
                    </div>
                    <button className="btn btn-success">Login</button>
                    <div className="btn-group mt-3">
                        <button className="btn btn-danger button1">Forgot Password</button>
                        <button className="btn btn-primary button2" onClick={(e) => onRegister(e)}>Buat Akun</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;