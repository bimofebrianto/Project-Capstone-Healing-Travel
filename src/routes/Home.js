import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import "../styles/Hero.css";
import Destination from "../components/Destination";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navigation />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
        tittle="Lets Your Explore The Best"
        text="Tentukan Perjalanan Terbaikmu Bersama Healing travel"
        buttonText="Travel"
        url="/service"
        btnClass="show"
      />
      <Destination />
      <Footer />
    </>
  );
}

export default Home;
