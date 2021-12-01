import './form-section.js';

class SearchSection extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set submitEvent(event) {
        const formSection = document.querySelector('form-section');
        formSection.submitEvent = event;
    }

    render() {
        this.innerHTML = `
            <div class="row">
                <div class="col-md-6 order-md-0 order-1 my-3 text-center align-self-center left">
                    <h1 class="fw-bold py-3">Find Your <br> Favorite Here</h1>
                    <p class="fst-italic px-5 mb-5"> find anime movies from The Studio Ghibli API. this API catalogs the people, places, and things found in the worlds of Ghibli.</p>
                    <form-section></form-section>
                </div>
                <div class="col-md-6 align-self-center">
                    <img src="../../assets/mainImage.png" alt="main image" class="d-block w-100 my-4  mx-auto">
                </div>
            </div>
        `;
    }
};

customElements.define('search-section', SearchSection);
