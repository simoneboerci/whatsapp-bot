export class CSVImportHandler {
    constructor() {
        this.setupEventListeners();
    }

    setupEventListeners() {
        const importButton = document.getElementById('import-csv');
        importButton.addEventListener('click', () => this.triggerFileInput());
    }

    triggerFileInput() {
        const fileInput = document.getElementById('hidden-file-input');
        fileInput.click();
        fileInput.onchange = (e) => this.handleFileChange(e);
    }

    handleFileChange(event) {
        const file = event.target.files[0];
        console.log("File selezionato:", file);
        // Qui dovresti aggiungere la logica per il parsing del file CSV
    }
}

