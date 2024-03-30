export class CSVParser {
    parse(csvString) {
        const lines = csvString.split(/\r\n|\n|\r/);
        const result = [];
        const headers = lines[0].split(",");

        for (let i = 1; i < lines.length; i++) {
            const obj = {};
            const currentline = lines[i].split(",");

            if (currentline.length === headers.length) {
                headers.forEach((header, j) => {
                    obj[header.trim()] = currentline[j].trim();
                });
                result.push(obj);
            }
        }

        return result;
    }
}
