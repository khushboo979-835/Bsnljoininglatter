const fs = require('fs');
const bsnl = fs.readFileSync('bsnl_.png').toString('base64');
const auth = fs.readFileSync('authorised.jpeg').toString('base64');
fs.writeFileSync('images_base64.js', 'const bsnl_base64="data:image/png;base64,' + bsnl + '";\nconst auth_base64="data:image/jpeg;base64,' + auth + '";\n');

let html = fs.readFileSync('index.html', 'utf8');
if (!html.includes('images_base64.js')) {
    html = html.replace('<script src="pamphlet_data.js"></script>', '<script src="images_base64.js"></script>\n    <script src="pamphlet_data.js"></script>');
    html = html.replace(/bsnl_\.png/g, '" + bsnl_base64 + "');
    html = html.replace(/authorised\.jpeg/g, '" + auth_base64 + "');
    fs.writeFileSync('index.html', html);
    console.log("Replaced images with base64!");
}
