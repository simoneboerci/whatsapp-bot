import { Contact } from '../models/Contact.js';

export class CSVParser {
    parse(csvString, phoneHeader) {
        const lines = csvString.split(/\r\n|\n|\r/);
        const contacts = [];
        let headers = lines[0].split(";").map(header => header.trim());
        
        // Rimuove eventuali intestazioni vuote alla fine
        while (headers[headers.length - 1] === "" && headers.length > 0) {
            headers.pop();
        }
        
        // Cerca l'indice dell'intestazione per il numero di telefono dopo aver pulito le intestazioni
        const phoneIndex = headers.findIndex(header => header.toLowerCase() === phoneHeader.trim().toLowerCase());
        if (phoneIndex === -1) {
            console.error("Intestazione del numero di telefono non trovata.");
            return [];
        }

        for (let i = 1; i < lines.length; i++) {
            let data = lines[i].split(";").map(cell => cell.trim()).slice(0, headers.length);
            
            if (data.length < headers.length) {
                // Opzionalmente, gestisci il caso di dati mancanti
                continue;
            }

            const additionalData = headers.reduce((acc, header, index) => {
                if (index !== phoneIndex) {
                    acc[header] = data[index];
                }
                return acc;
            }, {});

            const contact = new Contact(data[phoneIndex], additionalData);
            contacts.push(contact);
        }

        return contacts;
    }
}

