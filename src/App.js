import React from "react";
import styles from "./styles";
import { Swipe } from "./components/Testimonials";


import {
  Navbar,
  Hero,
  IslandInfo,
  Service,
  Testimonials,
} from "./components"


const App = () => (
  <div className="bg-[#FFF9FD] w-full overflow-hidden">
    <div>
      <div className={`${styles.paddingX} ${styles.flexCenter}`} >
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
    </div>
    <div className={`${styles.flexStart} ${styles.paddingX}`}>
      <div className={`${styles.boxWidth} `}>
        <Hero />
      </div>
    </div>
    <div className={`${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth} m-auto`}>
        <IslandInfo />
        <Service />
        <Testimonials />
        <Swipe/>
      </div>
    </div>
  </div>
);


export default App;
