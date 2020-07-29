
const URLA = `https://profilelearn.github.io/`;
const URLI = [`https://github.com/ProfileLearn/portfolio/blob/master/images/`, `?raw=true`];


class Datos {
	constructor(hrefA, titulo) {
		this.hrefA = URLA + hrefA;
		this.srcImg = URLI[0] + hrefA + URLI[1];
		this.titulo = titulo;
	}
}


/*<picture>
  <source media="(min-width:650px)" srcset="img_pink_flowers.jpg">
  <source media="(min-width:465px)" srcset="img_white_flower.jpg">
  <img src="img_orange_flowers.jpg" alt="Flowers" style="width:auto;">
</picture>*/


function render(obj) {
	const a = document.createElement("a");
	a.className = "project-tile project";
	a.target="_blank";
	a.rel="noopener noreferrer";
	a.href = obj.hrefA;
	a.innerHTML = `
	<picture>
		<source srcset= ${obj.srcImg + ".gif"}>
		<img src = ${obj.srcImg + ".png"} alt="project" class="project-image">
	</picture>
  	<p class="project-title"><em>${obj.titulo}</em></p>`

	document.querySelector(".projects-grid").appendChild(a);
}

const app = [];

app[0] = new Datos("app_enfoque", "Juego Mental");
app[1] = new Datos("interescompuestobs4", "Calculador de Intereses");
// app[2] = new Datos("calculator", "Calculadora");
app[3] = new Datos("technical-documentation-page", "Página de documentacion Técnica");
// app[4] = new Datos("product-landing-page", "Landing Page");
// app[5] = new Datos("survey-form", "Survey Form");
// app[6] = new Datos("biografia", "Biografía");

app.forEach(e=>{
	render(e);
})



