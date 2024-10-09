console.log("App reloj digital");

const mostrarReloj = () => {
    let fecha = new Date(); //contiene la fecha actual Date
    let hr = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let seg = formatoHora(fecha.getSeconds());
    document.getElementById("hora").innerHTML = `${hr}:${min}:${seg}`;

    document.getElementById("contenedor").classList.toggle("animar");

    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
         "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    
    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    
    let fechaTexto = `${diaSemana}, ${dia}, ${mes}`;
    document.getElementById("fecha").innerHTML = fechaTexto;
}

const formatoHora = (hora) => {
    if (hora < 10)
        hora = "0" + hora;
    return hora;
}

//Llamar la función setInterval nos permite mostrar reloj cada segundo 
//por eso (1000) ello nos permite ver los segundos 
setInterval(mostrarReloj,1000);

