import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Socials from "@/components/Socials";
import Contact from "@/components/Contact";
import Chatbot from "@/components/Chatbot";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Timeline />
      <Projects />
      <Services />
      <Socials />
      <Contact />
      <Chatbot />
      <Footer />
    </div>
  );
}
