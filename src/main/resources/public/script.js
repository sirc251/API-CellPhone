console.log("Inicio Javascript")


//Aquí están la información de los portatiles
const pc_portatiles =   [
    {
        "id": 1,
        "marca": "Hewlett-Packard",
        "original_title": "HP 245 G7",
        "overview": "Procesador AMD Ryzen 3 3250U (2.6GHz up to 3.5GHz) Caché 4MB Memoria Ram 4GB 2400MHz DDR4 Disco sólido SSD 480GB M.2 SATA    Pantalla 14″ HD (1366 x 768) con WLED HD SVA antirreflectante",
        "poster_path": "https://pcsystemcolombia.com/wp-content/uploads/2021/02/HP-245-G7-Ryzen-3-3250U.jpg",
        "precio": "1'200,000",
        "title": "HP 245 G7",
    },
    {
        "id": 2,
        "marca": "LENOVO",
        "original_title": "LENOVO IdeaPad Slim 3",
        "overview": "Computador Portátil LENOVO 15,6\" Pulgadas IdeaPad Slim 3 Táctil - Intel Core i5 - RAM 8GB - Disco SSD 512GB - Gris",
        "poster_path": "https://pcsystemcolombia.com/wp-content/uploads/2021/02/HP-245-G7-Ryzen-3-3250U.jpg",
        "precio": "2'099,000",
        "title": "IdeaPad Slim 3",
    },
    {
        "id": 3,
        "marca": "ASUS",
        "original_title": "ASUS",
        "overview": "Computador Portátil ASUS Vivobook Go 15.6\" Pulgadas E1504GA - Intel Core i3 - RAM 8GB - Disco SSD 512 GB - Negro",
        "poster_path": "https://pcsystemcolombia.com/wp-content/uploads/2021/02/HP-245-G7-Ryzen-3-3250U.jpg",
        "precio": "1'499,000",
        "title": "ASUS vivobook",
    },
    {
        "id": 4,
        "marca": "Hewlett-Packard",
        "original_title": "HP Dq5005la",
        "overview": "Computador Portátil HP 14\" Pulgadas Dq5005la INTEL Core i5 - RAM 12GB - Disco SSD 512GB - Plata",
        "poster_path": "https://pcsystemcolombia.com/wp-content/uploads/2021/02/HP-245-G7-Ryzen-3-3250U.jpg",
        "precio": "2'199,000",
        "title": "HP Dq5005la",
    },{
        "id": 5,
        "marca": "ASUS",
        "original_title": "ASUS Vivobook Go OLED",
        "overview": "Computador Portátil ASUS Vivobook Go OLED 15.6\" Pulgadas E1504FA - AMD Ryzen 5 - RAM 16GB - Disco SSD 512 GB - Negro",
        "poster_path": "https://pcsystemcolombia.com/wp-content/uploads/2021/02/HP-245-G7-Ryzen-3-3250U.jpg",
        "precio": "2'349,000",
        "title": "ASUS Vivobook Go OLED",
    },{
        "id": 6,
        "marca": "Hewlett-Packard",
        "original_title": "ASUS Vivobook Go OLED",
        "overview": "Computador Portátil ASUS Vivobook Go 15.6\" Pulgadas E1504FA - AMD Ryzen 5 - RAM 8GB - Disco SSD 512 GB - Negro",
        "poster_path": "https://pcsystemcolombia.com/wp-content/uploads/2021/02/HP-245-G7-Ryzen-3-3250U.jpg",
        "precio": "1'899,000",
        "title": "ASUS Vivobook Go OLED",
    },{
        "id": 7,
        "marca": "ACER",
        "original_title": "ACER ASPIRE 5",
        "overview": "Computador Portátil ACER ASPIRE 5 15.6\" Pulgadas 55HE Intel Core i5 - RAM 8GB - Disco SSD 512GB - Azul",
        "poster_path": "https://pcsystemcolombia.com/wp-content/uploads/2021/02/HP-245-G7-Ryzen-3-3250U.jpg",
        "precio": "2'199,000",
        "title": "ACER ASPIRE 5",
    },
]

function createPcElement(pc) {
    const pcElement = document.createElement('div');
    pcElement.classList.add('col-md-3', 'card-container');
    //'col-sm-6', 'ml-3',
    pcElement.innerHTML = `
      <div class="card" style="width: 20rem;">
        <div class="card-img-container">
          <img src="${pc.poster_path}" class="card-img-top" alt="${pc.title}">
        </div>
        <div class="card-body">
          <h5 class="card-title">${pc.title}</h5>
          <p class="card-text text-justify">${pc.overview}</p>
          <div class="card-body text-center">
            <button class="btn btn-primary sinopsis-btn" data-id="${pc.id}">Sinopsis</button>
          </div>
        </div>
      </div>
    `;
    
    pcElement.querySelector('.sinopsis-btn').addEventListener('click', function() {
        showModal(pc);
    });
    return pcElement;
}

function showModal(pc) {
    // Aquí llenas la información del modal con los datos del pc
    document.getElementById('modalModelo').textContent = "Modelo: " + pc.title;
    document.getElementById('modalPrecio').textContent = "Precio: " + pc.precio;
    document.getElementById('modalMarca').textContent = "Marca: " + pc.marca;
    document.getElementById('modalPoster').src = pc.poster_path;
    document.getElementById('modalPoster').alt = pc.title;
    document.getElementById('modalOverview').textContent = pc.overview;
    // Muestra el modal
    document.getElementById('pcModal').style.display = 'flex';
}

// Función para cerrar el modal
document.querySelector('.close-button').addEventListener('click', function() {
    document.getElementById('pcModal').style.display = 'none';
});

async function loadPopularPc() {
    try {
        //const lista = await fetchMovies();
        const lista = pc_portatiles;
        const pcContainer = document.querySelector('.row');
        pcContainer.innerHTML = ''; // Limpiar el contenedor para nuevas tarjetas
        lista.forEach(pc => {
            const pcElement = createPcElement(pc);
            pcContainer.appendChild(pcElement);
        });
    } catch (error) {
        console.error('Error al mostrar las películas:', error);
    }
}

// cuando la pagina este cargando llamamos a la funcion principal que crea los elementos
document.addEventListener('DOMContentLoaded', loadPopularPc);