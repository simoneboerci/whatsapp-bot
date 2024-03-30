export class CSVImportHandler {
    constructor(csvParser) {
        this.csvParser = csvParser;
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
        if (file) {
            const reader = new FileReader();
            reader.readAsText(file, "UTF-8");
            reader.onload = (evt) => {
                const parsedData = this.csvParser.parse(evt.target.result);
                console.log(parsedData);
                // Qui puoi fare ulteriori operazioni con i dati importati
            };
            reader.onerror = (evt) => console.error("Errore nella lettura del file", evt);
        }
    }
}

