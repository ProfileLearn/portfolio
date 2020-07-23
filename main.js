
const URLA = `https://profilelearn.github.io/`;
const URLI = [`https://github.com/ProfileLearn/`, `/blob/master/images/image.png?raw=true`];

class Datos {
	constructor(hrefA, titulo) {
		this.hrefA = URLA + hrefA;
		this.srcImg = URLI[0] + hrefA + URLI[1];
		this.titulo = titulo;
	}
}


function render(obj) {
	const temp = document.createElement("template");
	temp.innerHTML = `<a href = ${obj.hrefA} class="project-tile project" target="_blank" rel="noopener noreferrer">
  	<img src = ${obj.srcImg} alt="project" class="project-image">
  	<p class="project-title"><em>${obj.titulo}</em></p>
	</a>`;
	document.querySelector(".projects-grid").appendChild(temp.content);
	console.dir(document.querySelector(".projects-grid"))
}

const app = [];

app[0] = new Datos("app_enfoque", "Ejercicio para el cerebro");
/*app[1] = new Datos("interescompuestobs4", "Calculador de Intereses");
app[2] = new Datos("calculator", "Calculadora");
app[3] = new Datos("technical-documentation-page", "Página de documentacion Técnica");
app[4] = new Datos("product-landing-page", "Landing Page");
app[5] = new Datos("survey-form", "Survey Form");
app[6] = new Datos("biografia", "Biografía");*/

render(app[0])



