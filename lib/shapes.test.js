const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

const shape = new Circle();
shape.setColor("red");
expect(shape.render()).toEqual('<circle cx="150" cy="150" r="100" fill="red" />');

const shape = new Square();
shape.setColor("green");
expect(shape.render()).toEqual('<rect x="50" y="50" width="200" height="200" fill="green" />');

