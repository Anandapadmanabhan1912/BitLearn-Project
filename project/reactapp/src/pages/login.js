import React from "react";
import "../assets/styles/login.css"

function Login() {

    return(
        <div class="container">
        <h1>Login to BitLearn Quiz</h1>
        <form action="login.php" method="post">
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" required />
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required />
            </div>
            <div class="form-group">
                <button type="submit">Login</button>
            </div>
        </form>
        <p>New user? 
            <a href="/signup">Sign up here!</a>
        </p>
    </div>
    );
}

export default Login;