import React from "react";
import "../Styles/WavePattern.css"
import wavePattern from "../Assets/motifs/waves-2-large.svg";
import iconLocation from "../Assets/icons/location-pin-alt-1-svgrepo-com.svg";
import iconEnvelopeEmail from "../Assets/icons/envelope-mail-mobile-ui-svgrepo-com.svg";
import iconFacebook from "../Assets/icons/facebook.svg";
import iconInstagram from "../Assets/icons/instagram-167-svgrepo-com.svg";

const socialMedia = [
  { name: "facebook", logo: iconFacebook, link: "./" },
  { name: "instagram", logo: iconInstagram, link: "./" },
];

const headerContact = [
  {
    type: "location",
    logo: iconLocation,
    content: "IB 271 Andoharanofotsy, Antananarivo",
  },
  { type: "email", logo: iconEnvelopeEmail, content: "rovanisoa@gmail.com" },
];

export default function WavePattern() {
  return (
    <div className="container-wave-pattern">
      <img src={wavePattern} alt="wave pattern" className="wave-pattern" />
      <div className="container-header-contacts">
        {headerContact.map((contactContainer, index) => (
          <div className="container-header-contact" key={index}>
            <img
              src={contactContainer.logo}
              alt={`icon ${contactContainer.type}`}
              className="header-contact-icon"
            />
            <span className="header-contact-content">
              {contactContainer.content}
            </span>
          </div>
        ))}
      </div>
      <div className="container-header-social-media">
        <span className="text-follow-us">Suivez Nous Sur: </span>
        <div className="container-social-media-icon">
          {socialMedia.map((media, index) => (
            <a key={index} href={media.link}>
              <img
                src={media.logo}
                alt={`icon ${media.name}`}
                className="social-media-icon"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
