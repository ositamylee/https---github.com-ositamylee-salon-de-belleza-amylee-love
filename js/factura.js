// crear una funcion
function calcular(){
    // definir una variables para el iva precio y cantidad
    const iva =0.19;
    let precio = document.simuladorfactura.precio.value;
    let cantidad = document.simuladorfactura.cantidad.value;
    // capturar el producto
    producto =document.getElementById("producto").value;

    /*crear una validacion para evitar operaciones con datos nulos o vacios; que la cantidad o precio no sea precio no sea 0. se hace una estructura condicional if-then */

    if (precio == 0 || precio == null || cantidad == 0 || cantidad == null){
        alert("cantidad o precio son 0 o no son validos, intentar de nuevo");

    }
    else{
        // declarar las variables para las operacion.
        // valor total vt.
        let vt = precio * cantidad;
        // el valor de porcentaje del producto iva es vi
        let vi = vt * iva;
        // total a pagar que es la suma de iva + valor total tp,
         let tp =vt + vi;

        //  imprimir o mostrar los resultados en la paguina web, se utiliza un elemento llamado innerHTML.
        // mostrar el producto seleccionado
         document.getElementById("valorproducto").innerHTML=producto;

        // mostrar el precio
        document.getElementById("valorprecio").innerHTML=precio;
        // mostrar el valor total
        document.getElementById("valortotal").innerHTML=vt;
        // mostrar el valor iva.
        document.getElementById("valoriva").innerHTML=vi;
        // mostrar el valor a pagar.
        document.getElementById("totalpagar").innerHTML=tp;


    }

}
