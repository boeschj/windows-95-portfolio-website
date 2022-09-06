import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <h1>
        Jordan Boesch
      </h1>

      <main className={styles.main}>
        <div>
          about
        </div>
        <div>
          work
        </div>
        <div>
          skills
        </div>
        <div>
          projects
        </div>

      </main>

      <footer className={styles.footer}>
        <span className={styles.logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </footer>
    </div>
  )
}

export default Home
