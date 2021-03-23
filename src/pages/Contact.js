import React from "react";
import Navbar from "../Components/Navigation/Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <section>
        <div class="title">
          <h1>Contact us</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
            iusto molestias accusamus rem nobis est, et laborum harum doloremque
            nemo non, minima quos totam labore
          </p>
        </div>
        <div class="contact">
          <div class="contact-form">
            <form>
              <div class="row">
                <div class="input50">
                  <input type="text" placeholder="First Name" />
                </div>
                <div class="input50">
                  <input type="text" placeholder="Last Name" />
                </div>
              </div>
              <div class="row">
                <div class="input50">
                  <input type="text" placeholder="Email" />
                </div>
                <div class="input50">
                  <input type="text" placeholder="Subject" />
                </div>
              </div>
              <div class="row">
                <div class="input100">
                  <textarea placeholder="Message"></textarea>
                </div>
              </div>
              <div class="row">
                <div class="input100">
                  <input type="submit" value="Send" />
                </div>
              </div>
            </form>
          </div>

          <div class="contact-info">
            <div class="info-box">
              <img src="images/address.png" class="contact-icon" alt="" />
              <div class="details">
                <h4>Address</h4>
                <p>28 Neon Tower, New York City, USA</p>
              </div>
            </div>
            <div class="info-box">
              <img src="images/email.png" class="contact-icon" alt="" />
              <div class="details">
                <h4>Email</h4>
                <a href="mailto:anyone@example.com">anyone@example.com</a>
                <a href="mailto:anyone@example.com">anyone@example.com</a>
              </div>
            </div>
            <div class="info-box">
              <img src="images/call.png" class="contact-icon" alt="" />
              <div class="details">
                <h4>Call</h4>
                <a href="tel:+19785555555">+1 978 555 5555</a>
                <a href="tel:+19784444444">+1 978 555 4444</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
