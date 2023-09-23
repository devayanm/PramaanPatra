import React from 'react'

function SignIn() {
  return (
    <div>
        <section className="Form my-4 mx-5">
        <div className="container container1">
            <div className="row">
                <div className="col-lg-4 leftgrid">
                    <img src="Rectangle 7.jpg" className="img-fluid signupimg" alt="" />
                    <div className="divbtn2">
                        <button className="btn2">SignUp</button>
                    </div>
                </div>
                <div className="col-lg-8  px-5 pt-5">

                    <h1 className="mb-5 singinhead">Sign In</h1>
                    <form>
                        <div className="form-row">

                            <div className="col-lg-8">
                                <label>Email</label>
                                <input type="email" placeholder="Email-Address" id="email" className="form-control mb-3" />

                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-lg-8">
                                <label>Password</label>
                                <input type="password" placeholder="Password" className="form-control mb-3" />
                            </div>
                        </div>
                        <div className="divanch"><a href="#">Forgot Your Password?</a></div>

                        <div className="form-row mt-1">
                            <div className="col-lg-9 divbtn1">
                                <button type="button" className="btn1">Login</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default SignIn