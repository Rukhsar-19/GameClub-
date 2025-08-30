import React from 'react'
import "../Styles/Header.css";
// import "../Styles/Commonstyles.css"
  import headerlogo from "../Assests/headerlogo.webp";

  // header useefftect add
//   import { useEffect } from "react";

// function HeaderComponent() {
//   useEffect(() => {
//     const handleScroll = () => {
//       const header = document.querySelector(".header");
//       if (window.scrollY > 50) {
//         header.classList.add("sticky");
//       } else {
//         header.classList.remove("sticky");
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
// }

const Header = () => {
  return (
    <section className="header">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                     <div className="headerp">
                        <div className="headerleftside">
                            <img src={headerlogo} width={35} />
                            <p className="logotext">GAMEClub</p>

                        </div>
                         <div className="headeralllink">
                    <ul className="headlist">
                   
                  <li>  <a href="#" className="games">Games</a></li>
               <li><a href="#" className="leaderboard">Leaderboard</a></li> 
                    
                  <li> <a href="#" className="tournaments">Tournaments</a></li> 
                   <li> <a href="#" className="spin & win">Spin & Win</a></li> 
                   
                    </ul>
                  </div>
        
        <div className="headerlast">
            <div className="searchbox">
                <i className="ri-search-line"></i>

            </div>
                 <div className="linearbuttons">
                    <button  className="round-button">Subscribe</button>
                    
                   </div> 


        </div>

                    </div>

                </div>


            </div>

        </div>

    </section>
  )
}

export default Header