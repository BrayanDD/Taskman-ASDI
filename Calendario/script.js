document.addEventListener("DOMContentLoaded", function() {
    var calendario = document.getElementById("calendario");
    var tablaCalendario = document.getElementById("tabla-calendario");
    var mesActual = document.getElementById("mes-actual");
    var fecha = new Date();
    var añoActual = fecha.getFullYear();
    var mes = fecha.getMonth();
    var nombresMeses = [
      "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
      "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    mesActual.textContent = nombresMeses[mes] + " " + añoActual;
    generarCalendario(añoActual, mes);
    var flechaMesAnterior = document.getElementById("mes-anterior");
    var flechaMesSiguiente = document.getElementById("mes-siguiente");
    flechaMesAnterior.addEventListener("click", function() {
      mes--;
      if (mes < 0) {
        mes = 11;
        añoActual--;
      }
      mesActual.textContent = nombresMeses[mes] + " " + añoActual;
      generarCalendario(añoActual, mes);
    });
    flechaMesSiguiente.addEventListener("click", function() {
      mes++;
      if (mes > 11) {
        mes = 0;
        añoActual++;
      }
      mesActual.textContent = nombresMeses[mes] + " " + añoActual;
      generarCalendario(añoActual, mes);
    });
    flechaMesAnterior.style.border = "1,5px  #0c0c0c";
    flechaMesAnterior.style.padding = "5px";
    flechaMesAnterior.style.cursor = "pointer";
    flechaMesSiguiente.style.border = "1,5px  #0c0c0c";
    flechaMesSiguiente.style.padding = "5px";
    flechaMesSiguiente.style.cursor = "pointer";
    flechaMesAnterior.addEventListener("mouseover", function() {
    flechaMesAnterior.style.opacity = "0.8";
    });
    flechaMesAnterior.addEventListener("mouseout", function() {
      flechaMesAnterior.style.opacity = "1";
    });
    flechaMesSiguiente.addEventListener("mouseover", function() {
      flechaMesSiguiente.style.opacity = "0.8";
    });
    flechaMesSiguiente.addEventListener("mouseout", function() {
      flechaMesSiguiente.style.opacity = "1";
    });
    function generarCalendario(año, mes) {
      tablaCalendario.innerHTML = "";
      var primerDia = new Date(año, mes, 1).getDay();
      var numDias = new Date(año, mes + 1, 0).getDate();
      var encabezados = document.createElement("tr");
      var diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
      for (var i = 0; i < diasSemana.length; i++) {
        var th = document.createElement("th");
        th.textContent = diasSemana[i];
        encabezados.appendChild(th);
      }
      tablaCalendario.appendChild(encabezados);
      var semana = document.createElement("tr");
      for (var i = 0; i < primerDia; i++) {
        var td = document.createElement("td");
        semana.appendChild(td);
      }
      for (var i = 1; i <= numDias; i++) {
        var td = document.createElement("td");
        td.textContent = i;
        semana.appendChild(td);
        if (semana.children.length === 7) {
          tablaCalendario.appendChild(semana);
          semana = document.createElement("tr");
        }
      }
      if (semana.children.length > 0) {
        while (semana.children.length < 7) {
          var td = document.createElement("td");
          semana.appendChild(td);
        }
        tablaCalendario.appendChild(semana);
      }
    }
});
document.addEventListener("DOMContentLoaded", function() {
    var days = document.querySelectorAll("#calendario td");
    days.forEach(function(day) {
      day.addEventListener("click", function() {
        var hasTask = true; 
        var popup = document.getElementById("popup");
        var title = document.getElementById("popup-title");
        var message = document.getElementById("popup-message");
        var viewTaskButton = document.getElementById("view-task-button");
        var createTaskButton = document.getElementById("create-task-button");
        if (hasTask) {
          title.textContent = "Tarea asignada";
          message.textContent = "Hay una tarea asignada para este día.";
          viewTaskButton.style.display = "inline-block";
          createTaskButton.style.display = "none";
        } else {
          title.textContent = "No hay tareas asignadas";
          message.textContent = "No hay una tarea asignada para este día.";
          viewTaskButton.style.display = "none";
          createTaskButton.style.display = "inline-block";
        } 
        popup.style.display = "block";
      });
    });
  });
  
  
    