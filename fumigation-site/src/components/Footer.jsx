import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Nairobi Fumigation. All rights reserved.</p>
        <p>Designed with ❤️ in Nairobi</p>
      </div>
    </footer>
  );
}

export default Footer;
