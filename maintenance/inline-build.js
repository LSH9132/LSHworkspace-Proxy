const fs = require('node:fs');
const path = require('node:path');

const buildDir = path.resolve(__dirname, 'build');
const indexPath = path.join(buildDir, 'index.html');
const cssPath = path.join(buildDir, 'static', 'css', 'main.*.css');
const jsPath = path.join(buildDir, 'static', 'js', 'main.*.js');

let indexHtml = fs.readFileSync(indexPath, 'utf8');

// CSS 파일 인라인화
const cssFile = fs.readdirSync(path.join(buildDir, 'static', 'css')).find(file => file.startsWith('main') && file.endsWith('.css'));
const cssContent = fs.readFileSync(path.join(buildDir, 'static', 'css', cssFile), 'utf8');
indexHtml = indexHtml.replace(
    /<link href="\/static\/css\/main\..*\.css" rel="stylesheet">/,
    `<style>${cssContent}</style>`
);

// JS 파일 인라인화
const jsFile = fs.readdirSync(path.join(buildDir, 'static', 'js')).find(file => file.startsWith('main') && file.endsWith('.js'));
const jsContent = fs.readFileSync(path.join(buildDir, 'static', 'js', jsFile), 'utf8');
indexHtml = indexHtml.replace(
    /<script defer="defer" src="\/static\/js\/main\..*\.js"><\/script>/,
    `<script>${jsContent}</script>`
);

// 새로운 HTML 파일 저장
fs.writeFileSync(path.join(buildDir, 'inline-index.html'), indexHtml);

console.log('Inline HTML 파일 생성 완료!');
