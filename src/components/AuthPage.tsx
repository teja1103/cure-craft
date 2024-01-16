// AuthPage.tsx
import React, { useState } from 'react';
import './AuthPage.css'; // Add corresponding styles

interface AuthPageProps {}

enum AuthMode {
  Login,
  Signup,
}

const AuthPage: React.FC<AuthPageProps> = () => {
  const [authMode, setAuthMode] = useState<AuthMode>(AuthMode.Login);

  const toggleAuthMode = () => {
    setAuthMode((prevMode) =>
      prevMode === AuthMode.Login ? AuthMode.Signup : AuthMode.Login
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login or signup logic here based on authMode
  };

  return (
    <div className="auth-container">
      <div className={`auth-form ${authMode === AuthMode.Signup ? 'signup' : 'login'}`}>
        <h1>{authMode === AuthMode.Login ? 'Login' : 'Signup'}</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
            <br/>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" required />

          {authMode === AuthMode.Signup && (
            <div>
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input type="password" id="confirmPassword" required />
            </div>
          )}

          <button type="submit">{authMode === AuthMode.Login ? 'Login' : 'Signup'}</button>
        </form>
      </div>

      <div className="toggle-button-container">
        <button onClick={toggleAuthMode}>
          {authMode === AuthMode.Login ? 'Switch to Signup' : 'Switch to Login'}
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
