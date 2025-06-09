function doPost(e) {
  const sheet = SpreadsheetApp.openById('1aAegewXKAcx1QBGDoQHcOJFSiDszZG3jqPTqFr9sKl8').getSheetByName('Sheet1');
  sheet.appendRow([
    new Date(),
    e.parameter.fullName || '',
    e.parameter.mailID || '',
    e.parameter.mobile || '',
    e.parameter.service || '',
    e.parameter.message || ''
  ]);
  const jsonResponse = JSON.stringify({ status: 'success' });
  return ContentService
    .createTextOutput(jsonResponse)
    .setMimeType(ContentService.MimeType.JSON);
}
