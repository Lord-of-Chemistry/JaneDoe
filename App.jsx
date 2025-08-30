function Head() {
  return (
    <div className="head">
      <h1>JANE DOE</h1>
      <h3>Software Developer</h3>
    </div>
  );
}

function Contact() {
  return (
    <div className="contact">
      <p className="icons">
        <ion-icon name="call"></ion-icon> +1 (234) 567-8901
      </p>
      <p className="icons">
        <ion-icon name="mail"></ion-icon>jane.doe@example.com
      </p>
      <p className="icons">
      <ion-icon name="globe"></ion-icon>www.janedoe.com
      </p>
    </div>
  );
}

function Card() {
  return (
    <div className="card">
      <div className="logo">
        <img src="src/assets/react.svg" alt="react logo" />
      </div>
      <div className="info">
        <div>
          <Head />
        </div>
        <div>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default Card;
