const fs = require('fs');
const path = require('path');

// Read components
const header = fs.readFileSync(path.join(__dirname, 'components/header.html'), 'utf8');
const footer = fs.readFileSync(path.join(__dirname, 'components/footer.html'), 'utf8');

// Find all HTML files in root
const files = fs.readdirSync(__dirname).filter(file => file.endsWith('.html'));

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let originalContent = content;

    // Replace header
    content = content.replace(/(<!-- ht-header-area start -->[\s\S]*?<div class="ht-offcanvas-overlay"><\/div>)/, header);
    
    // Replace footer
    content = content.replace(/(<!-- ht-footer-area-start -->[\s\S]*?<!-- ht-footer-area-end -->)/, footer);

    if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated ${file}`);
    }
});

console.log('Build complete! All HTML files synchronized with components.');
