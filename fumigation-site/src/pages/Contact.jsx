import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <p className="contact-intro">
        Get in touch with us for professional fumigation and pest control services in Nairobi.
      </p>

      <div className="contact-container">
        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        {/* Contact Details */}
        <div className="contact-details">
          <h3>Our Office</h3>
          <p>📍 Nairobi, Kenya</p>
          <p>📞 +254 712 345 678</p>
          <p>📧 info@nairobifumigation.com</p>

          {/* Google Map Embed */}
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.197203988707!2d36.82194635!3d-1.2920653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10e7cf0d3bfd%3A0x9c4b8c9f9f7f2d2!2sNairobi!5e0!3m2!1sen!2ske!4v1691764812345!5m2!1sen!2ske"
            width="100%"
            height="250"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
