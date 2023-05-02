import React from 'react';
import '../style.css';

function AuthField() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="auth-container">
        <div className="text-center font-bold text-2xl mb-8">MINIPOS</div>
        <div className="input-field">
          <label className="input-label" htmlFor="username">
            Username
          </label>
          <input className="input-text" type="text" name="username" id="username" />
        </div>
        <div className="input-field">
          <label className="input-label" htmlFor="password">
            Password
          </label>
          <input className="input-text" type="password" name="password" id="password" />
        </div>
        <button className="submit-btn">Sign In</button>
        <div className="register-text">Register instead</div>
      </div>
    </div>
  );
}

export default AuthField;
