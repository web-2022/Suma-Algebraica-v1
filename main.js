//Este desafío trata de crear 100 ejercicios de matemáticas, del tema de suma algebraica de 2 números aleatorios con ayuda del while, for y condicionales.

// Creo una función para que al dar click en el boton, se impriman 50 ejercicios de suma algebtraica
function practiquemos() {

    let peticion = prompt("Deseas practicar con 100 ejercicios. Escribe si o no")

    //verificamos si escribió una de las opciones solicitadas

    if ((peticion == "si") || (peticion == "no")) {
        //Mientras el estudiante escriba si
        while (peticion == "si") {
            document.write("<b>Practiquemos con 100 siguientes ejercicios resueltos:</b>" + "<br>" + "<br>")


            //Creo 100 ejercicios para que el estudiante practique    
            for (let i = 1; i < 101; i++) {
                //Creo un número aleatorio entero menor a 10 (puede ser cualquier número) 
                let l = Math.floor(15 * Math.random())

                //Creo un número aleatorio entero menor a 10 (puede ser cualquier número) 
                let h = Math.floor(10 * Math.random())

                //Creo una variable para que reciba al resultado del ejercicio
                let j = -l - h

                //Creo una variable que recibirá un valor que será parte de la solución que se explica
                let k = l + h

                //Imprimo los ejercicios y la explicación de la solución
                document.write("Ejercicio " + i + ":" + "<br>" + "-" + l + " - " + h + " = " + "....." + " " + "; Solución: tenemos 2 números negativos " + " : " + "-" + l + " y " + "-" + h + ". ENTONCES SIGNOS IGUALES, SE SUMAN. " + l + " y " + h + ", suman " + k + " y le colocamos el mismo signo (-) por delante, obteniendo: " + j + "<br>" + "<br>")

            }

            //Agrego un comentario al final de los 100 ejercicios generados

            document.write("<br>" + "<b>¡Felicitaciones por haber llegado al final!</b>")


            break
        }

        while (peticion == "no") {
            alert("Cuando desees practicar, dale click en el boton Practiquemos")

            break
        }

    } else {

        alert("No ingresaste una opción correcta...cuando desees practicar, vuelve a ingresar");
    }



}