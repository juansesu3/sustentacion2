let btnGato = document.getElementById('btnGato');
let btnperro = document.getElementById('btnperro');

btnGato.addEventListener('click', ()=>{
    getMascotas('http://localhost:4000/gatos')
});

btnperro.addEventListener('click', ()=>{
    getMascotas('http://localhost:4001/perros')
});

const getMascotas = async (url)=>{
    let mostrarMascotas  = document.querySelector('.grid-mascotas');
    mostrarMascotas.innerHTML = '';
    const resp = await fetch(url);
    const data = await resp.json();
    data.forEach(mascotas  => {
        const {imagen, nombre, raza} = mascotas;
        mostrarMascotas.innerHTML +=
        `<div class="col mascotas">
        <a href="#" class="enlace-detalle-mascota">
            <div class="card bg-dark text-white gradiente">                
                <img src="${imagen}" class="card-img" alt="...">
                <div class="card-img-overlay">
                        <h5 class="card-title body2Bold">${nombre}</h5>
                        <p class="card-text body2Regular">${raza}</p>
                </div>
            </div>
        </a>
    </div>
    `
        
        
    });

}

