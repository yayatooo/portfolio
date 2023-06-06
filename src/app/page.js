import Hero from "./pages/Hero";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function Home() {
  return (
    <main className="w-full bg-black-primary">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
