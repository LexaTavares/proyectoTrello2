function crearNombreLista(){
  var otroValor=document.getElementById("cretino");
  var titulo=document.createElement("h2");
  var articulo=document.getElementById("contenedorListas");

  articulo.appendChild(titulo);
  titulo.innerText=otroValor.value;
  console.log(titulo);



var seccionBoton=document.getElementById("seccion");
var botonAgregarLista=document.createElement("button");
botonAgregarLista.innerHTML="Agregar Lista";
seccionBoton.appendChild(botonAgregarLista);
botonAgregarLista.onclick=

function agregarLista(){
  var inputEntrada=document.createElement("button");
  seccionBoton.appendChild(inputEntrada);
  inputEntrada.innerHTML=input.value;
  console.log(inputEntrada);
  var lista = document.createElement("ul");
  console.log(lista);
  var nuevaLista = document.createElement("li");
  console.log(nuevaLista);
  var contenedor=document.getElementById("contenedorListas");
  var contenedorBueno=document.createElement("section");


  contenedor.appendChild(contenedorBueno);
  lista.appendChild(nuevaLista);
  console.log(lista);

  contenedorBueno.appendChild(lista);

  }
}
