import { useState } from "react";
import Login from "./Login";
function Home(props) {    
    const userLinks=(
        <>
        
        <li className=""><a href="/plantrip">Plan Trip</a></li>
        <li className="" style={{float:"right"}}>
            <div class="user-login" >
                <a href="/login" ><i class="fa fa-sign-out" aria-hidden="true"/></a>
            </div>
        </li>
      </>
      );
      const guestLinks=(<>
        <li className="" style={{float:"right"}}>
            <div class="user-login">
                <a href="/login"><i class="fa fa-user" aria-hidden="true"/></a>
            </div>
        </li>
      </>);
    return(
        <div>

        <div className="banner" id="home">
            <div className="layer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 banner-text-w3ls">
                            <div className="csslider infinity" id="slider1">
                                <input type="radio" name="slides" checked="checked" id="slides_1" />
                                <input type="radio" name="slides" id="slides_2" />
                                <input type="radio" name="slides" id="slides_3" />
                                <ul className="banner_slide_bg">
                                    <li>
                                        <div className="container-fluid">
                                            <div className="w3ls_banner_txt">
                                                <h3 className="b-w3ltxt text-capitalize mt-md-4">china</h3>
                                                <h4><span className="fa fa-ils" aria-hidden="true"></span>from</h4>
                                            <p><span className="fa fa-usd" aria-hidden="true"></span>1000</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="container-fluid">
                                            <div className="w3ls_banner_txt">
                                                <h3 className="b-w3ltxt text-capitalize mt-md-4">japan</h3>
                                                <h4><span className="fa fa-ils" aria-hidden="true"></span>from </h4>
                                            <p><span className="fa fa-usd" aria-hidden="true"></span>1200</p>
                                                
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="container-fluid">
                                            <div className="w3ls_banner_txt">
                                                <h3 className="b-w3ltxt text-capitalize mt-md-4">korea</h3>
                                                <h4><span className="fa fa-ils" aria-hidden="true"></span>from </h4>
                                                <p><span className="fa fa-usd" aria-hidden="true"></span>1400</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="navigation">
                                    <div>
                                        <label for="slides_1"></label>
                                        <label for="slides_2"></label>
                                        <label for="slides_3"></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 px-lg-3 px-0">
                            <div className="banner-form-w3 ml-lg-5">
                                <div className="padding">
                                    <form action="#" method="post">
                                        <h5 className="mb-3">Search Our Tours</h5>
                                        <div className="form-style-w3layout">
                                        <input placeholder="Search Location" name="name" type="text" required="" />
                                        <input placeholder="Price Range" name="name" type="text" required="" />
                                            <button className="btn"> Search</button>
                                            
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <section className="some-content py-5" id="about">
                <div className="container py-md-5">
                    <div className="row about-vv-top mt-2">
                        <div className="col-lg-6 about-info">
                            <h4 className="title-hny  mb-md-5">Winter Wonders and Delicious Detours</h4>
                            <p>Donec malesuada ex sit amet pretium sid ornare. Nulla congue scelerisque tellus, utpretium nulla malesuada sedint. Suspendisse venenatis,Lorem ipsum dolor sit magna dolor.</p>
                            <div className="read-more-button mt-4">
                                <a href="index.html" className="read-more btn">Read More </a>
                            </div>
        
                        </div>
                        <div className="col-lg-6 about-img mt-md-4 mt-sm-4">
                            <img src="images/ab1.jpg" className="img-fluid" alt="" />
                        </div>
        
                    </div>
                </div>
            </section>
        <section className="services py-5" id="services">
            <div className="container py-md-5">
            <h3 className="heading text-center mb-3 mb-sm-5">Our services</h3>
                <div className="row service-grid-grids text-center">
                    <div className="col-lg-4 col-md-6 service-grid service-grid1 mb-4">
                        <div className="service-icon">
                            <span className="fa fa-h-square"></span>
                        </div>
                        <h4 className="mt-3">Best hotels</h4>
                        <p className="mt-3">Perspiciatis unde omnis iste natus doloret ipsum volupte ut accusal ntium dolor remque laudantium, totam dolor.</p>
                    </div>
                    <div className="col-lg-4 col-md-6 service-grid service-grid2 mb-4">
                        <div className="service-icon">
                            <span className="fa fa-glide-g"></span>
                        </div>
                        <h4 className="mt-3">Tourist guide</h4>
                        <p className="mt-3">Perspiciatis unde omnis iste natus doloret ipsum volupte ut accusal ntium dolor remque laudantium, totam dolor.</p>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 service-grid service-grid3 mb-4">
                        <div className="service-icon">
                            <span className="fa fa-fighter-jet"></span>
                        </div>
                        <h4 className="mt-3">Flight tickets</h4>
                        <p className="mt-3">Perspiciatis unde omnis iste natus doloret ipsum volupte ut accusal ntium dolor remque laudantium, totam dolor.</p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-6 p-md-0 mb-4">
                        <div className="bg-image-left">	
                            <h4>Canada Tours</h4>
                        </div>
                    </div>
                    <div className="col-md-6 p-md-0 mb-4">
                        <div className="bg-image-right">
                            <h4>Asia Tours</h4>
                        </div>
                        <div className="row">
                            <div className="col-md-6 pr-md-0">
                                <div className="bg-image-bottom1">
                                    <h4>Europe Tours</h4>
                                </div>
                            </div>
                            <div className="col-md-6 pl-md-0">
                                <div className="bg-image-bottom2">
                                    <h4>Canada Tours</h4>
                                </div>
                            </div>
                        </div>	
                    </div>	
                </div>		
            </div>		
        </section>
            <section className="stats" id="stats">
            <div className="layer py-md-5 py-5">
                <div className="container py-lg-5 py-md-3">
                    <div className="row stat-grids">
                        <div className="col-lg-6 stats-left">
                            <h3 className="heading mb-4 text-li">Years in the field</h3>
                            <p className="mb-3">Integer pulvinar leo id viverra feugiat. Pellentesque libero justo, semper at tempus vel, ultrices in ligula. Nulla sollicit sed.</p>
                            <h4><span>15+</span> Years of Experience</h4>
                        </div>
                        <div className="col-lg-6 grid1 stats-right mt-lg-0 mt-4 pl-5">
                            <div className="row">
                                <div className="col-sm-4 col-6 mb-4">
                                    <p className="text-li">Travel joy</p>
                                    <h4 className="text-wh">12k</h4>
                                    <span className="fa fa-users mr-2"></span>
                                </div>
                                <div className="col-sm-4 col-6 mb-4">
                                    <p>world tours</p>
                                    <h4>15k</h4>
                                    <span className="fa fa-tasks mr-2"></span>
                                </div>
                                <div className="col-sm-4 col-6 mb-4">
                                    <p>city tours</p>
                                    <h4>25k</h4>
                                    <span className="fa fa-files-o mr-2"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        <section className="team py-5" id="team">
            <div className="container py-md-5">
                <h3 className="heading text-center mb-3 mb-sm-5">Our Guides</h3>
                <div className="row">
                    <div className="team-grid col-lg-3 col-sm-6 mb-5">
                        <img src="images/t1.jpg" className="" alt="" />
                        <div className="team-info text-center">
                            <h3 className="e">Tyson Amery</h3>
                            <span className="">Manager</span>
                        </div>
                    </div>
                    <div className="team-grid col-lg-3 col-sm-6  mb-5">
                        <img src="images/t2.jpg" className="" alt="" />
                        <div className="team-info text-center">
                            <h3 className="">Stas Melnik</h3>
                            <span className="">director</span>
                        </div>
                    </div>
                    <div className="team-grid col-lg-3 col-sm-6  mb-5">
                        <img src="images/t3.jpg" className="" alt="" />
                        <div className="team-info text-center">
                            <h3 className="">Lise Laurie</h3>
                            <span className="">Instructor</span>
                        </div>
                    </div>
                    <div className="team-grid col-lg-3 col-sm-6  mb-5">
                        <img src="images/t4.jpg" className="" alt="" />
                        <div className="team-info text-center">
                            <h3 className="">Effie Eleanora</h3>
                            <span className="">manager</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            <section className="gallery py-5" id="gallery">
                <div className="container py-md-5">
                    <div className="header mb-3 mb-sm-5 text-center">
                       <h3 className="heading text-center mb-3 mb-sm-5">Tour Gallery</h3>
                        <div className="row news-grids text-center">
                            <div className="col-md-4 gal-img">
                                <a href="#gal1"><img src="images/g1.jpg" alt="news image" className="img-fluid"/><span> HoneyMoon</span></a>
                                <a href="#gal2"><img src="images/g2.jpg" alt="news image" className="img-fluid" /><span>Family</span></a>
        
                            </div>
        
                            <div className="col-md-4 gal-img">
                                <a href="#gal3"><img src="images/g3.jpg" alt="news image" className="img-fluid" /><span>Holidays</span></a>
        
                                <a href="#gal4"><img src="images/g4.jpg" alt="news image" className="img-fluid" /><span>Adventure</span></a>
                            </div>
                            <div className="col-md-4 gal-img">
                                <a href="#gal5"><img src="images/g5.jpg" alt="news image" className="img-fluid"/><span>Luxury</span></a>
                                <a href="#gal6"><img src="images/g6.jpg" alt="news image" className="img-fluid" /><span>Romantic</span></a>
                            </div>
                        </div>
                    </div>
                    <div id="gal1" className="pop-overlay animate">
                        <div className="popup">
                            <img src="images/g1.jpg" alt="Popup Image" className="img-fluid" />
                            <p className="mt-4">Nulla viverra pharetra se, eget pulvinar neque pharetra ac int. placerat placerat dolor.</p>
                            <a className="close" href="#gallery">&times;</a>
                        </div>
                    </div>
                    <div id="gal2" className="pop-overlay animate">
                        <div className="popup">
                            <img src="images/g2.jpg" alt="Popup Image" className="img-fluid" />
                            <p className="mt-4">Nulla viverra pharetra se, eget pulvinar neque pharetra ac int. placerat placerat dolor.</p>
                            <a className="close" href="#gallery">&times;</a>
                        </div>
                    </div>
                    <div id="gal3" className="pop-overlay animate">
                        <div className="popup">
                            <img src="images/g3.jpg" alt="Popup Image" className="img-fluid" />
                            <p className="mt-4">Nulla viverra pharetra se, eget pulvinar neque pharetra ac int. placerat placerat dolor.</p>
                            <a className="close" href="#gallery">&times;</a>
                        </div>
                    </div>
                    <div id="gal4" className="pop-overlay animate">
                        <div className="popup">
                            <img src="images/g4.jpg" alt="Popup Image" className="img-fluid" />
                            <p className="mt-4">Nulla viverra pharetra se, eget pulvinar neque pharetra ac int. placerat placerat dolor.</p>
                            <a className="close" href="#gallery">&times;</a>
                        </div>
                    </div>
                    <div id="gal5" className="pop-overlay animate">
                        <div className="popup">
                            <img src="images/g5.jpg" alt="Popup Image" className="img-fluid" />
                            <p className="mt-4">Nulla viverra pharetra se, eget pulvinar neque pharetra ac int. placerat placerat dolor.</p>
                            <a className="close" href="#gallery">&times;</a>
                        </div>
                    </div>
                    <div id="gal6" className="pop-overlay animate">
                        <div className="popup">
                            <img src="images/g6.jpg" alt="Popup Image" className="img-fluid" />
                            <p className="mt-4">Nulla viverra pharetra se, eget pulvinar neque pharetra ac int. placerat placerat dolor.</p>
                            <a className="close" href="#gallery">&times;</a>
                        </div>
                    </div>
                </div>
            </section>
        <section className="destinations py-5" id="destinations">
            <div className="container py-md-5">
                  <h3 className="heading text-center mb-3 mb-sm-5">Tour Prices</h3>
                <div className="row inner-sec-w3layouts-w3pvt-lauinfo">
                    <div className="col-md-3 col-sm-6 col-6 destinations-grids text-center mb-4">
                        <h4 className="destination mb-3">China</h4>
                        <div className="image-position position-relative">
                            <img src="images/p1.jpg" className="img-fluid" alt="" />
                            <div className="rating">
                                <ul>
                                    <li><span className="fa fa-usd"></span>1000</li>
                                    
                                </ul>
                            </div>
                        </div>
                        <div className="destinations-info">
                            <div className="caption mb-lg-3">
                                <h4>China</h4>
                                <a href="#contact">Book Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-6 destinations-grids text-center mb-4">
                        <h4 className="destination mb-3">Malaysia</h4>
                        <div className="image-position position-relative">
                            <img src="images/p2.jpg" className="img-fluid" alt="" />
                            <div className="rating">
                                <ul>
                                    <li><span className="fa fa-usd"></span>1100</li>
                                </ul>
                            </div>
                        </div>
                        <div className="destinations-info">
                            <div className="caption mb-lg-3">
                                <h4>Malaysia</h4>
                                <a href="#contact">Book Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-6 destinations-grids text-center mb-4">
                        <h4 className="destination mb-3">Japan</h4>
                        <div className="image-position position-relative">
                            <img src="images/p3.jpg" className="img-fluid" alt=""/>
                            <div className="rating">
                                <ul>
                                    <li><span className="fa fa-usd"></span>1200</li>
                                </ul>
                            </div>
                        </div>
                        <div className="destinations-info">
                            <div className="caption mb-lg-3">
                                <h4>Japan</h4>
                                <a href="#contact">Book Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-6 destinations-grids text-center mb-4">
                        <h4 className="destination mb-3">Singapore</h4>
                        <div className="image-position position-relative">
                            <img src="images/p4.jpg" className="img-fluid" alt=""/>
                            <div className="rating">
                                <ul>
                                    <li><span className="fa fa-usd"></span>1300</li>
                                </ul>
                            </div>
                        </div>
                        <div className="destinations-info">
                            <div className="caption mb-lg-3">
                                <h4>Singapore</h4>
                                <a href="#contact">Book Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            <section className="testimonials py-5" id="testimonials">
                <div className="container py-md-5">
                        <h3 className="heading heading1 text-center mb-3 mb-sm-5"> Client Reviews</h3>
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 test-info text-left mb-4">
                            <p><span className="fa fa-quote-left"></span> Lorem Ipsum has been the industry's standard since the 1500s. Praesent ullamcorper dui turpis.Nulla non laoreet eleifend. <span className="fa fa-quote-right"></span></p>
                            <div className="test-img text-right mb-3">
                                <img src="images/te1.jpg" className="img-fluid" alt="user-image"/>
                            </div>
                            <h3 className="my-md-2 my-3 text-right">Jenifer Burns</h3>
        
                           
                        </div>
                        <div className="col-lg-4 col-sm-6 test-info text-left mb-4">
                            <p><span className="fa fa-quote-left"></span> Lorem Ipsum has been the industry's standard since the 1500s. Praesent ullamcorper dui turpis.Nulla non laoreet eleifend. <span className="fa fa-quote-right"></span></p>
        
                            <div className="test-img text-right mb-3">
                                <img src="images/te2.jpg" className="img-fluid" alt="user-image"/>
                            </div>
                            <h3 className="my-md-2 my-3 text-right"> Abraham Smith</h3>
        
                           
                        </div>
                        <div className="col-lg-4 col-sm-6 test-info text-left gap1 mb-4">
                            <p><span className="fa fa-quote-left"></span> Lorem Ipsum has been the industry's standard since the 1500s. Praesent ullamcorper dui turpis.Nulla non laoreet eleifend. <span className="fa fa-quote-right"></span></p>
                            <div className="test-img text-right mb-3">
                                <img src="images/te3.jpg" className="img-fluid" alt="user-image"/>
                            </div>
                            <h3 className="my-md-2 my-3 text-right">Jenifer Burns</h3>
        
                        </div>
                    </div>
                </div>
            </section>
        <section className="contact py-5" id="contact">
            <div className="container py-md-5">
                      <h3 className="heading text-center mb-3 mb-sm-5"> Get In Touch with us</h3>
                    <ul className="list-unstyled row text-center mt-lg-5 mt-4 px-lg-5">
                        <li className="col-md-4 col-sm-6 adress-w3pvt-info mb-4">
                            <div className=" adress-icon">
                                <span className="fa fa-map-marker"></span>
                            </div>
        
                            <h6>Location</h6>
                            <p>The company name
                                <br/>Addison Township, IL, USA. </p>
                        </li>
        
                        <li className="col-md-4 col-sm-6 adress-w3pvt-info mb-4">
                            <div className="adress-icon">
                                <span className="fa fa-envelope-open-o"></span>
                            </div>
                            <h6>Phone & Email</h6>
                            <p>+(122) 123 456 7890</p>
                            <a href="mailto:info@example.com" className="mail">info@examplemail.com</a>
                        </li>
                         <li className="col-md-4 col-sm-6 adress-w3pvt-info mb-4">
                            <div className="adress-icon">
                                <span className="fa fa-building"></span>
                            </div>
                            <h6>our branches</h6>
                            <p>india</p>
                             <p>china</p>
                           
                        </li>
                    </ul>
                    
                    <div className="contact-grids mt-5">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 contact-left-form">
                                <form action="#" method="post">
                                    <div className=" form-group contact-forms">
                                      <input type="text" className="form-control" placeholder="Name" required=""/>
                                    </div>
                                    <div className="form-group contact-forms">
                                      <input type="email" className="form-control" placeholder="Email" required=""/>
                                    </div>
                                    <div className="form-group contact-forms">
                                      <input type="text" className="form-control" placeholder="Phone" required=""/> 
                                    </div>
                                    <div className="form-group contact-forms">
                                      <textarea className="form-control" placeholder="Message" rows="3" required=""></textarea>
                                    </div>
                                    <button className="btn btn-block sent-butnn">Send</button>
                                </form>
                            </div>
                            <div className="col-lg-6 col-md-6 contact-right pl-lg-5">
                                 <img src="images/c1.jpg" className="img-fluid" alt="user-image"/>
                                
                            </div>
                        </div>
                    </div>
            </div>
        </section>
        <div className="map p-2">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.728106568!2d-0.24168153701090248!3d51.52877184090542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C+UK!5e0!3m2!1sen!2sin!4v1544074523717"></iframe>
        </div>
            <footer className="footer-content py-3">
                <div className="container py-md-3">
                    <div className="footer-top text-center">
                        <h2>
                            <a className="navbar-brand pt-3 mb-3" href="index.html">
                                <span className="fa fa-free-code-camp"></span> Tourists Galore
                            </a>
                        </h2>
                    </div>
                    <div className="row footer-top-inner-vv">
                        <div className="col-lg-3 col-sm-6 mt-lg-0 mt-4">
                            <div className="footer-lavi">
                                <h3 className="mb-3 lavi_title">Links</h3>
                                <hr/>
                                <ul className="list-info-lavi">
                                    <li>
                                        <a href="#about"><span className="fa fa-angle-double-right" aria-hidden="true"></span>
                                            Our Mission
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#gallery"><span className="fa fa-angle-double-right" aria-hidden="true"></span>
                                            Latest Tours
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"><span className="fa fa-angle-double-right" aria-hidden="true"></span>
                                            Explore
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#contact"><span className="fa fa-angle-double-right" aria-hidden="true"></span>
                                            Find us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"><span className="fa fa-angle-double-right" aria-hidden="true"></span>
                                            Privacy Policy
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mt-lg-0 mt-4">
                            <div className="footer-lavi">
                                <h3 className="mb-3 lavi_title">Navigation</h3>
                                <hr/>
                                <ul className="list-info-lavi">
                                    <li>
                                        <a href="index.html"><span className="fa fa-angle-double-right" aria-hidden="true"></span>
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#about"><span className="fa fa-angle-double-right" aria-hidden="true"></span>
                                            About Us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#services"><span className="fa fa-angle-double-right" aria-hidden="true"></span>
                                           More services
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#team"><span className="fa fa-angle-double-right" aria-hidden="true"></span>
                                            Team
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#contact"><span className="fa fa-angle-double-right" aria-hidden="true"></span>
                                            Contact Us
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mt-lg-0 mt-4">
                            <div className="footer-lavi">
                                <h3 className="mb-3 lavi_title">Customer Care</h3>
                                <hr/>
                                <ul className="list-info-lavi">
                                    <li>
                                        <a href="#about"><span className="fa fa-angle-double-right" aria-hidden="true"></span>
                                            Our Mission
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#gallery"><span className="fa fa-angle-double-right" aria-hidden="true"></span>
                                            Latest Tours
                                        </a>
                                    </li>
                                    <li><span className="fa fa-angle-double-right" aria-hidden="true"></span>
                                        <a href="#services">
                                            Explore
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#contact"><span className="fa fa-angle-double-right" aria-hidden="true"></span>
                                            Find us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"><span className="fa fa-angle-double-right" aria-hidden="true"></span>
                                            Privacy Policy
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mt-lg-0 mt-4">
                            <div className="footer-lavi">
                                <h3 className="mb-3 lavi_title">Contact Us</h3>
                                <hr/>
                                <div className="last-vv-contact">
                                    <p>
                                        <a href="mailto:example@email.com">info@example.com</a>
                                    </p>
                                </div>
                                <div className="last-vv-contact my-2">
                                    <p>+ 456 123 7890</p>
                                </div>
                                <div className="last-vv-contact">
                                    <p>+ 90 nsequursu dsdesdc,
                                        <br/> Honey Street 049436.</p>
                                </div>
                            </div>
                        </div>
        
                    </div>
        
                </div>
            </footer>
        <div className="copy-right-top">
            <p className="copy-right text-center py-4">&copy; 2019 Tourists Galore. All Rights Reserved | Design by
                <a href="http://w3layouts.com/"> W3layouts </a>
            </p>
        </div>
        <div className="move-top text-right">
            <a href="#home" className="move-top"> 
                <span className="fa fa-angle-up  mb-3" aria-hidden="true"></span>
            </a>
        </div>
        </div>
          );
}

export default Home;