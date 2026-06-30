import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    inquiryType: "General Inquiry",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        inquiryType: "General Inquiry",
        message: "",
      });
      // Reset success state after a few seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 800);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <main className="relative min-h-screen bg-background text-white selection:bg-primary selection:text-black overflow-x-hidden">
      {/* Noise Overlay Layer */}
      <div
        className="fixed inset-0 z-50 pointer-events-none opacity-[0.02] mix-blend-overlay"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dbwbopuch/image/upload/v1759774934/noise_f7u1qf.png')",
        }}
      />

      {/* Global Backdrop Blueprint Grid */}
      <div className="fixed inset-0 blueprint-grid z-0 pointer-events-none opacity-10" />

      {/* Main Container */}
      <div className="relative z-10 flex flex-col w-full bg-background shadow-[0_20px_40px_rgba(0,0,0,0.8)]">
        <Navbar />

        {/* Page Spacer */}
        <div className="h-24 sm:h-28"></div>

        {/* Contact Page Content */}
        <section className="w-full max-w-7xl mx-auto px-6 sm:px-12 py-12 md:py-16 border-x-2 border-hairline-strong bg-background relative">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] items-stretch">
            {/* Left Panel: Operating Hours & Socials */}
            <div className="rounded-[2rem] border border-hairline bg-[#0c0c0c]/80 backdrop-blur-xl p-8 sm:p-10 flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.2)]">
              <div>
                <h3 className="text-2xl font-display text-white mb-8 border-b border-hairline-strong pb-4">
                  Operating Hours
                </h3>
                
                <div className="space-y-6 mb-12">
                  <div className="flex justify-between items-center py-2 border-b border-hairline">
                    <span className="text-sm font-[poppins] text-[#888]">Monday - Saturday</span>
                    <span className="text-sm font-medium text-white font-mono">24 Hours</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-hairline">
                    <span className="text-sm font-[poppins] text-[#888]">Weekend Support</span>
                    <span className="text-sm font-semibold text-primary font-mono tracking-wider">
                      Emergency Only
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-[10px] uppercase tracking-[0.25em] text-[#666] mb-4 font-mono font-bold">
                  Connect with us
                </h4>
                <div className="flex gap-4">
                  {/* LinkedIn */}
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-hairline-strong hover:border-primary/50 bg-background flex items-center justify-center text-[#888] hover:text-primary transition-all duration-300 hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <svg
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  {/* Twitter/X */}
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-hairline-strong hover:border-primary/50 bg-background flex items-center justify-center text-[#888] hover:text-primary transition-all duration-300 hover:scale-110"
                    aria-label="Twitter"
                  >
                    <svg
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  {/* Instagram */}
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-hairline-strong hover:border-primary/50 bg-background flex items-center justify-center text-[#888] hover:text-primary transition-all duration-300 hover:scale-110"
                    aria-label="Instagram"
                  >
                    <svg
                      className="w-4 h-4 fill-none stroke-current"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Panel: Send us a message form */}
            <div className="rounded-[2rem] border border-hairline bg-[#0c0c0c]/85 backdrop-blur-xl p-8 sm:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.2)]">
              <h3 className="text-3xl font-display text-white mb-6">
                Send us a message
              </h3>

              {isSubmitted ? (
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center animate-fade-in my-8">
                  <svg
                    className="w-12 h-12 text-primary mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <h4 className="text-lg font-medium text-white mb-2">Message Sent!</h4>
                  <p className="text-sm font-[poppins] text-[#888]">
                    Thank you for reaching out. We will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="text-[11px] uppercase tracking-wider text-[#777] font-mono mb-2 block font-semibold">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        placeholder="John"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full bg-background border border-hairline focus:border-primary/50 text-white rounded-lg px-4 py-3 text-sm transition-all focus:outline-none focus:ring-1 focus:ring-primary/25 placeholder-white/20"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] uppercase tracking-wider text-[#777] font-mono mb-2 block font-semibold">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full bg-background border border-hairline focus:border-primary/50 text-white rounded-lg px-4 py-3 text-sm transition-all focus:outline-none focus:ring-1 focus:ring-primary/25 placeholder-white/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-[#777] font-mono mb-2 block font-semibold">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-background border border-hairline focus:border-primary/50 text-white rounded-lg px-4 py-3 text-sm transition-all focus:outline-none focus:ring-1 focus:ring-primary/25 placeholder-white/20"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-[#777] font-mono mb-2 block font-semibold">
                      What can we help you with?
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="w-full bg-background border border-hairline focus:border-primary/50 text-white rounded-lg px-4 py-3 text-sm transition-all focus:outline-none focus:ring-1 focus:ring-primary/25 appearance-none cursor-pointer"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Technical Execution">Technical Execution</option>
                      <option value="Consulting & Strategy">Consulting & Strategy</option>
                      <option value="Partnership Proposal">Partnership Proposal</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-[#777] font-mono mb-2 block font-semibold">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows="4"
                      placeholder="Tell us about your project or needs..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-background border border-hairline focus:border-primary/50 text-white rounded-lg px-4 py-3 text-sm transition-all focus:outline-none focus:ring-1 focus:ring-primary/25 placeholder-white/20 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="relative z-10 w-full sm:w-auto bg-primary hover:bg-transparent text-black hover:text-primary border border-primary font-mono font-bold uppercase tracking-[0.2em] text-[10px] md:text-[11px] px-8 py-3.5 rounded-full inline-flex items-center justify-center gap-2 transition-all cursor-pointer shadow-[0_0_15px_rgba(255,77,0,0.15)] hover:shadow-[0_0_20px_rgba(255,77,0,0.25)]"
                  >
                    Send Message
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Partnership / Brand Trust Showcase Section */}
        <section className="w-full max-w-7xl mx-auto px-6 sm:px-12 py-16 md:py-24 border-x-2 border-hairline-strong border-t bg-background flex flex-col items-center justify-center">
          <div className="w-full flex flex-col items-center">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-4.5xl font-display font-medium text-[#888] tracking-tight heading-gradient">
                We impact the world in partnership with
              </h2>
            </div>

            {/* Partner Brand Logos Grid */}
            <div className="w-full max-w-5xl flex items-center justify-center">
              <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-10 gap-x-6 justify-center items-center opacity-70">
                {/* Sinch */}
                <div className="flex items-center justify-center gap-2 text-white/60 hover:text-white transition-colors duration-300 font-sans font-bold tracking-tight text-lg">
                  <span>sinch</span>
                </div>

                {/* Cohere */}
                <div className="flex items-center justify-center gap-2 text-white/60 hover:text-white transition-colors duration-300 font-sans font-bold tracking-tight text-lg">
                  <span>cohere</span>
                </div>

                {/* Chatfuel */}
                <div className="flex items-center justify-center gap-1 text-white/60 hover:text-white transition-colors duration-300 font-sans font-extrabold tracking-tight text-lg">
                  <span>chatfuel</span>
                </div>

                {/* Google Cloud */}
                <div className="flex items-center justify-center gap-2 text-white/60 hover:text-white transition-colors duration-300 font-sans font-semibold tracking-tight text-[15px]">
                  <span>Google Cloud</span>
                </div>

                {/* Botpress */}
                <div className="flex items-center justify-center gap-2 text-white/60 hover:text-white transition-colors duration-300 font-sans font-bold tracking-tight text-lg">
                  <span>botpress</span>
                </div>

                {/* Infobip */}
                <div className="flex items-center justify-center gap-2 text-white/60 hover:text-white transition-colors duration-300 font-sans font-medium tracking-tight text-lg">
                  <span>infobip</span>
                </div>

                {/* Voiceflow */}
                <div className="flex items-center justify-center gap-1 text-white/60 hover:text-white transition-colors duration-300 font-sans font-bold tracking-tight text-lg">
                  <span>Voiceflow</span>
                </div>

                {/* Ada */}
                <div className="flex items-center justify-center gap-1 text-white/60 hover:text-white transition-colors duration-300 font-sans font-extrabold tracking-widest text-xl lowercase">
                  <span>ada</span>
                </div>

                {/* HumanFirst */}
                <div className="flex items-center justify-center gap-2 text-white/60 hover:text-white transition-colors duration-300 font-sans font-bold tracking-tight text-[15px]">
                  <span>HumanFirst</span>
                </div>

                {/* Liveperson */}
                <div className="flex items-center justify-center gap-1 text-white/60 hover:text-white transition-colors duration-300 font-sans font-black tracking-tight text-md uppercase">
                  <span>Liveperson</span>
                </div>

                {/* Vonage */}
                <div className="flex items-center justify-center gap-1 text-white/60 hover:text-white transition-colors duration-300 font-sans font-bold tracking-widest text-lg uppercase">
                  <span>Vonage</span>
                </div>

                {/* Nylas */}
                <div className="flex items-center justify-center gap-1 text-white/60 hover:text-white transition-colors duration-300 font-sans font-semibold tracking-tight text-lg">
                  <span>nylas</span>
                </div>

                {/* Glia */}
                <div className="flex items-center justify-center gap-1 text-white/60 hover:text-white transition-colors duration-300 font-sans font-extrabold tracking-tight text-xl">
                  <span>glia</span>
                </div>
              </div>
            </div>
          </div>
        </section>
   

        <Footer />
      </div>
    </main>
  );
};

export default Contact;