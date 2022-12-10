import "../styles/TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/kawahputih1.jpeg";
import Trip2 from "../assets/tangkuban1.jpeg";
import Trip3 from "../assets/maribaya.jpeg";
import Trip4 from "../assets/deranch.jpeg";
import Trip5 from "../assets/pulauseribu.jpeg";
import Trip6 from "../assets/dufan.jpeg";
import Trip7 from "../assets/ujunggenteng.jpeg";
import Trip8 from "../assets/canyon.jpeg";
import Trip9 from "../assets/tamansafari.jpeg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trip</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip In Kawah Putih"
          text="Tempat wisata Kawah Putih Ciwidey Bandung merupakan salah satu tempat wisata di Bandung Selatan yang populer banget. Terletak di kaki Gunung Patuha, Kecamatan Rancabali, Kabupaten Bandung, Provinsi Jawa Barat, Kawah Putih
          Ciwidey Bandung adalah salah satu wisata alam di Bandung yang terangkat banget berkat foto-foto Instagramable yang diambil di sini. kurang lebih 30 menit menggunakan kendaraan bermotor."
          price="250.000/org"
        />
        <TripData
          image={Trip2}
          heading="Trip In Tangkuban Perahu"
          text="Panorama alam yang berada d daerahi Lembang, kurang lebih 30 km sebelah utara kota Bandung, menyajikan pesona alam yang begitu mengagumkan. Tangkuban Perahu, merupakan salah satu gunung berapi yang berada di Jawa Barat, tepatnya
          di Lembang, kurang lebih 30 km sebelah utara kota Bandung dengan ketinggian 2084 Meter dari atas permukaan laut. Untuk menuju kesana diperlukan waktu kurang lebih 30 menit menggunakan kendaraan bermotor."
          price="300.000/org"
        />
        <TripData
          image={Trip3}
          heading="Trip In Maribaya"
          text="The Lodge Maribaya adalah salah satu tempat wisata di Lembang yang menawarkan berbagai hal pada pengunjung. Disini kita bisa melakukan berbagai akitivitas seperti camping, trekking mengelilingi area hutan pinus yang indah, acara gathering dan team building, atau bahkan hanya sekedar refreshing menikmati kuliner."
          price="200.000/org"
        />
        <TripData
          image={Trip4}
          heading="Trip In De'ranch"
          text="Konsep tempat wisata keluarga di Bandung ini mengusung konsep Western/Cowboy. Kita bisa bermain atau menunggang kuda, berfoto dengan kostum koboy yang tersedia, mengelilingi area dengan kuda, dan lain sebagainya.
          Pastinya, anak-anak bakal senang banget bermain disini. Dengan konsep yang lumayan beda dengan tempat lainnya di Lembang, tentu bisa memberikan suasana segar bagi anda yang berlibur kesini."
          price="150.000/org"
        />
        <TripData
          image={Trip5}
          heading="Trip In Pulau Seribu"
          text="Seperti namanya, Pulau Seribu terdiri dari sederetan pulau-pulau kecil, meski jumlahnya tidak bendar-benar seribu. Ada pulau yang berpenduduk, ada pulau resort, dan ada pulau privat. Sebagian besar pulau di wilayah administrasi ini memang terbuka untuk aktivitas pariwisata, namun ada juga pulau yang diperuntukkan untuk kawasan konservasi, serta pulau yang murni digunakan untuk keperluan pribadi oleh pemiliknya.
          "
          price="750.000/org"
        />
        <TripData
          image={Trip6}
          heading="Trip In Dufan"
          text="Dunia Fantasi atau yang lebih populer dengan sebutan Dufan, pertama kali dibuka untuk umum pada 29 Agustus 1985 dan merupakan theme park pertama yang dikembangkan oleh Perseroan dan telah memiliki sertifikat ISO 9001:2015 sejak Februari 2017.
          Selain menjadi pusat hiburan outdoor, Dufan juga merupakan kawasan edutainment fisikia terbesar di Indonesia yang memanjakan pengunjung dengan Fantasi Keliling Dunia, melalui wahana permainan berteknologi tinggi, yang terbagi dalam 9 (Sembilan) kawasan yaitu Indonesia, Jakarta, Asia, Eropa, Amerika, Yunani, Hikayat, Kalila dan Fantasy Lights."
          price="500.000/org"
        />
        <TripData
          image={Trip7}
          heading="Trip In Pantai Ujung Genteng"
          text="PANTAI Ujung Genteng adalah destinasi wisata yang cocok bagi Anda yang ingin piknik menikmati keindahan alam, pasir putih, suasana asri dan jauh dari hiruk pikuk perkotaan. Letaknya di Desa Ujung Genteng, Kecamatan Ciracap, Kabupaten Sukabumi, Jawa Barat.
          Pantai Ujung Genteng yang berhadapan langsung dengan Samudera Hindia sungguh memesona."
          price="850.000/org"
        />
        <TripData
          image={Trip8}
          heading="Trip In Green Canyon"
          text="Green Canyon merupakan wisata alam berupa aliran sungai yang diapit oleh dua buah bukit bebatuan yang menembus gua. Pada mulut goa dihiasi gemercik tetesan air yang menyerupai hujan abadi yang memberikan kesan kesempurnaan akan keindahan alam.

          Destinasi wisata yang terletak di Desa Kertayasa, Kecamatan Cijulang, Kabupaten Pangandaran ini memiliki beberapa titik atraksi wisata diantaranya Gua Cukang Taneuh, Batu Tengah, Batu Payung dan Pemandian Putri. Green Canyon menawarkan aktivitas wisata mulai dari berperahu untuk wisatawan yang hanya ingin sekedar menikmati pemandangan alam, berenang, body rafting, terjun ke dalam air dan menjelajahi tebing bagi wisatawan yang menyukai tantangan yang memacu adrenalin."
          price="300.000/org"
        />
        <TripData
          image={Trip9}
          heading="Trip In Taman Safari"
          text="Keunikan tempat wisata ini dari kebun binatang lainnya di Indonesia adalah pengunjungnya bisa berkeliling ke berbagai tempat untuk bisa melihat dari dekat semua jenis binatang dengan memakai mobil pribadi ataupun naik bus yang sudah disediakan pihak pengelola Taman Safari. Pengunjung juga bisa berinteraksi langsung dengan memberi makan hewan-hewan tersebut."
          price="450.000/org"
        />
      </div>
    </div>
  );
}

export default Trip;
