import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { getProfile, setProfile } from '../store/profile-slice'
import { wrapper } from '../store/store'
import styles from '../styles/Home.module.css'

export default function Home() {
  const profile = useSelector(getProfile);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome, {profile.name}
        </h1>
        <Link href="/profile">To Profile</Link>
      </main>
    </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async (context) => {
  store.dispatch(setProfile('John Doe'))
  return { props: { } }
})
