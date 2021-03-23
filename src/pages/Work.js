import React from "react";
import Navbar from "../Components/Navigation/Navbar";
import pimg1 from "./images/portfolio-item1.jpg";
import pimg2 from "./images/portfolio-item2.jpg";
import pimg3 from "./images/portfolio-item3.jpg";
import pimg4 from "./images/portfolio-item4.jpg";
import pimg5 from "./images/portfolio-item5.jpg";
import pimg6 from "./images/portfolio-item6.jpg";
import pimg7 from "./images/portfolio-item7.jpg";
import pimg8 from "./images/portfolio-item8.jpg";
import pimg9 from "./images/portfolio-item9.jpg";
import pimg10 from "./images/portfolio-item10.jpg";
import pimg11 from "./images/portfolio-item11.jpg";
import pimg12 from "./images/portfolio-item12.jpg";

const Work = () => {
  return (
    <div>
      <Navbar />

      <section>
        <div class="title">
          <h1>Some of our finest work</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
            iusto molestias accusamus rem nobis est, et laborum harum doloremque
            nemo non, minima quos totam labore maxime iste alias ut esse?
            Repellat eaque reiciendis laboriosam corporis fuga vero ratione
            veritatis numquam, libero magni voluptatum omnis molestiae officiis
            exercitationem qui quidem nam.
          </p>
        </div>

        <div class="portfolio">
          <div class="item">
            <img src={pimg1} alt="" />
            <div class="action">
              <a href="#">Launch</a>
            </div>
          </div>
          <div class="item">
            <img src={pimg2} alt="" />
            <div class="action">
              <a href="#">Launch</a>
            </div>
          </div>
          <div class="item">
            <img src={pimg3} alt="" />
            <div class="action">
              <a href="#">Launch</a>
            </div>
          </div>
          <div class="item">
            <img src={pimg4} alt="" />
            <div class="action">
              <a href="#">Launch</a>
            </div>
          </div>
          <div class="item">
            <img src={pimg5} alt="" />
            <div class="action">
              <a href="#">Launch</a>
            </div>
          </div>
          <div class="item">
            <img src={pimg6} alt="" />
            <div class="action">
              <a href="#">Launch</a>
            </div>
          </div>
          <div class="item">
            <img src={pimg7} alt="" />
            <div class="action">
              <a href="#">Launch</a>
            </div>
          </div>
          <div class="item">
            <img src={pimg8} alt="" />
            <div class="action">
              <a href="#">Launch</a>
            </div>
          </div>
          <div class="item">
            <img src={pimg9} alt="" />
            <div class="action">
              <a href="#">Launch</a>
            </div>
          </div>
          <div class="item">
            <img src={pimg10} alt="" />
            <div class="action">
              <a href="#">Launch</a>
            </div>
          </div>
          <div class="item">
            <img src={pimg11} alt="" />
            <div class="action">
              <a href="#">Launch</a>
            </div>
          </div>
          <div class="item">
            <img src={pimg12} alt="" />
            <div class="action">
              <a href="#">Launch</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
