import Link from 'next/link';
import { useState } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { getProfile, setProfile } from '../store/profile-slice';
import { wrapper } from '../store/store';

export default function Home() {
  const profile = useSelector(getProfile);
  const dispatch = useDispatch()
  const store = useStore()
  const state = useState(store)
  
  const setProfilee = () => {
    dispatch(setProfile('Doeee ' + Math.random()));
  }
  
  const removeProfilee = () => {
    dispatch(setProfile(''));
  }
  
  return (
    <div>
      <h1>Welcome, {profile.name}</h1>
      <div>
        <button onClick={setProfilee}>set profile</button>
        <button onClick={removeProfilee}>remove profile</button>
      </div>
      <Link href='/profile'>To Profile</Link>
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    store.dispatch(setProfile('John Doe from server'));
    console.log(store.getState())
    return { props: {} };
  }
);
