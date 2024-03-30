export class Message {
    constructor(sequenceNumber) {
        this.sequenceNumber = sequenceNumber;
        this.variants = [{ text: "" }]; // Inizializziamo con un oggetto che rappresenta una variante vuota
        this.currentVariantIndex = 0;
    }

    addVariant() {
        if (this.variants.length < 5) {
            this.variants.push({ text: "" });
            this.currentVariantIndex = this.variants.length - 1;
            this.renderVariants(); // Raggiorna la visualizzazione delle varianti
        }

        
    }

    nextVariant() {
        this.currentVariantIndex = (this.currentVariantIndex + 1) % this.variants.length;
        this.renderVariants(); // Aggiorna la visualizzazione per mostrare la variante corrente
    }

    render() {
        const messagesSection = document.getElementById('messages-section');

        const messageContainer = document.createElement('div');
        messageContainer.className = 'message-container';

        const messageSequenceNumber = document.createElement('p');
        messageSequenceNumber.className = 'message-sequence-number';
        messageSequenceNumber.textContent = `${this.sequenceNumber}.`;

        const messageVariant = document.createElement('textarea');
        messageVariant.className = 'message-variant';
        messageVariant.addEventListener('input', () => {
            // Aggiorna il testo della variante corrente con il contenuto della textarea
            this.variants[this.currentVariantIndex].text = this.messageVariant.value;
        });

        const messageButtonsContainer = document.createElement('div');
        messageButtonsContainer.className = 'message-buttons-container';

        const addMessageVariantButton = document.createElement('button');
        addMessageVariantButton.className = 'add-message-variant';
        addMessageVariantButton.textContent = '+';
        addMessageVariantButton.addEventListener('click', () => this.addVariant());

        const nextMessageVariantButton = document.createElement('button');
        nextMessageVariantButton.className = 'next-message-variant';
        nextMessageVariantButton.textContent = '>';
        nextMessageVariantButton.addEventListener('click', () => this.nextVariant());

        const messageVariantCount = document.createElement('p');
        messageVariantCount.className = 'message-variant-count';
        messageVariantCount.textContent = `${this.currentVariantIndex + 1} / ${this.variants.length}`;

        messageButtonsContainer.appendChild(addMessageVariantButton);
        messageButtonsContainer.appendChild(nextMessageVariantButton);

        messageContainer.appendChild(messageSequenceNumber);
        messageContainer.appendChild(messageVariant);
        messageContainer.appendChild(messageButtonsContainer);
        messageContainer.appendChild(messageVariantCount);

        messagesSection.appendChild(messageContainer);

        this.messageVariant = messageVariant; // Salva riferimento per aggiornamenti futuri
        this.messageVariantCount = messageVariantCount; // Salva riferimento per aggiornamenti futuri
    }

    renderVariants() {
        // Aggiorna l'area di testo e il contatore delle varianti
        this.messageVariant.value = this.variants[this.currentVariantIndex].text;
        this.messageVariantCount.textContent = `${this.currentVariantIndex + 1} / ${this.variants.length}`;
    }
}

