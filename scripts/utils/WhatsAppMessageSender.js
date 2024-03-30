import { WhatsAppUrlGenerator } from './WhatsAppUrlGenerator.js';

export class WhatsAppMessageSender {
    constructor() {
        this.urlGenerator = new WhatsAppUrlGenerator();
    }

    sendMessage(phoneNumber, message) {
        const url = this.urlGenerator.generateUrl(phoneNumber, message);
        window.open(url, '_blank');
    }
}