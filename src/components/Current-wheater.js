import "../styles/current-wheater.css";

const CurrentWheater = ({ data }) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
        <img alt="wheater" className="weather-icon" src={`icons/${data.weather[0].icon}.png`}></img>
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp)}°C</p>
      </div>
    </div>
  );
};

export default CurrentWheater;
