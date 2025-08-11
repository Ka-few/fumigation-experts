import "./Services.css";

function Services() {
  const services = [
    {
      title: "General Fumigation",
      description: "Effective removal of pests such as cockroaches, bedbugs, and ants from homes and offices.",
      icon: "🐜"
    },
    {
      title: "Bedbug Control",
      description: "Protect your home from bedbugs.",
      icon: "𓆣"
    },
    {
      title: "Rodent Control",
      description: "Safe and humane solutions to eliminate rats and mice from your premises.",
      icon: "🐭"
    },
    {
      title: "Garden Pest Control",
      description: "Protect your plants and lawn from insects without harming the environment.",
      icon: "🌱"
    }
  ];

  return (
    <div className="services-page">
      <h2>Our Services</h2>
      <p className="services-intro">
        We provide professional pest control and fumigation services across Nairobi and its surroundings.
      </p>
      <div className="services-grid">
        {services.map((service, index) => (
         <div className="service-card" key={index} data-aos="fade-up">
            <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                 <p>{service.description}</p>
      </div>
  ))}
</div>

    </div>
  );
}

export default Services;
