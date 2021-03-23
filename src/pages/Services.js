import React from "react";
import Navbar from "../Components/Navigation/Navbar";
import simg1 from "./images/001.png";
import simg2 from "./images/002.png";
import simg3 from "./images/003.png";
import simg4 from "./images/004.png";
import simg5 from "./images/005.png";
import simg6 from "./images/006.png";

const Services = () => {
  return (
    <div>
      <Navbar />
      <section>
        <div className="title">
          <h1>Services that we can help you with</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
            iusto molestias accusamus rem nobis est, et laborum harum doloremque
            nemo non, minima quos totam labore maxime iste alias ut esse?
            Repellat eaque reiciendis laboriosam corporis fuga vero ratione
            veritatis numquam, libero magni voluptatum omnis molestiae officiis
            exercitationem qui quidem nam.
          </p>
        </div>
        <div className="services">
          <div className="service">
            <div className="icon">
              <img src={simg1} alt="" />
            </div>
            <h2>Design</h2>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
            omnis nemo sapiente in quidem sed dolores cumque! Ut, est aliquid!
          </div>
          <div className="service">
            <div className="icon">
              <img src={simg2} alt="" />
            </div>
            <h2>Development</h2>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
            omnis nemo sapiente in quidem sed dolores cumque! Ut, est aliquid!
          </div>
          <div className="service">
            <div className="icon">
              <img src={simg3} alt="" />
            </div>
            <h2>SEO</h2>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
            omnis nemo sapiente in quidem sed dolores cumque! Ut, est aliquid!
          </div>
          <div className="service">
            <div className="icon">
              <img src={simg4} alt="" />
            </div>
            <h2>Marketing</h2>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
            omnis nemo sapiente in quidem sed dolores cumque! Ut, est aliquid!
          </div>
          <div className="service">
            <div className="icon">
              <img src={simg5} alt="" />
            </div>
            <h2>App Development</h2>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
            omnis nemo sapiente in quidem sed dolores cumque! Ut, est aliquid!
          </div>
          <div className="service">
            <div className="icon">
              <img src={simg6} alt="" />
            </div>
            <h2>Error Fixing</h2>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
            omnis nemo sapiente in quidem sed dolores cumque! Ut, est aliquid!
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
