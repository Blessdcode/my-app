import React from "react";
import styles from "./styles";


import {
  Navbar,
  Hero,
  IslandInfo,
  Service,
  Testimonials,
  About,
  Theater,
  FAQs,
  Contact,
  Footer,
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
    <div className={`${styles.boxWidth} m-auto`}>
      <IslandInfo />
    </div>
    <div className={`${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth} m-auto`}>
        <Service />
        <Testimonials />
        <About />
        <Theater />
        <FAQs />
      </div>
    </div>
    <div className={`${styles.boxWidth} m-auto gradient `}>
      <Contact />
      <Footer />
    </div>
  </div>
);


export default App;
