import { client } from './client.js';

export function getUser() {
  return client.auth.session();
}

// signs an new user in and puts an auth token in local storage in the browser
export async function signUp(email, password) {
  const response = await client.auth.signUp({ email, password });

  return response.user;
}

// signs an existing user in and puts an auth token in local storage in the browser
export async function signIn(email, password) {
  const response = await client.auth.signIn({ email, password });

  return response.user;
}

// removes the token from local storage and redirects the user home
export async function logout() {
  await client.auth.signOut();

  return (window.location.href = '../');
}

export async function createResturant(resturant) {
  const response = await client.from('resturants').insert([resturant]);

  return response.body;
}

export async function getResturants() {
  const response = await client.from('resturants').select();

  return response.body;
}

export async function getResturantById(id) {
  const response = await client.from('resturants').select().match({ id }).single();

  return response.body;
}

export async function updateResturant(resturant) {
  const response = await client.from('resturants').update([resturant]).match({ id: resturant.id });
}
