console.log("Inicio Javascript")



const movies_quemado =   [
    {
        "id": 299054,
        "marca": "Hewlett-Packard",
        "original_title": "HP 245 G7",
        "overview": "Procesador AMD Ryzen 3 3250U (2.6GHz up to 3.5GHz) Caché 4MB Memoria Ram 4GB 2400MHz DDR4 Disco sólido SSD 480GB M.2 SATA    Pantalla 14″ HD (1366 x 768) con WLED HD SVA antirreflectante",
        "popularity": 3741.062,
        "poster_path": "https://pcsystemcolombia.com/wp-content/uploads/2021/02/HP-245-G7-Ryzen-3-3250U.jpg",
        "precio": "1'200,000",
        "title": "HP 245 G7",

        
    },
    {
        "id": 299053,
        "marca": "Hewlett-Packard",
        "original_title": "HP 245 G7",
        "overview": "Procesador AMD Ryzen 3 3250U (2.6GHz up to 3.5GHz) Caché 4MB Memoria Ram 4GB 2400MHz DDR4 Disco sólido SSD 480GB M.2 SATA    Pantalla 14″ HD (1366 x 768) con WLED HD SVA antirreflectante",
        "popularity": 3741.062,
        "poster_path": "https://pcsystemcolombia.com/wp-content/uploads/2021/02/HP-245-G7-Ryzen-3-3250U.jpg",
        "precio": "1'200,000",
        "title": "HP 245 G7",
    },
    {
        "id": 299052,
        "marca": "Hewlett-Packard",
        "original_title": "HP 245 G7",
        "overview": "Procesador AMD Ryzen 3 3250U (2.6GHz up to 3.5GHz) Caché 4MB Memoria Ram 4GB 2400MHz DDR4 Disco sólido SSD 480GB M.2 SATA    Pantalla 14″ HD (1366 x 768) con WLED HD SVA antirreflectante",
        "popularity": 3741.062,
        "poster_path": "https://pcsystemcolombia.com/wp-content/uploads/2021/02/HP-245-G7-Ryzen-3-3250U.jpg",
        "precio": "1'200,000",
        "title": "HP 245 G7",
    },
    {
        "id": 299051,
        "marca": "Hewlett-Packard",
        "original_title": "HP 245 G7",
        "overview": "Procesador AMD Ryzen 3 3250U (2.6GHz up to 3.5GHz) Caché 4MB Memoria Ram 4GB 2400MHz DDR4 Disco sólido SSD 480GB M.2 SATA    Pantalla 14″ HD (1366 x 768) con WLED HD SVA antirreflectante",
        "popularity": 3741.062,
        "poster_path": "https://pcsystemcolombia.com/wp-content/uploads/2021/02/HP-245-G7-Ryzen-3-3250U.jpg",
        "precio": "1'200,000",
        "title": "HP 245 G7",
    },
    {
        "id": 299052,
        "marca": "Hewlett-Packard",
        "original_title": "HP 245 G7",
        "overview": "Procesador AMD Ryzen 3 3250U (2.6GHz up to 3.5GHz) Caché 4MB Memoria Ram 4GB 2400MHz DDR4 Disco sólido SSD 480GB M.2 SATA    Pantalla 14″ HD (1366 x 768) con WLED HD SVA antirreflectante",
        "popularity": 3741.062,
        "poster_path": "https://pcsystemcolombia.com/wp-content/uploads/2021/02/HP-245-G7-Ryzen-3-3250U.jpg",
        "precio": "1'200,000",
        "title": "HP 245 G7",
    },
    {
        "id": 299052,
        "marca": "Hewlett-Packard",
        "original_title": "HP 245 G7",
        "overview": "Procesador AMD Ryzen 3 3250U (2.6GHz up to 3.5GHz) Caché 4MB Memoria Ram 4GB 2400MHz DDR4 Disco sólido SSD 480GB M.2 SATA    Pantalla 14″ HD (1366 x 768) con WLED HD SVA antirreflectante",
        "popularity": 3741.062,
        "poster_path": "https://pcsystemcolombia.com/wp-content/uploads/2021/02/HP-245-G7-Ryzen-3-3250U.jpg",
        "precio": "1'200,000",
        "title": "HP 245 G7",
    },
    {
        "id": 299052,
        "marca": "Hewlett-Packard",
        "original_title": "HP 245 G7",
        "overview": "Procesador AMD Ryzen 3 3250U (2.6GHz up to 3.5GHz) Caché 4MB Memoria Ram 4GB 2400MHz DDR4 Disco sólido SSD 480GB M.2 SATA    Pantalla 14″ HD (1366 x 768) con WLED HD SVA antirreflectante",
        "popularity": 3741.062,
        "poster_path": "https://pcsystemcolombia.com/wp-content/uploads/2021/02/HP-245-G7-Ryzen-3-3250U.jpg",
        "precio": "1'200,000",
        "title": "HP 245 G7",
    },
    {
        "id": 299052,
        "marca": "Hewlett-Packard",
        "original_title": "HP 245 G7",
        "overview": "Procesador AMD Ryzen 3 3250U (2.6GHz up to 3.5GHz) Caché 4MB Memoria Ram 4GB 2400MHz DDR4 Disco sólido SSD 480GB M.2 SATA    Pantalla 14″ HD (1366 x 768) con WLED HD SVA antirreflectante",
        "popularity": 3741.062,
        "poster_path": "https://pcsystemcolombia.com/wp-content/uploads/2021/02/HP-245-G7-Ryzen-3-3250U.jpg",
        "precio": "1'200,000",
        "title": "HP 245 G7",
    },
    {
        "id": 299052,
        "marca": "Hewlett-Packard",
        "original_title": "HP 245 G7",
        "overview": "Procesador AMD Ryzen 3 3250U (2.6GHz up to 3.5GHz) Caché 4MB Memoria Ram 4GB 2400MHz DDR4 Disco sólido SSD 480GB M.2 SATA    Pantalla 14″ HD (1366 x 768) con WLED HD SVA antirreflectante",
        "popularity": 3741.062,
        "poster_path": "https://pcsystemcolombia.com/wp-content/uploads/2021/02/HP-245-G7-Ryzen-3-3250U.jpg",
        "precio": "1'200,000",
        "title": "HP 245 G7",
    },
    {
        "id": 299052,
        "marca": "Hewlett-Packard",
        "original_title": "HP 245 G7",
        "overview": "Procesador AMD Ryzen 3 3250U (2.6GHz up to 3.5GHz) Caché 4MB Memoria Ram 4GB 2400MHz DDR4 Disco sólido SSD 480GB M.2 SATA    Pantalla 14″ HD (1366 x 768) con WLED HD SVA antirreflectante",
        "popularity": 3741.062,
        "poster_path": "https://pcsystemcolombia.com/wp-content/uploads/2021/02/HP-245-G7-Ryzen-3-3250U.jpg",
        "precio": "1'200,000",
        "title": "HP 245 G7",
    },

]




async function fetchMovies() {
    const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2ZmNjljNmRiM2YxMjgxZTk2ZTRlODQ5ZWRhNmQ2NSIsInN1YiI6IjU2YzRhZmU1YzNhMzY4MGQzZTAwMDIyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-TqKfzJ2O4yVBYI0aiaUDgkg_WDRhOoRfnC5U-QE2SU";
    const url = "https://api.themoviedb.org/3/movie/popular?language=es-ES";
    try {
        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${API_KEY}`
            }
        });
        if (!response.ok) {
            throw new Error(`API error: ${response.statusText}`);
        }
        const data = await response.json();
        console.log(data.results);
        return data.results;
    } catch (error) {
        console.error('Error al cargar las películas:', error);
        throw error; // Re-lanzar para manejo externo si es necesario
    }
}

function createMovieElement(movie) {
    const movieElement = document.createElement('div');
    movieElement.classList.add('col-md-3', 'col-sm-6', 'ml-3', 'card-container');
    movieElement.innerHTML = `
      <div class="card" style="width: 20rem;">
        <div class="card-img-container">
          <img src="${movie.poster_path}" class="card-img-top" alt="${movie.title}">
        </div>
        <div class="card-body">
          <h5 class="card-title">${movie.title}</h5>
          <p class="card-text text-justify">${movie.overview}</p>
          <div class="card-body text-center">
            <button class="btn btn-primary sinopsis-btn" data-id="${movie.id}">Sinopsis</button>
          </div>
        </div>
      </div>
    `;
    movieElement.querySelector('.sinopsis-btn').addEventListener('click', function() {
        showModal(movie);
    });
    return movieElement;
}

function showModal(movie) {
    // Aquí llenas la información del modal con los datos de la película
    document.getElementById('modalTitle').textContent = "Modelo: " +movie.title;
    document.getElementById('modalFechaLanzamiento').textContent = "Precio: " + movie.precio;
    document.getElementById('modalPuntuacion').textContent = "Marca: " + movie.marca;
    document.getElementById('modalPoster').src = movie.poster_path;
    document.getElementById('modalPoster').alt = movie.title;
    document.getElementById('modalOverview').textContent = movie.overview;
    // Muestra el modal
    document.getElementById('movieModal').style.display = 'flex';
}

// Función para cerrar el modal
document.querySelector('.close-button').addEventListener('click', function() {
    document.getElementById('movieModal').style.display = 'none';
});



async function loadPopularMovies() {
    try {
        //const movies = await fetchMovies();
        const movies = movies_quemado;
        const moviesContainer = document.querySelector('.row');
        moviesContainer.innerHTML = ''; // Limpiar el contenedor para nuevas tarjetas
        movies.forEach(movie => {
            const movieElement = createMovieElement(movie);
            moviesContainer.appendChild(movieElement);
        });
    } catch (error) {
        console.error('Error al mostrar las películas:', error);
    }
}

// cuando la pagina este cargando llamamos a la funcion principal que crea los elementos
document.addEventListener('DOMContentLoaded', loadPopularMovies);