import "../styles/contact.css";

function Contact() {
  return (
    <>
      <div className="contact">
        <div class="inner-width">
          <h1 class="section-title">Get in touch</h1>
          <div class="contact-info">
            <div class="item">
              <a href="https://api.whatsapp.com/send?phone=">
                <i class="fa-brands fa-whatsapp"></i>
                +62 86969696969
              </a>
            </div>

            <div class="item">
              <a href="https://www.tiktok.com/">
                <i class="fa-brands fa-tiktok"></i>
                HealingTravel
              </a>
            </div>

            <div class="item">
              <a href="https://www.instagram.com/">
                <i class="fa-brands fa-instagram"></i>
                @HealingTravel
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
