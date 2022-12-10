import Navigation from "../components/Navigation";
import Search from "../components/Search";
import Footer from "../components/Footer";
import CurrentWheater from "../components/Current-wheater.js";
import { WHEATER_API_KEY, WHEATER_API_URL } from "../api/api";
import { useState } from "react";
import Forecast from "../components/Forecast";

function Wheater() {
  const [currentWheater, setCurrentWheater] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWheaterFetch = fetch(`${WHEATER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WHEATER_API_KEY}&units=metric`);
    const forecastFetch = fetch(`${WHEATER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WHEATER_API_KEY}&units=metric`);

    Promise.all([currentWheaterFetch, forecastFetch])
      .then(async (renponse) => {
        const wheaterResponse = await renponse[0].json();
        const forecastResponse = await renponse[1].json();

        setCurrentWheater({ city: searchData.label, ...wheaterResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };

  console.log(currentWheater);
  console.log(forecast);

  return (
    <>
      <Navigation />
      <div className="wheater">
        <h1>Cari Kota Yang Akan Kamu Tuju</h1>
        <p>Ketahui kondisi cuaca sebelum kamu berpergian</p>
        <Search onSearchChange={handleOnSearchChange} />
        {currentWheater && <CurrentWheater data={currentWheater} />}
        {forecast && <Forecast data={forecast} />}
      </div>

      <Footer />
    </>
  );
}

export default Wheater;
