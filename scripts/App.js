import { CSVParser } from './utils/CSVParser.js';
import { CSVImportHandler } from './handlers/CSVImportHandler.js';

document.addEventListener('DOMContentLoaded', () => {
    const csvParser = new CSVParser();
    new CSVImportHandler(csvParser);
});
