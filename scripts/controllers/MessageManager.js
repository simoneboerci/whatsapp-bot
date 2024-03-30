import { Message } from '../models/Message.js';

export class MessageManager {
    constructor() {
        this.messages = [];
        document.getElementById('add-message').addEventListener('click', () => this.addMessage());
    }

    addMessage() {
        const newMessage = new Message(this.messages.length + 1);
        this.messages.push(newMessage);
        newMessage.render(); // Genera e aggiunge l'HTML del messaggio alla pagina
    }

    // Potenzialmente altri metodi per coordinare l'interazione tra messaggi
}