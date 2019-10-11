var fs = require('fs');
var src = './src';
var scss = './src/scss';
var main = './src/scss/style.scss';

if (!fs.existsSync(src)) {
    fs.mkdirSync(src, (error) => {
        if (error) throw error;
        console.info('Main src folder not found, folder was created.')
    });
}

if (!fs.existsSync(scss)) {
    fs.mkdirSync(scss, (error) => {
        if (error) throw error;
        console.info('Main scss folder not found, folder was created.')
    });
}

if (!fs.existsSync(main)) {
    fs.writeFileSync(main, '', (error) => {
        if (error) throw error;
        console.info('Main scss file not found, file was created.')
    });
}