import React from 'react'
import "../Styles/Competition.css";
 import mask from "../Assests/mask.webp";

const Competition = () => {
  return (
    <section className="competition main-padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="backcompetition">
                        <img src={mask} />
                        <div className="maskhead">
                            <h2 className="maskh">GAMES COMPETITIONS</h2>
                            <p className="maskp">Compete To Be Top In Leader Board And Win Cash Prizes.</p>

                            <div className="maskbutton">
                                <button  className="round-button  linearcolor">Load More</button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </section>
  )
}

export default Competition