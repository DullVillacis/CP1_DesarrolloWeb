import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Features from "./components/Features";
import CTA from "./components/CTA";
import Pricing from "./components/Pricing";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import DesignSystem from "./components/DesignSystem";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <CTA />
        <Pricing />
        <ContactForm />
      </main>
      <Footer />
      <DesignSystem />
    </>
  );
}

export default App;
