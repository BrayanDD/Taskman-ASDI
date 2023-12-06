<?php 
include "connect.php";

//consulta para que aparezcan los datos en lista de tareas

// BUSQUEDA CON INNER JOIN
// $query= "SELECT Ta.codigo, Ta.titulo, Ta.tblEstadoId, Ta.tblCategoriaId, Ta.tblPrioridadId
//                 Es.estados
//                 Ca.categorias
//                 Pr.prioridades
//          FROM tareas as Ta
//          INNER JOIN estado as Es ON Ta.tblEstadoId = Es.idEstado
//          INNER JOIN categoria as Ca ON Ta.tblCategoriaId = Ca.idCategoria
//          INNER JOIN prioridad as Pr ON Ta.tblPrioridadId = Pr.idPrioridad";

// if (!$query) {
//     die("Error en la consulta: " . mysqli_error($conn));
// }
// echo $query
//BUSQUEDA SIN INNER
//$sql = $conn->query("SELECT * FROM tareas");
?>