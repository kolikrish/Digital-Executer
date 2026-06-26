import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ClientMarquee from "./components/ClientMarquee";
import About from "./components/About";
import Services from "./components/Services";
// import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Team from "./components/Team";

function App() {
  return (
    <main className="relative min-h-screen bg-background text-white selection:bg-primary selection:text-black overflow-x-hidden">
      
      {/* Noise Overlay Layer */}
      <div 
        className="fixed inset-0 z-50 pointer-events-none opacity-[0.02] mix-blend-overlay"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dbwbopuch/image/upload/v1759774934/noise_f7u1qf.png')"
        }}
      ></div>

      {/* Global Backdrop Blueprint Grid */}
      <div className="fixed inset-0 blueprint-grid z-0 pointer-events-none opacity-10"></div>

      {/* Core Landing Page Content Layers */}
      <div className="relative z-10 flex flex-col w-full bg-background shadow-[0_20px_40px_rgba(0,0,0,0.8)]">
        <Navbar />
        <Hero />
        <ClientMarquee />
        <About />
        <Services />
        {/* <Projects /> */}
        <Testimonials />
        <Team />
        <Contact />
      </div>

    </main>
  );
}

export default App;