class MovieSection extends HTMLElement {
    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>
            movie-section img {
                min-height: 400px;
            }
        </style>

        <div class="row">
            <div class="col-md-6 order-md-0 order-1 my-3 align-self-center">
                <h2 class="fw-bold text-center">${this._movie.title}</h1>
                <p class="fst-italic text-center">${this._movie.original_title}</p>
                <p class="fst-italic px-3"><span class="fw-bold">Description:</span><br> ---- ${this._movie.description} ---- </p>
                <p class="fst-italic px-3"><span class="fw-bold">Director:</span> ${this._movie.director}</p>
                <p class="fst-italic px-3"><span class="fw-bold">Producer:</span> ${this._movie.producer}</p>
                <p class="fst-italic px-3"><span class="fw-bold">Release Date:</span> ${this._movie.release_date}</p>
                <p class="fst-italic px-3"><span class="fw-bold">Score:</span> ${this._movie.rt_score}</p>
            </div>
            <div class="col-md-6 align-self-center">
                <img src=${this._movie.img} alt="totoro" class="d-block my-4  mx-auto">
            </div>
        </div>
        `
    }
}

customElements.define('movie-section', MovieSection);
