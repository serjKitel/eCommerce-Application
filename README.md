# eCommerce Application 🛍️🌐

Welcome to our eCommerce application! This platform replicates real-world shopping experiences in a digital environment 🏪. It's a comprehensive online shopping portal that provides an interactive and seamless experience to users. From product discovery to checkout, the application ensures a smooth journey for the user, enhancing their engagement and boosting their purchasing confidence 🚀.

Users can browse through a vast range of products 📚👗👟, view detailed descriptions, add their favorite items to the basket 🛒, and proceed to checkout 💳. It includes features such as user registration and login 📝🔐, product search 🔍, product categorization, and sorting to make the shopping experience more streamlined and convenient.

An important aspect of our application is that it's responsive 📲, ensuring it looks great on various devices with a minimum resolution of 390px. This feature makes the shopping experience enjoyable, irrespective of the device users prefer.

Key pages in the application include:

- Login and Registration pages 🖥️
- Main page 🏠
- Catalog Product page 📋
- Detailed Product page 🔎
- User Profile page 👤
- Basket page 🛒
- About Us page 🙋‍♂️🙋‍♀️

The application is powered by CommerceTools 🌐, a leading provider of commerce solutions for B2C and B2B enterprises. CommerceTools offers a cloud-native, microservices-based commerce platform that enables brands to create unique and engaging digital commerce experiences.

## Technology Stack 💻📚

1. Application is written in Typescript 📘.
2. npm version "9.5.1" is used 📘.
3. node version v18.16.0 is used 📘.

### Key Pages

1. **Login Page 🖥️🔐**  
   The Login page is the user's entry point to the application. It will have fields for entering the username and password. There will be validation checks in place to ensure that all fields are filled before allowing the user to submit the form. On successful login, the user will be directed to the main page of the application.

2. **Registration Page 🖥️📝**  
   The Registration page will allow new users to sign up for the application. It will have fields for entering user information including a username, email, and password. Once the user submits the form after entering all the necessary details, they will be registered and directed to the login page.

3. **Main Page 🏠**  
   The Main Page is the core of the application. This is where the users can browse the catalog of products. The page will provide a user-friendly interface that allows users to easily navigate through different categories and products. Centralized Navigation is a key feature on this page, and will include links to all functional pages of the application. Each link should redirect the user correctly to the corresponding page without any errors. The main page also displays active promo codes.

4. **Catalog Product Page 📋**  
   The Catalog Product page will display a list of products in a specific category. The products will be displayed as interactive cards with a picture and essential details about the product. Users can click on these cards to get more detailed information about the product.

5. **Detailed Product Page 🔎**  
   The Detailed Product page is where the user can view detailed information about a specific product. It will display an image of the product, a detailed description, the price, and the available options for the product. Users will be able to add the product to their basket from this page.

6. **User Profile Page 👤**  
   The User Profile page will display the personal information of the user. This includes their name, date of birth, and a list of their addresses. This page will also provide an interface for users to edit their personal details and addresses.

7. **Basket Page 🛒**  
   The Basket page is where users can view the products they have added to their basket. They can increase or decrease the quantity of each item or remove items from the basket. The page will also display the subtotal and total prices and provide an option for the users to proceed to the checkout page.

8. **About Us Page 🙋‍♂️🙋‍♀️**  
   The About Us page will give a brief introduction to the development team. It will highlight each member's contributions to the project and provide personal details such as names, roles, short bios, relevant photos, and GitHub profile links. The page will also feature and link the RS School logo, allowing users to learn more about the educational program.

### Usage instructions for each script 

1. "start": This script starts the development server using webpack serve. It opens the application in the default browser and uses the configuration specified in webpack.config.js with the environment variable mode=dev.
2. "build": This script triggers the Webpack build process in production mode using the configuration from webpack.config.js. It sets the environment variable mode=prod, which optimizes the build for production deployment.
3. "lint": This script runs ESLint (a JavaScript linter) on all the TypeScript files (.ts) within the project directory and its subdirectories. ESLint checks for code style and potential errors based on the linting rules specified in your ESLint configuration file.
4. "lint-fix": This script not only identifies linting issues but also automatically tries to fix the simple issues, like formatting or indentation, that can be resolved automatically.
5. "format": This script uses Prettier, a code formatter, to format the TypeScript files (.ts) in the src directory and its subdirectories. Prettier ensures consistent and uniform code formatting across the project, adhering to the rules defined in Prettier configuration.
6. "test": This script runs Jest, a popular testing framework for JavaScript and TypeScript, to execute the test cases within project. Jest will look for test files with the .test.ts or .spec.ts extensions and run them to check if application's code behaves as expected.

You can use these scripts by running npm run <script-name> in your terminal, where <script-name> is one of the script keys mentioned above. For example, npm run start to start the development server or npm run test to run the tests.

### Instructions for setting up and running locally

1. Make sure you have Node.js installed. You can check its version by running node -v command. If Node.js is not installed, then you can download it from the official Node.js website (https://nodejs.org) and install it on your system.
2. Clone the repository with the project (https://github.com/serjKitel/eCommerce-Application.git)
3. Once you have Node.js, run npm install or just npm i in the same directory as your package.json file. This will start the process of installing all the dependencies listed in the "dependencies" section of your package.json.
4. Once the dependencies are installed, you can run your project using the appropriate commands like npm start, npm run build.
