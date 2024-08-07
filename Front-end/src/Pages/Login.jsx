import React from "react";
import './Login.css';
import { Link } from "react-router-dom";

function Login(){


    return(<>

    <div className="login-box">
    
    <div class = "login-header">
            <header>Login | MentorMate</header>
    </div>

    <div className="input-box">
    <input type="text" class="input-field" placeholder="Email" autocomplete="off" required/>
    </div>

    <div className="input-box">
        <input type="password" class="input-field" placeholder="Password" autocomplete="off" required/>
    </div>

    <div class="forgot">
            <section>
                <input type="checkbox" id="check"/>
                <label for="check">Remember me</label>
            </section>
            <section>
                <a href="Front-end\src\Pages\forgetPassward.jsx">Forgot password</a>
            </section>
    </div>

    <div class="input-submit">
            <button class="submit-btn" id="submit" onclick="redirectToHome()">Log In</button>
            <label for="submit">Log In</label>
            
    </div>

    <div class="sign-up-link">
            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
    </div>

    </div>

            </>);
}
export default Login;