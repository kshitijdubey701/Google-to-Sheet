# Google-to-Sheet
# Contact Form with Google Apps Script Integration

This project is a Bootstrap 5-based contact form that submits form data directly to a Google Sheet using Google Apps Script.

## 🚀 Features
- Responsive form using Bootstrap 5.
- Validates fields using Bootstrap's built-in validation.
- Sends data to a Google Sheet via Google Apps Script.
- No CORS errors (uses URL-encoded form data).
- Displays success or error messages dynamically.

## 📁 Files
- `index.html` – Main HTML file with form and JavaScript logic.
- `README.md` – This documentation file.

## ⚙️ Setup

### 1️⃣ Google Apps Script
1. Open [Google Apps Script](https://script.google.com/).
2. Create a new project and paste the following code:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID').getSheetByName('Sheet1');
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



---

Would you like to include screenshots or GIFs in the README? Let me know – I can add those too! 🚀
