# My-Project-10

SVG Logo Generator

    Description

        The SVG Logo Generator is a Node.js command-line application that enables users to create a simple yet customizable logo in SVG format. Users can input their desired text, select colors, and choose a shape for the logo. The application then generates an SVG file that reflects these inputs, making it an ideal tool for developers needing quick logos for their projects without relying on a graphic designer.

    Table of Contents

	    •	Installation
	    •	Usage
        •	Walkthrough Video
	    •	Tests
	    •	License
	    •	Contributing
	    •	Questions

    Installation

        To install and run the SVG Logo Generator locally, follow these steps:

	        1.	Clone the Repository:
                    Clone the repository to your local machine using the following command:
                    git clone https://github.com/JimiL555/My-Project-10.git

            2.	Navigate to the Project Directory:
                    Move into the project directory: cd My-Project-10

            3.	Install Dependencies:
                    Install the necessary npm packages by running: npm install
    
    Usage

        To generate your custom SVG logo, run the following command: node index.js

            You will be prompted to provide the following details:

	        •	Text: Enter up to three characters that will appear on the logo.
	        •	Text Color: Specify the text color using either a color keyword (e.g., red) or a hexadecimal value (e.g., #ff0000).
	        •	Shape: Select the shape of the logo from the available options: Circle, Triangle, or Square.
	        •	Shape Color: Specify the shape color using either a color keyword or a hexadecimal value.

        Once you’ve provided all inputs, the application will generate an SVG file named logo.svg in the project directory. You can view this file in any web browser or image viewer that supports SVG files.

    Example Output

        If you entered the following inputs:

	        •	Text: SVG
	        •	Text Color: #ffffff
	        •	Shape: Circle
	        •	Shape Color: #008000

        The generated logo.svg would be a green circle with white text reading “SVG.”

    Walkthrough Video

        A video walkthrough demonstrating how to use the SVG Logo Generator and showing the tests passing can be viewed here:

            Watch the Walkthrough Video: https://vscode.dev/github/JimiL555/My-Project-10/blob/main/HowToVideo/HowToVideo-Project_10.mov

    Tests

        This project includes unit tests for the shape classes to ensure they generate the correct SVG markup. The tests are written using Jest.

            To run the tests, execute the following command: npm test
                The tests validate that the shapes (Circle, Triangle, Square) are rendered correctly according to the provided colors.

    License

        This project is licensed under the MIT License. You can view the full license in the LICENSE file provided in this repository.

    Contributing

        If you would like to contribute to this project, please follow these steps:

	        1.	Fork the repository.
	        2.	Create a new branch with your feature (git checkout -b feature/YourFeature).
	        3.	Commit your changes (git commit -m 'Add Your Feature').
	        4.	Push to the branch (git push origin feature/YourFeature).
	        5.	Open a pull request, and we will review your changes.

    Questions

        If you have any questions, issues, or suggestions, feel free to reach out:

	        •	GitHub: JimiL555
	        •	Email: liapis.jsl@gmail.com
            
    My-Project-10 GitHub Repo HTTPS: https://github.com/JimiL555/My-Project-10.git



