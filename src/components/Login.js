import React, { useState } from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
} from 'mdb-react-ui-kit';

function Login_1() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = () => {
    
    fetch('http://localhost:5000/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
      
        if (data.error) {
          setError(data.error);
        } else {
          window.location.href = '/#home';
        }
      })
      .catch(error => {
        console.error('Error:', error);
        setError('An error occurred. Please try again later.');
      });
  };

  return (
    <MDBContainer fluid className="p-3 my-5">
      <MDBRow>
        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Phone image" />
        </MDBCol>
        <MDBCol col='4' md='6'>
          <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" value={email} onChange={e => setEmail(e.target.value)} />
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" value={password} onChange={e => setPassword(e.target.value)} />
          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
          <MDBBtn className="mb-4 w-100" size="lg" onClick={handleSignIn}>Sign in</MDBBtn>
          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">OR</p>
          </div>
          <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: '#3b5998' }}>
            <MDBIcon fab icon="facebook-f" className="mx-2" />
            Continue with facebook
          </MDBBtn>
          <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: '#55acee' }}>
            <MDBIcon fab icon="twitter" className="mx-2" />
            Continue with twitter
          </MDBBtn>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login_1;