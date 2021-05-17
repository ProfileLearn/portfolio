
const URLA = `https://profilelearn.github.io/`;
const URLI = [`https://github.com/ProfileLearn/portfolio/blob/master/images/`, `${".gif" || ".png"}?raw=true`];


class Datos {
	constructor(hrefA, titulo) {
		this.hrefA = URLA + hrefA;
		this.srcImg = URLI[0] + hrefA + URLI[1];
		this.titulo = titulo;
	}
}

function responsive(){
const menu = document.querySelector("header > nav > div");
const ul = document.querySelector("header > nav > ul");
const navList = document.querySelector(".nav-list");
const h1 = document.querySelector("h1");

function hidden() {
	if (window.matchMedia("(max-width: 1199px)").matches) {
		navList.classList.toggle("hidden");
		h1.classList.toggle("mt-5");
	}
}
const addHidden = () => {
	navList.classList.add("hidden");
	h1.classList.remove("mt-5");
};
addHidden();
window.addEventListener("resize", addHidden);
menu.addEventListener("click", hidden)
ul.addEventListener("click", hidden)
};


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
 
responsive();

const app = [];

app[0] = new Datos("app_enfoque", "Juego Mental");
app[1] = new Datos("interescompuestobs4", "Calculador de Intereses");
app[2] = new Datos("technical-documentation-page", "Página de documentacion Técnica");

app.forEach(e=>{
	render(e);
})



