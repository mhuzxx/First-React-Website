import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Services Data with real images & full details for individual pages
const servicesList = [
  {
    id: "website-development",
    title: "Website Development",
    desc: "Custom, responsive websites designed to meet your business needs and provide an excellent user experience.",
    fullDesc: "Our Website Development service covers everything from custom frontend UI design to backend architecture. We build highly scalable, SEO-friendly, and mobile-responsive web applications tailored specifically for your brand.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80",
    features: ["Custom UI/UX", "SEO Optimized", "Responsive Design", "Fast Loading Speed"],
  },
  {
    id: "app-development",
    title: "App Development",
    desc: "High-quality mobile apps for iOS and Android that deliver seamless performance and great user experience.",
    fullDesc: "We craft intuitive, high-performing mobile applications for iOS and Android using Flutter, React Native, and native tech stacks. Empower your mobile users with offline capabilities, push notifications, and ultra-fast UI.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    features: ["Cross-Platform Support", "Native Performance", "Secure APIs", "Push Notifications"],
  },
  {
    id: "devops-cloud",
    title: "DevOps & Cloud",
    desc: "Automate deployments, improve scalability, and reduce downtime with our DevOps and cloud solutions.",
    fullDesc: "Modernize your IT infrastructure with AWS, Azure, and Google Cloud. Our DevOps engineers automate CI/CD pipelines, containerize apps with Docker & Kubernetes, and ensure 99.99% system uptime.",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=800&q=80",
    features: ["CI/CD Automation", "AWS & Azure Management", "Docker & Kubernetes", "24/7 Monitoring"],
  },
  {
    id: "machine-learning",
    title: "Machine Learning",
    desc: "Leverage AI and machine learning to automate processes, analyze data, and improve decision-making.",
    fullDesc: "Unlock powerful business insights with custom AI/ML models. From natural language processing (NLP) to predictive analytics, we help businesses make smarter decisions through machine intelligence.",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=800&q=80",
    features: ["Predictive Analytics", "NLP & Chatbots", "Computer Vision", "Automated Workflows"],
  },
  {
    id: "blockchain",
    title: "Blockchain",
    desc: "Secure and transparent blockchain solutions for smart contracts, decentralized apps, and more.",
    fullDesc: "Build next-generation decentralized applications (DApps), custom crypto tokens, and secure Web3 smart contracts on Ethereum, Solana, and Binance Smart Chain.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
    features: ["Smart Contracts", "Web3 DApps", "Crypto Token Dev", "Blockchain Security"],
  },
  {
    id: "website-hosting",
    title: "Website Hosting",
    desc: "Reliable and secure web hosting services with high uptime and technical support to keep your site running smoothly.",
    fullDesc: "Get lightning-fast NVMe cloud hosting with enterprise-grade DDoS protection, automatic daily backups, and SSL certificates included out of the box.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    features: ["99.9% Uptime Guarantee", "Free SSL Certificate", "Daily Automated Backups", "SSD NVMe Storage"],
  },
  {
    id: "wordpress-development",
    title: "WordPress Development",
    desc: "Custom WordPress websites with modern themes, powerful plugins, and SEO optimization.",
    fullDesc: "Transform your brand with tailor-made WordPress themes, WooCommerce online stores, and high-security custom plugin development tailored to your enterprise goals.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    features: ["Custom Themes", "WooCommerce Setup", "Speed Optimization", "Malware Security"],
  },
  {
    id: "seo-optimization",
    title: "SEO Optimization",
    desc: "Improve your website's ranking and visibility with proven SEO techniques and strategies.",
    fullDesc: "Dominate search engines like Google with comprehensive technical SEO, high-authority link building, keyword optimization, and content strategy.",
    image: "https://images.unsplash.com/photo-1562577309-2592ab84b1bc?auto=format&fit=crop&w=800&q=80",
    features: ["Technical SEO Audit", "Keyword Research", "On-Page & Off-Page SEO", "Monthly Performance Reports"],
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    desc: "Design interfaces that are beautiful, user-friendly, and focused on conversion and engagement.",
    fullDesc: "We craft human-centered digital experiences in Figma and Adobe XD. Our designs blend aesthetic perfection with optimal user journeys to boost conversion rates.",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80",
    features: ["Wireframing & Prototyping", "User Journey Mapping", "Figma Design Systems", "Usability Testing"],
  },
  {
    id: "graphic-designing",
    title: "Graphic Designing",
    desc: "Eye-catching graphics that represent your brand identity and convey your message effectively.",
    fullDesc: "Elevate your brand aesthetic with professional visual design, vector logos, marketing collateral, social media banners, and print graphics.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80",
    features: ["Logo & Branding", "Social Media Graphics", "Vector Illustrations", "Print & Packaging"],
  },
  {
    id: "video-editing",
    title: "Video Editing",
    desc: "Professional video editing for marketing, branding, tutorials, and more.",
    fullDesc: "Captivate your audience with high-impact promotional videos, YouTube/Reels video post-production, motion graphics, and professional color grading.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80",
    features: ["4K Post-Production", "Motion Graphics", "Color Grading & SFX", "Reels & YouTube Shorts"],
  },
  {
    id: "code-calling",
    title: "Code Calling",
    desc: "Real-time expert coding assistance and live debugging for quick issue resolution.",
    fullDesc: "Get instant live assistance from senior engineers to resolve production bugs, refactor legacy code, and complete emergency system integrations in real-time.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    features: ["1-on-1 Live Debugging", "Senior Tech Guidance", "Code Review", "Emergency Patching"],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    desc: "Boost your online presence through targeted campaigns and multichannel marketing strategies.",
    fullDesc: "Drive targeted traffic and conversions with Google Ads, Meta PPC campaigns, email marketing automation, and social media growth strategies.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    features: ["PPC Advertising", "Social Media Marketing", "Email Campaigns", "Conversion Optimization"],
  },
  {
    id: "lead-generation",
    title: "Lead Generation",
    desc: "Generate high-quality leads with targeted campaigns and data-driven marketing strategies.",
    fullDesc: "Fill your sales pipeline with verified B2B and B2C buyer leads using cold outreach automation, inbound funnels, and data-driven CRM campaigns.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    features: ["B2B Prospecting", "Inbound Sales Funnels", "Cold Email Automation", "CRM Integration"],
  },
];

export default function PerfectIT() {
  // Navigation State: null = Home View, serviceObject = Detail View
  const [selectedService, setSelectedService] = useState(null);

  // Scroll to top when opening a service
  const handleSelectService = (service) => {
    setSelectedService(service);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div style={{ backgroundColor: "#ffffff", fontFamily: "sans-serif", minHeight: "100vh" }}>
      <AnimatePresence mode="wait">
        {selectedService ? (
          /* ========================================================= */
          /* DETAIL PAGE VIEW (Brought up when "Learn More" is clicked) */
          /* ========================================================= */
          <motion.div
            key="detail"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
            style={{ maxWidth: "1000px", margin: "0 auto", padding: "40px 20px" }}
          >
            {/* Back Button */}
            <button
              onClick={() => setSelectedService(null)}
              style={{
                backgroundColor: "#030048",
                color: "#ffffff",
                padding: "10px 24px",
                borderRadius: "30px",
                border: "none",
                fontWeight: "bold",
                cursor: "pointer",
                marginBottom: "30px",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              ← Back to All Services
            </button>

            {/* Service Detail Content */}
            <div style={{ borderRadius: "20px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}>
              <img
                src={selectedService.image}
                alt={selectedService.title}
                style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }}
              />
              <div style={{ padding: "40px 30px", backgroundColor: "#ffffff" }}>
                <h1 style={{ fontSize: "36px", fontWeight: "800", color: "#111", marginBottom: "16px" }}>
                  {selectedService.title}
                </h1>
                <p style={{ fontSize: "18px", color: "#4b5563", lineHeight: "1.7", marginBottom: "30px" }}>
                  {selectedService.fullDesc}
                </p>

                <h3 style={{ fontSize: "22px", fontWeight: "700", marginBottom: "16px" }}>Key Features & Offerings:</h3>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "16px",
                    marginBottom: "40px",
                  }}
                >
                  {selectedService.features.map((feature, i) => (
                    <div
                      key={i}
                      style={{
                        padding: "16px",
                        backgroundColor: "#f8fafc",
                        borderRadius: "12px",
                        borderLeft: "4px solid #1000C8",
                        fontWeight: "600",
                        color: "#1e293b",
                      }}
                    >
                      ✓ {feature}
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => alert("Contact request sent! Our team will get back to you.")}
                  style={{
                    backgroundColor: "#1000C8",
                    color: "#ffffff",
                    padding: "14px 36px",
                    borderRadius: "30px",
                    border: "none",
                    fontWeight: "bold",
                    fontSize: "16px",
                    cursor: "pointer",
                  }}
                >
                  Get Started With {selectedService.title}
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          /* ========================================================= */
          /* MAIN HOME VIEW (Hero + 14 Services Grid matching Screenshot)*/
          /* ========================================================= */
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ maxWidth: "1150px", margin: "0 auto", padding: "40px 20px" }}
          >
            {/* HERO SECTION */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "40px",
                marginBottom: "80px",
              }}
            >
              {/* Hero Text (ANIMATION: COMES FROM LEFT) */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ flex: "1 1 480px" }}
              >
                <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", fontWeight: "900", lineHeight: "1.1", margin: "0 0 16px 0" }}>
                  Perfect It <span style={{ color: "#1000C8" }}>Solutions</span>
                  <br />
                  Business
                </h1>
                <p style={{ color: "#4b5563", fontSize: "16px", lineHeight: "1.6", marginBottom: "28px", maxWidth: "500px" }}>
                  Perfect IT Solutions provides expert services in software development, IT consulting, cloud solutions, network security, data management, technical support, web design, and system integration to empower business growth and efficiency.
                </p>
                <button
                  onClick={() => window.scrollTo({ top: 800, behavior: "smooth" })}
                  style={{
                    backgroundColor: "#030048",
                    color: "#ffffff",
                    padding: "14px 32px",
                    borderRadius: "30px",
                    border: "none",
                    fontWeight: "bold",
                    fontSize: "15px",
                    cursor: "pointer",
                    boxShadow: "0 6px 20px rgba(3, 0, 72, 0.25)",
                  }}
                >
                  Contact Us
                </button>
              </motion.div>

              {/* Hero Image (ANIMATION: COMES FROM RIGHT) */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ flex: "1 1 400px", display: "flex", justifyContent: "center" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="Perfect IT Solutions"
                  style={{
                    width: "100%",
                    maxWidth: "500px",
                    borderRadius: "20px",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    objectFit: "cover",
                  }}
                />
              </motion.div>
            </div>

            {/* LATEST SERVICES SECTION TITLE */}
            <div style={{ textAlign: "center", marginBottom: "50px" }}>
              <h2 style={{ fontSize: "36px", fontWeight: "800", color: "#000" }}>Latest Services</h2>
            </div>

            {/* 14 SERVICES GRID (3 Columns) */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: "30px",
              }}
            >
              {servicesList.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    position: "relative",
                  }}
                >
                  <div>
                    {/* Card Top Image */}
                    <img
                      src={service.image}
                      alt={service.title}
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                        borderTopLeftRadius: "16px",
                        borderTopRightRadius: "16px",
                      }}
                    />

                    {/* Card Body */}
                    <div style={{ padding: "24px 20px 20px 20px" }}>
                      <h3 style={{ fontSize: "20px", fontWeight: "800", color: "#111827", marginBottom: "10px" }}>
                        {service.title}
                      </h3>
                      <p style={{ color: "#6b7280", fontSize: "14px", lineHeight: "1.6", marginBottom: "20px" }}>
                        {service.desc}
                      </p>
                    </div>
                  </div>

                  {/* Card Button */}
                  <div style={{ padding: "0 20px 24px 20px" }}>
                    <button
                      onClick={() => handleSelectService(service)}
                      style={{
                        backgroundColor: "#030048",
                        color: "#ffffff",
                        padding: "10px 24px",
                        borderRadius: "25px",
                        border: "none",
                        fontWeight: "bold",
                        fontSize: "14px",
                        cursor: "pointer",
                        transition: "transform 0.2s ease, background-color 0.2s ease",
                      }}
                    >
                      Learn More
                    </button>
                  </div>

                  {/* Card Bottom Accent Border (Matching Screenshot) */}
                  <div
                    style={{
                      height: "5px",
                      backgroundColor: "#1000C8",
                      width: "100%",
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}