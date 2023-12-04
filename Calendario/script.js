document.addEventListener("DOMContentLoaded", function() {
    var calendario = document.getElementById("calendario");
    var tablaCalendario = document.getElementById("tabla-calendario");
    var mesActual = document.getElementById("mes-actual");

    // Obtén el año y el mes actual
    var fecha = new Date();
    var añoActual = fecha.getFullYear();
    var mes = fecha.getMonth();

    // Define un array con los nombres de los meses
    var nombresMeses = [
      "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
      "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    // Muestra el mes actual en el encabezado
    mesActual.textContent = nombresMeses[mes] + " " + añoActual;

    // Genera el calendario para el mes actual
    generarCalendario(añoActual, mes);

    // Agrega eventos a las flechas para navegar entre los meses
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

    // Aplica estilos a las flechas de navegación
    flechaMesAnterior.style.border = "1,5px  #0c0c0c";
    flechaMesAnterior.style.padding = "5px";
    flechaMesAnterior.style.cursor = "pointer";
    

    flechaMesSiguiente.style.border = "1,5px  #0c0c0c";
    flechaMesSiguiente.style.padding = "5px";
    flechaMesSiguiente.style.cursor = "pointer";

    // Aplica estilos cuando se pasa el cursor por las flechas de navegación
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

    // Función para generar el calendario para un año y un mes dados
    function generarCalendario(año, mes) {
      // Limpiar la tabla del calendario
      tablaCalendario.innerHTML = "";

      // Obtener el primer día del mes y el número de días en el mes
      var primerDia = new Date(año, mes, 1).getDay();
      var numDias = new Date(año, mes + 1, 0).getDate();

      // Crear una fila para los encabezados de los días de la semana
      var encabezados = document.createElement("tr");

      // Crear los encabezados de los días de la semana
      var diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
      for (var i = 0; i < diasSemana.length; i++) {
        var th = document.createElement("th");
        th.textContent = diasSemana[i];
        encabezados.appendChild(th);
      }

      // Agregar la fila de encabezados a la tabla
      tablaCalendario.appendChild(encabezados);

      // Crear una fila para cada semana del mes
      var semana = document.createElement("tr");

      // Rellenar los días anteriores al primer día del mes con celdas vacías
      for (var i = 0; i < primerDia; i++) {
        var td = document.createElement("td");
        semana.appendChild(td);
      }

      // Rellenar los días del mes con celdas numéricas
      for (var i = 1; i <= numDias; i++) {
        var td = document.createElement("td");
        td.textContent = i;
        semana.appendChild(td);

        // Si es sábado, crear una nueva fila
        if (semana.children.length === 7) {
          tablaCalendario.appendChild(semana);
          semana = document.createElement("tr");
        }
      }

      // Completar la última semana del mes con celdas vacías si es necesario
      if (semana.children.length > 0) {
        while (semana.children.length < 7) {
          var td = document.createElement("td");
          semana.appendChild(td);
        }
        tablaCalendario.appendChild(semana);
      }
    }
});
// Agrega este código al final del archivo
document.addEventListener("DOMContentLoaded", function() {
    var days = document.querySelectorAll("#calendario td");
    
    days.forEach(function(day) {
      day.addEventListener("click", function() {
        var hasTask = true; // Cambia esto a true o false dependiendo de si hay una tarea asignada para este día
        
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
  
  
    