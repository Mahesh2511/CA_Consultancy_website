import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Gauri CA Consultancy</title>
        <meta name="description" content="Expert Chartered Accountancy services for individuals and businesses. Specializing in ITR, GST, and financial consulting." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}