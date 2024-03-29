class Contact {
    constructor(phoneNumber, additionalData = {}) {
        this.phoneNumber = phoneNumber; // Numero di telefono obbligatorio
        this.additionalData = additionalData; // Dati aggiuntivi, come nome, cognome, ecc.
    }
}
