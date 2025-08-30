import React from 'react'
import "../Styles/Footer.css";
 import headerlogo from "../Assests/headerlogo.webp";

const Footer = () => {
  return (
    <section className="footer ">
        <div className="container">
            <div className="row">
                {/* <div className="col-lg-12"> */}
                    <div className="footerparent">
                 
                        
                        <div className="col-lg-4">
                      <div className="Footerleftside">
                            <img src={headerlogo} width={35} />
                            <p className="logotext">GAMEClub</p>

                      



                    </div>
                    </div>
                       <div className="col-lg-4">

                             <div className="footeralllink">
                    <ul className="footlist">

                   
                  <li>  <a href="#" className="games">Games</a></li>
               <li><a href="#" className="leaderboard">Leaderboard</a></li> 
                    
                  <li> <a href="#" className="tournaments">Tournaments</a></li> 
                   <li> <a href="#" className="spin & win">Spin & Win</a></li> 
                   
                    </ul>

                    {/* <div className="footerlogos">
                        <h2 className="footerlast">Follow us on Social media</h2>
                        <div className="lastlogo">
                        <i className="ri-facebook-box-fill"></i>
                        <i className="ri-twitter-fill"></i>
                        <i className="ri-youtube-fill"></i>
                        <i className="ri-instagram-line"></i>
                        </div>

                    </div> */}
                  </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="footerlogos">
                        <h2 className="footerlast">Follow us on Social media</h2>
                        <div className="lastlogo">
                        <i className="ri-facebook-box-fill"></i>
                        <i className="ri-twitter-fill"></i>
                        <i className="ri-youtube-fill"></i>
                        <i className="ri-instagram-line"></i>
                        </div>

                    </div>
                    </div>

                    {/* </div> */}

                   

                </div>

                 <div className="col-lg-12">
                        <div className="copyright">
                            <a href="#">Copyright © 2023. All rights reserved</a>

                        </div>

                    </div>

            </div>

        </div>


    </section>
  )
}

export default Footer