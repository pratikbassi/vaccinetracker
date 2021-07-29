import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Vaccine Tracker</title>
                <meta name="description" content="A Vaccine Accepting Single Page Application"/>
                <meta charSet="UTF-8"/>
                <meta name="author" content="John Doe"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

            </Head>

            <main className={styles.main}>

            </main>

            <footer className={styles.footer}>

            </footer>
        </div>
    )
}
