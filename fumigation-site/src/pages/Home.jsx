import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-left">
          <h1>Protect Your Home & Business</h1>
          <p>
            We offer professional fumigation and pest control services in Nairobi — 
            safe, fast, and affordable solutions for a pest-free environment.
          </p>
          <Link to="/contact" className="cta-button">Get a Quote</Link>
        </div>

        <div className="hero-right">
          <img
            src="https://safitimepestcontrol.co.ke/wp-content/uploads/2023/12/safitime-pest-control-1.jpg"
            alt="Fumigation service"
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
