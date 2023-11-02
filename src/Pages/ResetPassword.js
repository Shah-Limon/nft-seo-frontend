import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import auth from '../firebase.init';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [resetSent, setResetSent] = useState(false);

  const handleResetPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      setResetSent(true);
    } catch (error) {
      console.error('Error sending password reset email', error);
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      {resetSent ? (
        <p>Password reset email sent. Check your inbox.</p>
      ) : (
        <>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleResetPassword}>Send Reset Email</button>
        </>
      )}
    </div>
  );
};

export default ResetPassword;
