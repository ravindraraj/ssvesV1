document.addEventListener('DOMContentLoaded', function(){

  /* ---- Animated stat counters ---- */
  var stats = document.querySelectorAll('.stat b[data-count]');
  if(stats.length){
    var counted = false;
    var runCounters = function(){
      if(counted) return;
      counted = true;
      stats.forEach(function(el){
        var target = parseInt(el.getAttribute('data-count'), 10);
        var suffix = el.getAttribute('data-suffix') || '';
        var current = 0;
        var step = Math.max(1, Math.ceil(target / 60));
        var timer = setInterval(function(){
          current += step;
          if(current >= target){ current = target; clearInterval(timer); }
          el.textContent = current + suffix;
        }, 25);
      });
    };
    var statsSection = document.querySelector('.stats');
    if('IntersectionObserver' in window && statsSection){
      var io = new IntersectionObserver(function(entries){
        entries.forEach(function(e){ if(e.isIntersecting) runCounters(); });
      }, { threshold: .4 });
      io.observe(statsSection);
    } else {
      runCounters();
    }
  }

  /* ---- Project gallery filter ---- */
  var filterBtns = document.querySelectorAll('.filterbtn');
  var galleryCards = document.querySelectorAll('.gcard');
  if(filterBtns.length && galleryCards.length){
    filterBtns.forEach(function(btn){
      btn.addEventListener('click', function(){
        filterBtns.forEach(function(b){ b.classList.remove('active'); });
        btn.classList.add('active');
        var f = btn.getAttribute('data-filter');
        galleryCards.forEach(function(card){
          var cat = card.getAttribute('data-category');
          card.style.display = (f === 'all' || f === cat) ? '' : 'none';
        });
      });
    });
  }

  /* ---- Contact form (client-side only, no backend) ---- */
  var form = document.querySelector('form.contactform');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var status = form.querySelector('.form-status');
      var required = form.querySelectorAll('[required]');
      var valid = true;
      required.forEach(function(field){
        if(!field.value.trim()) valid = false;
      });
      if(!valid){
        status.textContent = 'Please fill in all required fields.';
        status.className = 'form-status';
        return;
      }
      status.textContent = 'Thank you — your enquiry has been noted. Our team will get back to you shortly.';
      status.className = 'form-status ok';
      form.reset();
    });
  }

});
