const inquirer = 
require('inquirer');;
const fs = require('fs');

inquirer.prompt([
    { type: 'input', name: 'text', message: 'Enter up to three characters for the logo:' },
    { type: 'input', name: 'textColor', message: 'Enter text color (keyword or hex):' },
    { type: 'list', name: 'shape', message: 'Choose a shape:', choices: ['Circle', 'Triangle', 'Square'] },
    { type: 'input', name: 'shapeColor', message: 'Enter shape color (keyword or hex):' }
]).then(answers => {
    // Destructure user input
    const { text, textColor, shape, shapeColor } = answers;

    // Create the logo
    const createLogo = (text, textColor, shape, shapeColor) => {
        let shapeElement = '';

        // Generate the appropriate SVG shape
        if (shape === 'Circle') {
            shapeElement = `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`;
        } else if (shape === 'Triangle') {
            shapeElement = `<polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}" />`;
        } else if (shape === 'Square') {
            shapeElement = `<rect x="70" y="20" width="160" height="160" fill="${shapeColor}" />`;
        }

        // Return the complete SVG string
        return `
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
            ${shapeElement}
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>
        `;
    };

    // Generate the logo
    const logo = createLogo(text, textColor, shape, shapeColor);

    // Write the logo to a file
    fs.writeFileSync('logo.svg', logo);

    // Output success message
    console.log('Generated logo.svg');
});