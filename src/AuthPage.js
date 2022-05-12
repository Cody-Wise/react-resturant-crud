import React from 'react';
import { useState } from 'react';
import { signIn, signUp, getUser } from './services/fetch-utils';

export default function AuthPage({ setUser }) {
  const [{ email: signUpEmail, password: signUpPassword }, setSignUpFormData] = useState({
    email: '',
    password: '',
  });
  const [{ email: signInEmail, password: signInPassword }, setSignInFormData] = useState({
    email: '',
    password: '',
  });

  async function handleSignUp(e) {
    e.preventDefault();
    await signUp(signUpEmail, signUpPassword);

    const user = getUser();

    setUser(user);
  }

  async function handleSignIn(e) {
    e.preventDefault();
    await signIn(signInEmail, signInPassword);

    const user = getUser();

    setUser(user);
  }
  return (
    <div className="auth">
      <h1>Resturant Town</h1>
      <form onSubmit={handleSignUp}>
        <h4>Signup</h4>
        <label>
          Email
          <input
            value={signUpEmail}
            onChange={(e) =>
              setSignUpFormData({
                email: e.target.value,
                password: signUpPassword,
              })
            }
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={signUpPassword}
            onChange={(e) =>
              setSignUpFormData({
                email: signUpEmail,
                password: e.target.value,
              })
            }
          />
        </label>
        <button>Sign Up</button>
      </form>
      <form onSubmit={handleSignIn}>
        <h4>Signin</h4>
        <label>
          Email
          <input
            value={signInEmail}
            onChange={(e) =>
              setSignInFormData({
                email: e.target.value,
                password: signInPassword,
              })
            }
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={signInPassword}
            onChange={(e) =>
              setSignInFormData({
                email: signInEmail,
                password: e.target.value,
              })
            }
          />
        </label>
        <button>Sign In</button>
      </form>
    </div>
  );
}
