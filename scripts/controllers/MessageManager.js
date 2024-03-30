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

    getMessages() {
        return this.messages.map(message => message.getRandomVariantText());
    }

    sendMessages(contacts, sender) {
        let index = 0; // Inizia dal primo contatto
    
        const openNextMessage = () => {
            if (index < contacts.length) {
                const contact = contacts[index];
                const messageText = this.messages[index % this.messages.length].getRandomVariantText();
                sender.sendMessage(contact.phoneNumber, messageText);
    
                index++; // Passa al prossimo contatto
                setTimeout(openNextMessage, 3000); // Aspetta 3 secondi prima di aprire il prossimo messaggio
            }
        };
    
        openNextMessage(); // Inizia l'invio dei messaggi
    }
}
