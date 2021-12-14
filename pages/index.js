import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>C2 Backup</title>
        <meta property="og:url" content="https://happy-varahamihira-f67136.netlify.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="C2 Backup" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="https://happy-varahamihira-f67136.netlify.app/c2_backup_256.svg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
