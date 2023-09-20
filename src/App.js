import React from "react";
import styles from "./styles";


import {
  IslandInfo,
  Navbar,
  Hero,
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
    <div className={`bg-[#FFF9FD]${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className={`${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>

      </div>
      <IslandInfo />

    </div>
  </div>
);


export default App;
