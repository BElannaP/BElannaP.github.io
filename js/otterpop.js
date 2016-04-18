

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
    cellAlign: 'center',
    //freeScroll: true,
    contain: true,
// disable previous & next buttons and dots
    prevNextButtons: false,
    pageDots: false,
    autoPlay: 2500,
    wrapAround: true,
    lazyLoad: true,
});
