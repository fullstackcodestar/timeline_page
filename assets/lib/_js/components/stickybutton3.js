var controller = new ScrollMagic.Controller();

var $button = $('#sticky-button3');

var tween = TimelineMax().to('#sticky-button3', 1 ,{
    top: '-=200',
    onStart: function () {}
})

new ScrollMagic.Scene({
    triggerElement: '#sticky-button3',
    triggerHook: 'OnEnter',
    duration: 0,
})
.setPin('#sticky-button3')
.addTo(controller);