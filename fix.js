const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// The incorrect injection was: src="" + bsnl_base64 + ""
// Inside the JS template literal, it became: src="" + bsnl_base64 + ""
// So I need to replace it with: src="${bsnl_base64}"
html = html.split('"" + bsnl_base64 + ""').join('${bsnl_base64}');
html = html.split('"" + auth_base64 + ""').join('${auth_base64}');

fs.writeFileSync('index.html', html);
console.log('Fixed interpolation!');
