import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  MapPin,
  Send,
  ExternalLink,
  Menu,
  X,
} from "lucide-react";

const DevPortfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("about");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMenuClick = (item) => {
    setActiveTab(item.toLowerCase());
    setIsMenuOpen(false);
  };

  const navItems = [
    "ABOUT",
    "EXPERIENCE",
    "SKILLS",
    "EDUCATION",
    "BLOG",
    "PROJECTS",
  ];

  // Mobile Navigation Drawer
  const MobileNav = () => (
    <div
      className={`fixed inset-0 bg-[#0d1117] transform transition-transform duration-300 ease-in-out z-50 ${
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-8 border-b border-[#30363d]">
        <span className="text-2xl font-bold text-[#c792ea]">Praveen Kumar</span>
        <button
          onClick={() => setIsMenuOpen(false)}
          className="p-2 hover:bg-[#30363d] rounded-lg transition-colors"
        >
          <X size={24} className="text-[#c792ea]" />
        </button>
      </div>
      <nav className="p-8">
        <ul className="space-y-6">
          {navItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => handleMenuClick(item)}
                className={`text-xl w-full text-left py-2 ${
                  activeTab === item.toLowerCase()
                    ? "text-[#c792ea]"
                    : "text-gray-400 hover:text-[#c792ea]"
                }`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );

  const CodeSnippet = ({ title, code }) => (
    <div className="bg-[#0d1117] rounded-lg p-8 mb-6 border border-[#30363d] w-full min-h-[300px] hover:border-[#c792ea] transition-all duration-300">
      <div className="flex gap-2 mb-4">
        <div className="w-4 h-4 rounded-full bg-red-500"></div>
        <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
        <div className="w-4 h-4 rounded-full bg-green-500"></div>
      </div>
      <h3 className="text-[#c792ea] mb-4 text-xl">{title}</h3>
      <pre className="text-[#89ddff] font-mono text-lg overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#010409] text-gray-200">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-[#0d1117]/90 backdrop-blur-sm z-40 border-b border-[#30363d]">
        <div className="container mx-auto px-8 py-6">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-[#c792ea]">
              Praveen Kumar
            </span>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex gap-8">
              {navItems.map((item) => (
                <button
                  key={item}
                  className={`text-lg transition-colors ${
                    activeTab === item.toLowerCase()
                      ? "text-[#c792ea]"
                      : "text-gray-400 hover:text-[#c792ea]"
                  }`}
                  onClick={() => setActiveTab(item.toLowerCase())}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 hover:bg-[#30363d] rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu size={24} className="text-[#c792ea]" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <MobileNav />

      {/* Content Overlay when menu is open */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <main className="pt-32 px-8">
        <div className="container mx-auto">
          {/* Hero Section */}
          <section className="flex flex-col lg:flex-row items-start gap-16 min-h-[90vh] mb-32">
            <div className="lg:flex-1 w-full">
              <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-relaxed">
                Hello,
                <br />
                This is <span className="text-[#c792ea]">Praveen Kumar</span>,
                <br />
                I'm a Professional Frontend Developer.
              </h1>
              <p className="text-gray-400 mb-12 text-lg lg:text-xl leading-relaxed">
                Full-stack web developer based in New Delhi, specializing in
                building exceptional digital experiences.
              </p>
              <div className="flex gap-4 lg:gap-6 mb-12 flex-wrap">
                {[Github, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href={
                      Icon === Github
                        ? "https://github.com/PraveenBaghelMaurya"
                        : "https://www.linkedin.com/in/praveen-kumar-847808208/"
                    }
                    className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-[#30363d] flex items-center justify-center
                             hover:bg-[#c792ea] hover:border-[#c792ea] transition-all duration-300 group"
                  >
                    <Icon size={20} className="group-hover:text-white" />
                  </a>
                ))}
              </div>
              {/* <div className="flex gap-4 lg:gap-6 mb-12 flex-wrap">
                {[Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="https://www.linkedin.com/in/praveen-kumar-847808208/"
                    className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-[#30363d] flex items-center justify-center
                             hover:bg-[#c792ea] hover:border-[#c792ea] transition-all duration-300 group"
                  >
                    <Icon size={20} className="group-hover:text-white" />
                  </a>
                ))}
              </div> */}
              <div className="flex gap-4 lg:gap-6 flex-wrap">
                <button className="px-6 lg:px-8 py-3 lg:py-4 bg-[#c792ea] rounded-full hover:bg-[#ba7de2] transition-colors text-base lg:text-lg">
                  CONTACT ME
                </button>
                <a href="https://drive.google.com/file/d/1s4mA1yF38wTJ-miZZo7HmvFdXPewWv-r/view">
                  <button className="px-6 lg:px-8 py-3 lg:py-4 border-2 border-[#c792ea] rounded-full hover:bg-[#c792ea]/10 transition-colors text-base lg:text-lg">
                    GET RESUME
                  </button>
                </a>
              </div>
            </div>
            <div className="lg:flex-1 w-full">
              <CodeSnippet
                title="welcome.js"
                code={`const greeting = () => {
  return {
    name: "Praveen Kumar",
    role: "Frontend Developer",
    skills: ["React", "Node.js", 
            "MongoDB"],
    passion: "Building amazing 
             web applications",
    location: "New Delhi",
    status: "Available for 
            opportunities"
  }
}`}
              />
            </div>
          </section>

          {/* Projects Section */}
          <section className="py-32">
            <h2 className="text-5xl font-bold mb-16 text-center">
              Featured Projects
            </h2>
            <div className="space-y-32">
              {[
                {
                  title: "AI Personal Financial App",
                  description:
                    "Personal finance management app with AI-powered insights for tracking expenses, investments, and financial goals. Integrated with multiple banks and cryptocurrency platforms.",
                  tech: ["React", "Node.js", "MongoDB", "TensorFlow"],
                  code: `// AI Financial Analysis
const analyzeExpenses = async (data) => {
  const patterns = await AI.detect(data);
  const insights = await ML.process(patterns);
  const recommendations = 
    generateRecommendations(insights);
  
  return {
    patterns,
    insights,
    recommendations,
    summary: createReport(recommendations)
  };
};`,
                },
                {
                  title: "Travel Agency App",
                  description:
                    "Full-featured travel booking platform with real-time availability, dynamic pricing, and personalized recommendations based on user preferences and past bookings.",
                  tech: ["React", "Express", "PostgreSQL", "Redis"],
                  code: `// Booking System
const createBooking = async ({ user, trip }) => {
  const availability = 
    await checkAvailability(trip.id);
  
  if (!availability.available) {
    throw new Error('Trip not available');
  }

  const pricing = 
    await calculateDynamicPricing(trip);
  
  const booking = await Booking.create({
    userId: user.id,
    tripId: trip.id,
    price: pricing.finalPrice,
    status: 'confirmed'
  });

  return booking;
};`,
                },
              ].map((project, i) => (
                <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <h3 className="text-4xl font-bold text-[#c792ea]">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-xl leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-6 py-2 bg-[#c792ea]/10 text-[#c792ea] rounded-full text-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-6 pt-4">
                      <a
                        href="#"
                        className="text-[#c792ea] hover:text-[#ba7de2] flex items-center gap-3 text-lg"
                      >
                        <Github size={24} />
                        <span>View Code</span>
                      </a>
                      <a
                        href="#"
                        className="text-[#c792ea] hover:text-[#ba7de2] flex items-center gap-3 text-lg"
                      >
                        <ExternalLink size={24} />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                  <CodeSnippet
                    title={`${project.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}.js`}
                    code={project.code}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-32 border-t border-[#30363d]">
            <h2 className="text-5xl font-bold mb-16 text-center">Contact Me</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="space-y-8">
                <div className="flex items-center gap-6 text-xl">
                  <Mail className="text-[#c792ea] w-8 h-8" />
                  <span>praveenbaghelmaurya@gmail.com</span>
                </div>
                <div className="flex items-center gap-6 text-xl">
                  <MapPin className="text-[#c792ea] w-8 h-8" />
                  <span>Sultanpuri, New Delhi</span>
                </div>
              </div>
              <form className="space-y-8">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-4 bg-[#0d1117] rounded-lg border-2 border-[#30363d] focus:border-[#c792ea] outline-none text-lg"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-6 py-4 bg-[#0d1117] rounded-lg border-2 border-[#30363d] focus:border-[#c792ea] outline-none text-lg"
                />
                <textarea
                  placeholder="Your Message"
                  rows="6"
                  className="w-full px-6 py-4 bg-[#0d1117] rounded-lg border-2 border-[#30363d] focus:border-[#c792ea] outline-none text-lg resize-none"
                ></textarea>
                <button className="w-full py-4 bg-[#c792ea] rounded-lg hover:bg-[#ba7de2] transition-colors flex items-center justify-center gap-3 text-lg">
                  <Send size={24} />
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </section>
          {/* ... */}
        </div>
      </main>

      <footer className="border-t border-[#30363d] py-8 text-center text-gray-400 text-lg">
        © {new Date().getFullYear()} Developed by Praveen Kumar with ❤️
      </footer>
    </div>
  );
};

export default DevPortfolio;
