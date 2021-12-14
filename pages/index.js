import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
<title>C2 Backup</title>
<meta name="description" content="Back up all your Windows devices to the cloud and never lose a file again.">

<meta property="og:url" content="https://backup.eu.c2test.synology.com/on-premises/endpoint/">
<meta property="og:type" content="website">
<meta property="og:title" content="C2 Backup">
<meta property="og:description" content="Back up all your Windows devices to the cloud and never lose a file again.">
<meta property="og:image" content="https://c2.synology.com/media/img/icon/backup@2x.png">

<meta name="twitter:card" content="summary_large_image">
<meta property="twitter:domain" content="">
<meta property="twitter:url" content="https://backup.eu.c2test.synology.com/on-premises/endpoint/">
<meta name="twitter:title" content="C2 Backup">
<meta name="twitter:description" content="Back up all your Windows devices to the cloud and never lose a file again.">
<meta name="twitter:image" content="https://c2.synology.com/media/img/icon/backup@2x.png">
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
