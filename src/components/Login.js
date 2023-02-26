import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

    //React States
    const [errorMessage, setErrorMessage] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    let navigate = useNavigate();

    //Login Info
    const database = [{
        username: "user1",
        password: "pass1"
    }, {
        username: "user2",
        password: "pass2"
    }];

    const errors = {
        uname: "Invalid username",
        pass: "Invalid password"
    }

    const handleSubmit = () => {
        var { uname, pass } = document.forms[0];
        const userData = database.find((user) => user.username == uname.value);

        if (userData) {
            if (userData.password !== pass.value) {
                setErrorMessage({ name: "pass", message: errors.pass })
            } else {
                setIsSubmitted(true);
            }
        } else {
            setErrorMessage({ name: "uname", message: errors.uname });
        }


    }

    const renderErrorMessage = (name) => {
        name === errorMessage.name && (<div className="error">{errorMessage.message}</div>)
    }

    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>UserName</label>
                    <input type="text" name="uname" required />
                    {renderErrorMessage("uname")}
                </div>

                <div className="input-container">
                    <label>Password</label>
                    <input type="password" name="pass" required />
                    {renderErrorMessage("uname")}
                </div>

                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
        </div>
    )




    return (<div className="app">
        <div className="login-form">
            <div className="title">
                Login
            </div>
            {isSubmitted ? navigate("/home") : renderForm}
        </div>
    </div>)
}