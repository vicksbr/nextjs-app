import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Button from '@material-ui/core/Button';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Babylon App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="/">Babylon</a>
        </h1>
        <br></br><br></br>
        <Button variant="contained" href="#" onClick={() => alert("SOON")}>KNOW MORE</Button> 
      </main>
      <footer className={styles.footer}>
        Powered by Babylon 
      </footer>
    </div>
  )
}
