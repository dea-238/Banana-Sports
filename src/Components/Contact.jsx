import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { hudleImg, kmImg, playoImg, piplayImg } from "../utils";
import { BOOKING_LINKS, CONTACT_DETAILS } from "../constants";

const Contact = ({ id }) => {
  const images = { hudleImg, kmImg, playoImg, piplayImg };
  
  return (
    <div className="w-full overflow-hidden">
      <section id={id} className="contact-section">
        <div className="contact-container">
          <div className="contact-left">
            <h2 className="booking-title">BOOK A COURT</h2>
            <div className="booking-links">
              {BOOKING_LINKS.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="booking-link"
                >
                  <img src={item.src} alt={item.alt} />
                  <span>{item.name}</span> <FaExternalLinkAlt />
                </a>
              ))}
            </div>
          </div>

          <div className="contact-right">
            <div>
              <h3 className="contact-section-title">Address</h3>
              <ul className="contact-list">
                {CONTACT_DETAILS.ADDRESS.map((line, index) => (
                  <li key={index}>{line}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="contact-section-title">Contact Us</h3>
              <ul className="contact-list contact-list-spaced">
                <li>{CONTACT_DETAILS.PHONE}</li>
                <li>{CONTACT_DETAILS.EMAIL}</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="contact-footer">
          <p>{CONTACT_DETAILS.COPYRIGHT}</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;