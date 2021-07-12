/* Scroll Indicator */
window.onscroll = function () { myFunction() };

function myFunction () {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

/* Intersection Observer */
const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

const appearOptions = {
    threshold: 0.45, 
    rootMargin: "0px -100px 0px 0px" 
};

const appearOnScroll = new IntersectionObserver(function(
    entries, 
    appearOnScroll
)   {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
}, 
appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});

/* Parallax Zoom In Effect */
$(window).scroll(function() {
    if ($(window).width() > 1200) {
        let scroll = $(window).scrollTop();
	    $(".zoom").css({
            'background-size': 100 + scroll/15 + '%',
	    });
    } else {
        $(".zoom").css({
            'background-size': 'cover',
	    })
    } 
});

/* $(window).scroll(function() {
    if ($(window).width() > 1200) {
        let scroll = $(window).scrollTop();
	    $(".cleaning-container").css({
            'background-size': 100 + scroll/150 + '%',
        });
        $(".mesh-container").css({
            'background-size': 100 + scroll/150 + '%',
        });
        $(".uggs-container").css({
            'background-size': 100 + scroll/150 + '%',
        });
        $(".ice-container").css({
            'background-size': 100 + scroll/150 + '%',
        });
        $(".glue-container").css({
            'background-size': 100 + scroll/150 + '%',
        });
        $(".customization-container").css({
            'background-size': 100 + scroll/150 + '%',
	    });
    } else {
        $(".zoom").css({
            'background-size': 'cover',
	    })
    } 
}); */

$(window).scroll(function() {
    if ($(window).width() > 1200) {
        let scroll = $(window).scrollTop();
	    $(".contact-container").css({
            'background-size': 131 - scroll/198 + '%',
	    });
    } else {
        $(".contact-container").css({
            'background-size': 'cover',
	    })
    } 
});


