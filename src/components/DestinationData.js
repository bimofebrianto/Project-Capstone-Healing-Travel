import "../styles/Destination.css";
import Tangkuban1 from "../assets/tangkuban1.jpeg";
import Tangkuban2 from "../assets/tangkuban2.jpeg";
import Kawahputih1 from "../assets/kawahputih1.jpeg";
import Kawahputih2 from "../assets/kawahputih2.jpeg";
import Dufan1 from "../assets/dufan.jpeg";
import Dufan2 from "../assets/Dufan2.jpeg";

const DestinationData = () => {
  return (
    <>
      <div className="first-des">
        <div className="des-text">
          <h2>Tangkuban Parahu</h2>
          <p>
            Panorama alam yang berada d daerahi Lembang, kurang lebih 30 km sebelah utara kota Bandung, menyajikan pesona alam yang begitu mengagumkan. Tangkuban Perahu, merupakan salah satu gunung berapi yang berada di Jawa Barat, tepatnya
            di Lembang, kurang lebih 30 km sebelah utara kota Bandung dengan ketinggian 2084 Meter dari atas permukaan laut. Untuk menuju kesana diperlukan waktu kurang lebih 30 menit menggunakan kendaraan bermotor.
          </p>
        </div>

        <div className="image">
          <img alt="img" src={Tangkuban1} />
          <img alt="img" src={Tangkuban2} />
        </div>
      </div>

      <div className="first-des">
        <div className="des-text">
          <h2>Kawah Putih</h2>
          <p>
            Tempat wisata Kawah Putih Ciwidey Bandung merupakan salah satu tempat wisata di Bandung Selatan yang populer banget. Terletak di kaki Gunung Patuha, Kecamatan Rancabali, Kabupaten Bandung, Provinsi Jawa Barat, Kawah Putih
            Ciwidey Bandung adalah salah satu wisata alam di Bandung yang terangkat banget berkat foto-foto Instagramable yang diambil di sini. kurang lebih 30 menit menggunakan kendaraan bermotor.
          </p>
        </div>

        <div className="image">
          <img alt="img" src={Kawahputih1} />
          <img alt="img" src={Kawahputih2} />
        </div>
      </div>

      <div className="first-des">
        <div className="des-text">
          <h2>Dufan</h2>
          <p>
            Dunia Fantasi atau yang lebih populer dengan sebutan Dufan, pertama kali dibuka untuk umum pada 29 Agustus 1985 dan merupakan theme park pertama yang dikembangkan oleh Perseroan dan telah memiliki sertifikat ISO 9001:2015 sejak
            Februari 2017. Selain menjadi pusat hiburan outdoor, Dufan juga merupakan kawasan edutainment fisikia terbesar di Indonesia yang memanjakan pengunjung dengan Fantasi Keliling Dunia, melalui wahana permainan berteknologi tinggi,
            yang terbagi dalam 9 (Sembilan) kawasan yaitu Indonesia, Jakarta, Asia, Eropa, Amerika, Yunani, Hikayat, Kalila dan Fantasy Lights.
          </p>
        </div>

        <div className="image">
          <img alt="img" src={Dufan1} />
          <img alt="img" src={Dufan2} />
        </div>
      </div>
    </>
  );
};

export default DestinationData;
