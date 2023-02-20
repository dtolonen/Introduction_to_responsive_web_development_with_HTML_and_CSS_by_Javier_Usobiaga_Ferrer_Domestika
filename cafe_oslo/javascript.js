/* Variables: cámbialas por los id y clase correspondiente */

/* id del enlace que despliega el menú */
var launcher = "#menu_link";

/* id del menú que será desplegado */
var dropdown = "#menu";

/* clase (sin el punto) que muestra el menú */
var dropdownClass = "dropdownMenu";
	
	
/* A partir de aquí, puedes dejar el código tal cual */
	
/* declaramos las funciones */
function nav(){
	var launch = document.querySelector(launcher);	
	launch.addEventListener("click", dropdownMenu, false);
}

function dropdownMenu(e){
	e.preventDefault();
	var dropd = document.querySelector(dropd);
	dropd.classList.toggle(dropdownClass);
}

/* Agregamos la clase js a la etiqueta html para saber que JS está funcionando */
document.querySelector("html").classList.add("js");


/* ejecutamos la función principal */
nav();