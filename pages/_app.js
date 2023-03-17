import { Montserrat } from "@next/font/google";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

const montserrat = Montserrat({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={montserrat.className}>
      <Navbar />
      <Component {...pageProps} />
    </main>
  );
}
