
const URLA = `https://profilelearn.github.io/`;
const URLI = [`https://github.com/ProfileLearn/portfolio/blob/master/images/`, `${".gif" || ".png"}?raw=true`];


class Datos {
	constructor(hrefA, titulo) {
		this.hrefA = URLA + hrefA;
		this.srcImg = URLI[0] + hrefA + URLI[1];
		this.titulo = titulo;
	}
}

const menu = document.querySelector("header > nav > div");
const ul = document.querySelector("header > nav > ul");
menu.addEventListener("click", hidden)
ul.addEventListener("click", hidden)

function hidden() {
	document.querySelector(".nav-list").classList.toggle("hidden");
	document.querySelector("h1").classList.toggle("mt-5");
}

function render(obj) {
	const a = document.createElement("a");
	a.className = "project-tile";
	a.target="_blank";
	a.rel="noopener noreferrer";
	a.href = obj.hrefA;
	a.innerHTML = `<img src = ${obj.srcImg} alt="project" class="project-image">
  	<p class="project-title"><em>${obj.titulo}</em></p>`

	document.querySelector(".projects-grid").appendChild(a);
}

const app = [];

app[0] = new Datos("app_enfoque", "Juego Mental");
app[1] = new Datos("interescompuestobs4", "Calculador de Intereses");
app[3] = new Datos("technical-documentation-page", "Página de documentacion Técnica");

app.forEach(e=>{
	render(e);
})



