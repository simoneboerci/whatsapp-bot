export class WhatsAppUrlGenerator {
    generateUrl(phoneNumber, message) {
        const encodedMessage = encodeURIComponent(message);
        return `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    }
}
