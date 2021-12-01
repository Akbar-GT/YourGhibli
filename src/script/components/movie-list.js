import './movie-section.js';

class MovieList extends HTMLElement {
    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    render() {
        this.innerHTML = '';
        this._movie.forEach(element => {
            const data = document.createElement('movie-section');
            data.movie = element;
            this.appendChild(data);
        });
    }

    renderError(error, extra) {
        this.innerHTML = `
        <div class="row">
            <div class="col-md-6 order-md-0 order-1 my-3 text-center align-self-center error">
                <h1 class="fw-bold fst-italic">${error}</h1>
                <p class="fst-italic"> ${extra} </p>
            </div>
            <div class="col-md-6">
                <img src="../../assets/errorImage.png" alt="error image" class="w-75 d-block mx-auto">
            </div>
        </div>
        `;
    }
}

customElements.define('movie-list', MovieList);
