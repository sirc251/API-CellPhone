console.log("Inicio Javascript")



const movies_quemado =   [
    {
        "adult": false,
        "backdrop_path": "/rMvPXy8PUjj1o8o1pzgQbdNCsvj.jpg",
        "genre_ids": [
            28,
            12,
            53
        ],
        "id": 299054,
        "original_language": "en",
        "original_title": "Expend4bles",
        "overview": "Armed with every weapon they can get their hands on and the skills to use them, The Expendables are the world’s last line of defense and the team that gets called when all other options are off the table. But new team members with new styles and tactics are going to give “new blood” a whole new meaning.",
        "popularity": 3741.062,
        "poster_path": "https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg",
        "release_date": "2023-09-15",
        "title": "Expend4bles",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 364
    },
    {
        "adult": false,
        "backdrop_path": "https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg",
        "genre_ids": [
            28,
            53,
            80
        ],
        "id": 926393,
        "original_language": "en",
        "original_title": "The Equalizer 3",
        "overview": "Robert McCall finds himself at home in Southern Italy but he discovers his friends are under the control of local crime bosses. As events turn deadly, McCall knows what he has to do: become his friends' protector by taking on the mafia.",
        "popularity": 1924.033,
        "poster_path": "https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg",
        "release_date": "2023-08-30",
        "title": "The Equalizer 3",
        "video": false,
        "vote_average": 7.3,
        "vote_count": 1055
    },
    {
        "adult": false,
        "backdrop_path": "https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg",
        "genre_ids": [
            16,
            28,
            14
        ],
        "id": 1034062,
        "original_language": "en",
        "original_title": "Mortal Kombat Legends: Cage Match",
        "overview": "In 1980s Hollywood, action star Johnny Cage is looking to become an A-list actor. But when his costar, Jennifer, goes missing from set, Johnny finds himself thrust into a world filled with shadows, danger, and deceit. As he embarks on a bloody journey, Johnny quickly discovers the City of Angels has more than a few devils in its midst.",
        "popularity": 2223.43,
        "poster_path": "https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg",
        "release_date": "2023-10-17",
        "title": "Mortal Kombat Legends: Cage Match",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 27
    }
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
    document.getElementById('modalTitle').textContent = "Titulo: " +movie.title;
    document.getElementById('modalFechaLanzamiento').textContent = "Fecha estreno: " + movie.release_date;
    document.getElementById('modalPuntuacion').textContent = "Puntuación: " + movie.vote_average;
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