import React from "react";
import './Login.css';

function Login(){


    return(<>

    <div className="login-box">
    
    <div class = "login-header">
            <header>Login</header>
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
                <a href="forgetPassword.html">Forgot password</a>
            </section>
    </div>

    <div class="input-submit">
            <button class="submit-btn" id="submit" onclick="redirectToHome()">Sign In</button>
            <label for="submit">Sign In</label>
            
    </div>

    <div class="sign-up-link">
            <p>Don't have an account? <a href="signup.html">Sign Up</a></p>
    </div>

    </div>

    
        
        
            </>);
}
export default Login;