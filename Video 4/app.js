
// Variables Globales
const btnBotones = document.querySelector("#btnBotones");
const botones = document.querySelector("#botones");
const fondo = document.querySelector("#fondo");

//Uso de los IFI
(()=>{

    btnBotones.addEventListener('click', agregarBotones);
    botones.addEventListener('click', delegacion);


})();

function agregarBotones(e){
    //prevencion de ejecutado de funciones indeceadas
    e.preventDefault();
    // console.log("Click en el boton de botones");
    botones.innerHTML = `<button class="btn btn-primary">primary</button>
        <button class="btn btn-secondary">secondary</button>
        <button class="btn btn-danger">danger</button>
        <button class="btn btn-success">success</button>
        <button class="btn btn-warning">warning</button>`;
}
function delegacion(e) {
    e.preventDefault();
    // console.log(e.target.classList[1]);
    const colorboton = e.target.classList[1];
    switch (colorboton) {
        case ('btn-primary'):
            // console.log("Diste click en el boton Primary");
            fondo.className = "bg-primary";
            break;
        case ('btn-secondary'):
            // console.log("Diste click en el boton secondary");
            fondo.className = "bg-secondary";
            break;
        case ('btn-danger'):
            // console.log("Diste click en el boton danger");
            fondo.className = "bg-danger";
            break;
        case ('btn-success'):
            // console.log("Diste click en el boton success");
            fondo.className = "bg-success";
            break;
        case ('btn-warning'):
            // console.log("Diste click en el boton warning");
            fondo.className = "bg-warning";
            break;
    }
}