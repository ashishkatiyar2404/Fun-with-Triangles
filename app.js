const angles = document.querySelectorAll('.angle-input');
const triangle_btn = document.querySelector('#is-triangle-btn');
const outputOfTriangle = document.querySelector('#is-triangle-output');

function anglesSum() {
	const anglesSum =
		Number(angles[0].value) + Number(angles[1].value) + Number(angles[2].value);
	//console.log(anglesSum);
	return anglesSum;
}

function triangleOrNot() {
	if (anglesSum() === 180) {
		//console.log(anglesSum);
		outputOfTriangle.innerText = 'Angles forms a triangle';
	} else {
		//console.log('No these are not from the triangles');
		outputOfTriangle.innerText = 'No!    these angles are not forms a triangles';
	}
}
triangle_btn.addEventListener('click', triangleOrNot);