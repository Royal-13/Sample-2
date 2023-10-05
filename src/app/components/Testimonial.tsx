type Props = {};

function Testimonial({}: Props) {
  return (
<>
{/* // <!-- Plugins JS File --> */}
<script src="/jquery/jquery.min.js" async></script>
  <script src="/magnific-popup/jquery.magnific-popup.min.js" async></script>
  <script src="/imagesloaded/imagesloaded.pkgd.min.js" async></script>
  <script src="/isotope/isotope.pkgd.min.js" async></script>
  <script src="/owl-carousel/owl.carousel.min.js" async></script>
  <script src="/parallax/parallax.min.js" async></script>
  {/* // <!-- Main JS File --> */}
  <script src="styles/js/main.min.js"></script>
<section className="mt-10 pt-6">
    <div className="container">
        <h2 className="title title-center">Centered</h2>
        <div className="owl-carousel owl-theme row cols-lg-3 cols-sm-2 cols-1" data-owl-options="{
            'items': 4,
            'nav': true,
            'dots': true,
            'loop': true,
            'autoplay': true, 'autoplayTimeout': 3000,
            'margin': 20,
            'responsive': {
                '0': {
                    'items': 1
                },
                '576': {
                    'items': 2
                },
                '575': {
                    'items': 3
                },
                '992': {
                    'items': 4,
                    'dots': true
                }
            }
        }">
            <div className="testimonial testimonial-centered">
                <div className="testimonial-info">
                    <h3 className="testimonial-title">What they say about us</h3>
                    <figure className="testimonial-author-thumbnail">
                        <img src="images/agents/4.jpg" alt="user" width="40" height="40" />
                    </figure>
                    <blockquote>“ Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
                        hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque ”</blockquote>
                    <cite>
                        Herman Beck
                        <span>Customer</span>
                    </cite>
                </div>
            </div>
            <div className="testimonial testimonial-centered testimonial-border">
                <div className="testimonial-info">
                    <h3 className="testimonial-title">What they say about us</h3>
                    <figure className="testimonial-author-thumbnail">
                        <img src="images/agents/4.jpg" alt="user" width="40" height="40" />
                    </figure>
                    <blockquote>“ Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
                        hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque ”</blockquote>
                    <cite>
                        Mary Adams
                        <span>Customer</span>
                    </cite>
                </div>
            </div>
            <div className="testimonial testimonial-centered testimonial-border">
                <div className="testimonial-info">
                    <h3 className="testimonial-title">What they say about us</h3>
                    <figure className="testimonial-author-thumbnail">
                        <img src="images/agents/4.jpg" alt="user" width="40" height="40" />
                    </figure>
                    <blockquote>“ Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
                        hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque ”</blockquote>
                    <cite>
                        Mary Adams
                        <span>Customer</span>
                    </cite>
                </div>
            </div>
            <div className="testimonial testimonial-centered testimonial-border">
                <div className="testimonial-info">
                    <h3 className="testimonial-title">What they say about us</h3>
                    <figure className="testimonial-author-thumbnail">
                        <img src="images/agents/4.jpg" alt="user" width="40" height="40" />
                    </figure>
                    <blockquote>“ Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
                        hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque ”</blockquote>
                    <cite>
                        Mary Adams
                        <span>Customer</span>
                    </cite>
                </div>
            </div>
            <div className="testimonial testimonial-centered">
                <div className="testimonial-info">
                    <h3 className="testimonial-title">What they say about us</h3>
                    <figure className="testimonial-author-thumbnail">
                        <img src="images/agents/5.jpg" alt="user" width="40" height="40" />
                    </figure>
                    <blockquote>“ Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
                        hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque ”</blockquote>
                    <cite>
                        Owen Hunt
                        <span>Customer</span>
                    </cite>
                </div>
            </div>
        </div>
    </div>
</section>
</>

);
}
export default Testimonial;