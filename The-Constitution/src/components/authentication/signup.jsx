import React from 'react';
import './style.css'
const Signup = () => {
  return (
    <div id='main-container' className="row mx-auto bg-secondary rounded-4" >
      <div className="d-none d-lg-block col-6">
        image
      </div>
      <div className='col-11 col-lg-5 d-flex align-items-center'>
        <form>
          <h1>Welcome!</h1>
          <div>
            <div className='d-flex mb-3'>
              <div className="me-3">
                <label htmlFor="exampleInputEmail1" className="form-label">FirstName</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
              </div>
              <div className="me-3">
                <label htmlFor="exampleInputEmail1" className="form-label">SureName</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" required />
            </div>

            <div className="mb-3 d-lg-flex justify-content-between align-items-center">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">I Agree to Terms & Conditions</label>
              </div>
            </div>

            <button type="submit" id='login-button' className="btn btn-primary">Log In</button>
          </div>

          <div className="my-3 d-block">
            <p className="text-center mb-3">OR</p>
            <button type="button" className="btn btn-primary mb-3 me-3">Log In with Google</button>
            <button type="button" className="btn btn-primary mb-3">Log In with Facebook</button>
          </div>
          <div className="">
            <p className='text-start'>Already have an account?<a href="/login" className="link-dark ms-3 text-decoration-none">Log In</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
