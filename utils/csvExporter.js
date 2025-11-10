const { createObjectCsvWriter } = require('csv-writer');
const path = require('path');

exports.writeCsv = async (filePath, headers, records) => {
  const writer = createObjectCsvWriter({
    path: filePath,
    header: headers
  });
  await writer.writeRecords(records);
  return filePath;
};
