import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import "./Promotions.scss";

export const Promotions = () => {
  return (
    <div className="Promotions">
      <div>
        <Carousel
          showIndicators={false}
          showStatus={false}
          show
          showThumbs={false}
          infiniteLoop
        >
          <div className="card">
            <span>Services</span>
            <div className="icons">
              <div className="info">
                <i className="fas fa-car-side"></i>
                Personal Auto
              </div>
              <div className="info">
                <i className="fas fa-motorcycle"></i>
                Motorcycle
              </div>
              <div className="info">
                <i className="fas fa-house-user"></i>
                House
              </div>
            </div>
          </div>
          <div className="card">
            <span>Services</span>
            <div className="icons">
              <div className="info">
                <i className="fas fa-car-side"></i>
                Personal Auto
              </div>
              <div className="info">
                <i className="fas fa-motorcycle"></i>
                Motorcycle
              </div>
              <div className="info">
                <i className="fas fa-house-user"></i>
                House
              </div>
            </div>
          </div>
          <div className="card">
            <span>Services</span>
            <div className="icons">
              <div className="info">
                <i className="fas fa-car-side"></i>
                Personal Auto
              </div>
              <div className="info">
                <i className="fas fa-motorcycle"></i>
                Motorcycle
              </div>
              <div className="info">
                <i className="fas fa-house-user"></i>
                House
              </div>
            </div>
          </div>
        </Carousel>
      </div>

      <div>
        <Carousel
          showIndicators={false}
          showStatus={false}
          show
          showThumbs={false}
          infiniteLoop
        >
          <div className="card2">
            <span>Newsletter</span>
            <div className="icons">
              <div className="info">
                <i className="fas fa-car-side"></i>
                Personal Auto
              </div>
              <div className="info">
                <i className="fas fa-motorcycle"></i>
                Motorcycle
              </div>
              <div className="info">
                <i className="fas fa-house-user"></i>
                House
              </div>
            </div>
          </div>
          <div className="card2">
            <span>Newsletter</span>
            <div className="icons">
              <div className="info">
                <i className="fas fa-car-side"></i>
                Personal Auto
              </div>
              <div className="info">
                <i className="fas fa-motorcycle"></i>
                Motorcycle
              </div>
              <div className="info">
                <i className="fas fa-house-user"></i>
                House
              </div>
            </div>
          </div>
          <div className="card2">
            <span>Newletter</span>
            <div className="icons">
              <div className="info">
                <i className="fas fa-car-side"></i>
                Personal Auto
              </div>
              <div className="info">
                <i className="fas fa-motorcycle"></i>
                Motorcycle
              </div>
              <div className="info">
                <i className="fas fa-house-user"></i>
                House
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};
