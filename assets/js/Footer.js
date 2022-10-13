document.getElementById('footer').innerHTML=
`
<section class="w3l-footer-16">
    <div class="w3l-footer-16-main py-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 column">
                    <div class="row">
                        <div class="col-md-8 column">

                                <a class="logo-2" href="home.html">
                                        <label class="lohny-2"><span class="fa fa-graduation-cap" aria-hidden="true"></span>Y.S</label>Builder</a>
                           
                            <div class="ad-text-inf">
                                <p><span class="color-hny">Address :</span> 1 Ireti St,Muslim, Ibadan, Nigeria.</p>
                             </div>
                             <div class="ad-text-inf">
                                    <p><span class="color-hny">Email :</span> <a href="mailto:abdullahioladejo1@gmail.com">abdullahioladejo9@gmail.com</a></p>
                                 </div>
                                 <div class="ad-text-inf">
                                        <p><span class="color-hny">Phone :</span> <a href="tel:+2349153036869">+2349153036869</a></p>
                                     </div>
                        </div>
                        <div class="col-md-4 column">
                            <h3>Pages</h3>
                            <ul class="footer-gd-16">
                                <li><a href="home.html">Home</a></li>
                                <li><a href="about.html">About Us</a></li>
                <li><a href="services.html">Courses</a></li>
                <li><a href="#">Blog</a></li>
                                <li><a href="contact.html">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 column column3 mt-lg-0 mt-4">
                    <h3>Articles</h3>
                    <ul class="list-unstyled d-flex flex-wrap">
                        <li class="">
                            <div class="row">
                                <a class="col-md-5 col-4" href="#">
                                    <img class="rounded img-fluid img-responsive" src="../assets/images/bg1.jpg"
                                        alt="image">
                                </a>
                                <div class="col pl-0">
                                    <a class="footer-small-text" href="#">Nothing is difficult</a>
                                    <div class="text-sub-small">Feb 20th</div>
                                </div>
                            </div>
                        </li>
                        <li class="mt-md-0 mt-2">
                            <div class="row my-2 my-md-3">
                                <a class="col-md-5 col-4" href="#">
                                    <img class="rounded img-fluid img-responsive" src="../assets/images/bg3.jpg"
                                        alt="image">
                                </a>
                                <div class="col pl-0">
                                    <a class="footer-small-text" href="#">Learning</a>
                                    <div class="text-sub-small">Feb 22nd</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-4 col-md-6 column column4 mt-lg-0 mt-4">
                    <h3>Newsletter </h3>
                    <div class="end-column">
                        <h4>Subscribe Here Now</h4>
                        <form action="#" class="subscribe" method="post">
                            <input type="email" name="email" placeholder="Email Address" required="">
                            <button><span class="fa fa-paper-plane" aria-hidden="true"></span></button>
                        </form>
                        <p>Subscribe to our mailing list and get updates to your email inbox.</p>
                    </div>
                </div>
            </div>
            <div class="d-flex below-section justify-content-between align-items-center pt-4 mt-5">
                <div class="columns text-lg-left text-center">
                    <p>© 2020 Y.S Builder. All rights reserved. Design by <a href="https://w3layouts.com/" target="_blank">
                            Maxwizard</a>
                    </p>
                </div>
                <div class="columns-2 mt-md-0 mt-3">
                    <ul class="social">
                        <li><a href="web.facebook.com/abdullahi.oladejo.10/"><span class="fa fa-facebook" aria-hidden="true"></span></a>
                        </li>
                        <li><a href="https://www.linkedin.com/in/oladejo-abdullahi-9774701a6/"><span class="fa fa-linkedin" aria-hidden="true"></span></a>
                        </li>
                        <li><a href="twitter.com/oladejoabdulla2"><span class="fa fa-twitter" aria-hidden="true"></span></a>
                        </li>
                        <li><a href="mailto:abdullahioladejo9@gmail.com"><span class="fa fa-google-plus" aria-hidden="true"></span></a>
                        </li>
                        <li><a href="https://github.com/maxwizardth"><span class="fa fa-github" aria-hidden="true"></span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

<button onclick="topFunction()" id="movetop" title="Go to top">
        <span class="fa fa-angle-up"></span>
    </button>
    <script>
        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function () {
            scrollFunction()
        };

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.getElementById("movetop").style.display = "block";
            } else {
                document.getElementById("movetop").style.display = "none";
            }
        }

        // When the user clicks on the button, scroll to the top of the document
        function topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
    </script>
    <!-- //move top -->
    <script>
        $(function () {
            $('.navbar-toggler').click(function () {
                $('body').toggleClass('noscroll');
            })
        });
    </script>

    </div>
</section>`