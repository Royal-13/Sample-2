type Props = {};

function Carousel({}: Props) {
  return (
    <>
    {/* <!-- Plugins JS File --> */}
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/imagesloaded/imagesloaded.pkgd.min.js"></script>
    <script src="vendor/elevatezoom/jquery.elevatezoom.min.js"></script>
    <script src="vendor/magnific-popup/jquery.magnific-popup.min.js"></script>

    <script src="vendor/owl-carousel/owl.carousel.min.js"></script>
    <script src="vendor/jquery.plugin/jquery.plugin.min.js"></script>
    <script src="vendor/jquery.countdown/jquery.countdown.min.js"></script>
    {/* <!-- Main JS File --> */}
    <script src="js/main.min.js"></script>
    <main className="main">
      <div className="page-content">
        <section className="intro-section">
          <div
            className="owl-carousel owl-theme row owl-nav-arrow owl-nav-fade  intro-slider mb-2 animation-slider cols-1 gutter-no"
            data-owl-options="{
            'nav': false,
            'dots': false,
            'loop': true,
            'items': 1,
            'autoplay': true,
            'responsive': {
                '992': {
                    'nav': true
                }
            }
        }"
          >
            <div className="banner banner-fixed intro-slide1">
              <figure>
                <img
                  src="/images/demos/demo7/slides/1.jpg"
                  alt="intro-banner"
                  width="1903"
                  height="912"
                />
              </figure>
              <div className="container">
                <div className="banner-content y-50 d-block d-lg-flex align-items-center">
                  <div
                    className="banner-content-left slide-animate"
                    data-animation-options="{
                            'name': 'fadeInLeftShorter', 'duration': '1s'
                        }"
                  >
                    <h4 className="banner-subtitle text-uppercase text-dark">
                      The Riode Shoes Store
                    </h4>
                    <h3 className="banner-title text-uppercase text-dark">
                      Spring Crick
                    </h3>
                  </div>
                  <div
                    className="banner-content-right ml-lg-auto slide-animate"
                    data-animation-options="{
                            'name': 'fadeInRightShorter', 'duration': '1s'
                        }"
                  >
                    <h4 className="banner-subtitle text-primary text-uppercase font-weight-bold">
                      Best Sellers
                    </h4>
                    <h3 className="banner-title text-uppercase text-white font-weight-bold mb-6">
                      Chooses to extra comfort all around
                    </h3>
                    <a
                      href="demo7-shop.html"
                      className="btn btn-dark btn-rounded"
                    >
                      Shop Now<i className="d-icon-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="banner banner-fixed intro-slide2">
              <figure>
                <img
                  src="/2.jpg"
                  alt="intro-banner"
                  width="1903"
                  height="912"
                />
              </figure>
              <div className="container">
                <div className="banner-content y-50 pl-2">
                  <div
                    className="slide-animate"
                    data-animation-options="{
                            'name': 'fadeInRightShorter'
                        }"
                  >
                    <h4 className="banner-subtitle text-uppercase text-primary ls-s">
                      From Online store
                    </h4>
                    <h3 className="banner-title text-dark ls-m">
                      Originals Comper Star. Shoes
                    </h3>
                    <p className="font-weight-semi-bold text-uppercase">
                      f o r - M e n<span>Product identifier: dD1160</span>
                    </p>
                    <a
                      href="demo7-shop.html"
                      className="btn btn-dark btn-rounded"
                    >
                      Shop Now<i className="d-icon-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
    </>
  );
}
export default Carousel;
