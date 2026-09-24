/* Shared header & footer — injected into every page so markup lives in one place. */
(function(){

  var HEADER = `
  <div class="topbar">
    <div class="container">
      <div class="topbar-contacts">
        <span>&#9742; +91-80-2625-4000</span>
        <span>&#9993; info@srisaivinayaka.com</span>
      </div>
      <div class="topbar-contacts">
        <span>Mon&ndash;Sat, 9:00&ndash;18:00</span>
      </div>
    </div>
  </div>
  <header class="site-header">
    <div class="container navwrap">
      <nav class="navbar navbar-expand-lg navbar-light w-100 px-0" aria-label="Main navigation">
        <div class="container-fluid px-0">
          <a href="index.html" class="brand navbar-brand">
            <span class="brand-mark">SSVES</span>
            <span class="brand-text">
              <span class="l1">Sri Sai Vinayaka</span>
              <span class="l2">Engineering &amp; Services</span>
            </span>
          </a>
          <button class="navbar-toggler navtoggle" type="button" data-bs-toggle="collapse" data-bs-target="#mainnav" aria-controls="mainnav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navtoggle-bar"></span>
            <span class="navtoggle-bar"></span>
            <span class="navtoggle-bar"></span>
          </button>
          <div class="collapse navbar-collapse" id="mainnav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item"><a class="nav-link" href="index.html" data-page="home">Home</a></li>
              <li class="nav-item"><a class="nav-link" href="company.html" data-page="company">Company</a></li>
              <li class="nav-item"><a class="nav-link" href="projects.html" data-page="projects">Projects</a></li>
              <li class="nav-item"><a class="nav-link" href="machinery.html" data-page="machinery">Machinery</a></li>
              <li class="nav-item"><a class="nav-link" href="clients.html" data-page="clients">Clients</a></li>
              <li class="nav-item"><a class="nav-link" href="contact.html" data-page="contact">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>`;

  var FOOTER = `
  <footer class="site-footer">
    <div class="container footgrid">
      <div>
        <h4>Sri Sai Vinayaka Engineering &amp; Services</h4>
        <p>Building and maintaining roads, highways and bridge works with a fleet of modern paving and milling machinery, delivered on schedule and to specification.</p>
        <div class="social">
          <a href="#" aria-label="Facebook">f</a>
          <a href="#" aria-label="LinkedIn">in</a>
          <a href="#" aria-label="Instagram">ig</a>
        </div>
      </div>
      <div>
        <h4>Company</h4>
        <ul>
          <li><a href="company.html">About Us</a></li>
          <li><a href="projects.html">Projects</a></li>
          <li><a href="machinery.html">Machinery</a></li>
          <li><a href="clients.html">Clients</a></li>
        </ul>
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="contact.html">Contact Us</a></li>
          <li><a href="contact.html">Get a Quote</a></li>
        </ul>
      </div>
      <div>
        <h4>Contact</h4>
        <p>2nd floor No 27/1, Anusuya Convention Hall, 3rd Main Dattatreyanagar,
         Hisakerihalli, Bengaluru Urban Karnataka 560085</p>
        <p>+91-80-2625-4000<br>info@srisaivinayaka.com</p>
      </div>
    </div>
    <div class="container footbottom">
      <span>&copy; <span id="year"></span> Sri Sai Vinayaka Engineering and Services. All Rights Reserved.</span>
      <span>Roads &middot; Highways &middot; Bridges</span>
    </div>
  </footer>`;

  function inject(){
    var h = document.getElementById('site-header');
    var f = document.getElementById('site-footer');
    if(h) h.innerHTML = HEADER;
    if(f) f.innerHTML = FOOTER;

    var yearEl = document.getElementById('year');
    if(yearEl) yearEl.textContent = new Date().getFullYear();

    // active nav highlight
    var page = document.body.getAttribute('data-page');
    document.querySelectorAll('.nav-link').forEach(function(a){
      if(a.getAttribute('data-page') === page) {
        a.classList.add('active');
        a.setAttribute('aria-current', 'page');
      }
    });

    var navToggle = document.querySelector('.navtoggle');
    var navMenu = document.getElementById('mainnav');
    if(navToggle && navMenu){
      var syncNavToggle = function(expanded){
        navToggle.classList.toggle('open', expanded);
        navToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
      };
      navMenu.addEventListener('shown.bs.collapse', function(){ syncNavToggle(true); });
      navMenu.addEventListener('hidden.bs.collapse', function(){ syncNavToggle(false); });
    }
  }

  document.addEventListener('DOMContentLoaded', inject);
})();
