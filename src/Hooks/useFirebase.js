import {getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged ,signOut,createUserWithEmailAndPassword,
  signInWithEmailAndPassword,updateProfile,sendEmailVerification} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebaseApp from "../Firebase/initializeAuth";


initializeFirebaseApp();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user,setUser] = useState({});
    const [name,setName]= useState('');
    const [error,setError] = useState('');

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [isLogin,setIsLogin] = useState(false);
    const auth = getAuth();
    
    const handleGoogleSignIn =()=>{
              
      signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        
        console.log(user);
       
      }).catch((error) => {
        setError(error.message);
       
      })

  }
  
  const toggleLogin = e => {
    setIsLogin(e.target.checked);
  }

  const handleNameChange = e => {
    setName(e.target.value);
  }
  const handleEmailChange = e => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = e => {
    setPassword(e.target.value)
  }
  const handleRegistration = e => {
    e.preventDefault();
    console.log(email, password);
    if (password.length < 6) {
      setError('Password Must be at least 6 characters long.')
      return;
    }
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError('Password Must contain 2 upper case');
      return;
    }

    if(isLogin) {
      processLogin(email, password);
    }
    else {
      registerNewUser(email, password);
    }

  }
  const handleLogin = e => {
    e.preventDefault();
    console.log(email, password);
    if (password.length < 6) {
      setError('Password Must be at least 6 characters long.')
      return;
    }
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError('Password Must contain 2 upper case');
      return;
    }

    
      processLogin(email, password);
    

  }
  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError('');
      })
      .catch(error => {
        setError(error.message);
      })
  }

  const registerNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError('');
        verifyEmail();
        setUserName();
      })
      .catch(error => {
        setError(error.message);
      })
  }

  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name })
      .then(result => { })
  }

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then(result => {
        console.log(result);
      })
  }


            useEffect(() => {
              onAuthStateChanged(auth, (user) => {
                if (user) {
                  
                  setUser(user);
                
                } else {
                  setError('');
                }
              });
            // eslint-disable-next-line react-hooks/exhaustive-deps
            },[]);

            const signOutUser =()=>{
              signOut(auth).then(() => {
                setUser('');
              }).catch((error) => {
                setError(error);
              });
            }

      return {signOutUser,handleLogin,handleGoogleSignIn,toggleLogin,handleNameChange,
        handleEmailChange,handlePasswordChange,handleRegistration,user,error}
        };



export default useFirebase;