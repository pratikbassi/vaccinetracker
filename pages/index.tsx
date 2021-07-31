import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Main from '../components/main'
import Footer from '../components/footer'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Vaccine Tracker</title>
                <meta name="description" content="A Vaccine Accepting Single Page Application"/>
                <meta charSet="UTF-8"/>
                <meta name="author" content="John Doe"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>

            <Header/>

            <Main/>

            <Footer/>
        </div>
    )
}
