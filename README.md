# E-commerce Application

## This E-commerce application manages products in a database. Each product belongs to one category, and can have multiple tags. This allows the user to effectively create, manage, update, and delete products, tags, and categories in the system. E-Commerce Application is great for business owners, managers, and sales departments. The backend of the application was created using Sequelize, Node.js, and Express.js.



![Screenshot](./Develop/assets/Screenshot%202023-10-21%20at%202.54.32%20PM.png)
![Screenshot](./Develop/assets/Screenshot%202023-10-21%20at%202.55.33%20PM.png)

## Installation

To install and run this application, follow these steps:

Clone the respository to your local machine using `git@github.com:CoreyPhillipsOfficial/e-commerce-application.git`<br>
Navigate to the project directory: `cd e-commerce-backend`<br>
Install the required packes using npm: `npm install`<br>
Set up the MySQL database by executing the proper SQL script<br>
Start the application: `npm run start`<br>
Now you've successfully installed nd started the e-commerce application! You can now efficiently manage an entire database of products for your company.

## Usage

To use the application, follow these steps:

Set up the database by running the following command in your MySQL shell: `source db/schema.sql`<br>
Start the server by running the following command in your terminal: `npm run start`<br>
Use the provided API routes to interact with the application. Some example routes include:<br>
GET /api/categories: Get all cateogries in the database<br>
POST /api/tags: Update a tag in the database<br>
DELETE /api/products: Delete a product from the database<br>

Please note that this is a backend application, so you will need to use a tool like Insomnia or Postman to make requests to the API endpoints.


## Credits

I receieved guidance on this application from my instructor, JD Tadlock in class. I also referred to ChatGPT to help me figure out where my syntax was incorrect. Rene Trevino also helped me understand the conepts used in this application during a tutoring session.

## License

Please refer to the LICENSE in the repo.