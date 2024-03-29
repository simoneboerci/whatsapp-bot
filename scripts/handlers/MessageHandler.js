export class MessageHandler {
    constructor() {
        this.messagesContainer = document.getElementById('messages-container');
        this.addMessageButton = document.getElementById('add-message');
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.addMessageButton.addEventListener('click', () => this.addMessage());
    }

    addMessage() {
        // Qui potresti aggiungere la logica per aggiungere un'interfaccia per nuovi messaggi
        const messageElement = document.createElement('textarea');
        messageElement.placeholder = 'Inserisci il messaggio qui...';
        this.messagesContainer.appendChild(messageElement);
    }
}
