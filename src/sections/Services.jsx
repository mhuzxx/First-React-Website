import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Services.css"; // Import standard CSS file

const servicesData = {
  Development: [
    "Custom Development",
    "Web App Development",
    "Mobile App Development",
    "Blockchain Dev",
    "Crypto Token Dev",
    "Wordpress Dev",
  ],
  Management: [
    "Project Management",
    "Community Management",
    "Social Media Management",
    "Product Management",
    "Operations Management",
  ],
  Marketing: [
    "Targeted Marketing",
    "SEO & Content Strategy",
    "Influencer Marketing",
    "PPC & Paid Ads",
    "Email Campaigns",
  ],
  "Graphics & Visuals": [
    "Brand Identity",
    "UI/UX Design",
    "3D Graphics & Motion",
    "Social Media Assets",
    "Vector Artwork",
  ],
  "Video Editing": [
    "Promotional Videos",
    "Reels & TikToks",
    "Motion Graphics",
    "Post-Production",
    "Color Grading",
  ],
  "Content Writing": [
    "Copywriting",
    "Technical Documentation",
    "Blog Posts & Articles",
    "Whitepapers",
    "SEO Copy",
  ],
};

const tabList = [
  "Development",
  "Management",
  "Marketing",
  "Graphics & Visuals",
  "Video Editing",
  "Content Writing",
];

export default function Services() {
  const [activeTab, setActiveTab] = useState("Development");

  // Animations
  const headerVariants = {
    hidden: { opacity: 0, y: -60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const leftSidebarVariants = {
    hidden: { opacity: 0, x: -80, rotateY: -45 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  const rightContentVariants = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.3,
        staggerChildren: 0.08,
      },
    },
  };

  const cardItemVariants = {
    hidden: { opacity: 0, x: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <section className="services-section">
      <div className="services-wrapper">
        {/* Top Heading */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="services-header"
        >
          <h2 className="services-title">
            <span className="title-blue">Services </span>
            <span className="title-black">We Offer</span>
          </h2>
          <p className="services-description">
            TOJO GLOBAL offers crypto solutions, targeted marketing, impactful design, custom development, and professional video editing to elevate your brand.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="services-grid">
          {/* Left Buttons */}
          <motion.div
            variants={leftSidebarVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="sidebar-navigation"
          >
            {tabList.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`tab-button ${activeTab === tab ? "active" : ""}`}
              >
                {tab}
              </button>
            ))}
          </motion.div>

          {/* Right Content Cards */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                variants={rightContentVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, x: -30, transition: { duration: 0.2 } }}
                className="cards-grid"
              >
                {servicesData[activeTab]?.map((service, index) => (
                  <motion.div
                    key={index}
                    variants={cardItemVariants}
                    whileHover={{ scale: 1.03 }}
                    className="service-card"
                  >
                    <span className="service-card-text">{service}</span>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}