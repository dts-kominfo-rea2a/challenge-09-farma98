// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import data from "../data/contacts.json";

const Contact = () => {
  return data.map((item, index) => {
    return (
      <div className="contact" key={index}>
        <div>
          <img className="contact-photo" src={item.photo} alt={item.name} />
        </div>
        <div>
          <p className="contact-name">{item.name}</p>
          <p className="contact-phone">{item.phone}</p>
          <p className="contact-email">{item.email}</p>
        </div>
      </div>
    );
  });
};

export default Contact;
