export class SendHandler {
    constructor() {
        this.sendButton = document.getElementById('send-button');
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.sendButton.addEventListener('click', () => this.sendMessage());
    }

    sendMessage() {
        console.log("Invio dei messaggi...");
        // Implementa la logica di invio messaggio qui
    }
}
