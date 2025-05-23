import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Index() {
  return (
  <div>
	<Navbar/>
<div className="hero-wrap" style={{backgroundImage: "url('/web/images/bg_1.jpg')"}} data-stellar-background-ratio="0.5">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text align-items-center justify-content-start" data-scrollax-parent="true">
          <div class="col-lg-6 col-md-6 ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
            <h1 class="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"> Business Leaders <br/><span>Conference 2019</span></h1>
            <p class="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><span class="icon-calendar mr-2"></span>20-23 November 2019 - Los Angeles CA</p>
            <div id="timer" class="d-flex">
						  <div class="time" id="days"></div>
						  <div class="time pl-3" id="hours"></div>
						  <div class="time pl-3" id="minutes"></div>
						  <div class="time pl-3" id="seconds"></div>
						</div>
          </div>
          <div class="col-lg-2 col"></div>
          <div class="col-lg-4 col-md-6 mt-0 mt-md-5">
          	<form action="#" class="request-form ftco-animate">
          		<h2>Join Conference</h2>
	    				<div class="form-group">
	    					<input type="text" class="form-control" placeholder="Enter your Name"/>
	    				</div>
	    				<div class="form-group">
	    					<input type="text" class="form-control" placeholder="Enter your Email"/>
	    				</div>
    					<div class="form-group">
	    					<input type="text" class="form-control" placeholder="Enter your Phone"/>
	    				</div>
	    				<div class="form-group">
								<div class="checkbox">
								   <label><input type="checkbox" value="" class="mr-2"/> I have read and accept the terms and conditions</label>
								</div>
							</div>
	            <div class="form-group">
	              <input type="submit" value="Join now" class="btn btn-primary py-3 px-4"/>
	            </div>
	    			</form>
          </div>
        </div>
      </div>
    </div>

    <section class="ftco-section services-section bg-primary">
      <div class="container">
        <div class="row d-flex">
          <div class="col-md-3 d-flex align-self-stretch ftco-animate">
            <div class="media block-6 services d-block">
              <div class="icon"><span class="flaticon-placeholder"></span></div>
              <div class="media-body">
                <h3 class="heading mb-3">Venue</h3>
                <p>	203 Fake St. Mountain View, San Francisco, California, USA</p>
              </div>
            </div>      
          </div>
          <div class="col-md-3 d-flex align-self-stretch ftco-animate">
            <div class="media block-6 services d-block">
              <div class="icon"><span class="flaticon-world"></span></div>
              <div class="media-body">
                <h3 class="heading mb-3">Transport</h3>
                <p>A small river named Duden flows by their place and supplies.</p>
              </div>
            </div>    
          </div>
          <div class="col-md-3 d-flex align-self-stretch ftco-animate">
            <div class="media block-6 services d-block">
              <div class="icon"><span class="flaticon-hotel"></span></div>
              <div class="media-body">
                <h3 class="heading mb-3">Hotel</h3>
                <p>A small river named Duden flows by their place and supplies.</p>
              </div>
            </div>      
          </div>
          <div class="col-md-3 d-flex align-self-stretch ftco-animate">
            <div class="media block-6 services d-block">
              <div class="icon"><span class="flaticon-cooking"></span></div>
              <div class="media-body">
                <h3 class="heading mb-3">Restaurant</h3>
                <p>A small river named Duden flows by their place and supplies.</p>
              </div>
            </div>      
          </div>
        </div>
      </div>
    </section>
   	
		<section class="ftco-section ftco-no-pt ftco-no-pb">
			<div class="container">
				<div class="row no-gutters">
					<div className="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center" style={{backgroundimage: "url(/web/images/about.jpg):"}}>
					</div>
					<div class="col-md-7 wrap-about py-md-5 ftco-animate">
	          <div class="heading-section mb-5 pt-5 pl-md-5">
	          	<div class="pr-md-5 mr-md-5">
		            <h2 class="mb-4">What is all about us?</h2>
	            </div>

	            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
	            <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
	            <p><a href="#" class="btn btn-primary">Join now</a></p>
	          </div>
					</div>
				</div>
			</div>
		</section>


		<section class="ftco-section">
			<div class="container">
				<div class="row justify-content-center mb-5">
          <div class="col-md-7 text-center heading-section ftco-animate">
            <h2 class="mb-3">Conference Schedule</h2>
          </div>
        </div>
        <div class="ftco-schedule">
					<div class="row">
            <div class="col-md-3 nav-link-wrap text-center text-md-right">
	            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
	              <a class="nav-link ftco-animate active" id="v-pills-1-tab" data-toggle="pill" href="#v-pills-1" role="tab" aria-controls="v-pills-1" aria-selected="true">First Day <span>21 July 2019</span></a>

	              <a class="nav-link ftco-animate" id="v-pills-2-tab" data-toggle="pill" href="#v-pills-2" role="tab" aria-controls="v-pills-2" aria-selected="false">Second Day <span>22 July 2019</span></a>

	              <a class="nav-link ftco-animate" id="v-pills-3-tab" data-toggle="pill" href="#v-pills-3" role="tab" aria-controls="v-pills-3" aria-selected="false">Third Day <span>23 July 2019</span></a>

	            </div>
	          </div>
	          <div class="col-md-9 tab-wrap">
	            
	            <div class="tab-content" id="v-pills-tabContent">

	              <div class="tab-pane fade show active" id="v-pills-1" role="tabpanel" aria-labelledby="day-1-tab">
	              	<div class="speaker-wrap ftco-animate d-md-flex">
	              		<div className="img speaker-img" style={{backgroundImage: "url(/web/images/staff-1.jpg);"}}></div>
	              		<div class="text">
	              			<h2><a href="#">Introduction to Business Leaders</a></h2>
	              			<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
	              			<span class="time">09:00 am - 4:30 pm</span>
	              			<p class="location"><span class="icon-map-o mr-2"></span>20 July 2019 - Hall, Building Los Angeles CA</p>
	              			<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
	              			<h3 class="speaker-name">&mdash; <a href="#">Ryan Thompson</a> <span class="position">Founder of Wordpress</span></h3>
	              		</div>
	              	</div>
	              	<div class="speaker-wrap ftco-animate d-md-flex">
	              		<div className="img speaker-img" style={{backgroundImage: "url(/web/images/staff-2.jpg);"}}></div>
	              		<div class="text">
	              			<h2><a href="#">Introduction to Business Leaders</a></h2>
	              			<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
	              			<span class="time">09:00 am - 4:30 pm</span>
	              			<p class="location"><span class="icon-map-o mr-2"></span>20 July 2019 - Hall, Building Los Angeles CA</p>
	              			<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
	              			<h3 class="speaker-name">&mdash; <a href="#">Ryan Thompson</a> <span class="position">Founder of Wordpress</span></h3>
	              		</div>
	              	</div>
	              	<div class="speaker-wrap ftco-animate d-md-flex">
	              		<div className="img speaker-img" style={{backgroundImage: "url(/web/images/staff-3.jpg);"}}></div>
	              		<div class="text">
	              			<h2><a href="#">Introduction to Business Leaders</a></h2>
	              			<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
	              			<span class="time">09:00 am - 4:30 pm</span>
	              			<p class="location"><span class="icon-map-o mr-2"></span>20 July 2019 - Hall, Building Los Angeles CA</p>
	              			<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
	              			<h3 class="speaker-name">&mdash; <a href="#">Ryan Thompson</a> <span class="position">Founder of Wordpress</span></h3>
	              		</div>
	              	</div>
	              </div>

	              <div class="tab-pane fade" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-day-2-tab">
	              	<div class="speaker-wrap ftco-animate d-md-flex">
	              		<div className="img speaker-img" style={{backgroundImage: "url(/web/images/staff-4.jpg);"}}></div>
	              		<div class="text">
	              			<h2><a href="#">Introduction to Business Leaders</a></h2>
	              			<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
	              			<span class="time">09:00 am - 4:30 pm</span>
	              			<p class="location"><span class="icon-map-o mr-2"></span>20 July 2019 - Hall, Building Los Angeles CA</p>
	              			<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
	              			<h3 class="speaker-name">&mdash; <a href="#">Ryan Thompson</a> <span class="position">Founder of Wordpress</span></h3>
	              		</div>
	              	</div>
	              	<div class="speaker-wrap ftco-animate d-md-flex">
	              		<div className="img speaker-img" style={{backgroundImage: "url(/web/images/staff-1.jpg);"}}></div>
	              		<div class="text">
	              			<h2><a href="#">Introduction to Business Leaders</a></h2>
	              			<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
	              			<span class="time">09:00 am - 4:30 pm</span>
	              			<p class="location"><span class="icon-map-o mr-2"></span>20 July 2019 - Hall, Building Los Angeles CA</p>
	              			<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
	              			<h3 class="speaker-name">&mdash; <a href="#">Ryan Thompson</a> <span class="position">Founder of Wordpress</span></h3>
	              		</div>
	              	</div>
	              	<div class="speaker-wrap ftco-animate d-md-flex">
	              		<div class="img speaker-img" style={{backgroundImage: `url(web/images/staff-2.jpg);`}}></div>
	              		<div class="text">
	              			<h2><a href="#">Introduction to Business Leaders</a></h2>
	              			<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
	              			<span class="time">09:00 am - 4:30 pm</span>
	              			<p class="location"><span class="icon-map-o mr-2"></span>20 July 2019 - Hall, Building Los Angeles CA</p>
	              			<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
	              			<h3 class="speaker-name">&mdash; <a href="#">Ryan Thompson</a> <span class="position">Founder of Wordpress</span></h3>
	              		</div>
	              	</div>
	              </div>
	              <div class="tab-pane fade" id="v-pills-3" role="tabpanel" aria-labelledby="v-pills-day-3-tab">
	              	<div class="speaker-wrap ftco-animate d-md-flex">
	              		<div class="img speaker-img" style={{backgroundImage: `url(web/images/staff-3.jpg);`}}></div>
	              		<div class="text">
	              			<h2><a href="#">Introduction to Business Leaders</a></h2>
	              			<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
	              			<span class="time">09:00 am - 4:30 pm</span>
	              			<p class="location"><span class="icon-map-o mr-2"></span>20 July 2019 - Hall, Building Los Angeles CA</p>
	              			<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
	              			<h3 class="speaker-name">&mdash; <a href="#">Ryan Thompson</a> <span class="position">Founder of Wordpress</span></h3>
	              		</div>
	              	</div>
	              	<div class="speaker-wrap ftco-animate d-md-flex">
	              		<div class="img speaker-img" style={{backgroundImage: `url(web/images/staff-4.jpg);`}}></div>
	              		<div class="text">
	              			<h2><a href="#">Introduction to Business Leaders</a></h2>
	              			<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
	              			<span class="time">09:00 am - 4:30 pm</span>
	              			<p class="location"><span class="icon-map-o mr-2"></span>20 July 2019 - Hall, Building Los Angeles CA</p>
	              			<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
	              			<h3 class="speaker-name">&mdash; <a href="#">Ryan Thompson</a> <span class="position">Founder of Wordpress</span></h3>
	              		</div>
	              	</div>
	              	<div class="speaker-wrap ftco-animate d-md-flex">
	              		<div class="img speaker-img" style={{backgroundImage: `url(web/images/staff-1.jpg);`}}></div>
	              		<div class="text">
	              			<h2><a href="#">Introduction to Business Leaders</a></h2>
	              			<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
	              			<span class="time">09:00 am - 4:30 pm</span>
	              			<p class="location"><span class="icon-map-o mr-2"></span>20 July 2019 - Hall, Building Los Angeles CA</p>
	              			<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
	              			<h3 class="speaker-name">&mdash; <a href="#">Ryan Thompson</a> <span class="position">Founder of Wordpress</span></h3>
	              		</div>
	              	</div>
	              </div>
	            </div>
	          </div>
	        </div>
        </div>
			</div>
		</section>
		
		<section class="ftco-section ftco-gallery ftco-no-pt">
    	<div class="container-fluid px-4">
    		<div class="row justify-content-center mb-5">
          <div class="col-md-7 text-center heading-section ftco-animate">
            <h2 class="mb-3">Conference Gallery</h2>
          </div>
        </div>
    		<div class="row">
					<div class="col-md-3 ftco-animate">
						<a href="images/image_1.jpg" class="gallery image-popup img d-flex align-items-center" style={{backgroundImage: `url(web/images/image_1.jpg);`}}>
							<div class="icon mb-4 d-flex align-items-center justify-content-center">
    						<span class="icon-instagram"></span>
    					</div>
						</a>
					</div>
					<div class="col-md-3 ftco-animate">
						<a href="images/image_2.jpg" class="gallery image-popup img d-flex align-items-center" style={{backgroundImage: `url(web/images/image_2.jpg);`}}>
							<div class="icon mb-4 d-flex align-items-center justify-content-center">
    						<span class="icon-instagram"></span>
    					</div>
						</a>
					</div>
					<div class="col-md-3 ftco-animate">
						<a href="images/image_3.jpg" class="gallery image-popup img d-flex align-items-center" style={{backgroundImage: `url(web/images/image_3.jpg);`}}>
							<div class="icon mb-4 d-flex align-items-center justify-content-center">
    						<span class="icon-instagram"></span>
    					</div>
						</a>
					</div>
					<div class="col-md-3 ftco-animate">
						<a href="images/image_4.jpg" class="gallery image-popup img d-flex align-items-center" style={{backgroundImage: `url(web/images/image_4.jpg);`}}>
							<div class="icon mb-4 d-flex align-items-center justify-content-center">
    						<span class="icon-instagram"></span>
    					</div>
						</a>
					</div>
        </div>
    	</div>
    </section>

    <section class="ftco-section testimony-section ftco-no-pt">
      <div class="container">
        <div class="row justify-content-center mb-5">
          <div class="col-md-7 text-center heading-section ftco-animate">
            <h2 class="mb-3">Happy Clients</h2>
          </div>
        </div>
        <div class="row ftco-animate">
          <div class="col-md-12">
            <div class="carousel-testimony owl-carousel ftco-owl">
              <div class="item">
                <div class="testimony-wrap text-center py-4 pb-5">
                <div class="user-img mb-4" style={{backgroundImage: `url(web/images/person_1.jpg)`}}>
                  </div>
                  <div class="text pt-4">
                    <p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p class="name">Roger Scott</p>
                    <span class="position">Marketing Manager</span>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="testimony-wrap text-center py-4 pb-5">
                  <div class="user-img mb-4" style={{backgroundImage: `url(web/images/person_2.jpg)`}}>
                  </div>
                  <div class="text pt-4">
                    <p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p class="name">Roger Scott</p>
                    <span class="position">Interface Designer</span>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="testimony-wrap text-center py-4 pb-5">
                  <div class="user-img mb-4" style={{backgroundImage: `url(web/images/person_3.jpg)`}}>
                  </div>
                  <div class="text pt-4">
                    <p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p class="name">Roger Scott</p>
                    <span class="position">UI Designer</span>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="testimony-wrap text-center py-4 pb-5">
                  <div class="user-img mb-4" style={{backgroundImage: `url(web/images/person_1.jpg)`}}>
                  </div>
                  <div class="text pt-4">
                    <p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p class="name">Roger Scott</p>
                    <span class="position">Web Developer</span>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="testimony-wrap text-center py-4 pb-5">
                  <div class="user-img mb-4" style={{backgroundImage: `url(web/images/person_1.jpg)`}}>
                  </div>
                  <div class="text pt-4">
                    <p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p class="name">Roger Scott</p>
                    <span class="position">System Analyst</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="ftco-section ftco-no-pt">
      <div class="container">
        <div class="row justify-content-center mb-5">
          <div class="col-md-7 heading-section ftco-animate text-center">
            <h2 class="mb-4">Conference Ticket Pricing</h2>
          </div>
        </div>
        <div class="row">
	        <div class="col-md-4 ftco-animate">
	          <div class="block-7">
	            <div class="text-center">
	            <h2 class="heading">Personal</h2>
	            <span class="price"><sup>$</sup> <span class="number">85</span></span>
	            <span class="excerpt d-block">per month</span>
	            
	            <h3 class="heading-2 my-4">Enjoy All The Features</h3>
	            
	            <ul class="pricing-text">
	              <li>Conference Seats</li>
	              <li>Free Wifi</li>
	              <li>Coffee Breaks</li>
	              <li>Lunch</li>
	              <li>Workshops</li>
	              <li>One Speakers</li>
	              <li>Papers</li>
	            </ul>

	            <a href="#" class="btn btn-primary d-block px-2 py-3">Buy Ticket</a>
	            </div>
	          </div>
	        </div>
	        <div class="col-md-4 ftco-animate">
	          <div class="block-7 active">
	            <div class="text-center">
	            <h2 class="heading">Small Team</h2>
	            <span class="price"><sup>$</sup> <span class="number">200</span></span>
	            <span class="excerpt d-block">per month</span>
	            
	            <h3 class="heading-2 my-4">Enjoy All The Features</h3>
	            
	            <ul class="pricing-text">
	              <li>Conference Seats</li>
	              <li>Free Wifi</li>
	              <li>Coffee Breaks</li>
	              <li>Lunch</li>
	              <li>Workshops</li>
	              <li>One Speakers</li>
	              <li>Papers</li>
	            </ul>

	            <a href="#" class="btn btn-primary d-block px-2 py-3">Buy Ticket</a>
	            </div>
	          </div>
	        </div>
	        <div class="col-md-4 ftco-animate">
	          <div class="block-7">
	            <div class="text-center">
	            <h2 class="heading">Family Pack</h2>
	            <span class="price"><sup>$</sup> <span class="number">499</span></span>
	            <span class="excerpt d-block">per month</span>
	            
	            <h3 class="heading-2 my-4">Enjoy All The Features</h3>
	            
	            <ul class="pricing-text">
	              <li>Conference Seats</li>
	              <li>Free Wifi</li>
	              <li>Coffee Breaks</li>
	              <li>Lunch</li>
	              <li>Workshops</li>
	              <li>One Speakers</li>
	              <li>Papers</li>
	            </ul>

	            <a href="#" class="btn btn-primary d-block px-2 py-3">Buy Ticket</a>
	            </div>
	          </div>
	        </div>
	      </div>
      </div>
    </section>


    <section class="ftco-section ftco-no-pt ftco-no-pb">
    	<div class="container">
    		<div class="row justify-content-center mb-5">
          <div class="col-md-7 text-center heading-section ftco-animate">
            <h2 class="mb-1">Conference Speakers</h2>
          </div>
        </div>
        <div class="row">
        	<div class="col-md-6 d-flex align-items-stretch">
        		<div class="speaker ftco-animate d-flex align-items-stretch">
	        		<div class="img" style={{backgroundImage: `url(web/images/staff-3.jpg);`}}>
	        			<div class="text text-absolute">
		        			<h3>Robert Bonner</h3>
		        			<span class="position">Businessmen</span>
		        			<ul class="ftco-social mt-3">
		                <li><a href="#"><span class="icon-twitter"></span></a></li>
		                <li><a href="#"><span class="icon-facebook"></span></a></li>
		                <li><a href="#"><span class="icon-instagram"></span></a></li>
		              </ul>
		        		</div>
	        		</div>
	        	</div>
        	</div>
        	<div class="col-md-6">
        		<div class="speaker ftco-animate speaker-1 d-flex align-items-center mb-5">
	        		<div class="img" style={{backgroundImage: `url(/web/images/staff-1.jpg);`}}></div>
	        		<div class="text pl-4">
	        			<h3>Kyle Bochs</h3>
	        			<span class="position">Businessman</span>
	        			<p>A small river named Duden flows by their place and supplies</p>
	        			<ul class="ftco-social">
	                <li><a href="#"><span class="icon-twitter"></span></a></li>
	                <li><a href="#"><span class="icon-facebook"></span></a></li>
	                <li><a href="#"><span class="icon-instagram"></span></a></li>
	              </ul>
	        		</div>
	        	</div>
	        	<div class="speaker ftco-animate speaker-1 d-flex align-items-center mb-5">
	        		<div class="img" style={{backgroundImage: `url(/web/images/staff-2.jpg);`}}></div>
	        		<div class="text pl-4">
	        			<h3>Arnold Thompson</h3>
	        			<span class="position">Businessman</span>
	        			<p>A small river named Duden flows by their place and supplies</p>
	        			<ul class="ftco-social">
	                <li><a href="#"><span class="icon-twitter"></span></a></li>
	                <li><a href="#"><span class="icon-facebook"></span></a></li>
	                <li><a href="#"><span class="icon-instagram"></span></a></li>
	              </ul>
	        		</div>
	        	</div>
	        	<div class="speaker ftco-animate speaker-1 d-flex align-items-center mb-5">
	        		<div className="img" style={{backgroundImage: `url(/web/images/staff-3.jpg);`}}></div>
	        		<div class="text pl-4">
	        			<h3>Ryan Sy</h3>
	        			<span class="position">Businessman</span>
	        			<p>A small river named Duden flows by their place and supplies</p>
	        			<ul class="ftco-social">
	                <li><a href="#"><span class="icon-twitter"></span></a></li>
	                <li><a href="#"><span class="icon-facebook"></span></a></li>
	                <li><a href="#"><span class="icon-instagram"></span></a></li>
	              </ul>
	        		</div>
	        	</div>
	        	<div class="speaker ftco-animate speaker-1 d-flex align-items-center mb-5">
	        		<div className="img" style={{backgroundImage: `url(web/images/staff-4.jpg);`}}></div>
	        		<div class="text pl-4">
	        			<h3>Alysa Derick</h3>
	        			<span class="position">Businesswoman</span>
	        			<p>A small river named Duden flows by their place and supplies</p>
	        			<ul class="ftco-social">
	                <li><a href="#"><span class="icon-twitter"></span></a></li>
	                <li><a href="#"><span class="icon-facebook"></span></a></li>
	                <li><a href="#"><span class="icon-instagram"></span></a></li>
	              </ul>
	        		</div>
	        	</div>
        	</div>
        </div>
    	</div>
    </section>

    <section class="ftco-section">
      <div class="container">
        <div class="row justify-content-center mb-5">
          <div class="col-md-7 heading-section text-center ftco-animate">
            <h2>Recent Blog</h2>
          </div>
        </div>
        <div class="row d-flex">
          <div class="col-md-4 d-flex ftco-animate">
          	<div class="blog-entry justify-content-end">
              <a href="blog-single.html" class="block-20" style={{backgroundImage: `url('web/images/image_1.jpg');`}}>
              </a>
              <div class="text pt-4">
              	<div class="meta mb-3">
                  <div><a href="#">July. 14, 2019</a></div>
                  <div><a href="#">Admin</a></div>
                  <div><a href="#" class="meta-chat"><span class="icon-chat"></span> 3</a></div>
                </div>
                <h3 class="heading mt-2"><a href="#">Why Lead Generation is Key for Business Growth</a></h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 d-flex ftco-animate">
          	<div class="blog-entry justify-content-end">
              <a href="blog-single.html" class="block-20" style={{backgroundImage: `url('web/images/image_2.jpg');`}}>
              </a>
              <div class="text pt-4">
              	<div class="meta mb-3">
                  <div><a href="#">July. 14, 2019</a></div>
                  <div><a href="#">Admin</a></div>
                  <div><a href="#" class="meta-chat"><span class="icon-chat"></span> 3</a></div>
                </div>
                <h3 class="heading mt-2"><a href="#">Why Lead Generation is Key for Business Growth</a></h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 d-flex ftco-animate">
          	<div class="blog-entry">
              <a href="blog-single.html" class="block-20" style={{backgroundImage: `url('web/images/image_3.jpg');`}}>
              </a>
              <div class="text pt-4">
              	<div class="meta mb-3">
                  <div><a href="#">July. 14, 2019</a></div>
                  <div><a href="#">Admin</a></div>
                  <div><a href="#" class="meta-chat"><span class="icon-chat"></span> 3</a></div>
                </div>
                <h3 class="heading mt-2"><a href="#">Why Lead Generation is Key for Business Growth</a></h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
		
		<section class="ftco-section-parallax ftco-section ftco-no-pt">
      <div class="parallax-img d-flex align-items-center">
        <div class="container">
          <div class="row d-flex justify-content-center">
            <div class="col-md-10 col-lg-7 text-center heading-section ftco-animate">
              <h2>Subcribe to our Newsletter</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
              <div class="row d-flex justify-content-center mt-4 mb-4">
                <div class="col-md-8">
                  <form action="#" class="subscribe-form">
                    <div class="form-group d-flex">
                      <input type="text" class="form-control" placeholder="Enter email address"/>
                      <input type="submit" value="Subscribe" class="submit px-3"/>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
	 <Footer/>
  </div>
  )
}
