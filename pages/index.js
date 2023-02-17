import Head from "next/head";
import Main from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";


export default function Home() {
  return (
    <>
      <Head>
        <title>Chinonso | Frontend Developer</title>
        <meta name="description" content="I recreate designs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Main />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
