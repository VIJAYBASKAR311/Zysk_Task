
import React from "react";

const Footer = () => {
  const footerLinks = [
    {
      title: "Product",
      links: ["Overview", "Features", "Solutions", "Tutorials", "Pricing", "Releases"],
    },
    {
      title: "Company",
      links: ["About us", "Careers", "Press", "News", "Media kit", "Contact"],
    },
    {
      title: "Resources",
      links: ["Blog", "Newsletter", "Events", "Help centre", "Tutorials", "Support"],
    },
    {
      title: "Use cases",
      links: ["Startups", "Enterprise", "Government", "SaaS centre", "Marketplaces", "Ecommerce"],
    },
    {
      title: "Social",
      links: ["Twitter", "LinkedIn", "Facebook", "GitHub", "AngelList", "Dribbble"],
    },
    {
      title: "Legal",
      links: ["Terms", "Privacy", "Cookies", "Licenses", "Settings", "Contact"],
    },
  ];

  return (
    <div className="footer-container">
      <div className="footer-header">
        <h2 id="footername">Start your free trial</h2>
        <p>Join over 4,000+ startups already growing with Untitled.</p>
        <div className="footer-buttons">
          <button className="learn-more">Learn more</button>
          <button className="get-started">Get started</button>
        </div>
      </div>
      <div className="footer-links">
        {footerLinks.map((section, index) => (
          <div key={index} className="footer-section">
            <h3>{section.title}</h3>
            <ul>
              {section.links.map((link, i) => (
                <li key={i}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footerlogo">

      <div >
        <img src="http://idoxaaj.sufydely.com/zysklogo.png" alt="Logo" className="logo-img" />
        <span id="logoname">Untitled UI</span>
      </div>

      <p className="footercopy">© 2077 Untitled UI. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
