import React from 'react';
import { useState } from 'react';
import { signIn, signUp, getUser } from './services/fetch-utils';

export default function AuthPage({ setUser }) {
  const [{ email: signUpEmail, password: signUpPassword }, setSignUpFormDate] = useState({
    email: '',
    password: '',
  });
  const [{ email: signInEmail, password: signInPassword }, setSignInFormData] = useState({
    email: '',
    password: '',
  });

  async function handleSignUp() {}

  async function handleSignIn() {}
  return <div>AuthPage</div>;
}
