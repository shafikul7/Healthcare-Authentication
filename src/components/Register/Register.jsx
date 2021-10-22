import React from 'react';
import useFirebase from '../../Hooks/useFirebase';
const Register = () => {
   
      
    const {handleRegistration,handleEmailChange,handlePasswordChange,
        handleGoogleSignIn,isLogin,error,handleNameChange}=useFirebase();
        
    return (
        
        <div className="login">
        <div className="container">
        <div className="row">
        <div className="col-md-8 mx-auto login-bg">
        <div className="col-md-8 mx-auto form-st">
        <form onSubmit={handleRegistration}>
        <h3 className="text-white">Please {isLogin? 'Login' : 'Register'}</h3>
        {!isLogin && <div className="row mb-3">
          <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10">
            <input type="text" onBlur={handleNameChange} className="form-control" id="inputName" placeholder="Your Name" />
          </div>
        </div>}
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" placeholder="Email" required />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input placeholder="password" type="password" onBlur={handlePasswordChange} className="form-control" id="inputPassword3" required />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
          <div className="form-check">
                <a href="/login">Already Registered?</a>
            </div>
          </div>
        </div>
        <div className="row mb-3 text-danger">{error}</div>
        <button type="submit" className="btn btn-primary">
          {isLogin? 'Login' : 'Register'}
        </button>
      </form>
      <br /><br /><br />
      <button onClick={handleGoogleSignIn} className="btn btn-success">Google Sign In</button>
        </div>
        </div>
        </div>
        </div>
        </div>
       
    );
};

export default Register;