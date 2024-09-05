//url de un api//
const url = "https://api.escuelajs.co/api/v1/users/";

/*fetch(url)//promesas para poder empesar aleer la api
.then(res => res.json())//resultado de lectura como json
.then(data=> console.log(data));//muestra en consola
//.then(funtion(data){console.log(data)})//muestra en consola


/*var*/ 

/*const miFormulario = "https://api.escuelajs.co/api/v1/users/${IDuser}";
*/
const miFormulario = document.getElementById("miFormulario");
const resultadoDiv = document.getElementById("resultados");//en el html

miFormulario.addEventListener("submit", async (event)=>{
    event.preventDefault();
    const formData = new FormData(miFormulario);
    const numeroIngresado = formData.get("IDpersona");
    ///
    const datospersonas = await traerDatos(numeroIngresado);
    //para ver en consola
    //console.log(datospersonas); 
    //resultadoDiv.innerHTML = `<p> ${datospersonas.email}</p>`;
    /*traerDatos(numeroIngresado)
    //en consola
    fetch(url+ numeroIngresado)
    .then(Archivo => Archivo.json())
    /*.then(data => console.log(data))*/
    mostarResultados(datospersonas);

});

function mostarResultados({email,password,name,avatar}){
    resultadoDiv.innerHTML = `
    <p> name:</p><p> ${name}</p>
    <p> avatar:</p><p> ${email}</p>
    <p> email:</p><p> ${password}</p>
    <p> avatar:</p><p> ${avatar}</p>

    `;

}



//consola
async function traerDatos(id){
    return fetch(url + id)
    .then(Archivo => Archivo.json())
    .then(data=>data);
    //return respuesta.then(data => data);


   /* return fetch(url+ id )
        .then(Archivo => Archivo.json())
         //
        .then(data => console.log(data));
    //.then(dato = dato);
    //retornar los datos 
    return dato;
*/
}
