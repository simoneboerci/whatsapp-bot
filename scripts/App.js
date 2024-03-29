import { CSVImportHandler } from '../handlers/CSVImportHandler.js';
import { DataSetHandler } from '../handlers/DataSetHandler.js';
import { MessageHandler } from '../handlers/MessageHandler.js';
import { SendHandler } from '../handlers/SendHandler.js';

class App {
    constructor() {
        new CSVImportHandler();
        new DataSetHandler();
        new MessageHandler();
        new SendHandler();
        // Altri handler possono essere inizializzati qui
    }
}

new App();
