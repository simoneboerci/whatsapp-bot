export class CSVImportHandler {
    constructor(csvParser, dataSetsUIManager) {
        this.csvParser = csvParser;
        this.dataSetsUIManager = dataSetsUIManager;
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
                const phoneHeader = document.getElementById('phone-header-input').value;
                if (!phoneHeader) {
                    console.error("L'intestazione del numero di telefono non è stata specificata.");
                    return;
                }
    
                const contacts = this.csvParser.parse(evt.target.result, phoneHeader);
                console.log(contacts);
                this.displayFirstFourPhoneNumbers(contacts);
                this.dataSetsUIManager.updateContacts(contacts);
            };
            reader.onerror = (evt) => console.error("Errore nella lettura del file", evt);
        }
    }

    displayFirstFourPhoneNumbers(contacts) {
        const phoneNumbers = contacts.map(contact => contact.phoneNumber).slice(0, 4);
        const displayText = phoneNumbers.join(', ') + (contacts.length > 4 ? ', ...' : '');
        document.getElementById('data-content-phones').textContent = displayText;
    }
    
}

