import "../styles/about.css";
import img1 from "../assets/12.jpg";

function AboutUs() {
  return (
    <div className="container">
      <div className="about-container">
        <div className="inner-container">
          <h1>About Us</h1>
          <p className="text">
            Kami dari kelompok C22-143 membuat website Healing Travel yang bertujuan untuk memperkenalkan tempat tempat wisata di daerah Jawa Barat yang wajib dikunjungi oleh beberapa wisatawan baik lokal maupun mancanegara. Website ini
            memiliki beberapa rekomendasi serta service khusus yang dapat kalian pilih sesuai dengan budget dari kalian masing masing.
          </p>
        </div>
      </div>

      <div className="center">
        <h1>Our Team</h1>
      </div>
      <div className="team">
        <div className="team-content">
          <div className="box">
            <img alt="img" src={img1} />
            <h3>Mohammad Syam Caturputra</h3>
          </div>
        </div>
        <div className="team-content">
          <div className="box">
            <img alt="img" src={img1} />
            <h3>Azka Hafiyyan Muflihan</h3>
          </div>
        </div>
        <div className="team-content">
          <div className="box">
            <img alt="img" src={img1} />
            <h3>Bimo Febrianto</h3>
          </div>
        </div>
        <div className="team-content">
          <div className="box">
            <img alt="img" src={img1} />
            <h3>Novaldi Tulus Yuridis Sinurat</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
