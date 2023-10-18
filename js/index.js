alert ("Bienvenido al simulador de turnos hospitalario")
const nombreCompleto = prompt("Ingrese nombre completo del paciente")

// Se solicita operacion al usuario
let operacion = prompt("Ingrese la operacion que desea realizar: 1 - Solicitar nuevo turno. 2 - Consultar turno. 3 - Cancelar turno. 0 - Salir.")

while (operacion !== "0") {
    switch (operacion) {
        // solicitud de un nuevo turno
        case "1":
            let nuevoTurno = prompt("Seleccione especialidad: 1 - Clinico. 2 - Ginecologia. 3 - Nutricion. 4 - Pediatria. 0 - Volver");
        if (nuevoTurno = "1") {
                let dia = prompt ("Selecione el dia: 1 - Lunes. 2 - Jueves.")
                let hora = prompt("Selecione el horario: 1 - 9:00. 2 - 9:30. 3 - 10:00. 4 - 10:30")
                alert("Turno confirmado!")
            } 
        else if (nuevoTurno = "2") {
            let dia = prompt ("Selecione el dia: 1 - Martes. 2 - Jueves. 3 - Viernes")
            let hora = prompt("Selecione el horario: 1 - 8:00. 2 - 8:30. 3 - 9:00. 4 - 9:30")
            alert("Turno confirmado!") 
        }
        else if(nuevoTurno = "3") {
            let dia = prompt ("Selecione el dia: 1 - Lunes. 2 - Viernes. ")
            let hora = prompt("Selecione el horario: 1 - 14:00. 2 - 14:30. 3 - 15:00. 4 - 15:30")
            alert("Turno confirmado!") 
        }
        else if(nuevoTurno = "4") {
            let dia = prompt ("Selecione el dia: 1 - Lunes. 2 - Miercoles. 3 - Viernes")
            let hora = parseInt(prompt("Selecione el horario: 1 - 13:00. 2 - 13:30. 3 - 14:00. 4 - 14:30"))
            alert("Turno confirmado!") 
        }
        else (nuevoTurno == "0");{let operacion = prompt("Ingrese la operacion que desea realizar: 1 - Solicitar nuevo turno. 2 - Consultar turno. 3 - Cancelar turno. 0 - Salir.")}
        break;
        //  consultar turno
        case "2":
            alert("Su turno fue registrado para el día: " + nuevoTurno) 
        break;
        // cancelar turno 
        case "3": 
        const cancelar = prompt ("Esta seguro que desea cancelar su turno? Ingrese SI para confirmar o cualquier cosa para abortar")
        if(cancelar !== "SI") {
            alert ("Turno cancelado!")
            break;}
        default: alert("INGRESASTE UNA OPCIÓN INCORRECTA");
         break;
}
break;
}
