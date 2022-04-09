import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile, setProfile } from '../store/profile-slice';

export default function Profile() {
  const profile = useSelector(getProfile);
  const dispatch = useDispatch();
  
  const setProfilee = () => {
    dispatch(setProfile('Doel from profile ' + Math.random()));
    console.log(profile)
  }
  return (
    <div>
      <h1>Profile is: {profile.name}</h1>
      <div>
        <button onClick={setProfilee}>set profile</button>
      </div>
      <Link href="/">To home</Link>
    </div>
  );
}
