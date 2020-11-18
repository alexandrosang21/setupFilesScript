const fs = require('fs');
const folderName = process.argv[2] || 'ProjectFolder';

const htmlDoc = `<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    
    <script src="app.js"></script>
</body>
</html>`;
try {
	fs.mkdirSync(`${folderName}`);
	fs.writeFileSync(`${folderName}/index.html`, `${htmlDoc}`);
	fs.writeFileSync(`${folderName}/app.css`, '');
	fs.writeFileSync(`${folderName}/app.js`, '');
} catch (e) {
	console.log('Something is wrong !');
	console.log('e');
}
