
let tabla = new Array (5);
tabla[0] = ["Interstellar","Nolan", "EEUU","2014","WarnerBros","Robert Jn","Peper","Lee","int.jpg" ];
tabla[1] = ["Iron Man 1","NPUTAIDEA1"," EEUU"," 2006"," Marvel","Robert Jn","Peper","Lee","ir1.jpg" ];
tabla[2] = ["Iron Man 2","NPUTAIDEA2","EEUU","2008","Marvel","Robert Jn","Peper","Lee","ir2.jpg" ];
tabla[3] = ["Iron Man 3","NPUTAIDEA3","EEUU","2012","Marvel","Robert Jn","Peper","Lee ","ir3.jpg" ];
tabla[4] = ["hulk","NPUTAIDEA","EEUU","2007","Marvel","Robert Jn","Peper","Lee","hulk.jpg" ];

//buscar por titulo
function f_buscarTIT(){

let buscarTIT= document.getElementById("buscarTIT").value    
let control=0;

while( tabla[control][0] != buscarTIT && control < 4 ) {
control++;
}

if ( tabla[control][0] == buscarTIT) {

document.getElementById("info").value+= tabla[control][0] +"             "+
tabla[control][1] +"                     "+ tabla[control][2] + "                    "+
tabla[control][3] +"                    "+ tabla[control][4];

document.getElementById("reparto").value+= tabla[control][5]
+"  "+ tabla[control][6]+"  "+ tabla[control][7];

document.getElementById("imagen").src= tabla[control][8];

}

else{
document.getElementById("buscarTIT").value="No encontrado"

document.getElementById("info").value=""
document.getElementById("reparto").value=""
document.getElementById("imagen").src= "default.png"
}

}

//BUSCAR POR DIRECTOR
function f_buscarDIR(){

    let buscarDIR= document.getElementById("buscarDIR").value ;   
    let control=0;


    while( tabla[control][1] != buscarDIR && control < 4 ) {
    control++;
    }   

    if ( tabla[control][1] == buscarDIR) {
    document.getElementById("info").value+= tabla[control][0] +"             "+
    tabla[control][1] +"            "+ tabla[control][2] + "        "+
     tabla[control][3] +"         "+ tabla[control][4];
     document.getElementById("imagen").src= tabla[control][8];
    }
    
    else{
document.getElementById("buscarDIR").value="No encontrado";
document.getElementById("buscarTIT").value="";
document.getElementById("info").value="";
document.getElementById("reparto").value="";
document.getElementById("imagen").src= "default.png";
     }
}


//limpiar

function f_limpiar(){

document.getElementById("buscarTIT").value="";
document.getElementById("buscarDIR").value="";
document.getElementById("info").value="";
document.getElementById("reparto").value="";
document.getElementById("imagen").src= "default.png";


}