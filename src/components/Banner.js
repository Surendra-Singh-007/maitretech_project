import "./Banner.css";
import React from "react";
// import images from "./images"
export const Banner = () => {
  return (
    <div>
      <div class="carousel-wrapper">
        <span id="item-1"></span>
        <span id="item-2"></span>
        <span id="item-3"></span>
        <div class="carousel-item item-1">
          <a class="arrow arrow-prev " href="#item-5"></a>
          <a class="arrow arrow-next " href="#item-2"></a>
        </div>

        <div class="carousel-item item-2">
          <a class="arrow arrow-prev" href="#item-1"></a>
          <a class="arrow arrow-next" href="#item-3"></a>
        </div>

        <div class="carousel-item item-3">
          <a class="arrow arrow-prev" href="#item-2"></a>
          <a class="arrow arrow-next" href="#item-4"></a>
        </div>

        <div class="carousel-item item-4">
          <a class="arrow arrow-prev" href="#item-3"></a>
          <a class="arrow arrow-next" href="#item-5"></a>
        </div>

        <div class="carousel-item item-5">
          <a class="arrow arrow-prev" href="#item-4"></a>
          <a class="arrow arrow-next" href="#item-1"></a>
        </div>
      </div>

      <div id="markque-container">
        <div class="container">
          <div id="part-marq">
            <div id="headingdd">
              <h3>Nifa Updates:: </h3>
            </div>
            <div id="marqueeq">
              <marquee
                behavior="scroll"
                direction="left"
                scrollamount="3"
                scrolldelay="1"
                onmouseover="this.stop()"
                onmouseout="this.start()"
              >
                <p>
                  <strong>
                    All NIFA courses are now available worldwide through our
                    Live and Interactive Online Classes. Please&nbsp;download
                    the NIFA app from our online classes page to register for a
                    complimentary trial class.
                  </strong>
                </p>
              </marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
