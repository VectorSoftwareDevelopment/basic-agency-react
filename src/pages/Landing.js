import React from "react";
import Navbar from "../Components/Navigation/Navbar";
import home_img from "./images/home-img.jpg";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <section className="home">
        <img src={home_img} className="home-img" alt="" />
        <div className="home-content">
          <h1>
            We help to achieve <br />
            your goals.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo itaque
            nam saepe vero voluptatem vel fuga a eaque earum alias ipsam
            aspernatur culpa maxime laboriosam, impedit quae officiis
            consectetur
          </p>
          <a href="/contact" className="btn">
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
};

export default Landing;
