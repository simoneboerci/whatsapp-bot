export class DataSetHandler {
    constructor() {
        this.addButton = document.getElementById('add-data-set');
        this.dataSection = document.getElementById('data-content-section');
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.addButton.addEventListener('click', () => this.addDataSet());
    }

    addDataSet() {
        // Esempio di aggiunta di un nuovo input di testo al DOM
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Nuovo set di dati';
        this.dataSection.appendChild(input);
    }
}
