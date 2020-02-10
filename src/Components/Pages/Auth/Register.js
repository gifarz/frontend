import React, {useState} from 'react';
import './App.css'

const Register = (props) => {

    const[state, setState] = useState({
        namaLengkap: "",
        username: "",
        email: "",
        nomorTelpon: "",
        password: "",
        confirmPassword: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setState({
            ...state,
            [name]: value
        })
    } 

    return (
        <div className="container mt-5">
            <h1>Sign Up</h1>
            <div className="row justify-content-center">
                <form onSubmit>
                    <div className="form-group">
                        <div className="input-group-prepend">
                        <input 
                            onChange={(e) => handleChange(e)}
                            value={state.namaLengkap}
                            type="text" 
                            name="namalengkap" 
                            id="namalengkap" 
                            className="form-control" 
                            placeholder="Nama lengkap"
                        />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group-prepend">
                        <input 
                            onChange={(e) => handleChange(e)}
                            value={state.username}
                            type="text" 
                            name="username" 
                            id="username" 
                            className="form-control" 
                            placeholder="Username"
                        />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group-prepend">
                        <input 
                            onChange={(e) => handleChange(e)}
                            value={state.email}
                            type="text" 
                            name="email" 
                            id="email" 
                            className="form-control" 
                            placeholder="Email"
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
                    <div className="form-group"> 
                        <input 
                            onChange={(e) => handleChange(e)}
                            value={state.confirmPassword}
                            type="password" 
                            name="confirmation password" 
                            id="confirmation password" 
                            className="form-control" 
                            placeholder="Confirmation password"
                        />
                    </div>
                    <button className="btn btn-success">Register</button>
                </form>
            </div>
        </div>
    )
}

export default Register;