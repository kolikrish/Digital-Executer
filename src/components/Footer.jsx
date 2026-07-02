import Logo from "../assets/logo.png";
import {Link} from "react-router-dom"

const FooterColumn = ({ title, links }) => (
  <div className="flex flex-col gap-4">
    {/* Column heading */}
    <div className="pb-3 border-b border-hairline">
      <span className="font-medium text-[16px] text-primary">
        {title}
      </span>
    </div>
    {/* Link list */}
    <ul className="flex flex-col gap-2.5">
      {links.map((link, i) => (
        <li key={i}>
          <Link
            to={link.href}
            className="font-[poppins] text-[14px] text-[#555] hover:text-white transition-colors duration-200"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const SocialIcon = ({ href, label, children }) => (
  <a
    href={href}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
    className="w-8 h-8 border border-hairline-strong flex items-center justify-center text-[#555] hover:text-white hover:border-primary hover:bg-primary/10 transition-all duration-300"
  >
    {children}
  </a>
);

const Footer = () => {
  const columns = [
    {
      title: "Services",
      links: [
        { label: "Growth Strategy", href: "#services" },
        { label: "Performance Marketing", href: "#services" },
        { label: "Meta Ads", href: "#services" },
        { label: "Lead Generation", href: "#services" },
        { label: "Websites and Landing Pages", href: "#services" },
        { label: "SEO and AI Chatbots", href: "#services" },
        { label: "CRM and Automation", href: "#services" },
        { label: "End-to-End Execution", href: "#services" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Contact Us", href: "/contact" },
        { label: "Book a Consultation", href: "https://docs.google.com/forms/d/e/1FAIpQLSesejnxWiLfiigREDdxPpbJH9Y09Z_D0GalDOkTpqI6-WrN8Q/viewform" },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: "Book a Call", href: "https://calendly.com/" },
        { label: "WhatsApp", href: "https://wa.me/916264483737" },
        { label: "Email", href: "mailto:digitalexecutor08@gmail.com" },
        { label: "LinkedIn", href: "https://www.linkedin.com/company/digitalexecutor/" },
        { label: "Instagram", href: "https://www.instagram.com/digitalexecutorr/" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/legal/privacy-policy" },
        { label: "Terms and Conditions", href: "/legal/terms-and-conditions" },
        { label: "Disclaimer", href: "/legal/disclaimer" },
        { label: "Refund Policy", href: "/legal/refund-cancellation-policy" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Insights", href: "#" },
        { label: "Frequently Asked Questions", href: "#" },
        { label: "Case Studies", href: "#" },
        { label: "Portfolio", href: "#" },
      ],
    },
    {
      title: "Industries",
      links: [
        { label: "Travel & Hospitality", href: "#" },
        { label: "Healthcare Clinics", href: "#" },
        { label: "Real Estate", href: "#" },
        { label: "SaaS Companies", href: "#" },
        { label: "Marketing Agencies", href: "#" },
      ],
    },
  ];

  return (
    <footer className="relative w-full max-w-7xl mx-auto border-x-2 border-hairline-strong bg-background overflow-hidden">

      {/* Blueprint grid overlay */}
      <div className="absolute inset-0 blueprint-grid opacity-[0.06] pointer-events-none z-0" />

      {/* Subtle gold glow at top-center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-50 bg-primary/5 blur-[120px] opacity-40 pointer-events-none z-0" />

      {/* ── Top section: logo tagline + columns ── */}
      <div className="relative z-10 border-t border-hairline px-6 sm:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8">


          <div className="md:col-span-1 flex flex-col gap-6">
            <a href="#" className="group inline-flex flex-col items-start gap-3">
              <img
                src={Logo}
                alt="Digital Executerr Logo"
                loading="lazy"
                className="h-16 w-auto object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_18px_rgba(212,175,55,0.22)]"
              />
              <h2 className="font-display font-extrabold text-lg uppercase tracking-tight text-white group-hover:text-primary transition-colors duration-300">
                Digital<br />
                <span className="text-primary group-hover:text-white transition-colors duration-300">Executerr</span>
              </h2>
            </a>

            {/* Tagline */}
            <p className="text-[14px] text-[#444] leading-relaxed max-w-45">
              Stop Collecting Strategies. Start Executing Growth.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2 mt-2">
              <SocialIcon href="https://www.linkedin.com/company/digitalexecutor/" label="LinkedIn">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </SocialIcon>

              <SocialIcon href="https://www.instagram.com/digitalexecutorr/" label="Instagram">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                </svg>
              </SocialIcon>

              <SocialIcon href="https://wa.me/916264483737" label="WhatsApp">
                <svg width="13" height="13" viewBox="0 0 448 512" fill="currentColor">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
              </SocialIcon>

              <SocialIcon href="mailto:digitalexecutor08@gmail.com" label="Gmail">
                <svg width="16" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4C2.897 4 2 4.897 2 6v12c0 1.102.897 2 2 2h16c1.103 0 2-.898 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 5.132-8-5.132V6h16zm-16 12V8.155l7.445 4.778a2.003 2.003 0 0 0 2.11 0L20 8.155V18H4z"/>
                </svg>
              </SocialIcon>
         
            </div>
          </div>

          {/* Nav columns */}
          <div className="md:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-10 md:gap-6">
            {columns.map((col) => (
              <FooterColumn key={col.title} title={col.title} links={col.links} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom bar: copyright + legal quick links ── */}
      <div className="relative z-10 border-t border-hairline px-6 sm:px-12 py-5 bg-black/40 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[12px] text-[#444] uppercase tracking-wider font-medium">
          &copy; {new Date().getFullYear()} Digital Executerr. All Rights Reserved.
        </p>

        <div className="flex items-center gap-6">
          <Link to="/legal/privacy-policy" className="text-[12px] text-[#444] hover:text-primary tracking-widest transition-colors">
            Privacy Policy
          </Link>
          <span className="text-[#333] text-[9px]">|</span>
          <Link to="/legal/terms-and-conditions" className="text-[12px] text-[#444] hover:text-primary tracking-widest transition-colors">
            Terms of Service
          </Link>
          <span className="text-[#333] text-[9px]">|</span>
        </div>
   
      </div>

    </footer>
  );
};

export default Footer;
