import React, { useEffect } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'remixicon/fonts/remixicon.css'
import "./Styles/Commonstyles.css";
import Header from './Components/Header';
import Hero from './Components/Hero';
import Instantgames from './Components/Instantgames';
import Marketplace from './Components/Marketplace';
import Download from './Components/Download';
import Competition from './Components/Competition';
import Footer from './Components/Footer';
//  import AOS from 'aos';
// import 'aos/dist/aos.css';

 function App() {
//    useEffect(() => {
//     AOS.init();
//   }, [])
  return (
    <>
      <Header />
      <Hero />
      <Instantgames />
      <Marketplace />
      <Download />
      <Competition />
      <Footer />

    </>
  );
}

export default App;
