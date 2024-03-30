export class DataSetHandler {
    constructor(dataSetsUIManager) {
        this.dataSets = []; // Aggiungi questa linea
        this.dataSetsUIManager = dataSetsUIManager;
        this.dataSection = document.getElementById('data-content-section');
        this.addButton = document.getElementById('add-data-set'); // Aggiungi questa inizializzazione
        this.setupEventListeners();
        this.dataSetsUIManager.registerDataUpdateCallback(this.updateAllDataSets.bind(this));
    }

    setupEventListeners() {
        this.addButton.addEventListener('click', () => this.addDataSet());
    }

    addDataSet() {
        const dataSetContainer = document.createElement('div');
        dataSetContainer.className = 'data-set';

        const headerInput = document.createElement('input');
        headerInput.type = 'text';
        headerInput.className = 'header-input';
        headerInput.placeholder = 'Inserisci l\'header';
        
        const contentP = document.createElement('p');
        contentP.className = 'data-content';

        dataSetContainer.appendChild(headerInput);
        dataSetContainer.appendChild(contentP);
        this.dataSection.appendChild(dataSetContainer);

        this.dataSets.push({headerInput, contentP});

        headerInput.addEventListener('input', () => {
            this.dataSetsUIManager.updateContentBasedOnHeader(headerInput.value, contentP);
        });
    }

    updateAllDataSets() {
        this.dataSets.forEach(({ headerInput, contentP }) => {
            const headerValue = headerInput.value;
            console.log("Aggiornamento per l'header:", headerValue);
            if (headerValue) {
                this.dataSetsUIManager.updateContentBasedOnHeader(headerValue, contentP);
            }
        });
    }
}
