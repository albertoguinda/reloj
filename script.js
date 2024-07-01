const numeroHoras = document.querySelector(".numero-horas");
const marcasReferencia = document.querySelector(".marcas-referencia");

const elementosNumero = [];
const elementosMarcas = [];

// Crear números de horas
for (let i = 1; i <= 12; i++) {
  elementosNumero.push(`<span style="--indice:${i};"><p>${i}</p></span>`);
}

numeroHoras.insertAdjacentHTML("afterbegin", elementosNumero.join(""));

// Crear marcas de referencia
for (let i = 1; i <= 60; i++) {
  elementosMarcas.push(`<span style="--indice:${i};"><p></p></span>`);
}

marcasReferencia.insertAdjacentHTML("afterbegin", elementosMarcas.join(""));

function actualizarReloj() {
  const ahora = new Date();
  const segundos = ahora.getSeconds();
  const minutos = ahora.getMinutes();
  const horas = ahora.getHours();

  const gradosSegundos = segundos * 6;
  const gradosMinutos = minutos * 6 + segundos / 10;
  const gradosHoras = horas * 30 + minutos / 2;

  document.querySelector(".maneta.segundos").style.transform = `rotate(${gradosSegundos}deg)`;
  document.querySelector(".maneta.minutos").style.transform = `rotate(${gradosMinutos}deg)`;
  document.querySelector(".maneta.horas").style.transform = `rotate(${gradosHoras}deg)`;
}

// Actualizar las manetas del reloj cada segundo
setInterval(actualizarReloj, 1000);

// Llamar a la función para inicializar el reloj
actualizarReloj();
