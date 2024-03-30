export class DataSetsUIManager {
    constructor() {
        this.contacts = [];
        this.onDataUpdateCallbacks = [];
    }

    updateContentBasedOnHeader(header, contentElement) {

        if (!Array.isArray(this.contacts)) {
            console.error("Contacts is not an array.");
            return;
        }

        const matchedValues = this.contacts.map(
            contact => contact.additionalData[header.trim()] ?? 'N/A'
        ).slice(0, 4);

        if (matchedValues.length > 0) {
            contentElement.textContent = matchedValues.join(', ') + (matchedValues.length === 4 ? ', ...' : '');
        } else {
            contentElement.textContent = 'Header non riconosciuto o nessun dato disponibile';
        }
    }

    // Registra un callback da invocare quando i dati vengono aggiornati
    registerDataUpdateCallback(callback) {
        this.onDataUpdateCallbacks.push(callback);
    }

    // Invoca tutti i callback registrati
    notifyDataUpdated() {
        this.onDataUpdateCallbacks.forEach(callback => callback(this.contacts));
    }

    // Aggiorna i contatti e notifica i cambiamenti
    updateContacts(newContacts) {
        this.contacts = newContacts;
        this.notifyDataUpdated();
    }
}
