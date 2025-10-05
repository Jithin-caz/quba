import Header from "./components/header";
import Footer from "./components/footer";
import AboutSection from "./components/about";
import ContactSection from "./components/contact";
import ServicesSection from "./components/services";
import { FlipWordsDemo } from "./components/hero3";

export default function Home() {
  return (
    <div className=" relative">
      <Header/>
      <FlipWordsDemo/>
      <AboutSection/>
      <ServicesSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}
