var blue = document.getElementsByClassName('blue');
var yellow = document.getElementsByClassName('yellow');
var orange = document.getElementsByClassName('orange');
var duration = 1500;

window.sr = ScrollReveal({ reset: true });
sr.reveal(blue[0], {
	duration: duration,
	distance:'200px',
	origin: 'right',
});

sr.reveal(blue[1], {
	duration: duration,
	distance:'200px',
	origin: 'left',
});

for (var i = 0; i < yellow.length; i++) {
	sr.reveal(yellow[i], {
		duration: duration,
		distance:'500px',
		origin:'left',
	});
	duration -= 300;
}
sr.reveal('.green', {
	distance: '300px',
	duration: 1500,
	origin:  'left',
});

sr.reveal('.light-gr', {
	distance: '300px',
	duration: 1500,
	origin: 'right',
});

for (var i = orange.length; i >= 0; i--) {
	if (i < 2) {
		sr.reveal(orange[i], {
			rotate: {x:30, y:30, z: 360},
			easing: 'cubic-bezier(0.17, 0.67, 0.83, 0.67)',
			scale: 0.2,
			distance: '500px',
			origin:  'right',
			duration: '700',
		});
	}
	else {
		sr.reveal(orange[i], {
			rotate: {x:-30, y:-30, z: 360},
			easing: 'cubic-bezier(0.17, 0.67, 0.83, 0.67)',
			scale: 0.2,
			distance: '500px',
			origin:  'left',
			duration: '700',
		});
	}
}

sr.reveal('.grey', {
	duration: 2000,
});