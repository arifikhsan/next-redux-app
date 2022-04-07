import Link from 'next/link';
import { useSelector } from 'react-redux';
import { getProfile } from '../store/profile-slice';

export default function Profile() {
  const profile = useSelector(getProfile);
  console.log(profile);
  return (
    <div>
      <h1>Profile is: {profile.name}</h1>
      <Link href="/">To home</Link>
    </div>
  );
}
