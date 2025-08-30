import React from "react";
import "../Styles/Hero.css";
// import "../Styles/Commonstyles.css"
//   import headerlogo from "../Assests/headerlogo.webp";

const Hero = () => {
  return (
    <section className="hero  main-paragraph">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="herocontent">
              <h2 className="herohead">Explore PopularGames</h2>
              <div className="heropara main-paragraph">
                Lorem ipsum dolor sit amet consectetur. Quam enim ut rutrum
                neque viverra placerat facilisis. Donec mi morbi in amet gravida
                euismod amet.{" "}
              </div>

              <div className="herobuttons">
                <button className="round-button  linearcolor">Play Game</button>
                <button className="round-button whiteborder">
                  Download Game
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
