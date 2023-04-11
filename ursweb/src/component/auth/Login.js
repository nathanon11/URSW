import React, { useState } from 'react';
import { Link, useNavigate, } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import bg from './pp.png'
import lg from './22.png'
import "./Login.css"
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };
 
  return (
    
    <body className='Login-bg'>
      <div className='right'>
      <div className="container  "  >
    <h4 className="Login-text " style={{fontSize:'40px',marginTop:'250px' ,marginRight:'475px'}}>Welcome </h4>
    <h5 className="Login-text" style={{fontSize:'15px' ,marginRight:'390px'}}>Sign In</h5>
      <form onSubmit={handleLogin} className="Login-text2 " style={{marginRight:'225px'}}>
      <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="email" class="validate"/>
          <label for="email">Email</label>
          <span class="helper-text" data-error="wrong" data-success="right" onChange={(e) => setEmail(e.target.value)}></span>
        </div>
      </div>
    </form>
  </div>
  <div class="row">
        <div class="input-field col s12">
          <input id="password" type="password" class="validate"onChange={(e) => setPassword(e.target.value)} />
          <label for="password">Password</label>
        </div>
        </div>
      
           
      </form>
      <button className="btn btn blue lighten-1 z-depth-1" style={{marginTop:'15px',color:'white',borderRadius:"20px"}}>Login</button>
            <div className=" red-text">
              {/* { authError ? <p>{authError}</p> : null } */}

            </div>
            <div className="text" style={{fontSize:'12px',marginTop:'25px',color:'gray'}}   >
               DON’T HAVE ACCOUNT?<a href="/signup">Sign up Now</a>
                </div>
    </div>
    </div>
</body>
  
   
   
  );
  
}

export default Login;