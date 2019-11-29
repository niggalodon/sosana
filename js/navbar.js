document.getElementById("topbar").innerHTML = 
	'<div class="py-md-5 py-4 border-bottom">\
        <div class="container">\
            <div class="row no-gutters d-flex align-items-start align-items-center px-3 px-md-0">\
                <div class="col-md-4 order-md-2 mb-2 mb-md-0 align-items-center text-center">\
                    <a class="navbar-brand" href="index.html">Sosana Legal Aid<span>We Stand Together</span></a>\
                </div>\
                <div class="col-md-4 order-md-1 d-flex topper mb-md-0 mb-2 align-items-center text-md-right">\
                    <div class="icon d-flex justify-content-center align-items-center order-md-last">\
                        <span class="icon-phone"></span>\
                    </div>\
                    <div class="pr-md-4 pl-md-0 pl-3 text">\
                        <p class="con"><span>Call Us:</span> <span>+263 787 878 100</span></p>\
                        <p class="con"><span>Email:</span> <span>info@sosanalegalaid.com</span></p>\
                    </div>\
                </div>\
                <div class="col-md-4 order-md-3 d-flex topper mb-md-0 align-items-center">\
                    <div class="icon d-flex justify-content-center align-items-center"><span class="icon-map"></span></div>\
                    <div class="text pl-3 pl-md-3">\
                        <p class="time"><strong>Mon - Fri:</strong></span> <span>8:00am - 5:00pm</span></p>\
                        <p class="con"><span>21 Harare Drive, Marlborough, Harare, Zimbabwe</span></p>\
                    </div>\
                </div>\
            </div>\
        </div>\
    </div>'
;



if (page == 'home') {
document.getElementById("navbar").innerHTML =
    '<nav class="navbar navbar-expand-lg navbar-dark bg-dark ftco-navbar-light" id="ftco-navbar">\
        <div class="container d-flex align-items-center">\
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">\
                <span class="oi oi-menu"></span> Menu\
            </button>\
            <div class="collapse navbar-collapse" id="ftco-nav">\
                <ul class="navbar-nav m-auto">\
                    <li class="nav-item active"><a href="index.html" class="nav-link pl-0">Home</a></li>\
                    <li class="nav-item"><a href="about.html" class="nav-link">About</a></li>\
                    <li class="nav-item"><a href="pricing.html" class="nav-link">Pricing</a></li>\
                    <li class="nav-item"><a href="terms.html" class="nav-link">Terms & Conditions</a></li>\
                    <li class="nav-item"><a href="contact.html" class="nav-link">Contact</a></li>\
                </ul>\
            </div>\
        </div>\
    </nav>'
;
} else if (page == 'about') {
document.getElementById("navbar").innerHTML =
    '<nav class="navbar navbar-expand-lg navbar-dark bg-dark ftco-navbar-light" id="ftco-navbar">\
        <div class="container d-flex align-items-center">\
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">\
                <span class="oi oi-menu"></span> Menu\
            </button>\
            <div class="collapse navbar-collapse" id="ftco-nav">\
                <ul class="navbar-nav m-auto">\
                    <li class="nav-item"><a href="index.html" class="nav-link pl-0">Home</a></li>\
                    <li class="nav-item active"><a href="about.html" class="nav-link">About</a></li>\
                    <li class="nav-item"><a href="pricing.html" class="nav-link">Pricing</a></li>\
                    <li class="nav-item"><a href="terms.html" class="nav-link">Terms & Conditions</a></li>\
                    <li class="nav-item"><a href="contact.html" class="nav-link">Contact</a></li>\
                </ul>\
            </div>\
        </div>\
    </nav>'
;
} else if (page == 'pricing') {
document.getElementById("navbar").innerHTML =
    '<nav class="navbar navbar-expand-lg navbar-dark bg-dark ftco-navbar-light" id="ftco-navbar">\
        <div class="container d-flex align-items-center">\
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">\
                <span class="oi oi-menu"></span> Menu\
            </button>\
            <div class="collapse navbar-collapse" id="ftco-nav">\
                <ul class="navbar-nav m-auto">\
                    <li class="nav-item"><a href="index.html" class="nav-link pl-0">Home</a></li>\
                    <li class="nav-item"><a href="about.html" class="nav-link">About</a></li>\
                    <li class="nav-item active"><a href="pricing.html" class="nav-link">Pricing</a></li>\
                    <li class="nav-item"><a href="terms.html" class="nav-link">Terms & Conditions</a></li>\
                    <li class="nav-item"><a href="contact.html" class="nav-link">Contact</a></li>\
                </ul>\
            </div>\
        </div>\
    </nav>'
;
} else if (page == 'terms') {
document.getElementById("navbar").innerHTML =
    '<nav class="navbar navbar-expand-lg navbar-dark bg-dark ftco-navbar-light" id="ftco-navbar">\
        <div class="container d-flex align-items-center">\
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">\
                <span class="oi oi-menu"></span> Menu\
            </button>\
            <div class="collapse navbar-collapse" id="ftco-nav">\
                <ul class="navbar-nav m-auto">\
                    <li class="nav-item"><a href="index.html" class="nav-link pl-0">Home</a></li>\
                    <li class="nav-item"><a href="about.html" class="nav-link">About</a></li>\
                    <li class="nav-item"><a href="pricing.html" class="nav-link">Pricing</a></li>\
                    <li class="nav-item active"><a href="terms.html" class="nav-link">Terms & Conditions</a></li>\
                    <li class="nav-item"><a href="contact.html" class="nav-link">Contact</a></li>\
                </ul>\
            </div>\
        </div>\
    </nav>'
;
} else if (page == 'contact') {
document.getElementById("navbar").innerHTML =
    '<nav class="navbar navbar-expand-lg navbar-dark bg-dark ftco-navbar-light" id="ftco-navbar">\
        <div class="container d-flex align-items-center">\
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">\
                <span class="oi oi-menu"></span> Menu\
            </button>\
            <div class="collapse navbar-collapse" id="ftco-nav">\
                <ul class="navbar-nav m-auto">\
                    <li class="nav-item"><a href="index.html" class="nav-link pl-0">Home</a></li>\
                    <li class="nav-item"><a href="about.html" class="nav-link">About</a></li>\
                    <li class="nav-item"><a href="pricing.html" class="nav-link">Pricing</a></li>\
                    <li class="nav-item"><a href="terms.html" class="nav-link">Terms & Conditions</a></li>\
                    <li class="nav-item active"><a href="contact.html" class="nav-link">Contact</a></li>\
                </ul>\
            </div>\
        </div>\
    </nav>'
;
} else {
    document.getElementById("navbar").innerHTML =
    '<nav class="navbar navbar-expand-lg navbar-dark bg-dark ftco-navbar-light" id="ftco-navbar">\
        <div class="container d-flex align-items-center">\
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">\
                <span class="oi oi-menu"></span> Menu\
            </button>\
            <div class="collapse navbar-collapse" id="ftco-nav">\
                <ul class="navbar-nav m-auto">\
                    <li class="nav-item active"><a href="index.html" class="nav-link pl-0">Home</a></li>\
                    <li class="nav-item"><a href="about.html" class="nav-link">About</a></li>\
                    <li class="nav-item"><a href="pricing.html" class="nav-link">Pricing</a></li>\
                    <li class="nav-item"><a href="terms.html" class="nav-link">Terms & Conditions</a></li>\
                    <li class="nav-item"><a href="contact.html" class="nav-link">Contact</a></li>\
                </ul>\
            </div>\
        </div>\
    </nav>'
;
}


document.getElementById("footer").innerHTML = 
	'<footer class="ftco-footer ftco-bg-dark ftco-section">\
        <div class="container">\
            <div class="row mb-5">\
                <div class="col-md">\
                    <div class="ftco-footer-widget mb-5">\
                        <h2 class="ftco-heading-2 logo">Sosana Legal Aid</h2>\
                        <p>We Stand Together</p>\
                        <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-3">\
                            <li><a href="https://www.facebook.com/sosanalegal/"><span class="icon-facebook"></span></a></li>\
                        </ul>\
                    </div>\
                </div>\
                <div class="col-md">\
                    <div class="ftco-footer-widget mb-5 ml-md-4">\
                        <h2 class="ftco-heading-2">Links</h2>\
                        <ul class="list-unstyled">\
                            <li><a href="index.html"><span class="ion-ios-arrow-round-forward mr-2"></span>Home</a></li>\
                            <li><a href="about.html"><span class="ion-ios-arrow-round-forward mr-2"></span>About</a></li>\
                            <li><a href="pricing.html"><span class="ion-ios-arrow-round-forward mr-2"></span>Pricing</a></li>\
                            <li><a href="terms.html"><span class="ion-ios-arrow-round-forward mr-2"></span>Terms & Conditions</a></li>\
                            <li><a href="contact.html"><span class="ion-ios-arrow-round-forward mr-2"></span>Contact</a></li>\
                        </ul>\
                    </div>\
                </div>\
                <div class="col-md">\
                    <div class="ftco-footer-widget mb-5">\
                        <h2 class="ftco-heading-2">Where to find us</h2>\
                        <div class="block-23 mb-3">\
                            <ul>\
                                <li><span class="icon icon-map-marker"></span><span class="text">21 Harare Drive, Marlborough, Harare, Zimbabwe</span></li>\
                                <li><a href="tel:+263 787 878 100"><span class="icon icon-phone"></span><span class="text">+263 787 878 100</span></a></li>\
                                <li><a href="tel:+263 787 878 200"><span class="icon icon-phone"></span><span class="text">+263 787 878 200</span></a></li>\
                                <li><a href="mailto:info@sosanalegalaid.com?subject=New%20Enquiry"><span class="icon icon-envelope"></span><span class="text">info@sosanalegalaid.com</span></a></li>\
                            </ul>\
                        </div>\
                    </div>\
                </div>\
                <div class="col-md">\
                    <div class="ftco-footer-widget mb-5">\
                        <h2 class="ftco-heading-2">Opening Hours</h2>\
                        <h3 class="open-hours pl-4"><span class="ion-ios-time mr-3"></span><span>Mon - Fri:</span> <br/><span>8:00am - 5:00pm</span></h3>\
                    </div>\
                </div>\
            </div>\
            <div class="row">\
                <div class="col-md-12 text-center">\
                    <p>\
                        Sosana Legal Aid &copy; &nbsp;\
                        | &nbsp; <a href="mailto:tendai.madzikanda@tritechta.com?subject=New%20Tritechta%20Enquiry">Built by <strong>Tritechta Zimbabwe</strong></a></p>\
                </div>\
            </div>\
        </div>\
    </footer>'
;

