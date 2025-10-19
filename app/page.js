'use client'
import Navabar from "@/app/components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";


export default function Home() {
  return (
    <>
      <Navabar />
      <Header />
      <About />
      <Services />
    </>
  );
}
