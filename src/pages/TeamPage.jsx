import React from 'react';
import "./TeamPage.css"

const teamMembers = [
  {
    id: 1,
    role: "CEO",
    name: "Alex Morgan",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    role: "HEAD",
    name: "Sarah Jenkins",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    role: "Business Developer",
    name: "Michael Chen",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
  },
];

export default function MeetOurTeam() {
  return (
    <section className="team-section">
    
      {/* Main Center Header (From TOP) */}
      <div className="team-header">
        <h1 className="main-title">
          Meet Our <span className="highlight-blue">Team</span>
        </h1>
        <p className="header-description">
          Our team of passionate and experienced professionals is dedicated to driving your success. 
          From strategy to execution, we combine creativity, innovation, and insight to deliver exceptional results.
        </p>
      </div>

      {/* Global Leadership Subheading (From LEFT) */}
      <h2 className="subsection-title">
        Global <span className="highlight-blue">Leadership</span>
      </h2>

      {/* Team Members Cards Grid (From BOTTOM with stagger delay) */}
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div 
            className="team-card" 
            key={member.id}
            style={{ animationDelay: `${0.3 + index * 0.15}s` }} /* Staggered bottom animation */
          >
            <img 
              src={member.image} 
              alt={member.role} 
              className="team-card-image" 
            />
            
            {/* Top Role Badge */}
            <span className="role-tag">{member.role}</span>

            {/* Bottom Overlay Info */}
            <div className="member-info">
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}