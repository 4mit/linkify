import Head from "next/head";
import Dashboard from "./components/dashboard/index";
import TopNav from "./components/header/index";
export default function Home() {
  return (
    <div>
      <Head>
        <title>My Links</title>
        <meta name="description" content="My one place bookmark page" />
        <meta
          name="keywords"
          content="bemetara, bemetara vibhag, dharmendra, sarkari, amit soni"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Dashboard />
      <footer></footer>
    </div>
  );
}
