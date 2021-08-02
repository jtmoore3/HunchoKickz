/* Parallax Zoom In Effect */
$(window).scroll(function() {
    if ($(window).width() > 1200) {
        let scroll = $(window).scrollTop();
        $(".zoom").css({
            'background-size': 100 + scroll/50 + '%',
        });
    } else {
        $(".zoom").css({
            'background-size': 'cover',
        })
    } 
});
$(window).scroll(function() {
    if ($(window).width() > 1200) {
        let scroll = $(window).scrollTop();
        $(".about-container").css({
            'background-size': 100 + scroll/100 + '%',
        });
    } else {
        $(".about-container").css({
            'background-size': 'cover',
        })
    } 
});
$(window).scroll(function() {
    if ($(window).width() > 1200) {
        let scroll = $(window).scrollTop();
        $(".custom-container").css({
            'background-size': 100 + scroll/200 + '%',
        });
    } else {
        $(".custom-container").css({
            'background-size': 'cover',
        })
    } 
});
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
/* Intersection Observer */
/* const faders = document.querySelectorAll('.fade-in');

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
}) */
