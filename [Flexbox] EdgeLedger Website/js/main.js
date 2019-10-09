function initMap() {
  // Your location
  const loc = {lat: -35.238762, lng: 149.054871};
  const map = new google.maps.Map(document.querySelector('.map'), {
    center: loc,
    zoom: 8
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map});
}

// Sticky menu background
window.addEventListener('scroll', function(){
  if(window.scrollY > 150){
    // document.querySelector('#navbar').style.opacity = 0.9;
    $('#navbar').css('opacity', 0.9); 
  } else {
    $('#navbar').css('opacity', 1);
  }
});

// Smooth Scrolling
$('#navbar a, .btn').on('click', function(e){
  if (this.hash !== ''){
    e.preventDefault();
    const hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top - 62
    }, 
    800
    );
  }
});

// $(document).ready(()=> $('#contact .map').css('overflow','none'));
