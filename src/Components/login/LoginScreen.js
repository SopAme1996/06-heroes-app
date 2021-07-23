import React from 'react'
import { useDispatch } from "react-redux";
import { startWithGoogleAccount, startWithFacebookAccount } from "../../asincrono/authActionAsinc";

export const LoginScreen = () => {
  const dispatch = useDispatch();

  const handleLoginBtnAccount = (e) => {
    e.preventDefault();
    const btnType = e.target.id;

    if(btnType === 'google'){
      dispatch(startWithGoogleAccount());
    } else if (btnType === 'facebook') {
       dispatch(startWithFacebookAccount());
    }
  }

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100 ">
        <div className="card text-center container">
          <div className="card-header">
            <h1>Login</h1>
          </div>
          <div className="card-body d-flex flex-column">
            <button
              className="btn btn-block btn-social btn-google mb-2 d-flex justify-content-center align-items-center"
              onClick={handleLoginBtnAccount}
              id="google"
            >
              <span className="fa fa-google"></span> Sign in with Google
            </button>

            <button
              className="btn btn-block btn-social btn-facebook mb-2 d-flex justify-content-center align-items-center"
              onClick={handleLoginBtnAccount}
              id="facebook"
            >
              <span className="fa fa-facebook"></span> Sign in with Facebook
            </button>
          </div>
          <div className="card-footer text-muted">
            by: Luis Enrique Solis Puc
          </div>
        </div>
      </div>
    </>
  );
}


