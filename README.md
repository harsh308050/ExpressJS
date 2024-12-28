# Express.js Basic Concepts

This project demonstrates the basic concepts of building a web application using Express.js. It includes routing, serving static files, and handling different HTTP methods.

## Project Structure

- **ExpressJS/Basic/index.js**: The main server file that sets up the Express server, defines routes, and serves HTML pages.
- **ExpressJS/Basic/index.html**: The HTML file that serves as the home page of the website.
- **ExpressJS/Basic/about.html**: An HTML file for the about page.
- **ExpressJS/Basic/contact.html**: An HTML file for the contact page.

## Features

- **Routing**: Handles different routes for home, about, and contact pages.
- **Static File Serving**: Serves static files like HTML, CSS, and images from the server.
- **Dynamic Content**: Responds to different HTTP requests with appropriate content.

## Getting Started

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/harsh308050/ExpressJS.git
   cd your-repo-name
   ```

2. **Install dependencies**:
   Make sure you have Node.js installed. Then, run:
   ```bash
   npm install express
   ```

3. **Start the server**:
   Run the following command to start the Express server:
   ```bash
   node ExpressJS/Basic/index.js
   ```

4. **Access the application**:
   Open your web browser and go to `http://localhost:3000/home` to view the home page.

## Commands

- **Start the server**: 
  ```bash
  node ExpressJS/Basic/index.js
  ```

- **Install dependencies**: 
  ```bash
  npm install express
  ```

- **Run the application** (if you have a script in `package.json`):
  ```bash
  npm start
  ```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.



# Express.js Form Handling

This project is a simple Express.js application that demonstrates how to handle form submissions using both GET and POST methods. The application serves a web page with a form that allows users to sign up with their details.

## Project Structure

- **ExpressJS/FormHandling/index.js**: The main server file that sets up the Express server and handles routes for serving the HTML form and processing form submissions.
- **ExpressJS/FormHandling/index.html**: The HTML file that contains the form for user input.
- **ExpressJS/Basic/index.html**: A basic HTML file for the home page of the website.

## Features

- **GET Method**: Submits form data via the URL query string.
- **POST Method**: Submits form data in the request body.
- **Dynamic Form Display**: Users can toggle between GET and POST forms.

## Getting Started

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/harsh308050/ExpressJS.git
   cd your-repo-name
   ```

2. **Install dependencies**:
   Make sure you have Node.js installed. Then, run:
   ```bash
   npm install express
   ```

3. **Start the server**:
   Run the following command to start the Express server:
   ```bash
   
   ```

4. **Access the application**:
   Open your web browser and go to `http://localhost:3000/form` to view the form.

## Commands

- **Start the server**: 
  ```bash
  node ExpressJS/FormHandling/index.js
  ```

- **Install dependencies**: 
  ```bash
  npm install express --save
  ```

- **Run the application** (if you have a script in `package.json`):
  ```bash
  npm start
  ```
