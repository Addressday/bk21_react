/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';

class Login extends React.Component {
    render() {
        return (
            <div>

                {/* <!-- signup --> */}
                <section>

                    <hgroup>
                        <h2>Welcome back!</h2>
                        <p>Please enter your details to sign into your account</p>
                    </hgroup>

                    <form method="post" class="log-form">

                        <div class="group log-input">
                            <input type="text" id="username" name="username" placeholder="Username" />
                        </div>

                        <div class="group log-input">
                            <input type="password" id="password" name="password" placeholder="Password" />
                        </div>

                        <span class="check left-align">
                            <input type="checkbox" />
                            <label>Remember Me</label>
                        </span>

                        <a class="right-align" href="#">Forgot Password</a>

                        <br /><br />

                        <div class="container-log-btn">
                            <button type="submit" name="btn_submit" class="log-form-btn">
                                <span>Login</span>
                            </button>
                        </div>

                    </form>



                </section>

            </div>
        )
    }
}

export default Login;