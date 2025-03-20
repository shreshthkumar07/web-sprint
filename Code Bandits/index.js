import React from "react";
import image from "./image.svg";
import pic61 from "./pic6-1.png";
import pic81 from "./pic8-1.png";
import presentationWorkActivityW2Cv8G5C9Z from "./presentation-work-activity-w2cv8g5c9z.png";
import shoppingCartVgzjf9Btte from "./shopping-cart-vgzjf9btte.png";
import "./style.css";
import vector2 from "./vector-2.svg";
import vector3 from "./vector-3.svg";
import vector4 from "./vector-4.svg";
import vector from "./vector.svg";

export const Desktop = () => {
  return (
    <div className="desktop">
      <div className="div">
        <div className="frame">
          <img className="pic" alt="Pic" src={pic61} />

          <p className="indulge-in-the">
            Indulge in the finest <br />
            flavors, delivered to your doorstep.
          </p>

          <img className="img" alt="Pic" src={pic81} />
        </div>

        <div className="subscription">
          <img
            className="https-lottiefiles"
            alt="Https lottiefiles"
            src={shoppingCartVgzjf9Btte}
          />

          <div className="text-wrapper">SUBSCRIBE TO THE DELICIOUSNESS</div>
        </div>

        <div className="box-craft">
          <p className="create-your-perfect">
            Create Your Perfect Gourmet <br />
            Box!
          </p>

          <div className="group">
            <div className="overlap-group">
              <div className="text-wrapper-2">Buy Now</div>
            </div>
          </div>

          <img
            className="https-lottiefiles-2"
            alt="Https lottiefiles"
            src={presentationWorkActivityW2Cv8G5C9Z}
          />
        </div>

        <div className="frame-2" />

        <div className="frame-3">
          <div className="text-wrapper-3">Epicure Box</div>

          <div className="group-2">
            <img className="vector" alt="Vector" src={vector2} />

            <div className="text-wrapper-4">support@epicurebox.com</div>
          </div>

          <div className="group-3">
            <img className="vector-2" alt="Vector" src={vector3} />

            <div className="text-wrapper-5">+91 8744168484</div>
          </div>

          <div className="group-4">
            <img className="vector" alt="Vector" src={vector4} />

            <div className="text-wrapper-6">Lalpur, Ranchi</div>
          </div>
        </div>

        <div className="overlap-wrapper">
          <div className="overlap">
            <div className="navbar">
              <div className="text-wrapper-7">Subscription</div>

              <div className="text-wrapper-8">Review</div>

              <div className="text-wrapper-9">Box Craft</div>

              <div className="text-wrapper-10">Contact us</div>

              <div className="text-wrapper-11">Home</div>
            </div>

            <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <div className="text-wrapper-12">Epicure Box</div>

                <img className="vector-3" alt="Vector" src={image} />

                <img className="vector-4" alt="Vector" src={vector} />
              </div>
            </div>

            <div className="frame-4" />
          </div>
        </div>
      </div>
    </div>
  );
};
