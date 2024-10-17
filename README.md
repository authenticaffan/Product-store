# Live Preview

click here https://product-store-wpm2.onrender.com/

# Product Store

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) project that allows users to add, update, and delete products with details such as name, price, and images. This app demonstrates basic CRUD (Create, Read, Update, Delete) operations.

## Features

- Add products with name, image, and price
- Update product details
- Delete products
- View a list of all products
- Responsive design

## Tech Stack

- **Frontend**: React.js, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

## Installation

### Prerequisites

- Node.js
- MongoDB (installed locally or using a cloud service like MongoDB Atlas)

### Steps to Run Locally

1. Clone the repository:

\`\`\`bash
git clone https://github.com/authenticaffan/Product-store.git
cd product-store
\`\`\`

2. Install the dependencies for both frontend and backend:

\`\`\`bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
\`\`\`

3. Set up environment variables. Create a \`.env\` file in the \`backend\` directory with the following:

\`\`\`
MONGO_URI=mongodb+srv://root:root@cluster0.h2nir.mongodb.net/products?retryWrites=true&w=majority&appName=Cluster0
PORT = 5000
\`\`\`

4. Start the development server:

\`\`\`bash
# Backend (in backend folder)
npm start

# Frontend (in frontend folder)
npm start
\`\`\`

The app should now be running locally at \`http://localhost:3000\`.

## API Endpoints

### Products

- **GET /api/products**: Get all products
- **POST /api/products**: Add a new product
- **PUT /api/products/:id**: Update a product by ID
- **DELETE /api/products/:id**: Delete a product by ID

## Folder Structure

\`\`\`
/backend
   /controllers
   /models
   /routes
   /config
   server.js
/frontend
   /src
      /components
      /pages
      /styles
   App.js
   index.js
\`\`\`

## Future Improvements

- Add authentication for product management
- Add product search and filtering options
- Integrate payment gateway for e-commerce functionality

## License

This project is licensed under the MIT License.

# Saving the documentation to a markdown file
file_path = "/mnt/data/README.md"
with open(file_path, "w") as file:
    file.write(documentation)

file_path
