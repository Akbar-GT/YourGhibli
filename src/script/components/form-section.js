class FormSection extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set submitEvent(event) {
        this._submitEvent = event;
    }

    render() {
        this.innerHTML = `
            <form id="searchForm" class="d-flex flex-column align-items-center mx-4">
                <input type="text" id="inputTitle" class="form-control search-input w-75" required>
                <button type="submit" class="btn search-button mt-4 w-50 fw-bold">Search</button>
            </form>
        `;
        this.querySelector('#searchForm').addEventListener('submit', (event) => {
            event.preventDefault();
            this._submitEvent(this.querySelector('#inputTitle').value);
        });
    }
};

customElements.define('form-section', FormSection);
