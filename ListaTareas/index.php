<?php
include "../includes/consultas.php"
?>

<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>TASKMAN</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="index.html"><img src="../images/logo.enc" width="50px" height="60px">TASKMAN</a>
        </div>
      </nav>
    <div class="container">
        <div class="usuario">
            <section class="section">
              
             <a href="Perfil/index.html" ><img src="../images/avatar-icon-vector-illustration.jpg" alt="" class="avatar">
             <br>
             <br>
             <i class="bi bi-person-circle">Brayan</i>
             </a>

            </section>
            <hr>
            <section class="section2">
              <a href="index.html"><i class="bi bi-house"> Inicio</i></a>
              <br>
              <a href="ListaTareas/index.html"><i class="bi bi-card-checklist">lista de Tareas</i></a>
              <br>
              <a href="Calendario/"><i class="bi bi-calendar">Calendaririo</i></a>
              <br>
              <a href="Notificaciones/"><i class="bi bi-bell">Notificaciones</i></a>
              <br>
              <a href="Notificaciones/"><i class="bi bi-pencil-square">Crear Usuarios</i></a>
              <br>
            </section>
            <hr>
            <section class="section3">
              <a href="Salir/"><i class="bi bi-box-arrow-right">Salir</i></a>
              <br>
            </section>
        </div>
        <div class="contenido"> 
          <div class="cabeza">
          <a href="#"><button type="button" class="btn btn-outline-primary" >Crear Tarea</button></a>
          <form class="d-flex" role="search" method="get">
          <!-- BUscador interfaz rapida con JS  -->
          <label for="buscador" style="padding:4px 5px 0px 0px; position:relative; float:left;" >Buscar:  </label>
          <input class="form-control me-2 light-table-filter" type="text" name="buscador" id="buscador" data-table="table_id" placeholder="" aria-label="Search">
          
        </form>
          </div>
          <div class="cuerpo">
            <table class="table table-hover table-fixed table_id">
              
              <thead >
               <tr>
                <th scope="col" style="width:100.4px">Codigo</th>
                <th scope="col" style="width:251px">Titulo</th>
                <th scope="col" style="width:100.4px">Estado</th>
                <th scope="col" style="width:100.4px">Categoria</th>
                <th scope="col" style="width:100.4px">Prioridad</th>
                <th scope="col" style="width:150.6px">Fecha Limite</th>
                <th scope="col" style="width:100.4px">Editar</th>
                <th scope="col" style="width:100.4px">Eliminar</th>
                    
               </tr>
              </thead>
              <tbody >
              <?php 
               $query= "SELECT Ta.codigo, Ta.titulo, Ta.tblEstadoId, Ta.tblCategoriaId,
               Ta.tblPrioridadId,Ta.fecha_vencimiento,
               Es.estados,
               Ca.categorias,
               Pr.prioridades
               FROM tareas as Ta
               INNER JOIN estado as Es ON Ta.tblEstadoId = Es.idEstado
               INNER JOIN categoria as Ca ON Ta.tblCategoriaId = Ca.IdCategoria
                INNER JOIN prioridad as Pr ON Ta.tblPrioridadId = Pr.IdPrioridad";

               $query = mysqli_query($conn, $query);
               while ($fila = mysqli_fetch_assoc($query)){
                
                  ?>
                <tr>
                  <th scope="row" ><?php echo $fila["codigo"];?></th>
                  <td  ><?=  $fila['titulo'];?></td>
                  <td  ><?= $fila['estados'];?></td>
                  <td  ><?= $fila['categorias'];?></td>
                  <td  ><?= $fila['prioridades'];?></td>
                  <td  ><?= $fila['fecha_vencimiento'];?></td>
                  <td ><i class="bi bi-pencil-square"></i></td>
                  <td ><i class="bi bi-archive"></i></td>
                </tr>
                
              </tbody>
              <?php 
              }
              ?>
            </table>
          </div>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
  </body>
</html>