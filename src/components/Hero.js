import "../styles/Hero.css";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt="Travel" src={props.heroImg} />

        <div className="hero-text">
          <h1>{props.tittle}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass}>
            {props.buttonText}
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
