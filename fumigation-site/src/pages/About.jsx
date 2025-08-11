import "./About.css";

function About() {
  return (
    <div className="about-page">
      <h2>About Us</h2>
      <p className="about-intro">
        Nairobi Fumigation is a trusted pest control company serving homes and businesses across Nairobi. 
        With years of experience, we provide effective, safe, and affordable solutions to keep your environment pest-free.
      </p>

      <section className="why-choose-us">
        <h3>Why Choose Us?</h3>
        <ul>
          <li>✅ Experienced & Certified Technicians</li>
          <li>✅ Eco-Friendly & Safe Products</li>
          <li>✅ Fast & Reliable Service</li>
          <li>✅ Affordable Pricing</li>
          <li>✅ Customer Satisfaction Guaranteed</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
