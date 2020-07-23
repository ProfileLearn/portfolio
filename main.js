
const URLA = `https://profilelearn.github.io/`;
const URLI = [`https://github.com/ProfileLearn/portfolio/blob/master/images/`, `.png?raw=true`];


class Datos {
	constructor(hrefA, titulo) {
		this.hrefA = URLA + hrefA;
		this.srcImg = URLI[0] + hrefA + URLI[1];
		this.titulo = titulo;
	}
}


function render(obj) {
	const a = document.createElement("a");
	a.className = "project-tile project";
	a.target="_blank";
	a.rel="noopener noreferrer";
	a.href = obj.hrefA;
	a.innerHTML = `<img src = ${obj.srcImg} alt="project" class="project-image">
  	<p class="project-title"><em>${obj.titulo}</em></p>`

	document.querySelector(".projects-grid").appendChild(a);
}

const app = [];

app[0] = new Datos("app_enfoque", "Ejercicio para el cerebro");
app[1] = new Datos("interescompuestobs4", "Calculador de Intereses");
app[2] = new Datos("calculator", "Calculadora");
app[3] = new Datos("technical-documentation-page", "Página de documentacion Técnica");
app[4] = new Datos("product-landing-page", "Landing Page");
app[5] = new Datos("survey-form", "Survey Form");
app[6] = new Datos("biografia", "Biografía");

app.forEach(e=>{
	render(e);
})



