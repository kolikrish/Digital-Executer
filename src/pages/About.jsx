import Navbar from "../components/Navbar";
import AboutSection from "../components/About";
import AboutMission from "../components/AboutMission";
import FoundersNote from "../components/FoundersNote";
import Footer from "../components/Footer";
import FaQ from "../components/FaQ";

const About = () => {
  return (
    <main className="relative min-h-screen bg-background text-white selection:bg-primary selection:text-black overflow-x-hidden">
      <div
        className="fixed inset-0 z-50 pointer-events-none opacity-[0.02] mix-blend-overlay"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dbwbopuch/image/upload/v1759774934/noise_f7u1qf.png')",
        }}
      />

      <div className="fixed inset-0 blueprint-grid z-0 pointer-events-none opacity-10" />

      <div className="relative z-10 flex flex-col w-full bg-background shadow-[0_20px_40px_rgba(0,0,0,0.8)]">
        <Navbar />

        <div className="max-w-7xl mx-auto px-6 sm:px-12 mt-10">
          <AboutSection />
        </div>

        <AboutMission />

        <FoundersNote />

        <FaQ />

        <Footer />
      </div>
    </main>
  );
};

export default About;