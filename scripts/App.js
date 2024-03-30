import { DataSetsUIManager } from './controllers/DataSetsUIManager.js';
import { MessageManager } from './controllers/MessageManager.js';

import { CSVImportHandler } from './handlers/CSVImportHandler.js';
import { DataSetHandler } from './handlers/DataSetHandler.js';
import { SendHandler } from './handlers/SendHandler.js';

import { CSVParser } from './utils/CSVParser.js';
import { WhatsAppMessageSender } from './utils/WhatsAppMessageSender.js';

document.addEventListener('DOMContentLoaded', () => {
    const csvParser = new CSVParser();
    const dataSetsUIManager = new DataSetsUIManager();
    const messageManager = new MessageManager();

    const csvImportHandler = new CSVImportHandler(csvParser, dataSetsUIManager); // Assumi modifiche per accettare dataSetsUIManager
    const dataSetHandler = new DataSetHandler(dataSetsUIManager);
    const sendHandler = new SendHandler(dataSetsUIManager, messageManager, new WhatsAppMessageSender());
});

