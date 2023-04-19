import React from 'react'

function Login() {
    
    return (
        <div className='login'>
            <div className="container-fluid mt- 5 d-flex justify-content-center align-items-center">
                <div className="gap-3 border-3 border-creation">
                    <h2>Login Page</h2>
                    <form>

                        <label for="">Name:</label>
                        <input type="text" name="Enter Name" placeholder="Enter Your Name" id="name" required></input>
                        <p id="name-error"></p>

                        <label for="">Username:</label>
                        <input type="email" name="Enter Username" placeholder="Enter Your Username" id="username" required></input>
                        <p id="username-enter-error"></p>
                        <label for="">Password:</label>
                        <input type="password" name="Enter Password" placeholder="Enter Your Password" id="password" required></input>
                        <p id="password-error"></p>
                        <div className="gender">
                            <label for="">Gender:</label><br></br>
                            <input type="radio" value="male" name="gender" id="male" required></input>
                            <label for="male">male</label>
                            <input type="radio" value="male" name="gender" id="female" required></input>
                                <label for="female">female</label>
                                <p id="gender-error"></p>


                                <div className="check-box">
                                    <input type="checkbox" id="checkbox" required></input>
                                    <label for="checkbox">above given login details are true</label>
                                    <p id="checkbox-error"></p>
                                </div>

                                <button type="submit" className="btn btn-dark" onclick="login()">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login