import "../styles/Destination.css";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Beberapa rekomendasi wisata yang kerap dikunjungi wisatawan</p>
      <DestinationData />
    </div>
  );
};

export default Destination;
