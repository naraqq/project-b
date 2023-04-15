import React, { useEffect, useRef } from "react";
import $ from "jquery";
import "slick-carousel/slick/slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function OurPartners() {
  const sliderRef = useRef(null);

  useEffect(() => {
    $(sliderRef.current).slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 3,
          },
        },
      ],
    });
  }, []);
  return (
    <div className="partners">
      <div className="container">
        <section ref={sliderRef} className="customer-logos slider">
          <div className="slide flex items-center justify-center">
            <img src="barilga_hot_yam.png" />
          </div>
          <div className="slide flex items-center justify-center">
            <img src="barilga_hugjil_tuw.jpg" />
          </div>
          <div className="slide flex items-center justify-center">
            <img src="hurd_group.png" />
          </div>
          <div className="slide flex items-center justify-center">
            <img src="mak_euro_cement.png" />
          </div>
          <div className="slide flex items-center justify-center">
            <img src="montsement.png" />
          </div>
          <div className="slide flex items-center justify-center">
            <img src="tdb.jpg" />
          </div>
          <div className="slide flex items-center justify-center">
            <img src="tseetsee.jpg" />
          </div>
          <div className="slide flex items-center justify-center">
            <img src="tsement_shohoi_tuhk.jpg" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default OurPartners;
