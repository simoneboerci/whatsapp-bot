class Message {
    constructor(variants = []) {
        this.variants = variants; // Array di stringhe, ogni elemento è una variante del messaggio
    }

    // Aggiunge una nuova variante al messaggio
    addVariant(variant) {
        this.variants.push(variant);
    }

    // Seleziona casualmente una variante del messaggio
    getRandomVariant() {
        if (this.variants.length === 0) return ''; // Se non ci sono varianti, ritorna stringa vuota
        const randomIndex = Math.floor(Math.random() * this.variants.length);
        return this.variants[randomIndex];
    }
}
