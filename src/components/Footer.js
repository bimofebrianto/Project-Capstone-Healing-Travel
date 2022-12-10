import "../styles/FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Healing Travel</h1>
          <p>Lets you explore the best</p>
        </div>
        <div>
          <a href="https://api.whatsapp.com/send?phone=">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a href="https://www.instagram.com/">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.tiktok.com/">
            <i className="fa-brands fa-tiktok"></i>
          </a>
        </div>
      </div>

      <div className="bottom">
        <div>
          <a href="/about">About</a>
          <a href="/service">Service</a>
          <a href="/order">Order</a>
          <a href="/wheater">Wheater</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
