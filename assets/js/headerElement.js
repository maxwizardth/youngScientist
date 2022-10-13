function HeadElement(){

	document.getElementById('topHeader').innerHTML=
	`
	<div class="hny-top-menu">
		<div class="top-hd">
			<div class="container-fluid">
				<div class="row">
					<ul class="social-top col-md-7">
						<li class="log-link mr-3"><a class="sign-in"  href="#"><span class="fa fa-user"></span> Sign In</a></li>
						<li><a href="#"><span class="fa fa-facebook"></span></a></li>
						<li><a href="#"><span class="fa fa-instagram"></span></a> </li>
						<li><a href="#"><span class="fah fa-twitter"></span></a></li>
						<li><a href="#"><span class="fa fa-vimeo"></span></a> </li>
						<li>
							<a href="#">
								<span class="fa fa-linkedin"></span>
							</a>
						</li>
					</ul>
					<ul class="accounts col-md-5">
						<li class="top_li"><span class="fa fa-mobile"></span><a href="tel:+2349153036869">+2349153036869</a>
						</li>

						<li class="top_li mr-lg-0"><span class="fa fa-envelope-o"></span><a href="mailto:info@example.com">Need help? Contact Us </a>

						</li>
						
					</ul>
				</div>
			</div>
		</div>

	</div>
`
document.getElementById('bannerHeader').innerHTML=`
	
			<!--/nav-->
			<nav class="navbar navbar-expand-lg navbar-light fill">
				<div class="container-fluid">
					<a class="navbar-brand" href="home.html">
						<label class="lohny"><span class="fa fa-graduation-cap" aria-hidden="true"></span>Y.S</label>Builder</a>
					<!-- if logo is image enable this   
						<a class="navbar-brand" href="#home.html">
							<img src="image-path" alt="Your logo" title="Your logo" style="height:35px;" />
						</a> -->
					<button class="navbar-toggler" type="button" data-toggle="collapse"
						data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
						aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>

					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav mx-lg-auto ml-auto">
							<li class="nav-item active">
								<a class="nav-link" href="home.html">Home</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="about.html">About</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="services.html">Courses</a>
							</li>

						
							<li class="nav-item">
								<a class="nav-link" href="contact.html">Contact</a>
							</li>
						</ul>

					</div>
					<form action="#" method="post" class="d-flex searchhny-form">
						<input type="search" placeholder="Search Here..." required="required">
						<button type="submit"><span class="fa fa-search" aria-hidden="true"></span></button>
					</form>
				</div>
			</nav>
			<!--//nav-->
   
	`}

	HeadElement()