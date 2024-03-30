export class SendHandler {
    constructor(dataSetsUIManager, messageManager, messageSender) {
        this.dataSetsUIManager = dataSetsUIManager;
        this.messageManager = messageManager;
        this.messageSender = messageSender;
        this.sendButton = document.getElementById('send-button');
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.sendButton.addEventListener('click', () => this.sendMessage());
    }

    sendMessage() {
        // Utilizza i riferimenti a dataSetsUIManager e messageManager per ottenere i dati necessari
        const contacts = this.dataSetsUIManager.getContacts(); // Assumi che questa funzione restituisca i contatti importati
        this.messageManager.sendMessages(contacts, this.messageSender);
    }
}
