var transiciones = [[1, 4, 7, 10],  //  estado 0
                    [2, 0, 1, 1],   //  estado 1
                    [3, 1, 2, 2],   //  estado 2
                    [13, 2, 3, 3],  //  estado 3
                    [0, 5, 4, 0],   //  estado 4
                    [4, 6, 5, 4],   //  estado 5
                    [5, 13, 6, 5],  //  estado 6
                    [7, 0, 8, 7],   //  estado 7
                    [8, 7, 9, 8],   //  estado 8
                    [9, 8, 13, 9],  //  estado 9
                    [10, 0, 10, 11],//  estado 10
                    [11, 5, 11, 12],//  estado 11
                    [12, 6, 12, 13],//  estado 12
                    [13, 13, 13, 13]//  estado 13
                   ]
var nombre_estados = ["Estable", "Satisfecho", "Lleno", "Reventando", "Ejercitado", "Cansado", "Rendido", "Fresco", "Frío", "Hipotermia", "Relajado", "Adormilado", "Coma", "Muerte"];
var estado_actual = 0;

function cambiarImagen(estado){
    $("#imagen").attr("src", "img/state"+estado+".png");
    $("#estado").text(nombre_estados[estado]);
}

function cambiarEstado(accion, estado){
    estado_actual = transiciones[estado][accion];
    console.log(estado_actual)
    cambiarImagen(estado_actual);
}


$(document).ready(function(){
    console.log("Prueba");

    $("#alimentar").click(function(){
        console.log("Alimentar");
        cambiarEstado(0, estado_actual);
    });
    $("#pastorear").click(function(){
        console.log("Pastorear");
        cambiarEstado(1, estado_actual);
    });
    $("#rapar").click(function(){
        console.log("Rapar");
        cambiarEstado(2, estado_actual);
    });
    $("#descansar").click(function(){
        console.log("Descansar");
        cambiarEstado(3, estado_actual);
    });


});