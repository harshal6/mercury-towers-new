import React from "react"
import SocialMenu from "./SocialMenu"

const FooterMenusWidgets = ({}) => {
  return (
      <div className="footer-nav-widgets-wrapper header-footer-group">
        <div className="footer-inner section-inner">
          {/* <div className="footer-top has-social-menu">
          <SocialMenu />
        </div> */}

          <aside className="footer-widgets-outer-wrapper" role="complementary">
            <div className="footer-widgets-wrapper">
              <div className="footer-widgets column-one grid-item">
                <div className="widget widget_text">
                  <div className="widget-content">
                    <img src="./assets/images/footer-logo.png" alt="footer-logo" />
                  </div>
                </div>
              </div>

              <div className="footer-widgets column-two grid-item">
                <div className="widget widget_text">
                  <div className="widget-content">
                    <h2 className="widget-title subheading heading-size-3">
                      Visitor Information
                    </h2>
                    <div className="textwidget">
                      <ul>
                        <li>
                          <a href="">Services</a>
                        </li>
                        <li>
                          <a href="">Map</a>
                        </li>
                        <li>
                          <a href="">Getting Here</a>
                        </li>
                        <li>
                          <a href="">Opening Hours</a>
                        </li>
                        <li>
                          <a href="">Events</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="footer-widgets column-three grid-item">
                <div className="widget widget_text">
                  <div className="widget-content">
                    <h2 className="widget-title subheading heading-size-3">
                      About Us
                    </h2>
                    <div className="textwidget">
                      <ul>
                        <li>
                          <a href="">About Mercury Towers</a>
                        </li>
                        <li>
                          <a href="">The Team</a>
                        </li>
                        <li>
                          <a href="">The Development</a>
                        </li>
                        <li>
                          <a href="">The Design</a>
                        </li>
                        <li>
                          <a href="">Careers</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="footer-widgets column-four grid-item">
                <div className="widget widget_text">
                  <div className="widget-content">
                    <h2 className="widget-title subheading heading-size-3">
                      Pages
                    </h2>
                    <div className="textwidget">
                      <ul>
                        <li>
                          <a href="/lifestyle">Lifestyle</a>
                        </li>
                        <li>
                          <a href="/hotel">Hotel</a>
                        </li>
                        <li>
                          <a href="/seedo">See & Do</a>
                        </li>
                        <li>
                          <a href="/events">Events</a>
                        </li>
                        <li>
                          <a href="/fooddrink">Food & Drink</a>
                        </li>
                        <li>
                          <a href="/shop">Shop</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="footer-widgets column-five grid-item">
                <div className="widget widget_text">
                  <div className="widget-content">
                    <h2 className="widget-title subheading heading-size-3">
                      Contact Us
                    </h2>
                    <div className="textwidget">
                      <p>+355 21455 559</p>

                      <p>
                        <a
                            href="enquiry@mercurytowers.com"
                            target="_blank"
                        >
                          enquiry@mercurytowers.com
                        </a>

                      </p>
                      <p>To provide feedback or suggestion. Please click on the below Wecare icon to connect with us. </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </aside>
        </div>
      </div>
  )
}

export default FooterMenusWidgets