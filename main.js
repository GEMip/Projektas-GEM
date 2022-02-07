// Logo padidinimas:
function bigImg(x) {
	x.style.height = '64px';
	x.style.width = '64px';
}

function normalImg(x) {
	x.style.height = '32px';
	x.style.width = '32px';
}

// Teksto spalvos keitimas
document.getElementsByClassName('nav-link').addEventListener('mouseover', mouseOver);
document.getElementsByClassName('nav-link').addEventListener('mouseout', mouseOut);

function mouseOver() {
	document.getElementsByClassName('nav-link').style.color = 'red';
}

function mouseOut() {
	document.getElementsByClassName('nav-link').style.color = 'black';
}
