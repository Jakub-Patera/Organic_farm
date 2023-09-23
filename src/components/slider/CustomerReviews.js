import { Fragment, useState } from "react";
import Slider from "react-slick";
const CustomerReviews = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const props = {
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 400,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (current, next) => setSlideIndex((next / 2) * 100),
  };
  return (
    <Fragment>
      <div className="feedback-content-area rmb-65 wow fadeInLeft delay-0-2s">
        <div className="section-title mb-50">
          <span className="sub-title mb-20">Customer Reviews</span>
          <h2>Valuable {`Customer’s`} Feedback (Reviews)</h2>
        </div>
        <div
          className="progress"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={50}
          style={{ backgroundSize: `${slideIndex}% 100%` }}
        >
          <span className="slider__label sr-only">50% completed</span>
        </div>

        <Slider {...props} className="feedback-active mt-20">
          <div className="feedback-item">
            <p>
              Sit amet consectetur adipiscing elit eiusmod tempor incididunt
              labore et dolore magna aliqua euis ipsum suspendisse ultrices
              gravid aisuscom viverra maecenas accumsan facilisis
            </p>
            <div className="feedback-author">
              <img src="assets/images/reviews/fb-author1.png" alt="Authro" />
              <div className="title">
                <h4>Michael D. Foreman</h4>
                <span>CEO &amp; Founder</span>
              </div>
              <div className="ratting">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
            </div>
          </div>
          <div className="feedback-item">
            <p>
              Suspendisse ultrices gravid aisuscom viverra maecenas accumsan
              facilisis Sit amet elitt adipiscing eiusmod tempor incididunt
              labore et dolore magna aliqua euis ipsum
            </p>
            <div className="feedback-author">
              <img src="assets/images/reviews/fb-author1.png" alt="Authro" />
              <div className="title">
                <h4>Robert Hasib</h4>
                <span>Co-Founder</span>
              </div>
              <div className="ratting">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
            </div>
          </div>
          <div className="feedback-item">
            <p>
              Sit amet consectetur adipiscing elit eiusmod tempor incididunt
              labore et dolore magna aliqua euis ipsum suspendisse ultrices
              gravid aisuscom viverra maecenas accumsan facilisis
            </p>
            <div className="feedback-author">
              <img src="assets/images/reviews/fb-author1.png" alt="Authro" />
              <div className="title">
                <h4>Michael D. Foreman</h4>
                <span>CEO &amp; Founder</span>
              </div>
              <div className="ratting">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </Fragment>
  );
};
export default CustomerReviews;
