import React, { useState } from 'react';
import "./ProjectsPage.css"

// Unique, high-quality project banners and thumbnail screenshots
const projectsData = [
  {
    id: 1,
    title: "Akoya Deluxe Cleaning",
    category: "Website Development",
    description: "User-friendly, modern design showcasing top resources for managing overtime and scheduling cleaning staff.",
    mainImage: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=700&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=150&q=80"
    ],
  },
  {
    id: 2,
    title: "Multi-Service Creative Agency",
    category: "Website Development",
    description: "A fully responsive agency portfolio featuring custom branding, payment gateway integration, and client portal.",
    mainImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1542744094-3a3172720177?auto=format&fit=crop&w=150&q=80"
    ],
  },
  {
    id: 3,
    title: "Trend Car Care",
    category: "ui/ux",
    description: "Sleek automotive booking app UI featuring live service tracking, cart integration, and admin management panel.",
    mainImage: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=700&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?auto=format&fit=crop&w=150&q=80"
    ],
  },
  {
    id: 4,
    title: "The Givers Consulting",
    category: "Website Development",
    description: "A versatile and forward-thinking corporate portal offering a comprehensive suite of consulting services.",
    mainImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=700&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=150&q=80"
    ],
  },
  {
    id: 5,
    title: "Cash Rewards Game",
    category: "App Development",
    description: "Become part of a thriving global community today and unlock thousands of dollars in reward earnings through mobile gaming.",
    mainImage: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=700&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1556438064-2d7646166914?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&w=150&q=80"
    ],
  },
  {
    id: 6,
    title: "Innovative Workforce Management",
    category: "Website Development",
    description: "Streamline employee scheduling, attendance tracking, and productivity monitoring using advanced Cloud AI technologies.",
    mainImage: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=700&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=150&q=80"
    ],
  },
  {
    id: 7,
    title: "Softech Business Solutions",
    category: "Website Development",
    description: "Softech Business Solutions is a forward-thinking platform delivering software engineering and cloud infrastructure services.",
    mainImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=700&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=150&q=80"
    ],
  },
  {
    id: 8,
    title: "Nasa Teck Innovations IT Services",
    category: "ui/ux",
    description: "Enterprise tech portal providing bespoke cloud architecture, cybersecurity solutions, and full-stack software development.",
    mainImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=700&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=150&q=80"
    ],
  },
  {
    id: 9,
    title: "Figma Design AI Dashboard",
    category: "ui/ux",
    description: "Sleek, data-driven dark mode interface for monitoring machine learning performance with real-time analytics.",
    mainImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=150&q=80"
    ],
  },
  {
    id: 10,
    title: "Logistics Provide Word",
    category: "App Development",
    description: "Modern and dynamic logistics platform showcasing Transpohub supply chain solutions with live route mapping.",
    mainImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=700&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1565891741441-64926e441838?auto=format&fit=crop&w=150&q=80"
    ],
  },
];

const categories = ["All", "Website Development", "ui/ux", "App Development"];

const INITIAL_VISIBLE_COUNT = 3;
const LOAD_MORE_STEP = 3;

export default function ProjectSection() {
  const [activeTab, setActiveTab] = useState("All");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  // Filter projects based on active tab
  const filteredProjects = activeTab === "All" 
    ? projectsData 
    : projectsData.filter(p => p.category.toLowerCase() === activeTab.toLowerCase());

  // Slice list based on visibleCount
  const displayedProjects = filteredProjects.slice(0, visibleCount);

  // Handle Tab Switch (Resets visible count)
  const handleTabChange = (category) => {
    setActiveTab(category);
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  };

  // Handle Load More click
  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + LOAD_MORE_STEP);
  };

  return (
    <div className="project-wrapper">
  
      {/* Header */}
      <div className="header-section">
        <h2 className="header-title">Project Section</h2>
        <p className="header-subtitle">
          Explore a range of projects we've worked on across web, mobile, and design.
        </p>

        {/* Filter Navigation */}
        <div className="filter-container">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`tab-button ${activeTab === cat ? 'active' : ''}`}
              onClick={() => handleTabChange(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects List */}
      <div className="projects-list">
        {displayedProjects.map((project, idx) => (
          /* Key combining id and activeTab forces re-triggering animations on tab or load more */
          <div className="project-card" key={`${activeTab}-${project.id}`}>
            
            {/* Left Preview Banner (Slides in from LEFT) */}
            <div className="card-image-container">
              <span className="category-badge">{project.category}</span>
              <img 
                src={project.mainImage} 
                alt={project.title} 
                className="main-banner" 
              />
            </div>

            {/* Right Info Section (Slides in from RIGHT) */}
            <div className="card-content">
              <div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                
                {/* 4 Small Mockup Thumbnails */}
                <div className="thumbnails-grid">
                  {project.thumbnails.map((thumb, index) => (
                    <img 
                      key={index} 
                      src={thumb} 
                      alt={`${project.title} preview ${index + 1}`} 
                      className="thumb-img" 
                    />
                  ))}
                </div>
              </div>

              {/* View Project Button */}
              <button className="view-btn">
                View Project 
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* Bottom Load More Button */}
      {visibleCount < filteredProjects.length && (
        <div className="footer-action">
          <button className="view-more-btn" onClick={handleLoadMore}>
            View More
          </button>
        </div>
      )}
    </div>
  );
}