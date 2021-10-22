import React from 'react';
import useFirebase from '../../Hooks/useFirebase';
import './Login.css';

const Login = () => {
    const {handleLogin,handleEmailChange,handlePasswordChange,
        handleGoogleSignIn,error}=useFirebase();
    return (
        
        <div className="login">
        <div className="container">
        <div className="row">
        <div className="col-md-8 mx-auto login-bg">
        <div className="col-md-8 mx-auto form-st">
        <form onSubmit={handleLogin}>
        <h3 className="text-white">Please Login</h3>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input placeholder="email"   onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
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
                <a href="/register">Registered?New user</a>
            </div>
          </div>
        </div>
        <div className="row mb-3 text-danger">{error}</div>
        <button type="submit" className="btn btn-primary">
          Login
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

export default Login;

































// import useFirebase from '../../Hooks/useFirebase';
// import './Login.css';
// const Login = () => {
//     const {loginWithGoogle,user,error,signOutUser,handlePasswordChange,handleRegistration,handleEmailChange}=useFirebase();
    
//     return (
//         <div className="login">
//         <div className="container">
//         <div className="row ">
//     <div className="col-md-4">
//     <div className="">
//     <h2 className="text-center card-head">User Profile Details</h2>

//         <div className="card-profile">
//         <img src={user?.photoURL} alt="profile-img" />
//         <h1>{user?.displayName}</h1>
//         <p className="title-profile">{user?.email}</p>
//         <p><button onClick={signOutUser}>Contact</button></p>
//         </div>

//     </div>
//     </div>
//         <div className="col-md-2 "></div>
//         <div className="col-md-6 ">
//         <div className="card">
//             <div className="login-box">
//                 <div className="login-snip"> <input id="tab-1" type="radio" name="tab" className="sign-in" checked/><label for="tab-1" className="tab">Login</label> <input id="tab-2" type="radio" name="tab" className="sign-up"/><label for="tab-2" className="tab">Sign Up</label>
//                     <div className="login-space">
//                     <form onSubmit={handleRegistration}>
//                         <div className="login">
//                             <div className="group"> 
//                             <label for="user4" className="label">Username</label> 
//                             <input onBlur={handleEmailChange} id="user1" type="email" className="input" placeholder="Enter your username or email"/> 
//                             </div>
//                             <div className="group"> 
//                             <label onBlur={handlePasswordChange} required  for="pass3" className="label">Password</label>
//                              <input id="pass2" type="password" className="input" data-type="password" placeholder="Enter your password"  /> 
//                              </div>
//                             <div className="group">
//                                  <input id="check" type="checkbox" className="check" checked/> <label for="check"><span className="icon"></span> Keep me Signed in</label> 
//                                  </div>
//                                  <h5 className="text-center text-danger">{error}</h5>
//                             <div  className="group"> <input type="submit" className="button" value="Sign IN"/> 
//                             </div>
//                             <div className="hs_Login_social">
//                                 <ul>
//               <button onClick={loginWithGoogle} className="btn btn-success m-4"><span><i className="fa fa-google"></i></span> Google</button>
//               <button  className="btn btn-success"><span><i className="fa fa-github"></i></span> Github</button>
                                  
//                                 </ul>
//                             </div>
//                             <div className="foot"> <a href="/">Forgot Password?</a> </div>
//                         </div>
//                         </form>
//                         <div className="sign-up-form">
//                             <div className="group"> <label for="user5" className="label">Username</label> 
//                             <input id="user" type="text" className="input" placeholder="Create your Username"/> 
//                             </div>
//                             <div className="group"> <label for="pass6" className="label">Password</label> 
//                             <input  id="pass" type="password" className="input" data-type="password" placeholder="Create your password"/> 
//                             </div>
//                             <div className="group"> <label for="pass7" className="label">Repeat Password</label> <input id="pass" type="password" className="input" data-type="password" placeholder="Repeat your password"/> </div>
//                             <div className="group"> <label for="pass8" className="label">Email Address</label> <input id="pass9" type="text" className="input" placeholder="Enter your email address"/> </div>
//                             <div className="group"> <input type="submit" className="button" value="Sign Up"/> </div>
//                             <div className="hr"></div>
//                             <div className="foot"> <label for="tab-1">Already Member?</label> </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>

//         </div>
//         </div>
//         </div>
        
//     );
// };

// export default Login;