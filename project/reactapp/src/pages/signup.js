import React from "react";
import "../assets/styles/signup.css"

function Signup() {
    return(
    <div class="container">
        <h1>BitLearn Quiz Signup</h1>
        <form>
            <label for="text">Username</label>
            <input type="text" name="username" placeholder="Username" required />

            <label for="password">Password</label>
            <input type="password" name="password" placeholder="Password" required />

            <label for="email">Email</label>
            <input type="email" name="email" placeholder="Email" required />

            <label for="tel">Phone Number</label>
            <input type="tel" name="phone" placeholder="Phone Number" required />
            <input type="submit" value="Sign Up" />
        </form>
        <p>Registered?  
            <a href="/">Login here!</a>
        </p>
    </div>
    );
}

export default Signup;